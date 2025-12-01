// Configuración de la API
const API_CONFIG = {
    BASE_URL: 'http://localhost:3000/api',
    ENDPOINTS: {
        RESERVAS: '/reservas',
        USUARIOS: '/usuarios',
        LABORATORIOS: '/laboratorios',
        AUTH: '/auth'
    }
};

// Estado de configuración
const appSettings = {
    darkMode: true,
    emailNotifications: true,
    language: 'es'
};

// Diccionario de traducciones
const translations = {
    es: {
        // Header
        "header.admin": "Administrador",
        
        // Menú
        "menu.title": "Menú",
        "menu.dashboard": "Dashboard",
        "menu.practices": "Prácticas",
        "menu.agenda": "Agenda",
        "menu.users": "Usuarios",
        "menu.reports": "Reportes",
        "menu.settings": "Configuración",
        "menu.profile": "Perfil",
        "menu.logout": "Cerrar Sesión",
        
        // Universidad
        "university.line1": "Universidad Politécnica de",
        "university.line2": "Durango",
        
        // Dashboard
        "dashboard.title": "Dashboard de Administración",
        "dashboard.totalPractices": "Total Prácticas",
        "dashboard.monthPractices": "Prácticas Este Mes",
        "dashboard.professors": "Profesores",
        "dashboard.subjects": "Asignaturas",
        "dashboard.stats.increase": "12% más que el mes pasado",
        "dashboard.stats.weeklyIncrease": "5% más que la semana pasada",
        "dashboard.stats.noChanges": "Sin cambios",
        "dashboard.stats.newThisMonth": "2 nuevas este mes",
        "dashboard.recentActivities": "Actividad Reciente",
        "dashboard.upcomingPractices": "Próximas Prácticas",
        
        // Prácticas
        "practices.title": "Gestión de Prácticas",
        "practices.newPractice": "Nueva Práctica",
        "practices.filterByProfessor": "Filtrar por profesor",
        "practices.filterByStatus": "Filtrar por estado",
        "practices.table.date": "FECHA",
        "practices.table.practice": "PRÁCTICA",
        "practices.table.professor": "PROFESOR",
        "practices.table.subject": "ASIGNATURA",
        "practices.table.status": "ESTADO",
        "practices.table.actions": "ACCIONES",
        "practices.practices": "prácticas",
        "practices.form.date": "Fecha de Práctica",
        "practices.form.name": "Nombre de Práctica",
        "practices.form.professor": "Profesor",
        "practices.form.selectProfessor": "Seleccione un profesor",
        "practices.form.subject": "Asignatura",
        "practices.form.selectSubject": "Seleccione una asignatura",
        "practices.form.objective": "Objetivo de la Práctica",
        "practices.form.lab": "Laboratorio / Aula",
        "practices.form.status": "Estado",
        "practices.editPractice": "Editar Práctica",
        "practices.confirmDelete": "Confirmar Eliminación",
        "practices.deleteConfirmation": "¿Está seguro de eliminar esta práctica?",
        "practices.deleteWarning": "Esta acción no se puede deshacer.",
        "practices.deletePractice": "Eliminar Práctica",
        
        // Agenda
        "agenda.title": "Agenda - Disponibilidad",
        "agenda.weeklyAvailability": "Disponibilidad Semanal",
        "agenda.occupied": "Ocupado",
        "agenda.available": "Disponible",
        "agenda.timeDay": "Hora/Día",
        "agenda.description": "La tabla muestra la disponibilidad de los laboratorios para la semana actual.",
        
        // Días de la semana
        "days.monday": "Lunes",
        "days.tuesday": "Martes",
        "days.wednesday": "Miércoles",
        "days.thursday": "Jueves",
        "days.friday": "Viernes",
        
        // Estados
        "status.scheduled": "Programada",
        "status.confirmed": "Confirmada",
        "status.inProgress": "En curso",
        "status.completed": "Completada",
        "status.cancelled": "Cancelada",
        "status.active": "Activo",
        "status.inactive": "Inactivo",
        
        // Usuarios
        "users.title": "Gestión de Usuarios",
        "users.addUser": "Agregar Usuario",
        "users.table.user": "Usuario",
        "users.table.role": "Rol",
        "users.table.email": "Correo",
        "users.table.status": "Estado",
        "users.table.lastAccess": "Último Acceso",
        "users.table.actions": "Acciones",
        "users.editUser": "Editar Usuario",
        "users.confirmDelete": "Confirmar Eliminación",
        "users.deleteConfirmation": "¿Está seguro de eliminar este usuario?",
        "users.deleteWarning": "Esta acción no se puede deshacer.",
        "users.deleteUser": "Eliminar Usuario",
        "users.form.fullName": "Nombre Completo",
        "users.form.username": "Usuario",
        "users.form.email": "Correo Electrónico",
        "users.form.role": "Rol",
        "users.form.selectRole": "Seleccione un rol",
        "users.form.status": "Estado",
        
        // Reportes
        "reports.title": "Reportes de Prácticas",
        "reports.exportReport": "Exportar Reporte",
        "reports.table.objective": "OBJETIVO",
        
        // Configuración
        "settings.title": "Configuración del Sistema",
        "settings.preferences": "Preferencias",
        "settings.darkMode": "Modo Oscuro",
        "settings.darkModeDescription": "Activar/desactivar el modo oscuro",
        "settings.emailNotifications": "Notificaciones por Email",
        "settings.emailNotificationsDescription": "Recibir notificaciones por correo electrónico",
        "settings.language": "Idioma",
        "settings.saveSettings": "Guardar Configuración",
        
        // Común
        "common.search": "Buscar",
        "common.all": "Todos",
        "common.reset": "Restablecer",
        "common.exportPDF": "Exportar PDF",
        "common.showing": "Mostrando",
        "common.of": "de",
        "common.cancel": "Cancelar",
        "common.saveChanges": "Guardar Cambios",
        
        // Roles
        "roles.admin": "Administrador",
        "roles.teacher": "Profesor",
        "roles.student": "Estudiante",
        
        // Logout
        "logout.confirmation": "¿Está seguro de que desea cerrar sesión?"
    },
    en: {
        // Header
        "header.admin": "Administrator",
        
        // Menú
        "menu.title": "Menu",
        "menu.dashboard": "Dashboard",
        "menu.practices": "Practices",
        "menu.agenda": "Agenda",
        "menu.users": "Users",
        "menu.reports": "Reports",
        "menu.settings": "Settings",
        "menu.profile": "Profile",
        "menu.logout": "Logout",
        
        // Universidad
        "university.line1": "Polytechnic University of",
        "university.line2": "Durango",
        
        // Dashboard
        "dashboard.title": "Administration Dashboard",
        "dashboard.totalPractices": "Total Practices",
        "dashboard.monthPractices": "This Month Practices",
        "dashboard.professors": "Professors",
        "dashboard.subjects": "Subjects",
        "dashboard.stats.increase": "12% more than last month",
        "dashboard.stats.weeklyIncrease": "5% more than last week",
        "dashboard.stats.noChanges": "No changes",
        "dashboard.stats.newThisMonth": "2 new this month",
        "dashboard.recentActivities": "Recent Activities",
        "dashboard.upcomingPractices": "Upcoming Practices",
        
        // Prácticas
        "practices.title": "Practice Management",
        "practices.newPractice": "New Practice",
        "practices.filterByProfessor": "Filter by professor",
        "practices.filterByStatus": "Filter by status",
        "practices.table.date": "DATE",
        "practices.table.practice": "PRACTICE",
        "practices.table.professor": "PROFESSOR",
        "practices.table.subject": "SUBJECT",
        "practices.table.status": "STATUS",
        "practices.table.actions": "ACTIONS",
        "practices.practices": "practices",
        "practices.form.date": "Practice Date",
        "practices.form.name": "Practice Name",
        "practices.form.professor": "Professor",
        "practices.form.selectProfessor": "Select a professor",
        "practices.form.subject": "Subject",
        "practices.form.selectSubject": "Select a subject",
        "practices.form.objective": "Practice Objective",
        "practices.form.lab": "Laboratory / Classroom",
        "practices.form.status": "Status",
        "practices.editPractice": "Edit Practice",
        "practices.confirmDelete": "Confirm Deletion",
        "practices.deleteConfirmation": "Are you sure you want to delete this practice?",
        "practices.deleteWarning": "This action cannot be undone.",
        "practices.deletePractice": "Delete Practice",
        
        // Agenda
        "agenda.title": "Agenda - Availability",
        "agenda.weeklyAvailability": "Weekly Availability",
        "agenda.occupied": "Occupied",
        "agenda.available": "Available",
        "agenda.timeDay": "Time/Day",
        "agenda.description": "The table shows laboratory availability for the current week.",
        
        // Días de la semana
        "days.monday": "Monday",
        "days.tuesday": "Tuesday",
        "days.wednesday": "Wednesday",
        "days.thursday": "Thursday",
        "days.friday": "Friday",
        
        // Estados
        "status.scheduled": "Scheduled",
        "status.confirmed": "Confirmed",
        "status.inProgress": "In Progress",
        "status.completed": "Completed",
        "status.cancelled": "Cancelled",
        "status.active": "Active",
        "status.inactive": "Inactive",
        
        // Usuarios
        "users.title": "User Management",
        "users.addUser": "Add User",
        "users.table.user": "User",
        "users.table.role": "Role",
        "users.table.email": "Email",
        "users.table.status": "Status",
        "users.table.lastAccess": "Last Access",
        "users.table.actions": "Actions",
        "users.editUser": "Edit User",
        "users.confirmDelete": "Confirm Deletion",
        "users.deleteConfirmation": "Are you sure you want to delete this user?",
        "users.deleteWarning": "This action cannot be undone.",
        "users.deleteUser": "Delete User",
        "users.form.fullName": "Full Name",
        "users.form.username": "Username",
        "users.form.email": "Email",
        "users.form.role": "Role",
        "users.form.selectRole": "Select a role",
        "users.form.status": "Status",
        
        // Reportes
        "reports.title": "Practice Reports",
        "reports.exportReport": "Export Report",
        "reports.table.objective": "OBJECTIVE",
        
        // Configuración
        "settings.title": "System Settings",
        "settings.preferences": "Preferences",
        "settings.darkMode": "Dark Mode",
        "settings.darkModeDescription": "Enable/disable dark mode",
        "settings.emailNotifications": "Email Notifications",
        "settings.emailNotificationsDescription": "Receive email notifications",
        "settings.language": "Language",
        "settings.saveSettings": "Save Settings",
        
        // Común
        "common.search": "Search",
        "common.all": "All",
        "common.reset": "Reset",
        "common.exportPDF": "Export PDF",
        "common.showing": "Showing",
        "common.of": "of",
        "common.cancel": "Cancel",
        "common.saveChanges": "Save Changes",
        
        // Roles
        "roles.admin": "Administrator",
        "roles.teacher": "Professor",
        "roles.student": "Student",
        
        // Logout
        "logout.confirmation": "Are you sure you want to log out?"
    }
};

