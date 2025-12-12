// Módulo de Gestión de Prácticas

// Renderizar vista de prácticas
function renderPracticesView() {
    return `
        <div id="practices-view" class="fade-in">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl font-bold text-gray-800" data-i18n="practices.title">Gestión de Prácticas</h1>
                <button id="add-practice-btn" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                    <i class="fas fa-plus"></i>
                    <span data-i18n="practices.newPractice">Nueva Práctica</span>
                </button>
            </div>
            
            <!-- Controles de Interactividad -->
            <div class="mb-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <div class="flex flex-wrap gap-4 items-center">
                    <!-- Búsqueda -->
                    <div class="flex-1 min-w-[200px]">
                        <label for="search" class="block text-sm font-medium text-gray-700 mb-1" data-i18n="common.search">Buscar</label>
                        <input type="text" id="search" placeholder="Buscar en la tabla..." 
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                    </div>
                    
                    <!-- Filtro por profesor -->
                    <div class="flex-1 min-w-[200px]">
                        <label for="professor-filter" class="block text-sm font-medium text-gray-700 mb-1" data-i18n="practices.filterByProfessor">Filtrar por profesor</label>
                        <select id="professor-filter" 
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                            <option value="" data-i18n="common.all">Todos los profesores</option>
                        </select>
                    </div>
                    
                    <!-- Filtro por estado -->
                    <div class="flex-1 min-w-[200px]">
                        <label for="status-filter" class="block text-sm font-medium text-gray-700 mb-1" data-i18n="practices.filterByStatus">Filtrar por estado</label>
                        <select id="status-filter" 
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                            <option value="" data-i18n="common.all">Todos los estados</option>
                            <option value="programada" data-i18n="status.scheduled">Programada</option>
                            <option value="confirmada" data-i18n="status.confirmed">Confirmada</option>
                            <option value="en-curso" data-i18n="status.inProgress">En curso</option>
                            <option value="completada" data-i18n="status.completed">Completada</option>
                            <option value="cancelada" data-i18n="status.cancelled">Cancelada</option>
                        </select>
                    </div>
                    
                    <!-- Botones de acción -->
                    <div class="flex gap-2 items-end">
                        <button id="reset-filters" class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors" data-i18n="common.reset">
                            Restablecer
                        </button>
                        <button id="export-pdf-btn" class="px-4 py-2 bg-primary text-white rounded-md hover:bg-green-700 transition-colors" data-i18n="common.exportPDF">
                            Exportar PDF
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Tabla de Prácticas -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="overflow-x-auto rounded-lg border border-gray-200" id="table-container">
                    <table class="min-w-full divide-y divide-gray-200" id="data-table">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sortable" data-column="date" scope="col">
                                    <span data-i18n="practices.table.date">FECHA</span>
                                    <span class="sort-icon">↕</span>
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sortable" data-column="practice" scope="col">
                                    <span data-i18n="practices.table.practice">PRÁCTICA</span>
                                    <span class="sort-icon">↕</span>
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sortable" data-column="professor" scope="col">
                                    <span data-i18n="practices.table.professor">PROFESOR</span>
                                    <span class="sort-icon">↕</span>
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sortable" data-column="subject" scope="col">
                                    <span data-i18n="practices.table.subject">ASIGNATURA</span>
                                    <span class="sort-icon">↕</span>
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sortable" data-column="status" scope="col">
                                    <span data-i18n="practices.table.status">ESTADO</span>
                                    <span class="sort-icon">↕</span>
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <span data-i18n="practices.table.actions">ACCIONES</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="table-body" class="bg-white divide-y divide-gray-200">
                            <!-- Los datos se cargarán dinámicamente -->
                        </tbody>
                    </table>
                </div>
                
                <!-- Información de resultados -->
                <div class="p-4 border-t border-gray-200 text-sm text-gray-500">
                    <span data-i18n="common.showing">Mostrando</span> <span id="results-count">0</span> <span data-i18n="common.of">de</span> <span id="total-count">0</span> <span data-i18n="practices.practices">prácticas</span>
                </div>
            </div>
        </div>
    `;
}

// Inicializar tabla de prácticas
function initializePracticesTable() {
    const tableBody = document.getElementById('table-body');
    if (!tableBody) {
        console.error('No se encontró table-body');
        return;
    }
    
    tableBody.innerHTML = '';
    
    // Obtener datos filtrados y ordenados
    let filteredData = getFilteredPracticeData();
    filteredData = sortData(filteredData, AppState.sortColumn, AppState.sortDirection);
    
    AppState.currentData = filteredData;
    
    console.log('Renderizando tabla con', filteredData.length, 'prácticas');
    
    // Generar filas de la tabla
    filteredData.forEach((item) => {
        const row = document.createElement('tr');
        row.className = 'bg-white';
        
        const statusColor = getStatusColor(item.status);
        const statusText = getStatusText(item.status);
        
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${formatDate(item.date)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.practice}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.professor}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.subject}</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}">
                    ${statusText}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="edit-practice-btn text-indigo-600 hover:text-indigo-900 mr-3"
                        data-id="${item.id}">
                    Editar
                </button>
                <button class="delete-practice-btn text-red-600 hover:text-red-900"
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
    
    // Agregar event listeners a los botones
    document.querySelectorAll('.edit-practice-btn').forEach(button => {
        button.addEventListener('click', function() {
            const practiceId = parseInt(this.getAttribute('data-id'));
            window.openEditModal(practiceId);
        });
    });
    
    document.querySelectorAll('.delete-practice-btn').forEach(button => {
        button.addEventListener('click', function() {
            const practiceId = parseInt(this.getAttribute('data-id'));
            const practiceName = this.getAttribute('data-practice');
            const practiceProfessor = this.getAttribute('data-professor');
            const practiceDate = this.getAttribute('data-date');
            window.openDeleteModal(practiceId, practiceName, practiceProfessor, practiceDate);
        });
    });
    
    // Configurar event listeners para filtros y ordenamiento
    setupPracticesEventListeners();
    
    // Actualizar contadores y filtros
    updateResultsCount();
    updateFilters();
    
    console.log('Tabla de prácticas actualizada correctamente');
}

