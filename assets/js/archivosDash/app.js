// Archivo principal de inicialización y navegación

// Traducciones
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
        "menu.laboratories": "Laboratorios",
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
        "users.table.academy": "Academia",
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
        "users.form.academy": "Academia",
        "users.form.status": "Estado",
        
        // Laboratorios
        "laboratories.title": "Gestión de Laboratorios",
        "laboratories.addLaboratory": "Agregar Laboratorio",
        "laboratories.table.name": "Nombre",
        "laboratories.table.building": "Edificio",
        "laboratories.table.actions": "Acciones",
        "laboratories.editLaboratory": "Editar Laboratorio",
        "laboratories.confirmDelete": "Confirmar Eliminación",
        "laboratories.deleteConfirmation": "¿Está seguro de eliminar este laboratorio?",
        "laboratories.deleteWarning": "Esta acción no se puede deshacer.",
        "laboratories.deleteLaboratory": "Eliminar Laboratorio",
        "laboratories.form.name": "Nombre del Laboratorio",
        "laboratories.form.building": "Edificio",
        
        // Reportes
        "reports.title": "Reportes de Prácticas",
        "reports.exportReport": "Exportar Reporte",
        "reports.table.objective": "OBJETIVO",
        
        // Configuración
        "settings.title": "Configuración del Sistema",
        "settings.preferences": "Preferencias",
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
        "menu.laboratories": "Laboratories",
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
        "users.table.academy": "Academy",
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
        "users.form.academy": "Academy",
        "users.form.status": "Status",
        
        // Laboratorios
        "laboratories.title": "Laboratories Management",
        "laboratories.addLaboratory": "Add Laboratory",
        "laboratories.table.name": "Name",
        "laboratories.table.building": "Building",
        "laboratories.table.actions": "Actions",
        "laboratories.editLaboratory": "Edit Laboratory",
        "laboratories.confirmDelete": "Confirm Deletion",
        "laboratories.deleteConfirmation": "Are you sure you want to delete this laboratory?",
        "laboratories.deleteWarning": "This action cannot be undone.",
        "laboratories.deleteLaboratory": "Delete Laboratory",
        "laboratories.form.name": "Laboratory Name",
        "laboratories.form.building": "Building",
        
        // Reportes
        "reports.title": "Practice Reports",
        "reports.exportReport": "Export Report",
        "reports.table.objective": "OBJECTIVE",
        
        // Configuración
        "settings.title": "System Settings",
        "settings.preferences": "Preferences",
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
        
        // Logout
        "logout.confirmation": "Are you sure you want to log out?"
    }
};

// Aplicar traducciones
function applyTranslations(language) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[language][key];
            } else {
                element.textContent = translations[language][key];
            }
        }
    });
}

// Funciones del header
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
        
        // Cerrar menú al hacer clic fuera de él
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
            console.log("Inicial del usuario clickeada");
        });
    }
}

// Cerrar menú móvil
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (hamburgerMenu) hamburgerMenu.classList.remove('active');
}

// Configurar navegación
function setupNavigation() {
    // Desktop sidebar
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
    });
    
    document.getElementById('users-link').addEventListener('click', function(e) {
        e.preventDefault();
        showView('users-view');
        updateActiveLink(this);
        closeMobileMenu();
    });
    
    document.getElementById('laboratories-link').addEventListener('click', function(e) {
        e.preventDefault();
        showView('laboratories-view');
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
    
    // Cerrar Sesión en sidebar
    document.getElementById('logout-link').addEventListener('click', function(e) {
        e.preventDefault();
        abrirModalCerrarSesion();
        closeMobileMenu();
    });
    
    // Mobile sidebar
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
    });
    
    document.getElementById('mobile-users-link').addEventListener('click', function(e) {
        e.preventDefault();
        showView('users-view');
        updateActiveMobileLink(this);
        closeMobileMenu();
    });
    
    document.getElementById('mobile-laboratories-link').addEventListener('click', function(e) {
        e.preventDefault();
        showView('laboratories-view');
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
    
    // Cerrar Sesión en menú móvil
    document.getElementById('mobile-logout-link').addEventListener('click', function(e) {
        e.preventDefault();
        abrirModalCerrarSesion();
        closeMobileMenu();
    });
    
    // Botón cerrar menú móvil
    const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
    if (closeMobileMenuBtn) {
        closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
    }
}

// Actualizar enlace activo en el sidebar
function updateActiveLink(activeLink) {
    // Remover clase activa de todos los enlaces
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.classList.remove('bg-primary', 'text-white');
        link.classList.add('text-gray-700', 'hover:bg-gray-100');
    });
    
    // Agregar clase activa al enlace seleccionado
    activeLink.classList.remove('text-gray-700', 'hover:bg-gray-100');
    activeLink.classList.add('bg-primary', 'text-white');
}

