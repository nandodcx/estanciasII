// ==============================================
// MÓDULO DE CONFIGURACIÓN DEL SISTEMA - VERSIÓN SIMPLIFICADA
// Archivo: settings.js
// ==============================================

console.log('settings.js cargando...');

// Configuración por defecto
const DEFAULT_SETTINGS = {
    emailNotifications: true,
    language: 'es'
};

// ========== INICIALIZAR DATOS ==========

function initializeSettingsData() {
    console.log('initializeSettingsData ejecutado');
    
    // Asegurarse de que AppState existe
    if (!window.AppState) {
        window.AppState = {};
        console.log('AppState creado');
    }
    
    // Si no hay configuración, inicializar con los valores por defecto
    if (!window.AppState.settings || typeof window.AppState.settings !== 'object') {
        // Intentar cargar de localStorage
        const savedSettings = loadSettingsFromStorage();
        window.AppState.settings = savedSettings ? savedSettings : { ...DEFAULT_SETTINGS };
        console.log('Configuración inicializada:', window.AppState.settings);
    }
}

// ========== RENDERIZAR VISTA ==========

function renderSettingsView() {
    console.log('renderSettingsView ejecutado');
    
    // Obtener configuración actual
    const settings = window.AppState?.settings || DEFAULT_SETTINGS;
    
    return `
        <div id="settings-view" class="fade-in">
            <h1 class="text-2xl font-bold text-gray-800 mb-6">Configuración del Sistema</h1>
            
            <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h2 class="text-lg font-semibold text-gray-800 mb-4">Preferencias</h2>
                
                <form id="settings-form">
                    <div class="space-y-6">
                        <!-- Notificaciones por Email -->
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="font-medium text-gray-800">Notificaciones por Email</p>
                                <p class="text-sm text-gray-500">Recibir notificaciones por correo electrónico</p>
                            </div>
                            <label class="toggle-switch">
                                <input type="checkbox" id="email-notifications" ${settings.emailNotifications ? 'checked' : ''}>
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                        
                        <!-- Idioma -->
                        <div>
                            <label for="language" class="block text-sm font-medium text-gray-700 mb-2">Idioma</label>
                            <select id="language" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                                <option value="es" ${settings.language === 'es' ? 'selected' : ''}>Español</option>
                            </select>
                        </div>
                        
                        <!-- Separador -->
                        <div class="border-t border-gray-200 pt-6">
                            <!-- Botón Guardar -->
                            <div class="flex justify-end">
                                <button type="submit" id="save-settings" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-700 transition-colors">
                                    Guardar Configuración
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    `;
}

// ========== INICIALIZAR CONFIGURACIÓN ==========

function initializeSettings() {
    console.log('initializeSettings ejecutado');
    
    // Verificar que AppState existe
    if (!window.AppState || !window.AppState.settings) {
        console.error('ERROR: Configuración no disponible en AppState');
        return;
    }
    
    const settings = window.AppState.settings;
    
    // Configurar controles con los valores actuales
    const emailNotificationsToggle = document.getElementById('email-notifications');
    const languageSelect = document.getElementById('language');
    
    if (emailNotificationsToggle) emailNotificationsToggle.checked = settings.emailNotifications || false;
    if (languageSelect) languageSelect.value = settings.language || 'es';
    
    console.log('Configuración inicializada en controles');
}

// ========== CONFIGURAR EVENT LISTENERS ==========

function setupSettingsEventListeners() {
    console.log('setupSettingsEventListeners ejecutado');
    
    // Configurar formulario de settings
    const settingsForm = document.getElementById('settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveSettingsFromForm();
        });
    }
    
    // Configurar cambios en tiempo real para selects
    const languageSelect = document.getElementById('language');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            console.log('Idioma cambiado a:', this.value);
            if (window.AppState && window.AppState.settings) {
                window.AppState.settings.language = this.value;
            }
        });
    }
    
    // Configurar cambios en tiempo real para toggles
    const emailNotificationsToggle = document.getElementById('email-notifications');
    if (emailNotificationsToggle) {
        emailNotificationsToggle.addEventListener('change', function() {
            console.log('Notificaciones por email:', this.checked);
            if (window.AppState && window.AppState.settings) {
                window.AppState.settings.emailNotifications = this.checked;
            }
        });
    }
    
    console.log('Event listeners de configuración configurados');
}

