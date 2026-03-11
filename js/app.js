/* ============================================================
   Mi Manual ALM — App Controller
   NelSystems | Architecture: Vanilla JS MPA-in-SPA
   Security: CSP-safe, no eval, XSS-sanitized output
   ============================================================ */
'use strict';

/* ── CONSTANTS ─────────────────────────────────────────────── */
const LS_KEY_PROGRESS = 'alm_progress_v1';
const LS_KEY_SCROLL   = 'alm_scroll_v1';

/* ── DOM REFS ───────────────────────────────────────────────── */
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

/* ── SECURITY: XSS-safe text setter ─────────────────────────── */
const safeText = s => String(s ?? '').replace(/[<>&"'`]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;','`':'&#96;'}[c]));

/* ── STATE ──────────────────────────────────────────────────── */
const state = {
  view: 'home',          // 'home' | 'phase'
  phaseId: null,
  sectionId: null,
  searchQuery: '',
  sidebarOpen: false,
  progress: loadProgress(),
};

/* ── PROGRESS (localStorage) ────────────────────────────────── */
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(LS_KEY_PROGRESS)) || {}; }
  catch { return {}; }
}
function saveProgress() {
  try { localStorage.setItem(LS_KEY_PROGRESS, JSON.stringify(state.progress)); }
  catch { /* storage full — graceful degradation */ }
}
function toggleCheck(phaseId, idx) {
  const k = `${phaseId}-${idx}`;
  state.progress[k] = !state.progress[k];
  saveProgress();
}
function getPhaseProgress(phaseId) {
  const phase = MANUAL_DATA.phases.find(p => p.id === phaseId);
  if (!phase) return { done: 0, total: 0 };
  const ck = phase.sections.find(s => s.type === 'checklist');
  if (!ck) return { done: 0, total: 0 };
  const total = ck.items.length;
  const done  = ck.items.filter((_, i) => state.progress[`${phaseId}-${i}`]).length;
  return { done, total, pct: total ? Math.round(done / total * 100) : 0 };
}
function getTotalProgress() {
  let done = 0, total = 0;
  MANUAL_DATA.phases.forEach(p => {
    const r = getPhaseProgress(p.id);
    done += r.done; total += r.total;
  });
  return { done, total, pct: total ? Math.round(done / total * 100) : 0 };
}

/* ── SEARCH ENGINE ──────────────────────────────────────────── */
function buildSearchIndex() {
  const idx = [];
  MANUAL_DATA.phases.forEach(phase => {
    // Phase-level entry
    idx.push({
      id: `p${phase.id}`,
      phaseId: phase.id,
      sectionId: null,
      title: phase.title,
      subtitle: phase.subtitle,
      icon: phase.icon,
      color: phase.color,
      text: `${phase.title} ${phase.subtitle} ${phase.objective} ${phase.weeks}`,
      snippet: phase.objective,
      type: 'phase'
    });

    phase.sections.forEach(sec => {
      // Collect all text from the section
      let texts = [sec.title];

      if (sec.type === 'table') {
        sec.rows.forEach(r => texts.push(...r));
        if (sec.headers) texts.push(...sec.headers);
      } else if (sec.type === 'cards') {
        sec.items.forEach(it => texts.push(it.label, it.text));
      } else if (sec.type === 'list') {
        sec.items.forEach(it => texts.push(it.title, it.text));
      } else if (sec.type === 'steps') {
        sec.steps.forEach(s => { texts.push(s.title); if (s.items) texts.push(...s.items); });
      } else if (sec.type === 'comparison') {
        texts.push(sec.sifaTitle, sec.sapTitle);
        texts.push(...(sec.sifa || []), ...(sec.sap || []), sec.note || '');
      } else if (sec.type === 'checklist') {
        texts.push(...sec.items);
      } else if (sec.type === 'zones') {
        sec.zones.forEach(z => texts.push(z.name, z.desc));
      } else if (sec.type === 'hierarchy') {
        sec.levels.forEach(l => texts.push(l.level, ...l.items));
      } else if (sec.type === 'sap-movements') {
        sec.movements.forEach(m => texts.push(m.code, m.name, m.desc));
      } else if (sec.type === 'sap-table') {
        sec.rows.forEach(r => texts.push(...r));
      }

      const combined = texts.filter(Boolean).join(' ');
      idx.push({
        id: `p${phase.id}-s${sec.id}`,
        phaseId: phase.id,
        sectionId: sec.id,
        title: sec.title,
        icon: phase.icon,
        color: phase.color,
        text: combined.toLowerCase(),
        snippet: texts.slice(1, 4).join(' › '),
        type: 'section'
      });
    });
  });
  return idx;
}
const SEARCH_INDEX = buildSearchIndex();

