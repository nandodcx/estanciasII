// Módulo del Dashboard

// Renderizar vista del dashboard
function renderDashboardView() {
    return `
        <div id="dashboard-view" class="fade-in">
            <h1 class="text-2xl font-bold text-gray-800 mb-6" data-i18n="dashboard.title">Dashboard de Administración</h1>
            
            <!-- Stats Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" id="stats-cards">
                <!-- Se cargarán dinámicamente -->
            </div>
            
            <!-- Recent Activities and Charts -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Recent Activities -->
                <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 flex flex-col">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-lg font-semibold text-gray-800" data-i18n="dashboard.recentActivities">Actividad Reciente</h2>
                    </div>
                    <div class="space-y-4 flex-1" id="recent-activities">
                        <!-- Las actividades se cargarán dinámicamente -->
                    </div>
                </div>
                
                <!-- Upcoming Practices -->
                <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <h2 class="text-lg font-semibold text-gray-800 mb-4" data-i18n="dashboard.upcomingPractices">Próximas Prácticas</h2>
                    <div class="space-y-4" id="upcoming-practices">
                        <!-- Las prácticas próximas se cargarán dinámicamente -->
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Actualizar estadísticas del dashboard
function updateDashboardStats() {
    const statsContainer = document.getElementById('stats-cards');
    if (!statsContainer) return;
    
    // Calcular estadísticas
    const totalPractices = AppState.practiceData.length;
    
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const monthPractices = AppState.practiceData.filter(practice => {
        const practiceDate = new Date(practice.date);
        return practiceDate.getMonth() + 1 === currentMonth && practiceDate.getFullYear() === currentYear;
    }).length;
    
    const professors = [...new Set(AppState.practiceData.map(item => item.professor))];
    const subjects = [...new Set(AppState.practiceData.map(item => item.subject))];
    
    statsContainer.innerHTML = `
        <div class="dashboard-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm font-medium text-gray-600" data-i18n="dashboard.totalPractices">Total Prácticas</p>
                    <p class="text-2xl font-bold text-gray-800" id="total-practices">${totalPractices}</p>
                </div>
                <div class="p-3 rounded-lg" style="background-color: #AED5F5;">
                    <i class="fas fa-laptop-code text-blue-600 text-2xl"></i>
                </div>
            </div>
            <div class="mt-4">
                <div class="flex items-center text-sm text-green-500">
                    <i class="fas fa-arrow-up mr-1"></i>
                    <span data-i18n="dashboard.stats.increase">12% más que el mes pasado</span>
                </div>
            </div>
        </div>
        
        <div class="dashboard-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm font-medium text-gray-600" data-i18n="dashboard.monthPractices">Prácticas Este Mes</p>
                    <p class="text-2xl font-bold text-gray-800" id="month-practices">${monthPractices}</p>
                </div>
                <div class="p-3 bg-green-100 rounded-lg">
                    <i class="fas fa-calendar-check text-green-500 text-xl"></i>
                </div>
            </div>
            <div class="mt-4">
                <div class="flex items-center text-sm text-green-500">
                    <i class="fas fa-arrow-up mr-1"></i>
                    <span data-i18n="dashboard.stats.weeklyIncrease">5% más que la semana pasada</span>
                </div>
            </div>
        </div>
        
        <div class="dashboard-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm font-medium text-gray-600" data-i18n="dashboard.professors">Profesores</p>
                    <p class="text-2xl font-bold text-gray-800" id="total-professors">${professors.length}</p>
                </div>
                <div class="p-3 bg-purple-100 rounded-lg">
                    <i class="fas fa-user-tie text-purple-500 text-xl"></i>
                </div>
            </div>
            <div class="mt-4">
                <div class="flex items-center text-sm text-gray-500">
                    <span data-i18n="dashboard.stats.noChanges">Sin cambios</span>
                </div>
            </div>
        </div>
        
        <div class="dashboard-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm font-medium text-gray-600" data-i18n="dashboard.subjects">Asignaturas</p>
                    <p class="text-2xl font-bold text-gray-800" id="total-subjects">${subjects.length}</p>
                </div>
                <div class="p-3 bg-yellow-100 rounded-lg">
                    <i class="fas fa-book text-yellow-500 text-xl"></i>
                </div>
            </div>
            <div class="mt-4">
                <div class="flex items-center text-sm text-green-500">
                    <i class="fas fa-arrow-up mr-1"></i>
                    <span data-i18n="dashboard.stats.newThisMonth">2 nuevas este mes</span>
                </div>
            </div>
        </div>
    `;
    
    // Aplicar traducciones a los nuevos elementos
    applyTranslations(AppState.settings.language);
}

// Cargar Actividades Recientes
function loadRecentActivities() {
    const activitiesContainer = document.getElementById('recent-activities');
    if (!activitiesContainer) return;
    
    activitiesContainer.innerHTML = '';
    
    // Ordenar prácticas por fecha (más recientes primero)
    const sortedPractices = [...AppState.practiceData].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );
    
    // Tomar las 4 más recientes
    const recentPractices = sortedPractices.slice(0, 4);
    
    if (recentPractices.length === 0) {
        activitiesContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <p>No hay actividad reciente</p>
            </div>
        `;
        return;
    }
    
    recentPractices.forEach(practice => {
        const activityDiv = document.createElement('div');
        activityDiv.className = 'activity-item';
        activityDiv.setAttribute('data-practice-id', practice.id);
        
        // Determinar tipo de actividad basado en el estado
        let activityType, activityIcon, activityIconBg;
        
        switch(practice.status) {
            case 'programada':
                activityType = 'Nueva práctica programada';
                activityIcon = 'fas fa-plus-circle';
                activityIconBg = 'bg-blue-100 text-blue-600';
                break;
            case 'confirmada':
                activityType = 'Práctica Confirmada';
                activityIcon = 'fas fa-check-circle';
                activityIconBg = 'bg-green-100 text-green-600';
                break;
            case 'en-curso':
                activityType = 'Práctica en Curso';
                activityIcon = 'fas fa-play-circle';
                activityIconBg = 'bg-yellow-100 text-yellow-600';
                break;
            case 'completada':
                activityType = 'Práctica Completada';
                activityIcon = 'fas fa-flag-checkered';
                activityIconBg = 'bg-gray-100 text-gray-600';
                break;
            case 'cancelada':
                activityType = 'Práctica Cancelada';
                activityIcon = 'fas fa-exclamation-triangle';
                activityIconBg = 'bg-red-100 text-red-600';
                break;
            default:
                activityType = 'Actividad de Práctica';
                activityIcon = 'fas fa-laptop-code';
                activityIconBg = 'bg-primary-100 text-primary-600';
        }
        
        // Calcular tiempo relativo
        const timeText = getRelativeTime(practice.date);
        
        activityDiv.innerHTML = `
            <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${activityIconBg}">
                <i class="${activityIcon} text-sm"></i>
            </div>
            <div class="activity-content">
                <p class="activity-title">${activityType}</p>
                <p class="activity-detail">${practice.practice} - ${practice.professor}</p>
                <p class="activity-time">${timeText}</p>
            </div>
        `;
        
        // Agregar evento click para abrir detalles
        activityDiv.addEventListener('click', function() {
            window.openEditModal(practice.id);
        });
        
        activitiesContainer.appendChild(activityDiv);
    });
}