// ========== FUNCIONES DE GESTIÓN ==========

function saveSettingsFromForm() {
    console.log('saveSettingsFromForm ejecutado');
    
    if (!window.AppState || !window.AppState.settings) {
        console.error('ERROR: No hay configuración para guardar');
        showErrorMessage('Error al guardar la configuración');
        return;
    }
    
    // Recolectar valores actuales de los controles
    collectCurrentSettings();
    
    // Guardar en localStorage
    const success = saveSettingsToStorage();
    
    if (success) {
        // Aplicar configuración inmediatamente
        applySettings();
        
        // Mostrar mensaje de éxito
        showSuccessMessage('Configuración guardada correctamente');
        
        console.log('Configuración guardada:', window.AppState.settings);
    } else {
        showErrorMessage('Error al guardar en localStorage');
    }
}

function collectCurrentSettings() {
    console.log('collectCurrentSettings ejecutado');
    
    if (!window.AppState || !window.AppState.settings) return;
    
    const emailNotificationsToggle = document.getElementById('email-notifications');
    const languageSelect = document.getElementById('language');
    
    if (emailNotificationsToggle) window.AppState.settings.emailNotifications = emailNotificationsToggle.checked;
    if (languageSelect) window.AppState.settings.language = languageSelect.value;
}

function applySettings() {
    console.log('applySettings ejecutado');
    
    if (!window.AppState || !window.AppState.settings) return;
    
    const settings = window.AppState.settings;
    
    // Aplicar traducciones si el idioma cambió
    if (typeof applyTranslations === 'function') {
        applyTranslations(settings.language);
    }
    
    console.log('Configuración aplicada:', settings);
}

// ========== FUNCIONES DE STORAGE ==========

function saveSettingsToStorage() {
    try {
        if (!window.AppState || !window.AppState.settings) return false;
        
        localStorage.setItem('system_settings', JSON.stringify(window.AppState.settings));
        console.log('Configuración guardada en localStorage');
        return true;
    } catch (error) {
        console.error('Error al guardar en localStorage:', error);
        return false;
    }
}

function loadSettingsFromStorage() {
    try {
        const saved = localStorage.getItem('system_settings');
        if (saved) {
            const settings = JSON.parse(saved);
            console.log('Configuración cargada de localStorage:', settings);
            return settings;
        }
    } catch (error) {
        console.error('Error al cargar de localStorage:', error);
    }
    return null;
}

// ========== FUNCIONES AUXILIARES ==========

function showSuccessMessage(message) {
    const successMsg = document.getElementById('success-message');
    const successText = document.getElementById('success-text');
    
    if (successMsg && successText) {
        successText.textContent = message;
        successMsg.classList.remove('hidden');
        
        setTimeout(() => {
            successMsg.classList.add('hidden');
        }, 3000);
    } else {
        alert(message);
    }
}

function showErrorMessage(message) {
    alert(`Error: ${message}`);
}

// ========== EXPORTAR FUNCIONES ==========

if (typeof window !== 'undefined') {
    window.renderSettingsView = renderSettingsView;
    window.initializeSettings = initializeSettings;
    window.setupSettingsEventListeners = setupSettingsEventListeners;
    window.initializeSettingsData = initializeSettingsData;
    window.applySettings = applySettings;
    window.saveSettingsToStorage = saveSettingsToStorage;
    window.loadSettingsFromStorage = loadSettingsFromStorage;
    
    console.log('settings.js cargado correctamente');
}

// Inicializar datos cuando se carga el script
initializeSettingsData();
console.log('settings.js completamente cargado');