function search(query) {
  if (!query || query.trim().length < 2) return [];
  const q = query.trim().toLowerCase();
  const terms = q.split(/\s+/).filter(t => t.length >= 2);

  return SEARCH_INDEX
    .map(entry => {
      let score = 0;
      const tl = entry.title.toLowerCase();
      const txt = entry.text;

      terms.forEach(t => {
        if (tl.includes(t))  score += 10;
        if (txt.includes(t)) score += 1;
        if (tl.startsWith(t)) score += 5;
      });
      // Bonus: exact multi-word match
      if (txt.includes(q)) score += 8;
      if (tl.includes(q))  score += 15;

      return { ...entry, score };
    })
    .filter(e => e.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 14);
}

function markText(text, query) {
  if (!query) return safeText(text);
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return safeText(text).replace(
    new RegExp(`(${escaped.split(' ').filter(Boolean).map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi'),
    '<mark>$1</mark>'
  );
}

/* ── ROUTER ─────────────────────────────────────────────────── */
function navigate(view, phaseId = null, sectionId = null) {
  state.view = view;
  state.phaseId = phaseId;
  state.sectionId = sectionId;
  render();

  // Update URL hash (no server needed)
  const hash = view === 'home'
    ? '#home'
    : `#fase/${phaseId}${sectionId ? '/' + sectionId : ''}`;
  history.replaceState(null, '', hash);
}

function routeFromHash() {
  const h = location.hash;
  if (!h || h === '#home' || h === '#') return navigate('home');
  const parts = h.slice(1).split('/');
  if (parts[0] === 'fase' && parts[1]) {
    navigate('phase', parseInt(parts[1]), parts[2] || null);
  } else {
    navigate('home');
  }
}

/* ── RENDER: SIDEBAR ────────────────────────────────────────── */
function renderSidebar() {
  const nav = $('#phase-nav');
  nav.innerHTML = '';
  const total = getTotalProgress();

  MANUAL_DATA.phases.forEach(phase => {
    const prog = getPhaseProgress(phase.id);
    const isActive = state.phaseId === phase.id;

    const item = document.createElement('div');
    item.className = `phase-nav-item${isActive ? ' active' : ''}`;
    item.style.setProperty('--phase-color', phase.color);
    if (isActive) item.style.setProperty('--active-border', phase.color);
    if (isActive) { item.style.borderLeft = '3px solid ' + phase.color; }

    item.innerHTML = `
      <span class="phase-dot" style="background:${phase.color}"></span>
      <span class="phase-nav-label">${safeText(phase.title)}</span>
      <span class="phase-nav-weeks">${safeText(phase.weeks.split('–')[0])}</span>
    `;
    item.onclick = () => { navigate('phase', phase.id); closeSidebar(); };
    nav.appendChild(item);

    if (isActive && prog.total > 0) {
      const sub = document.createElement('div');
      sub.className = 'subnav open';
      sub.innerHTML = `
        <div class="subnav-item" onclick="showSection('${phase.id}','overview')">
          <span>📋</span> Resumen
        </div>
      `;
      phase.sections.forEach(sec => {
        const si = document.createElement('div');
        si.className = 'subnav-item';
        si.innerHTML = `<span style="font-size:0.7em;color:var(--text-muted)">${safeText(sec.id)}</span> ${safeText(sec.title.substring(0,32))}`;
        si.onclick = (e) => { e.stopPropagation(); scrollToSection(sec.id); closeSidebar(); };
        sub.appendChild(si);
      });
      nav.appendChild(sub);
    }
  });

  // Global progress
  const fill = $('#global-progress-fill');
  const txt  = $('#global-progress-txt');
  if (fill) fill.style.width = total.pct + '%';
  if (txt)  txt.textContent  = `${total.done}/${total.total} completados`;
}

/* ── RENDER: HOME ───────────────────────────────────────────── */
function renderHome() {
  const main = $('#main');
  main.innerHTML = '';
  main.scrollTop = 0;

  const total = getTotalProgress();
  const home  = document.createElement('div');
  home.id = 'home-screen';

  // Hero
  home.innerHTML = `
    <div class="home-hero fade-up">
      <img src="icons/icon-512.png" alt="NelSystems logo" loading="lazy" width="80" height="80">
      <div class="home-hero-text">
        <h1>Mi Manual <span>ALM</span></h1>
        <p>Jefatura de Almacén Local de Medicamentos · CCSS</p>
        <div class="home-hero-meta">
          <span class="hero-chip">🏥 SAP ERP Módulo MM</span>
          <span class="hero-chip">⚙️ SIGES / SIFA / SICS</span>
          <span class="hero-chip">📅 26 semanas · 6 fases</span>
          <span class="hero-chip" style="color:var(--success);border-color:rgba(43,184,122,0.3)">✓ ${total.pct}% completado</span>
        </div>
      </div>
    </div>

    <div class="section-head fade-up-2"><h2>Plan de Aprendizaje</h2></div>
  `;

  // Phase cards
  const grid = document.createElement('div');
  grid.className = 'phases-grid fade-up-2';
  MANUAL_DATA.phases.forEach(p => {
    const prog = getPhaseProgress(p.id);
    const card = document.createElement('div');
    card.className = 'phase-card';
    card.style.cssText = `--pc:${p.color};border-top:3px solid ${p.color}`;
    card.innerHTML = `
      <div class="pc-header">
        <span class="pc-icon">${safeText(p.icon)}</span>
        <span class="pc-num" style="background:${p.color}22;color:${p.color}">Fase ${p.id}</span>
        <span class="pc-weeks">${safeText(p.weeks)}</span>
      </div>
      <div class="pc-title">${safeText(p.title)}</div>
      <div class="pc-subtitle">${safeText(p.subtitle)}</div>
      <div style="display:flex;align-items:center;gap:10px;margin-top:10px">
        <div class="pc-level">Nivel ${safeText(p.level)}</div>
        ${prog.total > 0 ? `
          <div style="flex:1;height:3px;background:var(--bg-elevated);border-radius:999px;overflow:hidden">
            <div style="height:100%;width:${prog.pct}%;background:${p.color};border-radius:999px"></div>
          </div>
          <span style="font-size:0.68rem;color:var(--text-muted)">${prog.pct}%</span>
        ` : ''}
      </div>
    `;
    card.style.setProperty('--pc-color', p.color);
    card.onclick = () => navigate('phase', p.id);
    grid.appendChild(card);
  });
  home.appendChild(grid);

  // Quick reference
  home.insertAdjacentHTML('beforeend', `<div class="section-head fade-up-3"><h2>Referencia Rápida</h2></div>`);
  const qgrid = document.createElement('div');
  qgrid.className = 'quick-grid fade-up-3';
  const quickItems = [
    { icon:'💻', title:'Transacciones SAP MM', desc:'Tabla completa con todos los códigos', phase:3, sec:'3.7' },
    { icon:'🔢', title:'Tipos de Movimiento SAP', desc:'101, 122, 201, 311, 351, 551...', phase:3, sec:'3.2' },
    { icon:'📊', title:'KPIs del Almacén', desc:'Fórmulas y metas institucionales', phase:4, sec:'4.1' },
    { icon:'⚖️', title:'Ley 8204 — Controlados', desc:'Protocolo psicotrópicos/estupefacientes', phase:2, sec:'2.4' },
    { icon:'🌡️', title:'Protocolo Cadena de Frío', desc:'Rangos, alarmas y procedimiento', phase:2, sec:'2.2' },
    { icon:'🔶🔷', title:'SIFA vs. SAP', desc:'Comparativas de todos los procesos', phase:3, sec:'CMP-pedido' },
    { icon:'✅', title:'Listas de Verificación', desc:'Todas las fases con seguimiento', phase:1, sec:'CK-1' },
    { icon:'📐', title:'Ciclo PHVA', desc:'Metodología de mejora continua', phase:6, sec:'6.1' },
  ];
  quickItems.forEach(qi => {
    const card = document.createElement('div');
    card.className = 'quick-card';
    card.innerHTML = `
      <span class="qc-icon">${safeText(qi.icon)}</span>
      <div class="qc-title">${safeText(qi.title)}</div>
      <div class="qc-desc">${safeText(qi.desc)}</div>
    `;
    card.onclick = () => navigate('phase', qi.phase, qi.sec);
    qgrid.appendChild(card);
  });
  home.appendChild(qgrid);

  // About
  home.insertAdjacentHTML('beforeend', `
    <div class="section-head fade-up-3" style="margin-top:36px"><h2>Acerca del Manual</h2></div>
    <div class="fade-up-3" style="
      padding:20px;background:var(--bg-card);border:1px solid var(--border);
      border-radius:var(--radius-lg);font-size:0.83rem;color:var(--text-secondary);line-height:1.8
    ">
      <p>Manual de aprendizaje progresivo en <strong style="color:var(--text-primary)">6 fases y 26 semanas</strong>
      para la Jefatura de Almacén Local de Medicamentos de la CCSS. Cubre desde la orientación institucional
      hasta el dominio de SAP ERP Módulo MM, incluyendo comparativas completas con los sistemas SIGES, SIFA y SICS.</p>
      <p style="margin-top:10px">Elaborado para <strong style="color:var(--text-primary)">Jefaturas de ALM CCSS</strong>
      con la colaboracion del manual de Nelson Fallas Rodriguez Dev by NelSystems.</p>
      <div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
        <span class="hero-chip">📱 Funciona sin conexión (PWA)</span>
        <span class="hero-chip">🔍 Búsqueda instantánea</span>
        <span class="hero-chip">✅ Seguimiento de progreso</span>
        <span class="hero-chip">v1.0 · 2026</span>
      </div>
    </div>
  `);

  main.appendChild(home);
}

/* ── RENDER: PHASE ──────────────────────────────────────────── */
function renderPhase(phaseId) {
  const phase = MANUAL_DATA.phases.find(p => p.id === phaseId);
  if (!phase) { navigate('home'); return; }

  const main = $('#main');
  main.innerHTML = '';

  // Restore scroll position
  const scrollKey = `${LS_KEY_SCROLL}-${phaseId}`;
  const savedScroll = parseInt(sessionStorage.getItem(scrollKey) || '0');

  const view = document.createElement('div');
  view.id = 'phase-view';

  // Phase header
  const prog = getPhaseProgress(phase.id);
  view.innerHTML = `
    <div class="phase-header fade-up" style="--ph-color:${phase.color}">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:${phase.color}"></div>
      <div class="ph-row">
        <span class="ph-icon">${safeText(phase.icon)}</span>
        <div class="ph-meta">
          <div class="ph-label">FASE ${phase.id} · ${safeText(phase.weeks)}</div>
          <div class="ph-title">${safeText(phase.title)}</div>
          <div class="ph-subtitle">${safeText(phase.subtitle)}</div>
        </div>
      </div>
      <div class="ph-chips">
        <span class="ph-chip" style="color:${phase.color};border-color:${phase.color}44">Nivel ${safeText(phase.level)}</span>
        ${prog.total > 0 ? `<span class="ph-chip" style="color:var(--success);border-color:rgba(43,184,122,0.3)">${prog.pct}% completado (${prog.done}/${prog.total})</span>` : ''}
      </div>
      <div class="ph-objective" style="border-left-color:${phase.color}">
        <strong>Objetivo de la fase:</strong> ${safeText(phase.objective)}
      </div>
    </div>
  `;

  // Sections
  phase.sections.forEach((sec, i) => {
    const card = document.createElement('div');
    card.className = `sec-card fade-up`;
    card.id = `sec-${sec.id}`;
    card.style.animationDelay = `${i * 0.04}s`;

    card.innerHTML = `
      <div class="sec-card-header" onclick="toggleSection('${sec.id}')">
        <span class="sec-card-id" style="background:${phase.color}22;color:${phase.color}">${safeText(sec.id)}</span>
        <span class="sec-card-title">${safeText(sec.title)}</span>
        <svg class="sec-card-toggle" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="sec-card-body" id="sec-body-${sec.id}">
        ${renderSection(sec, phase)}
      </div>
    `;
    view.appendChild(card);
  });

  // Nav buttons
  const navIdx = MANUAL_DATA.phases.findIndex(p => p.id === phaseId);
  const prev = MANUAL_DATA.phases[navIdx - 1];
  const next = MANUAL_DATA.phases[navIdx + 1];

  const navRow = document.createElement('div');
  navRow.style.cssText = 'display:flex;gap:12px;justify-content:space-between;margin-top:24px;margin-bottom:40px';
  if (prev) {
    const btn = document.createElement('button');
    btn.style.cssText = 'display:flex;align-items:center;gap:8px;padding:10px 18px;background:var(--bg-card);border:1px solid var(--border-md);border-radius:var(--radius);font-size:0.83rem;color:var(--text-secondary);cursor:pointer;transition:all 0.2s';
    btn.innerHTML = `← Fase ${prev.id}: ${safeText(prev.title)}`;
    btn.onmouseenter = () => btn.style.color = 'var(--text-primary)';
    btn.onmouseleave = () => btn.style.color = 'var(--text-secondary)';
    btn.onclick = () => navigate('phase', prev.id);
    navRow.appendChild(btn);
  } else {
    navRow.appendChild(document.createElement('span'));
  }
  if (next) {
    const btn = document.createElement('button');
    btn.style.cssText = `display:flex;align-items:center;gap:8px;padding:10px 18px;background:${phase.color};border:none;border-radius:var(--radius);font-size:0.83rem;font-weight:600;color:#fff;cursor:pointer;transition:opacity 0.2s`;
    btn.innerHTML = `Fase ${next.id}: ${safeText(next.title)} →`;
    btn.onmouseenter = () => btn.style.opacity = '0.85';
    btn.onmouseleave = () => btn.style.opacity = '1';
    btn.onclick = () => navigate('phase', next.id);
    navRow.appendChild(btn);
  }
  view.appendChild(navRow);

  main.appendChild(view);

  // Scroll to section if specified
  if (state.sectionId) {
    requestAnimationFrame(() => scrollToSection(state.sectionId));
  } else {
    main.scrollTop = savedScroll;
  }

  // Save scroll on scroll
  main.onscroll = () => {
    sessionStorage.setItem(scrollKey, main.scrollTop);
    const bt = $('#back-top');
    if (bt) bt.classList.toggle('show', main.scrollTop > 300);
  };
}

/* ── RENDER: SECTION CONTENT ────────────────────────────────── */
function renderSection(sec, phase) {
  switch (sec.type) {
    case 'table':     return renderTable(sec);
    case 'cards':     return renderCards(sec);
    case 'list':      return renderList(sec);
    case 'steps':     return renderSteps(sec, phase.color);
    case 'hierarchy': return renderHierarchy(sec);
    case 'zones':     return renderZones(sec);
    case 'checklist': return renderChecklist(sec, phase.id);
    case 'comparison':return renderComparison(sec);
    case 'sap-movements': return renderSapMovements(sec);
    case 'sap-table': return renderSapRefTable(sec);
    default: return `<p style="color:var(--text-muted)">Sección: ${safeText(sec.type)}</p>`;
  }
}

function renderTable(sec) {
  const headers = (sec.headers || []).map(h => `<th>${safeText(h)}</th>`).join('');
  const rows = sec.rows.map(row =>
    `<tr>${row.map(cell => `<td>${safeText(cell)}</td>`).join('')}</tr>`
  ).join('');
  return `
    <div class="alm-table-wrap">
      <table class="alm-table">
        ${headers ? `<thead><tr>${headers}</tr></thead>` : ''}
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderCards(sec) {
  const items = sec.items.map(it => `
    <div class="info-card">
      <div class="ic-label"><span class="ic-icon">${safeText(it.icon)}</span> ${safeText(it.label)}</div>
      <div class="ic-text">${safeText(it.text)}</div>
    </div>
  `).join('');
  return `<div class="cards-grid">${items}</div>`;
}

function renderList(sec) {
  const items = sec.items.map(it => `
    <div class="info-list-item">
      <div class="ili-icon">${safeText(it.icon)}</div>
      <div>
        <div class="ili-title">${safeText(it.title)}</div>
        <div class="ili-text">${safeText(Array.isArray(it.text) ? it.text.join(' · ') : it.text)}</div>
      </div>
    </div>
  `).join('');
  return `<div class="info-list">${items}</div>`;
}

function renderSteps(sec, color) {
  const steps = sec.steps.map(s => {
    const items = (s.items || []).map(it => `<li>${safeText(it)}</li>`).join('');
    return `
      <div class="step-item">
        <div class="step-num-wrap">
          <div class="step-num" style="background:${color}">${s.num}</div>
        </div>
        <div class="step-body">
          <div class="step-title">${safeText(s.title)}</div>
          <ul class="step-items">${items}</ul>
        </div>
      </div>
    `;
  }).join('');
  return `<div class="steps-list">${steps}</div>`;
}

function renderHierarchy(sec) {
  const levels = sec.levels.map(l => `
    <div class="hier-level">
      <div class="hier-level-label" style="background:${l.color}">${safeText(l.level)}</div>
      <div class="hier-items">
        ${l.items.map(it => `<div class="hier-item">${safeText(it)}</div>`).join('')}
      </div>
    </div>
  `).join('');
  return `<div class="hierarchy">${levels}</div>`;
}

function renderZones(sec) {
  const zones = sec.zones.map(z => `
    <div class="zone-card" style="border-top:2px solid ${z.color}22">
      <div class="zone-name">
        <span class="zone-dot" style="background:${z.color}"></span>
        <span class="zone-icon">${safeText(z.icon)}</span>
        ${safeText(z.name)}
      </div>
      <div class="zone-desc">${safeText(z.desc)}</div>
    </div>
  `).join('');
  return `<div class="zones-grid">${zones}</div>`;
}

function renderChecklist(sec, phaseId) {
  const prog = getPhaseProgress(phaseId);
  const items = sec.items.map((it, i) => {
    const k = `${phaseId}-${i}`;
    const done = !!state.progress[k];
    return `
      <div class="cl-item${done ? ' done' : ''}" onclick="handleCheck(${phaseId}, ${i})" id="cl-${phaseId}-${i}">
        <div class="cl-check">
          ${done ? `<svg width="11" height="11" viewBox="0 0 12 12" fill="none"><polyline points="2,6 5,9 10,3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` : ''}
        </div>
        <span class="cl-text">${safeText(it)}</span>
      </div>
    `;
  }).join('');

  return `
    <div class="cl-progress">
      <div class="cl-progress-bar">
        <div class="cl-progress-fill" id="clf-${phaseId}" style="width:${prog.pct}%"></div>
      </div>
      <span class="cl-progress-txt" id="clt-${phaseId}">${prog.done}/${prog.total} completados</span>
    </div>
    <div class="checklist">${items}</div>
  `;
}

function renderComparison(sec) {
  const sifaSteps = sec.sifa.map((s, i) => `
    <div class="cmp-step">
      <div class="cmp-step-num">${i + 1}</div>
      <div>${safeText(s)}</div>
    </div>
  `).join('');
  const sapSteps = sec.sap.map((s, i) => `
    <div class="cmp-step">
      <div class="cmp-step-num">${i + 1}</div>
      <div>${safeText(s)}</div>
    </div>
  `).join('');

  return `
    <div class="cmp-block">
      <div class="cmp-header">
        <span class="cmp-badge sifa">SIGES / SIFA</span>
        <span style="color:var(--text-muted);font-size:0.8rem">vs.</span>
        <span class="cmp-badge sap">SAP ERP</span>
        <span class="cmp-title" style="margin-left:4px">${safeText(sec.title || '')}</span>
      </div>
      <div class="cmp-cols">
        <div class="cmp-col">
          <div class="cmp-col-label">🔶 ${safeText(sec.sifaTitle || 'SIGES / SIFA')}</div>
          <div class="cmp-steps">${sifaSteps}</div>
        </div>
        <div class="cmp-col">
          <div class="cmp-col-label">🔷 ${safeText(sec.sapTitle || 'SAP ERP')}</div>
          <div class="cmp-steps">${sapSteps}</div>
        </div>
      </div>
      ${sec.note ? `
        <div class="cmp-note">
          <span class="cmp-note-icon">📌</span>
          <span><strong>Nota de transición:</strong> ${safeText(sec.note)}</span>
        </div>
      ` : ''}
    </div>
  `;
}

function renderSapMovements(sec) {
  const movs = sec.movements.map(m => `
    <div class="sap-mov">
      <div class="sap-code" style="background:${m.color}">${safeText(m.code)}</div>
      <div>
        <div class="sap-name">${safeText(m.name)}</div>
        <div class="sap-desc">${safeText(m.desc)}</div>
      </div>
    </div>
  `).join('');
  return `<div class="sap-grid">${movs}</div>`;
}

function renderSapRefTable(sec) {
  const headers = (sec.headers || []).map(h => `<th>${safeText(h)}</th>`).join('');
  const rows = sec.rows.map(row =>
    `<tr>${row.map(cell => `<td>${safeText(cell)}</td>`).join('')}</tr>`
  ).join('');
  return `
    <div class="alm-table-wrap">
      <table class="alm-table sap-ref-table">
        ${headers ? `<thead><tr>${headers}</tr></thead>` : ''}
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

/* ── MASTER RENDER ──────────────────────────────────────────── */
function render() {
  renderSidebar();
  if (state.view === 'home') {
    renderHome();
  } else if (state.view === 'phase') {
    renderPhase(state.phaseId);
  }
}

/* ── INTERACTIONS ───────────────────────────────────────────── */
window.toggleSection = function(secId) {
  const card = $(`#sec-${secId}`);
  if (!card) return;
  card.classList.toggle('collapsed');
};

window.handleCheck = function(phaseId, idx) {
  toggleCheck(phaseId, idx);
  const el = $(`#cl-${phaseId}-${idx}`);
  if (!el) return;
  const done = !!state.progress[`${phaseId}-${idx}`];
  el.classList.toggle('done', done);
  const check = el.querySelector('.cl-check');
  if (check) check.innerHTML = done ? `<svg width="11" height="11" viewBox="0 0 12 12" fill="none"><polyline points="2,6 5,9 10,3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` : '';
  const cl = el.querySelector('.cl-text');
  if (cl) cl.textContent = cl.textContent; // no change, just trigger

  // Update progress bar
  const prog = getPhaseProgress(phaseId);
  const fill = $(`#clf-${phaseId}`);
  const txt  = $(`#clt-${phaseId}`);
  if (fill) fill.style.width = prog.pct + '%';
  if (txt)  txt.textContent  = `${prog.done}/${prog.total} completados`;

  // Update sidebar
  renderSidebar();
  showToast(done ? '✅ Completado' : '↩️ Desmarcado');
};

window.showSection = function(phaseId, secId) {
  navigate('phase', parseInt(phaseId), secId);
};

function scrollToSection(secId) {
  const el = $(`#sec-${secId}`);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // Highlight briefly
  el.style.borderColor = 'var(--border-bright)';
  setTimeout(() => el.style.borderColor = '', 1500);
}

/* ── SEARCH ─────────────────────────────────────────────────── */
function initSearch() {
  const input    = $('#search-input');
  const results  = $('#search-results');
  const clearBtn = $('#search-clear');
  let debounceTimer;

  input.addEventListener('input', () => {
    const q = input.value.trim();
    clearBtn.classList.toggle('visible', q.length > 0);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (q.length < 2) { results.classList.remove('open'); return; }
      const hits = search(q);
      renderSearchResults(hits, q);
    }, 200);
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeSearch(); input.blur(); }
    if (e.key === 'Enter') {
      const first = results.querySelector('.sr-item');
      if (first) first.click();
    }
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.classList.remove('visible');
    results.classList.remove('open');
  });

  // Keyboard shortcut: Ctrl+K / Cmd+K
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      input.focus(); input.select();
    }
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('#search-wrapper')) closeSearch();
  });

  function closeSearch() {
    results.classList.remove('open');
  }

  function renderSearchResults(hits, q) {
    if (!hits.length) {
      results.innerHTML = `<div class="sr-empty">🔍 Sin resultados para "<strong>${safeText(q)}</strong>"</div>`;
      results.classList.add('open');
      return;
    }

    const grouped = { phase: [], section: [] };
    hits.forEach(h => grouped[h.type].push(h));

    let html = '';
    if (grouped.phase.length) {
      html += `<div class="sr-header">Fases</div>`;
      grouped.phase.forEach(h => {
        html += `
          <div class="sr-item" data-phase="${h.phaseId}" data-section="">
            <div class="sr-badge" style="background:${h.color}22;font-size:16px">${h.icon}</div>
            <div class="sr-info">
              <div class="sr-title">${markText(h.title, q)}</div>
              <div class="sr-meta">Fase ${h.phaseId}</div>
              <div class="sr-snippet">${safeText(h.snippet.substring(0,100))}</div>
            </div>
          </div>
        `;
      });
    }
    if (grouped.section.length) {
      html += `<div class="sr-header">Secciones (${grouped.section.length})</div>`;
      grouped.section.slice(0, 10).forEach(h => {
        html += `
          <div class="sr-item" data-phase="${h.phaseId}" data-section="${h.sectionId}">
            <div class="sr-badge" style="background:${h.color}22;font-size:14px">${h.icon}</div>
            <div class="sr-info">
              <div class="sr-title">${markText(h.title, q)}</div>
              <div class="sr-meta">Fase ${h.phaseId} · ${safeText(h.sectionId)}</div>
              <div class="sr-snippet">${safeText(h.snippet.substring(0,90))}</div>
            </div>
          </div>
        `;
      });
    }

    results.innerHTML = html;
    results.classList.add('open');

    // Bind clicks
    results.querySelectorAll('.sr-item').forEach(el => {
      el.addEventListener('click', () => {
        const phaseId  = parseInt(el.dataset.phase);
        const sectionId = el.dataset.section || null;
        closeSearch();
        input.value = '';
        clearBtn.classList.remove('visible');
        navigate('phase', phaseId, sectionId);
      });
    });
  }
}

