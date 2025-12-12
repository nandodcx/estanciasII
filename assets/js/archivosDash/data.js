// Datos globales de la aplicación
const AppState = {
    // Configuración
    settings: {
        emailNotifications: true,
        language: 'es'
    },
    
    // Datos
    practiceData: [],
    usersData: [],
    laboratoriesData: [],
    reportsData: [],
    
    // Estado de la aplicación
    currentView: 'dashboard-view',
    currentData: [],
    currentReportsData: [],
    
    // Filtros
    currentFilters: {
        search: '',
        professor: '',
        status: ''
    },
    currentReportsFilters: {
        search: '',
        professor: '',
        status: ''
    },
    
    // Ordenamiento
    sortColumn: 'date',
    sortDirection: 'asc',
    
    // Agenda
    selectedLabId: null,
    labOccupancy: {},
    
    // Modales
    activeModal: null
};

// Datos iniciales de ejemplo
function initializeSampleData() {
    AppState.practiceData = [
        { 
            id: 1, 
            date: '2024-01-15',
            practice: 'Laboratorio MAC', 
            professor: 'Dr. Fued', 
            subject: 'Programación Concurrente', 
            status: 'programada', 
            time: '7:00',
            objective: 'Programación de hilos en web.',
            lab: 'Laboratorio de Computación',
            labId: 3,
            labName: 'Laboratorio de Computación'
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
            lab: 'Laboratorio de Computación',
            labId: 3,
            labName: 'Laboratorio de Computación'
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
            lab: 'Laboratorio de Física',
            labId: 2,
            labName: 'Laboratorio de Física'
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
            lab: 'Aula 4',
            labId: 4,
            labName: 'Aula 4'
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
            lab: 'Aula 4',
            labId: 4,
            labName: 'Aula 4'
        }
    ];

    AppState.usersData = [
        { 
            id: 1, 
            name: 'Administrador', 
            username: 'admin', 
            email: 'admin@universidad.edu', 
            role: 'Administrador', 
            academy: '',
            status: 'Activo', 
            lastAccess: 'Hoy, 10:30 AM' 
        },
        { 
            id: 2, 
            name: 'Dr. Fued', 
            username: 'fued', 
            email: 'fued@universidad.edu', 
            role: 'Profesor', 
            academy: 'Academia en Software',
            status: 'Activo', 
            lastAccess: 'Hoy, 09:15 AM' 
        },
        { 
            id: 3, 
            name: 'Prof. Estefano', 
            username: 'estefano', 
            email: 'estefano@universidad.edu', 
            role: 'Profesor', 
            academy: 'Academia en Sistemas',
            status: 'Activo', 
            lastAccess: 'Ayer, 16:45 PM' 
        },
        { 
            id: 4, 
            name: 'Prof. Ricardo', 
            username: 'ricardo', 
            email: 'ricardo@universidad.edu', 
            role: 'Profesor', 
            academy: 'Academia en Redes',
            status: 'Activo', 
            lastAccess: 'Hoy, 11:20 AM' 
        },
        { 
            id: 5, 
            name: 'Prof. Valeria', 
            username: 'valeria', 
            email: 'valeria@universidad.edu', 
            role: 'Profesor', 
            academy: 'Academia en Inteligencia Artificial',
            status: 'Activo', 
            lastAccess: 'Ayer, 14:30 PM' 
        }
    ];

    AppState.laboratoriesData = [
        { id: 1, name: 'Laboratorio de Química', building: 'Edificio de Ciencias' },
        { id: 2, name: 'Laboratorio de Física', building: 'Edificio de Ciencias' },
        { id: 3, name: 'Laboratorio de Computación', building: 'Edificio Tecnológico' },
        { id: 4, name: 'Aula 4', building: 'Edificio Principal' }
    ];

    AppState.reportsData = [
        { id: 1, date: '2024-01-15', practice: 'Laboratorio MAC', objective: 'Programación de hilos en web.', professor: 'Dr. Fued', subject: 'Programación Concurrente' },
        { id: 2, date: '2024-01-15', practice: 'Laboratorio Linux', objective: 'Instalación de un sistema operativo dual.', professor: 'Prof. Estefano', subject: 'Sistemas Operativos' },
        { id: 3, date: '2024-01-16', practice: 'Laboratorio Windows', objective: 'Instalación de un sistema operativo dual.', professor: 'Prof. Ricardo', subject: 'Programación I' },
        { id: 4, date: '2024-01-17', practice: 'Laboratorio Windows', objective: 'Examen de conocimientos.', professor: 'Prof. Valeria', subject: 'Liderazgo eq. Alto desempeño' },
        { id: 5, date: '2024-01-18', practice: 'Laboratorio Windows', objective: 'En cuesta de...', professor: 'Prof. Valeria', subject: 'Liderazgo eq. Alto desempeño' }
    ];

    // Inicializar datos actuales
    AppState.currentData = [...AppState.practiceData];
    AppState.currentReportsData = [...AppState.reportsData];
}

