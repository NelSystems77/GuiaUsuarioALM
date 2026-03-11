/* ============================================================
   Mi Manual ALM — Data Layer
   NelSystems | Contenido completo de las 6 fases
   ============================================================ */
'use strict';

const MANUAL_DATA = {
  meta: {
    title:    'Mi Manual ALM',
    subtitle: 'Jefatura de Almacén Local de Medicamentos',
    author:   'NelSystems — Apoyado en material de CCSS',
    version:  '1.0',
    year:     '2025',
    system:   'CCSS | SAP ERP Módulo MM + SIGES/SIFA'
  },

  phases: [

    /* ═══════════════════════════════════════════════════════
       FASE 1 — Orientación Institucional
    ════════════════════════════════════════════════════════ */
    {
      id: 1, level: '0 → 2', weeks: 'Semanas 1–4',
      color: '#006B8F', colorLight: '#E8F4F8',
      title: 'Orientación Institucional',
      subtitle: 'Contextualización del Rol',
      icon: '🏛️',
      objective: 'Familiarizarse con la institución, su estructura organizacional, el marco normativo fundamental y el entorno físico y humano del Almacén Local de Medicamentos.',
      sections: [
        {
          id: '1.1', title: 'La CCSS — Misión, Visión y Valores',
          type: 'cards',
          items: [
            { label: 'Misión', icon: '🎯', text: 'Proporcionar los servicios de salud en forma integral al individuo, la familia y la comunidad, y otorgar la protección económica, social y de pensiones, conforme la legislación vigente.' },
            { label: 'Visión', icon: '🔭', text: 'Ser una institución de excelencia que cuente con el respaldo y la confianza de la sociedad costarricense, por la calidad y oportunidad de los servicios que brinda.' },
            { label: 'Solidaridad', icon: '🤝', text: 'Universalidad en la protección social sin discriminación.' },
            { label: 'Universalidad', icon: '🌎', text: 'Cobertura para toda la población costarricense.' },
            { label: 'Igualdad', icon: '⚖️', text: 'Acceso equitativo a los servicios independientemente del aporte.' },
            { label: 'Obligatoriedad', icon: '📋', text: 'Participación ineludible en el sistema solidario.' }
          ]
        },
        {
          id: '1.2', title: 'Estructura Organizacional Relevante',
          type: 'hierarchy',
          levels: [
            { level: 'Central', color: '#006B8F', items: ['Junta Directiva CCSS', 'Presidencia Ejecutiva', 'Gerencia de Logística', 'Dirección de Farmacia Institucional (DFI)', 'Dirección de Abastecimiento (CENDEISSS)'] },
            { level: 'Regional', color: '#007A54', items: ['Dirección Regional de Servicios de Salud', 'Dirección de Red de Servicios de Salud'] },
            { level: 'Local', color: '#B8520A', items: ['Director Médico / Técnico del establecimiento', 'Administrador de la Unidad de Salud', 'Coordinador de Farmacia Local', '⭐ Jefatura del Almacén Local de Medicamentos'] }
          ]
        },
        {
          id: '1.3', title: 'Marco Normativo Fundamental',
          type: 'table',
          headers: ['Instrumento', 'Aplicación en el Almacén'],
          rows: [
            ['Ley Constitutiva CCSS (Ley 17)', 'Base legal de la institución. Derechos, deberes y régimen disciplinario del personal.'],
            ['Ley General de Salud (Ley 5395)', 'Control sanitario de medicamentos: registro, fabricación, distribución y dispensación.'],
            ['Reglamento del Servicio de Farmacia CCSS', 'Normas para dispensación, almacenamiento y control de medicamentos en todos los niveles de atención.'],
            ['Lineamientos DFI vigentes', 'Políticas de gestión de almacenes locales, categorías de medicamentos, control de temperatura.'],
            ['Ley 8204 (Psicotrópicos y Estupefacientes)', 'Libro de control obligatorio, doble llave, balances diarios, reporte al ICD.'],
            ['Reglamento de Compras CCSS', 'Procedimientos de adquisición, recepción y devolución. Base para OC en SAP.'],
            ['Normas BPA (Buenas Prácticas de Almacenamiento)', 'Condiciones físicas, control ambiental, manejo de productos vencidos.'],
          ]
        },
        {
          id: '1.4', title: 'Funciones Principales de la Jefatura',
          type: 'list',
          items: [
            { icon: '📦', title: 'Recepción', text: 'Verificar cuantitativa y cualitativamente todos los medicamentos. Registrar en SAP (MIGO, Mov. 101).' },
            { icon: '🌡️', title: 'Custodia y Almacenamiento', text: 'Garantizar condiciones BPA: temperatura, humedad, luz, seguridad física. Sistema FEFO.' },
            { icon: '📊', title: 'Control de Inventarios', text: 'Inventarios físicos periódicos, comparación con SAP, ajuste de diferencias. Exactitud ≥ 95%.' },
            { icon: '🏥', title: 'Distribución Interna', text: 'Atender requisiciones de medicamentos de servicios clínicos. Registrar salidas en SAP (MB1A).' },
            { icon: '⚠️', title: 'Control de Vencimientos', text: 'Alerta temprana con MB5M. Gestión de devoluciones y destrucción institucional.' },
            { icon: '🔒', title: 'Gestión de Controlados', text: 'Libro de psicotrópicos/estupefacientes, doble llave, balances diarios. Reporte al ICD.' },
            { icon: '📄', title: 'Información y Reportes', text: 'Informes periódicos para Dirección, DFI y otras instancias. SAP como fuente única de verdad.' }
          ]
        },
        {
          id: '1.5', title: 'Zonas del Almacén Local de Medicamentos',
          type: 'zones',
          zones: [
            { name: 'Zona de Recepción', color: '#006B8F', icon: '🚚', desc: 'Verificación inicial. Mesón amplio, báscula, acceso a SAP. Temperatura ambiente controlada.' },
            { name: 'Almacenamiento General', color: '#007A54', icon: '🏗️', desc: 'Estantes para medicamentos a 15–25°C. Organización alfabética por DCI y FEFO.' },
            { name: 'Cadena de Frío', color: '#1A5276', icon: '❄️', desc: 'Refrigeradores 2–8°C, congeladores ≤-15°C. Monitoreo continuo. Solo equipos médicos.' },
            { name: 'Medicamentos Controlados', color: '#8B1A1A', icon: '🔐', desc: 'Caja fuerte / armario con doble llave. Psicotrópicos y estupefacientes. Acceso restringido.' },
            { name: 'Zona de Cuarentena', color: '#B8520A', icon: '🚫', desc: 'Productos con estado incierto. Señalizada. Nada de esta zona puede dispensarse.' },
            { name: 'Productos Vencidos', color: '#6D3A3A', icon: '🗑️', desc: 'Segregada y etiquetada. Pending proceso formal de destrucción institucional.' },
            { name: 'Zona Administrativa', color: '#2C3E50', icon: '💻', desc: 'Sistema SAP, archiveros, formularios DFI, libros de control y comunicaciones.' }
          ]
        },
        {
          id: '1.6', title: 'Categorización de Medicamentos',
          type: 'table',
          headers: ['Clasificación', 'Categorías', 'Criterio', 'Control requerido'],
          rows: [
            ['ABC — Por Valor', 'A: ~80% del gasto (~20% ítems)', 'Valor económico del consumo', 'Control diario, reorden automático'],
            ['ABC — Por Valor', 'B: ~15% del gasto (~30% ítems)', 'Valor económico medio', 'Control semanal'],
            ['ABC — Por Valor', 'C: ~5% del gasto (~50% ítems)', 'Bajo valor unitario', 'Control mensual/trimestral'],
            ['VEN — Por Criticidad', 'V — Vitales', 'Sin ellos se pone en riesgo la vida', 'Stockout INACEPTABLE. Stock doble.'],
            ['VEN — Por Criticidad', 'E — Esenciales', 'Importantes para atención de calidad', 'Stockout no deseado'],
            ['VEN — Por Criticidad', 'N — No Esenciales', 'Tienen sustitutos disponibles', 'Control estándar'],
          ]
        },
        {
          id: 'CK-1', title: '✅ Lista de Verificación — Fase 1',
          type: 'checklist',
          phase: 1,
          items: [
            'Conoce la misión, visión y valores de la CCSS',
            'Identifica la estructura organizacional de la CCSS y su unidad de salud',
            'Ha leído el Reglamento del Servicio de Farmacia CCSS completo',
            'Conoce los lineamientos vigentes de la DFI aplicables al almacén',
            'Comprende la Ley 8204 y sus implicaciones para medicamentos controlados',
            'Ha realizado el reconocimiento físico completo del almacén',
            'Conoce el inventario actual: ítems, vencimientos, estado general',
            'Identifica todos los actores clave y ha tenido reuniones de presentación',
            'Comprende la clasificación ABC y VEN de medicamentos',
            'Tiene acceso configurado al sistema SAP con credenciales institucionales',
          ]
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       FASE 2 — Procesos Físicos y BPA
    ════════════════════════════════════════════════════════ */
    {
      id: 2, level: '2 → 4', weeks: 'Semanas 5–8',
      color: '#007A54', colorLight: '#E8F4F0',
      title: 'Procesos Físicos y BPA',
      subtitle: 'Buenas Prácticas de Almacenamiento',
      icon: '🌡️',
      objective: 'Dominar todos los procesos físicos del almacén bajo las BPA de la CCSS, aplicando correctamente la normativa vigente en cada procedimiento operativo.',
      sections: [
        {
          id: '2.1', title: 'Condiciones BPA de Almacenamiento',
          type: 'table',
          headers: ['Parámetro', 'Rango Requerido', 'Frecuencia de Control', 'Acción ante Desviación'],
          rows: [
            ['Temperatura amb.', '15–25 °C', 'Cada 4 horas (crítico)', 'Verificar HVAC, registrar incidencia'],
            ['Cadena de frío', '2–8 °C (refrigerado)', 'Cada 8 horas mínimo', 'Trasladar a equipo alterno. Notificar Farmacia.'],
            ['Congelados', '≤ –15 °C', 'Cada 8 horas', 'Traslado inmediato. Evaluación farmacéutico.'],
            ['Humedad relativa', '40–70 % HR', 'Diaria', 'Uso de deshumidificador'],
            ['Luz solar directa', 'Evitar exposición', 'Visual diaria', 'Reubicación o cobertura del medicamento'],
            ['Ventilación', 'Circulación adecuada', 'Semanal', 'Verificar obstrucciones en rejillas'],
          ]
        },
        {
          id: '2.2', title: 'Protocolo de Cadena de Frío',
          type: 'list',
          items: [
            { icon: '🧊', title: 'Equipamiento', text: 'Refrigeradores médicos (NO domésticos). Termómetros calibrados con certificado vigente. Dataloggers para monitoreo continuo.' },
            { icon: '📋', title: 'Registro de Temperatura', text: 'Cada 8 horas mínimo. Planilla física o digital firmada por el responsable del turno.' },
            { icon: '🚨', title: 'Protocolo de Alarma', text: 'Si T° < 2°C o > 8°C: trasladar inmediatamente a equipo alterno. Notificar Coordinación de Farmacia. Evaluar producto.' },
            { icon: '🔧', title: 'Mantenimiento', text: 'Preventivo semestral por técnico certificado. Descongelamiento según manual. Limpieza mensual. Hoja de vida del equipo.' },
            { icon: '📦', title: 'Carga Correcta', text: 'Máximo 60-70% de capacidad. Distribución uniforme. Nunca en la puerta del refrigerador. Productos más sensibles en estantes centrales.' }
          ]
        },
        {
          id: '2.3', title: 'Proceso de Recepción de Medicamentos',
          type: 'steps',
          steps: [
            { num: 1, title: 'Verificación Documental', color: '#007A54', items: ['Factura vs. Orden de Compra activa en SAP (ME2M)', 'Proveedor, condiciones de pago, centro de costo', 'Campos completos de la factura (cédula jurídica, fecha, número)', 'Conservar originales para el expediente de la compra'] },
            { num: 2, title: 'Verificación Cuantitativa', color: '#006B8F', items: ['Contar TODOS los medicamentos unidad por unidad', 'Comparar con OC y factura', 'Registrar diferencias (sobrante/faltante)', 'Faltante: notificar proveedor y documentar para reclamo'] },
            { num: 3, title: 'Verificación Cualitativa', color: '#5B2D8E', items: ['DCI, concentración y forma farmacéutica = OC', 'Fecha de vencimiento: mínimo 75% de vida útil restante', 'Estado físico: envases íntegros, etiquetas legibles', 'Lote: anotar para trazabilidad en SAP', 'Cadena de frío: verificar temperatura de transporte documentada'] },
            { num: 4, title: 'Registro en SAP (MIGO)', color: '#B8520A', items: ['MIGO → Entrada de mercancías → OC → Mov. 101', 'Ingresar N° de OC → SAP carga datos automáticamente', 'Ajustar cantidades realmente recibidas', 'Ingresar N° de lote y fecha de vencimiento por posición', 'Seleccionar almacén de destino', 'Contabilizar (Ctrl+S) → SAP genera N° Documento de Material'] },
            { num: 5, title: 'Almacenamiento Post-Recepción', color: '#007A54', items: ['Cadena de frío → refrigerador inmediatamente', 'Demás: cuarentena interna hasta verificación completa', 'Una vez aprobado: estantería definitiva aplicando FEFO', 'Actualizar registro de ubicaciones físico si aplica'] }
          ]
        },
        {
          id: 'CMP-recepcion', title: '🔶🔷 Recepción del Pedido Ordinario del ALDI',
          type: 'comparison',
          sifaTitle: 'SIGES / SIFA',
          sapTitle: 'SAP ERP — Sistema Vigente',
          sifa: [
            'El ALDI envía el camión con funcionarios y los medicamentos del pedido mensual.',
            'Se usa el Hand Held (lector de códigos). Ingresar usuario/contraseña de SIGES en el dispositivo.',
            'Escanear producto por producto con códigos de barras hasta terminar.',
            'Dar "Finalizar pedido" en el Hand Held.',
            'En SIGES: Unidades Ejecutoras → Generar pedido → ingresar N° de secuencia.',
            'Dar clic en "Memo". Llenar datos. Imprimir 2 copias del memorándum.',
            'Firmar junto con el encargado del ALDI. Devolver sobrantes con ellos.',
            'Si hay faltantes: coordinar por correo si corrigen F27 o se coordina retiro.',
            'Ingresar facturas del ALDI al SIFA: descargando desde SIGES o manualmente.',
            'Inventario 771 actualizado en SIFA.',
          ],
          sap: [
            'El ALDI / proveedor llega con factura y remisión.',
            'Verificar documentación: factura vs. N° de OC activa en SAP (ME2M).',
            'Contar físicamente todos los medicamentos por tipo, lote y cantidad.',
            'MIGO → "Entrada de mercancías" → "Orden de compra".',
            'Ingresar N° de OC. SAP carga los datos automáticamente.',
            'Ajustar cantidades recibidas. Ingresar N° de lote y fecha de vencimiento.',
            'Seleccionar almacén de destino (código SAP).',
            'Marcar posiciones conformes con "OK". Las inconformes NO se marcan.',
            'Contabilizar (Ctrl+S). SAP genera Documento de Material (5000XXXXXXX).',
            'Imprimir y firmar con el proveedor. Stock actualizado en SAP.',
          ],
          note: 'El Hand Held de SIGES no existe en SAP. La verificación es manual y el registro se hace directamente en MIGO. El N° de OC en SAP = N° de secuencia en SIGES. La F27 de SIGES = Orden de Compra (OC) en SAP.'
        },
        {
          id: '2.4', title: 'Control de Psicotrópicos y Estupefacientes (Ley 8204)',
          type: 'table',
          headers: ['Componente', 'Descripción', 'Responsable', 'Periodicidad'],
          rows: [
            ['Libro oficial de control', 'Foliado, sellado y autorizado por DFI. Sin tachones (errores con línea y firma). Valor legal.', 'Jefatura ALM', 'Actualización por cada movimiento'],
            ['Balance diario', 'Conteo físico comparado con libro. Cualquier diferencia se investiga inmediatamente.', 'Jefatura ALM + supervisor', 'Inicio y fin de turno'],
            ['Doble llave', 'Dos cerraduras independientes. Dos funcionarios distintos. Bitácora de cada apertura.', 'Jefatura + Coord. Farmacia', 'Cada acceso al armario'],
            ['Reporte al ICD', 'Inventario inicial, entradas, salidas por servicio, inventario final. Firmado por Director.', 'Jefatura ALM + Director', 'Trimestral'],
            ['Psicotrópicos frecuentes', 'Morfina, Fentanilo, Tramadol, Midazolam, Diazepam, Ketamina, Metilfenidato, Fenobarbital', '—', '—'],
          ]
        },
        {
          id: 'CMP-devolucion', title: '🔶🔷 Devolución al ALDI — F25 vs. SAP MIGO Mov. 122',
          type: 'comparison',
          sifaTitle: 'SIFA — Formulario F25',
          sapTitle: 'SAP ERP — MIGO Mov. 122',
          sifa: [
            'Nota de Control de Calidad ordena devolución del lote indicado.',
            'Verificar existencias del lote en inventario 771 en SIFA.',
            'SIFA: Administrativo → Devoluciones.',
            'Llenar datos: servicio 771, observación (motivo de devolución).',
            'Digitar código del medicamento y dar guardar.',
            'Archivo → Aplicar. La devolución queda en firme en SIFA.',
            'Imprimir la nota F25 y adjuntarla al medicamento.',
            'Devolver físicamente al ALDI con la F25 impresa.',
            'SIFA rebaja automáticamente la cantidad del inventario 771.',
          ],
          sap: [
            'Alerta de retiro de lote o inconformidad en recepción.',
            'Verificar existencias del lote: MMBE o MB52 (filtrar por N° lote).',
            'MIGO → Operación: "Devolución al proveedor" → Mov. 122.',
            'Ingresar N° del documento de entrada original.',
            'SAP carga datos automáticamente. Indicar cantidad y lote a devolver.',
            'Ingresar texto de justificación en "Texto cabecera".',
            'Contabilizar (Ctrl+S). SAP reduce stock del lote.',
            'Imprimir documento SAP y adjuntarlo al medicamento físico.',
            'El documento SAP sirve de base para que Compras gestione nota de crédito.',
          ],
          note: 'La F25 de SIFA = documento de devolución en MIGO (Mov. 122). Ventaja de SAP: el registro queda vinculado al documento de compra original y al lote específico, garantizando trazabilidad completa.'
        },
        {
          id: 'CMP-vencimientos', title: '🔶🔷 Control de Vencimientos con Lotes',
          type: 'comparison',
          sifaTitle: 'SIFA — Reporte N°1',
          sapTitle: 'SAP ERP — MB5M',
          sifa: [
            'SIFA: Reportes → Seguimientos → Reporte N°1 "Existencia por lote y vencimiento".',
            'SIFA genera un PDF con todas las existencias del 771 con lotes y fechas.',
            'Imprimir el reporte y usarlo como guía para el inventario físico.',
            'Identificar manualmente los próximos a vencer en el listado completo.',
            'Coordinar con otras UP la donación o traslado de próximos a vencer.',
            'Sin filtro automático por rango de fechas — análisis 100% manual.',
          ],
          sap: [
            'SAP → Transacción MB5M — "Materiales por fecha de vencimiento".',
            'Ingresar centro, almacén y fecha de corte (ej: hoy + 90 días).',
            'SAP filtra SOLO los lotes que vencen ANTES de esa fecha.',
            'Muestra: material, lote, cantidad disponible, fecha de vencimiento.',
            'Exportar a Excel para análisis adicional y plan de acción mensual.',
            'Ejecutar 2 veces: fecha corte 90 días (urgente) y 180 días (planificación).',
          ],
          note: 'Reporte N°1 de SIFA = MB5M de SAP. La ventaja clave de SAP: filtro automático por fecha elimina revisión manual. Los traslados a otras UP se mantienen igual — solo cambia el registro (MB1B Mov. 311 en SAP en lugar de archivo magnético en SIFA).'
        },
        {
          id: 'CK-2', title: '✅ Lista de Verificación — Fase 2',
          type: 'checklist',
          phase: 2,
          items: [
            'Ejecuta correctamente el proceso completo de recepción (documental, cuantitativa, cualitativa)',
            'Registra recepciones conformes e inconformes con los documentos institucionales correctos',
            'Aplica las condiciones BPA: temperatura, humedad, luz y ventilación',
            'Gestiona la cadena de frío: monitoreo, registro y protocolo de alarma',
            'Controla psicotrópicos y estupefacientes según Ley 8204',
            'Mantiene el libro de controlados actualizado y realiza el balance diario',
            'Aplica el sistema FEFO correctamente en la organización del inventario',
            'Identifica medicamentos próximos a vencer y activa el protocolo institucional',
            'Aplica correctamente los criterios de cuarentena y segrega productos',
            'Conoce el proceso de devolución al almacén central y la destrucción de medicamentos',
            'Mantiene el programa de limpieza y control de plagas al día',
          ]
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       FASE 3 — SAP ERP Módulo MM
    ════════════════════════════════════════════════════════ */
    {
      id: 3, level: '4 → 6', weeks: 'Semanas 9–14',
      color: '#5B2D8E', colorLight: '#F0EBF8',
      title: 'SAP ERP — Módulo MM',
      subtitle: 'Dominio Fundamental del Sistema',
      icon: '💻',
      objective: 'Dominar las transacciones esenciales del módulo SAP MM para gestionar con autonomía y exactitud todos los movimientos de inventario, recepciones, salidas, traslados e inventarios físicos.',
      sections: [
        {
          id: '3.1', title: 'Estructura SAP en la CCSS',
          type: 'table',
          headers: ['Elemento SAP', 'Descripción', 'Ejemplo CCSS'],
          rows: [
            ['Mandante (Client)', 'Nivel más alto. Contiene todos los datos institucionales. Único mandante productivo.', 'Mandante 100 (Producción) / Mandante 200 (Capacitación)'],
            ['Sociedad (Company Code)', 'Unidad contable de la institución. Todos los movimientos generan documentos contables aquí.', 'CCSS 0001'],
            ['Centro (Plant)', 'Cada unidad de salud. Tiene su propio inventario, OC y movimientos independientes.', 'Área de Salud Goicoechea 1 → Código centro SAP asignado'],
            ['Almacén (Storage Location)', 'Zona dentro del centro. Cada zona puede tener su código: almacén general, cadena de frío, cuarentena.', 'ALM01=General, FRIO=Cadena de frío, CUA=Cuarentena, CON=Controlados'],
            ['Maestro de Materiales', 'Registro centralizado. Código, nombre DCI, forma farmacéutica, unidad de medida, precio.', 'Código 000012345 = Amoxicilina 500 mg cápsulas'],
            ['Lote (Batch)', 'N° de serie de fabricación. Cada lote tiene: fecha de fabricación, fecha de vencimiento.', 'Lote: ABCD1234 — Vence: 31/12/2026'],
          ]
        },
        {
          id: '3.2', title: 'Tipos de Movimiento SAP — Referencia Rápida',
          type: 'sap-movements',
          movements: [
            { code: '101', name: 'Entrada vs. OC', color: '#007A54', desc: 'Recepción de medicamentos. El más frecuente. Aumenta stock. Requiere N° de OC.' },
            { code: '122', name: 'Devolución a Proveedor', color: '#8B1A1A', desc: 'Devolver medicamentos por inconformidad. Reduce stock. Equivale a F25 de SIFA.' },
            { code: '201', name: 'Salida a Centro de Costo', color: '#B8520A', desc: 'Dispensar a servicios clínicos. Carga consumo al CC del servicio. Reduce stock.' },
            { code: '261', name: 'Salida a Orden', color: '#B8520A', desc: 'Salida vinculada a una orden interna específica. Menos frecuente en almacenes locales.' },
            { code: '311', name: 'Traslado Interno', color: '#1A5276', desc: 'Entre almacenes del mismo centro (ej: cuarentena → general). Sin costo adicional.' },
            { code: '312', name: 'Traslado Inverso', color: '#1A5276', desc: 'Revierte un movimiento 311 incorrecto.' },
            { code: '351', name: 'Traslado Entre Centros', color: '#006B8F', desc: 'Entre establecimientos CCSS. Autorización de ambas jefaturas. Proceso en 2 pasos.' },
            { code: '551', name: 'Baja / Destrucción', color: '#6D3A3A', desc: 'Medicamentos vencidos, deteriorados o robados. Requiere acta de destrucción previa.' },
            { code: '701', name: 'Diferencia de Inventario (–)', color: '#5B2D8E', desc: 'Generado por MI07 al compensar diferencia negativa (conteo < sistema).' },
            { code: '707', name: 'Diferencia de Inventario (+)', color: '#5B2D8E', desc: 'Generado por MI07 al compensar diferencia positiva (conteo > sistema).' },
          ]
        },
        {
          id: '3.3', title: 'MIGO — Guía Paso a Paso',
          type: 'steps',
          steps: [
            { num: 1, title: 'Acceso', color: '#5B2D8E', items: ['Escribir MIGO en barra de transacciones → Enter', 'O menú: MM → Gestión de Inventarios → Entrada de Mercancías'] },
            { num: 2, title: 'Tipo de Operación', color: '#5B2D8E', items: ['"Entrada de mercancías" + "Orden de compra" + Mov. 101 (automático)'] },
            { num: 3, title: 'Ingresar N° de OC', color: '#5B2D8E', items: ['Digitar el número de OC → Enter', 'SAP carga automáticamente: proveedor, materiales, cantidades, precios', 'Verificar contra documentos físicos'] },
            { num: 4, title: 'Verificar Posiciones', color: '#5B2D8E', items: ['Ajustar cantidades realmente recibidas (puede haber entregas parciales)', 'Campo "Lote": N° de lote del fabricante', 'Campo "Fecha vencimiento": fecha exacta del lote', 'Campo "Almacén": código del almacén de destino'] },
            { num: 5, title: 'Datos de Cabecera', color: '#5B2D8E', items: ['Fecha documento: fecha de la factura', 'Texto: "Recepción OC 4500XXXXXXX - Licitación XXXX"', 'N° entrega: número de remisión del proveedor'] },
            { num: 6, title: 'Contabilizar', color: '#007A54', items: ['Marcar indicador "OK" en todas las posiciones conformes', 'Ctrl+S o botón "Contabilizar"', '✅ SAP genera N° Documento de Material: 5000XXXXXXX', 'Imprimir y firmar con el proveedor'] },
          ]
        },
        {
          id: 'CMP-pedido', title: '🔶🔷 Pedido Ordinario al ALDI',
          type: 'comparison',
          sifaTitle: 'SIGES — Generación del Pedido',
          sapTitle: 'SAP ERP — Planificación y OC',
          sifa: [
            'SIGES → Unidades Ejecutoras → Generación de pedido al almacén.',
            'Elegir tipo de pedido: Ordinario, Psicotrópicos, Estupefacientes, Extra pedido (gerencia/farmacoterapia).',
            'Documento N°27 (F27) — formulario oficial para solicitar al ALDI.',
            'Poner N° de período (año) y N° de mes.',
            'Pedido AUTOMÁTICO (flecha negra ↑) para ordinario. MANUAL (flecha morada ↓) para extra pedidos.',
            'Sistema asigna N° de secuencia — anotar como referencia del pedido.',
            'Automático: SIGES muestra todas las líneas; editar cantidades. Manual: ingresar código por código.',
            'Ícono disquete (aceptar cambios). Ícono tren (enviar). Acción IRREVERSIBLE.',
            'Descargar facturas pre-elaboradas → enviar por correo a encargados del ALDI.',
            'Psicotrópicos y estupefacientes: pedidos separados en facturas independientes.',
            'Pedido ordinario: 1 vez al mes, 5 días hábiles antes de la semana de entrega asignada.',
          ],
          sap: [
            'SAP planifica basado en consumo histórico y puntos de reorden del maestro de materiales.',
            'ME2M: verificar OC activas y pendientes para medicamentos del centro.',
            'MB52 + MB51: reportar cobertura actual y consumo proyectado a Compras.',
            'La Jefatura del Almacén comunica necesidades con datos de cobertura (días) e impacto clínico.',
            'Compras emite la Orden de Compra (OC) en SAP — equivalente a la F27 de SIGES.',
            'N° de OC en SAP = N° de secuencia en SIGES (referencia de trazabilidad).',
            'Extra pedidos urgentes: justificación técnica → Coordinación de Farmacia → Compras → OC urgente.',
            'Psicotrópicos y estupefacientes: misma OC en SAP, documentación adicional Ley 8204.',
            'Traslados entre unidades: MB1B (Mov. 311/351) en SAP, en lugar de archivos magnéticos.',
            'La Jefatura NO genera la OC directamente — eso es rol de Compras.',
          ],
          note: 'En SAP la Jefatura provee los datos de consumo y cobertura; Compras genera la OC. La F27 de SIGES = OC de SAP. N° de secuencia SIGES = N° de OC SAP. Los extra pedidos autorizados por Gerencia siguen el mismo canal de aprobación institucional, pero el registro en SAP lo hace Compras.'
        },
        {
          id: 'CMP-despacho', title: '🔶🔷 Despacho 771 → 772 (Almacén → Farmacia)',
          type: 'comparison',
          sifaTitle: 'SIFA — Egreso de Productos',
          sapTitle: 'SAP ERP — MB1A Mov. 201',
          sifa: [
            'El Técnico III genera pedido semanal/quincenal del 772 al 771 en SIFA.',
            'Jefatura recibe la solicitud en SIFA.',
            'SIFA: Almacén Local → Egreso de productos.',
            'Ícono lápiz → ventana de pedidos del 772.',
            'Seleccionar pedido del Técnico III (estado: "Enviado a bodega").',
            'Ícono al lado del lápiz: cargar automáticamente las cantidades solicitadas.',
            'Editar cantidades si falta stock en algún ítem.',
            'SIFA: Archivo → Aplicar Egreso. Stock del 771 se reduce.',
            'Avisar al Técnico III para que revise, saque físicamente y aplique en 772.',
          ],
          sap: [
            'Técnico III / Servicio de Farmacia emite solicitud de medicamentos.',
            'SAP: Transacción MB1A → Movimiento 201.',
            'Centro de costo del Servicio de Farmacia / Despacho como receptor.',
            'Ingresar cada medicamento: código, cantidad, lote (FEFO), almacén de origen.',
            'Si hay faltante: registrar solo la cantidad disponible y comunicar el diferencial.',
            'Contabilizar (Ctrl+S): stock del almacén se reduce. Consumo registrado.',
            'Imprimir documento de salida SAP → Técnico III firma como constancia.',
            'Técnico verifica medicamento físico contra documento impreso.',
          ],
          note: 'En SAP no existe la separación explícita 771/772 como cuentas separadas en SIFA. El almacén y el despacho son "Storage Locations" distintas. El traslado se registra con MB1A (Mov. 201) o MB1B (Mov. 311) según configuración del centro. El proceso físico de aliste y entrega al Técnico III permanece igual.'
        },
        {
          id: 'CMP-traslados', title: '🔶🔷 Traslados entre Unidades Programáticas (UP)',
          type: 'comparison',
          sifaTitle: 'SIFA — Archivos Magnéticos',
          sapTitle: 'SAP ERP — MIGO Mov. 351',
          sifa: [
            'Coordinar previamente con Jefe de Proveeduría de la otra UP (Teams/WhatsApp/correo).',
            'SIFA: Almacén Local → Pedidos → Solicitud traslado, producto entre almacenes.',
            'Nuevo. Centro de salud: N° de la UP colaboradora. Código med., cantidad, observación.',
            'Guardar. Utilitarios → Aplicar solicitud. SIFA: "Solicitud lista para enviarse".',
            'Binoculares → buscar solicitud → "Enviar solicitud por medio magnético".',
            'SIFA genera archivo magnético → enviar por correo a encargado de la otra UP.',
            'La otra UP descarga el archivo, rebaja su inventario y genera archivo de respuesta.',
            'Recibir el archivo de respuesta → SIFA: Almacén Local → Traslados → Recibe productos.',
            'Binoculares → buscar archivo magnético recibido → Cargar → Utilitarios → Aplicar traslado.',
            'Coordinar transporte físico del medicamento.',
          ],
          sap: [
            'Coordinar previamente con la Jefatura del otro almacén (Teams/correo/WhatsApp).',
            'Centro emisor: MIGO → Movimiento 351 (salida de transferencia entre centros).',
            'Centro receptor: MIGO → Movimiento 101 referenciando el documento de traslado del emisor.',
            'Ambos centros coordinan números de documento SAP para trazabilidad completa.',
            'Documentar con acta de traslado: medicamento, lote, cantidad, centros, firmas de ambas Jefaturas.',
            'Coordinar transporte físico (igual que antes).',
            'El proceso en 2 pasos (351 + 101) reemplaza el intercambio de archivos magnéticos.',
          ],
          note: 'En SAP NO existen los archivos magnéticos de SIFA. El traslado entre centros requiere coordinación directa para ejecutar los movimientos 351 (salida) y 101 (entrada) en SAP. La coordinación previa por medios informales permanece igual — solo cambia el registro en sistema.'
        },
        {
          id: '3.6', title: 'Inventario Físico en SAP — MI01 → MI04 → MI07',
          type: 'steps',
          steps: [
            { num: 1, title: 'MI01 — Crear Documento de Inventario', color: '#5B2D8E', items: ['MI01 → seleccionar centro y almacén', 'Indicar si se bloquea el almacén durante el conteo (recomendado)', 'Seleccionar materiales a inventariar (todos o subconjunto ABC)', '⚠️ Imprimir lista SIN mostrar cantidades del sistema (evita sesgo en conteo)'] },
            { num: 2, title: 'Conteo Físico', color: '#5B2D8E', items: ['Conteo con lista impresa, sin interrupciones, mínimo 2 personas presentes', 'Controlados y categoría A: doble conteo independiente', 'Anotar cantidades contadas en la lista impresa', 'Firmar la lista con nombre y fecha'] },
            { num: 3, title: 'MI04 — Registrar Conteo', color: '#5B2D8E', items: ['MI04 → ingresar N° del documento creado en MI01', 'SAP muestra lista con campos para cantidades', 'Ingresar cantidades físicas por material Y por lote', 'Guardar → SAP muestra diferencias automáticamente'] },
            { num: 4, title: 'Análisis de Diferencias', color: '#B8520A', items: ['Revisar materiales con diferencias entre conteo y stock SAP', 'Diferencias significativas: RECONTEO antes de compensar', 'Investigar causas: errores de registro, medicamentos en tránsito', 'Documentar la justificación de cada diferencia'] },
            { num: 5, title: 'MI07 — Compensar Diferencias', color: '#007A54', items: ['MI07 → N° del documento de inventario', 'Revisar diferencias calculadas por SAP', 'Seleccionar posiciones a compensar', 'SAP genera Mov. 701 (faltante) o 707 (sobrante) automáticamente', 'Contabilizar → diferencias registradas en el inventario', '✅ Generar informe de diferencias para archivo y control interno'] },
          ]
        },
        {
          id: 'CMP-ajuste', title: '🔶🔷 Notas de Ajuste — SIFA vs. SAP',
          type: 'comparison',
          sifaTitle: 'SIFA — Notas de Ajuste',
          sapTitle: 'SAP ERP — MIGO Mov. 551 / MI07',
          sifa: [
            'Motivos: vencidos, dañados, hurto/robo.',
            'SIFA: Administrativo → Notas de ajuste.',
            'Clic en Nuevo.',
            'Datos: servicio 771, observación (motivo).',
            'Código del medicamento, cantidad, seleccionar lote.',
            'Guardar.',
            'Archivo → Aplicar nota. Lista para imprimir.',
            'La nota rebaja el medicamento del inventario 771.',
            'Para inventario total: Reportes → Seguimientos → Reporte N°1.',
          ],
          sap: [
            'Prerrequisito: elaborar el Acta de Destrucción o documentar el incidente.',
            'Para bajas por vencimiento/destrucción: MIGO → Movimiento 551.',
            'Ingresar material, lote, cantidad y almacén de origen.',
            '"Texto cabecera": motivo (ej: "Baja por vencimiento — Acta N° XX del DD/MM/AAAA").',
            'Contabilizar. SAP reduce el stock y registra la pérdida contablemente.',
            'Para diferencias de inventario: MI07 genera automáticamente Mov. 701/707.',
            'Inventario completo con lotes: MB52 (existencias por almacén con lotes).',
            'Todos los movimientos de baja auditables en MB51 (filtrar Mov. 551).',
          ],
          note: 'La "Nota de ajuste" de SIFA tiene dos equivalentes en SAP: baja por destrucción/pérdida → Mov. 551 en MIGO; diferencia de inventario → MI07. En SAP cada baja debe respaldarse con documento físico (Acta de Destrucción). SIFA generaba el documento automáticamente; en SAP el respaldo se adjunta al expediente del almacén.'
        },
        {
          id: '3.7', title: 'Reportes SAP MM — Referencia Rápida',
          type: 'sap-table',
          headers: ['Transacción', 'Nombre', 'Descripción', 'Uso Principal en CCSS'],
          rows: [
            ['MIGO',  'Entrada/Salida de Mercancías', 'Transacción central para todos los movimientos con referencia a documento', 'Recepción diaria de medicamentos de proveedores y ALDI'],
            ['MB1A',  'Salida sin referencia', 'Salidas de stock sin OC, directamente con centro de costo', 'Despacho 771 → 772 y a servicios clínicos'],
            ['MB1B',  'Traslado de Mercancías', 'Traslados entre almacenes del mismo centro o entre centros', 'Cuarentena → General. Traslados de emergencia entre UP'],
            ['MMBE',  'Resumen de Existencias', 'Vista rápida de stock en todos los niveles organizativos', 'Consulta instantánea de existencias de un medicamento'],
            ['MB52',  'Lista de Existencias en Almacén', 'Stock valorado y no valorado por centro, almacén y material', 'Inventario actual. Base para informes de gestión mensual'],
            ['MB51',  'Documentos de Movimientos', 'Historial completo con filtros por material, tipo de mov., fechas', 'Análisis de consumos mensuales. Rastreo para auditorías'],
            ['MB5M',  'Materiales por Fecha de Vencimiento', 'Materiales con lote que vence antes de una fecha de corte', 'Control mensual de vencimientos. Lista de riesgo a 90/180 días'],
            ['ME2M',  'Pedidos por Material', 'OC activas y estado de entrega por material', 'Verificar OC pendientes antes de solicitar compra urgente'],
            ['MI01',  'Crear Doc. de Inventario', 'Abre el proceso de inventario físico para almacén o subconjunto', 'Inicio de inventarios periódicos o cíclicos programados'],
            ['MI04',  'Registrar Conteo', 'Ingreso de cantidades contadas físicamente', 'Segunda etapa del inventario: cargar el conteo real al sistema'],
            ['MI07',  'Compensar Diferencias', 'Ajusta stock SAP al resultado del conteo físico', 'Cierre del inventario y ajuste de diferencias documentadas'],
            ['MB26',  'Lista de Picking', 'Preparación de pedidos para despacho por almacén', 'Preparación de despachos a servicios de salud'],
          ]
        },
        {
          id: 'CK-3', title: '✅ Lista de Verificación — Fase 3',
          type: 'checklist',
          phase: 3,
          items: [
            'Comprende la estructura organizativa de SAP en CCSS: mandante, sociedad, centro, almacén',
            'Consulta datos del maestro de materiales de un medicamento específico',
            'Ejecuta correctamente recepciones en MIGO (Mov. 101) con y sin referencia a OC',
            'Gestiona devoluciones a proveedor en SAP (Mov. 122)',
            'Registra salidas a servicios en MB1A (Mov. 201) con centro de costo correcto',
            'Ejecuta traslados entre almacenes en MB1B (Mov. 311/312)',
            'Ejecuta el proceso completo de inventario físico: MI01 → MI04 → MI07',
            'Genera e interpreta reportes de stock: MMBE, MB52, MB51',
            'Usa MB5M para control de vencimientos y genera plan de acción',
            'Consulta el estado de órdenes de compra con ME2M',
            'Identifica y escala errores técnicos de SAP a la mesa de ayuda de TI CCSS',
          ]
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       FASE 4 — Gestión Avanzada e Indicadores
    ════════════════════════════════════════════════════════ */
    {
      id: 4, level: '6 → 7', weeks: 'Semanas 15–18',
      color: '#B8520A', colorLight: '#FDF0E0',
      title: 'Gestión Avanzada e Indicadores',
      subtitle: 'KPIs y Toma de Decisiones',
      icon: '📊',
      objective: 'Gestionar el almacén con plena autonomía técnica, empleando indicadores de desempeño (KPIs), herramientas de análisis y protocolos para la toma de decisiones estratégicas.',
      sections: [
        {
          id: '4.1', title: 'KPIs Fundamentales del Almacén Farmacéutico',
          type: 'table',
          headers: ['KPI', 'Fórmula', 'Meta CCSS', 'Acción Correctiva'],
          rows: [
            ['Exactitud de inventario', '(Ítems sin diferencia / Total ítems) × 100', '≥ 95%', 'Si < 90%: investigación inmediata de causas'],
            ['Tasa de desabastecimiento', '(Ítems con stockout / Total ítems) × 100', '< 3% esenciales; 0% vitales', 'Revisar puntos de reorden, coordinación con abastecimiento'],
            ['Cobertura de stock (días)', 'Stock actual / Consumo promedio diario', '15–45 días según categoría', '< 15 días: urgente. > 60 días: riesgo vencimiento'],
            ['Tasa de vencimientos', '(Valor vencidos destruidos / Valor inventario inicial) × 100', '< 0.5% anual', 'Revisar planificación de pedidos y rotación'],
            ['Rotación de inventario', 'Consumo del período / Inventario promedio', '> 6 veces/año (categ. A)', 'Rotación baja = sobrestock o baja dispensación'],
            ['Cumplimiento de pedidos', '(Solicitudes completas / Total solicitudes) × 100', '≥ 98%', 'Documentar y reportar solicitudes no atendidas'],
            ['Tiempo de ciclo de recepción', 'Llegada → disponible en SAP', '≤ 24h normal; ≤ 4h urgencias', 'Revisar proceso de verificación y acceso a SAP'],
          ]
        },
        {
          id: '4.2', title: 'Análisis ABC/VEN — Metodología',
          type: 'list',
          items: [
            { icon: '📊', title: 'Paso 1: Obtener consumo', text: 'Exportar MB51 con todos los movimientos de salida (Mov. 201) del año a Excel.' },
            { icon: '💰', title: 'Paso 2: Calcular valor', text: 'Valor de consumo = Unidades × Precio unitario. Para cada medicamento.' },
            { icon: '📉', title: 'Paso 3: Ordenar y clasificar', text: 'Ordenar de mayor a menor valor. Calcular % acumulado del valor total.' },
            { icon: '🅰️', title: 'Categoría A', text: '70–80% del valor total. ~10–20% de los ítems. Control DIARIO, reorden automático, stock seguridad alto.' },
            { icon: '🅱️', title: 'Categoría B', text: '15–20% del valor. ~20–30% de los ítems. Control SEMANAL.' },
            { icon: '©️', title: 'Categoría C', text: '5–10% del valor. ~50–70% de los ítems. Control MENSUAL/TRIMESTRAL.' },
            { icon: '🔀', title: 'Cruzar con VEN', text: 'AV = máxima prioridad. AN = evaluar si se justifica mantener. CV = prioridad media aunque sea barato.' },
          ]
        },
        {
          id: '4.3', title: 'Planificación de Necesidades',
          type: 'table',
          headers: ['Parámetro', 'Fórmula / Criterio', 'Ejemplo Práctico'],
          rows: [
            ['Punto de Reorden', '(Consumo diario × Días de entrega) + Stock seguridad', 'Cons. 10 un/día × 15 días + 50 seg. = 200 un.'],
            ['Stock de Seguridad (Vital)', '30 días de consumo promedio', 'Si consume 100/mes → SS = 100 unidades'],
            ['Stock de Seguridad (Esencial)', '15 días de consumo promedio', 'Si consume 100/mes → SS = 50 unidades'],
            ['Stock de Seguridad (No esencial)', '7 días de consumo promedio', 'Si consume 100/mes → SS = 23 unidades'],
            ['Proyección anual', 'Consumo anterior × Factor ajuste', 'MB51 año anterior × 1.05 si +5% pacientes'],
          ]
        },
        {
          id: 'CMP-cierre', title: '🔶🔷 Cierre Mensual y Conciliación Contable',
          type: 'comparison',
          sifaTitle: 'SIFA / SIGES / SICS — 14 pasos',
          sapTitle: 'SAP ERP — Cierre de Período MM/FI',
          sifa: [
            'Involucra 3 sistemas: SIFA (inventario), SIGES (pedidos) y SICS (contabilidad).',
            'Se hace 3 días después de que pasa el mes anterior (ej: cierre de julio = 1 de agosto).',
            'SIFA: Almacén Local → Cierre Contable. Elegir ruta donde guardar el archivo.',
            'Rango de fechas: modificar solo el cuadro izquierdo.',
            'Ícono izquierdo: cargar cierre en archivo.',
            'Archivo → Carga cierre para formato SICS → Sí → se convierte al formato SICS.',
            'Ingresar al SICS. Comprobantes → llenar servicio, mes, año, despacho.',
            '"Cargar datos" → subir archivo SIFA. El cierre queda registrado en SICS.',
            '~15 días después: SICS → Consultas → Conciliación de existencias entre sistemas.',
            'SICS emite reporte con líneas que dieron error → investigar y justificar.',
            'Descargar 2 archivos: uno de precios y uno del cierre contabilizado.',
            'SIFA: Auxiliar Contable (Ctrl+X) → Archivos → Carga de datos de comprobación.',
            'Clic en "Cargar datos de comprobación" → seleccionar archivo descargado. Se aplica en SIFA.',
            'Actualizar precios: SIFA Ctrl+F4 → Catálogo: Lista de precios → buscar archivo de precios.',
          ],
          sap: [
            'El cierre de período es operación contable que afecta módulos MM y FI simultáneamente.',
            'El cierre de período MM lo ejecuta Contabilidad/Finanzas institucional — NO el Almacén Local.',
            'La Jefatura es responsable de tener todos los movimientos del período contabilizados ANTES del cierre.',
            'Verificar: MB51 → documentos no contabilizados del período. Solucionar antes del cierre.',
            'Conciliar inventario físico con SAP: MB52 comparado con conteo físico.',
            'Diferencias detectadas: ejecutar MI07 para compensarlas ANTES del cierre del período.',
            'Contabilidad ejecuta MMPV (cierre de período MM) para cerrar el mes.',
            'Post-cierre: SAP NO permite movimientos en el período cerrado (van al período siguiente).',
            'Actualización de precios: automática en SAP según tipo de valoración configurado.',
            'Conciliación SIGES/SIFA/SICS: la hace automáticamente el módulo FI-MM de SAP.',
          ],
          note: 'Lo más importante para el Almacén Local antes del cierre SAP: (1) todos los movimientos contabilizados, (2) inventario físico = SAP, (3) comunicar a Contabilidad que el almacén está listo. El proceso de 14 pasos del SICS queda reemplazado por la reconciliación automática MM-FI. No hay archivos que descargar ni cargar manualmente.'
        },
        {
          id: 'CK-4', title: '✅ Lista de Verificación — Fase 4',
          type: 'checklist',
          phase: 4,
          items: [
            'Calcula y monitorea mensualmente todos los KPIs institucionales del almacén',
            'Elabora el tablero de control mensual con análisis y plan de acción',
            'Ejecuta el análisis ABC/VEN con datos reales del sistema SAP',
            'Calcula puntos de reorden y stocks de seguridad para medicamentos críticos',
            'Elabora la proyección anual de necesidades basada en consumo histórico',
            'Aplica el protocolo completo de desabastecimiento ante situación real o simulada',
            'Prepara el almacén para auditoría interna o visita de la DFI',
            'Genera y analiza reportes SAP avanzados para la toma de decisiones',
            'Entiende y ejecuta el proceso de cierre mensual en SAP',
          ]
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       FASE 5 — Liderazgo y Control Institucional
    ════════════════════════════════════════════════════════ */
    {
      id: 5, level: '7 → 9', weeks: 'Semanas 19–23',
      color: '#8B1A1A', colorLight: '#FDF0F0',
      title: 'Liderazgo y Control Institucional',
      subtitle: 'Gestión del Equipo y Recursos',
      icon: '👥',
      objective: 'Ejercer liderazgo efectivo del equipo, gestionar los recursos humanos con apego a la normativa, liderar procesos de mejora continua y representar el área ante instancias de supervisión.',
      sections: [
        {
          id: '5.1', title: 'Competencias de Liderazgo para la Jefatura de Almacén',
          type: 'list',
          items: [
            { icon: '🔄', title: 'Liderazgo Situacional', text: 'Adaptar el estilo según competencia y motivación: Directivo (nuevos), Apoyo (con experiencia/baja motivación), Delegativo (competentes y motivados).' },
            { icon: '💬', title: 'Comunicación Efectiva', text: 'Reunión de equipo semanal 15–30 min. Crítica en privado, reconocimiento en público. Documentar instrucciones importantes por escrito.' },
            { icon: '⚡', title: 'Gestión del Conflicto', text: 'Identificar en etapa temprana. Abordar directamente y en privado. Escuchar todas las partes. Solucionar causas raíz. Escalar con documentación si es necesario.' },
            { icon: '📋', title: 'Delegación', text: 'Delegar con claridad: qué se espera, para cuándo, recursos disponibles, cómo reportar. NO delegar responsabilidades legales exclusivas de la Jefatura.' },
          ]
        },
        {
          id: '5.2', title: 'Gestión del Personal — Normativa CCSS',
          type: 'table',
          headers: ['Proceso', 'Instrumento CCSS', 'Responsabilidad de la Jefatura'],
          rows: [
            ['Evaluación del desempeño', 'Sistema institucional + SEVRI', 'Evaluar al equipo directo. Evidencia objetiva. Plan de mejora ante evaluación baja.'],
            ['Jornadas y turnos', 'Cuadro de turnos', 'Planificar con ≥ 2 semanas anticipación. Distribución equitativa de nocturnos y feriados.'],
            ['Capacitación', 'CENDEISSS + capacitaciones internas', 'Identificar brechas. Inscribir al personal. Documentar todas las capacitaciones recibidas.'],
            ['Ausencias y permisos', 'Reglamento CCSS', 'Gestionar sin comprometer la operación del almacén. Registro formal.'],
            ['Medidas disciplinarias', 'Reglamento Interior de Trabajo / Estatuto Servicio Civil', 'Llamadas de atención (1er nivel). Sanciones formales: coordinar con RRHH.'],
          ]
        },
        {
          id: '5.3', title: 'Estructura de Informes Institucionales',
          type: 'table',
          headers: ['Informe', 'Destinatario', 'Contenido clave', 'Plazo'],
          rows: [
            ['Mensual de gestión', 'Director + Coord. Farmacia', 'KPIs semáforo, movimientos, alertas vencimiento, acciones correctivas', 'Antes del día 10 del mes siguiente'],
            ['Trimestral de controlados', 'ICD + copia DFI', 'Inventario inicial, entradas, salidas por servicio, inventario final de cada controlado', '15 días hábiles post-trimestre'],
            ['Desabastecimiento', 'DFI + Dirección Regional', 'Medicamento, cantidad faltante, cobertura, impacto clínico, acciones, ETA', 'Inmediato ante vital/esencial > 3 días'],
            ['Anual de gestión', 'Dirección + DFI', 'Resumen anual de KPIs, análisis tendencias, logros, brechas, plan de mejora', 'Enero del año siguiente'],
          ]
        },
        {
          id: 'CK-5', title: '✅ Lista de Verificación — Fase 5',
          type: 'checklist',
          phase: 5,
          items: [
            'Lidera el equipo con un estilo adaptado a las necesidades de cada colaborador',
            'Realiza evaluaciones de desempeño objetivas y con retroalimentación documentada',
            'Elabora el cuadro de turnos y gestiona ausencias sin comprometer la operación',
            'Identifica necesidades de capacitación y gestiona su atención con CENDEISSS',
            'Elabora informes mensuales, trimestrales y anuales según formatos institucionales',
            'Participa activamente en la planificación presupuestaria anual',
            'Monitorea la ejecución presupuestaria mensual y reporta desviaciones',
            'Gestiona situaciones de conflicto con profesionalismo y apego a la normativa',
            'Representa al almacén en reuniones de coordinación interdepartamental',
          ]
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════
       FASE 6 — Maestría y Mejora Continua
    ════════════════════════════════════════════════════════ */
    {
      id: 6, level: '9 → 10', weeks: 'Semanas 24–26',
      color: '#1A3A5C', colorLight: '#E8EDF2',
      title: 'Maestría y Mejora Continua',
      subtitle: 'Excelencia Operativa y Estratégica',
      icon: '🏆',
      objective: 'Alcanzar la excelencia en el rol, convertirse en referente técnico institucional, liderar proyectos de mejora continua y contribuir al desarrollo del sistema SAP y la formación de otros funcionarios.',
      sections: [
        {
          id: '6.1', title: 'Ciclo PHVA Aplicado al Almacén',
          type: 'cards',
          items: [
            { label: 'P — Planificar', icon: '📐', text: 'Identificar el problema con datos (KPI que no cumple). Diagrama de Ishikawa o 5 Porqués. Objetivo SMART. Plan de acción con responsables y plazos.' },
            { label: 'H — Hacer', icon: '🔨', text: 'Implementar de forma controlada. Prueba piloto si es posible. Capacitar al personal involucrado antes del cambio. Documentar cada paso.' },
            { label: 'V — Verificar', icon: '🔍', text: 'Medir con los mismos KPIs del problema. Comparar antes vs. después. Si mejora: documentar para estandarizar. Si no: volver a Planificar con nueva info.' },
            { label: 'A — Actuar', icon: '✅', text: 'Estandarizar: actualizar manual de procedimientos, capacitar a todos. Comunicar resultados a Dirección y DFI. Definir el próximo ciclo de mejora.' },
          ]
        },
        {
          id: '6.2', title: 'Proyectos de Mejora Continua Aplicables',
          type: 'list',
          items: [
            { icon: '🔄', title: 'Inventario cíclico', text: 'Migrar de inventario anual a ciclos semanales para ítems categoría A. Mejora exactitud y distribuye la carga de trabajo.' },
            { icon: '📊', title: 'Dashboard digital', text: 'Conectar exportaciones SAP a Excel/Google Sheets para actualizar KPIs automáticamente. Reducir el tiempo del informe mensual de 8h a 1h.' },
            { icon: '📅', title: 'Reducción de vencimientos', text: 'Alerta temprana a 6 meses, comunicación proactiva a servicios, revisión del punto de reorden para ítems C.' },
            { icon: '📋', title: 'Estandarización de recepción', text: 'Lista de verificación por tipo de producto (ambiente, cadena de frío, controlados). Reducir tiempos de ciclo.' },
            { icon: '🌡️', title: 'Monitoreo digital de temperatura', text: 'Proponer implementación de dataloggers con alertas automáticas. ROI: costo del equipo vs. valor del inventario protegido.' },
          ]
        },
        {
          id: '6.3', title: 'Rutas de Certificación Recomendadas',
          type: 'table',
          headers: ['Certificación / Programa', 'Institución', 'Relevancia'],
          rows: [
            ['Programa de Gestión Farmacéutica', 'CENDEISSS — CCSS', 'BPA, cadena de frío, gestión de inventarios, SAP MM aplicado a CCSS'],
            ['SAP Certified Application Associate — MM', 'SAP Learning Hub', 'Certificación oficial SAP. Valida dominio del módulo a nivel internacional'],
            ['Gestión de Calidad ISO 9001', 'ICONTEC / Bureau Veritas', 'Herramientas PHVA, gestión por procesos, documentación de procedimientos'],
            ['Gestión de Suministro de Medicamentos', 'OPS/OMS — Campus Virtual', 'Gratuito. BPA, distribución, cadena de suministro en salud (enfoque ALC)'],
            ['Posgrado en Administración de Servicios de Salud', 'UCR / UNED', 'Complementa el perfil con herramientas académicas de alto nivel'],
          ]
        },
        {
          id: 'CK-6', title: '✅ Lista de Verificación — Fase 6',
          type: 'checklist',
          phase: 6,
          items: [
            'Comprende y comunica el rol estratégico del almacén en la cadena de valor de la salud',
            'Aplica sistemáticamente el ciclo PHVA para la mejora continua',
            'Ha implementado al menos un proyecto de mejora con resultados medibles y documentados',
            'Actúa como mentor efectivo para el personal nuevo del almacén',
            'Brinda apoyo técnico a otros almacenes o participa en visitas de supervisión',
            'Contribuye a la actualización de manuales y normativa institucional',
            'Analiza patrones de consumo y estacionalidad para planificación proactiva',
            'Ha obtenido o está en proceso de obtener al menos una certificación formal',
            'Es reconocido como referente técnico en gestión de almacenes farmacéuticos',
          ]
        }
      ]
    }
  ] // end phases
}; // end MANUAL_DATA