/* ── SIDEBAR MOBILE ─────────────────────────────────────────── */
function toggleSidebar() {
  state.sidebarOpen = !state.sidebarOpen;
  const sb  = $('#sidebar');
  const ov  = $('#sidebar-overlay');
  sb.classList.toggle('open', state.sidebarOpen);
  ov.classList.toggle('show', state.sidebarOpen);
}
function closeSidebar() {
  state.sidebarOpen = false;
  $('#sidebar').classList.remove('open');
  $('#sidebar-overlay').classList.remove('show');
}

/* ── PWA INSTALL ────────────────────────────────────────────── */
let deferredInstall = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstall = e;
  const btn = $('#install-btn');
  if (btn) btn.classList.add('show');
});

function handleInstall() {
  if (!deferredInstall) return;
  deferredInstall.prompt();
  deferredInstall.userChoice.then(r => {
    if (r.outcome === 'accepted') {
      const btn = $('#install-btn');
      if (btn) btn.classList.remove('show');
      showToast('✅ App instalada correctamente');
    }
    deferredInstall = null;
  });
}

/* ── OFFLINE DETECTION ──────────────────────────────────────── */
function updateOnlineStatus() {
  const badge = $('#offline-badge');
  if (!badge) return;
  badge.classList.toggle('show', !navigator.onLine);
}
window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