// Guardar configuración en localStorage
function saveSettingsToStorage() {
    try {
        localStorage.setItem('appSettings', JSON.stringify(AppState.settings));
        return true;
    } catch (error) {
        console.error('Error al guardar configuración:', error);
        return false;
    }
}

// Cargar configuración desde localStorage
function loadSettingsFromStorage() {
    try {
        const savedSettings = localStorage.getItem('appSettings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            AppState.settings.emailNotifications = settings.emailNotifications;
            AppState.settings.language = settings.language;
        }
    } catch (error) {
        console.error('Error al cargar configuración:', error);
    }
}

// Obtener datos filtrados para prácticas
function getFilteredPracticeData() {
    let filtered = [...AppState.practiceData];
    
    if (AppState.currentFilters.search) {
        const searchTerm = AppState.currentFilters.search.toLowerCase();
        filtered = filtered.filter(item => 
            item.practice.toLowerCase().includes(searchTerm) ||
            item.professor.toLowerCase().includes(searchTerm) ||
            item.subject.toLowerCase().includes(searchTerm)
        );
    }
    
    if (AppState.currentFilters.professor) {
        filtered = filtered.filter(item => item.professor === AppState.currentFilters.professor);
    }
    
    if (AppState.currentFilters.status) {
        filtered = filtered.filter(item => item.status === AppState.currentFilters.status);
    }
    
    return filtered;
}

// Obtener datos filtrados para reportes
function getFilteredReportData() {
    let filtered = [...AppState.reportsData];
    
    if (AppState.currentReportsFilters.search) {
        const searchTerm = AppState.currentReportsFilters.search.toLowerCase();
        filtered = filtered.filter(item => 
            item.practice.toLowerCase().includes(searchTerm) ||
            item.professor.toLowerCase().includes(searchTerm) ||
            item.subject.toLowerCase().includes(searchTerm) ||
            item.objective.toLowerCase().includes(searchTerm)
        );
    }
    
    if (AppState.currentReportsFilters.professor) {
        filtered = filtered.filter(item => item.professor === AppState.currentReportsFilters.professor);
    }
    
    return filtered;
}

// Ordenar datos
function sortData(data, column, direction) {
    return [...data].sort((a, b) => {
        let aValue = a[column];
        let bValue = b[column];
        
        if (column === 'date') {
            aValue = new Date(aValue);
            bValue = new Date(bValue);
        } else {
            aValue = String(aValue).toLowerCase();
            bValue = String(bValue).toLowerCase();
        }
        
        if (aValue < bValue) return direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return direction === 'asc' ? 1 : -1;
        return 0;
    });
}

// Agregar nueva práctica
function addPractice(practice) {
    const newId = AppState.practiceData.length > 0 ? 
        Math.max(...AppState.practiceData.map(p => p.id)) + 1 : 1;
    
    const newPractice = {
        id: newId,
        ...practice
    };
    
    AppState.practiceData.push(newPractice);
    
    // Agregar también a reportes
    AppState.reportsData.push({
        id: newId,
        date: practice.date,
        practice: practice.practice,
        objective: practice.objective || '',
        professor: practice.professor,
        subject: practice.subject
    });
    
    return newPractice;
}

