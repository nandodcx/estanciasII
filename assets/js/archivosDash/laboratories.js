// ==============================================
// MÓDULO DE GESTIÓN DE LABORATORIOS - VERSIÓN CORREGIDA
// Archivo: laboratories.js
// ==============================================

console.log('laboratories.js cargando...');

// Datos iniciales para laboratorios
const DEFAULT_LABORATORIES = [
    { id: 1, name: 'Laboratorio de Química', building: 'Edificio de Ciencias' },
    { id: 2, name: 'Laboratorio de Física', building: 'Edificio de Ciencias' },
    { id: 3, name: 'Laboratorio de Computación', building: 'Edificio Tecnológico' },
    { id: 4, name: 'Aula 4', building: 'Edificio Principal' }
];

// ========== INICIALIZAR DATOS ==========

function initializeLaboratoriesData() {
    console.log('initializeLaboratoriesData ejecutado');
    
    // Asegurarse de que AppState existe
    if (!window.AppState) {
        window.AppState = {};
        console.log('AppState creado');
    }
    
    // Si no hay datos de laboratorios, inicializar con los datos por defecto
    if (!window.AppState.laboratoriesData || !Array.isArray(window.AppState.laboratoriesData)) {
        window.AppState.laboratoriesData = [...DEFAULT_LABORATORIES];
        console.log('Datos de laboratorios inicializados:', window.AppState.laboratoriesData);
    }
}

// ========== RENDERIZAR VISTA ==========