/* ── SERVICE WORKER ─────────────────────────────────────────── */
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          newWorker?.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              showToast('🔄 Nueva versión disponible — recarga para actualizar');
            }
          });
        });
      })
      .catch(err => console.warn('[SW] Registration failed:', err));
  }
}

/* ── TOAST ──────────────────────────────────────────────────── */
let toastTimer;
function showToast(msg, duration = 2200) {
  const t = $('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), duration);
}

/* ── BACK TO TOP ────────────────────────────────────────────── */
function initBackTop() {
  const btn = $('#back-top');
  if (!btn) return;
  btn.onclick = () => {
    const main = $('#main');
    if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

/* ── INIT ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Sidebar toggle
  const menuBtn = $('#menu-toggle');
  if (menuBtn) menuBtn.onclick = toggleSidebar;

  const overlay = $('#sidebar-overlay');
  if (overlay) overlay.onclick = closeSidebar;

  // Install button
  const installBtn = $('#install-btn');
  if (installBtn) installBtn.onclick = handleInstall;

  // Home brand click
  const brand = $('#brand-home');
  if (brand) brand.onclick = () => navigate('home');

  // Init subsystems
  initSearch();
  initBackTop();
  updateOnlineStatus();
  registerSW();

  // Route
  routeFromHash();
  window.addEventListener('popstate', routeFromHash);

  // Keyboard nav
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && state.view !== 'home') {
      if (!state.sidebarOpen) navigate('home');
      else closeSidebar();
    }
  });
});