// Datos de ejemplo para backup (si falla la API)
function getDefaultPracticeData() {
    return [
        { 
            id: 1, 
            date: '2024-01-15',
            practice: 'Laboratorio MAC', 
            professor: 'Dr. Fued', 
            subject: 'Programación Concurrente', 
            status: 'programada', 
            time: '7:00',
            objective: 'Programación de hilos en web.',
            lab: 'Laboratorio 3A'
        },
        { 
            id: 2, 
            date: '2024-01-15',
            practice: 'Laboratorio Linux', 
            professor: 'Prof. Estefano', 
            subject: 'Sistemas Operativos', 
            status: 'confirmada', 
            time: '9:00',
            objective: 'Instalación de un sistema operativo dual.',
            lab: 'Laboratorio 2B'
        },
        { 
            id: 3, 
            date: '2024-01-16',
            practice: 'Laboratorio Windows', 
            professor: 'Prof. Ricardo', 
            subject: 'Programación I', 
            status: 'en-curso', 
            time: '11:00',
            objective: 'Instalación de un sistema operativo dual.',
            lab: 'Laboratorio 1C'
        },
        { 
            id: 4, 
            date: '2024-01-17',
            practice: 'Laboratorio Windows', 
            professor: 'Prof. Valeria', 
            subject: 'Liderazgo eq. Alto desempeño', 
            status: 'cancelada', 
            time: '14:00',
            objective: 'Examen de conocimientos.',
            lab: 'Aula 4'
        },
        { 
            id: 5, 
            date: '2024-01-18',
            practice: 'Laboratorio Windows', 
            professor: 'Prof. Valeria', 
            subject: 'Liderazgo eq. Alto desempeño', 
            status: 'completada', 
            time: '16:00',
            objective: 'En cuesta de...',
            lab: 'Aula 4'
        }
    ];
}

function getDefaultUsersData() {
    return [
        { id: 1, name: 'Administrador', username: 'admin', email: 'admin@universidad.edu', role: 'Administrador', status: 'Activo', lastAccess: 'Hoy, 10:30 AM' },
        { id: 2, name: 'Profesor Ejemplo', username: 'profesor', email: 'profesor@universidad.edu', role: 'Profesor', status: 'Activo', lastAccess: 'Ayer' }
    ];
}

function getDefaultReportsData() {
    const practices = getDefaultPracticeData();
    return practices.map(practice => ({
        id: practice.id,
        date: practice.date,
        practice: practice.practice,
        objective: practice.objective,
        professor: practice.professor,
        subject: practice.subject
    }));
}

// Estado de la aplicación
let practiceData = [];
let usersData = [];
let reportsData = [];
let currentData = [];
let currentReportsData = [];
let sortColumn = 'date';
let sortDirection = 'asc';
let currentFilters = {
    search: '',
    professor: '',
    status: ''
};
let currentReportsFilters = {
    search: '',
    professor: '',
    status: ''
};

// Horarios ocupados para la agenda
let scheduleOccupancy = {};
window.selectedTimeSlot = null;

// =================== FUNCIONES DE API ===================
async function fetchFromAPI(endpoint, options = {}) {
    try {
        const url = `${API_CONFIG.BASE_URL}${endpoint}`;
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        };
        
        console.log(`Solicitando: ${url}`);
        const response = await fetch(url, { ...defaultOptions, ...options });
        
        console.log(`Respuesta: ${response.status} ${response.statusText}`);
        
        if (response.status === 401 || response.status === 403) {
            console.warn('Acceso no autorizado, redirigiendo a login...');
            window.location.href = '/login';
            return null;
        }
        
        if (!response.ok) {
            console.warn(`API ${endpoint} respondió con error: ${response.status}`);
            return null;
        }
        
        // Verificar si la respuesta tiene contenido
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        } else {
            console.warn(`Respuesta no JSON de ${endpoint}`);
            return null;
        }
    } catch (error) {
        console.warn(`Error de red al conectar con ${endpoint}:`, error.message);
        return null;
    }
}

// Cargar reservas (prácticas) desde la API
async function loadPracticesFromAPI() {
    try {
        console.log('Cargando prácticas desde API...');
        const data = await fetchFromAPI(API_CONFIG.ENDPOINTS.RESERVAS);
        
        if (!data || !Array.isArray(data)) {
            console.warn('API de prácticas no devolvió datos válidos, usando datos locales');
            return false;
        }
        
        // Transformar datos de la API al formato esperado por la UI
        practiceData = data.map(reserva => ({
            id: reserva.id_reserva || reserva.id || Date.now(),
            date: reserva.fecha || new Date().toISOString().split('T')[0],
            time: reserva.hora || '09:00',
            practice: reserva.nombre_practica || `Práctica ${reserva.id_reserva || ''}`,
            professor: reserva.nombre_usuario || reserva.profesor || 'Sin asignar',
            subject: reserva.nombre_materia || reserva.materia || 'Sin asignatura',
            status: mapStatus(reserva.estado),
            objective: reserva.descripcion || reserva.objetivo || '',
            lab: reserva.nombre_laboratorio || reserva.laboratorio || 'Sin laboratorio'
        }));
        
        currentData = [...practiceData];
        
        // Generar datos para reportes
        reportsData = practiceData.map(practice => ({
            id: practice.id,
            date: practice.date,
            practice: practice.practice,
            objective: practice.objective,
            professor: practice.professor,
            subject: practice.subject
        }));
        
        currentReportsData = [...reportsData];
        
        console.log(`Prácticas cargadas: ${practiceData.length}`);
        return true;
    } catch (error) {
        console.error('Error inesperado al cargar prácticas:', error);
        return false;
    }
}

// Cargar usuarios desde la API
async function loadUsersFromAPI() {
    try {
        console.log('Cargando usuarios desde API...');
        const data = await fetchFromAPI(API_CONFIG.ENDPOINTS.USUARIOS);
        
        if (!data || !Array.isArray(data)) {
            console.warn('API de usuarios no devolvió datos válidos, usando datos locales');
            return false;
        }
        
        usersData = data.map(usuario => ({
            id: usuario.id_usuario || usuario.id || Date.now(),
            name: usuario.nombre_completo || usuario.nombre || usuario.email || 'Usuario',
            username: usuario.username || (usuario.email ? usuario.email.split('@')[0] : 'user'),
            email: usuario.email || 'sin-email@ejemplo.com',
            role: mapRole(usuario.rol_id || usuario.rol),
            status: usuario.activo || usuario.estado === 'activo' ? 'Activo' : 'Inactivo',
            lastAccess: formatLastAccess(usuario.ultimo_login || usuario.last_login)
        }));
        
        console.log(`Usuarios cargados: ${usersData.length}`);
        return true;
    } catch (error) {
        console.error('Error inesperado al cargar usuarios:', error);
        return false;
    }
}

// Map de estado de la API al formato UI
function mapStatus(estado) {
    if (!estado) return 'programada';
    
    const statusMap = {
        'pendiente': 'programada',
        'confirmada': 'confirmada',
        'en_progreso': 'en-curso',
        'en progreso': 'en-curso',
        'completada': 'completada',
        'cancelada': 'cancelada',
        'aprobada': 'confirmada',
        'rechazada': 'cancelada',
        'programada': 'programada'
    };
    return statusMap[estado.toLowerCase()] || 'programada';
}

// Map de rol de la API al formato UI
function mapRole(rol) {
    if (!rol) return 'Estudiante';
    
    // Si es número
    if (typeof rol === 'number') {
        const roleMap = {
            1: 'Administrador',
            2: 'Profesor',
            3: 'Estudiante'
        };
        return roleMap[rol] || 'Estudiante';
    }
    
    // Si es string
    const roleMap = {
        'admin': 'Administrador',
        'administrador': 'Administrador',
        'profesor': 'Profesor',
        'teacher': 'Profesor',
        'estudiante': 'Estudiante',
        'student': 'Estudiante'
    };
    return roleMap[rol.toLowerCase()] || 'Estudiante';
}

