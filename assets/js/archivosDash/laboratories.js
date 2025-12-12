// ==============================================
// MÓDULO DE GESTIÓN DE REPORTES - VERSIÓN CORREGIDA
// Archivo: reports.js
// ==============================================

console.log('reports.js cargando...');

// Datos de ejemplo para reportes
const DEFAULT_REPORTS = [
    { id: 1, date: '2024-01-15', practice: 'Laboratorio MAC', objective: 'Programación de hilos en web.', professor: 'Dr. Fued', subject: 'Programación Concurrente' },
    { id: 2, date: '2024-01-15', practice: 'Laboratorio Linux', objective: 'Instalación de un sistema operativo dual.', professor: 'Prof. Estefano', subject: 'Sistemas Operativos' },
    { id: 3, date: '2024-01-16', practice: 'Laboratorio Windows', objective: 'Instalación de un sistema operativo dual.', professor: 'Prof. Ricardo', subject: 'Programación I' },
    { id: 4, date: '2024-01-17', practice: 'Laboratorio Windows', objective: 'Examen de conocimientos.', professor: 'Prof. Valeria', subject: 'Liderazgo eq. Alto desempeño' },
    { id: 5, date: '2024-01-18', practice: 'Laboratorio Windows', objective: 'En cuesta de...', professor: 'Prof. Valeria', subject: 'Liderazgo eq. Alto desempeño' }
];

// ========== INICIALIZAR DATOS ==========

function initializeReportsData() {
    console.log('initializeReportsData ejecutado');
    
    // Asegurarse de que AppState existe
    if (!window.AppState) {
        window.AppState = {};
        console.log('AppState creado');
    }
    
    // Inicializar filtros si no existen
    if (!window.AppState.currentReportsFilters) {
        window.AppState.currentReportsFilters = {
            search: '',
            professor: '',
            status: ''
        };
    }
    
    // Si no hay datos de reportes, inicializar con los datos por defecto
    if (!window.AppState.reportsData || !Array.isArray(window.AppState.reportsData)) {
        window.AppState.reportsData = [...DEFAULT_REPORTS];
        console.log('Datos de reportes inicializados:', window.AppState.reportsData);
    }
    
    // Inicializar datos actuales
    if (!window.AppState.currentReportsData || !Array.isArray(window.AppState.currentReportsData)) {
        window.AppState.currentReportsData = [...window.AppState.reportsData];
    }
}

// ========== FUNCIONES AUXILIARES ==========

// Formatear fecha
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

// Obtener texto del estado
function getStatusText(status) {
    switch(status) {
        case 'programada': return 'Programada';
        case 'confirmada': return 'Confirmada';
        case 'en-curso': return 'En curso';
        case 'completada': return 'Completada';
        case 'cancelada': return 'Cancelada';
        default: return status;
    }
}

// ========== RENDERIZAR VISTA ==========