// Cargar Próximas Prácticas
function loadUpcomingPractices() {
    const upcomingContainer = document.getElementById('upcoming-practices');
    if (!upcomingContainer) return;
    
    upcomingContainer.innerHTML = '';
    
    // Obtener fecha actual
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Filtrar prácticas futuras
    const upcomingPractices = AppState.practiceData.filter(practice => {
        const practiceDate = new Date(practice.date);
        practiceDate.setHours(0, 0, 0, 0);
        return practiceDate >= today;
    }).sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Tomar las 4 próximas
    const nextPractices = upcomingPractices.slice(0, 4);
    
    if (nextPractices.length === 0) {
        upcomingContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-calendar-times"></i>
                <p>No hay prácticas próximas</p>
            </div>
        `;
        return;
    }
    
    // Mapeo de estados a estilos
    const practiceStatusStyles = {
        'programada': { 
            bg: 'bg-blue-50',
            tagBg: 'status-programada',
            border: 'border-l-blue-500'
        },
        'confirmada': { 
            bg: 'bg-green-50',
            tagBg: 'status-confirmada',
            border: 'border-l-green-500'
        },
        'en-curso': { 
            bg: 'bg-yellow-50',
            tagBg: 'status-en-curso',
            border: 'border-l-yellow-500'
        },
        'completada': { 
            bg: 'bg-gray-50',
            tagBg: 'status-completada',
            border: 'border-l-gray-500'
        },
        'cancelada': { 
            bg: 'bg-red-50',
            tagBg: 'status-cancelada',
            border: 'border-l-red-500'
        }
    };
    
    // Textos para estados
    const statusTexts = {
        'programada': 'Programada',
        'confirmada': 'Confirmada',
        'en-curso': 'En Curso',
        'completada': 'Completada',
        'cancelada': 'Cancelada'
    };
    
    nextPractices.forEach(practice => {
        const styles = practiceStatusStyles[practice.status] || practiceStatusStyles['programada'];
        const statusText = statusTexts[practice.status] || practice.status;
        
        const practiceDiv = document.createElement('div');
        practiceDiv.className = `upcoming-practice-item ${styles.bg}`;
        practiceDiv.setAttribute('data-practice-id', practice.id);
        
        // Formatear fecha para mostrar
        const practiceDate = new Date(practice.date);
        const dateText = practiceDate.toLocaleDateString('es-ES', { 
            day: 'numeric', 
            month: 'short',
            year: 'numeric'
        });
        
        // Obtener hora si existe
        const timeText = practice.time ? ` • ${practice.time}` : '';
        
        practiceDiv.innerHTML = `
            <div class="upcoming-practice-info">
                <div class="upcoming-practice-name">${practice.practice}</div>
                <div class="upcoming-practice-meta">${practice.professor} - ${dateText}${timeText}</div>
            </div>
            <span class="upcoming-practice-status ${styles.tagBg}">${statusText}</span>
        `;
        
        // Agregar evento click para abrir detalles
        practiceDiv.addEventListener('click', function() {
            window.openEditModal(practice.id);
            
            // Efecto visual de selección
            const allItems = document.querySelectorAll('.upcoming-practice-item');
            allItems.forEach(item => item.classList.remove('ring-2', 'ring-primary'));
            
            practiceDiv.classList.add('ring-2', 'ring-primary');
        });
        
        upcomingContainer.appendChild(practiceDiv);
    });
}

// Inicializar dashboard
function initializeDashboard() {
    updateDashboardStats();
    loadRecentActivities();
    loadUpcomingPractices();
}

// Exportar funciones para uso global
window.renderDashboardView = renderDashboardView;
window.updateDashboardStats = updateDashboardStats;
window.loadRecentActivities = loadRecentActivities;
window.loadUpcomingPractices = loadUpcomingPractices;
window.initializeDashboard = initializeDashboard;