// Formatear último acceso
function formatLastAccess(timestamp) {
    if (!timestamp) return 'Nunca';
    
    try {
        const date = new Date(timestamp);
        if (isNaN(date.getTime())) return 'Nunca';
        
        const now = new Date();
        const diffMs = now - date;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) {
            const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
            if (diffHours === 0) {
                const diffMinutes = Math.floor(diffMs / (1000 * 60));
                return diffMinutes === 0 ? 'Hace unos momentos' : `Hace ${diffMinutes} minutos`;
            }
            return `Hace ${diffHours} horas`;
        }
        if (diffDays === 1) return 'Ayer';
        if (diffDays < 7) return `Hace ${diffDays} días`;
        
        return date.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    } catch (e) {
        return 'Nunca';
    }
}

// Funciones para el modal de cerrar sesión
function abrirModalCerrarSesion() {
    const modal = document.getElementById('logout-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        document.getElementById('header-container').classList.add('modal-open');
    }
}

function cerrarModalCerrarSesion() {
    const modal = document.getElementById('logout-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        document.getElementById('header-container').classList.remove('modal-open');
    }
}

function confirmarCerrarSesion() {
    if (confirm('¿Está seguro de que desea cerrar sesión?')) {
        fetchFromAPI('/auth/logout', { method: 'POST' });
        window.location.href = '/login';
    }
}

// Inicialización - VERSIÓN ROBUSTA
document.addEventListener('DOMContentLoaded', async function() {
    // Configurar listeners para el modal de cerrar sesión
    const closeLogoutModal = document.getElementById('close-logout-modal');
    const cancelLogout = document.getElementById('cancel-logout');
    const confirmLogout = document.getElementById('confirm-logout');
    const logoutModal = document.getElementById('logout-modal');
    
    if (closeLogoutModal) {
        closeLogoutModal.addEventListener('click', cerrarModalCerrarSesion);
    }
    if (cancelLogout) {
        cancelLogout.addEventListener('click', cerrarModalCerrarSesion);
    }
    if (confirmLogout) {
        confirmLogout.addEventListener('click', confirmarCerrarSesion);
    }
    if (logoutModal) {
        logoutModal.addEventListener('click', function(e) {
            if (e.target === logoutModal) {
                cerrarModalCerrarSesion();
            }
        });
    }
    
    // Primero cargar configuración
    loadSettings();
    
    // Mostrar loading
    showLoading();
    
    try {
        // Intentar cargar datos desde API
        let practicesLoaded = false;
        let usersLoaded = false;
        
        // Intentar cargar prácticas
        try {
            practicesLoaded = await loadPracticesFromAPI();
        } catch (practiceError) {
            console.warn('No se pudieron cargar prácticas desde API:', practiceError);
            practicesLoaded = false;
        }
        
        // Intentar cargar usuarios
        try {
            usersLoaded = await loadUsersFromAPI();
        } catch (userError) {
            console.warn('No se pudieron cargar usuarios desde API:', userError);
            usersLoaded = false;
        }
        
        // Si ninguna API funcionó, usar datos locales
        if (!practicesLoaded && !usersLoaded) {
            console.log('Usando datos de ejemplo locales');
            practiceData = getDefaultPracticeData();
            usersData = getDefaultUsersData();
            reportsData = getDefaultReportsData();
            currentData = [...practiceData];
            currentReportsData = [...reportsData];
        }
        
        // Inicializar el resto de la aplicación
        initializeApplication();
        
    } catch (error) {
        console.error('Error crítico durante inicialización:', error);
        // En caso de error crítico, usar datos locales y continuar
        practiceData = getDefaultPracticeData();
        usersData = getDefaultUsersData();
        reportsData = getDefaultReportsData();
        currentData = [...practiceData];
        currentReportsData = [...reportsData];
        initializeApplication();
    } finally {
        // Ocultar loading
        hideLoading();
    }
});

// Función separada para inicializar la aplicación
function initializeApplication() {
    try {
        initializeDashboard();
        initializePracticesTable();
        initializeUsersTable();
        initializeReportsTable();
        setupEventListeners();
        updateResultsCount();
        updateReportsResultsCount();
        generateAgendaSchedule();
        
        setupHeaderFunctionality();
        setupUserModalListeners();
        setupModalListeners();
        setupSettingsListeners();
        
        showView('dashboard-view');
        
        loadRecentActivities();
        loadUpcomingPractices();
        
        console.log('Aplicación inicializada correctamente');
    } catch (error) {
        console.error('Error al inicializar componentes de la aplicación:', error);
        alert('Error al cargar la interfaz. Algunas funciones pueden no estar disponibles.');
    }
}

// Funciones de loading
function showLoading() {
    let loadingElement = document.getElementById('loading-overlay');
    if (!loadingElement) {
        loadingElement = document.createElement('div');
        loadingElement.id = 'loading-overlay';
        loadingElement.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        loadingElement.innerHTML = `
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                <div class="flex items-center space-x-3">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    <span class="text-gray-700 dark:text-gray-300">Cargando datos...</span>
                </div>
            </div>
        `;
        document.body.appendChild(loadingElement);
    } else {
        loadingElement.classList.remove('hidden');
    }
}

function hideLoading() {
    const loadingElement = document.getElementById('loading-overlay');
    if (loadingElement) {
        loadingElement.classList.add('hidden');
    }
}

// Cargar configuración guardada
function loadSettings() {
    try {
        const savedSettings = localStorage.getItem('appSettings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            appSettings.darkMode = settings.darkMode !== undefined ? settings.darkMode : true;
            appSettings.emailNotifications = settings.emailNotifications !== undefined ? settings.emailNotifications : true;
            appSettings.language = settings.language || 'es';
        }

        applySettings();
    } catch (error) {
        console.error('Error al cargar configuración:', error);
        applySettings();
    }
}

// Aplicar configuración a la interfaz
function applySettings() {
    // Modo oscuro
    if (appSettings.darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    try {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const emailNotificationsToggle = document.getElementById('email-notifications');
        const languageSelect = document.getElementById('language');
        
        if (darkModeToggle) darkModeToggle.checked = appSettings.darkMode;
        if (emailNotificationsToggle) emailNotificationsToggle.checked = appSettings.emailNotifications;
        if (languageSelect) languageSelect.value = appSettings.language;
        
        applyTranslations(appSettings.language);
    } catch (error) {
        console.error('Error al aplicar configuración:', error);
    }
}

// Aplicar traducciones
function applyTranslations(language) {
    try {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[language] && translations[language][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[language][key];
                } else if (element.textContent !== undefined) {
                    element.textContent = translations[language][key];
                }
            }
        });
    } catch (error) {
        console.error('Error al aplicar traducciones:', error);
    }
}

// Configurar listeners de configuración
function setupSettingsListeners() {
    try {
        // Modo oscuro
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('change', function() {
                appSettings.darkMode = this.checked;
            });
        }

        // Notificaciones por email
        const emailNotificationsToggle = document.getElementById('email-notifications');
        if (emailNotificationsToggle) {
            emailNotificationsToggle.addEventListener('change', function() {
                appSettings.emailNotifications = this.checked;
            });
        }

        // Idioma
        const languageSelect = document.getElementById('language');
        if (languageSelect) {
            languageSelect.addEventListener('change', function() {
                appSettings.language = this.value;
            });
        }

        // Guardar configuración
        const saveSettingsBtn = document.getElementById('save-settings');
        if (saveSettingsBtn) {
            saveSettingsBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                try {
                    applySettings();
                    saveSettings();
                    showSuccessMessage('Configuración guardada correctamente');
                    console.log('Configuración guardada:', appSettings);
                } catch (error) {
                    console.error('Error al guardar configuración:', error);
                    showSuccessMessage('Error al guardar configuración');
                }
            });
        }
    } catch (error) {
        console.error('Error al configurar listeners de settings:', error);
    }
}

// Guardar configuración
function saveSettings() {
    try {
        localStorage.setItem('appSettings', JSON.stringify(appSettings));
        console.log('Configuración guardada en localStorage:', appSettings);
    } catch (error) {
        console.error('Error al guardar configuración:', error);
    }
}

// Configurar funcionalidades del header
function setupHeaderFunctionality() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const userInitialsBtn = document.getElementById('user-initials-btn');

    // Menú hamburguesa
    if (hamburgerMenu && mobileMenu) {
        hamburgerMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
        
        document.addEventListener('click', function(event) {
            if (!hamburgerMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });
    }

    // Botón de iniciales del usuario
    if (userInitialsBtn) {
        userInitialsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("Inicial del usuario clickeada - función deshabilitada");
        });
    }
}

// Configurar listeners para modales de usuario
function setupUserModalListeners() {
    const addUserBtn = document.getElementById('add-user-btn');
    
    if (addUserBtn) {
        addUserBtn.addEventListener('click', function() {
            openNewUserModal();
        });
    }
}

// Abrir modal para nuevo usuario
function openNewUserModal() {
    document.getElementById('edit-user-form').reset();
    document.getElementById('edit-user-id').value = '';
    
    document.getElementById('edit-user-modal-title').textContent = 'Agregar Usuario';
    
    const editUserModal = document.getElementById('edit-user-modal');
    editUserModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
}

// Abrir modal para editar usuario
function openEditUserModal(userId) {
    const user = usersData.find(u => u.id === userId);
    if (!user) return;
    
    document.getElementById('edit-user-id').value = user.id;
    document.getElementById('edit-user-name').value = user.name;
    document.getElementById('edit-user-username').value = user.username;
    document.getElementById('edit-user-email').value = user.email;
    document.getElementById('edit-user-role').value = user.role;
    document.getElementById('edit-user-status').value = user.status;
    
    document.getElementById('edit-user-modal-title').textContent = 'Editar Usuario';
    
    const editUserModal = document.getElementById('edit-user-modal');
    editUserModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
}

