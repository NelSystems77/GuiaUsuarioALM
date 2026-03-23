/* ============================================================
   Mi Manual ALM — Data Layer
   NelSystems | Contenido completo de las 6 fases
   ============================================================ */
'use strict';

const MANUAL_DATA = {
  meta: {
    title:    'Mi Manual ALM',
    subtitle: 'Jefatura de Almacén Local de Medicamentos',
    author:   'NelSystems — Área de Salud Goicoechea 1',
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

/* ============================================================
   EXTENSIÓN — Guías Operativas Oficiales CCSS
   Lote 1/4: Interfaz SIFA↔SAP + Pedidos + Reservas
   Fuente: Dirección Plan de Innovación, CCSS — 12/2024
   ============================================================ */
const GUIAS_OFICIALES = {
  meta: {
    title:    'Guías Operativas Oficiales — CCSS SAP',
    subtitle: 'Dirección Plan de Innovación — Componente Logístico',
    version:  'v1 · 12/2024',
    source:   'CCSS — Dirección Plan de Innovación'
  },
  categories: [

    /* ── GUÍA GT023: INTERFAZ SIFA ↔ ERP-SAP ─────────────────── */
    {
      id: 'GT023',
      code: 'GG-PIMG-CL-GT023',
      title: 'Interfaz SIFA ↔ ERP-SAP',
      subtitle: 'Guía Oficial de Integración de Sistemas',
      color: '#1A5276', colorLight: '#EAF2FB',
      icon: '🔗',
      version: 'Versión 01 · 12/2024',
      objective: 'Establecer el documento de referencia para la ejecución de movimientos entre ERP-SAP y SIFA, garantizando que ambos sistemas convivan, se comuniquen y se alimenten de datos mutuamente sin duplicar transacciones.',
      sections: [
        {
          id: 'GT023-intro', title: 'Introducción y Alcance',
          type: 'list',
          items: [
            { icon: '🏛️', title: 'Contexto institucional', text: 'Por disposición de Junta Directiva se implementa el ERP-SAP en áreas financiera, administrativa y logística de la CCSS. SIFA continúa como sistema de servicios farmacéuticos. Ambos sistemas coexisten y se comunican mediante interfaz.' },
            { icon: '🎯', title: 'Objetivo', text: 'Facilitar la ejecución de movimientos desde SAP hacia SIFA y de SIFA hacia SAP para reflejar los movimientos logísticos y contables necesarios. Ambos sistemas se alimentan mutuamente sin necesidad de duplicar transacciones.' },
            { icon: '📍', title: 'Alcance', text: 'De aplicación institucional para todos los funcionarios de Servicios de Farmacia que participen en: movimientos en SIFA, movimientos en ERP-SAP, uso de generalidades del ERP-SAP, y reglas de la interfaz de comunicación entre ambos sistemas.' },
            { icon: '⚠️', title: 'Principio clave', text: 'Se utilizarán AMBOS sistemas sin que se deba replicar la ejecución de transacciones en los dos. Es decir: si un movimiento se registra en SIFA, la interfaz lo traslada a SAP automáticamente; y viceversa. NO hay doble registro.' }
          ]
        },
        {
          id: 'GT023-glosario', title: 'Definiciones y Terminología SAP',
          type: 'table',
          headers: ['Término', 'Definición en contexto CCSS'],
          rows: [
            ['Almacén (SAP)', 'Unidad organizativa responsable de la gestión del inventario y operaciones de almacenamiento. Código: 771A (almacén local), 772A (despacho), 1100 (almacén principal local), 2810 (almacén satélite ejemplo).'],
            ['Categorías de Valoración', 'Agrupación de materiales con determinación de cuentas común. Puente de enlace con el componente financiero a través de las cuentas de mayor.'],
            ['Centro Logístico (CL)', 'Unidad organizativa en la cadena de suministro. El primer dígito de la unidad ejecutora se sustituye por: H=Hospital, A=Área de Salud, D=Dirección Regional, G=Gerencia.'],
            ['Datos Maestros (MM)', 'Datos núcleo de la organización. Incluyen información sobre materiales: código, nombre DCI, unidades de medida, grupo de artículo, categoría de valoración.'],
            ['Devolución', 'Movimiento que implica retorno de mercancías. Puede contabilizarse referenciando el pedido original.'],
            ['Entrada de mercancías', 'Movimiento de ingreso de materiales al almacén, ya sea de proveedor externo (Mov. 101) o desde fabricación/traslado.'],
            ['Grupos de artículos', 'Clasificación de materiales por tipo, origen y utilización. Ejemplo: MEDICIMENTOS, INSUMOS, EQUIPOS.'],
            ['Grupo artículos externos', 'Categoría de materiales adquiridos externamente. Facilita la planificación y seguimiento de compras.'],
            ['Salida de mercancías', 'Movimiento de consumo, despacho o envío de materiales. Ejemplo: Mov. 201 (salida a centro de costo), Z03 (venta de medicamentos).'],
            ['Sociedad', 'Entidad legal autónoma. En CCSS: código 1000 = Seguro de Salud.'],
            ['Traslado de mercancías', 'Movimiento entre almacenes del mismo centro (Mov. 311) o entre centros diferentes (Mov. 351).'],
          ]
        },
        {
          id: 'GT023-almacenes', title: 'Almacenes SAP para los Servicios de Farmacia',
          type: 'cards',
          items: [
            { label: 'Almacén Local 771 → SAP: 771A', icon: '🏗️', text: 'Almacén específico de cada unidad ejecutora con servicio de farmacia. Código SAP: 771A (ALM FARM 1). Equivale al Almacén Local de Medicamentos (ALM). Todos los movimientos de inventario del ALM se registran aquí.' },
            { label: 'Almacén Despacho 772 → SAP: 772A', icon: '🏪', text: 'El "gran 772" en SAP: incluye el despacho principal, EBAIS de la misma unidad ejecutora, bodegas satélites y servicios 800. Los movimientos INTERNOS del 772 solo interesan a SIFA. Solo afectan SAP cuando impactan positiva o negativamente el inventario total.' },
            { label: 'Almacén Principal Local: 1100', icon: '📦', text: 'Almacén principal local de cada Centro Logístico. Se usa como almacén suministrador en reservas (MB21). No confundir con 771A — el 1100 es el almacén raíz desde donde se realizan traslados al 771A.' },
            { label: 'ALDI San Francisco: G106', icon: '🚚', text: 'Centro logístico del Almacén Central CCSS San Francisco (almacén 1000). Centro suministrador para pedidos de traslado en ME21N. Equivale al ALDI principal que abastece las unidades de salud.' },
            { label: 'ALDI La Uruca: G109', icon: '🚚', text: 'Gerencia Logística La Uruca (almacén 1001 ALDI Especializado). Para pedidos de medicamentos especializados.' },
            { label: 'ALDI Puntarenas: G110', icon: '🚚', text: 'Gerencia Logística Puntarenas (almacén 1002). Para unidades de la región Pacífico Central.' },
          ]
        },
        {
          id: 'GT023-mov-sifa', title: 'Movimientos a Realizar en SIFA (se reflejan en SAP)',
          type: 'table',
          headers: ['Movimiento SIFA', 'Descripción', 'Afectación Inventario', 'Donde', 'Equiv. SAP'],
          rows: [
            ['23-32-0 (Crédito)', 'Gasto por venta de medicamentos', '-inv_772', '772 SIFA', 'Z03'],
            ['23-12-4 (Crédito)', 'Ajuste Inv. por retiro mercadería (Destrucción)', '-inv_772', '772 SIFA', 'Z51 motivo 0003'],
            ['23-12-1 (Crédito)', 'Ajuste Inv. por retiro mercadería (Producto dañado)', '-inv_772', '772 SIFA', 'Z51 motivo 0008'],
            ['23-12-2 (Crédito)', 'Ajuste Inv. por retiro mercadería (Obsolescencia)', '-inv_772', '772 SIFA', 'Z51 motivo 0005'],
            ['23-12-3 (Crédito)', 'Ajuste Inv. por retiro mercadería (Hurto / Robo)', '-inv_772', '772 SIFA', 'Z51 motivo 0004'],
            ['23-12-5 (Crédito)', 'Ajuste Inv. por retiro mercadería (Vencimiento)', '-inv_772', '772 SIFA', 'Z53'],
            ['23-14-0 (Crédito)', 'Ajuste Inv. gasto no reportado (crédito)', '-inv_772', '772 SIFA', '901'],
            ['23-33-0 (Crédito)', 'Gasto por pruebas de control de calidad', '-inv_772', '772 SIFA', 'Z51 motivo 0007'],
            ['23-10-0 (Crédito)', 'Ajuste Inv. por diferencia periodo actual (Crédito)', '-inv_772', '772 SIFA', '901'],
            ['29-0-0 (Crédito)', 'Salida del 772 a gasto', '-inv_772', '772 SIFA', '201'],
            ['23-13-0 (Débito)', 'Ajuste Inv. por reversión de un gasto (Débito)', '+inv_772', '772 SIFA', '902'],
            ['25-19-0 (Débito)', 'Reintegro al 772', '+inv_772', '772 SIFA', '202'],
            ['23-13-0 (Débito)', 'Ajuste Inv. por reversión de un gasto (Débito)', '+inv_771', '771 SAP', '902'],
            ['25-17-0 (Crédito)', 'Traslado (devolución) del 772 al 771 para devolver', '-inv_772 / +inv_771', '772 SIFA', '311'],
            ['27-21-0 (Crédito)', 'Traslado del 771 al 772', '-inv_771 / +inv_772', '771 SIFA', '311'],
            ['25-20 (Crédito)', 'Devolución de mercadería al ALDI por 772', 'Ver nota', '772 SIFA', 'Ver nota'],
            ['23-12-4 (Crédito)', 'Ajuste Inv. por retiro mercadería (Destrucción) — 771', '-inv_771', '771 SIFA', 'Z51 motivo 0003'],
            ['23-12-5 (Crédito)', 'Ajuste Inv. por retiro mercadería (Vencimiento) — 771', '-inv_771', '771 SIFA', 'Z53'],
          ]
        },
        {
          id: 'GT023-estados', title: 'Estados de la Interfaz — Tabla de Resultados',
          type: 'table',
          headers: ['Estado', 'Significado', 'Definición', 'Acción requerida'],
          rows: [
            ['P (SIFA→SAP)', 'Pendiente', 'Aún no se ha ejecutado o consumido por la interfaz. El movimiento está en cola.', 'Esperar. Si persiste más de 15 minutos, consultar con TI.'],
            ['E (SIFA→SAP)', 'Error', 'Al remitirse por la interfaz hacia SAP arrojó un error. El movimiento NO ha viajado a SAP.', '⚠️ Revisar los campos del movimiento, verificar que el código de material está en el Maestro SAP, y consultar con el equipo de TI.'],
            ['L (SIFA→SAP)', 'Listo', 'Resultado exitoso. El movimiento ha viajado hacia SAP correctamente.', 'Ninguna. El proceso se completó exitosamente.'],
            ['null (SAP→SIFA)', 'Pendiente', 'Aún no se ha ejecutado o consumido por la interfaz.', 'Esperar. Normal durante el procesamiento.'],
            ['E (SAP→SIFA)', 'Error', 'Al remitirse hacia SIFA arrojó un error. El movimiento NO ha viajado a SIFA.', '⚠️ Revisar campos, estado del movimiento y consultar con el equipo de TI.'],
            ['L (SAP→SIFA)', 'Listo', 'Resultado exitoso. El movimiento ha viajado hacia SIFA.', 'Ninguna. El proceso se completó exitosamente.'],
          ]
        },
        {
          id: 'GT023-campos-storage', title: 'Campos del Storage — Equivalencias SIFA ↔ SAP',
          type: 'table',
          headers: ['Campo SAP', 'Equivalente en SIFA', 'Observaciones clave'],
          rows: [
            ['Fecha Contable', 'Fecha en que se realiza el movimiento', 'Fecha en que quedará registrado el documento contablemente. Una vez finalizado el movimiento se homologa a SAP.'],
            ['Fecha Documento', 'Fecha de traslado a la interfaz', 'Fecha informativa, sin efecto contable.'],
            ['Texto de Cabecera', 'Número de consecutivo de SIFA', 'Identifica el movimiento en la interfaz para trazabilidad.'],
            ['Movimiento de Material', 'Número de movimiento SIFA', 'Define qué tipo de operación se ejecutará en SAP.'],
            ['Material', 'Código institucional del medicamento', '⚠️ CRÍTICO: Si el código no está en el Maestro de Materiales SAP, el movimiento dará ERROR. Verificar previamente.'],
            ['Centro Logístico Origen', 'Unidad ejecutora de origen (SIFA)', 'Unidad desde la cual se crea el movimiento.'],
            ['Centro Logístico Destino', 'Unidad ejecutora de destino (SIFA)', 'Unidad en la cual se recibe el movimiento.'],
            ['Almacén de origen', 'Almacén del cual sale el inventario', 'Código del almacén en SAP (ej: 771A).'],
            ['Almacén de destino', 'Almacén al cual llega el inventario', 'Código del almacén receptor en SAP (ej: 772A).'],
            ['Lote', 'Número de lote del material', 'Para movimientos del 771: tomado desde SIFA. Para movimientos del 772: se asigna desde la base de lotes según reglas FEFO. No es necesario digitarlo en movimientos del 772.'],
            ['Cantidad', 'Cantidad de salida o entrada', '⚠️ Las cantidades deben ajustarse a la unidad de medida base (UMB = UNIDAD).'],
            ['Centro de costo', 'Centro de costo SIFA', 'Se homologa sistemáticamente a lenguaje SAP mediante la interfaz.'],
          ]
        },
        {
          id: 'GT023-mov-sap', title: 'Movimientos a Realizar en SAP (se reflejan en SIFA)',
          type: 'table',
          headers: ['Mov. SAP', 'Descripción', 'Afectación', 'Equiv. SIFA (Cat-Subcat-Ind)'],
          rows: [
            ['351', 'Devolución de mercadería al ALDI por 771 — LIBRE UTILIZACIÓN', '-inv_771', 'Mov.25 Cat.16 Sub.0 Ind.2'],
            ['351', 'Devolución de mercadería al ALDI por 771 — BLOQUEADO', '-inv_771', 'Mov.25 Cat.16 Sub.0 Ind.2'],
            ['351', 'Traslado de un CL (771) a otro CL (771) — sale Origen LIBRE UTILIZACIÓN', '-inv_771 origen', 'Mov.17 Cat.21 Ind.2'],
            ['101', 'Compra de la Unidad con ingreso directo al 771', '+inv_771', 'Mov.21 Cat.7 Sub.0 Ind.1'],
            ['101', 'Recepción del traslado de un CL (771) a otro CL (771) — recibe destino', '+inv_771 destino', 'Mov.18 Cat.21 (vacía) Ind.1'],
            ['101', 'Recepción del traslado del ALDI en CL (771) — recibe destino', '+inv_771', 'Mov.27 Cat.21 (vacía) Ind.1'],
            ['311', 'Compra (traslado) de la Unidad con Ingreso al 1100 y traslado al 771', '+inv_771', 'Mov.27 Cat.21 Sub.0 Ind.1'],
            ['Z05', 'Ingreso de mercadería por Donación', '+inv_771', 'Mov.21 Cat.9 Ind.1'],
          ]
        },
        {
          id: 'GT023-botones', title: 'Generalidades SAP — Guía de Botones e Íconos',
          type: 'table',
          headers: ['Botón / Tecla', 'Nombre', 'Funcionalidad'],
          rows: [
            ['Ejecutar / F8', 'Ejecutar', 'Ejecuta o procesa los cambios realizados en la pantalla.'],
            ['✓ (check)', 'Tomar', 'Continuar con un valor seleccionado para ejecutar una acción.'],
            ['Grabar / Ctrl+S', 'Grabar', 'El sistema guarda todos los datos modificados.'],
            ['Match code (ícono)', 'Match code', 'Despliega la lista de opciones del campo que contiene el match code.'],
            ['Modificar / F6', 'Modificar', 'Permite cambiar datos en modo edición.'],
            ['Ícono página nueva', 'Entradas Nuevas', 'Permite insertar un valor nuevo en la línea.'],
            ['Ícono copiar', 'Copiar como', 'Permite seleccionar un valor y replicarlo en una nueva línea.'],
            ['Ícono texto', 'Hipertexto', 'Permite agregar un texto de comentario en la línea seleccionada.'],
            ['Ícono adjuntar', 'Adjuntar documento', 'Permite adjuntar un documento en la línea seleccionada.'],
            ['Ícono eliminar (-)', 'Borrado Lógico', 'Permite borrar una línea seleccionada.'],
            ['* (asterisco)', 'Asterisco', 'Al colocar asterisco en un campo, toma todos los valores existentes.'],
            ['Ícono candado', 'Posición Bloqueada', 'Abierto: usuario puede formular sobre la posición. Cerrado: no puede.'],
            ['Exportar (ícono)', 'Exportar', 'Exporta los datos de un ALV a un fichero (Excel).'],
            ['Filtro (ícono)', 'Filtro', 'Permite realizar el filtrado de una o varias columnas.'],
            ['Σ (sigma)', 'Totalizar', 'Botón para totalizar columnas numéricas.'],
            ['Imprimir (ícono)', 'Imprimir', 'Imprime la pantalla o reporte actual.'],
            ['Grabar como variante', 'Grabar como variante', 'Guarda los datos de entrada de una transacción como variante reutilizable.'],
            ['Borrar', 'Borrar', 'Elimina la línea o líneas seleccionadas.'],
            ['Marcar todo', 'Marcar todo', 'Selecciona todas las líneas de la pantalla.'],
          ]
        },
        {
          id: 'GT023-reportes', title: 'Visualización de Stocks — MB51, MB52, MMBE',
          type: 'steps',
          steps: [
            { num: 1, title: 'MB51 — Lista de Documentos de Material', color: '#1A5276', items: [
              'Acceder a la transacción MB51 desde el buscador SAP.',
              'Completar los campos recomendados: Centro Logístico correspondiente y Almacén (771A o 772A).',
              'Dar clic en Ejecutar.',
              'Resultado: materiales con descripción, centro logístico, almacén (771A), clase de movimiento de ingreso (101), posición en el pedido, fecha de contabilización, cantidad y unidades de medida.',
              'Las líneas naranja identifican el material y descripción. Las líneas siguientes muestran el detalle de cada movimiento.',
            ]},
            { num: 2, title: 'MB52 — Visualizar Stocks en Almacén por Material', color: '#1A5276', items: [
              'Acceder a la transacción MB52.',
              'Campos recomendados: Material (el que desee visualizar), Centro Logístico, Almacén (771A o 772A), Opciones de visualización: Representación jerárquica.',
              'Dar clic en Ejecutar.',
              'Resultado: cantidad de existencias del material por condiciones en 771A y el valor total.',
              'Muestra: libre utilización, tránsito/traslado, inspección de calidad, stock no libre, bloqueado, devoluciones — con valores totales.',
            ]},
            { num: 3, title: 'MMBE — Resumen de Stocks (Cockpit de Stock)', color: '#1A5276', items: [
              'Acceder a la transacción MMBE.',
              'Campos necesarios: Material, Centro Logístico, Almacén (771A o 772A).',
              'Dar clic en Ejecutar.',
              'Resultado organizado por niveles: (1) Valores totales "1000 Seguro de Salud" = sumatoria de todos los CL seleccionados. (2) Valores totales por Centro Logístico (ej: H104 H MEXICO). (3) Valores por área de planificación (H104_A771AC/H104_A/771A_ALM_FARM_1). (4) Valores por almacén (771A ALM FARM 1). (5) Cantidad por número de lote.',
              'Es la vista más completa para ver stock con lote, cantidad libre, en control calidad, en curso.',
            ]},
          ]
        },
        {
          id: 'GT023-lotes-772', title: 'Regla de Asignación de Lotes en el 772',
          type: 'list',
          items: [
            { icon: '🔄', title: 'Cómo funciona la Base de Lotes del 772', text: 'Los lotes del 772 se gestionan automáticamente. Los servicios de Farmacia aplican FEFO: primero en vencer, primero en despacharse. No es necesario digitar el lote en movimientos del 772; se asigna desde la base de datos de lotes externa a SIFA.' },
            { icon: '🔗', title: 'Fuente de los lotes del 772', text: 'La F27 (traslado del 771 al 772) alimenta la base de lotes disponibles para el 772, ya que es un egreso del 771 y un ingreso del 772. Los lotes se cargan automáticamente con fecha de vencimiento.' },
            { icon: '📋', title: 'Movimientos F29-F23-F25 por reintegro', text: 'Para devoluciones del 772 al 771 (F25 categoría 17), la interfaz interactúa con la base de lotes y la regla de asignación con el lote y fecha de vencimiento registrados.' },
            { icon: '⚠️', title: 'Movimientos internos del 772 solo visibles en SIFA', text: 'Los movimientos dentro del "gran 772" (entre EBAIS desconcentrados, bodegas satélites, servicios 800) son de interés exclusivo de SIFA y NO se reflejan en SAP hasta que afecten positiva o negativamente el inventario total.' },
          ]
        },
        {
          id: 'GT023-certificacion', title: 'Certificación de Saldos de Inventario',
          type: 'list',
          items: [
            { icon: '📄', title: 'Propósito', text: 'Formulario oficial CCSS que los encargados de farmacia deben firmar para certificar que los saldos de inventario de SIGES y/o SIFA son fieles y exactos antes de la migración al ERP-SAP.' },
            { icon: '✍️', title: 'Quiénes deben firmar', text: 'Director(a) Médico o Administrativo + Jefatura del Almacén 771, 772 y/o 895 (nombre del funcionario). Ambas firmas digitales son requeridas.' },
            { icon: '📁', title: 'Archivos que se certifican', text: 'Archivo SIGES: Inventario xxx(servicio). Archivo SIFA: Inventario ERPxxxxNOV2024 (u el período correspondiente). Los nombres exactos varían según la unidad y el mes.' },
            { icon: '⚖️', title: 'Base legal', text: 'Exenta de papel y timbre conforme al artículo 58 inciso b) de la Ley Constitutiva de la Caja Costarricense de Seguro Social.' },
            { icon: '🎯', title: 'Importancia', text: 'Esta información es fundamental para la implementación del Proyecto ERP-SAP dirigido por la Dirección del Plan de Innovación. Los saldos certificados se convierten en el inventario inicial de la unidad en SAP.' },
          ]
        },
      ]
    },

    /* ── GUÍA G5: PEDIDO AL ALDI — ME21N ─────────────────────── */
    {
      id: 'G5',
      code: 'Guía-CL-5',
      title: 'Pedido al ALDI desde un Centro Logístico',
      subtitle: 'Transacción ME21N — ZTRA Pedido de Traslado',
      color: '#006B8F', colorLight: '#E8F4F8',
      icon: '🛒',
      version: 'Dirección Plan de Innovación — CCSS',
      objective: 'Realizar el pedido mensual de materiales al ALDI (Área de Almacenamiento y Distribución) desde un Centro Logístico mediante la transacción ME21N en SAP, generando un Pedido de Traslado ZTRA.',
      sections: [
        {
          id: 'G5-pasos', title: 'Cómo Realizar un Pedido al ALDI — ME21N',
          type: 'steps',
          steps: [
            { num: 1, title: 'Acceso a la transacción', color: '#006B8F', items: [
              'Ingresar al Menú SAP.',
              'En el buscador digitar: ME21N.',
              'Ingresar a "Crear pedido".',
            ]},
            { num: 2, title: 'Selección del tipo de pedido y centro suministrador', color: '#006B8F', items: [
              'Junto al carrito de compras, seleccionar: ZTRA Pedido de Traslado.',
              'En el campo "Ce. suministrad." ingresar el código del ALDI al que se dirige el pedido:',
              '→ G106: Gerencia de Logística San Francisco (ALDI Central)',
              '→ G109: Gerencia Logística La Uruca (ALDI Especializado)',
              '→ G110: Gerencia Logística Puntarenas',
            ]},
            { num: 3, title: 'Datos de Cabecera — pestaña Dat.org.', color: '#006B8F', items: [
              'Ampliar y completar la sección de Datos de cabecera en la pestaña "Dat.org."',
              'Org. Compras: 1000 (Caja Costarricense de Seguro Social)',
              'Grupo compras: el código de la unidad que realiza el pedido (ejemplo: H15 para Hospital Max Peralta, H17 para H México, L01 para áreas de salud).',
              'Sociedad: 1000 (Seguro de Salud)',
            ]},
            { num: 4, title: 'Resumen de Posiciones — materiales solicitados', color: '#006B8F', items: [
              'En el apartado "Resumen de posiciones" ingresar:',
              'Material: número de material SAP de cada ítem a solicitar.',
              'Cantidad: unidades según el Sistema Internacional de Medidas.',
              'Fecha de entrega requerida.',
              'Centro: el código del CL que solicita (ejemplo: H306).',
              'Almacén: 1100 (almacén principal local del CL receptor).',
              'Dar Enter: el sistema completa automáticamente la información del material.',
            ]},
            { num: 5, title: 'Detalle de Posición — pestaña Entrega', color: '#006B8F', items: [
              'En "Detalle de posiciones" → pestaña "Entrega":',
              'Dar check en "EM RefSalMcia" para cada uno de los materiales.',
              'Tipo de stocks: Libre utilización.',
              'TmpoHastaCaduc: D (indica control de fecha de caducidad).',
            ]},
            { num: 6, title: 'Detalle de Posición — pestaña Imputación', color: '#006B8F', items: [
              'En pestaña "Imputación" verificar y completar:',
              'Fondos: CCSS',
              'Centro gestor: el código del CL que solicita (ejemplo: GM1403172306). Usar llave de búsqueda: *número-unidad-ejecutora (ej: *2306).',
              'PosPre: se completa automáticamente desde la creación del material (ejemplo: E/1120/29902/2990201 para insumos, E/1120/20102/2010201 para medicamentos).',
            ]},
            { num: 7, title: 'Grabar el pedido', color: '#007A54', items: [
              'Dar clic en el botón "Grabar".',
              'El sistema mostrará un diálogo: "¿Desea grabar el documento o tratar los datos?" → dar clic en "Grabar".',
              '✅ El sistema genera el número de Pedido de Traslado en la parte inferior de la pantalla (ejemplo: 5000000719).',
              '⚠️ Anotar este número — es la referencia del pedido para seguimiento.',
            ]},
            { num: 8, title: 'Notificar al ALDI', color: '#007A54', items: [
              'Enviar correo electrónico al ALDI correspondiente.',
              'Indicar en el correo: número de documento generado (ejemplo: 5000000719).',
              'El ALDI gestionará el aliste del pedido y programará la entrega.',
              'Para recibir el pedido cuando llegue: usar MIGO → A01 Entrada de mercancías → R05 Entrega → N° orden de entrega.',
            ]},
          ]
        },
        {
          id: 'G5-notas', title: 'Notas Importantes y Referencias',
          type: 'list',
          items: [
            { icon: '🔑', title: 'Llave de búsqueda para Centro Gestor', text: 'Para buscar el Centro Gestor de la unidad usar: *número-unidad-ejecutora. Ejemplo: si la UP es 2306, buscar *2306 y el sistema mostrará todos los centros gestores asociados.' },
            { icon: '📦', title: 'PosPre por tipo de material', text: 'La Posición Presupuestaria se completa automáticamente según la categoría de valoración del material. Para medicamentos es típicamente: E/1120/20102/2010201. Para insumos médicos: E/1120/29902/2990201.' },
            { icon: '📋', title: 'Seguimiento del pedido (ME23N)', text: 'Para consultar el estado del pedido: ME23N → Otro pedido → ingresar el N° de pedido. En la pestaña "Historia de Pedido" se visualiza el flujo completo, incluyendo "Activación Salida de Mercancía" que muestra el N° de orden de entrega para la recepción.' },
            { icon: '🔗', title: 'Relación con la Guía GT023', text: 'Este proceso genera un movimiento 101 en SAP al recibir el pedido, que se comunica automáticamente a SIFA mediante la interfaz. Equivale al movimiento SIFA: Mov.27, Cat.21 (vacía), Ind.1 — Recepción del traslado del ALDI en CL (771).' },
          ]
        },
      ]
    },

    /* ── GUÍA G6: RESERVA CENTRO DE COSTE — MB21 + MB26 ─────── */
    {
      id: 'G6',
      code: 'Guía-CL-6',
      title: 'Reserva para Centro de Coste y Despacho',
      subtitle: 'Transacciones MB21 (Mov. 201) + MB26 Lista de Picking',
      color: '#007A54', colorLight: '#E8F4F0',
      icon: '📋',
      version: 'Dirección Plan de Innovación — CCSS',
      objective: 'Crear una reserva de materiales para un centro de costo (servicio clínico) desde el almacén principal (1100) y ejecutar el despacho mediante la lista de picking (MB26), aplicando FEFO en la selección de lotes.',
      sections: [
        {
          id: 'G6-reserva', title: 'Parte 1: Creación de Reserva para Centro de Coste (MB21)',
          type: 'steps',
          steps: [
            { num: 1, title: 'Acceso a MB21', color: '#007A54', items: ['Ingresar al Menú SAP.', 'En el buscador digitar: MB21.', 'Ingresar a "Crear reserva".'] },
            { num: 2, title: 'Configuración del movimiento', color: '#007A54', items: ['Clase de movimiento: 201 (SM para centro de coste).', 'Centro: el código del Centro Logístico (ejemplo: H103 para H. Dr. Carlos Sáenz Herrera).', 'Dar Enter o clic en "Posiciones nuevas".'] },
            { num: 3, title: 'Búsqueda del Centro de Coste', color: '#007A54', items: ['En el campo "Centro de coste" ingresar los primeros dígitos de la unidad programática (ejemplo: 2103).', 'El sistema despliega los centros de coste asociados.', 'Dar clic en "Visualizar todos los resultados de búsqueda".', 'Seleccionar el centro de coste del servicio al que se le va a crear la reserva (ejemplo: 2103241010 = LAB MICROB Y QUIM CL).', 'Dar doble clic para seleccionarlo.'] },
            { num: 4, title: 'Ingreso de materiales', color: '#007A54', items: ['En el apartado de posiciones ingresar:', 'Número de material SAP.', 'Cantidad solicitada (en unidades de medida base).', 'Almacén: 1100 (almacén principal local).', 'Dar doble Enter.'] },
            { num: 5, title: 'Verificación de posición', color: '#007A54', items: ['El sistema muestra la pantalla de detalle de la posición.', 'Verifica material, texto, almacén (1100), cantidad de entrada y cantidad SKU.', 'El campo Lote se deja EN BLANCO al crear la reserva (el lote se selecciona después en MB26 según FEFO).', 'Dar Enter.', '⚠️ Si se requieren más materiales: repetir pasos 4 y 5 hasta completar todos los ítems.'] },
            { num: 6, title: 'Contabilizar la reserva', color: '#007A54', items: ['Regresar a la pantalla principal.', 'Dar clic en "Contabilizar".', '✅ El sistema genera el número de documento de reserva en la parte inferior (ejemplo: 0000011918).', 'Anotar este número — se necesitará para el paso de MB26.'] },
          ]
        },
        {
          id: 'G6-picking', title: 'Parte 2: Despacho mediante Lista de Picking (MB26)',
          type: 'steps',
          steps: [
            { num: 1, title: 'Acceso a MB26 desde MB21', color: '#006B8F', items: ['Estando en la transacción MB21 (o cualquier transacción), en la barra "Indicar código de transacción" digitar: /NMB26', 'El sistema navega a la "Lista de picking".'] },
            { num: 2, title: 'Ingresar número de reserva', color: '#006B8F', items: ['En el campo "Número de reserva" ingresar el número generado en MB21 (ejemplo: 11918).', 'Dar clic en "Ejecutar".'] },
            { num: 3, title: 'Seleccionar materiales para determinar lotes', color: '#006B8F', items: ['La pantalla muestra todos los materiales de la reserva con sus cantidades.', 'Dar check a TODOS los materiales.', 'Dar clic en el botón "Determin.lotes" (Determinación de lotes).'] },
            { num: 4, title: 'Determinación de lotes FEFO', color: '#006B8F', items: ['Para cada material, el sistema muestra los lotes disponibles con cantidades y fechas de vencimiento.', 'Seleccionar el lote con fecha de vencimiento más próxima (FEFO = First Expired, First Out).', 'Ingresar la cantidad a despachar en el campo "Ctd.partición".', 'Dar clic en "Tomar".', 'Si hay varias líneas, el sistema pasa automáticamente al siguiente material.', 'Repetir con todos los materiales.'] },
            { num: 5, title: 'Verificar lotes seleccionados', color: '#006B8F', items: ['Al regresar a la pantalla principal, verificar que en la columna "Lote" aparece el lote seleccionado para cada material.', 'Los materiales con el check marcado están listos para contabilizar.'] },
            { num: 6, title: 'Contabilizar el despacho', color: '#007A54', items: ['Dar clic en "Contabilizar".', '✅ El sistema confirma: "Movimientos mercancías contabilizados: N, erróneos: 0"', 'El número de movimientos corresponde a la cantidad de materiales despachados.', 'Si hay errores: revisar que los lotes seleccionados tengan stock suficiente en el almacén 1100.'] },
          ]
        },
        {
          id: 'G6-notas', title: 'Notas y Consideraciones Importantes',
          type: 'list',
          items: [
            { icon: '🏗️', title: 'Almacén fuente siempre es 1100', text: 'Las reservas para centro de coste (Mov. 201) siempre toman los materiales del almacén 1100 (Almacén Principal Local del CL). El almacén 771A es el almacén de medicamentos — para dispensar medicamentos a servicios usar el flujo SIFA correspondiente.' },
            { icon: '📅', title: 'FEFO obligatorio', text: 'Siempre seleccionar el lote con fecha de vencimiento más próxima. La clase de característica en MB26 muestra la fecha de vencimiento de cada lote para facilitar la selección.' },
            { icon: '🔗', title: 'Relación con la interfaz SIFA-SAP', text: 'Este movimiento 201 en SAP equivale al movimiento SIFA: Mov.29 Cat.0 Sub.0 Ind.2 "Salida del 772 a gasto". La interfaz comunica automáticamente el movimiento a SIFA.' },
            { icon: '📱', title: 'Acceso directo a MB26', text: 'También se puede acceder a MB26 directamente desde el buscador SAP sin necesidad de pasar por MB21, ingresando el número de reserva en el campo correspondiente.' },
          ]
        },
      ]
    },

    /* ── GUÍA G4: RESERVA ALMACÉN SATÉLITE — MB21 + MB26 ────── */
    {
      id: 'G4',
      code: 'Guía-CL-4',
      title: 'Reserva para Almacén Satélite y Despacho',
      subtitle: 'Transacciones MB21 (Mov. 311) + MB26 Lista de Picking',
      color: '#5B2D8E', colorLight: '#F0EBF8',
      icon: '🏪',
      version: 'Dirección Plan de Innovación — CCSS',
      objective: 'Crear una reserva de materiales para un almacén satélite (sucursal, EBAIS, almacén dependiente) desde el almacén principal (1100) y ejecutar el despacho mediante la lista de picking (MB26), aplicando FEFO.',
      sections: [
        {
          id: 'G4-diferencia', title: 'Diferencia clave: Centro de Coste vs. Almacén Satélite',
          type: 'table',
          headers: ['Aspecto', 'Reserva a Centro de Coste (G6)', 'Reserva a Almacén Satélite (G4)'],
          rows: [
            ['Clase de movimiento', '201 (SM para centro de coste)', '311 (TR Traslado en ce.)'],
            ['Destino', 'Centro de costo de un servicio clínico', 'Almacén satélite (ejemplo: código 2810)'],
            ['Campo requerido', 'Centro de coste (buscar por UP)', 'Almacén receptor (código del satélite)'],
            ['Uso típico', 'Dispensar a laboratorio, UCI, urgencias', 'Abastecer EBAIS, bodega satélite, sucursal'],
            ['Registro en SIFA', 'Salida del 772 a gasto (Mov.29)', 'Traslado del 771 al 772 (Mov.27-21)'],
          ]
        },
        {
          id: 'G4-reserva', title: 'Parte 1: Creación de Reserva para Almacén Satélite (MB21)',
          type: 'steps',
          steps: [
            { num: 1, title: 'Acceso a MB21', color: '#5B2D8E', items: ['Ingresar al Menú SAP.', 'En el buscador digitar: MB21.', 'Ingresar a "Crear reserva".'] },
            { num: 2, title: 'Configuración del movimiento', color: '#5B2D8E', items: ['Clase de movimiento: 311 (TR Traslado en centro).', '⚠️ Este es un movimiento constante — NO variarlo para que la interfaz funcione correctamente.', 'Centro: el código del Centro Logístico (ejemplo: H103).', 'Dar Enter o clic en "Posiciones nuevas".'] },
            { num: 3, title: 'Ingresar el Almacén Receptor', color: '#5B2D8E', items: ['En el campo "Almacén receptor" ingresar el código del almacén satélite de destino (ejemplo: 2810).', 'Este campo diferencia esta reserva de la reserva a centro de coste.'] },
            { num: 4, title: 'Ingreso de materiales en posiciones', color: '#5B2D8E', items: ['En el apartado de posiciones ingresar:', 'Material: número de material SAP.', 'Cantidad solicitada.',  'Almacén suministrador: 1100 (almacén principal local).', 'Dar doble Enter.'] },
            { num: 5, title: 'Verificación de posición', color: '#5B2D8E', items: ['El sistema muestra el detalle de posición: material, texto, almacén (1100), cantidad.', 'El campo Lote se deja EN BLANCO al crear la reserva.', 'Dar Enter.', 'Si se requieren más materiales: repetir pasos 4 y 5.'] },
            { num: 6, title: 'Contabilizar la reserva', color: '#5B2D8E', items: ['Dar clic en "Contabilizar".', '✅ El sistema genera el número de documento en la parte inferior (ejemplo: 0000011921).', 'Anotar para usar en MB26.'] },
          ]
        },
        {
          id: 'G4-picking', title: 'Parte 2: Despacho mediante Lista de Picking (MB26)',
          type: 'steps',
          steps: [
            { num: 1, title: 'Acceder a MB26', color: '#5B2D8E', items: ['Desde la barra de transacción digitar: /NMB26', 'O buscar MB26 en el menú SAP.'] },
            { num: 2, title: 'Ingresar número de reserva', color: '#5B2D8E', items: ['Ingresar el número de reserva generado (ejemplo: 11921).', 'Dar clic en Ejecutar.'] },
            { num: 3, title: 'Seleccionar materiales y determinar lotes', color: '#5B2D8E', items: ['Verificar los materiales en pantalla.', 'Dar check a todos los materiales.', 'Dar clic en "Determin.lotes".'] },
            { num: 4, title: 'Selección FEFO de lotes', color: '#5B2D8E', items: ['Para cada material: revisar los lotes disponibles y sus fechas de vencimiento.', 'Seleccionar el lote más próximo a vencer (FEFO).', 'Ingresar cantidad en "Ctd.partición".', 'Dar clic en "Tomar".', 'Repetir para todos los materiales.'] },
            { num: 5, title: 'Verificar y Contabilizar', color: '#007A54', items: ['Verificar que cada material muestra el lote seleccionado en la columna "Lote".', 'Dar clic en "Contabilizar".', '✅ Mensaje de confirmación: "Movimientos mercancías contabilizados: N, erróneos: 0"'] },
          ]
        },
      ]
    }

  ] // end categories (lote 1)
}; // end GUIAS_OFICIALES (temporary)

/* ── EXTENSIÓN LOTE 2 ─────────────────────────────────────────
   Guías: Inicio Operaciones IM, Glosario SAP, Recepción ALDI,
   Manual Reportes MM-IM E16-E38, Introducción a SAP
   ──────────────────────────────────────────────────────────── */
GUIAS_OFICIALES.categories.push(

  /* ── GUÍA IM: INICIO DE OPERACIONES ────────────────────── */
  {
    id: 'IM-INICIO',
    code: 'IM-Guía-Inicio',
    title: 'Guía de Inicio de Operaciones — IM',
    subtitle: 'Inventario de Almacenes — Primeros Pasos en SAP',
    color: '#007A54', colorLight: '#E8F4F0',
    icon: '🚀',
    version: 'Dirección Plan de Innovación — CCSS',
    objective: 'Facilitar la familiarización del funcionario con el sistema SAP, permitiéndole ubicarse en el módulo de Inventario de Almacenes (IM) y proporcionarle los primeros pasos según las tareas que deba ejecutar.',
    sections: [
      {
        id: 'IM-INICIO-acciones', title: 'Acciones de Inicio — Checklist de Arranque',
        type: 'steps',
        steps: [
          { num: 1, title: 'Acceso al usuario', color: '#007A54', items: ['Verificar que se tiene acceso al usuario correspondiente en SAP.', 'Tener a mano la contraseña institucional.', 'URL capacitación: https://ariq.ccss.sa.cr:44320/fiqas', 'URL producción: https://ari.ccss.sa.cr:44320/fiprd', 'Problemas de acceso: Mesa de Servicios TI https://serviciostic.ccss.sa.cr:8553/CAisd/pdmweb.exe'] },
          { num: 2, title: 'Identificación de transacciones', color: '#007A54', items: ['Determinar cuáles son las transacciones más utilizadas en el proceso asignado.', 'Transacciones principales IM: MB21, MB26, MB51, MB52, MMBE, MB5M, MIGO, ME21N, ME23N.'] },
          { num: 3, title: 'Configuración de pantalla', color: '#007A54', items: ['Personalizar la pantalla de inicio (Home) del Fiori Launchpad.', 'Agregar los Tiles (mosaicos) de las transacciones más utilizadas.', 'Organizar por grupos según el flujo de trabajo diario.'] },
          { num: 4, title: 'Parametrización personal', color: '#007A54', items: ['Realizar la configuración del centro asignado como parámetro por defecto.', 'Esto evita tener que ingresar el centro logístico cada vez que se accede a una transacción.', 'Menú: Perfil personal → Parametrización personal.'] },
          { num: 5, title: 'Identificar el proceso a seguir', color: '#007A54', items: [
            'Según la necesidad, seleccionar el proceso adecuado:',
            '→ Verificación de Stocks: MMBE, MB52',
            '→ Generación de pedido Ordinario: ME21N (ZTRA)',
            '→ Recepción de Mercadería: MIGO (R05 Entrega o R01 Pedido)',
            '→ Creación de reservas: MB21 (Mov. 201 o 311) + MB26',
            '→ Impresión de documentos: desde cada transacción → Más → Lista → Imprimir',
            '→ Generación de reportes de vencimiento: MB5M',
            '→ Inventario: MI01 → MI04 → MI07',
          ]},
        ]
      },
      {
        id: 'IM-INICIO-flujo', title: 'Mapa de Procesos IM — Qué transacción usar',
        type: 'table',
        headers: ['Necesidad', 'Transacción', 'Descripción rápida'],
        rows: [
          ['¿Cuánto stock tengo?', 'MMBE / MB52', 'Ver existencias por material, almacén y lote'],
          ['¿Qué movimientos hubo?', 'MB51', 'Historial completo de entradas/salidas con filtros'],
          ['¿Qué vence pronto?', 'MB5M', 'Lista de materiales por fecha de caducidad'],
          ['¿Qué hubo en tal fecha?', 'MB5B', 'Stock a una fecha específica de contabilización'],
          ['Pedir al ALDI', 'ME21N → ZTRA', 'Crear pedido de traslado al ALDI (G106/G109/G110)'],
          ['Ver estado del pedido', 'ME23N', 'Visualizar historial y estado de un pedido'],
          ['Recibir del ALDI', 'MIGO → R05 Entrega', 'Entrada de mercancías por número de entrega'],
          ['Reservar para servicio', 'MB21 (Mov.201) + MB26', 'Reservar y despachar a centro de costo'],
          ['Reservar para satélite', 'MB21 (Mov.311) + MB26', 'Reservar y despachar a almacén satélite'],
          ['Revisar docs anulados', 'MBSM', 'Visualizar documentos de material anulados'],
          ['Inventario físico', 'MI01 → MI04 → MI07', 'Crear doc → Registrar conteo → Compensar diferencias'],
          ['Donación', 'MIGO → Z05', 'Ingreso de mercadería por donación al 771A'],
        ]
      }
    ]
  },

  /* ── GLOSARIO SAP ERP ───────────────────────────────────── */
  {
    id: 'GLOSARIO-SAP',
    code: 'Diccionario SAP ERP',
    title: 'Glosario de Términos SAP ERP',
    subtitle: 'Conceptos Generales — Interfaz Fiori y SAP GUI',
    color: '#1A5276', colorLight: '#EAF2FB',
    icon: '📖',
    version: 'Dirección Plan de Innovación — CCSS',
    objective: 'Diccionario de términos generales del sistema SAP ERP para el contexto CCSS, incluyendo conceptos de navegación Fiori, arquitectura del sistema y terminología básica de usuario.',
    sections: [
      {
        id: 'GLOSARIO-fiori', title: 'Términos de Interfaz Fiori',
        type: 'table',
        headers: ['Término', 'Definición'],
        rows: [
          ['Página de Inicio (Home)', 'Centro del Launchpad (Plataforma) y punto central de acceso para las aplicaciones Fiori. Basado en roles: solo muestra las aplicaciones relevantes para el usuario.'],
          ['Tile (Mosaico)', 'Un "Tile" provee acceso directo a las aplicaciones o contenido. Son de estilo íconos y rectangulares. Tipos: estáticos, dinámicos, RSS, URL, KPI, Charts, Monitoring.'],
          ['Grupos', 'Los Tiles son organizados en Grupos, listados en la barra superior de la página. Permite navegar entre colecciones de aplicaciones organizadas por función.'],
          ['Plataforma (Launchpad)', 'Contenedor a modo de ejecución que soporta navegación para los componentes: SAPUI5, Web Dynpro ABAP o GUI y URL Externa.'],
          ['Shell Bar', 'Barra superior siempre visible del Fiori Launchpad. Contiene: logotipo, título de página, búsqueda enterprise, notificaciones y menú de acciones.'],
          ['App Finder (Busc.Aplic.)', 'Permite navegar entre diferentes tipos de aplicaciones (Fiori, SAP GUI, Web Dynpro ABAP) y agregarlas al Home del Launchpad.'],
          ['Menú de Acciones', 'Ícono superior derecho. Opciones: Configuraciones generales, Catálogo de aplicaciones, Objetos vistos recientemente, Ayuda, Salir, Soporte.'],
          ['Tile KPI', 'Tipo de tile para medir y monitorear performance operacionales (KPIs). Muestra indicadores clave en tiempo real en el Launchpad.'],
        ]
      },
      {
        id: 'GLOSARIO-sap', title: 'Terminología Básica SAP',
        type: 'table',
        headers: ['Término', 'Definición'],
        rows: [
          ['SAP', 'Systems, Applications, Products in Data Processing. Sistema informático de gestión empresarial alemán que se compone de módulos por área (logística, finanzas, RRHH, etc.).'],
          ['SAP S/4HANA', 'SAP Business Suite 4 SAP HANA. Cuarta versión de SAP Business Suite, diseñada para ejecutarse en SAP HANA. La versión utilizada por la CCSS.'],
          ['SAP HANA', 'Solución que combina Base de Datos, procesado de datos y plataforma de aplicaciones in-memory y en tiempo real.'],
          ['ERP', 'Enterprise Resource Planning (Planificación de Recursos Empresariales). Sistema que integra todos los procesos de una organización.'],
          ['Datos Maestros', 'Colección de información sobre una persona u objeto (proveedor, material, cliente). Son el núcleo de datos del sistema.'],
          ['Perfil del Usuario', 'Colección de autorizaciones que ha recibido un usuario para llevar a cabo las transacciones relacionadas con su trabajo.'],
          ['Código de Transacción', 'Mando único que indica la ubicación de una tarea del sistema. Puede contener solo letras o combinación de letras y números (ej: MIGO, MB51, ME21N).'],
          ['SAP GUI', 'Interfaz gráfica de usuario para acceder al sistema SAP desde escritorio Windows. La interfaz tradicional de SAP.'],
          ['SAP Fiori', 'Interfaz web moderna de SAP. Acceso mediante navegador. Más intuitiva que SAP GUI. La CCSS usa ambas.'],
          ['Mandante', 'Nivel organizativo más alto en SAP. Contiene todos los datos de la empresa. La CCSS tiene un mandante productivo y uno de capacitación.'],
          ['ALV', 'ABAP List Viewer. Formato de reportes dinámicos en SAP que permite exportar a Excel, filtrar, ordenar y personalizar columnas.'],
          ['Modo nuevo (/o)', 'Abrir una nueva sesión SAP simultánea. Se logra con /o#### en el campo de comandos. Permite trabajar en varias transacciones a la vez.'],
          ['F1 (Ayuda de campo)', 'Tecla para visualizar explicación de campos, menús, funciones y mensajes. También muestra información técnica del campo.'],
          ['F4 (Ayuda de entrada)', 'Tecla para visualizar posibles valores de entrada para un campo. Despliega lista de opciones del match code.'],
          ['F8 / Ejecutar', 'Botón o tecla para ejecutar un reporte o transacción con los parámetros ingresados.'],
          ['Ctrl+S / Grabar', 'Guardar/Contabilizar el documento actual en SAP.'],
          ['SP02', 'Transacción para administrar órdenes de impresión (Spool). Para reimprimir documentos generados anteriormente.'],
          ['SM37', 'Transacción para monitorear trabajos en fondo (Background Jobs). Ver estado de procesos programados.'],
        ]
      },
      {
        id: 'GLOSARIO-mensajes', title: 'Tipos de Mensajes en SAP',
        type: 'table',
        headers: ['Tipo', 'Significado', 'Comportamiento', 'Acción requerida'],
        rows: [
          ['"S" Success (Éxito)', 'Operación completada exitosamente', 'Aparece en la barra de estado. No interrumpe el trabajo.', 'Ninguna. El proceso se ejecutó correctamente. Anotar el número de documento generado.'],
          ['"I" Information (Información)', 'Información importante para el usuario', 'Aparece en ventana de diálogo separada.', 'Leer y confirmar presionando Enter o el botón OK.'],
          ['"W" Warning (Advertencia)', 'Situación que requiere atención', 'Interrumpe el proceso pero permite continuar. Aparece en barra de estado o diálogo.', 'Revisar la advertencia. Presionar Enter para confirmar y continuar si la situación es aceptable.'],
          ['"E" Error', 'El proceso no puede continuar', 'Interrumpe completamente. Aparece en ventana de diálogo separada.', '⚠️ OBLIGATORIO corregir el error antes de continuar. El sistema no permite avanzar hasta resolver la causa.'],
        ]
      },
      {
        id: 'GLOSARIO-comandos', title: 'Comandos del Campo de Comandos SAP',
        type: 'table',
        headers: ['Comando', 'Resultado'],
        rows: [
          ['/n', 'Cancelar la transacción actual y volver al menú principal.'],
          ['/n####', 'Llamar la transacción #### directamente desde otra transacción (en la misma sesión).'],
          ['/o', 'Visualizar un resumen de los modos (sesiones) abiertos actualmente.'],
          ['/o####', 'Llamar la transacción #### en una sesión nueva directamente.'],
          ['/nend', 'Salir del sistema con ventana de confirmación.'],
          ['/nex', 'Salir del sistema sin ventana de confirmación.'],
          ['/i', 'Borrar (cerrar) el modo (sesión) actual.'],
        ]
      },
      {
        id: 'GLOSARIO-arquitectura', title: 'Arquitectura SAP S/4HANA — 3 Niveles',
        type: 'cards',
        items: [
          { label: 'Nivel de Presentación', icon: '🖥️', text: 'Capa donde se conectan los usuarios y terminales de trabajo. Garantiza la interacción con el usuario final. Aquí opera SAP GUI y SAP Fiori.' },
          { label: 'Nivel de Aplicación', icon: '⚙️', text: 'Capa donde se interactúan los desarrolladores. Contiene el código ABAP. Funciona como controladora entre presentación y base de datos. Gestiona memoria y rendimiento.' },
          { label: 'Nivel de Base de Datos', icon: '🗄️', text: 'Vinculado con los discos duros (o in-memory en HANA). Almacena todos los datos del servidor. Alta velocidad y precisión. Incluye todos los programas ABAP y datos de procesos.' },
        ]
      }
    ]
  },

  /* ── GUÍA G1: RECEPCIÓN DE PEDIDO DEL ALDI ─────────────── */
  {
    id: 'G1',
    code: 'Guía-CL-1',
    title: 'Recepción de Pedido del ALDI',
    subtitle: 'Transacción MIGO — R05 Entrega (Mov. 101)',
    color: '#006B8F', colorLight: '#E8F4F8',
    icon: '📥',
    version: 'Dirección Plan de Innovación — CCSS',
    objective: 'Realizar la recepción física y sistemática del pedido ordinario o de traslado enviado por el ALDI, verificando material, cantidad, lote y fecha de caducidad antes de contabilizar la entrada en SAP.',
    sections: [
      {
        id: 'G1-prereq', title: 'Prerequisitos — Antes de Recibir',
        type: 'list',
        items: [
          { icon: '📋', title: 'Tener la "factura" del pedido a mano', text: 'El ALDI emite una factura/remisión del pedido con: código de artículo, lote, fecha de vencimiento, cantidad máxima, cantidad despachada y precio unitario. Este documento es la referencia para la verificación física.' },
          { icon: '🔢', title: 'Número de Entrega de Traslado', text: 'El ALDI proporciona el número de Entrega de Salida (ej: 80000205). Este número se obtiene desde la pestaña "Historia de Pedido" en ME23N → buscar la línea "Activación Salida de Mercancía".' },
          { icon: '📦', title: 'Verificación física previa', text: 'Antes de ingresar a SAP: contar físicamente los materiales, verificar empaque, fechas de vencimiento (mínimo 75% vida útil), temperatura de transporte para cadena de frío.' },
        ]
      },
      {
        id: 'G1-pasos', title: 'Proceso de Recepción — MIGO R05 Entrega',
        type: 'steps',
        steps: [
          { num: 1, title: 'Acceso a MIGO', color: '#006B8F', items: ['Ingresar al Menú SAP.', 'En buscar: digitar MIGO.', 'Ingresar a "Movimiento de mercancías".'] },
          { num: 2, title: 'Configurar la entrada de mercancías', color: '#006B8F', items: ['En "Actividad": seleccionar A01 Entrada de mercancías.', 'En "Docum.referenc.": seleccionar R05 Entrega.', 'En "Entrega de salida": digitar el número de entrega del ALDI (ej: 80000205).', 'En "EM Entr.mercancías": verificar que sea 101.', 'Dar Enter.'] },
          { num: 3, title: 'Revisar cabecera del documento', color: '#006B8F', items: ['SAP despliega toda la información del pedido.', 'En "Datos de cabecera" → pestaña "General": verificar que las fechas (documento y contabilización) coincidan con la fecha actual o la de recepción física.', 'Revisar de forma general la lista de insumos solicitados.'] },
          { num: 4, title: 'Verificar pestaña Material', color: '#006B8F', items: ['En "Datos detallados" → pestaña "Material":','Revisar nombre del material, código SAP (ej: 8000000201).', 'Verificar grupo de artículos (ej: M001002 para agujas).', 'Verificar clase de valoración del material.'] },
          { num: 5, title: 'Verificar pestaña Cantidad', color: '#006B8F', items: ['Pestaña "Cantidad":','Ctd. en UM de entrada = cantidad física recibida.', 'Ctd. en UM de almacén = debe coincidir.', 'Ctd. en nota entrega = cantidad que el ALDI indica haber despachado.', 'Cantidad pedida = lo que se solicitó originalmente.', '⚠️ Si las cantidades no coinciden: ajustar la cantidad recibida a la real.'] },
          { num: 6, title: 'Verificar pestaña Se (Segmento)', color: '#006B8F', items: ['Pestaña "Se":','Clase de movimiento: debe ser 101.', 'Centro: el Centro Logístico receptor (ej: H101, A230).', 'Almacén: ALM PRINCIPAL 1 (código 1100).', 'Tipo de stocks: Libre utilización.'] },
          { num: 7, title: 'Verificar pestaña Datos pedido', color: '#006B8F', items: ['Pestaña "Datos pedido":','Visualizar el número de pedido que el CL realizó al ALDI (ej: 5000000642).', 'Tipo posición: Traslado.', 'Ind.entrega final: 1 Fijar automáticamente.'] },
          { num: 8, title: 'Verificar pestaña Interlocutor', color: '#006B8F', items: ['Pestaña "Interl.":','Proveedor: GERENCIA DE LOGISTICA (para pedidos al ALDI).', 'Centro suministrador: G106 (u otro ALDI según corresponda).'] },
          { num: 9, title: 'Verificar pestaña Lote', color: '#006B8F', items: ['Pestaña "Lote":','Lote: número de lote del ALDI (ej: AGUJA).', 'Lote de proveedor: mismo número.', 'Fe.fabricación: fecha de fabricación (ej: 05.01.2024).', 'FeCaduc/FePreferCons: fecha de caducidad (ej: 05.01.2026).', 'Clase de valoración: código del material (ej: AGUJA).', '⚠️ Verificar que la fecha de caducidad corresponde a lo físicamente recibido.'] },
          { num: 10, title: 'Verificar pestaña Imputación', color: '#006B8F', items: ['Pestaña "Imputación":','Fondos: CCSS.', 'Área funcional: ZTEMPORA/TEMPOR (temporal durante implementación).', 'Centro gestor: código del CL (ej: GM1203132101).', 'PosPre: presupuestario (ej: Z/0000/BANCO/0000001).'] },
          { num: 11, title: 'Marcar Posición OK', color: '#006B8F', items: ['Una vez verificados TODOS los datos para cada línea recibida:','Dar check en "Posición OK" para cada línea.', '⚠️ Solo marcar las posiciones conformes. Las inconformes no se marcan.'] },
          { num: 12, title: 'Contabilizar', color: '#007A54', items: ['Dar clic en el botón "Contabilizar".', '✅ SAP genera el Documento de Material (ej: 5000003007).', 'Los materiales ya están incorporados al inventario del almacén principal (1100).', 'Paso 13: Verificar los saldos de inventario con MMBE o MB52 para confirmar el ingreso.'] },
        ]
      },
      {
        id: 'G1-notas', title: 'Notas Importantes',
        type: 'list',
        items: [
          { icon: '🔑', title: 'Número de Entrega vs. Número de Pedido', text: 'Hay dos formas de recibir: (1) R05 Entrega + N° de entrega de salida del ALDI (flujo estándar descrito aquí). (2) R01 Pedido + N° de pedido propio (usado cuando el ALDI no generó entrega). Preferir siempre el método R05 cuando el ALDI proporcione el número de entrega.' },
          { icon: '🌡️', title: 'Cadena de frío — acción inmediata', text: 'Si algún material recibido requiere cadena de frío (vacunas, insulinas, etc.): verificar temperatura de transporte en el documento del ALDI ANTES de contabilizar. Si la temperatura no es correcta: NO marcar Posición OK y gestionar la devolución.' },
          { icon: '📊', title: 'Verificar stock post-recepción', text: 'Después de contabilizar, ejecutar MMBE con el código del material para confirmar que el stock aumentó en el almacén 1100 del CL correcto. Esto cierra el ciclo de verificación.' },
          { icon: '🔗', title: 'Interfaz con SIFA', text: 'Este movimiento 101 en SAP se comunica automáticamente a SIFA mediante la interfaz. El funcionario NO debe registrar nada adicional en SIFA. Equivale al movimiento SIFA Mov.27-Cat.21 "Recepción del traslado del ALDI en CL (771)".' },
        ]
      }
    ]
  },

  /* ── MANUAL E16-E38: REPORTES MM-IM ────────────────────── */
  {
    id: 'E16-REPORTES',
    code: 'E16-E38 Manual MM-IM Reportes',
    title: 'Manual de Reportes y Análisis — MM-IM',
    subtitle: 'Transacciones de Consulta y Reportes de Inventario SAP',
    color: '#5B2D8E', colorLight: '#F0EBF8',
    icon: '📊',
    version: 'Manual de Usuario ERP-SAP — CCSS',
    objective: 'Facilitar el conocimiento y uso de todas las transacciones de reportes del módulo MM-IM (Gestión de Stocks) disponibles en SAP para la CCSS, incluyendo reportes estándar SAP y desarrollos a la medida (transacciones Z).',
    sections: [
      {
        id: 'E16-rutas', title: 'Rutas de Acceso a Reportes en SAP',
        type: 'list',
        items: [
          { icon: '🗂️', title: 'Ruta 1 — Reportes GRP (estándar SAP)', text: 'Menú SAP → Logística → Gestión de materiales → Gestión de stocks → Entorno → Visualizar lista (MB51, MBSM, MB5M, MB5B) o Stock (MB52, MMBE, MB54, MBLB).' },
          { icon: '🔧', title: 'Ruta 2 — Desarrollos CCSS (transacciones Z)', text: 'Buscador de aplicaciones → Menú de usuario → CCSS Menú de desarrollos → Logística → Gestión de materiales. Aquí se encuentran ZIM_0003, ZIM_0004, ZIM_0006.' },
          { icon: '📱', title: 'Ruta 3 — Aplicativos Fiori (catálogo MM-IM)', text: 'Buscador de aplicaciones → Catálogo → MM-IM Reportes Inventarios. Aquí se encuentran los aplicativos modernos: Stock material individual, Stock varios materiales, Análisis stock muerto, Análisis rotación, Materiales baja rotación, Resumen análisis stocks, etc.' },
          { icon: '⚡', title: 'Acceso directo (más rápido)', text: 'Digitar directamente el código de transacción en el campo de búsqueda del Menú SAP (ej: MB51, MMBE, MB5M) y presionar Enter. Es el método más rápido para usuarios con experiencia.' },
        ]
      },
      {
        id: 'E16-transacciones-std', title: 'Transacciones Estándar de Reportes — Referencia Completa',
        type: 'table',
        headers: ['Transacción', 'Nombre completo', 'Descripción y uso principal', 'Campos clave de entrada'],
        rows: [
          ['MB51', 'Visualizar lista de documentos de material', 'Historial completo de movimientos (entradas y salidas). Seleccionar por rango fecha, material, tipo de movimiento, centro, almacén. Resultado: N° doc., CL, almacén, clave movimiento, fecha contab., cantidad, UM.', 'Material, Centro logístico, Almacén, Clase de movimiento, Rango de fechas'],
          ['MB52', 'Visualizar stock por centro y almacén', 'Stock vigente en centros y almacenes. Muestra libre utilización, tránsito, inspección calidad, no libre, bloqueado, devoluciones. Con valor total.', 'Material, Centro logístico, Almacén (771A/772A/1100), Representación jerárquica'],
          ['MMBE', 'Resumen de stocks', 'Vista jerárquica completa: sociedad → centro → almacén → lote. Muestra todos los tipos de stock simultáneamente. Actualización en tiempo real.', 'Material, Centro logístico, Almacén, Nivel de visualización (sociedad/centro/almacén/lote)'],
          ['MBSM', 'Visualizar docs. de material anulados', 'Lista de documentos de material anulados (correcciones). Permite ver documento original vs. anulado con todos sus campos.', 'Centro logístico, Rango fechas, Material'],
          ['MB5M', 'Visualizar lista de vida útil (FPC)', 'Materiales por fecha de caducidad. Muestra duración restante en días, fecha de caducidad, lote y cantidad disponible. Subtotales por material.', 'Centro logístico, Tiempo hasta fecha de caducidad, Duración restante total, En días'],
          ['MB5B', 'Stock en fecha de contabilización', 'Stock a una fecha específica: stock inicial, total entradas, total salidas, stock final. Útil para reportes de cierre de período.', 'Material, Centro logístico, Fecha de selección, Stock en almacén/lote'],
          ['MB54', 'Stocks en consignación', 'Visualizar stocks de artículos en consignación (materiales de proveedor almacenados en CCSS no pagados aún). Total por proveedor y material.', 'Centro logístico, Material, Proveedor'],
          ['MBLB', 'Stocks en subcontratista', 'Materiales enviados a subcontratistas para procesamiento. Muestra cantidades por proveedor.', 'Centro logístico, Material, Proveedor subcontratista'],
        ]
      },
      {
        id: 'E16-transacciones-z', title: 'Desarrollos a la Medida CCSS — Transacciones Z',
        type: 'table',
        headers: ['Transacción', 'Nombre', 'Descripción', 'Campos principales'],
        rows: [
          ['ZIM_0006', 'Formulario de faltantes', 'Reporte de faltantes de materiales. Genera un formulario imprimible para documentar materiales que no se recibieron o están en falta. Incluye captura de observaciones.', 'Centro logístico, Material, Fecha, Observaciones'],
          ['ZIM_0004', 'Consumo vs. vencimientos', 'Analiza el consumo histórico de un material contra su fecha de vencimiento. Permite identificar si el consumo proyectado alcanzará a consumir el stock antes de que venza.', 'Centro logístico, Material, Rango de fechas'],
          ['ZIM_0003', 'Consumo de mercancías consignación', 'Reporte de consumo de materiales en consignación (proveedor). Genera un imprimible para reportar al proveedor el consumo del período.', 'Centro logístico, Proveedor, Rango de fechas'],
          ['ZIM_0003 (v2)', 'Incumplimiento contrato consignación', 'Reporte de incumplimientos en contratos de consignación. Identifica cuando el proveedor no repuso el stock según lo acordado.', 'Centro logístico, Proveedor, Período'],
        ]
      },
      {
        id: 'E16-aplicativos-fiori', title: 'Aplicativos Fiori — MM-IM Reportes Inventarios',
        type: 'table',
        headers: ['Aplicativo', 'Descripción', 'Valor para el ALM'],
        rows: [
          ['Stock – material individual', 'Vista detallada de un solo material con gráfico de evolución de stock y selección de lotes por fecha de caducidad.', 'Ver el comportamiento histórico de un medicamento crítico (categoría V o A).'],
          ['Stock – varios materiales', 'Vista multi-material. Permite vistas personalizadas tipo "Lote clasificado por fecha de caducidad más reciente". Exporta totales por UM.', 'Control masivo de vencimientos. Vista rápida de toda la cartera.'],
          ['Resumen de documentos de material', 'Historial de documentos de material con vistas de flujo de proceso. Alternativa visual a MB51.', 'Auditoría de movimientos. Ver el flujo completo de un material.'],
          ['Materiales atrasados – Stock bloqueado EM', 'Muestra materiales en stock bloqueado por entrada de mercancías pendiente de liberar.', 'Identificar recepciones pendientes de verificación y liberación.'],
          ['Materiales baja rotación', 'Analiza materiales con bajo movimiento. Incluye vistas de situación de stock a lo largo del tiempo y uso activo de la lista de materiales.', 'Detectar medicamentos con sobrestock o baja dispensación. Input para análisis ABC.'],
          ['Análisis de stock muerto', 'Identifica materiales sin ningún movimiento en el período seleccionado. Riesgo alto de vencimiento.', 'Alerta temprana para medicamentos estancados. Acción: transferir a otras UP o destruir.'],
          ['Análisis de grado de rotación', 'Calcula el índice de rotación de inventarios por material y centro. Muestra proveedor más activo y datos de inventario con gráficos.', 'Calcular el KPI de rotación. Comparar contra la meta (>6 veces/año para categoría A).'],
          ['Materiales atrasados – Stock en tránsito', 'Materiales que salieron de un CL pero no han llegado al destino. Incluye flujo del proceso del pedido.', 'Rastrear pedidos al ALDI o traslados entre CL que están en camino.'],
          ['Resumen de análisis de stocks', 'Dashboard ejecutivo: aumento de valor sin consumo, más de 100 días sin consumo, lotes más tiempo en almacenamiento.', 'Vista gerencial del estado del inventario. Ideal para informes mensuales.'],
          ['Resumen procesamiento de stocks', 'Panel de monitoreo: materiales vencidos en tránsito, posiciones OC, documentos recientes, recuentos recientes, materiales bloqueados.', 'Panel de control diario del almacén. Versión operativa del dashboard.'],
          ['Resumen de gestión de inventario', 'Vista ejecutiva consolidada: supervisión de OC, materiales vencidos, documentos recientes, materiales bloqueados.', 'Para la Jefatura: visión de 360° del estado del almacén en un solo lugar.'],
        ]
      },
      {
        id: 'E16-tips', title: 'Consejos Útiles para el Uso de Reportes',
        type: 'list',
        items: [
          { icon: '⌨️', title: 'Acceso rápido por código', text: 'Capturar directamente el código de transacción (MB51, MMBE, etc.) en la casilla de búsqueda del menú de usuario. Es más rápido que navegar por el árbol de menús.' },
          { icon: '🖥️', title: 'Múltiples sesiones simultáneas', text: 'Se pueden tener varias transacciones abiertas al mismo tiempo abriendo nuevas pestañas del navegador de internet. Muy útil para comparar datos entre reportes.' },
          { icon: 'F1', title: 'Ayuda de campo (F1)', text: 'Cuando se requiera conocer la definición de algún campo en SAP: colocar el cursor en el campo deseado y pulsar la tecla F1. El sistema muestra la definición y la información técnica del campo.' },
          { icon: '📥', title: 'Exportar a Excel', text: 'La mayoría de los reportes ALV se pueden exportar: Menú Más → Lista → Exportar → Fichero local → Hoja de cálculo. También: clic derecho en el reporte → Descargar → Hoja de cálculo.' },
          { icon: '🎨', title: 'Personalizar columnas (Layout ALV)', text: 'En reportes ALV: se pueden mover, agregar y eliminar columnas. Mover: seleccionar y arrastrar. Eliminar: clic derecho → Suprimir. Agregar: icono "Modificar disposición". Guardar el layout personalizado para reutilizarlo.' },
          { icon: '💾', title: 'Grabar como variante', text: 'Para no reingresar los mismos parámetros cada vez: usar "Grabar como variante" en la pantalla inicial de la transacción. Ingresarla con una sola tecla la próxima vez.' },
        ]
      }
    ]
  },

  /* ── INTRODUCCIÓN A SAP ─────────────────────────────────── */
  {
    id: 'INTRO-SAP',
    code: 'Intro-SAP-CCSS',
    title: 'Introducción y Navegación en SAP',
    subtitle: 'Conceptos básicos, SAP GUI y SAP Fiori',
    color: '#B8520A', colorLight: '#FDF0E0',
    icon: '🎓',
    version: 'Dirección Plan de Innovación — CCSS',
    objective: 'Proporcionar los conceptos básicos del ERP-SAP implementado en la CCSS, las formas de acceso al sistema (GUI y Fiori), la navegación esencial y las herramientas de productividad más importantes.',
    sections: [
      {
        id: 'INTRO-que-es', title: '¿Qué es SAP y SAP S/4HANA?',
        type: 'cards',
        items: [
          { label: '¿Qué es SAP?', icon: '🏢', text: 'SAP = Systems, Applications, Products in Data Processing. Programa informático de gestión empresarial alemán creado en los años 70. Se compone de módulos por área: logística, finanzas, RRHH, producción, etc.' },
          { label: '¿Qué es SAP S/4HANA?', icon: '💡', text: 'SAP Business Suite 4 SAP HANA. Cuarta versión, diseñada para ejecutarse solo en SAP HANA (base de datos in-memory). La CCSS implementó SAP S/4HANA para sus procesos logísticos, financieros y administrativos.' },
          { label: '¿Qué es SAP HANA?', icon: '⚡', text: 'Solución que combina base de datos, procesado de datos y plataforma de aplicaciones in-memory y en tiempo real. Proporciona análisis predictivo, procesamiento de textos y analítica de negocio.' },
          { label: 'Módulo MM-IM', icon: '📦', text: 'Materials Management — Inventory Management. El módulo que usan los encargados del ALM. Gestiona todos los movimientos de inventario: recepciones, salidas, traslados, inventarios físicos y reportes de stock.' },
        ]
      },
      {
        id: 'INTRO-acceso', title: 'Cómo Acceder al Sistema SAP CCSS',
        type: 'steps',
        steps: [
          { num: 1, title: 'URLs de acceso', color: '#B8520A', items: [
            'Ambiente de CAPACITACIÓN (práctica/pruebas):',
            'https://ariq.ccss.sa.cr:44320/fiqas',
            'Ambiente de PRODUCCIÓN (trabajo real):',
            'https://ari.ccss.sa.cr:44320/fiprd',
            '⚠️ Nunca practicar en el ambiente de producción. Las transacciones en producción afectan el inventario real.',
          ]},
          { num: 2, title: 'Ingresar credenciales', color: '#B8520A', items: ['Ingresar usuario (cédula de identidad) y clave de acceso.', 'Mantener el idioma en Español (ES).', 'Dar clic en "Acceder al sistema".'] },
          { num: 3, title: 'Navegar al módulo', color: '#B8520A', items: ['Seleccionar el ícono del perfil personal → opción Busc.Aplic.', 'O usar la pestaña "Menú SAP" para navegar por el árbol de transacciones.', 'Para MM-IM: Menú SAP → Logística → Gestión de materiales → Gestión de stocks.'] },
          { num: 4, title: 'Problemas de acceso', color: '#B8520A', items: ['Si no puede acceder por usuario o clave incorrectos:', 'Gestionar cambio de clave en la Mesa de Servicios TI:', 'https://serviciostic.ccss.sa.cr:8553/CAisd/pdmweb.exe'] },
        ]
      },
      {
        id: 'INTRO-navegacion', title: 'Navegación en SAP Fiori — Elementos Principales',
        type: 'table',
        headers: ['Elemento', 'Descripción', 'Cómo usarlo'],
        rows: [
          ['Home Page', 'Página de inicio del Launchpad. Muestra los Tiles según los roles asignados.', 'Dar clic en el logotipo SAP para volver al Home desde cualquier aplicación.'],
          ['Tile (Mosaico)', 'Ícono rectangular que lanza una aplicación o transacción. Puede ser estático, dinámico (con datos en tiempo real), KPI, etc.', 'Dar clic para abrir la aplicación. Arrastrar para reorganizar.'],
          ['Grupos', 'Organización de Tiles en categorías. Se muestran en la barra superior.', 'Dar clic en el nombre del grupo para ver sus Tiles. Editar para reorganizar.'],
          ['Shell Bar', 'Barra superior fija con: logotipo, búsqueda enterprise, notificaciones, menú de acciones.', 'El ícono de notificaciones muestra alertas del sistema. El menú de acciones (perfil) da acceso a configuraciones.'],
          ['App Finder', 'Busca y agrega aplicaciones al Home.', 'Menú de acciones → Busc.Aplic. Buscar por nombre o categoría.'],
          ['Campo de Comandos', 'Campo para digitar códigos de transacción directamente (SAP GUI).', 'Digitar el código y dar Enter. Ej: "MIGO" + Enter abre directamente la transacción.'],
          ['Favoritos', 'Lista personal de accesos directos a transacciones frecuentes.', 'Menú Favoritos → Añadir, o arrastrar desde el árbol de menú.'],
        ]
      },
      {
        id: 'INTRO-herramientas', title: 'Herramientas de Productividad SAP',
        type: 'list',
        items: [
          { icon: '📤', title: 'Exportar reportes a Excel', text: 'Desde cualquier reporte ALV: Menú Más → Lista → Exportar → Fichero local → Hoja de cálculo. O clic derecho en el listado del match code → Descargar → Hoja de cálculo.' },
          { icon: '🎨', title: 'Personalizar layouts de reportes (ALV)', text: 'Mover columnas arrastrando. Eliminar: clic derecho → Suprimir. Agregar: ícono "Modificar disposición". Ordenar: clic en encabezado de columna. Guardar layout personalizado para reutilizarlo.' },
          { icon: '🖨️', title: 'Imprimir desde SAP', text: 'Menú Más → Lista → Imprimir. Se mostrará la ventana de selección de impresora. Para recuperar impresiones anteriores: transacción SP02 → buscar la orden de Spool generada → doble clic → imprimir.' },
          { icon: '⏱️', title: 'Trabajos en fondo (Background Jobs)', text: 'Para procesos que toman mucho tiempo: enviar a trabajar en fondo. Monitorear con transacción SM37. Parámetros de búsqueda: nombre de usuario, estatus del job (activo, finalizado, cancelado), condición.' },
          { icon: '✉️', title: 'Oficina SAP (Correo interno)', text: 'SAP Business Workplace para enviar objetos internos (reportes, pedidos para autorización). Acceder con el ícono de sobre. Crear mensaje nuevo: ingresar destinatario, título, marcar urgente si aplica.' },
        ]
      }
    ]
  }

); // end push Lote 2

/* ── EXTENSIÓN LOTE 3 ─────────────────────────────────────────
   Manuales E16-E38: Reservas, Inventario Físico, Lotes,
   Procesos Logísticos, Movimientos de Mercancías
   ──────────────────────────────────────────────────────────── */
GUIAS_OFICIALES.categories.push(

  /* ── MANUAL RESERVAS ────────────────────────────────────── */
  {
    id: 'E16-RESERVAS',
    code: 'E16-E38 Manual MM-IM Reservas',
    title: 'Manual de Gestión de Reservas — MM-IM',
    subtitle: 'Crear, Modificar, Visualizar y Listar Reservas',
    color: '#007A54', colorLight: '#E8F4F0',
    icon: '📋',
    version: 'Manual de Usuario ERP-SAP — CCSS',
    objective: 'Gestionar las reservas de materiales en SAP, permitiendo a los diferentes centros y almacenes de la CCSS solicitar y "reservar" materiales para su consumo, con trazabilidad completa del proceso.',
    sections: [
      {
        id: 'E16-RESERVAS-concepto', title: '¿Qué es una Reserva en SAP?',
        type: 'list',
        items: [
          { icon: '📌', title: 'Definición', text: 'Una reserva es un documento SAP que representa una solicitud formal de materiales por parte de un área o servicio hacia el almacén. Permite "apartar" los materiales para asegurar su disponibilidad cuando se necesiten.' },
          { icon: '🔄', title: 'Flujo de la reserva', text: 'Crear reserva (MB21) → El almacén recibe la solicitud → Preparar despacho con Lista de Picking (MB26) → Contabilizar la salida → El material sale del almacén y se registra el consumo al centro de costo.' },
          { icon: '🗂️', title: 'Ruta de menú', text: 'Menú SAP → Logística → Gestión de materiales → Gestión de stocks → Reserva → Crear (MB21) / Modificar / Visualizar (MB23) / Listado (MB25).' },
          { icon: '⚠️', title: 'Diferencia clave: Mov. 201 vs. 311', text: 'Movimiento 201: reserva para Centro de Costo (un servicio clínico que consume el material). Movimiento 311: reserva para traslado a otro almacén dentro del mismo centro (satélite, EBAIS, bodega dependiente).' },
        ]
      },
      {
        id: 'E16-RESERVAS-crear', title: 'Crear una Reserva (MB21)',
        type: 'steps',
        steps: [
          { num: 1, title: 'Acceso y parámetros iniciales', color: '#007A54', items: ['Transacción: MB21.', 'Introducir: Fecha base (hoy), Fecha verificación (check marcado), Clase de movimiento (201 para CC o 311 para almacén satélite), Centro logístico.', 'Dar Enter o clic en "Posiciones nuevas".'] },
          { num: 2, title: 'Ingresar datos de imputación', color: '#007A54', items: ['Cuenta de mayor: vacío (se asigna automáticamente).', 'Centro de Coste: código del servicio receptor (ej: 2103241010).', 'Centro de Beneficio (CEBE): se llena automáticamente según el CC.', 'Dar Enter → el sistema muestra la pantalla de posiciones.'] },
          { num: 3, title: 'Ingresar materiales y cantidades', color: '#007A54', items: ['Para cada material: ingresar código de material SAP, almacén de origen (1100), cantidad necesaria en UM de entrada.', 'El campo Lote se deja EN BLANCO al crear la reserva.', 'Fecha de la necesidad: cuándo se requiere el material.', 'Si se requieren más materiales: dar Enter y continuar en la siguiente posición.'] },
          { num: 4, title: 'Contabilizar la reserva', color: '#007A54', items: ['Revisar todos los materiales ingresados.', 'Dar clic en "Contabilizar" para generar el documento de reserva.', '✅ El sistema indica el número de reserva generado (ej: 0000011918).', 'Anotar este número para usarlo en MB26 (lista de picking).'] },
        ]
      },
      {
        id: 'E16-RESERVAS-transacciones', title: 'Transacciones de Reservas — Referencia',
        type: 'table',
        headers: ['Transacción', 'Nombre', 'Uso principal'],
        rows: [
          ['MB21', 'Crear reserva', 'Generar una nueva solicitud de materiales. Mov. 201 (centro de costo) o 311 (almacén satélite/traslado interno).'],
          ['MB22', 'Modificar reserva', 'Agregar posiciones, cambiar cantidades o corregir datos de una reserva existente. Ingresar el N° de reserva.'],
          ['MB23', 'Visualizar reserva', 'Consultar el detalle completo de una reserva: posiciones, cantidades, estado de entrega. Solo lectura.'],
          ['MB25', 'Listado de reservas', 'Ver todas las reservas de un centro logístico. Filtrar por: abiertas, anulables, salidas. Permite navegar a cada reserva.'],
          ['MB26', 'Lista de picking', 'Preparar el despacho de materiales reservados: determinar lotes FEFO y contabilizar la salida.'],
        ]
      },
      {
        id: 'E16-RESERVAS-campos', title: 'Campos Clave de la Reserva',
        type: 'table',
        headers: ['Campo', 'Descripción', 'Ejemplo / Valor típico'],
        rows: [
          ['Fecha base', 'Fecha de creación de la reserva', 'Fecha actual del día'],
          ['Clase de movimiento', 'Define el tipo de movimiento y la imputación requerida', '201 = CC, 311 = Almacén satélite/traslado'],
          ['Centro logístico', 'Centro del que provienen los materiales', 'H103, A210, H306'],
          ['Centro de Coste', 'Servicio clínico o área que recibirá y consumirá el material', '2103241010 = LAB MICROB Y QUIM CL'],
          ['Material', 'Código SAP del material a reservar', '8000000222 = Torunda de algodón'],
          ['Almacén', 'Almacén de origen del que saldrán los materiales', '1100 = ALM PRINCIPAL 1'],
          ['Cantidad', 'Unidades a reservar en la unidad de medida base (UNIDAD)', '10 UD'],
          ['Lote', 'Número de lote específico — DEJAR EN BLANCO al crear', 'Se asigna en MB26 según FEFO'],
          ['Fecha de la necesidad', 'Cuándo se requieren los materiales', 'Fecha planificada de despacho'],
        ]
      }
    ]
  },

  /* ── MANUAL INVENTARIO FÍSICO ───────────────────────────── */
  {
    id: 'E16-INV-FISICO',
    code: 'E16-E38 Manual MM-IM Inventario Físico',
    title: 'Manual de Gestión de Inventario Físico',
    subtitle: 'Ciclo completo: Crear → Imprimir → Contar → Registrar → Contabilizar',
    color: '#5B2D8E', colorLight: '#F0EBF8',
    icon: '🔢',
    version: 'Manual de Usuario ERP-SAP — CCSS',
    objective: 'Ejecutar el proceso completo de inventario físico en SAP, desde la creación del documento de inventario hasta la contabilización de las diferencias, garantizando la exactitud del inventario institucional.',
    sections: [
      {
        id: 'E16-INV-FISICO-concepto', title: 'Conceptos Fundamentales del Inventario Físico',
        type: 'list',
        items: [
          { icon: '📊', title: 'Objetivo del inventario físico', text: 'Garantizar que los registros del sistema SAP coincidan con el inventario físico real. La exactitud de inventario es de alto impacto en los sistemas de planeación y auditoría institucional.' },
          { icon: '🔄', title: 'Ciclo completo del inventario', text: 'MI01 (Crear documento) → MI21 (Imprimir lista sin cantidades) → Conteo físico manual → MI04 (Registrar recuento) → MI20 (Listado de diferencias) → MI07 (Contabilizar diferencias) → Fin.' },
          { icon: '📱', title: 'Aplicativos FIORI para inventario', text: 'Catálogo MM-IM Inventario Físico. Acceso: Buscador de aplicaciones → MM-IM Inventario Físico. Para documentos masivos o reportes modernos.' },
          { icon: '⚠️', title: 'Principio clave', text: 'Al imprimir la lista de inventario para el conteo (MI21), NUNCA imprimir el stock teórico del sistema. Esto evita que el contador se "guíe" por el número del sistema y se garantiza un conteo independiente y honesto.' },
        ]
      },
      {
        id: 'E16-INV-FISICO-transacciones', title: 'Transacciones del Ciclo de Inventario',
        type: 'table',
        headers: ['Transacción', 'Nombre', 'Descripción', 'Cuándo usarla'],
        rows: [
          ['MI01', 'Crear doc. inventario físico individual', 'Crea el documento con los materiales específicos a inventariar. Puede incluir N° de inventario y referencia.', 'Inventario selectivo por material o grupo de materiales.'],
          ['MI34', 'Crear doc. inventario físico colectivo', 'Genera documentos para grupos de materiales basado en criterios (almacén, días sin recuento). Muestra días desde último recuento y ajustes previos.', 'Inventario cíclico masivo o inventario de todo el almacén.'],
          ['MI21', 'Imprimir doc. de inventario', 'Imprime la lista de materiales para el conteo físico. ⚠️ SIN mostrar el stock del sistema.', 'Después de crear el documento, antes del conteo físico.'],
          ['MI04', 'Ingresar recuento de inventario', 'Registra las cantidades contadas físicamente para cada material y lote del documento.', 'Después de realizar el conteo físico.'],
          ['MI05', 'Modificar recuento de inventario', 'Corrige cantidades de recuento registradas incorrectamente.', 'Cuando se detectó un error en el conteo ingresado.'],
          ['MI20', 'Listado de diferencias', 'Muestra diferencias entre conteo físico y stock teórico SAP. Permite acceder a registrar recuento, modificar o contabilizar.', 'Para revisar diferencias antes de contabilizar.'],
          ['MI07', 'Contabilizar doc. de inventario', 'Genera los movimientos de ajuste (Mov. 701/707) para corregir el stock SAP según el conteo físico.', 'Último paso: ajusta el inventario SAP a la realidad.'],
          ['MI02', 'Modificar doc. inventario individual', 'Agrega o elimina materiales de un documento de inventario ya creado.', 'Cuando se necesita incluir un material que se olvidó.'],
        ]
      },
      {
        id: 'E16-INV-FISICO-motivos', title: 'Motivos de Diferencias de Inventario',
        type: 'table',
        headers: ['Código', 'Motivo', 'Cuándo aplicar'],
        rows: [
          ['0001', 'Almacenado incorrectamente', 'Diferencia POSITIVA — el sistema tenía menos pero físicamente hay más. Material mal ubicado que ahora aparece.'],
          ['0002', 'Calidad deficiente', 'Diferencia NEGATIVA — el sistema tenía más pero físicamente hay menos. Material deteriorado/dado de baja sin registro previo.'],
          ['0003', 'Destrucción', 'Material destruido sin haberse registrado la baja previamente.'],
          ['0004', 'Hurto / Robo', 'Faltante por hurto. Requiere denuncia al OIJ y documentación de apoyo.'],
          ['0005', 'Obsolescencia', 'Material vencido u obsoleto no registrado.'],
          ['0006', 'Error de conteo previo', 'La diferencia se debe a un error en un conteo anterior.'],
          ['0007', 'Control de calidad', 'Material retenido en inspección de calidad no registrado en cuarentena.'],
          ['0008', 'Producto dañado', 'Material con daño físico no dado de baja previamente.'],
        ]
      },
      {
        id: 'E16-INV-FISICO-colectivo', title: 'Inventario Colectivo (MI34) — Campos Clave',
        type: 'list',
        items: [
          { icon: '📅', title: 'Días desde último recuento', text: 'Criterio clave para el inventario cíclico: filtrar materiales que no han sido inventariados en X días (ej: 30 días para categoría A, 90 para B, 180 para C).' },
          { icon: '📈', title: 'Vista Ratios', text: 'Muestra: cantidad teórica actual, ajuste de recuento de los últimos 12 meses, cantidad ajustada en 12 meses. Útil para identificar materiales problemáticos con ajustes frecuentes.' },
          { icon: '🔗', title: 'Consulta de trazabilidad', text: 'Desde MI34 se puede ver la "Utilización" de cada lote: documentos de compra, pedidos de traslado y órdenes de fabricación asociados. Permite rastrear el origen de cada unidad inventariada.' },
          { icon: '⚠️', title: 'Stock en consignación separado', text: 'El sistema crea documentos de inventario separados para materiales en consignación. Ejemplo: si hay 2 tipos de stock, se generan 2 documentos distintos (ej: doc. 100000013 y 100000014).' },
        ]
      }
    ]
  },

  /* ── MANUAL LOTES DE MATERIAL ───────────────────────────── */
  {
    id: 'E16-LOTES',
    code: 'E16-E38 Manual MM-IM Lotes',
    title: 'Manual de Gestión de Lotes de Material',
    subtitle: 'Modificar, Visualizar, Alertas de Vencimiento y Monitoreo',
    color: '#B8520A', colorLight: '#FDF0E0',
    icon: '🏷️',
    version: 'Manual de Usuario ERP-SAP — CCSS',
    objective: 'Gestionar los lotes de materiales en SAP: modificar datos de lotes (fechas de fabricación/caducidad), visualizar su trazabilidad completa, y monitorear alertas de vencimiento para garantizar el control FEFO.',
    sections: [
      {
        id: 'E16-LOTES-concepto', title: '¿Qué es un Lote de Material en SAP?',
        type: 'list',
        items: [
          { icon: '🏷️', title: 'Definición', text: 'Un lote es un subconjunto de un material con características homogéneas (mismo fabricante, misma fecha de producción, mismas propiedades). En farmacia: cada número de lote del fabricante es un lote SAP distinto.' },
          { icon: '📅', title: 'Datos clave del lote', text: 'Fecha de fabricación, Fecha de caducidad (FeCaduc/FePreferCons), Clase de valoración (coincide con el N° de lote del ALDI), Estado del lote (libre utilización / bloqueado / restringido), Garantía de reposición del proveedor.' },
          { icon: '🔗', title: 'Trazabilidad del lote', text: 'Desde SAP se puede rastrear el origen completo de un lote: pedido de compra → documento de entrada de mercancías → todos los movimientos de salida. Esto es fundamental para auditorías y retiros de mercado.' },
          { icon: '🗂️', title: 'Ruta de menú para lotes', text: 'Menú SAP → Logística → Funciones centrales → Gestión de lotes → Lote → Modificar (MSC2N) / Visualizar (MSC3N). O desde Menú usuario → CCSS Menú de desarrollo → Logística → Gestión de materiales (para alertas Z).' },
        ]
      },
      {
        id: 'E16-LOTES-transacciones', title: 'Transacciones de Gestión de Lotes',
        type: 'table',
        headers: ['Transacción', 'Nombre', 'Descripción', 'Cuándo usarla'],
        rows: [
          ['MSC2N', 'Modificar lote de material', 'Editar datos de un lote: fechas de fabricación/caducidad, texto breve (garantía). Vistas: Datos básicos 1, Datos básicos 2, Clasificación, Dat. Material, Modificaciones.', 'Cuando la fecha de caducidad está incorrecta o cuando se requiere agregar/editar información del lote.'],
          ['MSC3N', 'Visualizar lote de material', 'Solo lectura de todos los datos del lote. Mismas vistas que MSC2N. No permite modificación.', 'Para consultar información de un lote específico sin riesgo de modificarlo.'],
          ['ZLM_ALERTA_LOTES', 'Alerta de lotes (CCSS)', 'Reporte de lotes con garantía de reposición del proveedor. Muestra: material, lote, fecha fabricación, fecha caducidad, proveedor y garantía.', 'Para gestionar devoluciones de materiales con garantía de reposición.'],
          ['ZLM_ALERTA_VENC', 'Alerta vencimiento de lotes (CCSS)', 'Reporte con semáforo de vencimiento: indica por colores los lotes próximos a vencer. Muestra días para vencimiento por material, CL, almacén y lote.', 'Control periódico de vencimientos. Alternativa visual a MB5M.'],
          ['MBLB Monitor Lotes', 'Monitorear lotes de material', 'Búsqueda avanzada de lotes por múltiples criterios: material, fecha de caducidad, almacén, tiempo hasta caducidad. Permite ver la trazabilidad completa y la utilización de cada lote.', 'Análisis profundo de un lote: ver todos los movimientos asociados, documentos de compra, pedidos de traslado.'],
          ['Gestión Lotes FIORI', 'Gestionar lotes (aplicativo Fiori)', 'Vista moderna de lotes por centro logístico. Muestra: material, lote, estado del lote y fecha de caducidad. Permite clasificar por organización.', 'Vista rápida y moderna del estado de lotes. Ideal para revisiones diarias.'],
        ]
      },
      {
        id: 'E16-LOTES-vistas', title: 'Vistas del Lote de Material (MSC2N/MSC3N)',
        type: 'table',
        headers: ['Vista', 'Contenido principal', 'Qué verificar'],
        rows: [
          ['Datos básicos 1', 'Material, lote, fecha de fabricación, fecha de caducidad.', '⚠️ Verificar que ambas fechas estén asignadas. Si falta alguna: ingresar manualmente en MSC2N.'],
          ['Datos básicos 2', 'Texto breve del lote (garantía de reposición), datos adicionales del proveedor.', 'Si el material tiene garantía de reposición por el fabricante: registrar aquí.'],
          ['Clasificación', 'Clase y categoría del material. Características de la clase: fecha de caducidad y número de lote.', 'Confirmar que la clasificación corresponde al tipo de material (MEDICAMENTOS, INSUMOS, etc.).'],
          ['Dat. Material', 'Tiempo hasta caducidad, caducidad total del maestro de materiales. Clase del lote y sus características.', 'Verificar que el tiempo hasta caducidad restante cumple con el mínimo institucional (≥ 75% de vida útil).'],
          ['Modificaciones (Modific.)', 'Historial de cambios: fecha, hora, usuario, transacción y documento generado.', 'Auditoría de quién modificó el lote y cuándo. Útil para investigar cambios no autorizados.'],
        ]
      },
      {
        id: 'E16-LOTES-monitoreo', title: 'Monitoreo de Lotes — Búsqueda por Criterios',
        type: 'list',
        items: [
          { icon: '🔍', title: 'Por Material', text: 'Ingresar código de material y centro logístico. El sistema muestra todos los lotes activos de ese material en ese centro con su cantidad disponible.' },
          { icon: '📅', title: 'Por Fecha de Caducidad', text: 'Ingresar un rango de fechas de caducidad. El sistema filtra automáticamente los lotes cuya fecha de vencimiento está dentro del rango. Ideal para encontrar lotes próximos a vencer.' },
          { icon: '🏗️', title: 'Por Stock/Almacén', text: 'Filtrar por almacén específico (ej: 771A, 772A, 1100). Muestra todos los lotes disponibles en ese almacén.' },
          { icon: '⏱️', title: 'Por Tiempo hasta Caducidad', text: 'Ingresar el tiempo máximo hasta caducidad en días. El sistema muestra todos los lotes que vencerán en ese período. Equivale a MB5M pero con más detalle de trazabilidad.' },
          { icon: '📋', title: 'Detalle de utilización', text: 'Desde el monitor de lotes: seleccionar un lote → botón Utilización → seleccionar centro → ver todos los documentos asociados al lote (pedidos de compra, traslados, órdenes). Permite trazabilidad completa para auditorías y retiros de mercado.' },
        ]
      }
    ]
  },

  /* ── MANUAL PROCESOS LOGÍSTICOS ─────────────────────────── */
  {
    id: 'E16-PROC-LOG',
    code: 'E16-E38 Manual MM-IM Procesos Logísticos',
    title: 'Manual de Procesos Logísticos — Períodos Contables',
    subtitle: 'Visualizar y Desplazar Períodos Logístico-Contables (MMPV)',
    color: '#1A3A5C', colorLight: '#E8EDF2',
    icon: '📅',
    version: 'Manual de Usuario ERP-SAP — CCSS',
    objective: 'Gestionar el desplazamiento de períodos logístico-contables en SAP para permitir la contabilización de movimientos de mercancías en el período nuevo y cerrar el período anterior, proceso que se ejecuta una vez al mes.',
    sections: [
      {
        id: 'E16-PROC-LOG-concepto', title: 'Concepto: Períodos Logístico-Contables',
        type: 'list',
        items: [
          { icon: '📅', title: '¿Qué es un período logístico?', text: 'En SAP, el período logístico-contable es el mes-año en el que se registran los movimientos de mercancías. SAP mantiene siempre 2 períodos abiertos simultáneamente para contabilización.' },
          { icon: '🔄', title: '¿Cuándo se ejecuta?', text: 'Una vez al mes, al inicio del nuevo período. El desplazamiento fija el nuevo período como activo y cierra el período anterior al anterior. Después del desplazamiento, no es posible contabilizar en el período previo al anterior.' },
          { icon: '👤', title: '¿Quién lo ejecuta?', text: 'Este proceso lo ejecuta el área de Contabilidad/Finanzas institucional, NO el Almacén Local. Sin embargo, la Jefatura del ALM debe estar informada: todos los movimientos del período deben estar contabilizados ANTES del desplazamiento.' },
          { icon: '⚠️', title: 'Impacto para el ALM', text: 'Si hay movimientos pendientes de contabilizar cuando se cierra el período, deberán contabilizarse en el período siguiente con fecha del nuevo período. Esto puede causar inconsistencias contables. Por eso es crítico contabilizar todos los movimientos antes del cierre.' },
        ]
      },
      {
        id: 'E16-PROC-LOG-transacciones', title: 'Transacciones de Períodos Logísticos',
        type: 'table',
        headers: ['Transacción', 'Nombre', 'Descripción', 'Quién ejecuta'],
        rows: [
          ['MMRV', 'Visualizar período logístico', 'Consulta el período actual, período anterior y último período del año anterior para una sociedad. Solo lectura.', 'Cualquier usuario con acceso para verificar el período activo.'],
          ['MMPV', 'Desplazar período logístico', 'Fija un nuevo período logístico-contable. Parámetros: rango de sociedades, período (mes 1-12), ejercicio (año).', 'Exclusivamente el área de Contabilidad/Finanzas CCSS.'],
        ]
      },
      {
        id: 'E16-PROC-LOG-checklist', title: 'Checklist del ALM antes del Cierre de Período',
        type: 'list',
        items: [
          { icon: '✅', title: '1. Verificar movimientos pendientes', text: 'Ejecutar MB51 filtrando por el período actual y documentos sin contabilizar. Si aparecen: contabilizarlos inmediatamente.' },
          { icon: '✅', title: '2. Conciliar inventario físico', text: 'Si se realizó un inventario físico en el período: asegurarse de que MI07 (contabilización de diferencias) fue ejecutado antes del cierre.' },
          { icon: '✅', title: '3. Verificar stock en tránsito', text: 'Revisar aplicativo Fiori "Materiales atrasados – Stock en tránsito": confirmar que no hay pedidos al ALDI pendientes de recibir que deban imputarse al período actual.' },
          { icon: '✅', title: '4. Confirmar con Contabilidad', text: 'Comunicar al área de Contabilidad que el ALM está listo para el cierre del período. Dar el aval por escrito (correo electrónico o formulario institucional).' },
          { icon: '✅', title: '5. Post-cierre: verificar período activo', text: 'Después del desplazamiento, ejecutar MMRV para confirmar que el nuevo período está activo. Cualquier nuevo movimiento debe contabilizarse con fecha del período nuevo.' },
        ]
      }
    ]
  },

  /* ── MANUAL MOVIMIENTOS DE MERCANCÍAS ───────────────────── */
  {
    id: 'E16-MOVIMIENTOS',
    code: 'E16-E38 Manual MM-IM Movimientos',
    title: 'Manual de Gestión de Movimientos de Mercancías',
    subtitle: 'Entradas, Salidas, Traslados y Documentos de Material',
    color: '#8B1A1A', colorLight: '#FDF0F0',
    icon: '🔄',
    version: 'Manual de Usuario ERP-SAP — CCSS',
    objective: 'Documentar todos los tipos de movimientos de mercancías en SAP para los servicios de Farmacia de la CCSS: entradas por compra o traslado, salidas a centros de costo, traslados entre almacenes, devoluciones, donaciones y ajustes.',
    sections: [
      {
        id: 'E16-MOV-resumen', title: 'Resumen de Movimientos de Mercancías — Contexto CCSS Farmacia',
        type: 'table',
        headers: ['Movimiento', 'Nombre', 'Transacción', 'Descripción en contexto CCSS'],
        rows: [
          ['101', 'Entrada de mercancías vs. pedido', 'MIGO → A01, R01/R05', 'Recepción de medicamentos del ALDI o proveedor local. El más frecuente del ALM.'],
          ['122', 'Devolución al proveedor', 'MIGO → A01 Devolución', 'Devolver medicamentos al ALDI por inconformidad, vencimiento o alerta de calidad. Requiere referencia al doc. original.'],
          ['201', 'Salida a centro de costo', 'MB1A o MB26', 'Dispensar materiales a un servicio clínico (urgencias, laboratorio, UCI). Carga consumo al CC del servicio.'],
          ['202', 'Reintegro (devolución de CC)', 'MIGO o MB26', 'Devolución de materiales desde un servicio clínico al almacén. Revierte un movimiento 201.'],
          ['311', 'Traslado en el mismo centro', 'MB1B o MB26', 'Mover materiales entre almacenes del mismo CL: 1100→771A, 771A→772A, 1100→satélite.'],
          ['312', 'Reversión de traslado interno', 'MB1B', 'Revierte un movimiento 311 incorrecto dentro del mismo centro.'],
          ['351', 'Traslado entre centros (salida)', 'MIGO → A07, R01', 'Salida de materiales del CL origen para enviarlos a otro CL. Deja el stock "en tránsito".'],
          ['101 (tras 351)', 'Recepción de traslado entre CL', 'MIGO → A01, R01', 'Entrada del material en el CL destino. Completa el ciclo del traslado intercentro.'],
          ['551 / Z51 / Z53', 'Baja / Destrucción', 'MIGO → R10 Otros', 'Baja de inventario por destrucción, vencimiento, hurto o daño. Requiere acta previa.'],
          ['Z05', 'Entrada por donación', 'MIGO → A01, R10 Otros', 'Ingreso de materiales recibidos como donación sin documento de compra.'],
          ['701 / 707', 'Diferencias de inventario', 'MI07 (automático)', 'Generados automáticamente al contabilizar diferencias de inventario físico. 701=faltante, 707=sobrante.'],
          ['Z03', 'Gasto por venta (crédito SIFA)', 'Generado desde SIFA', 'Salida del 772 en SIFA por venta de medicamentos. Interfaz comunica a SAP.'],
        ]
      },
      {
        id: 'E16-MOV-migo', title: 'Transacción MIGO — Guía de Uso',
        type: 'list',
        items: [
          { icon: '🔑', title: 'Campos clave en MIGO', text: 'A01 Actividad (Entrada/Salida/Traslado/Devolución) + R01-R10 Documento referencia (Pedido, Entrega, Orden, Otros) + N° de documento + Clase de movimiento. La combinación de estos 4 campos define qué hace el movimiento.' },
          { icon: '📋', title: 'A01 Entrada de mercancías', text: 'Para recepciones: R01 Pedido (con N° de OC), R05 Entrega (con N° de entrega ALDI), R10 Otros (sin documento, para donaciones con Z05). La más común en el ALM.' },
          { icon: '↩️', title: 'Devolución al proveedor', text: 'En MIGO: Actividad = "Devolución al proveedor". Ingresar el N° del documento de entrada original. SAP revierte el stock y genera el documento para que Compras gestione la nota de crédito.' },
          { icon: '📦', title: 'Pestaña "Se" — Verificación crítica', text: 'En MIGO, la pestaña "Se" muestra: Clase de movimiento (debe ser 101 para recepciones), Centro logístico y Almacén. ⚠️ Siempre verificar que el almacén de destino sea el correcto (1100 para recepciones del ALDI) antes de contabilizar.' },
          { icon: '🔢', title: 'Documento de material', text: 'Después de contabilizar exitosamente, SAP genera un número de Documento de Material (ej: 5000003007). Este número es la referencia de auditoría permanente del movimiento. Anotar siempre y verificar con "Visualizar detalles".' },
        ]
      },
      {
        id: 'E16-MOV-tipos-stock', title: 'Tipos de Stock en SAP — Farmacia CCSS',
        type: 'table',
        headers: ['Tipo de Stock', 'Descripción', 'Movimientos que lo afectan'],
        rows: [
          ['Libre utilización', 'Stock disponible para uso inmediato sin restricciones. El stock "normal" del almacén.', 'Todos los movimientos estándar (101, 201, 311, 351).'],
          ['Control de calidad', 'Stock en inspección. No disponible para uso hasta liberación por el farmacéutico.', 'Se asigna automáticamente si el material tiene control de calidad activo en el maestro.'],
          ['Bloqueado', 'Stock retenido por problemas de calidad, devoluciones pendientes o alertas sanitarias.', 'Movimientos de bloqueo (344) y desbloqueo (343). En devoluciones: stock "Bloqueado" = material con inconformidad.'],
          ['Cuarentena (SAP)', 'No existe como categoría SAP estándar. En CCSS se gestiona con almacenes físicos separados y la etiqueta "CUARENTENA" en el almacén dedicado.', 'Traslado al almacén de cuarentena (Mov. 311) hasta resolución.'],
          ['Stock en tránsito', 'Materiales que salieron del CL emisor (Mov. 351) pero aún no han sido recibidos en el CL destino.', 'Se genera con Mov. 351. Se libera con Mov. 101 en el destino.'],
        ]
      }
    ]
  }

); // end push Lote 3

/* ── EXTENSIÓN LOTE 4 ─────────────────────────────────────────
   Manual Entrega Entrante (VL31N) + Guía Transacciones IM
   PDFs duplicados: G5 y G1 ya integrados en lotes anteriores
   ──────────────────────────────────────────────────────────── */
GUIAS_OFICIALES.categories.push(

  /* ── MANUAL ENTREGA ENTRANTE ────────────────────────────── */
  {
    id: 'E16-ENTREGA-ENT',
    code: 'E16-E38 Manual MM-IM Entrega Entrante',
    title: 'Manual de Gestión de Entrega Entrante',
    subtitle: 'VL31N — Crear, Modificar, Visualizar y Monitorear Entregas',
    color: '#006B8F', colorLight: '#E8F4F8',
    icon: '📦',
    version: 'Manual de Usuario ERP-SAP — CCSS',
    objective: 'Gestionar las entregas entrantes en SAP para planificar la recepción de mercancías en los almacenes del ALDI y centros logísticos de la CCSS, permitiendo visibilidad anticipada de qué llega, cuándo y en qué cantidad.',
    sections: [
      {
        id: 'E16-EE-concepto', title: '¿Qué es una Entrega Entrante en SAP?',
        type: 'list',
        items: [
          { icon: '📋', title: 'Definición', text: 'Una entrega entrante es el documento SAP que notifica al almacén que está por llegar mercancía de un proveedor. Es equivalente al "Aviso de envío anticipado" (ASN) que el proveedor envía antes de la entrega física.' },
          { icon: '🔄', title: 'Ventaja principal', text: 'Permite ejecutar procesos por adelantado: reservar espacio en el muelle, programar personal de recepción, planificar control de calidad y asignar ubicaciones de almacenamiento, todo ANTES de que el camión llegue físicamente.' },
          { icon: '🔗', title: 'Relación con recepción', text: 'La entrega entrante es el documento previo a la recepción en MIGO. Flujo: Pedido de compra (ME21N) → Entrega entrante (VL31N) → Entrada de mercancías (MIGO → R04 Entrega entrante) → Stock en 1100.' },
          { icon: '🏭', title: 'Aplicación en CCSS', text: 'Principalmente usado por el ALDI (Gerencia de Logística) para notificar a los CL de los pedidos ordinarios que están en preparación. Los CL reciben la notificación y pueden prepararse con anticipación para la recepción.' },
        ]
      },
      {
        id: 'E16-EE-transacciones', title: 'Transacciones de Entrega Entrante',
        type: 'table',
        headers: ['Transacción', 'Nombre', 'Descripción', 'Quién ejecuta'],
        rows: [
          ['VL31N', 'Crear entrega entrante', 'Crea el documento de entrega entrante con referencia a un pedido de compra. Requiere: proveedor o N° de pedido, fecha de entrega. Define detalles de transporte, descarga, entrada en stock.', 'ALDI/Logística. También puede el CL si recibe sin entrega previa.'],
          ['VL32N', 'Modificar entrega entrante', 'Modifica datos de una entrega entrante existente: cantidades, fechas, datos de transporte, estado de proceso. Ingresar el N° de entrega entrante.', 'ALDI/Logística o CL receptor.'],
          ['VL33N', 'Visualizar entrega entrante', 'Solo lectura de todos los datos de la entrega entrante. Permite ver el estado del proceso, flujo de documentos y seguimiento.', 'Cualquier usuario autorizado.'],
          ['VL06I / Monitor EE', 'Monitor de entregas entrantes', 'Vista consolidada de todas las entregas entrantes. Filtra por centro, estado, fecha. Permite gestionar múltiples entregas simultáneamente.', 'Supervisores de almacén, Jefatura ALM.'],
          ['ZEE_AGENDA', 'Agenda de citas (CCSS)', 'Reporte de agenda con proveedores: fechas, horas, materiales, existencias, tarimas, andén asignado, estatus de agenda y recibo. Permite enviar correo al proveedor desde la pantalla.', 'ALDI/Recepción CCSS.'],
        ]
      },
      {
        id: 'E16-EE-crear', title: 'Crear Entrega Entrante (VL31N) — Proceso',
        type: 'steps',
        steps: [
          { num: 1, title: 'Datos iniciales', color: '#006B8F', items: ['Transacción: VL31N.', 'Ingresar: Proveedor (N° SAP) o N° de Pedido de Compra, Fecha de entrega planificada.', 'Dar Enter o clic en "Continuar".'] },
          { num: 2, title: 'Vista Resumen de posiciones', color: '#006B8F', items: ['SAP carga los materiales del pedido referenciado.', 'Verificar: N° de entrega entrante, proveedor, fecha del documento.', 'Revisar posiciones: material, cantidad a entregar, unidades.'] },
          { num: 3, title: 'Vista Transporte', color: '#006B8F', items: ['Registrar datos del transporte: tipo de transporte, portador, N° de placa/guía, ruta.', 'Fecha y hora planificada de llegada al muelle.'] },
          { num: 4, title: 'Vista Descarga', color: '#006B8F', items: ['Andén de descarga asignado.', 'Fecha y hora de inicio de descarga planificada.', 'Duración estimada de la descarga.'] },
          { num: 5, title: 'Vista Entrada en stock', color: '#006B8F', items: ['Centro logístico y almacén receptor (ej: G106 almacén 1000).', 'Fecha planificada de entrada al stock.'] },
          { num: 6, title: 'Vista Resumen de status', color: '#006B8F', items: ['Revisar los indicadores de estado del documento:', 'StGEntr: Estado picking/almacenamiento.', 'MM: Estado de movimiento de mercancías (debe quedar en "Pendiente" hasta la recepción MIGO).', 'ST: Estado de planificación de transporte.'] },
          { num: 7, title: 'Vista Datos movimientos mercancías', color: '#006B8F', items: ['Clase de movimiento: 101 (entrada de mercancías estándar).', 'Verificar que el almacén de destino sea el correcto.'] },
          { num: 8, title: 'Grabar', color: '#007A54', items: ['Dar clic en "Grabar".', '✅ SAP genera el N° de entrega entrante.', 'Este número es el que el CL receptor usará en MIGO → R04 Entrega entrante para recibir la mercancía.'] },
        ]
      },
      {
        id: 'E16-EE-status', title: 'Estados del Documento de Entrega Entrante',
        type: 'table',
        headers: ['Indicador', 'Nombre', 'Estado posible', 'Significado'],
        rows: [
          ['MM', 'Movimiento de mercancías', 'A=No procesado / B=Parcialmente / C=Completamente', 'C = la entrada de mercancías fue contabilizada en MIGO. El proceso está completo.'],
          ['StGEntr', 'Estado picking/almacenamiento', 'A=No requerido / B=Parcial / C=Completamente', 'Indica si se efectuó el picking o almacenamiento en almacén gestionado.'],
          ['SE', 'Estado de embalaje', 'A=No requerido / B=Parcial / C=Completamente', 'Estado del embalaje de los materiales de la entrega.'],
          ['ST', 'Estado de transporte', 'A=No planificado / B=Planificado / C=Cerrado', 'Gestión del transporte asociado a la entrega.'],
          ['Est.créd.', 'Estado de verificación de crédito', 'A=No verificado / B=Aprobado / C=Rechazado', 'Relevante para ventas. En recepciones: generalmente no aplica.'],
        ]
      },
      {
        id: 'E16-EE-agenda', title: 'Agenda de Citas — Planificación de Recepciones',
        type: 'list',
        items: [
          { icon: '📅', title: 'Qué muestra la agenda', text: 'Reporte por día de todas las entregas programadas: fecha y hora, N° de OC, material, descripción, proveedor, existencias actuales en almacén, tarimas, andén asignado, estatus de agenda y estatus de recibo.' },
          { icon: '📧', title: 'Envío de confirmación', text: 'Desde la agenda se puede enviar correo de confirmación al proveedor directamente desde SAP, con los detalles del andén asignado y la hora de recepción.' },
          { icon: '🎯', title: 'Uso operativo', text: 'La Jefatura del ALM puede usar esta agenda para organizar el personal de recepción, reservar el muelle, preparar los equipos de verificación de calidad y anticipar el espacio de almacenamiento necesario.' },
        ]
      }
    ]
  },

  /* ── GUÍA MAESTRA DE TRANSACCIONES IM ──────────────────── */
  {
    id: 'GUIA-TRANSACCIONES-IM',
    code: 'Guía-IM-Nov2024',
    title: 'Guía Maestra de Transacciones IM-SAP',
    subtitle: 'Flujos Completos por Proceso — Noviembre 2024',
    color: '#1A3A5C', colorLight: '#E8EDF2',
    icon: '🗺️',
    version: 'Dirección Plan de Innovación — CCSS — Nov. 2024',
    objective: 'Guía de referencia rápida con los flujos completos de transacciones SAP para cada proceso del módulo IM (Inventario de Almacenes). Muestra la secuencia correcta de transacciones de inicio a fin para cada escenario operativo.',
    sections: [
      {
        id: 'GTIM-acceso', title: 'Acceso al Sistema y Navegación Rápida',
        type: 'steps',
        steps: [
          { num: 1, title: 'Ingresar al Menú SAP', color: '#1A3A5C', items: ['Acceder a la URL de producción o capacitación.', 'Ingresar usuario (cédula) y contraseña.', 'Dar clic en "Menú SAP" en la barra de aplicaciones.'] },
          { num: 2, title: 'Seleccionar sistema', color: '#1A3A5C', items: ['En la parte superior izquierda: dar clic en "Seleccionar sistema".', 'Seleccionar: LOCAL → FIORI_MENU.', 'Esto activa el menú Fiori con todas las transacciones del módulo IM.'] },
          { num: 3, title: 'Navegación rápida entre transacciones', color: '#1A3A5C', items: ['Desde cualquier transacción activa: usar el campo de comandos (barra superior izquierda).', 'Digitar /N seguido del código de transacción. Ejemplo: /NME23N.', 'Presionar Enter para navegar directamente sin cerrar la transacción actual.', 'Esto permite moverse fluidamente entre transacciones sin volver al menú principal.'] },
        ]
      },
      {
        id: 'GTIM-flujos', title: 'Flujos de Transacciones por Escenario Operativo',
        type: 'table',
        headers: ['Escenario / Proceso', 'Secuencia de Transacciones SAP'],
        rows: [
          ['🟢 Salidas a Centro de Costos (Directo)', 'MB52 (ver stock) → MIGO Salida Mercancía - CeCo (Mov 201) → MIGO Visualizar → MB51 (verificar)'],
          ['🟢 Salidas por Reserva', 'MB21 (crear reserva) → MMBE (ver stock) → MB26 (lista picking - determ. lotes) → MIGO Salida por Reserva → MIGO Visualizar → MB51'],
          ['🟡 Entrada a Stock Bloqueado', 'ME23N (ver OC) → MIGO Entrada Mercancía Mov 103 (stock bloqueado) → MIGO Visualizar → MB51 → MB52'],
          ['🟡 Liberar Stock Bloqueado a Libre Utilización', 'MIGO Visualizar (ver doc. bloqueado) → MIGO Liberar stock bloqueado (doc. material / lote / OK / Verificar) → MIGO Visualizar → MB51 → MB52'],
          ['🔵 Devolución Material a Proveedor', 'ZIM_0006 Formulario faltantes → MB52 → MIGO Devolución Mov 122 → MIGO Visualizar → ME23N (Compras) → MB51'],
          ['🔵 Acta de Rechazo Ad Portas', 'ZIM_0007 Generar acta rechazo ad-portas (ver Manual Gestión Mov. Mercancías p.175)'],
          ['🔵 Impresión de Vales Entrada/Salida', 'ZIM_0008 Impresión vales Entrada/Salida (ver Manual Gestión Mov. Mercancías p.180)'],
          ['🟠 Entrega Entrante (VL31N)', 'VL31N Crear EE con ref. a Pedido → MIGO Entrada Mercancía - Entrega Entrante → MIGO Visualizar → MB51 → MB52'],
          ['🔴 Anular Documento de Material', 'MB52 (ver stock) → MIGO Visualizar doc. → MIGO Anulación doc. material → MB51 (verificar)'],
          ['🟣 Traspaso entre Centros: 1 Paso', 'MB52 → MIGO Traspaso Mov 301 → MIGO Visualizar → MB51'],
          ['🟣 Traspaso entre Centros: 2 Pasos', 'MB52 → MIGO Tomar Material Almacén Mov 303 (Centro Emisor) → MIGO Visualizar → MB51 → MIGO Almacenar Mov 305 (doc. mat. centro emisor) → MIGO Visualizar → MB51'],
          ['🟣 Traspaso entre Almacenes: 1 Paso', 'MB52 → MIGO Traspaso Mov 311 → MIGO Visualizar → MB51'],
          ['🟣 Traspaso entre Almacenes: 2 Pasos', 'MB52 → MIGO Tomar Material Almacén Mov 313 (Centro Emisor) → MIGO Visualizar → MB51 → MIGO Almacenar Mov 315 (doc. mat. emisor) → MIGO Visualizar → MB51'],
          ['⚫ Salida por Desguace / Baja', 'MB52 → MIGO Salida Mercancía Otros Mov 551 (+ Motivo de movimiento) → MIGO Visualizar → MB51'],
          ['🔶 Entrada Material a Consignación', 'ME23N (ver OC consignación) → MIGO Entrada Mercancía Mov 101 → MIGO Visualizar → MMBE Stock Especial K'],
          ['🔶 Salida Material Consignación', 'MMBE Stock K → MIGO Salida Mercancía Otros Mov 201 Stock K → MIGO Visualizar → MMBE Stock K → MRKO (Liquidación Consignación)'],
          ['🔷 Salida a Subcontratación', 'ME23N → MIGO Traspaso Mov 541 → MIGO Visualizar → MMBE Stock Especial O'],
          ['🔷 Entrada de Subcontratación', 'MMBE Stock O → MIGO Entrada Mov 101 Stock O → MIGO Visualizar → MMBE Stock O → MIRO (Registro Facturas)'],
        ]
      },
      {
        id: 'GTIM-mapa', title: 'Mapa de Movimientos SAP — Referencia Rápida',
        type: 'table',
        headers: ['Movimiento', 'Descripción', 'Dirección del Stock', 'Transacción típica'],
        rows: [
          ['101', 'Entrada de mercancías vs. pedido', '+Stock almacén', 'MIGO A01 R01/R04/R05'],
          ['103', 'Entrada a stock bloqueado (calidad)', '+Stock bloqueado', 'MIGO A01 R01'],
          ['105', 'Liberar stock bloqueado', 'Bloqueado→Libre', 'MIGO desde doc. 103'],
          ['122', 'Devolución al proveedor', '-Stock almacén', 'MIGO Devolución'],
          ['201', 'Salida a centro de costo', '-Stock almacén', 'MIGO / MB26'],
          ['202', 'Reintegro desde CC', '+Stock almacén', 'MIGO / MB26'],
          ['261', 'Salida para orden de fabricación', '-Stock almacén', 'MIGO'],
          ['301', 'Traspaso entre centros 1 paso', 'CL_A→CL_B', 'MIGO'],
          ['303', 'Tomar de almacén (paso 1)', 'CL_A stock→tránsito', 'MIGO'],
          ['305', 'Almacenar en destino (paso 2)', 'Tránsito→CL_B stock', 'MIGO'],
          ['311', 'Traspaso entre almacenes 1 paso', 'Alm_A→Alm_B mismo CL', 'MIGO / MB26'],
          ['313', 'Tomar de almacén en CL (paso 1)', 'Alm_A→tránsito', 'MIGO'],
          ['315', 'Almacenar en almacén destino (paso 2)', 'Tránsito→Alm_B', 'MIGO'],
          ['344', 'Bloquear stock', 'Libre→Bloqueado', 'MIGO'],
          ['343', 'Desbloquear stock', 'Bloqueado→Libre', 'MIGO'],
          ['351', 'Traslado entre CL — salida', '-Stock CL origen (tránsito)', 'MIGO A07 R01 (ZTRA)'],
          ['541', 'Salida a subcontratista', '-Stock (a proveedor)', 'MIGO'],
          ['551 / Z51', 'Baja / Destrucción / Desguace', '-Stock almacén', 'MIGO R10 Otros'],
          ['Z03', 'Venta de medicamentos (SIFA→SAP)', '-inv_772 SIFA', 'Interfaz automática'],
          ['Z05', 'Entrada por donación', '+Stock 771A', 'MIGO A01 R10 Otros'],
          ['Z53', 'Baja por vencimiento', '-Stock almacén', 'MIGO / interfaz SIFA'],
          ['701', 'Ajuste inventario (+)', '+Stock por diferencia', 'MI07 automático'],
          ['707', 'Ajuste inventario (-)', '-Stock por diferencia', 'MI07 automático'],
        ]
      },
      {
        id: 'GTIM-transacciones-z', title: 'Transacciones Z Personalizadas CCSS — IM',
        type: 'table',
        headers: ['Transacción Z', 'Nombre', 'Uso en el ALM'],
        rows: [
          ['ZIM_0006', 'Formulario de faltantes', 'Documentar materiales que el ALDI no pudo despachar del pedido. Generar formulario formal de faltantes.'],
          ['ZIM_0007', 'Acta de rechazo ad-portas', 'Generar acta cuando se rechaza mercancía en el momento de la recepción (no cumple calidad, temperatura, etc.). Documento legal de rechazo.'],
          ['ZIM_0008', 'Impresión de vales de entrada/salida', 'Imprimir los vales/comprobantes de entrada y salida de materiales para control físico y firma del receptor.'],
          ['ZIM_0004', 'Consumo vs. vencimientos', 'Analizar si el consumo proyectado alcanzará a consumir el stock antes del vencimiento.'],
          ['ZIM_0003', 'Consumo mercancías consignación', 'Reporte de consumo de materiales en consignación para reportar al proveedor.'],
          ['ZLM_ALERTA_LOTES', 'Alerta de lotes con garantía', 'Lotes con garantía de reposición del proveedor próximos a vencer.'],
          ['ZLM_ALERTA_VENC', 'Alerta vencimiento de lotes', 'Semáforo de vencimientos por material, CL y almacén.'],
        ]
      }
    ]
  }

); // end push Lote 4

/* ── EXTENSIÓN LOTE 5 (FINAL) ─────────────────────────────────
   GT023 Versión 02 — Mayo 2025
   Cambios vs. v01: Pedidos sistematizados, tipos de pedidos Z,
   ZDEV devoluciones, traslado 311 por MIGO directo,
   mandante 500, nota de entrega obligatoria, MB51 con receta SIFA
   ──────────────────────────────────────────────────────────── */
GUIAS_OFICIALES.categories.push(

  {
    id: 'GT023-V02',
    code: 'GG-PIMG-CL-GT023 v02',
    title: '🆕 Interfaz SIFA ↔ ERP-SAP — Versión 02',
    subtitle: 'Actualización Mayo 2025 — Cambios y Nuevos Procedimientos',
    color: '#8B1A1A', colorLight: '#FDF0F0',
    icon: '🔄',
    version: 'Versión 02 · Mayo 2025',
    objective: 'Versión actualizada de la Guía GT023. Incorpora: pedidos sistematizados al ALDI, nuevos tipos de pedidos Z (ZDEV, ZEPA, ZAPG, ZEEM, ZPES), proceso de nota de entrega obligatoria, traslado 311 por MIGO directo, mandante 500 y visualización de receta SIFA en MB51.',
    sections: [
      {
        id: 'GT023V2-cambios', title: '📋 Resumen de Cambios v01 → v02',
        type: 'table',
        headers: ['Cambio', 'v01 (12/2024)', 'v02 (05/2025)'],
        rows: [
          ['Mandante SAP', '300', '500 (nuevo mandante de producción)'],
          ['URL producción', 'hana-s4q.ccss.sa.cr:44300/...', 'hana-s4q.ccss.sa.cr:44300/... (misma URL, mandante 500)'],
          ['Pedidos al ALDI', 'Solo ZTRA (creación manual)', 'ZORD/ZOFR/ZOAL/ZOSU/ZPSI generados automáticamente + ZEPA/ZAPG/ZEEM/ZPES/ZDEV por digitación'],
          ['Tipo devolución al ALDI', 'ZTRA con movimiento 351', 'ZDEV (nuevo tipo de pedido dedicado para devoluciones)'],
          ['Nota de entrega', 'No documentado', 'OBLIGATORIA: agregar versión al pedido → esperar 5 min → obtener N° entrega en Historia de pedido'],
          ['Traslado 311 (1100→771A)', 'Via MB21 + MB26', 'MIGO directo → Traspaso → R10 Otros → Mov. 311 (más simple)'],
          ['MB51 con receta SIFA', 'No documentado', 'Nuevo paso: "Lista Detallada" muestra N° receta/consecutivo SIFA en campo "Texto cab. documento"'],
        ]
      },
      {
        id: 'GT023V2-acceso', title: 'Acceso Actualizado — Mandante 500',
        type: 'list',
        items: [
          { icon: '🔑', title: 'Nuevo mandante de producción: 500', text: 'Al ingresar al sistema SAP, el campo "Mandante" ahora es 500 (antes era 300). Verificar que este campo esté correcto al iniciar sesión. Usuario: número de cédula de identidad. Idioma: ES - Español.' },
          { icon: '🌐', title: 'URLs de acceso (sin cambio)', text: 'Capacitación: https://hana-s4q.ccss.sa.cr:44300/sap/bc/ui2/flp#Shell-appfinder&/userMenu — Producción: misma URL. La diferencia está en el mandante: use 500 para producción.' },
          { icon: '🔧', title: 'Problemas de acceso', text: 'Si no puede acceder por clave o usuario incorrecto: Mesa de Servicios TI: https://serviciostic.ccss.sa.cr:8553/CAisd/pdmweb.exe' },
        ]
      },
      {
        id: 'GT023V2-mb51-sifa', title: '🆕 MB51 — Ver Receta/Consecutivo SIFA en Lista Detallada',
        type: 'steps',
        steps: [
          { num: 1, title: 'Acceder a MB51', color: '#8B1A1A', items: ['Transacción MB51 → ingresar Centro Logístico y Almacén (771A o 772A) → Ejecutar.'] },
          { num: 2, title: 'Vista estándar', color: '#8B1A1A', items: ['La vista estándar muestra: material, almacén, clase de movimiento (101), posición, fecha, cantidad.'] },
          { num: 3, title: '🆕 Activar Lista Detallada', color: '#8B1A1A', items: ['Dar clic en el botón "Lista Detallada" en la barra de opciones de la pantalla de resultados.', 'El formato cambia y aparece la columna "Texto cab. documento".', 'En esa columna se mostrará el número de receta o consecutivo de SIFA generado por la interfaz.', 'Útil para: conciliar movimientos SAP con los documentos del SIFA, auditorías, verificar que la interfaz operó correctamente.'] },
        ]
      },
      {
        id: 'GT023V2-pedidos-sist', title: '🆕 Pedidos Sistematizados al ALDI',
        type: 'list',
        items: [
          { icon: '⚙️', title: '¿Qué son los pedidos sistematizados?', text: 'El sistema SAP genera automáticamente los pedidos ordinarios al ALDI 6 días antes de la fecha de entrega establecida en el cronograma de la Gerencia Logística. El farmacéutico solo debe revisar y ajustar (solo disminuir) cantidades si es necesario.' },
          { icon: '📋', title: 'Tipos de pedidos sistematizados', text: 'ZORD = Pedido Ordinario, ZOFR = Pedido Frigoríficos (cadena de frío), ZOAL = Pedido Alcoholes, ZOSU = Pedido Sueros, ZPSI = Pedido Psicotrópicos y Estupefacientes. Todos requieren gestionar las versiones para generar la orden de entrega.' },
          { icon: '⚠️', title: 'IMPORTANTE: Versiones obligatorias', text: 'Para que el ALDI pueda preparar el pedido, se DEBE agregar una versión al pedido con motivo 0001 "Liberación de traslado". Sin este paso, el ALDI no puede generar la nota de entrega y el pedido no se despacha.' },
        ]
      },
      {
        id: 'GT023V2-pedidos-sist-pasos', title: '🆕 Cómo Gestionar Pedidos Sistematizados (ME2N → ME22N)',
        type: 'steps',
        steps: [
          { num: 1, title: 'Buscar el pedido sistematizado — ME2N', color: '#8B1A1A', items: ['Transacción: ME2N (Visualizar documentos de compras por número).', 'Filtros recomendados:', '→ Centro: su centro logístico', '→ Centro suministrador: G106 (ALDI San Francisco), G109 (La Uruca), G110 (Puntarenas)', '→ Fecha de entrega y/o fecha de documento: rango de fechas del período', 'Dar clic en "Ejecutar".', 'La primera columna muestra el N° de pedido sistematizado generado.'] },
          { num: 2, title: 'Abrir el pedido — ME22N o ME23N', color: '#8B1A1A', items: ['Transacción: ME22N (Modificar) o ME23N (Solo visualizar).', 'Dar clic en "Otro pedido".', 'Digitar el número de pedido identificado → Enter.'] },
          { num: 3, title: 'Revisar cantidades (solo disminuir)', color: '#8B1A1A', items: ['El botón "Visualizar/Modificar" activa/desactiva los campos editables.', 'Revisar cada línea del pedido.', '⚠️ Solo se puede DISMINUIR cantidades, no aumentar.', 'Si algún producto no se necesita: poner cantidad 0 o eliminar la posición.'] },
          { num: 4, title: '🆕 Agregar versión — Pestaña "Versiones"', color: '#8B1A1A', items: ['En el apartado de cabecera: ir a la pestaña "Versiones".', 'Dar clic en "Añadir nueva versión".', 'En el campo "Motivo": dar clic en el match code (ícono de búsqueda).', 'Seleccionar: 0001 "Liberación de traslado" → dar clic en OK.', 'Dar clic en el check ✓ en el "Menú de selección de tablas" para concluir la versión.'] },
          { num: 5, title: 'Grabar el pedido', color: '#8B1A1A', items: ['Dar clic en "Grabar".', 'Mensaje de confirmación: pedido modificado/versión agregada.'] },
          { num: 6, title: '🆕 Obtener N° de nota de entrega (esperar 5 min)', color: '#8B1A1A', items: ['⏱️ Esperar MÍNIMO 5 minutos sin salirse de ME22N.', 'Dar clic en "Otro pedido" → digitar nuevamente el N° de pedido → Enter.', 'Ir a "Detalle posición" → pestaña "Historial de pedido".', 'Buscar la línea "Activación Salida de Mercancía" → anotar el N° de nota de entrega (ej: 80000906).'] },
          { num: 7, title: 'Notificar al ALDI', color: '#007A54', items: ['Enviar correo electrónico al ALDI indicando el N° de nota de entrega obtenido.', 'Este número es el que el ALDI necesita para preparar y despachar el pedido.'] },
        ]
      },
      {
        id: 'GT023V2-tipos-pedidos', title: '🆕 Tipos de Pedidos al ALDI — Referencia Completa v02',
        type: 'table',
        headers: ['Código SAP', 'Nombre', 'Tipo', 'Proceso para nota de entrega'],
        rows: [
          ['ZORD', 'Pedido Ordinario', 'Sistematizado', 'Agregar versión motivo 0001 → esperar 5 min → N° nota entrega en Historial pedido'],
          ['ZOFR', 'Pedido Frigoríficos', 'Sistematizado', 'Agregar versión motivo 0001 → esperar 5 min → N° nota entrega'],
          ['ZOAL', 'Pedido Alcoholes', 'Sistematizado', 'Agregar versión motivo 0001 → esperar 5 min → N° nota entrega'],
          ['ZOSU', 'Pedido Sueros', 'Sistematizado', 'Agregar versión motivo 0001 → esperar 5 min → N° nota entrega'],
          ['ZPSI', 'Pedido Psicotrópicos y Estupefacientes', 'Sistematizado', 'Agregar versión motivo 0001 → esperar 5 min → N° nota entrega'],
          ['ZEPA', 'EP Producto Agotado', 'Digitación manual', 'Requiere versiones → N° nota entrega'],
          ['ZAPG', 'EP Autorizado por Gerencia (APG)', 'Digitación manual', '⚠️ Requiere APROBACIÓN de Estrategia de Liberación antes de generar nota de entrega'],
          ['ZEEM', 'EP Especial Medicamentos', 'Digitación manual', '⚠️ Requiere APROBACIÓN de Estrategia de Liberación'],
          ['ZPES', 'Pedido Entrega en Sitio', 'Digitación manual', '⚠️ Requiere APROBACIÓN de Estrategia de Liberación'],
          ['ZDEV', 'Pedido Devolución', 'Digitación manual', 'Requiere versiones → N° nota entrega. NUEVO tipo exclusivo para devoluciones al ALDI'],
          ['ZTRA', 'Pedido de Traslado (entre CL)', 'Digitación manual', 'No requiere nota de entrega. Solo para traslados entre CL, NO para pedidos al ALDI'],
        ]
      },
      {
        id: 'GT023V2-zdev', title: '🆕 Devolución al ALDI — Nuevo Proceso con ZDEV',
        type: 'steps',
        steps: [
          { num: 1, title: 'Crear pedido de devolución — ME21N con ZDEV', color: '#8B1A1A', items: ['Transacción: ME21N.', 'Tipo de pedido: ZDEV – Pedido de Devolución (⚠️ NO usar ZTRA para devoluciones al ALDI).', 'Ce. Suministrad: el CL que está devolviendo (ej: H103 Hospital Nacional de Niños).', 'Datos de cabecera: Org. Compras 1000, Grupo compras L01 (mismo para todas las devoluciones a G106), Sociedad 1000.'] },
          { num: 2, title: 'Resumen de posiciones', color: '#8B1A1A', items: ['Material: código del material a devolver.', 'Cantidad en UM base.', 'Fecha.', 'Centro Logístico destino: G106 (ALDI San Francisco).', 'Almacén: opcional en la salida; obligatorio cuando el destino lo recibe.', 'Lote: OBLIGATORIO indicar el número de lote a devolver.'] },
          { num: 3, title: 'Detalle de posición — pestaña Entrega', color: '#8B1A1A', items: ['Indicar el estado del material: LIBRE UTILIZACIÓN o BLOQUEADO (según la condición del material a devolver).'] },
          { num: 4, title: 'Imputación', color: '#8B1A1A', items: ['Centro gestor: el del CL correspondiente (buscar con *unidad-ejecutora).', 'PosPre: E/1120/20102/2010201 para medicamentos.'] },
          { num: 5, title: 'Grabar → obtener N° pedido', color: '#8B1A1A', items: ['Grabar el pedido → anotar el N° de pedido generado.'] },
          { num: 6, title: '🆕 Salida del inventario — MIGO A07 R01', color: '#8B1A1A', items: ['Después de crear el pedido ZDEV, ir a MIGO → Movimiento de Mercancías.', 'Seleccionar: A07 Salida de mercancías → R01 Pedido.', 'Digitar el N° de pedido ZDEV creado → Enter.', 'Verificar en pestaña "Cantidad": puede disminuir si es necesario.', 'Pestaña "Se": indicar almacén de salida (771A).', 'Pestaña "Lote": debe coincidir exactamente con el lote del pedido ZDEV.', 'Pestaña "Traslado": verificar el CL destino (G106).', 'Dar check en "Posición OK" → dar clic en "Verificar" → si OK → "Contabilizar".', '✅ Se genera un documento de material que confirma la salida del inventario.'] },
        ]
      },
      {
        id: 'GT023V2-311-migo', title: '🆕 Traslado 1100→771A por MIGO Directo (Mov. 311)',
        type: 'steps',
        steps: [
          { num: 1, title: 'Acceder a MIGO', color: '#8B1A1A', items: ['Transacción: MIGO → Movimiento de Mercancías.', 'Seleccionar: Traspaso → R10 Otros → Clase de movimiento 311 → Enter.'] },
          { num: 2, title: 'Pestaña Traspaso — configurar origen y destino', color: '#8B1A1A', items: ['En la parte "De" (origen): ingresar número de material, centro logístico, almacén 1100.', 'En la parte "A" (destino): ingresar centro logístico, almacén 771A.', 'La pantalla se actualiza con la información cargada.'] },
          { num: 3, title: 'Determinar lote', color: '#8B1A1A', items: ['En la parte "De": dar clic en "Determin.stocks".', 'El sistema muestra los lotes disponibles en el almacén 1100.', 'Seleccionar el lote según FEFO (próximo a vencer primero).', 'Indicar la cantidad a trasladar → dar clic en "Tomar".'] },
          { num: 4, title: 'Completar datos del lado "A"', color: '#8B1A1A', items: ['Al regresar a MIGO, se completan automáticamente los datos de Lote y Cl.Valor. en el lado "De".', 'Completar los mismos datos de lote en el lado "A" (destino 771A).'] },
          { num: 5, title: 'Verificar pestañas', color: '#8B1A1A', items: ['Revisar pestaña Material: código correcto.', 'Revisar pestaña Cantidad: cantidad correcta.', 'Revisar pestaña Interlocutor: debe estar vacío (es un traslado interno, no tiene proveedor).', 'Revisar pestaña Lote: coinciden los datos de fabricación y vencimiento.'] },
          { num: 6, title: 'Verificar y Contabilizar', color: '#007A54', items: ['Dar clic en "Verificar" → revisar mensajes (naranja = advertencia, no detiene).', 'Si todo OK: dar clic en "Contabilizar".', '✅ Se genera el documento de material. El stock se traslada del almacén 1100 al 771A.', 'Verificar con MMBE que el stock ahora aparece en 771A.'] },
        ]
      },
      {
        id: 'GT023V2-notas', title: 'Notas Críticas de la v02',
        type: 'list',
        items: [
          { icon: '⚠️', title: 'Versiones = requisito para despacho del ALDI', text: 'Sin agregar la versión con motivo 0001 al pedido, el ALDI no puede generar la nota de entrega y NO despachará. Es el paso más olvidado y crítico del proceso de pedidos al ALDI en la v02.' },
          { icon: '⏱️', title: 'Los 5 minutos son reales', text: 'Después de grabar el pedido con la versión, SAP necesita tiempo para procesar y generar la nota de entrega. Si revisa antes de los 5 minutos, el Historial de pedido no mostrará la nota. Hay que esperar sin salir de ME22N.' },
          { icon: '🔄', title: 'ZDEV reemplaza el uso de ZTRA para devoluciones', text: 'En la v01 se usaba ZTRA para devoluciones al ALDI. En la v02 existe el tipo ZDEV específicamente para devoluciones. Usar ZDEV garantiza el flujo correcto con la interfaz SIFA.' },
          { icon: '📊', title: 'MB51 Lista Detallada = trazabilidad SIFA-SAP', text: 'El nuevo paso de "Lista Detallada" en MB51 es la herramienta de conciliación entre SAP y SIFA. Si el número de receta SIFA aparece en el campo "Texto cab. documento", confirma que la interfaz operó correctamente para ese movimiento.' },
          { icon: '🔑', title: 'Mandante 500', text: 'Recordar siempre usar mandante 500 al iniciar sesión en producción. Si se conecta con mandante incorrecto, no verá sus datos del CL asignado.' },
        ]
      }
    ]
  }

); // end push Lote 5 (FINAL)