function renderLaboratoriesView() {
    console.log('renderLaboratoriesView ejecutado');
    
    return `
        <div id="laboratories-view" class="fade-in">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl font-bold text-gray-800" data-i18n="laboratories.title">Gestión de Laboratorios</h1>
                <button id="add-laboratory-btn" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                    <i class="fas fa-plus"></i>
                    <span data-i18n="laboratories.addLaboratory">Agregar Laboratorio</span>
                </button>
            </div>
            
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200" id="laboratories-table">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-i18n="laboratories.table.name">
                                    Nombre
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-i18n="laboratories.table.building">
                                    Edificio
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-i18n="laboratories.table.actions">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody id="laboratories-table-body" class="bg-white divide-y divide-gray-200">
                            <!-- Los datos se cargarán dinámicamente -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// ========== INICIALIZAR TABLA ==========

function initializeLaboratoriesTable() {
    console.log('initializeLaboratoriesTable ejecutado');
    
    const tableBody = document.getElementById('laboratories-table-body');
    if (!tableBody) {
        console.error('ERROR: No se encontró laboratories-table-body');
        return;
    }
    
    // Verificar que AppState existe
    if (!window.AppState) {
        console.error('ERROR: AppState no está definido');
        return;
    }
    
    // Verificar que laboratoriesData existe
    if (!window.AppState.laboratoriesData || !Array.isArray(window.AppState.laboratoriesData)) {
        console.error('ERROR: AppState.laboratoriesData no es un array válido');
        return;
    }
    
    console.log('Laboratorios a mostrar:', window.AppState.laboratoriesData.length);
    
    // Limpiar tabla
    tableBody.innerHTML = '';
    
    // Si no hay datos
    if (window.AppState.laboratoriesData.length === 0) {
        const noDataRow = document.createElement('tr');
        noDataRow.innerHTML = `
            <td colspan="3" class="px-6 py-12 text-center text-gray-500">
                <div class="flex flex-col items-center">
                    <i class="fas fa-inbox text-4xl text-gray-300 mb-4"></i>
                    <p class="text-gray-600">No hay laboratorios registrados</p>
                </div>
            </td>
        `;
        tableBody.appendChild(noDataRow);
        return;
    }
    
    // Generar filas de la tabla
    window.AppState.laboratoriesData.forEach((item) => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50 transition-colors';
        
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">${item.name}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">${item.building}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="edit-laboratory-btn text-indigo-600 hover:text-indigo-900 mr-3 px-2 py-1 hover:bg-indigo-50 rounded transition-colors"
                        data-id="${item.id}">
                    Editar
                </button>
                <button class="delete-laboratory-btn text-red-600 hover:text-red-900 px-2 py-1 hover:bg-red-50 rounded transition-colors"
                        data-id="${item.id}"
                        data-name="${item.name}"
                        data-building="${item.building}">
                    Eliminar
                </button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    console.log('Tabla renderizada con', window.AppState.laboratoriesData.length, 'laboratorios');
    
    // Configurar event listeners después de un pequeño delay
    setTimeout(() => {
        // Event listeners para botones de editar
        document.querySelectorAll('.edit-laboratory-btn').forEach(button => {
            button.addEventListener('click', function() {
                const laboratoryId = parseInt(this.getAttribute('data-id'));
                console.log('Editar laboratorio ID:', laboratoryId);
                
                // Buscar laboratorio
                const lab = window.AppState.laboratoriesData.find(l => l.id === laboratoryId);
                if (lab) {
                    console.log('Laboratorio encontrado:', lab.name);
                    
                    // Abrir modal de edición si existe la función
                    if (typeof window.openEditLaboratoryModal === 'function') {
                        console.log('Llamando a openEditLaboratoryModal...');
                        window.openEditLaboratoryModal(laboratoryId);
                    } else {
                        console.error('openEditLaboratoryModal no está disponible');
                        alert(`Editar laboratorio: ${lab.name}\nID: ${laboratoryId}\n\nFunción openEditLaboratoryModal no disponible`);
                    }
                }
            });
        });
        
        // Event listeners para botones de eliminar
        document.querySelectorAll('.delete-laboratory-btn').forEach(button => {
            button.addEventListener('click', function() {
                const laboratoryId = parseInt(this.getAttribute('data-id'));
                const laboratoryName = this.getAttribute('data-name');
                const laboratoryBuilding = this.getAttribute('data-building');
                console.log('Eliminar laboratorio ID:', laboratoryId, 'Nombre:', laboratoryName);
                
                // Abrir modal de eliminación si existe la función
                if (typeof window.openDeleteLaboratoryModal === 'function') {
                    console.log('Llamando a openDeleteLaboratoryModal...');
                    window.openDeleteLaboratoryModal(laboratoryId, laboratoryName, laboratoryBuilding);
                } else {
                    console.error('openDeleteLaboratoryModal no está disponible');
                    if (confirm(`¿Está seguro de eliminar el laboratorio "${laboratoryName}"?`)) {
                        alert(`Laboratorio "${laboratoryName}" eliminado (simulado)`);
                    }
                }
            });
        });
        
        // Botón para agregar nuevo laboratorio
        const addLabBtn = document.getElementById('add-laboratory-btn');
        if (addLabBtn) {
            console.log('Botón de agregar laboratorio encontrado');
            addLabBtn.addEventListener('click', function() {
                console.log('Agregar nuevo laboratorio - Botón clickeado');
                
                if (typeof window.openNewLaboratoryModal === 'function') {
                    console.log('Llamando a openNewLaboratoryModal...');
                    window.openNewLaboratoryModal();
                } else {
                    console.error('openNewLaboratoryModal no está disponible');
                    alert('Funcionalidad de agregar laboratorio no disponible');
                }
            });
        } else {
            console.error('Botón add-laboratory-btn no encontrado');
        }
        
        console.log('Event listeners configurados para la tabla de laboratorios');
    }, 100);
}

// ========== FUNCIONES DE GESTIÓN DE DATOS ==========

function getLaboratoryById(laboratoryId) {
    if (!window.AppState || !window.AppState.laboratoriesData) {
        return null;
    }
    return window.AppState.laboratoriesData.find(lab => lab.id === laboratoryId);
}

function addLaboratory(laboratoryData) {
    if (!window.AppState || !window.AppState.laboratoriesData) {
        return null;
    }
    
    // Verificar si ya existe un laboratorio con el mismo nombre y edificio
    const duplicate = window.AppState.laboratoriesData.find(lab => 
        lab.name.toLowerCase() === laboratoryData.name.toLowerCase() && 
        lab.building.toLowerCase() === laboratoryData.building.toLowerCase()
    );
    
    if (duplicate) {
        console.warn('Ya existe un laboratorio con ese nombre en el mismo edificio');
        return null;
    }
    
    // Generar nuevo ID
    const newId = window.AppState.laboratoriesData.length > 0 
        ? Math.max(...window.AppState.laboratoriesData.map(l => l.id)) + 1 
        : 1;
    
    const newLaboratory = {
        id: newId,
        ...laboratoryData
    };
    
    // Agregar al array
    window.AppState.laboratoriesData.push(newLaboratory);
    
    // Actualizar tabla
    initializeLaboratoriesTable();
    
    // Actualizar selector de laboratorios en agenda si existe
    if (window.loadLaboratoriesSelect && typeof window.loadLaboratoriesSelect === 'function') {
        window.loadLaboratoriesSelect();
    }
    
    console.log('Laboratorio agregado:', newLaboratory);
    return newLaboratory;
}

function updateLaboratory(laboratoryId, updatedData) {
    if (!window.AppState || !window.AppState.laboratoriesData) {
        return null;
    }
    
    const laboratoryIndex = window.AppState.laboratoriesData.findIndex(lab => lab.id === laboratoryId);
    
    if (laboratoryIndex === -1) {
        console.error('Laboratorio no encontrado:', laboratoryId);
        return null;
    }
    
    // Verificar si ya existe otro laboratorio con el mismo nombre y edificio
    const duplicate = window.AppState.laboratoriesData.find(lab => 
        lab.id !== laboratoryId &&
        lab.name.toLowerCase() === updatedData.name.toLowerCase() && 
        lab.building.toLowerCase() === updatedData.building.toLowerCase()
    );
    
    if (duplicate) {
        console.warn('Ya existe otro laboratorio con ese nombre en el mismo edificio');
        return null;
    }
    
    // Actualizar el laboratorio
    window.AppState.laboratoriesData[laboratoryIndex] = {
        ...window.AppState.laboratoriesData[laboratoryIndex],
        ...updatedData
    };
    
    // Actualizar también en las prácticas que usan este laboratorio
    if (window.practiceData && Array.isArray(window.practiceData)) {
        window.practiceData.forEach(practice => {
            if (practice.labId === laboratoryId) {
                practice.lab = `${updatedData.name} (${updatedData.building})`;
                practice.labName = updatedData.name;
            }
        });
    }
    
    // Actualizar tabla
    initializeLaboratoriesTable();
    
    // Actualizar selector de laboratorios en agenda si existe
    if (window.loadLaboratoriesSelect && typeof window.loadLaboratoriesSelect === 'function') {
        window.loadLaboratoriesSelect();
    }
    
    console.log('Laboratorio actualizado:', window.AppState.laboratoriesData[laboratoryIndex]);
    return window.AppState.laboratoriesData[laboratoryIndex];
}

function deleteLaboratory(laboratoryId) {
    if (!window.AppState || !window.AppState.laboratoriesData) {
        return false;
    }
    
    const laboratoryIndex = window.AppState.laboratoriesData.findIndex(lab => lab.id === laboratoryId);
    
    if (laboratoryIndex === -1) {
        console.error('Laboratorio no encontrado:', laboratoryId);
        return false;
    }
    
    // Verificar si hay prácticas usando este laboratorio
    if (window.practiceData && Array.isArray(window.practiceData)) {
        const practicesUsingLab = window.practiceData.filter(p => p.labId === laboratoryId);
        if (practicesUsingLab.length > 0) {
            console.warn('No se puede eliminar el laboratorio porque tiene prácticas asignadas');
            return false;
        }
    }
    
    // Eliminar el laboratorio
    window.AppState.laboratoriesData.splice(laboratoryIndex, 1);
    
    // Actualizar tabla
    initializeLaboratoriesTable();
    
    // Actualizar selector de laboratorios en agenda si existe
    if (window.loadLaboratoriesSelect && typeof window.loadLaboratoriesSelect === 'function') {
        window.loadLaboratoriesSelect();
    }
    
    console.log('Laboratorio eliminado:', laboratoryId);
    return true;
}

// ========== FUNCIONES SIMULADAS PARA MODALES (si no existen) ==========

// Función para abrir modal de nuevo laboratorio (simulada si no existe)
if (typeof window.openNewLaboratoryModal === 'undefined') {
    window.openNewLaboratoryModal = function() {
        console.log('openNewLaboratoryModal simulado llamado');
        alert('Modal para agregar nuevo laboratorio\n\nEsta funcionalidad está en desarrollo.');
    };
}

// Función para abrir modal de editar laboratorio (simulada si no existe)
if (typeof window.openEditLaboratoryModal === 'undefined') {
    window.openEditLaboratoryModal = function(laboratoryId) {
        console.log('openEditLaboratoryModal simulado llamado para ID:', laboratoryId);
        const lab = getLaboratoryById(laboratoryId);
        if (lab) {
            alert(`Editar laboratorio:\n\nID: ${lab.id}\nNombre: ${lab.name}\nEdificio: ${lab.building}\n\nEsta funcionalidad está en desarrollo.`);
        }
    };
}

// Función para abrir modal de eliminar laboratorio (simulada si no existe)
if (typeof window.openDeleteLaboratoryModal === 'undefined') {
    window.openDeleteLaboratoryModal = function(laboratoryId, laboratoryName, laboratoryBuilding) {
        console.log('openDeleteLaboratoryModal simulado llamado para ID:', laboratoryId);
        if (confirm(`¿Está seguro de eliminar el laboratorio "${laboratoryName}"?\n\nEsta acción no se puede deshacer.`)) {
            // Simular eliminación
            alert(`Laboratorio "${laboratoryName}" eliminado exitosamente (simulado).`);
            console.log('Laboratorio eliminado (simulado):', laboratoryName);
        }
    };
}

// ========== FUNCIONES DE CONFIGURACIÓN ==========

function setupLaboratoriesEventListeners() {
    console.log('setupLaboratoriesEventListeners ejecutado');
    
    // Los event listeners ya se configuran en initializeLaboratoriesTable
    // Esta función se mantiene por compatibilidad
    
    // NOTA: Los event listeners reales se configuran en initializeLaboratoriesTable
    // porque necesitan que la tabla esté renderizada primero
}

// ========== EXPORTAR FUNCIONES ==========

// Asegurarse de que las funciones estén disponibles globalmente
if (typeof window !== 'undefined') {
    window.renderLaboratoriesView = renderLaboratoriesView;
    window.initializeLaboratoriesTable = initializeLaboratoriesTable;
    window.setupLaboratoriesEventListeners = setupLaboratoriesEventListeners;
    
    // Funciones de gestión de datos
    window.getLaboratoryById = getLaboratoryById;
    window.addLaboratory = addLaboratory;
    window.updateLaboratory = updateLaboratory;
    window.deleteLaboratory = deleteLaboratory;
    
    // Función de inicialización de datos
    window.initializeLaboratoriesData = initializeLaboratoriesData;
    
    console.log('laboratories.js cargado correctamente - Funciones exportadas');
}

// Inicializar datos cuando se carga el script
initializeLaboratoriesData();
console.log('laboratories.js completamente cargado');