// Abrir modal para eliminar usuario
function openDeleteUserModal(userId, userName) {
    document.getElementById('delete-user-id').value = userId;
    document.getElementById('delete-user-name').textContent = userName;
    document.getElementById('delete-user-details').textContent = `Usuario: ${userName}`;
    
    const deleteUserModal = document.getElementById('delete-user-modal');
    deleteUserModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
}

// Función para mostrar perfil
function mostrarPerfil() {
    alert('Perfil de usuario');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (hamburgerMenu) hamburgerMenu.classList.remove('active');
}

// Cerrar menú móvil
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (hamburgerMenu) hamburgerMenu.classList.remove('active');
}

// Inicializar dashboard
function initializeDashboard() {
    try {
        updateDashboardStats();
        loadRecentActivities();
        loadUpcomingPractices();
    } catch (error) {
        console.error('Error al inicializar dashboard:', error);
    }
}

// Actualizar estadísticas del dashboard
function updateDashboardStats() {
    try {
        // Actualizar total de prácticas
        const totalPracticesEl = document.getElementById('total-practices');
        if (totalPracticesEl) {
            totalPracticesEl.textContent = practiceData.length;
        }
        
        // Calcular prácticas del mes actual
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        const monthPractices = practiceData.filter(practice => {
            try {
                const practiceDate = new Date(practice.date);
                return practiceDate.getMonth() + 1 === currentMonth && practiceDate.getFullYear() === currentYear;
            } catch (e) {
                return false;
            }
        }).length;
        
        const monthPracticesEl = document.getElementById('month-practices');
        if (monthPracticesEl) {
            monthPracticesEl.textContent = monthPractices;
        }
        
        // Calcular número de profesores únicos
        const professors = [...new Set(practiceData.map(item => item.professor).filter(Boolean))];
        const totalProfessorsEl = document.getElementById('total-professors');
        if (totalProfessorsEl) {
            totalProfessorsEl.textContent = professors.length;
        }
        
        // Calcular número de asignaturas únicas
        const subjects = [...new Set(practiceData.map(item => item.subject).filter(Boolean))];
        const totalSubjectsEl = document.getElementById('total-subjects');
        if (totalSubjectsEl) {
            totalSubjectsEl.textContent = subjects.length;
        }
    } catch (error) {
        console.error('Error al actualizar estadísticas:', error);
    }
}

// Cargar Actividades Recientes
function loadRecentActivities() {
    const activitiesContainer = document.getElementById('recent-activities');
    if (!activitiesContainer) return;
    
    try {
        activitiesContainer.innerHTML = '';
        
        // Ordenar prácticas por fecha (más recientes primero)
        const sortedPractices = [...practiceData].sort((a, b) => {
            try {
                return new Date(b.date) - new Date(a.date);
            } catch (e) {
                return 0;
            }
        });
        
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
            try {
                const activityDiv = document.createElement('div');
                activityDiv.className = 'activity-item';
                activityDiv.setAttribute('data-practice-id', practice.id);
                
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
                let timeText = 'Reciente';
                try {
                    const practiceDate = new Date(practice.date);
                    if (!isNaN(practiceDate.getTime())) {
                        const now = new Date();
                        const diffTime = Math.abs(now - practiceDate);
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                        
                        if (diffDays === 1) {
                            timeText = 'Hoy';
                        } else if (diffDays === 2) {
                            timeText = 'Ayer';
                        } else if (diffDays <= 7) {
                            timeText = `Hace ${diffDays - 1} días`;
                        } else {
                            timeText = formatDate(practice.date);
                        }
                    }
                } catch (e) {
                    // Mantener texto por defecto
                }
                
                activityDiv.innerHTML = `
                    <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${activityIconBg}">
                        <i class="${activityIcon} text-sm"></i>
                    </div>
                    <div class="activity-content">
                        <p class="activity-title">${activityType}</p>
                        <p class="activity-detail">${practice.practice || 'Práctica'} - ${practice.professor || 'Sin profesor'}</p>
                        <p class="activity-time">${timeText}</p>
                    </div>
                `;
                
                activityDiv.addEventListener('click', function() {
                    try {
                        openEditModal(practice.id);
                    } catch (e) {
                        console.error('Error al abrir modal:', e);
                    }
                });
                
                activitiesContainer.appendChild(activityDiv);
            } catch (error) {
                console.error('Error al crear actividad:', error);
            }
        });
    } catch (error) {
        console.error('Error al cargar actividades recientes:', error);
        activitiesContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Error al cargar actividades</p>
            </div>
        `;
    }
}

// Cargar Próximas Prácticas
function loadUpcomingPractices() {
    const upcomingContainer = document.getElementById('upcoming-practices');
    if (!upcomingContainer) return;
    
    try {
        upcomingContainer.innerHTML = '';
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const upcomingPractices = practiceData.filter(practice => {
            try {
                const practiceDate = new Date(practice.date);
                practiceDate.setHours(0, 0, 0, 0);
                return practiceDate >= today;
            } catch (e) {
                return false;
            }
        }).sort((a, b) => {
            try {
                return new Date(a.date) - new Date(b.date);
            } catch (e) {
                return 0;
            }
        });
        
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
        
        const practiceStatusStyles = {
            'programada': { 
                bg: 'bg-blue-50 dark:bg-blue-900/20',
                tagBg: 'status-programada',
                border: 'border-l-blue-500'
            },
            'confirmada': { 
                bg: 'bg-green-50 dark:bg-green-900/20',
                tagBg: 'status-confirmada',
                border: 'border-l-green-500'
            },
            'en-curso': { 
                bg: 'bg-yellow-50 dark:bg-yellow-900/20',
                tagBg: 'status-en-curso',
                border: 'border-l-yellow-500'
            },
            'completada': { 
                bg: 'bg-gray-50 dark:bg-gray-900/20',
                tagBg: 'status-completada',
                border: 'border-l-gray-500'
            },
            'cancelada': { 
                bg: 'bg-red-50 dark:bg-red-900/20',
                tagBg: 'status-cancelada',
                border: 'border-l-red-500'
            }
        };
        
        const statusTexts = {
            'programada': 'Programada',
            'confirmada': 'Confirmada',
            'en-curso': 'En Curso',
            'completada': 'Completada',
            'cancelada': 'Cancelada'
        };
        
        nextPractices.forEach(practice => {
            try {
                const styles = practiceStatusStyles[practice.status] || practiceStatusStyles['programada'];
                const statusText = statusTexts[practice.status] || practice.status || 'Programada';
                
                const practiceDiv = document.createElement('div');
                practiceDiv.className = `upcoming-practice-item ${styles.bg}`;
                practiceDiv.setAttribute('data-practice-id', practice.id);
                
                // Formatear fecha
                let dateText = 'Fecha no disponible';
                try {
                    const practiceDate = new Date(practice.date);
                    if (!isNaN(practiceDate.getTime())) {
                        dateText = practiceDate.toLocaleDateString('es-ES', { 
                            day: 'numeric', 
                            month: 'short',
                            year: 'numeric'
                        });
                    }
                } catch (e) {
                    // Mantener texto por defecto
                }
                
                const timeText = practice.time ? ` • ${practice.time}` : '';
                
                practiceDiv.innerHTML = `
                    <div class="upcoming-practice-info">
                        <div class="upcoming-practice-name">${practice.practice || 'Práctica sin nombre'}</div>
                        <div class="upcoming-practice-meta">${practice.professor || 'Sin profesor'} - ${dateText}${timeText}</div>
                    </div>
                    <span class="upcoming-practice-status ${styles.tagBg}">${statusText}</span>
                `;
                
                practiceDiv.addEventListener('click', function() {
                    try {
                        openEditModal(practice.id);
                        
                        const allItems = document.querySelectorAll('.upcoming-practice-item');
                        allItems.forEach(item => item.classList.remove('ring-2', 'ring-primary'));
                        
                        practiceDiv.classList.add('ring-2', 'ring-primary');
                    } catch (e) {
                        console.error('Error al manejar clic en práctica:', e);
                    }
                });
                
                upcomingContainer.appendChild(practiceDiv);
            } catch (error) {
                console.error('Error al crear práctica:', error);
            }
        });
    } catch (error) {
        console.error('Error al cargar prácticas próximas:', error);
        upcomingContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Error al cargar prácticas</p>
            </div>
        `;
    }
}

// Inicializar ocupación de horarios
function initializeScheduleOccupancy() {
    scheduleOccupancy = {};
    
    practiceData.forEach(practice => {
        if (practice.date && practice.time) {
            const day = getDayFromDate(practice.date);
            if (day) {
                if (!scheduleOccupancy[day]) {
                    scheduleOccupancy[day] = {};
                }
                scheduleOccupancy[day][practice.time] = {
                    practice: practice.practice,
                    professor: practice.professor,
                    id: practice.id
                };
            }
        }
    });
}