// Actualizar práctica existente
function updatePractice(id, updatedData) {
    const index = AppState.practiceData.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    AppState.practiceData[index] = { ...AppState.practiceData[index], ...updatedData };
    
    // Actualizar también en reportes
    const reportIndex = AppState.reportsData.findIndex(r => r.id === id);
    if (reportIndex !== -1) {
        AppState.reportsData[reportIndex] = {
            ...AppState.reportsData[reportIndex],
            date: updatedData.date,
            practice: updatedData.practice,
            objective: updatedData.objective || '',
            professor: updatedData.professor,
            subject: updatedData.subject
        };
    }
    
    return AppState.practiceData[index];
}

// Eliminar práctica
function deletePractice(id) {
    const practiceIndex = AppState.practiceData.findIndex(p => p.id === id);
    if (practiceIndex === -1) return false;
    
    const deletedPractice = AppState.practiceData[practiceIndex];
    AppState.practiceData.splice(practiceIndex, 1);
    
    // Eliminar también de reportes
    const reportIndex = AppState.reportsData.findIndex(r => r.id === id);
    if (reportIndex !== -1) {
        AppState.reportsData.splice(reportIndex, 1);
    }
    
    return deletedPractice;
}

// Obtener práctica por ID
function getPracticeById(id) {
    return AppState.practiceData.find(p => p.id === id);
}

// Obtener usuario por ID
function getUserById(id) {
    return AppState.usersData.find(u => u.id === id);
}

// Obtener laboratorio por ID
function getLaboratoryById(id) {
    return AppState.laboratoriesData.find(l => l.id === id);
}

// Agregar nuevo usuario
function addUser(user) {
    const newId = AppState.usersData.length > 0 ? 
        Math.max(...AppState.usersData.map(u => u.id)) + 1 : 1;
    
    const newUser = {
        id: newId,
        lastAccess: 'Nunca',
        ...user
    };
    
    AppState.usersData.push(newUser);
    return newUser;
}

// Actualizar usuario
function updateUser(id, updatedData) {
    const index = AppState.usersData.findIndex(u => u.id === id);
    if (index === -1) return null;
    
    AppState.usersData[index] = { ...AppState.usersData[index], ...updatedData };
    return AppState.usersData[index];
}

// Eliminar usuario
function deleteUser(id) {
    const index = AppState.usersData.findIndex(u => u.id === id);
    if (index === -1) return false;
    
    AppState.usersData.splice(index, 1);
    return true;
}

// Agregar nuevo laboratorio
function addLaboratory(laboratory) {
    const newId = AppState.laboratoriesData.length > 0 ? 
        Math.max(...AppState.laboratoriesData.map(l => l.id)) + 1 : 1;
    
    const newLaboratory = {
        id: newId,
        ...laboratory
    };
    
    AppState.laboratoriesData.push(newLaboratory);
    return newLaboratory;
}

// Actualizar laboratorio
function updateLaboratory(id, updatedData) {
    const index = AppState.laboratoriesData.findIndex(l => l.id === id);
    if (index === -1) return null;
    
    AppState.laboratoriesData[index] = { ...AppState.laboratoriesData[index], ...updatedData };
    return AppState.laboratoriesData[index];
}

// Eliminar laboratorio
function deleteLaboratory(id) {
    const index = AppState.laboratoriesData.findIndex(l => l.id === id);
    if (index === -1) return false;
    
    // Verificar si hay prácticas usando este laboratorio
    const practicesUsingLab = AppState.practiceData.filter(p => p.labId === id);
    if (practicesUsingLab.length > 0) {
        return false; // No se puede eliminar
    }
    
    AppState.laboratoriesData.splice(index, 1);
    return true;
}

// Exportar funciones para uso global
window.AppState = AppState;
window.initializeSampleData = initializeSampleData;
window.saveSettingsToStorage = saveSettingsToStorage;
window.loadSettingsFromStorage = loadSettingsFromStorage;
window.getFilteredPracticeData = getFilteredPracticeData;
window.getFilteredReportData = getFilteredReportData;
window.sortData = sortData;
window.addPractice = addPractice;
window.updatePractice = updatePractice;
window.deletePractice = deletePractice;
window.getPracticeById = getPracticeById;
window.getUserById = getUserById;
window.getLaboratoryById = getLaboratoryById;
window.addUser = addUser;
window.updateUser = updateUser;
window.deleteUser = deleteUser;
window.addLaboratory = addLaboratory;
window.updateLaboratory = updateLaboratory;
window.deleteLaboratory = deleteLaboratory;