function renderReportsView() {
    console.log('renderReportsView ejecutado');
    
    return `
        <div id="reports-view" class="fade-in">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl font-bold text-gray-800" data-i18n="reports.title">Reportes de Prácticas</h1>
                <button id="export-reports-btn" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                    <i class="fas fa-file-export"></i>
                    <span data-i18n="reports.exportReport">Exportar Reporte</span>
                </button>
            </div>
            
            <!-- Controles de Filtrado -->
            <div class="mb-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <!-- Búsqueda -->
                    <div>
                        <label for="reports-search" class="block text-sm font-medium text-gray-700 mb-1" data-i18n="common.search">Buscar</label>
                        <input type="text" id="reports-search" placeholder="Buscar en la tabla..." 
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                    </div>
                    
                    <!-- Filtro por profesor -->
                    <div>
                        <label for="reports-professor-filter" class="block text-sm font-medium text-gray-700 mb-1" data-i18n="practices.filterByProfessor">Filtrar por profesor</label>
                        <select id="reports-professor-filter" 
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                            <option value="" data-i18n="common.all">Todos los profesores</option>
                            <option value="Dr. Fued">Dr. Fued</option>
                            <option value="Prof. Estefano">Prof. Estefano</option>
                            <option value="Prof. Ricardo">Prof. Ricardo</option>
                            <option value="Prof. Valeria">Prof. Valeria</option>
                        </select>
                    </div>
                    
                    <!-- Filtro por estado -->
                    <div>
                        <label for="reports-status-filter" class="block text-sm font-medium text-gray-700 mb-1" data-i18n="practices.filterByStatus">Filtrar por estado</label>
                        <select id="reports-status-filter" 
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                            <option value="" data-i18n="common.all">Todos los estados</option>
                            <option value="programada" data-i18n="status.scheduled">Programada</option>
                            <option value="confirmada" data-i18n="status.confirmed">Confirmada</option>
                            <option value="en-curso" data-i18n="status.inProgress">En curso</option>
                            <option value="completada" data-i18n="status.completed">Completada</option>
                            <option value="cancelada" data-i18n="status.cancelled">Cancelada</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <!-- Tabla de Reportes -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="overflow-x-auto rounded-lg border border-gray-200">
                    <table class="min-w-full divide-y divide-gray-200" id="reports-table">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-i18n="practices.table.date">
                                    FECHA
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-i18n="practices.table.practice">
                                    PRÁCTICA
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-i18n="reports.table.objective">
                                    OBJETIVO
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-i18n="practices.table.professor">
                                    PROFESOR
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-i18n="practices.table.subject">
                                    ASIGNATURA
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-i18n="practices.table.actions">
                                    ACCIONES
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200" id="reports-table-body">
                            <!-- Las filas se generarán dinámicamente -->
                        </tbody>
                    </table>
                </div>
                
                <!-- Información de resultados -->
                <div class="p-4 border-t border-gray-200 text-sm text-gray-500">
                    <span data-i18n="common.showing">Mostrando</span> <span id="reports-results-count">0</span> <span data-i18n="common.of">de</span> <span id="reports-total-count">0</span> <span data-i18n="practices.practices">prácticas</span>
                </div>
            </div>
        </div>
    `;
}

// ========== INICIALIZAR TABLA ==========