// Generar tabla de agenda
function generateAgendaSchedule() {
    const scheduleBody = document.getElementById('schedule-body-agenda');
    if (!scheduleBody) {
        console.error('No se encontró el elemento schedule-body-agenda');
        return;
    }
    
    scheduleBody.innerHTML = '';
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    const hours = ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
    
    initializeScheduleOccupancy();
    
    hours.forEach(hour => {
        const row = document.createElement('tr');
        
        const timeCell = document.createElement('td');
        timeCell.className = 'p-2 border border-gray-300 dark:border-gray-600 text-center text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
        timeCell.textContent = `${hour} - ${parseInt(hour.split(':')[0]) + 1}:00`;
        row.appendChild(timeCell);
        
        days.forEach(day => {
            const dayCell = document.createElement('td');
            dayCell.className = 'p-1 border border-gray-300 dark:border-gray-600';
            
            const slotDiv = document.createElement('div');
            slotDiv.className = 'time-slot';
            slotDiv.dataset.day = day;
            slotDiv.dataset.hour = hour;
            
            const isOccupied = scheduleOccupancy[day] && scheduleOccupancy[day][hour];
            if (isOccupied) {
                slotDiv.classList.add('occupied');
                slotDiv.innerHTML = '<i class="fas fa-ban"></i>';
                slotDiv.title = `${isOccupied.practice} - ${isOccupied.professor}`;
                slotDiv.style.cursor = 'not-allowed';
            } else {
                slotDiv.classList.add('available');
                slotDiv.innerHTML = '<i class="fas fa-check"></i>';
                slotDiv.title = 'Disponible';
                slotDiv.style.cursor = 'pointer';
            }
            
            slotDiv.addEventListener('click', function() {
                if (this.classList.contains('available')) {
                    selectTimeSlot(this);
                } else {
                    showPracticeInfo(this);
                }
            });
            
            dayCell.appendChild(slotDiv);
            row.appendChild(dayCell);
        });
        
        scheduleBody.appendChild(row);
    });
}

// Función para mostrar información de práctica existente
function showPracticeInfo(slotElement) {
    const day = slotElement.dataset.day;
    const hour = slotElement.dataset.hour;
    showPracticeDetails(day, hour);
}

// Función para mostrar detalles de práctica en modal
function showPracticeDetails(day, hour) {
    const practiceInfo = scheduleOccupancy[day] && scheduleOccupancy[day][hour];
    
    if (practiceInfo) {
        const practice = practiceData.find(p => p.id === practiceInfo.id);
        if (practice) {
            const detailModal = document.createElement('div');
            detailModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 fade-in';
            detailModal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-4 slide-in">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-bold text-gray-800 dark:text-white">Información de Práctica</h3>
                            <button class="close-detail-modal text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                                <i class="fas fa-times text-xl"></i>
                            </button>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Práctica:</label>
                                <p class="mt-1 text-sm text-gray-900 dark:text-white">${practice.practice}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Profesor:</label>
                                <p class="mt-1 text-sm text-gray-900 dark:text-white">${practice.professor}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Asignatura:</label>
                                <p class="mt-1 text-sm text-gray-900 dark:text-white">${practice.subject}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Estado:</label>
                                <span class="mt-1 inline-flex px-2 text-xs font-semibold rounded-full 
                                    ${getStatusColor(practice.status)}">
                                    ${getStatusText(practice.status)}
                                </span>
                            </div>
                            ${practice.objective ? `
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Objetivo:</label>
                                <p class="mt-1 text-sm text-gray-900 dark:text-white">${practice.objective}</p>
                            </div>
                            ` : ''}
                            ${practice.lab ? `
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Laboratorio/Aula:</label>
                                <p class="mt-1 text-sm text-gray-900 dark:text-white">${practice.lab}</p>
                            </div>
                            ` : ''}
                        </div>
                        <div class="mt-6 flex justify-end">
                            <button class="close-detail-modal px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-700 transition-colors">
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(detailModal);
            
            const closeButtons = detailModal.querySelectorAll('.close-detail-modal');
            closeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    document.body.removeChild(detailModal);
                });
            });
            
            detailModal.addEventListener('click', function(e) {
                if (e.target === detailModal) {
                    document.body.removeChild(detailModal);
                }
            });
        }
    }
}