// Actualizar enlace activo en el menú móvil
function updateActiveMobileLink(activeLink) {
    // Remover clase activa de todos los enlaces
    document.querySelectorAll('#mobile-sidebar a').forEach(link => {
        link.classList.remove('bg-primary', 'text-white');
        link.classList.add('text-gray-700', 'hover:bg-gray-100');
    });
    
    // Agregar clase activa al enlace seleccionado
    activeLink.classList.remove('text-gray-700', 'hover:bg-gray-100');
    activeLink.classList.add('bg-primary', 'text-white');
}

// Mostrar vista específica
function showView(viewId) {
    // Ocultar todas las vistas
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    
    AppState.currentView = viewId;
    
    // Cargar la vista correspondiente
    switch(viewId) {
        case 'dashboard-view':
            mainContent.innerHTML = window.renderDashboardView();
            window.initializeDashboard();
            break;
        case 'practices-view':
            mainContent.innerHTML = window.renderPracticesView();
            window.initializePracticesTable();
            break;
        case 'agenda-view':
            mainContent.innerHTML = window.renderAgendaView();
            window.initializeLabSelector();
            break;
        case 'users-view':
            mainContent.innerHTML = window.renderUsersView();
            window.initializeUsersTable();
            break;
        case 'laboratories-view':
            mainContent.innerHTML = window.renderLaboratoriesView();
            window.initializeLaboratoriesTable();
            break;
        case 'reports-view':
            mainContent.innerHTML = window.renderReportsView();
            window.initializeReportsTable();
            break;
        case 'settings-view':
            mainContent.innerHTML = window.renderSettingsView();
            window.initializeSettings();
            break;
    }
}

// Funciones del modal de cerrar sesión
function abrirModalCerrarSesion() {
    const modal = window.createLogoutModal();
    document.getElementById('modals-container').innerHTML = modal;
    
    const logoutModal = document.getElementById('logout-modal');
    if (logoutModal) {
        logoutModal.classList.remove('hidden');
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
        alert('Cerrando sesión...');
        cerrarModalCerrarSesion();
    }
}

// Inicializar aplicación
function initializeApp() {
    // Cargar configuración
    loadSettingsFromStorage();
    
    // Inicializar datos de ejemplo
    initializeSampleData();
    
    // Aplicar traducciones
    applyTranslations(AppState.settings.language);
    
    // Configurar funcionalidades
    setupHeaderFunctionality();
    setupNavigation();
    
    // Mostrar dashboard por defecto
    showView('dashboard-view');
    
    console.log('Aplicación inicializada correctamente');
}

// Exportar funciones para uso global
window.translations = translations;
window.applyTranslations = applyTranslations;
window.setupHeaderFunctionality = setupHeaderFunctionality;
window.closeMobileMenu = closeMobileMenu;
window.setupNavigation = setupNavigation;
window.updateActiveLink = updateActiveLink;
window.updateActiveMobileLink = updateActiveMobileLink;
window.showView = showView;
window.abrirModalCerrarSesion = abrirModalCerrarSesion;
window.cerrarModalCerrarSesion = cerrarModalCerrarSesion;
window.confirmarCerrarSesion = confirmarCerrarSesion;
window.initializeApp = initializeApp;