// Configurar event listeners para prácticas
function setupPracticesEventListeners() {
    // Botón para agregar práctica
    const addPracticeBtn = document.getElementById('add-practice-btn');
    if (addPracticeBtn) {
        addPracticeBtn.addEventListener('click', function() {
            window.openNewPracticeModal();
        });
    }
    
    // Filtros
    const searchInput = document.getElementById('search');
    const professorFilter = document.getElementById('professor-filter');
    const statusFilter = document.getElementById('status-filter');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            AppState.currentFilters.search = e.target.value.toLowerCase();
            filterAndUpdatePracticesTable();
        });
    }
    
    if (professorFilter) {
        professorFilter.addEventListener('change', function(e) {
            AppState.currentFilters.professor = e.target.value;
            filterAndUpdatePracticesTable();
        });
    }
    
    if (statusFilter) {
        statusFilter.addEventListener('change', function(e) {
            AppState.currentFilters.status = e.target.value;
            filterAndUpdatePracticesTable();
        });
    }
    
    // Botón de restablecer filtros
    const resetFiltersBtn = document.getElementById('reset-filters');
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', resetFilters);
    }
    
    // Botón de exportar PDF
    const exportPdfBtn = document.getElementById('export-pdf-btn');
    if (exportPdfBtn) {
        exportPdfBtn.addEventListener('click', function() {
            showSuccessMessage('Función no disponible');
        });
    }
    
    // Ordenamiento de columnas
    document.querySelectorAll('.sortable').forEach(header => {
        header.addEventListener('click', function() {
            const column = this.getAttribute('data-column');
            sortPracticesTable(column);
        });
    });
}

// Filtrar y actualizar tabla de prácticas
function filterAndUpdatePracticesTable() {
    initializePracticesTable();
}

// Ordenar tabla de prácticas
function sortPracticesTable(column, direction = null) {
    // Determinar dirección de ordenamiento
    if (column === AppState.sortColumn) {
        AppState.sortDirection = direction || (AppState.sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
        AppState.sortColumn = column;
        AppState.sortDirection = 'asc';
    }
    
    // Actualizar indicadores visuales de ordenamiento
    updateSortIndicators();
    
    // Volver a renderizar la tabla
    initializePracticesTable();
}

// Actualizar indicadores visuales de ordenamiento
function updateSortIndicators() {
    document.querySelectorAll('.sortable').forEach(header => {
        header.classList.remove('active-sort');
        const icon = header.querySelector('.sort-icon');
        
        if (header.getAttribute('data-column') === AppState.sortColumn) {
            header.classList.add('active-sort');
            icon.textContent = AppState.sortDirection === 'asc' ? '↑' : '↓';
        } else {
            icon.textContent = '↕';
        }
    });
}

// Actualizar filtros desplegables
function updateFilters() {
    const professorFilter = document.getElementById('professor-filter');
    
    if (!professorFilter) return;
    
    // Obtener valores únicos
    const professors = [...new Set(AppState.practiceData.map(item => item.professor))];
    
    // Limpiar opciones existentes (excepto la primera)
    while (professorFilter.children.length > 1) {
        professorFilter.removeChild(professorFilter.lastChild);
    }
    
    // Agregar opciones
    professors.forEach(professor => {
        const option = document.createElement('option');
        option.value = professor;
        option.textContent = professor;
        professorFilter.appendChild(option);
    });
    
    // Restaurar valores seleccionados si existen
    if (AppState.currentFilters.professor) {
        professorFilter.value = AppState.currentFilters.professor;
    }
    if (AppState.currentFilters.status) {
        const statusFilter = document.getElementById('status-filter');
        if (statusFilter) {
            statusFilter.value = AppState.currentFilters.status;
        }
    }
}

// Restablecer filtros
function resetFilters() {
    const searchInput = document.getElementById('search');
    const professorFilter = document.getElementById('professor-filter');
    const statusFilter = document.getElementById('status-filter');
    
    if (searchInput) searchInput.value = '';
    if (professorFilter) professorFilter.value = '';
    if (statusFilter) statusFilter.value = '';
    
    AppState.currentFilters = {
        search: '',
        professor: '',
        status: ''
    };
    
    AppState.sortColumn = 'date';
    AppState.sortDirection = 'asc';
    
    initializePracticesTable();
}

// Actualizar contador de resultados
function updateResultsCount() {
    const resultsCount = document.getElementById('results-count');
    const totalCount = document.getElementById('total-count');
    
    if (resultsCount && totalCount) {
        resultsCount.textContent = AppState.currentData.length;
        totalCount.textContent = AppState.practiceData.length;
        console.log('Contadores actualizados:', AppState.currentData.length, 'de', AppState.practiceData.length);
    }
}

// Exportar funciones para uso global
window.renderPracticesView = renderPracticesView;
window.initializePracticesTable = initializePracticesTable;
window.setupPracticesEventListeners = setupPracticesEventListeners;
window.filterAndUpdatePracticesTable = filterAndUpdatePracticesTable;
window.sortPracticesTable = sortPracticesTable;
window.updateSortIndicators = updateSortIndicators;
window.updateFilters = updateFilters;
window.resetFilters = resetFilters;
window.updateResultsCount = updateResultsCount;