// FUNCIONES AUXILIARES para estilos de estado
function getStatusColor(status) {
    switch(status) {
        case 'programada': return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200';
        case 'confirmada': return 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200';
        case 'en-curso': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200';
        case 'completada': return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
        case 'cancelada': return 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-200';
        default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
}

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

// Seleccionar slot de tiempo para nueva práctica
function selectTimeSlot(slot) {
    const day = slot.dataset.day;
    const hour = slot.dataset.hour;
    
    if (scheduleOccupancy[day] && scheduleOccupancy[day][hour]) {
        alert('Este horario ya está ocupado. Por favor seleccione otro.');
        return;
    }
    
    window.selectedTimeSlot = {
        day: day,
        hour: hour,
        element: slot
    };
    
    openNewPracticeModal(day, hour);
}

// Abrir modal para nueva práctica
function openNewPracticeModal(day = null, hour = null) {
    document.getElementById('edit-practice-form').reset();
    document.getElementById('edit-practice-id').value = '';
    
    document.getElementById('edit-modal-title').textContent = 'Nueva Práctica';
    
    const editModal = document.getElementById('edit-modal');
    editModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
    
    if (day && hour) {
        prefillPracticeForm(day, hour);
    }
}

// Prellenar formulario con fecha y hora seleccionadas
function prefillPracticeForm(day, hour) {
    setTimeout(() => {
        const timeSelect = document.getElementById('edit-practice-time');
        if (timeSelect) {
            timeSelect.value = hour;
        }
        
        const targetDate = calculateDateFromDay(day);
        const dateInput = document.getElementById('edit-practice-date');
        if (dateInput) {
            dateInput.value = targetDate;
        }
        
        console.log('Formulario prellenado:', {
            día: day,
            hora: hour,
            fecha: targetDate
        });
    }, 100);
}

// Calcular fecha a partir del día de la semana
function calculateDateFromDay(day) {
    const today = new Date();
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const targetDayIndex = daysOfWeek.indexOf(day);
    
    if (targetDayIndex === -1) return '';
    
    const currentDayIndex = today.getDay();
    let daysToAdd = targetDayIndex - currentDayIndex;
    
    if (daysToAdd < 0) {
        daysToAdd += 7;
    }
    
    if (daysToAdd === 0) {
        const currentHour = today.getHours();
        const selectedHour = parseInt(hour.split(':')[0]);
        if (currentHour >= selectedHour) {
            daysToAdd = 7;
        }
    }
    
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + daysToAdd);
    
    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const dayOfMonth = String(targetDate.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${dayOfMonth}`;
}

// Función auxiliar para debug
function debugSchedule() {
    console.log('=== DEBUG AGENDA ===');
    console.log('Prácticas totales:', practiceData.length);
    console.log('Prácticas con fecha y hora:');
    practiceData.forEach(p => {
        if (p.date && p.time) {
            const day = getDayFromDate(p.date);
            console.log(`- ${p.practice}: ${p.date} (${day}) ${p.time}`);
        }
    });
    console.log('Horarios ocupados:', scheduleOccupancy);
    alert('Información de debug mostrada en consola');
}

// Obtener día de la semana a partir de una fecha
function getDayFromDate(dateString) {
    try {
        const date = new Date(dateString);
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const dayName = days[date.getDay()];
        
        console.log(`Convirtiendo fecha: ${dateString} -> ${dayName}`);
        
        return ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].includes(dayName) ? dayName : null;
    } catch (error) {
        console.error('Error al convertir fecha:', dateString, error);
        return null;
    }
}

// Actualizar agenda después de guardar
function updateAgendaAfterSave(practice) {
    if (practice.date && practice.time) {
        const day = getDayFromDate(practice.date);
        if (day) {
            if (!scheduleOccupancy[day]) {
                scheduleOccupancy[day] = {};
            }
            scheduleOccupancy[day][practice.time] = {
                practice: practice.practice,
                professor: practice.professor,
                id: practice.id
            };
            
            console.log(`Agenda actualizada: ${day} ${practice.time} - ${practice.practice}`);
            
            generateAgendaSchedule();
            loadRecentActivities();
            loadUpcomingPractices();
        }
    }
}

// Actualizar agenda después de eliminar
function updateAgendaAfterDelete(practiceId) {
    const deletedPractice = practiceData.find(p => p.id === practiceId);
    if (deletedPractice && deletedPractice.date && deletedPractice.time) {
        const day = getDayFromDate(deletedPractice.date);
        if (day && scheduleOccupancy[day] && scheduleOccupancy[day][deletedPractice.time]) {
            delete scheduleOccupancy[day][deletedPractice.time];
            console.log(`Horario liberado: ${day} ${deletedPractice.time}`);
            
            generateAgendaSchedule();
            loadRecentActivities();
            loadUpcomingPractices();
        }
    }
}

// Configurar event listeners
function setupEventListeners() {
    try {
        // Navegación del sidebar
        document.getElementById('dashboard-link').addEventListener('click', function(e) {
            e.preventDefault();
            showView('dashboard-view');
            updateActiveLink(this);
            closeMobileMenu();
        });
        
        document.getElementById('practices-link').addEventListener('click', function(e) {
            e.preventDefault();
            showView('practices-view');
            updateActiveLink(this);
            closeMobileMenu();
        });
        
        document.getElementById('agenda-link').addEventListener('click', function(e) {
            e.preventDefault();
            showView('agenda-view');
            updateActiveLink(this);
            closeMobileMenu();
            setTimeout(() => {
                generateAgendaSchedule();
            }, 100);
        });
        
        document.getElementById('users-link').addEventListener('click', function(e) {
            e.preventDefault();
            showView('users-view');
            updateActiveLink(this);
            closeMobileMenu();
        });
        
        document.getElementById('reports-link').addEventListener('click', function(e) {
            e.preventDefault();
            showView('reports-view');
            updateActiveLink(this);
            closeMobileMenu();
        });
        
        document.getElementById('settings-link').addEventListener('click', function(e) {
            e.preventDefault();
            showView('settings-view');
            updateActiveLink(this);
            closeMobileMenu();
        });
        
        document.getElementById('logout-link').addEventListener('click', function(e) {
            e.preventDefault();
            abrirModalCerrarSesion();
            closeMobileMenu();
        });
        
        // Navegación móvil
        document.getElementById('mobile-dashboard-link').addEventListener('click', function(e) {
            e.preventDefault();
            showView('dashboard-view');
            updateActiveMobileLink(this);
            closeMobileMenu();
        });
        
        document.getElementById('mobile-practices-link').addEventListener('click', function(e) {
            e.preventDefault();
            showView('practices-view');
            updateActiveMobileLink(this);
            closeMobileMenu();
        });
        
        document.getElementById('mobile-agenda-link').addEventListener('click', function(e) {
            e.preventDefault();
            showView('agenda-view');
            updateActiveMobileLink(this);
            closeMobileMenu();
            setTimeout(() => {
                generateAgendaSchedule();
            }, 100);
        });
        
        document.getElementById('mobile-users-link').addEventListener('click', function(e) {
            e.preventDefault();
            showView('users-view');
            updateActiveMobileLink(this);
            closeMobileMenu();
        });
        
        document.getElementById('mobile-reports-link').addEventListener('click', function(e) {
            e.preventDefault();
            showView('reports-view');
            updateActiveMobileLink(this);
            closeMobileMenu();
        });
        
        document.getElementById('mobile-settings-link').addEventListener('click', function(e) {
            e.preventDefault();
            showView('settings-view');
            updateActiveMobileLink(this);
            closeMobileMenu();
        });
        
        document.getElementById('mobile-logout-link').addEventListener('click', function(e) {
            e.preventDefault();
            abrirModalCerrarSesion();
            closeMobileMenu();
        });
        
        // Botones de prácticas
        document.getElementById('add-practice-btn').addEventListener('click', function() {
            openNewPracticeModal();
        });
        
        document.getElementById('add-practice-agenda-btn').addEventListener('click', function() {
            openNewPracticeModal();
        });
        
        // Filtros de prácticas
        document.getElementById('search').addEventListener('input', function(e) {
            currentFilters.search = e.target.value.toLowerCase();
            filterPracticesData();
        });
        
        document.getElementById('professor-filter').addEventListener('change', function(e) {
            currentFilters.professor = e.target.value;
            filterPracticesData();
        });
        
        document.getElementById('status-filter').addEventListener('change', function(e) {
            currentFilters.status = e.target.value;
            filterPracticesData();
        });
        
        // Botón de restablecer filtros
        document.getElementById('reset-filters').addEventListener('click', function() {
            resetFilters();
        });
        
        // Botón de exportar PDF
        document.getElementById('export-pdf-btn').addEventListener('click', function() {
            showSuccessMessage('Función no disponible');
        });
        
        // Botón de exportar reportes
        document.getElementById('export-reports-btn').addEventListener('click', function() {
            showSuccessMessage('Función no disponible');
        });
        
        // Ordenamiento de columnas
        document.querySelectorAll('.sortable').forEach(header => {
            header.addEventListener('click', function() {
                const column = this.getAttribute('data-column');
                sortPracticesTable(column);
            });
        });
        
        // Filtros de reportes
        document.getElementById('reports-search').addEventListener('input', function(e) {
            currentReportsFilters.search = e.target.value.toLowerCase();
            filterReportsData();
        });
        
        document.getElementById('reports-professor-filter').addEventListener('change', function(e) {
            currentReportsFilters.professor = e.target.value;
            filterReportsData();
        });
        
        document.getElementById('reports-status-filter').addEventListener('change', function(e) {
            currentReportsFilters.status = e.target.value;
            filterReportsData();
        });
        
    } catch (error) {
        console.error('Error al configurar event listeners:', error);
    }
}

// Abrir menú móvil
function openMobileMenu() {
    document.getElementById('mobile-sidebar').classList.remove('mobile-menu-closed');
    document.getElementById('mobile-sidebar').classList.add('mobile-menu-open');
}

// Configurar listeners para modales
function setupModalListeners() {
    const editModal = document.getElementById('edit-modal');
    const closeEditModal = document.getElementById('close-edit-modal');
    const cancelEdit = document.getElementById('cancel-edit');
    const editPracticeForm = document.getElementById('edit-practice-form');
    
    const deleteModal = document.getElementById('delete-modal');
    const closeDeleteModal = document.getElementById('close-delete-modal');
    const cancelDelete = document.getElementById('cancel-delete');
    const confirmDelete = document.getElementById('confirm-delete');
    
    const editUserModal = document.getElementById('edit-user-modal');
    const closeEditUserModal = document.getElementById('close-edit-user-modal');
    const cancelEditUser = document.getElementById('cancel-edit-user');
    const editUserForm = document.getElementById('edit-user-form');
    
    const deleteUserModal = document.getElementById('delete-user-modal');
    const closeDeleteUserModal = document.getElementById('close-delete-user-modal');
    const cancelDeleteUser = document.getElementById('cancel-delete-user');
    const confirmDeleteUser = document.getElementById('confirm-delete-user');
    
    // Cerrar modal de edición de práctica
    function closeEditModalFunc() {
        editModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        document.getElementById('header-container').classList.remove('modal-open');
    }

    if (closeEditModal) {
        closeEditModal.addEventListener('click', closeEditModalFunc);
    }
    if (cancelEdit) {
        cancelEdit.addEventListener('click', closeEditModalFunc);
    }

    if (editModal) {
        editModal.addEventListener('click', function(e) {
            if (e.target === editModal) {
                closeEditModalFunc();
            }
        });
    }

    // Envío del formulario de edición - MODIFICADO para trabajar con API
    if (editPracticeForm) {
        editPracticeForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const practiceId = parseInt(document.getElementById('edit-practice-id').value);
            const practiceDate = document.getElementById('edit-practice-date').value;
            const practiceTime = document.getElementById('edit-practice-time').value;
            const practiceName = document.getElementById('edit-practice-name').value;
            const practiceProfessor = document.getElementById('edit-practice-professor').value;
            const practiceSubject = document.getElementById('edit-practice-subject').value;
            const practiceObjective = document.getElementById('edit-practice-objective').value;
            const practiceLab = document.getElementById('edit-practice-lab').value;
            const practiceStatus = document.getElementById('edit-practice-status').value;
            
            try {
                let isNewPractice = false;
                let newPractice = null;
                
                if (practiceId) {
                    // Actualizar práctica existente en los datos
                    const practiceIndex = practiceData.findIndex(p => p.id === practiceId);
                    if (practiceIndex !== -1) {
                        const oldPractice = practiceData.find(p => p.id === practiceId);
                        if (oldPractice && (oldPractice.date !== practiceDate || oldPractice.time !== practiceTime)) {
                            updateAgendaAfterDelete(practiceId);
                        }
                        
                        practiceData[practiceIndex] = {
                            ...practiceData[practiceIndex],
                            date: practiceDate,
                            time: practiceTime,
                            practice: practiceName,
                            professor: practiceProfessor,
                            subject: practiceSubject,
                            objective: practiceObjective,
                            lab: practiceLab,
                            status: practiceStatus
                        };
                        
                        const reportIndex = reportsData.findIndex(r => r.id === practiceId);
                        if (reportIndex !== -1) {
                            reportsData[reportIndex] = {
                                ...reportsData[reportIndex],
                                date: practiceDate,
                                practice: practiceName,
                                professor: practiceProfessor,
                                subject: practiceSubject,
                                objective: practiceObjective
                            };
                        }
                        
                        showSuccessMessage('Práctica actualizada correctamente');
                    }
                } else {
                    // Crear nueva práctica
                    const newId = practiceData.length > 0 ? Math.max(...practiceData.map(p => p.id)) + 1 : 1;
                    newPractice = {
                        id: newId,
                        date: practiceDate,
                        time: practiceTime,
                        practice: practiceName,
                        professor: practiceProfessor,
                        subject: practiceSubject,
                        objective: practiceObjective,
                        lab: practiceLab,
                        status: practiceStatus
                    };
                    
                    practiceData.push(newPractice);
                    isNewPractice = true;
                    
                    reportsData.push({
                        id: newId,
                        date: practiceDate,
                        practice: practiceName,
                        objective: practiceObjective,
                        professor: practiceProfessor,
                        subject: practiceSubject
                    });
                    
                    showSuccessMessage('Práctica creada correctamente');
                }
                
                updateDashboardStats();
                loadRecentActivities();
                loadUpcomingPractices();
                
                currentData = [...practiceData];
                currentReportsData = [...reportsData];
                
                initializePracticesTable();
                initializeReportsTable();
                
                updateAgendaAfterSave(practiceId ? practiceData.find(p => p.id === practiceId) : newPractice);
                
                closeEditModalFunc();
                
            } catch (error) {
                console.error('Error al guardar práctica:', error);
                showSuccessMessage('Error al guardar.');
            }
        });
    }
    
    // Cerrar modal de eliminación de práctica
    function closeDeleteModalFunc() {
        deleteModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        document.getElementById('header-container').classList.remove('modal-open');
    }

    if (closeDeleteModal) {
        closeDeleteModal.addEventListener('click', closeDeleteModalFunc);
    }
    if (cancelDelete) {
        cancelDelete.addEventListener('click', closeDeleteModalFunc);
    }

    if (deleteModal) {
        deleteModal.addEventListener('click', function(e) {
            if (e.target === deleteModal) {
                closeDeleteModalFunc();
            }
        });
    }

    // Confirmar eliminación de práctica
    if (confirmDelete) {
        confirmDelete.addEventListener('click', function() {
            const practiceId = parseInt(document.getElementById('delete-practice-id').value);
            
            updateAgendaAfterDelete(practiceId);
            
            const practiceIndex = practiceData.findIndex(p => p.id === practiceId);
            if (practiceIndex !== -1) {
                practiceData.splice(practiceIndex, 1);
                
                const reportIndex = reportsData.findIndex(r => r.id === practiceId);
                if (reportIndex !== -1) {
                    reportsData.splice(reportIndex, 1);
                }
                
                updateDashboardStats();
                loadRecentActivities();
                loadUpcomingPractices();
                
                currentData = [...practiceData];
                currentReportsData = [...reportsData];
                initializePracticesTable();
                initializeReportsTable();
                
                showSuccessMessage('Práctica eliminada correctamente');
            }
            
            closeDeleteModalFunc();
        });
    }
    
    // Cerrar modal de edición de usuario
    function closeEditUserModalFunc() {
        editUserModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        document.getElementById('header-container').classList.remove('modal-open');
    }

    if (closeEditUserModal) {
        closeEditUserModal.addEventListener('click', closeEditUserModalFunc);
    }
    if (cancelEditUser) {
        cancelEditUser.addEventListener('click', closeEditUserModalFunc);
    }

    if (editUserModal) {
        editUserModal.addEventListener('click', function(e) {
            if (e.target === editUserModal) {
                closeEditUserModalFunc();
            }
        });
    }

    // Envío del formulario de edición de usuario
    if (editUserForm) {
        editUserForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const userId = parseInt(document.getElementById('edit-user-id').value);
            const userName = document.getElementById('edit-user-name').value;
            const userUsername = document.getElementById('edit-user-username').value;
            const userEmail = document.getElementById('edit-user-email').value;
            const userRole = document.getElementById('edit-user-role').value;
            const userStatus = document.getElementById('edit-user-status').value;
            
            if (userId) {
                const userIndex = usersData.findIndex(u => u.id === userId);
                if (userIndex !== -1) {
                    usersData[userIndex] = {
                        ...usersData[userIndex],
                        name: userName,
                        username: userUsername,
                        email: userEmail,
                        role: userRole,
                        status: userStatus
                    };
                    
                    showSuccessMessage('Usuario actualizado correctamente');
                }
            } else {
                const newId = usersData.length > 0 ? Math.max(...usersData.map(u => u.id)) + 1 : 1;
                const newUser = {
                    id: newId,
                    name: userName,
                    username: userUsername,
                    email: userEmail,
                    role: userRole,
                    status: userStatus,
                    lastAccess: 'Nunca'
                };
                
                usersData.push(newUser);
                showSuccessMessage('Usuario creado correctamente');
            }
            
            initializeUsersTable();
            closeEditUserModalFunc();
        });
    }
    
    // Cerrar modal de eliminación de usuario
    function closeDeleteUserModalFunc() {
        deleteUserModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        document.getElementById('header-container').classList.remove('modal-open');
    }

    if (closeDeleteUserModal) {
        closeDeleteUserModal.addEventListener('click', closeDeleteUserModalFunc);
    }
    if (cancelDeleteUser) {
        cancelDeleteUser.addEventListener('click', closeDeleteUserModalFunc);
    }

    if (deleteUserModal) {
        deleteUserModal.addEventListener('click', function(e) {
            if (e.target === deleteUserModal) {
                closeDeleteUserModalFunc();
            }
        });
    }

    // Confirmar eliminación de usuario
    if (confirmDeleteUser) {
        confirmDeleteUser.addEventListener('click', function() {
            const userId = parseInt(document.getElementById('delete-user-id').value);
            
            const userIndex = usersData.findIndex(u => u.id === userId);
            if (userIndex !== -1) {
                usersData.splice(userIndex, 1);
                
                initializeUsersTable();
                showSuccessMessage('Usuario eliminado correctamente');
            }
            
            closeDeleteUserModalFunc();
        });
    }
}

// Mostrar mensaje de éxito
function showSuccessMessage(message) {
    const successMessage = document.getElementById('success-message');
    const successText = document.getElementById('success-text');
    
    if (successMessage && successText) {
        successText.textContent = message;
        successMessage.classList.remove('hidden');
        
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 3000);
    }
}

// Mostrar vista específica
function showView(viewId) {
    try {
        const views = ['dashboard-view', 'practices-view', 'agenda-view', 'users-view', 'reports-view', 'settings-view'];
        
        views.forEach(view => {
            const element = document.getElementById(view);
            if (element) {
                element.classList.add('hidden');
            }
        });
        
        const targetView = document.getElementById(viewId);
        if (targetView) {
            targetView.classList.remove('hidden');
        }
    } catch (error) {
        console.error(`Error al mostrar vista ${viewId}:`, error);
    }
}

// Actualizar enlace activo en el sidebar
function updateActiveLink(activeLink) {
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.classList.remove('bg-primary', 'text-white');
        link.classList.add('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-700');
    });
    
    activeLink.classList.remove('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-700');
    activeLink.classList.add('bg-primary', 'text-white');
}

// Actualizar enlace activo en el menú móvil
function updateActiveMobileLink(activeLink) {
    document.querySelectorAll('#mobile-sidebar a').forEach(link => {
        link.classList.remove('bg-primary', 'text-white');
        link.classList.add('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-700');
    });
    
    activeLink.classList.remove('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-700');
    activeLink.classList.add('bg-primary', 'text-white');
}

// Inicializar tabla de prácticas
function initializePracticesTable() {
    const tableBody = document.getElementById('table-body');
    if (!tableBody) {
        console.error('No se encontró table-body');
        return;
    }
    
    tableBody.innerHTML = '';
    
    console.log('Renderizando tabla con', currentData.length, 'prácticas');
    
    currentData.forEach((item) => {
        const row = document.createElement('tr');
        row.className = 'bg-white dark:bg-background-dark';
        
        let statusColor = '';
        let statusText = '';
        switch(item.status) {
            case 'programada':
                statusColor = 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200';
                statusText = 'Programada';
                break;
            case 'confirmada':
                statusColor = 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200';
                statusText = 'Confirmada';
                break;
            case 'en-curso':
                statusColor = 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200';
                statusText = 'En curso';
                break;
            case 'completada':
                statusColor = 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
                statusText = 'Completada';
                break;
            case 'cancelada':
                statusColor = 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-200';
                statusText = 'Cancelada';
                break;
            default:
                statusColor = 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
                statusText = item.status;
        }
        
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${formatDate(item.date)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${item.practice}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${item.professor}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${item.subject}</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}">
                    ${statusText}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="edit-practice-btn text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-3"
                        data-id="${item.id}">
                    Editar
                </button>
                <button class="delete-practice-btn text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
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
    
    document.querySelectorAll('.edit-practice-btn').forEach(button => {
        button.addEventListener('click', function() {
            const practiceId = parseInt(this.getAttribute('data-id'));
            openEditModal(practiceId);
        });
    });
    
    document.querySelectorAll('.delete-practice-btn').forEach(button => {
        button.addEventListener('click', function() {
            const practiceId = parseInt(this.getAttribute('data-id'));
            const practiceName = this.getAttribute('data-practice');
            const practiceProfessor = this.getAttribute('data-professor');
            const practiceDate = this.getAttribute('data-date');
            openDeleteModal(practiceId, practiceName, practiceProfessor, practiceDate);
        });
    });
    
    updateResultsCount();
    updateFilters();
    
    console.log('Tabla de prácticas actualizada correctamente');
}

// Inicializar tabla de usuarios
function initializeUsersTable() {
    const tableBody = document.getElementById('users-table-body');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    usersData.forEach((item) => {
        const row = document.createElement('tr');
        row.className = 'bg-white dark:bg-background-dark';
        
        let statusColor = '';
        let statusText = '';
        switch(item.status) {
            case 'Activo':
                statusColor = 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200';
                statusText = 'Activo';
                break;
            case 'Inactivo':
                statusColor = 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-200';
                statusText = 'Inactivo';
                break;
        }
        
        let roleColor = '';
        let roleText = '';
        switch(item.role) {
            case 'Administrador':
                roleColor = 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200';
                roleText = 'Administrador';
                break;
            case 'Profesor':
                roleColor = 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200';
                roleText = 'Profesor';
                break;
            case 'Estudiante':
                roleColor = 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200';
                roleText = 'Estudiante';
                break;
        }
        
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <div class="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                            ${item.name.charAt(0)}
                        </div>
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900 dark:text-white">
                            ${item.name}
                        </div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">
                            ${item.username}
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${roleColor}">
                    ${roleText}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                ${item.email}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}">
                    ${statusText}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                ${item.lastAccess}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="edit-user-btn text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-3"
                        data-id="${item.id}">
                    Editar
                </button>
                <button class="delete-user-btn text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                        data-id="${item.id}"
                        data-name="${item.name}">
                    Eliminar
                </button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    document.querySelectorAll('.edit-user-btn').forEach(button => {
        button.addEventListener('click', function() {
            const userId = parseInt(this.getAttribute('data-id'));
            openEditUserModal(userId);
        });
    });
    
    document.querySelectorAll('.delete-user-btn').forEach(button => {
        button.addEventListener('click', function() {
            const userId = parseInt(this.getAttribute('data-id'));
            const userName = this.getAttribute('data-name');
            openDeleteUserModal(userId, userName);
        });
    });
}

// Inicializar tabla de reportes
function initializeReportsTable() {
    const tableBody = document.getElementById('reports-table-body');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    currentReportsData.forEach((item) => {
        const row = document.createElement('tr');
        row.className = 'bg-white dark:bg-background-dark';
        
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${formatDate(item.date)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${item.practice}</td>
            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">${item.objective}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${item.professor}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${item.subject}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="edit-report-btn text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-3"
                        data-id="${item.id}">
                    Editar
                </button>
                <button class="delete-report-btn text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
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
    
    document.querySelectorAll('.edit-report-btn').forEach(button => {
        button.addEventListener('click', function() {
            const reportId = parseInt(this.getAttribute('data-id'));
            openEditReportModal(reportId);
        });
    });
    
    document.querySelectorAll('.delete-report-btn').forEach(button => {
        button.addEventListener('click', function() {
            const reportId = parseInt(this.getAttribute('data-id'));
            const reportName = this.getAttribute('data-practice');
            const reportProfessor = this.getAttribute('data-professor');
            const reportDate = this.getAttribute('data-date');
            openDeleteReportModal(reportId, reportName, reportProfessor, reportDate);
        });
    });
}

// Abrir modal de edición para reportes
function openEditReportModal(reportId) {
    const report = reportsData.find(p => p.id === reportId);
    if (!report) return;
    
    document.getElementById('edit-practice-id').value = report.id;
    document.getElementById('edit-practice-date').value = report.date;
    document.getElementById('edit-practice-name').value = report.practice;
    document.getElementById('edit-practice-professor').value = report.professor;
    document.getElementById('edit-practice-subject').value = report.subject;
    document.getElementById('edit-practice-objective').value = report.objective || '';
    document.getElementById('edit-practice-lab').value = report.lab || '';
    document.getElementById('edit-practice-status').value = report.status || 'programada';
    
    const editModal = document.getElementById('edit-modal');
    editModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
}

// Abrir modal de eliminación para reportes
function openDeleteReportModal(reportId, reportName, reportProfessor, reportDate) {
    document.getElementById('delete-practice-id').value = reportId;
    document.getElementById('delete-practice-name').textContent = reportName;
    document.getElementById('delete-practice-details').textContent = `${reportProfessor} - ${reportDate}`;
    
    const deleteModal = document.getElementById('delete-modal');
    deleteModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
}

// Abrir modal de edición
function openEditModal(practiceId) {
    const practice = practiceData.find(p => p.id === practiceId);
    if (!practice) return;
    
    document.getElementById('edit-practice-id').value = practice.id;
    document.getElementById('edit-practice-date').value = practice.date;
    document.getElementById('edit-practice-time').value = practice.time || '';
    document.getElementById('edit-practice-name').value = practice.practice;
    document.getElementById('edit-practice-professor').value = practice.professor;
    document.getElementById('edit-practice-subject').value = practice.subject;
    document.getElementById('edit-practice-objective').value = practice.objective || '';
    document.getElementById('edit-practice-lab').value = practice.lab || '';
    document.getElementById('edit-practice-status').value = practice.status;
    
    document.getElementById('edit-modal-title').textContent = 'Editar Práctica';
    
    const editModal = document.getElementById('edit-modal');
    editModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
}

// Abrir modal de eliminación
function openDeleteModal(practiceId, practiceName, practiceProfessor, practiceDate) {
    document.getElementById('delete-practice-id').value = practiceId;
    document.getElementById('delete-practice-name').textContent = practiceName;
    document.getElementById('delete-practice-details').textContent = `${practiceProfessor} - ${practiceDate}`;
    
    const deleteModal = document.getElementById('delete-modal');
    deleteModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
}

// Filtrar datos de prácticas
function filterPracticesData() {
    let filteredData = [...practiceData];
    
    if (currentFilters.search) {
        filteredData = filteredData.filter(item => 
            item.practice.toLowerCase().includes(currentFilters.search) ||
            item.professor.toLowerCase().includes(currentFilters.search) ||
            item.subject.toLowerCase().includes(currentFilters.search)
        );
    }
    
    if (currentFilters.professor) {
        filteredData = filteredData.filter(item => item.professor === currentFilters.professor);
    }
    
    if (currentFilters.status) {
        filteredData = filteredData.filter(item => item.status === currentFilters.status);
    }
    
    currentData = filteredData;
    sortPracticesTable(sortColumn, sortDirection);
    
    initializePracticesTable();
}

// Filtrar datos de reportes
function filterReportsData() {
    let filteredData = [...reportsData];
    
    if (currentReportsFilters.search) {
        filteredData = filteredData.filter(item => 
            item.practice.toLowerCase().includes(currentReportsFilters.search) ||
            item.professor.toLowerCase().includes(currentReportsFilters.search) ||
            item.subject.toLowerCase().includes(currentReportsFilters.search) ||
            item.objective.toLowerCase().includes(currentReportsFilters.search)
        );
    }
    
    if (currentReportsFilters.professor) {
        filteredData = filteredData.filter(item => item.professor === currentReportsFilters.professor);
    }
    
    currentReportsData = filteredData;
    initializeReportsTable();
    updateReportsResultsCount();
}

// Ordenar tabla de prácticas
function sortPracticesTable(column, direction = null) {
    if (column === sortColumn) {
        sortDirection = direction || (sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
        sortColumn = column;
        sortDirection = 'asc';
    }
    
    currentData.sort((a, b) => {
        let aValue = a[column];
        let bValue = b[column];
        
        if (column === 'date') {
            aValue = new Date(aValue);
            bValue = new Date(bValue);
        } else {
            aValue = String(aValue).toLowerCase();
            bValue = String(bValue).toLowerCase();
        }
        
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });
    
    updateSortIndicators();
    initializePracticesTable();
}

// Actualizar indicadores visuales de ordenamiento
function updateSortIndicators() {
    document.querySelectorAll('.sortable').forEach(header => {
        header.classList.remove('active-sort');
        const icon = header.querySelector('.sort-icon');
        
        if (header.getAttribute('data-column') === sortColumn) {
            header.classList.add('active-sort');
            icon.textContent = sortDirection === 'asc' ? '↑' : '↓';
        } else {
            icon.textContent = '↕';
        }
    });
}

// Actualizar filtros desplegables
function updateFilters() {
    const professorFilter = document.getElementById('professor-filter');
    
    const professors = [...new Set(practiceData.map(item => item.professor))];
    
    while (professorFilter.children.length > 1) {
        professorFilter.removeChild(professorFilter.lastChild);
    }
    
    professors.forEach(professor => {
        const option = document.createElement('option');
        option.value = professor;
        option.textContent = professor;
        professorFilter.appendChild(option);
    });
    
    if (currentFilters.professor) {
        professorFilter.value = currentFilters.professor;
    }
    if (currentFilters.status) {
        document.getElementById('status-filter').value = currentFilters.status;
    }
}

// Restablecer filtros
function resetFilters() {
    document.getElementById('search').value = '';
    document.getElementById('professor-filter').value = '';
    document.getElementById('status-filter').value = '';
    
    currentFilters = {
        search: '',
        professor: '',
        status: ''
    };
    
    currentData = [...practiceData];
    sortPracticesTable('date', 'asc');
    initializePracticesTable();
}

// Actualizar contador de resultados
function updateResultsCount() {
    const resultsCount = document.getElementById('results-count');
    const totalCount = document.getElementById('total-count');
    
    if (resultsCount && totalCount) {
        resultsCount.textContent = currentData.length;
        totalCount.textContent = practiceData.length;
        console.log('Contadores actualizados:', currentData.length, 'de', practiceData.length);
    }
}

// Actualizar contador de resultados de reportes
function updateReportsResultsCount() {
    const resultsCount = document.getElementById('reports-results-count');
    const totalCount = document.getElementById('reports-total-count');
    
    if (resultsCount && totalCount) {
        resultsCount.textContent = currentReportsData.length;
        totalCount.textContent = reportsData.length;
    }
}

// Formatear fecha
function formatDate(dateString) {
    try {
        if (!dateString) return 'Fecha no disponible';
        
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'Fecha inválida';
        
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return date.toLocaleDateString('es-ES', options);
    } catch (error) {
        console.error('Error al formatear fecha:', error);
        return 'Fecha no disponible';
    }
}

// Hacer funciones globales
window.mostrarPerfil = mostrarPerfil;
window.abrirModalCerrarSesion = abrirModalCerrarSesion;
window.cerrarModalCerrarSesion = cerrarModalCerrarSesion;
window.confirmarCerrarSesion = confirmarCerrarSesion;
window.closeMobileMenu = closeMobileMenu;
window.debugSchedule = debugSchedule;
window.showView = showView;

// Función para refrescar datos desde API
window.refreshData = async function() {
    showLoading();
    try {
        await Promise.all([
            loadPracticesFromAPI(),
            loadUsersFromAPI()
        ]);
        
        updateDashboardStats();
        loadRecentActivities();
        loadUpcomingPractices();
        initializePracticesTable();
        initializeUsersTable();
        initializeReportsTable();
        generateAgendaSchedule();
        
        showSuccessMessage('Datos actualizados correctamente');
    } catch (error) {
        console.error('Error al refrescar datos:', error);
        showSuccessMessage('Error al actualizar datos');
    } finally {
        hideLoading();
    }
};