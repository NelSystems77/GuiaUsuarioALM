# Mi Manual ALM by NelSystems

> Manual interactivo de aprendizaje para la **Jefatura de Almacén Local de Medicamentos** — CCSS  
> SAP ERP Módulo MM + SIGES / SIFA / SICS

[![PWA](https://img.shields.io/badge/PWA-Ready-blue?logo=pwa)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-black?logo=github)](https://pages.github.com/)
[![Offline](https://img.shields.io/badge/Offline-Ready-green)](https://web.dev/offline/)

---

## 🚀 Demo en vivo

```
https://<tu-usuario>.github.io/<nombre-del-repo>/
```

---

## ✨ Características

| Característica | Detalle |
|---|---|
| **PWA completa** | Instalable en móvil y escritorio, funciona 100% offline |
| **6 Fases de aprendizaje** | 26 semanas de plan progresivo 0→10 |
| **Búsqueda instantánea** | Motor de búsqueda full-text en todo el manual (Ctrl+K) |
| **Comparativas SIFA ↔ SAP** | 8 comparativas lado a lado de todos los procesos |
| **Listas de verificación** | Seguimiento de progreso guardado localmente |
| **Diseño responsivo** | Funciona en móvil, tablet y escritorio |
| **Sin dependencias externas** | Vanilla JS, CSS, HTML — sin frameworks |
| **Seguridad** | XSS-safe, sin eval, Content Security Policy compatible |

---

## 📂 Estructura del proyecto

```
/
├── index.html          # Shell HTML de la PWA
├── manifest.json       # PWA manifest
├── sw.js               # Service Worker (cache-first + offline)
├── css/
│   └── styles.css      # Estilos completos (dark theme)
├── js/
│   ├── app.js          # Controlador de la aplicación
│   └── data.js         # Contenido completo del manual
└── icons/
    ├── icon-512.png    # Ícono principal
    ├── icon-192.png    # PWA icon
    ├── icon-128.png
    ├── icon-64.png
    ├── favicon-32.png
    └── favicon-16.png
```

---

## 🌐 Despliegue en GitHub Pages

### Opción 1 — Automático (recomendado)

1. Crear repositorio en GitHub (puede ser privado o público)
2. Subir todos los archivos a la rama `main`
3. Ir a **Settings → Pages**
4. En **Source**: seleccionar `Deploy from a branch`
5. Branch: `main` / Folder: `/ (root)`
6. Guardar — en ~2 minutos la app estará disponible en:  
   `https://<usuario>.github.io/<repo>/`

### Opción 2 — GitHub CLI

```bash
# Clonar / inicializar repo
git init
git add .
git commit -m "feat: initial PWA Manual ALM"
git branch -M main
git remote add origin https://github.com/<usuario>/<repo>.git
git push -u origin main

# Activar GitHub Pages via CLI
gh repo edit --enable-pages --pages-source-branch main
```

---

## 📱 Instalación como App

### Android / Chrome
1. Abrir la URL en Chrome
2. Menú (⋮) → **"Añadir a pantalla de inicio"**
3. O usar el botón **"Instalar"** en la barra superior de la app

### iOS / Safari
1. Abrir la URL en Safari
2. Botón compartir → **"En la pantalla de inicio"**

### Escritorio / Chrome
1. Abrir la URL
2. Ícono de instalación en la barra de direcciones (⊕)
3. O botón **"Instalar"** en la app

---

## 🔒 Seguridad

- ✅ Sin `eval()` ni `innerHTML` con datos del usuario
- ✅ Sanitización XSS en todas las salidas dinámicas
- ✅ Sin dependencias de terceros en runtime
- ✅ Service Worker con cache versionado y limpieza automática
- ✅ Compatible con Content Security Policy (CSP) estricta

Para máxima seguridad en producción, agregar estos headers HTTP en el servidor:

```
Content-Security-Policy: default-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; script-src 'self' 'unsafe-inline'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

---

## 📖 Contenido del Manual

| Fase | Semanas | Nivel | Contenido principal |
|------|---------|-------|---------------------|
| 1 · Orientación Institucional | 1–4 | 0→2 | Marco normativo, estructura CCSS, zonas del ALM |
| 2 · Procesos Físicos y BPA | 5–8 | 2→4 | BPA, cadena de frío, recepción, controlados, vencimientos |
| 3 · SAP ERP Módulo MM | 9–14 | 4→6 | MIGO, MB1A, MB1B, MI01-MI07, reportes, comparativas |
| 4 · Gestión Avanzada | 15–18 | 6→7 | KPIs, análisis ABC/VEN, planificación, cierre mensual |
| 5 · Liderazgo e Institucional | 19–23 | 7→9 | Gestión del equipo, informes, presupuesto |
| 6 · Maestría y Mejora Continua | 24–26 | 9→10 | PHVA, proyectos, certificaciones, mentoría |

---

## 👨‍💻 Autor

**Nelson Fallas Rodríguez**  
Área de Salud Goicoechea 1 — CCSS  
**NelSystems** · 2025

---

*Este manual es de uso institucional interno. Todos los procedimientos deben aplicarse según la normativa vigente de la CCSS y la DFI.*
