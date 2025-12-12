// Utilidades generales para la aplicación

// Formatear fecha
function formatDate(dateString) {
    if (!dateString) return '';
    
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return date.toLocaleDateString('es-ES', options);
    } catch (error) {
        console.error('Error al formatear fecha:', error);
        return dateString;
    }
}

// Obtener día de la semana a partir de una fecha
function getDayFromDate(dateString) {
    try {
        const date = new Date(dateString);
        // Ajustar para problema de zona horaria
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const dayName = days[date.getDay()];
        
        // Solo considerar días laborales
        return ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].includes(dayName) ? dayName : null;
    } catch (error) {
        console.error('Error al obtener día de la fecha:', dateString, error);
        return null;
    }
}

// Calcular fecha a partir del día de la semana
function calculateDateFromDay(day, hour) {
    const today = new Date();
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const targetDayIndex = daysOfWeek.indexOf(day);
    
    if (targetDayIndex === -1) return '';
    
    // Calcular la fecha del próximo día seleccionado
    const currentDayIndex = today.getDay();
    let daysToAdd = targetDayIndex - currentDayIndex;
    
    // Si el día ya pasó esta semana, ir a la próxima semana
    if (daysToAdd < 0) {
        daysToAdd += 7;
    }
    
    // Si es hoy y ya pasó la hora, ir a la próxima semana
    if (daysToAdd === 0 && hour) {
        const currentHour = today.getHours();
        const selectedHour = parseInt(hour.split(':')[0]);
        if (currentHour >= selectedHour) {
            daysToAdd = 7;
        }
    }
    
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + daysToAdd);
    
    // Formatear como YYYY-MM-DD para el input date
    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const dayOfMonth = String(targetDate.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${dayOfMonth}`;
}

// Obtener color del estado
function getStatusColor(status) {
    switch(status) {
        case 'programada': return 'bg-green-100 text-green-800';
        case 'confirmada': return 'bg-blue-100 text-blue-800';
        case 'en-curso': return 'bg-yellow-100 text-yellow-800';
        case 'completada': return 'bg-gray-100 text-gray-800';
        case 'cancelada': return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
    }
}

// Obtener texto del estado
function getStatusText(status) {
    const translations = {
        'programada': 'Programada',
        'confirmada': 'Confirmada',
        'en-curso': 'En curso',
        'completada': 'Completada',
        'cancelada': 'Cancelada'
    };
    
    return translations[status] || status;
}

// Obtener color del rol
function getRoleColor(role) {
    switch(role) {
        case 'Administrador': return 'bg-purple-100 text-purple-800';
        case 'Profesor': return 'bg-blue-100 text-blue-800';
        default: return 'bg-gray-100 text-gray-800';
    }
}

// Obtener texto del rol
function getRoleText(role) {
    const translations = {
        'Administrador': 'Administrador',
        'Profesor': 'Profesor'
    };
    
    return translations[role] || role;
}

// Mostrar mensaje de éxito
function showSuccessMessage(message) {
    const successMessage = document.getElementById('success-message');
    const successText = document.getElementById('success-text');
    
    if (!successMessage || !successText) {
        console.warn('Elementos de mensaje de éxito no encontrados');
        return;
    }
    
    successText.textContent = message;
    successMessage.classList.remove('hidden');
    
    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 3000);
}

// Mostrar mensaje de error
function showErrorMessage(message) {
    // Podrías crear un elemento de error similar al de éxito
    console.error('Error:', message);
    alert(message); // Temporal
}

// Validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validar fecha
function isValidDate(dateString) {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
}

// Formatear hora para mostrar
function formatTimeForDisplay(timeString) {
    if (!timeString) return '';
    
    // Si ya tiene formato de hora, devolverlo
    if (timeString.includes(':')) {
        const [hour] = timeString.split(':');
        return `${hour}:00 - ${parseInt(hour) + 1}:00`;
    }
    
    return timeString;
}

// Generar ID único
function generateUniqueId(existingIds) {
    const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
    return maxId + 1;
}

// Escapar HTML para prevenir XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, function(m) { return map[m]; });
}

// Capitalizar primera letra
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Truncar texto
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Obtener iniciales del nombre
function getInitials(name) {
    if (!name) return '?';
    return name.charAt(0).toUpperCase();
}

// Calcular tiempo relativo
function getRelativeTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
        return 'Hoy';
    } else if (diffDays === 2) {
        return 'Ayer';
    } else if (diffDays <= 7) {
        return `Hace ${diffDays - 1} días`;
    } else {
        return formatDate(dateString);
    }
}

// Verificar si un slot está disponible
function isTimeSlotAvailable(labId, day, hour) {
    const practices = AppState.practiceData.filter(p => 
        p.labId === labId && 
        p.date && 
        p.time
    );
    
    const dayOfPractice = practices.find(p => {
        const practiceDay = getDayFromDate(p.date);
        return practiceDay === day && p.time === hour;
    });
    
    return !dayOfPractice;
}

// Obtener ocupación de laboratorio
function getLabOccupancy(labId) {
    const occupancy = {};
    const labPractices = AppState.practiceData.filter(p => p.labId === labId && p.date && p.time);
    
    labPractices.forEach(practice => {
        const day = getDayFromDate(practice.date);
        if (day) {
            if (!occupancy[day]) {
                occupancy[day] = {};
            }
            occupancy[day][practice.time] = {
                practice: practice.practice,
                professor: practice.professor,
                id: practice.id
            };
        }
    });
    
    return occupancy;
}

// Exportar funciones para uso global
window.formatDate = formatDate;
window.getDayFromDate = getDayFromDate;
window.calculateDateFromDay = calculateDateFromDay;
window.getStatusColor = getStatusColor;
window.getStatusText = getStatusText;
window.getRoleColor = getRoleColor;
window.getRoleText = getRoleText;
window.showSuccessMessage = showSuccessMessage;
window.showErrorMessage = showErrorMessage;
window.isValidEmail = isValidEmail;
window.isValidDate = isValidDate;
window.formatTimeForDisplay = formatTimeForDisplay;
window.generateUniqueId = generateUniqueId;
window.escapeHtml = escapeHtml;
window.capitalizeFirstLetter = capitalizeFirstLetter;
window.truncateText = truncateText;
window.getInitials = getInitials;
window.getRelativeTime = getRelativeTime;
window.isTimeSlotAvailable = isTimeSlotAvailable;
window.getLabOccupancy = getLabOccupancy;