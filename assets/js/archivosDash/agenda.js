// Módulo de Agenda por Laboratorio

// Renderizar vista de agenda
function renderAgendaView() {
    return `
        <div id="agenda-view" class="fade-in">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl font-bold text-gray-800" data-i18n="agenda.title">Agenda - Disponibilidad por Laboratorio</h1>
                <button id="add-practice-agenda-btn" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                    <i class="fas fa-plus"></i>
                    <span data-i18n="practices.newPractice">Nueva Práctica</span>
                </button>
            </div>
            
            <!-- Selector de Laboratorio -->
            <div class="mb-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div class="flex-1 min-w-[300px]">
                        <label for="lab-selector" class="block text-sm font-medium text-gray-700 mb-2">
                            <i class="fas fa-flask mr-2"></i>Seleccionar Laboratorio
                        </label>
                        <select id="lab-selector" 
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                            <option value="">Seleccione un laboratorio para ver su disponibilidad</option>
                            <!-- Los laboratorios se cargarán dinámicamente -->
                        </select>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <div class="text-sm text-gray-600">
                            <div class="flex items-center space-x-2">
                                <div class="w-4 h-4 bg-green-100 border border-green-500 rounded"></div>
                                <span>Disponible</span>
                            </div>
                            <div class="flex items-center space-x-2 mt-1">
                                <div class="w-4 h-4 bg-red-100 border border-red-500 rounded"></div>
                                <span>Ocupado</span>
                            </div>
                        </div>
                        <button id="refresh-schedule" class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                            <i class="fas fa-sync-alt"></i>
                            <span>Actualizar</span>
                        </button>
                    </div>
                </div>
                
                <!-- Información del laboratorio seleccionado -->
                <div id="selected-lab-info" class="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200 hidden">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="font-semibold text-gray-800" id="current-lab-name"></h3>
                            <p class="text-sm text-gray-600" id="current-lab-building"></p>
                        </div>
                        <div class="text-sm">
                            <span class="px-2 py-1 bg-primary text-white rounded-full" id="current-lab-practices-count">0 prácticas</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Tabla de Disponibilidad -->
            <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div class="schedule-container">
                    <div class="schedule-header">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800" id="schedule-title">Seleccione un laboratorio</h3>
                            <p class="text-sm text-gray-500" id="schedule-subtitle">La tabla mostrará la disponibilidad del laboratorio seleccionado</p>
                        </div>
                        <div class="schedule-legend">
                            <div class="legend-item">
                                <div class="legend-color" style="background-color: #fecaca;"></div>
                                <span class="text-gray-600" data-i18n="agenda.occupied">Ocupado</span>
                            </div>
                            <div class="legend-item">
                                <div class="legend-color" style="background-color: #d1fae5;"></div>
                                <span class="text-gray-600" data-i18n="agenda.available">Disponible</span>
                            </div>
                        </div>
                    </div>
                    
                    <div id="schedule-wrapper" class="schedule-wrapper">
                        <div id="no-lab-selected" class="text-center py-12">
                            <i class="fas fa-flask text-4xl text-gray-300 mb-4"></i>
                            <h4 class="text-lg font-medium text-gray-700 mb-2">Seleccione un laboratorio</h4>
                            <p class="text-gray-500">Por favor, seleccione un laboratorio de la lista para ver su disponibilidad semanal.</p>
                        </div>
                        
                        <table id="schedule-table" class="schedule-table hidden">
                            <thead>
                                <tr>
                                    <th class="bg-gray-100 text-gray-800" data-i18n="agenda.timeDay">Hora/Día</th>
                                    <th class="bg-gray-100 text-gray-800" data-i18n="days.monday">Lunes</th>
                                    <th class="bg-gray-100 text-gray-800" data-i18n="days.tuesday">Martes</th>
                                    <th class="bg-gray-100 text-gray-800" data-i18n="days.wednesday">Miércoles</th>
                                    <th class="bg-gray-100 text-gray-800" data-i18n="days.thursday">Jueves</th>
                                    <th class="bg-gray-100 text-gray-800" data-i18n="days.friday">Viernes</th>
                                </tr>
                            </thead>
                            <tbody id="schedule-body-agenda">
                                <!-- Las celdas se generarán con JavaScript -->
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="mt-4 text-sm text-gray-500">
                        <p id="agenda-description" data-i18n="agenda.description">La tabla muestra la disponibilidad del laboratorio seleccionado para la semana actual.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Inicializar selector de laboratorios
function initializeLabSelector() {
    const labSelector = document.getElementById('lab-selector');
    if (!labSelector) return;
    
    // Limpiar opciones existentes
    labSelector.innerHTML = '<option value="">Seleccione un laboratorio para ver su disponibilidad</option>';
    
    // Agregar laboratorios disponibles
    AppState.laboratoriesData.forEach(lab => {
        const option = document.createElement('option');
        option.value = lab.id;
        option.textContent = `${lab.name} - ${lab.building}`;
        labSelector.appendChild(option);
    });
    
    // Agregar event listener para cambiar laboratorio
    labSelector.addEventListener('change', function() {
        const labId = parseInt(this.value);
        if (labId) {
            loadLabSchedule(labId);
        } else {
            showNoLabSelected();
        }
    });
    
    // Configurar botón de refrescar
    const refreshBtn = document.getElementById('refresh-schedule');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            if (AppState.selectedLabId) {
                loadLabSchedule(AppState.selectedLabId);
            } else {
                showNoLabSelected();
            }
        });
    }
    
    // Configurar botón de nueva práctica en agenda
    const addPracticeBtn = document.getElementById('add-practice-agenda-btn');
    if (addPracticeBtn) {
        addPracticeBtn.addEventListener('click', function() {
            window.openNewPracticeModal();
        });
    }
}

// Cargar horario de un laboratorio específico
function loadLabSchedule(labId) {
    AppState.selectedLabId = labId;
    
    // Obtener información del laboratorio
    const lab = getLaboratoryById(labId);
    if (!lab) return;
    
    // Mostrar información del laboratorio
    document.getElementById('current-lab-name').textContent = lab.name;
    document.getElementById('current-lab-building').textContent = lab.building;
    document.getElementById('selected-lab-info').classList.remove('hidden');
    
    // Contar prácticas para este laboratorio
    const labPractices = AppState.practiceData.filter(p => p.labId === labId);
    document.getElementById('current-lab-practices-count').textContent = `${labPractices.length} prácticas`;
    
    // Actualizar título
    document.getElementById('schedule-title').textContent = `Disponibilidad: ${lab.name}`;
    document.getElementById('schedule-subtitle').textContent = `Horario semanal - ${lab.building}`;
    document.getElementById('agenda-description').textContent = `La tabla muestra la disponibilidad del laboratorio "${lab.name}" para la semana actual.`;
    
    // Ocultar mensaje "seleccione laboratorio"
    document.getElementById('no-lab-selected').classList.add('hidden');
    document.getElementById('schedule-table').classList.remove('hidden');
    
    // Generar tabla de disponibilidad
    generateLabSchedule(labId);
}

// Generar tabla de disponibilidad para un laboratorio específico
function generateLabSchedule(labId) {
    const scheduleBody = document.getElementById('schedule-body-agenda');
    if (!scheduleBody) return;
    
    scheduleBody.innerHTML = '';
    
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    const hours = ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
    
    // Obtener ocupación del laboratorio
    const labOccupancy = getLabOccupancy(labId);
    
    // Generar filas de horarios
    hours.forEach(hour => {
        const row = document.createElement('tr');
        
        // Celda de hora
        const timeCell = document.createElement('td');
        timeCell.className = 'p-2 border border-gray-300 text-center text-sm font-medium bg-gray-100 text-gray-800';
        timeCell.textContent = `${hour} - ${parseInt(hour.split(':')[0]) + 1}:00`;
        row.appendChild(timeCell);
        
        // Celdas para cada día
        days.forEach(day => {
            const dayCell = document.createElement('td');
            dayCell.className = 'p-1 border border-gray-300';
            
            const slotDiv = document.createElement('div');
            slotDiv.className = 'time-slot';
            slotDiv.dataset.day = day;
            slotDiv.dataset.hour = hour;
            slotDiv.dataset.labId = labId;
            
            // Verificar si el horario está ocupado para este laboratorio
            const isOccupied = labOccupancy[day] && labOccupancy[day][hour];
            if (isOccupied) {
                slotDiv.classList.add('occupied');
                slotDiv.innerHTML = '<i class="fas fa-ban"></i>';
                slotDiv.title = `${isOccupied.practice} - ${isOccupied.professor}`;
                slotDiv.style.cursor = 'pointer';
                
                // Agregar evento para mostrar información de la práctica
                slotDiv.addEventListener('click', function(e) {
                    e.stopPropagation();
                    showPracticeInfoForLab(labId, day, hour);
                });
            } else {
                slotDiv.classList.add('available');
                slotDiv.innerHTML = '<i class="fas fa-check"></i>';
                slotDiv.title = 'Disponible';
                slotDiv.style.cursor = 'pointer';
                
                // Permitir seleccionar para nueva práctica
                slotDiv.addEventListener('click', function() {
                    selectTimeSlotForLab(labId, day, hour);
                });
            }
            
            dayCell.appendChild(slotDiv);
            row.appendChild(dayCell);
        });
        
        scheduleBody.appendChild(row);
    });
    
    console.log(`Tabla generada para laboratorio ID: ${labId}`);
}

// Seleccionar slot de tiempo para nueva práctica en laboratorio específico
function selectTimeSlotForLab(labId, day, hour) {
    const lab = getLaboratoryById(labId);
    if (!lab) return;
    
    // Guardar la selección temporalmente
    window.selectedTimeSlot = {
        labId: labId,
        labName: lab.name,
        day: day,
        hour: hour
    };
    
    // Abrir modal de nueva práctica con prellenado automático
    openNewPracticeModalForLab(labId, lab.name, day, hour);
}

// Abrir modal para nueva práctica en laboratorio específico
function openNewPracticeModalForLab(labId, labName, day, hour) {
    window.openNewPracticeModal();
    
    // Esperar a que el modal se abra y luego prellenar
    setTimeout(() => {
        // Prellenar la hora en el select
        const timeSelect = document.getElementById('edit-practice-time');
        if (timeSelect) {
            timeSelect.value = hour;
        }
        
        // Calcular y prellenar la fecha correspondiente al día seleccionado
        const targetDate = calculateDateFromDay(day, hour);
        const dateInput = document.getElementById('edit-practice-date');
        if (dateInput) {
            dateInput.value = targetDate;
        }
        
        // Establecer el laboratorio seleccionado
        const labSelect = document.getElementById('edit-practice-lab');
        if (labSelect) {
            // Buscar la opción correspondiente al laboratorio
            for (let i = 0; i < labSelect.options.length; i++) {
                if (labSelect.options[i].value.includes(labName)) {
                    labSelect.selectedIndex = i;
                    break;
                }
            }
        }
        
        console.log('Formulario prellenado:', {
            día: day,
            hora: hour,
            fecha: targetDate,
            laboratorio: labName
        });
    }, 100);
}

// Mostrar información de práctica existente para laboratorio específico
function showPracticeInfoForLab(labId, day, hour) {
    // Buscar práctica en este laboratorio, día y hora
    const practice = AppState.practiceData.find(p => {
        if (!p.date || !p.time || p.labId !== labId) return false;
        const practiceDay = getDayFromDate(p.date);
        return practiceDay === day && p.time === hour;
    });
    
    if (practice) {
        window.showPracticeDetailsModal(practice);
    }
}

// Mostrar estado "no hay laboratorio seleccionado"
function showNoLabSelected() {
    AppState.selectedLabId = null;
    
    // Ocultar información del laboratorio
    const selectedLabInfo = document.getElementById('selected-lab-info');
    if (selectedLabInfo) {
        selectedLabInfo.classList.add('hidden');
    }
    
    // Mostrar mensaje "seleccione laboratorio"
    const noLabSelected = document.getElementById('no-lab-selected');
    const scheduleTable = document.getElementById('schedule-table');
    
    if (noLabSelected) noLabSelected.classList.remove('hidden');
    if (scheduleTable) scheduleTable.classList.add('hidden');
    
    // Actualizar títulos
    const scheduleTitle = document.getElementById('schedule-title');
    const scheduleSubtitle = document.getElementById('schedule-subtitle');
    const agendaDescription = document.getElementById('agenda-description');
    
    if (scheduleTitle) scheduleTitle.textContent = 'Seleccione un laboratorio';
    if (scheduleSubtitle) scheduleSubtitle.textContent = 'La tabla mostrará la disponibilidad del laboratorio seleccionado';
    if (agendaDescription) agendaDescription.textContent = 'La tabla muestra la disponibilidad del laboratorio seleccionado para la semana actual.';
}

// Actualizar agenda después de guardar práctica
function updateAgendaAfterSave(practice) {
    if (practice.labId && AppState.selectedLabId === practice.labId) {
        // Si el laboratorio guardado es el mismo que el mostrado, actualizar
        loadLabSchedule(practice.labId);
    }
    
    // Actualizar las vistas de actividades y próximas prácticas
    if (window.loadRecentActivities) window.loadRecentActivities();
    if (window.loadUpcomingPractices) window.loadUpcomingPractices();
}

// Actualizar agenda después de eliminar práctica
function updateAgendaAfterDelete(practiceId) {
    const deletedPractice = AppState.practiceData.find(p => p.id === practiceId);
    if (deletedPractice && deletedPractice.labId && AppState.selectedLabId === deletedPractice.labId) {
        // Si el laboratorio eliminado es el mismo que el mostrado, actualizar
        loadLabSchedule(deletedPractice.labId);
    }
    
    // Actualizar las vistas de actividades y próximas prácticas
    if (window.loadRecentActivities) window.loadRecentActivities();
    if (window.loadUpcomingPractices) window.loadUpcomingPractices();
}

// Exportar funciones para uso global
window.renderAgendaView = renderAgendaView;
window.initializeLabSelector = initializeLabSelector;
window.loadLabSchedule = loadLabSchedule;
window.generateLabSchedule = generateLabSchedule;
window.selectTimeSlotForLab = selectTimeSlotForLab;
window.openNewPracticeModalForLab = openNewPracticeModalForLab;
window.showPracticeInfoForLab = showPracticeInfoForLab;
window.showNoLabSelected = showNoLabSelected;
window.updateAgendaAfterSave = updateAgendaAfterSave;
window.updateAgendaAfterDelete = updateAgendaAfterDelete;