function initializeReportsTable() {
    console.log('initializeReportsTable ejecutado');
    
    const tableBody = document.getElementById('reports-table-body');
    if (!tableBody) {
        console.error('ERROR: No se encontró reports-table-body');
        return;
    }
    
    // Verificar que AppState existe
    if (!window.AppState) {
        console.error('ERROR: AppState no está definido');
        return;
    }
    
    // Verificar que reportsData existe
    if (!window.AppState.reportsData || !Array.isArray(window.AppState.reportsData)) {
        console.error('ERROR: AppState.reportsData no es un array válido');
        return;
    }
    
    console.log('Reportes a mostrar:', window.AppState.reportsData.length);
    
    // Limpiar tabla
    tableBody.innerHTML = '';
    
    // Obtener datos filtrados
    const filteredData = filterReportsData();
    window.AppState.currentReportsData = filteredData;
    
    console.log('Reportes filtrados:', filteredData.length);
    
    // Si no hay datos
    if (filteredData.length === 0) {
        const noDataRow = document.createElement('tr');
        noDataRow.innerHTML = `
            <td colspan="6" class="px-6 py-12 text-center text-gray-500">
                <div class="flex flex-col items-center">
                    <i class="fas fa-chart-bar text-4xl text-gray-300 mb-4"></i>
                    <p class="text-gray-600">No hay reportes que coincidan con los filtros</p>
                    <p class="text-gray-400 text-sm mt-1">Intenta con diferentes criterios de búsqueda</p>
                </div>
            </td>
        `;
        tableBody.appendChild(noDataRow);
    } else {
        // Generar filas de la tabla
        filteredData.forEach((item) => {
            const row = document.createElement('tr');
            row.className = 'bg-white hover:bg-gray-50 transition-colors';
            
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${formatDate(item.date)}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.practice}</td>
                <td class="px-6 py-4 text-sm text-gray-500">${item.objective}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.professor}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.subject}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button class="edit-report-btn text-indigo-600 hover:text-indigo-900 mr-3"
                            data-id="${item.id}">
                        Editar
                    </button>
                    <button class="delete-report-btn text-red-600 hover:text-red-900"
                            data-id="${item.id}"
                            data-practice="${item.practice}"
                            data-professor="${item.professor}"
                            data-date="${formatDate(item.date)}">
                        Eliminar
                    </button>
                </td>
            `;
            
            tableBody.appendChild(row);
        });
    }
    
    console.log('Tabla renderizada con', filteredData.length, 'reportes');
    
    // Actualizar contadores
    updateReportsResultsCount();
    
    // Configurar event listeners después de un pequeño delay
    setTimeout(() => {
        setupReportsTableEventListeners();
    }, 100);
}

// ========== FUNCIÓN DE FILTRADO ==========

function filterReportsData() {
    console.log('filterReportsData ejecutado');
    
    if (!window.AppState || !window.AppState.reportsData) {
        return [];
    }
    
    let filteredData = [...window.AppState.reportsData];
    const filters = window.AppState.currentReportsFilters || {};
    
    console.log('Filtros aplicados:', filters);
    
    // Aplicar filtro de búsqueda
    if (filters.search && filters.search.trim() !== '') {
        const searchTerm = filters.search.toLowerCase();
        console.log('Buscando término:', searchTerm);
        
        filteredData = filteredData.filter(report => {
            const matches = 
                (report.practice && report.practice.toLowerCase().includes(searchTerm)) ||
                (report.professor && report.professor.toLowerCase().includes(searchTerm)) ||
                (report.subject && report.subject.toLowerCase().includes(searchTerm)) ||
                (report.objective && report.objective.toLowerCase().includes(searchTerm));
            
            return matches;
        });
        
        console.log('Después de búsqueda:', filteredData.length);
    }
    
    // Aplicar filtro por profesor
    if (filters.professor && filters.professor !== '') {
        console.log('Filtrando por profesor:', filters.professor);
        filteredData = filteredData.filter(report => 
            report.professor === filters.professor
        );
        console.log('Después de filtrar por profesor:', filteredData.length);
    }
    
    // Aplicar filtro por estado (buscando en practiceData si existe)
    if (filters.status && filters.status !== '') {
        console.log('Filtrando por estado:', filters.status);
        
        // Si existe practiceData, filtrar por estado
        if (window.practiceData && Array.isArray(window.practiceData)) {
            console.log('Usando practiceData para filtrar por estado');
            filteredData = filteredData.filter(report => {
                const practice = window.practiceData.find(p => p.id === report.id);
                return practice && practice.status === filters.status;
            });
        } else {
            // Si no hay practiceData, no podemos filtrar por estado
            console.log('No hay practiceData disponible para filtrar por estado');
            // Si queremos mantener solo los datos que no pueden ser filtrados por estado
            // filteredData = [];
        }
        
        console.log('Después de filtrar por estado:', filteredData.length);
    }
    
    return filteredData;
}

// ========== CONFIGURAR EVENT LISTENERS ==========

function setupReportsTableEventListeners() {
    console.log('setupReportsTableEventListeners ejecutado');
    
    // Event listeners para botones de editar
    document.querySelectorAll('.edit-report-btn').forEach(button => {
        button.addEventListener('click', function() {
            const reportId = parseInt(this.getAttribute('data-id'));
            console.log('Editar reporte ID:', reportId);
            
            // Buscar reporte
            const report = window.AppState.reportsData.find(r => r.id === reportId);
            if (report) {
                console.log('Reporte encontrado:', report.practice);
                
                // Abrir modal de edición si existe la función
                if (typeof window.openEditReportModal === 'function') {
                    console.log('Llamando a openEditReportModal...');
                    window.openEditReportModal(reportId);
                } else if (typeof window.openEditModal === 'function') {
                    // Usar el modal de prácticas si está disponible
                    console.log('Usando openEditModal como fallback...');
                    window.openEditModal(reportId);
                } else {
                    console.error('Funciones de modal no disponibles');
                    alert(`Editar reporte: ${report.practice}\nID: ${reportId}\n\nFuncionalidad no disponible`);
                }
            }
        });
    });
    
    // Event listeners para botones de eliminar
    document.querySelectorAll('.delete-report-btn').forEach(button => {
        button.addEventListener('click', function() {
            const reportId = parseInt(this.getAttribute('data-id'));
            const practiceName = this.getAttribute('data-practice');
            const professor = this.getAttribute('data-professor');
            const date = this.getAttribute('data-date');
            
            console.log('Eliminar reporte ID:', reportId, 'Práctica:', practiceName);
            
            // Abrir modal de eliminación si existe la función
            if (typeof window.openDeleteReportModal === 'function') {
                console.log('Llamando a openDeleteReportModal...');
                window.openDeleteReportModal(reportId, practiceName, professor, date);
            } else if (typeof window.openDeleteModal === 'function') {
                // Usar el modal de prácticas si está disponible
                console.log('Usando openDeleteModal como fallback...');
                window.openDeleteModal(reportId, practiceName, professor, date);
            } else {
                console.error('Funciones de modal no disponibles');
                if (confirm(`¿Está seguro de eliminar el reporte de "${practiceName}"?`)) {
                    deleteReportFromTable(reportId);
                }
            }
        });
    });
    
    console.log('Event listeners de tabla configurados');
}

function setupReportsEventListeners() {
    console.log('setupReportsEventListeners ejecutado');
    
    // Botón de exportar reportes
    const exportReportsBtn = document.getElementById('export-reports-btn');
    if (exportReportsBtn) {
        exportReportsBtn.addEventListener('click', function() {
            console.log('Exportar reportes');
            if (typeof window.exportReportsToPDF === 'function') {
                window.exportReportsToPDF();
            } else {
                exportReportsToPDF();
            }
        });
    }
    
    // Event listeners para filtros
    const searchInput = document.getElementById('reports-search');
    const professorFilter = document.getElementById('reports-professor-filter');
    const statusFilter = document.getElementById('reports-status-filter');
    
    // Filtro de búsqueda
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            console.log('Búsqueda cambiada:', this.value);
            if (window.AppState.currentReportsFilters) {
                window.AppState.currentReportsFilters.search = this.value.toLowerCase();
            }
            initializeReportsTable();
        });
    }
    
    // Filtro por profesor
    if (professorFilter) {
        professorFilter.addEventListener('change', function() {
            console.log('Profesor seleccionado:', this.value);
            if (window.AppState.currentReportsFilters) {
                window.AppState.currentReportsFilters.professor = this.value;
            }
            initializeReportsTable();
        });
    }
    
    // Filtro por estado
    if (statusFilter) {
        statusFilter.addEventListener('change', function() {
            console.log('Estado seleccionado:', this.value);
            if (window.AppState.currentReportsFilters) {
                window.AppState.currentReportsFilters.status = this.value;
            }
            initializeReportsTable();
        });
    }
    
    console.log('Event listeners de filtros configurados');
}

// ========== FUNCIONES DE GESTIÓN DE DATOS ==========

function getReportById(reportId) {
    if (!window.AppState || !window.AppState.reportsData) {
        return null;
    }
    return window.AppState.reportsData.find(report => report.id === reportId);
}

function deleteReport(reportId) {
    if (!window.AppState || !window.AppState.reportsData) {
        return false;
    }
    
    const reportIndex = window.AppState.reportsData.findIndex(report => report.id === reportId);
    
    if (reportIndex === -1) {
        console.error('Reporte no encontrado:', reportId);
        return false;
    }
    
    // Eliminar el reporte
    window.AppState.reportsData.splice(reportIndex, 1);
    
    // Actualizar tabla
    initializeReportsTable();
    
    console.log('Reporte eliminado:', reportId);
    return true;
}

// Función auxiliar para eliminar reporte desde tabla
function deleteReportFromTable(reportId) {
    const deleted = deleteReport(reportId);
    if (deleted) {
        showSuccessMessage('Reporte eliminado correctamente');
    }
    return deleted;
}

// ========== FUNCIÓN DE EXPORTACIÓN ==========

function exportReportsToPDF() {
    console.log('exportReportsToPDF ejecutado');
    
    if (!window.AppState.currentReportsData || window.AppState.currentReportsData.length === 0) {
        alert('No hay datos para exportar');
        return;
    }
    
    // Crear contenido para el reporte
    let content = 'REPORTE DE PRÁCTICAS\n\n';
    content += 'Universidad Politécnica de Durango\n';
    content += `Fecha de generación: ${new Date().toLocaleDateString()}\n\n`;
    content += '=================================================================\n\n';
    
    window.AppState.currentReportsData.forEach((item, index) => {
        content += `PRÁCTICA ${index + 1}\n`;
        content += `Fecha: ${formatDate(item.date)}\n`;
        content += `Nombre: ${item.practice}\n`;
        content += `Objetivo: ${item.objective}\n`;
        content += `Profesor: ${item.professor}\n`;
        content += `Asignatura: ${item.subject}\n`;
        
        // Buscar información adicional en practiceData si existe
        if (window.practiceData) {
            const practice = window.practiceData.find(p => p.id === item.id);
            if (practice) {
                content += `Estado: ${getStatusText(practice.status)}\n`;
                content += `Laboratorio: ${practice.lab || 'No asignado'}\n`;
            }
        }
        
        content += '\n-----------------------------------------------------------------\n\n';
    });
    
    content += `Total de prácticas: ${window.AppState.currentReportsData.length}\n`;
    
    // Crear un blob con el contenido
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    
    // Crear un enlace de descarga
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `reporte_practicas_${new Date().toISOString().split('T')[0]}.txt`;
    
    // Simular clic en el enlace
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Mostrar mensaje de éxito
    showSuccessMessage('Reporte exportado correctamente');
    
    console.log('Reporte exportado con', window.AppState.currentReportsData.length, 'prácticas');
}

// ========== FUNCIONES AUXILIARES ==========

function updateReportsResultsCount() {
    const resultsCount = document.getElementById('reports-results-count');
    const totalCount = document.getElementById('reports-total-count');
    
    if (resultsCount && totalCount) {
        const filteredCount = window.AppState.currentReportsData ? window.AppState.currentReportsData.length : 0;
        const total = window.AppState.reportsData ? window.AppState.reportsData.length : 0;
        
        resultsCount.textContent = filteredCount;
        totalCount.textContent = total;
        
        console.log('Contadores actualizados:', { filteredCount, total });
    }
}

function showSuccessMessage(message) {
    const successMsg = document.getElementById('success-message');
    const successText = document.getElementById('success-text');
    
    if (successMsg && successText) {
        successText.textContent = message;
        successMsg.classList.remove('hidden');
        
        // Ocultar mensaje después de 3 segundos
        setTimeout(() => {
            successMsg.classList.add('hidden');
        }, 3000);
    } else {
        alert(message);
    }
}

// ========== FUNCIONES SIMULADAS PARA MODALES (si no existen) ==========

// Función para abrir modal de editar reporte (simulada si no existe)
if (typeof window.openEditReportModal === 'undefined') {
    window.openEditReportModal = function(reportId) {
        console.log('openEditReportModal simulado llamado para ID:', reportId);
        const report = getReportById(reportId);
        if (report) {
            alert(`Editar reporte:\n\nID: ${report.id}\nPráctica: ${report.practice}\nObjetivo: ${report.objective}\nProfesor: ${report.professor}\nAsignatura: ${report.subject}\n\nEsta funcionalidad está en desarrollo.`);
        }
    };
}

// Función para abrir modal de eliminar reporte (simulada si no existe)
if (typeof window.openDeleteReportModal === 'undefined') {
    window.openDeleteReportModal = function(reportId, practiceName, professor, date) {
        console.log('openDeleteReportModal simulado llamado para ID:', reportId);
        if (confirm(`¿Está seguro de eliminar el reporte de "${practiceName}"?\n\nProfesor: ${professor}\nFecha: ${date}\n\nEsta acción no se puede deshacer.`)) {
            deleteReportFromTable(reportId);
        }
    };
}

// ========== EXPORTAR FUNCIONES ==========

// Asegurarse de que las funciones estén disponibles globalmente
if (typeof window !== 'undefined') {
    window.renderReportsView = renderReportsView;
    window.initializeReportsTable = initializeReportsTable;
    window.setupReportsEventListeners = setupReportsEventListeners;
    window.initializeReportsData = initializeReportsData;
    window.filterReportsData = filterReportsData;
    
    // Funciones de gestión de datos
    window.getReportById = getReportById;
    window.deleteReport = deleteReport;
    window.deleteReportFromTable = deleteReportFromTable;
    
    // Funciones de utilidad
    window.formatDate = formatDate;
    window.getStatusText = getStatusText;
    window.exportReportsToPDF = exportReportsToPDF;
    
    console.log('reports.js cargado correctamente - Funciones exportadas');
}

// Inicializar datos cuando se carga el script
initializeReportsData();
console.log('reports.js completamente cargado');