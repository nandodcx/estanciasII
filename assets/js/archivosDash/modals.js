// Módulo de Modales

// Modal de Edición de Práctica
function createEditPracticeModal() {
    return `
        <div id="edit-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden fade-in">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 slide-in">
                <div class="p-6 border-b border-gray-200">
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-bold text-gray-800" id="edit-modal-title" data-i18n="practices.editPractice">Editar Práctica</h3>
                        <button id="close-edit-modal" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                </div>
                
                <form id="edit-practice-form" class="p-6">
                    <input type="hidden" id="edit-practice-id">
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label for="edit-practice-date" class="block text-sm font-medium text-gray-700 mb-2">
                                <span data-i18n="practices.form.date">Fecha de Práctica</span> <span class="text-red-500">*</span>
                            </label>
                            <input type="date" id="edit-practice-date" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                        </div>
                        
                        <div>
                            <label for="edit-practice-time" class="block text-sm font-medium text-gray-700 mb-2">
                                <span>Hora de Práctica</span> <span class="text-red-500">*</span>
                            </label>
                            <select id="edit-practice-time" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                                <option value="">Seleccione una hora</option>
                                <option value="7:00">7:00 - 8:00</option>
                                <option value="8:00">8:00 - 9:00</option>
                                <option value="9:00">9:00 - 10:00</option>
                                <option value="10:00">10:00 - 11:00</option>
                                <option value="11:00">11:00 - 12:00</option>
                                <option value="12:00">12:00 - 13:00</option>
                                <option value="13:00">13:00 - 14:00</option>
                                <option value="14:00">14:00 - 15:00</option>
                                <option value="15:00">15:00 - 16:00</option>
                                <option value="16:00">16:00 - 17:00</option>
                                <option value="17:00">17:00 - 18:00</option>
                                <option value="18:00">18:00 - 19:00</option>
                                <option value="19:00">19:00 - 20:00</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="mb-6">
                        <label for="edit-practice-name" class="block text-sm font-medium text-gray-700 mb-2">
                            <span data-i18n="practices.form.name">Nombre de Práctica</span> <span class="text-red-500">*</span>
                        </label>
                        <input type="text" id="edit-practice-name" required placeholder="Ej: Laboratorio de Química"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label for="edit-practice-professor" class="block text-sm font-medium text-gray-700 mb-2">
                                <span data-i18n="practices.form.professor">Profesor</span> <span class="text-red-500">*</span>
                            </label>
                            <select id="edit-practice-professor" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                                <option value="" data-i18n="practices.form.selectProfessor">Seleccione un profesor</option>
                                <option value="Dr. Fued">Dr. Fued</option>
                                <option value="Prof. Estefano">Prof. Estefano</option>
                                <option value="Prof. Ricardo">Prof. Ricardo</option>
                                <option value="Prof. Valeria">Prof. Valeria</option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="edit-practice-subject" class="block text-sm font-medium text-gray-700 mb-2">
                                <span data-i18n="practices.form.subject">Asignatura</span> <span class="text-red-500">*</span>
                            </label>
                            <select id="edit-practice-subject" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                                <option value="" data-i18n="practices.form.selectSubject">Seleccione una asignatura</option>
                                <option value="Programación Concurrente">Programación Concurrente</option>
                                <option value="Sistemas Operativos">Sistemas Operativos</option>
                                <option value="Programación I">Programación I</option>
                                <option value="Liderazgo eq. Alto desempeño">Liderazgo eq. Alto desempeño</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="mb-6">
                        <label for="edit-practice-objective" class="block text-sm font-medium text-gray-700 mb-2">
                            <span data-i18n="practices.form.objective">Objetivo de la Práctica</span> <span class="text-red-500">*</span>
                        </label>
                        <textarea id="edit-practice-objective" required rows="3" placeholder="Describa el objetivo principal de esta práctica..."
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"></textarea>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label for="edit-practice-lab" class="block text-sm font-medium text-gray-700 mb-2" data-i18n="practices.form.lab">
                                Laboratorio / Aula <span class="text-red-500">*</span>
                            </label>
                            <select id="edit-practice-lab" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                                <option value="">Seleccione un laboratorio</option>
                                <!-- Los laboratorios se cargarán dinámicamente -->
                            </select>
                        </div>
                        
                        <div>
                            <label for="edit-practice-status" class="block text-sm font-medium text-gray-700 mb-2">
                                <span data-i18n="practices.form.status">Estado</span> <span class="text-red-500">*</span>
                            </label>
                            <select id="edit-practice-status" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                                <option value="programada" data-i18n="status.scheduled">Programada</option>
                                <option value="confirmada" data-i18n="status.confirmed">Confirmada</option>
                                <option value="en-curso" data-i18n="status.inProgress">En curso</option>
                                <option value="completada" data-i18n="status.completed">Completada</option>
                                <option value="cancelada" data-i18n="status.cancelled">Cancelada</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="flex justify-end gap-3 pt-4 border-t border-gray-200">
                        <button type="button" id="cancel-edit" class="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors" data-i18n="common.cancel">
                            Cancelar
                        </button>
                        <button type="submit" class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                            <i class="fas fa-save"></i>
                            <span data-i18n="common.saveChanges">Guardar Cambios</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

// Modal de Eliminación de Práctica
function createDeletePracticeModal() {
    return `
        <div id="delete-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden fade-in">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 slide-in">
                <div class="p-6 border-b border-gray-200">
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-bold text-gray-800" data-i18n="practices.confirmDelete">Confirmar Eliminación</h3>
                        <button id="close-delete-modal" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                </div>
                
                <div class="p-6">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="p-3 bg-red-100 rounded-full">
                            <i class="fas fa-exclamation-triangle text-red-500 text-xl"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800" data-i18n="practices.deleteConfirmation">¿Está seguro de eliminar esta práctica?</h4>
                            <p class="text-sm text-gray-500 mt-1" data-i18n="practices.deleteWarning">Esta acción no se puede deshacer.</p>
                        </div>
                    </div>
                    
                    <div class="bg-red-50 p-4 rounded-lg mb-6">
                        <p class="text-sm text-gray-800 font-medium" id="delete-practice-name"></p>
                        <p class="text-xs text-gray-500 mt-1" id="delete-practice-details"></p>
                    </div>
                    
                    <input type="hidden" id="delete-practice-id">
                    
                    <div class="flex justify-end gap-3">
                        <button type="button" id="cancel-delete" class="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors" data-i18n="common.cancel">
                            Cancelar
                        </button>
                        <button type="button" id="confirm-delete" class="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2">
                            <i class="fas fa-trash"></i>
                            <span data-i18n="practices.deletePractice">Eliminar Práctica</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Modal de Edición de Usuario
function createEditUserModal() {
    return `
        <div id="edit-user-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden fade-in">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 slide-in">
                <div class="p-6 border-b border-gray-200">
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-bold text-gray-800" id="edit-user-modal-title" data-i18n="users.editUser">Editar Usuario</h3>
                        <button id="close-edit-user-modal" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                </div>
                
                <form id="edit-user-form" class="p-6">
                    <input type="hidden" id="edit-user-id">
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label for="edit-user-name" class="block text-sm font-medium text-gray-700 mb-2">
                                <span data-i18n="users.form.fullName">Nombre Completo</span> <span class="text-red-500">*</span>
                            </label>
                            <input type="text" id="edit-user-name" required placeholder="Ej: Juan Pérez"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                        </div>
                        
                        <div>
                            <label for="edit-user-username" class="block text-sm font-medium text-gray-700 mb-2">
                                <span data-i18n="users.form.username">Usuario</span> <span class="text-red-500">*</span>
                            </label>
                            <input type="text" id="edit-user-username" required placeholder="Ej: juanperez"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label for="edit-user-email" class="block text-sm font-medium text-gray-700 mb-2">
                                <span data-i18n="users.form.email">Correo Electrónico</span> <span class="text-red-500">*</span>
                            </label>
                            <input type="email" id="edit-user-email" required placeholder="Ej: juan@universidad.edu"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                        </div>
                        
                        <div>
                            <label for="edit-user-role" class="block text-sm font-medium text-gray-700 mb-2">
                                <span data-i18n="users.form.role">Rol</span> <span class="text-red-500">*</span>
                            </label>
                            <select id="edit-user-role" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                                <option value="" data-i18n="users.form.selectRole">Seleccione un rol</option>
                                <option value="Administrador" data-i18n="roles.admin">Administrador</option>
                                <option value="Profesor" data-i18n="roles.teacher">Profesor</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label for="edit-user-academy" class="block text-sm font-medium text-gray-700 mb-2">
                                <span data-i18n="users.form.academy">Academia</span>
                            </label>
                            <select id="edit-user-academy"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                                <option value="">Seleccione una academia</option>
                                <option value="Academia en Software">Academia en Software</option>
                                <option value="Academia en Sistemas">Academia en Sistemas</option>
                                <option value="Academia en Redes">Academia en Redes</option>
                                <option value="Academia en Base de Datos">Academia en Base de Datos</option>
                                <option value="Academia en Inteligencia Artificial">Academia en Inteligencia Artificial</option>
                                <option value="Academia en Seguridad Informática">Academia en Seguridad Informática</option>
                                <option value="Academia en Desarrollo Web">Academia en Desarrollo Web</option>
                                <option value="Academia en Móviles">Academia en Móviles</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="edit-user-status" class="block text-sm font-medium text-gray-700 mb-2">
                                <span data-i18n="users.form.status">Estado</span> <span class="text-red-500">*</span>
                            </label>
                            <select id="edit-user-status" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                                <option value="Activo" data-i18n="status.active">Activo</option>
                                <option value="Inactivo" data-i18n="status.inactive">Inactivo</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="flex justify-end gap-3 pt-4 border-t border-gray-200">
                        <button type="button" id="cancel-edit-user" class="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors" data-i18n="common.cancel">
                            Cancelar
                        </button>
                        <button type="submit" class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                            <i class="fas fa-save"></i>
                            <span data-i18n="common.saveChanges">Guardar Cambios</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

// Modal de Eliminación de Usuario
function createDeleteUserModal() {
    return `
        <div id="delete-user-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden fade-in">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 slide-in">
                <div class="p-6 border-b border-gray-200">
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-bold text-gray-800" data-i18n="users.confirmDelete">Confirmar Eliminación</h3>
                        <button id="close-delete-user-modal" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                </div>
                
                <div class="p-6">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="p-3 bg-red-100 rounded-full">
                            <i class="fas fa-exclamation-triangle text-red-500 text-xl"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800" data-i18n="users.deleteConfirmation">¿Está seguro de eliminar este usuario?</h4>
                            <p class="text-sm text-gray-500 mt-1" data-i18n="users.deleteWarning">Esta acción no se puede deshacer.</p>
                        </div>
                    </div>
                    
                    <div class="bg-red-50 p-4 rounded-lg mb-6">
                        <p class="text-sm text-gray-800 font-medium" id="delete-user-name"></p>
                        <p class="text-xs text-gray-500 mt-1" id="delete-user-details"></p>
                    </div>
                    
                    <input type="hidden" id="delete-user-id">
                    
                    <div class="flex justify-end gap-3">
                        <button type="button" id="cancel-delete-user" class="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors" data-i18n="common.cancel">
                            Cancelar
                        </button>
                        <button type="button" id="confirm-delete-user" class="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2">
                            <i class="fas fa-trash"></i>
                            <span data-i18n="users.deleteUser">Eliminar Usuario</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Modal de Edición de Laboratorio
function createEditLaboratoryModal() {
    return `
        <div id="edit-laboratory-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden fade-in">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 slide-in">
                <div class="p-6 border-b border-gray-200">
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-bold text-gray-800" id="edit-laboratory-modal-title" data-i18n="laboratories.editLaboratory">Editar Laboratorio</h3>
                        <button id="close-edit-laboratory-modal" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                </div>
                
                <form id="edit-laboratory-form" class="p-6">
                    <input type="hidden" id="edit-laboratory-id">
                    
                    <div class="mb-6">
                        <label for="edit-laboratory-name" class="block text-sm font-medium text-gray-700 mb-2">
                            <span data-i18n="laboratories.form.name">Nombre del Laboratorio</span> <span class="text-red-500">*</span>
                        </label>
                        <input type="text" id="edit-laboratory-name" required placeholder="Ej: Laboratorio de Química"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                    </div>
                    
                    <div class="mb-6">
                        <label for="edit-laboratory-building" class="block text-sm font-medium text-gray-700 mb-2">
                            <span data-i18n="laboratories.form.building">Edificio</span> <span class="text-red-500">*</span>
                        </label>
                        <input type="text" id="edit-laboratory-building" required placeholder="Ej: Edificio de Ciencias"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                    </div>
                    
                    <div class="flex justify-end gap-3 pt-4 border-t border-gray-200">
                        <button type="button" id="cancel-edit-laboratory" class="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors" data-i18n="common.cancel">
                            Cancelar
                        </button>
                        <button type="submit" class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                            <i class="fas fa-save"></i>
                            <span data-i18n="common.saveChanges">Guardar Cambios</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

// Modal de Eliminación de Laboratorio
function createDeleteLaboratoryModal() {
    return `
        <div id="delete-laboratory-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden fade-in">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 slide-in">
                <div class="p-6 border-b border-gray-200">
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-bold text-gray-800" data-i18n="laboratories.confirmDelete">Confirmar Eliminación</h3>
                        <button id="close-delete-laboratory-modal" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                </div>
                
                <div class="p-6">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="p-3 bg-red-100 rounded-full">
                            <i class="fas fa-exclamation-triangle text-red-500 text-xl"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800" data-i18n="laboratories.deleteConfirmation">¿Está seguro de eliminar este laboratorio?</h4>
                            <p class="text-sm text-gray-500 mt-1" data-i18n="laboratories.deleteWarning">Esta acción no se puede deshacer.</p>
                        </div>
                    </div>
                    
                    <div class="bg-red-50 p-4 rounded-lg mb-6">
                        <p class="text-sm text-gray-800 font-medium" id="delete-laboratory-name"></p>
                        <p class="text-xs text-gray-500 mt-1" id="delete-laboratory-details"></p>
                    </div>
                    
                    <input type="hidden" id="delete-laboratory-id">
                    
                    <div class="flex justify-end gap-3">
                        <button type="button" id="cancel-delete-laboratory" class="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors" data-i18n="common.cancel">
                            Cancelar
                        </button>
                        <button type="button" id="confirm-delete-laboratory" class="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2">
                            <i class="fas fa-trash"></i>
                            <span data-i18n="laboratories.deleteLaboratory">Eliminar Laboratorio</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Modal de Cerrar Sesión
function createLogoutModal() {
    return `
        <div id="logout-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden fade-in">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 slide-in">
                <div class="p-6 border-b border-gray-200">
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-bold text-gray-800" data-i18n="menu.logout">Cerrar Sesión</h3>
                        <button id="close-logout-modal" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                </div>
                
                <div class="p-6">
                    <div class="flex items-center justify-center mb-4">
                        <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                            <i class="fas fa-sign-out-alt text-blue-500 text-2xl"></i>
                        </div>
                    </div>
                    <p class="text-center text-gray-600 mb-6" data-i18n="logout.confirmation">
                        ¿Está seguro de que desea cerrar sesión?
                    </p>
                    
                    <div class="flex justify-end gap-3 pt-4">
                        <button id="cancel-logout" class="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors" data-i18n="common.cancel">
                            Cancelar
                        </button>
                        <button id="confirm-logout" class="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2">
                            <i class="fas fa-sign-out-alt"></i>
                            <span data-i18n="menu.logout">Cerrar Sesión</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Modal de Detalles de Práctica
function createPracticeDetailsModal(practice) {
    const statusColor = getStatusColor(practice.status);
    const statusText = getStatusText(practice.status);
    
    return `
        <div id="practice-detail-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 fade-in">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 slide-in">
                <div class="p-6 border-b border-gray-200">
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-bold text-gray-800">Información de Práctica</h3>
                        <button class="close-detail-modal text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                </div>
                <div class="p-6">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Práctica:</label>
                            <p class="mt-1 text-sm text-gray-900">${practice.practice}</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Profesor:</label>
                            <p class="mt-1 text-sm text-gray-900">${practice.professor}</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Asignatura:</label>
                            <p class="mt-1 text-sm text-gray-900">${practice.subject}</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Estado:</label>
                            <span class="mt-1 inline-flex px-2 text-xs font-semibold rounded-full ${statusColor}">
                                ${statusText}
                            </span>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Laboratorio:</label>
                            <p class="mt-1 text-sm text-gray-900">${practice.lab}</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Fecha:</label>
                            <p class="mt-1 text-sm text-gray-900">${formatDate(practice.date)} ${practice.time || ''}</p>
                        </div>
                        ${practice.objective ? `
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Objetivo:</label>
                            <p class="mt-1 text-sm text-gray-900">${practice.objective}</p>
                        </div>
                        ` : ''}
                    </div>
                    <div class="mt-6 flex justify-end space-x-3">
                        <button class="edit-practice-from-modal px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-700 transition-colors" data-id="${practice.id}">
                            Editar
                        </button>
                        <button class="close-detail-modal px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Funciones para abrir modales
function openNewPracticeModal() {
    const modal = createEditPracticeModal();
    document.getElementById('modals-container').innerHTML = modal;
    
    // Configurar modal para nueva práctica
    document.getElementById('edit-modal-title').textContent = 'Nueva Práctica';
    document.getElementById('edit-practice-id').value = '';
    document.getElementById('edit-practice-form').reset();
    
    // Cargar laboratorios en el select
    loadLaboratoriesSelect();
    
    // Mostrar modal
    const editModal = document.getElementById('edit-modal');
    editModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
    
    // Configurar event listeners del modal
    setupEditPracticeModalListeners();
}

function openEditModal(practiceId) {
    const practice = getPracticeById(practiceId);
    if (!practice) return;
    
    const modal = createEditPracticeModal();
    document.getElementById('modals-container').innerHTML = modal;
    
    // Llenar formulario con datos de la práctica
    document.getElementById('edit-modal-title').textContent = 'Editar Práctica';
    document.getElementById('edit-practice-id').value = practice.id;
    document.getElementById('edit-practice-date').value = practice.date;
    document.getElementById('edit-practice-time').value = practice.time || '';
    document.getElementById('edit-practice-name').value = practice.practice;
    document.getElementById('edit-practice-professor').value = practice.professor;
    document.getElementById('edit-practice-subject').value = practice.subject;
    document.getElementById('edit-practice-objective').value = practice.objective || '';
    document.getElementById('edit-practice-status').value = practice.status;
    
    // Cargar laboratorios en el select
    loadLaboratoriesSelect();
    
    // Establecer laboratorio seleccionado
    setTimeout(() => {
        const labSelect = document.getElementById('edit-practice-lab');
        if (labSelect && practice.lab) {
            for (let i = 0; i < labSelect.options.length; i++) {
                if (labSelect.options[i].value.includes(practice.lab)) {
                    labSelect.selectedIndex = i;
                    break;
                }
            }
        }
    }, 100);
    
    // Mostrar modal
    const editModal = document.getElementById('edit-modal');
    editModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
    
    // Configurar event listeners del modal
    setupEditPracticeModalListeners();
}

function openDeleteModal(practiceId, practiceName, practiceProfessor, practiceDate) {
    const modal = createDeletePracticeModal();
    document.getElementById('modals-container').innerHTML = modal;
    
    // Llenar información de la práctica a eliminar
    document.getElementById('delete-practice-id').value = practiceId;
    document.getElementById('delete-practice-name').textContent = practiceName;
    document.getElementById('delete-practice-details').textContent = `${practiceProfessor} - ${practiceDate}`;
    
    // Mostrar modal
    const deleteModal = document.getElementById('delete-modal');
    deleteModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
    
    // Configurar event listeners del modal
    setupDeletePracticeModalListeners();
}

function openNewUserModal() {
    const modal = createEditUserModal();
    document.getElementById('modals-container').innerHTML = modal;
    
    // Configurar modal para nuevo usuario
    document.getElementById('edit-user-modal-title').textContent = 'Agregar Usuario';
    document.getElementById('edit-user-id').value = '';
    document.getElementById('edit-user-form').reset();
    
    // Mostrar modal
    const editUserModal = document.getElementById('edit-user-modal');
    editUserModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
    
    // Configurar event listeners del modal
    setupEditUserModalListeners();
}

function openEditUserModal(userId) {
    const user = getUserById(userId);
    if (!user) return;
    
    const modal = createEditUserModal();
    document.getElementById('modals-container').innerHTML = modal;
    
    // Llenar formulario con datos del usuario
    document.getElementById('edit-user-modal-title').textContent = 'Editar Usuario';
    document.getElementById('edit-user-id').value = user.id;
    document.getElementById('edit-user-name').value = user.name;
    document.getElementById('edit-user-username').value = user.username;
    document.getElementById('edit-user-email').value = user.email;
    document.getElementById('edit-user-role').value = user.role;
    document.getElementById('edit-user-academy').value = user.academy || '';
    document.getElementById('edit-user-status').value = user.status;
    
    // Mostrar modal
    const editUserModal = document.getElementById('edit-user-modal');
    editUserModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
    
    // Configurar event listeners del modal
    setupEditUserModalListeners();
}

function openDeleteUserModal(userId, userName) {
    const modal = createDeleteUserModal();
    document.getElementById('modals-container').innerHTML = modal;
    
    // Llenar información del usuario a eliminar
    document.getElementById('delete-user-id').value = userId;
    document.getElementById('delete-user-name').textContent = userName;
    document.getElementById('delete-user-details').textContent = `Usuario: ${userName}`;
    
    // Mostrar modal
    const deleteUserModal = document.getElementById('delete-user-modal');
    deleteUserModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
    
    // Configurar event listeners del modal
    setupDeleteUserModalListeners();
}

function openNewLaboratoryModal() {
    const modal = createEditLaboratoryModal();
    document.getElementById('modals-container').innerHTML = modal;
    
    // Configurar modal para nuevo laboratorio
    document.getElementById('edit-laboratory-modal-title').textContent = 'Agregar Laboratorio';
    document.getElementById('edit-laboratory-id').value = '';
    document.getElementById('edit-laboratory-form').reset();
    
    // Mostrar modal
    const editLaboratoryModal = document.getElementById('edit-laboratory-modal');
    editLaboratoryModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
    
    // Configurar event listeners del modal
    setupEditLaboratoryModalListeners();
}

function openEditLaboratoryModal(laboratoryId) {
    const laboratory = getLaboratoryById(laboratoryId);
    if (!laboratory) return;
    
    const modal = createEditLaboratoryModal();
    document.getElementById('modals-container').innerHTML = modal;
    
    // Llenar formulario con datos del laboratorio
    document.getElementById('edit-laboratory-modal-title').textContent = 'Editar Laboratorio';
    document.getElementById('edit-laboratory-id').value = laboratory.id;
    document.getElementById('edit-laboratory-name').value = laboratory.name;
    document.getElementById('edit-laboratory-building').value = laboratory.building;
    
    // Mostrar modal
    const editLaboratoryModal = document.getElementById('edit-laboratory-modal');
    editLaboratoryModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
    
    // Configurar event listeners del modal
    setupEditLaboratoryModalListeners();
}

function openDeleteLaboratoryModal(laboratoryId, laboratoryName, laboratoryBuilding) {
    const modal = createDeleteLaboratoryModal();
    document.getElementById('modals-container').innerHTML = modal;
    
    // Llenar información del laboratorio a eliminar
    document.getElementById('delete-laboratory-id').value = laboratoryId;
    document.getElementById('delete-laboratory-name').textContent = laboratoryName;
    document.getElementById('delete-laboratory-details').textContent = `Edificio: ${laboratoryBuilding}`;
    
    // Mostrar modal
    const deleteLaboratoryModal = document.getElementById('delete-laboratory-modal');
    deleteLaboratoryModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
    
    // Configurar event listeners del modal
    setupDeleteLaboratoryModalListeners();
}

function openEditReportModal(reportId) {
    // Usar el mismo modal que para prácticas
    openEditModal(reportId);
}

function openDeleteReportModal(reportId, reportName, reportProfessor, reportDate) {
    // Usar el mismo modal que para prácticas
    openDeleteModal(reportId, reportName, reportProfessor, reportDate);
}

function showPracticeDetailsModal(practice) {
    const modal = createPracticeDetailsModal(practice);
    document.getElementById('modals-container').innerHTML = modal;
    
    const detailModal = document.getElementById('practice-detail-modal');
    detailModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('header-container').classList.add('modal-open');
    
    // Configurar event listeners del modal
    setupPracticeDetailsModalListeners();
}

// Funciones auxiliares para modales
function loadLaboratoriesSelect() {
    const labSelect = document.getElementById('edit-practice-lab');
    if (!labSelect) return;
    
    // Limpiar opciones existentes excepto la primera
    while (labSelect.options.length > 1) {
        labSelect.remove(1);
    }
    
    // Agregar laboratorios disponibles
    AppState.laboratoriesData.forEach(lab => {
        const option = document.createElement('option');
        option.value = `${lab.name} (${lab.building})`;
        option.textContent = `${lab.name} - ${lab.building}`;
        option.dataset.labId = lab.id;
        labSelect.appendChild(option);
    });
    
    // Agregar opción "Otro" para laboratorios no listados
    const otherOption = document.createElement('option');
    otherOption.value = 'Otro';
    otherOption.textContent = 'Otro (especificar)';
    labSelect.appendChild(otherOption);
    
    // Agregar event listener para mostrar campo de texto cuando se selecciona "Otro"
    labSelect.addEventListener('change', function() {
        manageOtherLabInput(this.value === 'Otro');
    });
}

function manageOtherLabInput(show) {
    let otherLabInput = document.getElementById('other-lab-input');
    const labSelect = document.getElementById('edit-practice-lab');
    
    if (!labSelect) return;
    
    if (show) {
        if (!otherLabInput) {
            otherLabInput = document.createElement('input');
            otherLabInput.type = 'text';
            otherLabInput.id = 'other-lab-input';
            otherLabInput.placeholder = 'Especifique el laboratorio/aula';
            otherLabInput.className = 'w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors mt-2';
            
            // Insertar después del select
            labSelect.parentNode.appendChild(otherLabInput);
        } else {
            otherLabInput.classList.remove('hidden');
        }
        
        labSelect.required = false;
        otherLabInput.required = true;
    } else {
        if (otherLabInput) {
            otherLabInput.classList.add('hidden');
            otherLabInput.required = false;
        }
        
        labSelect.required = true;
    }
}

// Configurar event listeners de modales
function setupEditPracticeModalListeners() {
    const editModal = document.getElementById('edit-modal');
    const closeEditModal = document.getElementById('close-edit-modal');
    const cancelEdit = document.getElementById('cancel-edit');
    const editPracticeForm = document.getElementById('edit-practice-form');
    
    // Cerrar modal
    function closeEditModalFunc() {
        editModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        document.getElementById('header-container').classList.remove('modal-open');
        manageOtherLabInput(false);
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
    
    // Envío del formulario
    if (editPracticeForm) {
        editPracticeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const practiceId = parseInt(document.getElementById('edit-practice-id').value);
            const practiceDate = document.getElementById('edit-practice-date').value;
            const practiceTime = document.getElementById('edit-practice-time').value;
            const practiceName = document.getElementById('edit-practice-name').value;
            const practiceProfessor = document.getElementById('edit-practice-professor').value;
            const practiceSubject = document.getElementById('edit-practice-subject').value;
            const practiceObjective = document.getElementById('edit-practice-objective').value;
            const practiceStatus = document.getElementById('edit-practice-status').value;
            
            // Obtener laboratorio
            let practiceLab = document.getElementById('edit-practice-lab').value;
            let practiceLabId = null;
            let practiceLabName = practiceLab;
            
            if (practiceLab === 'Otro') {
                const otherLabInput = document.getElementById('other-lab-input');
                if (otherLabInput) {
                    practiceLab = otherLabInput.value;
                    practiceLabName = practiceLab;
                }
            } else {
                const labSelect = document.getElementById('edit-practice-lab');
                const selectedOption = labSelect.options[labSelect.selectedIndex];
                practiceLabId = selectedOption.dataset.labId ? parseInt(selectedOption.dataset.labId) : null;
                
                const lab = AppState.laboratoriesData.find(l => l.id === practiceLabId);
                if (lab) {
                    practiceLabName = lab.name;
                }
            }
            
            if (practiceId) {
                // Actualizar práctica existente
                const updatedPractice = updatePractice(practiceId, {
                    date: practiceDate,
                    time: practiceTime,
                    practice: practiceName,
                    professor: practiceProfessor,
                    subject: practiceSubject,
                    objective: practiceObjective,
                    lab: practiceLab,
                    labId: practiceLabId,
                    labName: practiceLabName,
                    status: practiceStatus
                });
                
                if (updatedPractice) {
                    showSuccessMessage('Práctica actualizada correctamente');
                    
                    // Actualizar dashboard
                    if (window.updateDashboardStats) {
                        window.updateDashboardStats();
                    }
                    
                    // Actualizar agenda
                    if (window.updateAgendaAfterSave) {
                        window.updateAgendaAfterSave(updatedPractice);
                    }
                }
            } else {
                // Crear nueva práctica
                const newPractice = addPractice({
                    date: practiceDate,
                    time: practiceTime,
                    practice: practiceName,
                    professor: practiceProfessor,
                    subject: practiceSubject,
                    objective: practiceObjective,
                    lab: practiceLab,
                    labId: practiceLabId,
                    labName: practiceLabName,
                    status: practiceStatus
                });
                
                showSuccessMessage('Práctica creada correctamente');
                
                // Actualizar dashboard
                if (window.updateDashboardStats) {
                    window.updateDashboardStats();
                }
                
                // Actualizar agenda
                if (window.updateAgendaAfterSave) {
                    window.updateAgendaAfterSave(newPractice);
                }
            }
            
            // Actualizar tablas
            if (window.initializePracticesTable) {
                window.initializePracticesTable();
            }
            
            if (window.initializeReportsTable) {
                window.initializeReportsTable();
            }
            
            // Cerrar modal
            closeEditModalFunc();
        });
    }
}

function setupDeletePracticeModalListeners() {
    const deleteModal = document.getElementById('delete-modal');
    const closeDeleteModal = document.getElementById('close-delete-modal');
    const cancelDelete = document.getElementById('cancel-delete');
    const confirmDelete = document.getElementById('confirm-delete');
    
    // Cerrar modal
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
    
    // Confirmar eliminación
    if (confirmDelete) {
        confirmDelete.addEventListener('click', function() {
            const practiceId = parseInt(document.getElementById('delete-practice-id').value);
            
            // Actualizar agenda antes de eliminar
            if (window.updateAgendaAfterDelete) {
                window.updateAgendaAfterDelete(practiceId);
            }
            
            // Eliminar práctica
            const deleted = deletePractice(practiceId);
            
            if (deleted) {
                showSuccessMessage('Práctica eliminada correctamente');
                
                // Actualizar dashboard
                if (window.updateDashboardStats) {
                    window.updateDashboardStats();
                }
                
                // Actualizar tablas
                if (window.initializePracticesTable) {
                    window.initializePracticesTable();
                }
                
                if (window.initializeReportsTable) {
                    window.initializeReportsTable();
                }
            }
            
            // Cerrar modal
            closeDeleteModalFunc();
        });
    }
}

function setupEditUserModalListeners() {
    const editUserModal = document.getElementById('edit-user-modal');
    const closeEditUserModal = document.getElementById('close-edit-user-modal');
    const cancelEditUser = document.getElementById('cancel-edit-user');
    const editUserForm = document.getElementById('edit-user-form');
    
    // Cerrar modal
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
    
    // Envío del formulario
    if (editUserForm) {
        editUserForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const userId = parseInt(document.getElementById('edit-user-id').value);
            const userName = document.getElementById('edit-user-name').value;
            const userUsername = document.getElementById('edit-user-username').value;
            const userEmail = document.getElementById('edit-user-email').value;
            const userRole = document.getElementById('edit-user-role').value;
            const userAcademy = document.getElementById('edit-user-academy').value;
            const userStatus = document.getElementById('edit-user-status').value;
            
            if (userId) {
                // Actualizar usuario existente
                updateUser(userId, {
                    name: userName,
                    username: userUsername,
                    email: userEmail,
                    role: userRole,
                    academy: userRole === 'Profesor' ? userAcademy : '',
                    status: userStatus
                });
                showSuccessMessage('Usuario actualizado correctamente');
            } else {
                // Crear nuevo usuario
                addUser({
                    name: userName,
                    username: userUsername,
                    email: userEmail,
                    role: userRole,
                    academy: userRole === 'Profesor' ? userAcademy : '',
                    status: userStatus
                });
                showSuccessMessage('Usuario creado correctamente');
            }
            
            // Actualizar tabla de usuarios
            if (window.initializeUsersTable) {
                window.initializeUsersTable();
            }
            
            closeEditUserModalFunc();
        });
    }
}

function setupDeleteUserModalListeners() {
    const deleteUserModal = document.getElementById('delete-user-modal');
    const closeDeleteUserModal = document.getElementById('close-delete-user-modal');
    const cancelDeleteUser = document.getElementById('cancel-delete-user');
    const confirmDeleteUser = document.getElementById('confirm-delete-user');
    
    // Cerrar modal
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
    
    // Confirmar eliminación
    if (confirmDeleteUser) {
        confirmDeleteUser.addEventListener('click', function() {
            const userId = parseInt(document.getElementById('delete-user-id').value);
            
            const deleted = deleteUser(userId);
            
            if (deleted) {
                showSuccessMessage('Usuario eliminado correctamente');
                
                // Actualizar tabla de usuarios
                if (window.initializeUsersTable) {
                    window.initializeUsersTable();
                }
            }
            
            closeDeleteUserModalFunc();
        });
    }
}

function setupEditLaboratoryModalListeners() {
    const editLaboratoryModal = document.getElementById('edit-laboratory-modal');
    const closeEditLaboratoryModal = document.getElementById('close-edit-laboratory-modal');
    const cancelEditLaboratory = document.getElementById('cancel-edit-laboratory');
    const editLaboratoryForm = document.getElementById('edit-laboratory-form');
    
    // Cerrar modal
    function closeEditLaboratoryModalFunc() {
        editLaboratoryModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        document.getElementById('header-container').classList.remove('modal-open');
    }
    
    if (closeEditLaboratoryModal) {
        closeEditLaboratoryModal.addEventListener('click', closeEditLaboratoryModalFunc);
    }
    
    if (cancelEditLaboratory) {
        cancelEditLaboratory.addEventListener('click', closeEditLaboratoryModalFunc);
    }
    
    if (editLaboratoryModal) {
        editLaboratoryModal.addEventListener('click', function(e) {
            if (e.target === editLaboratoryModal) {
                closeEditLaboratoryModalFunc();
            }
        });
    }
    
    // Envío del formulario
    if (editLaboratoryForm) {
        editLaboratoryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const laboratoryId = parseInt(document.getElementById('edit-laboratory-id').value);
            const laboratoryName = document.getElementById('edit-laboratory-name').value;
            const laboratoryBuilding = document.getElementById('edit-laboratory-building').value;
            
            if (laboratoryId) {
                // Actualizar laboratorio existente
                updateLaboratory(laboratoryId, {
                    name: laboratoryName,
                    building: laboratoryBuilding
                });
                showSuccessMessage('Laboratorio actualizado correctamente');
            } else {
                // Crear nuevo laboratorio
                addLaboratory({
                    name: laboratoryName,
                    building: laboratoryBuilding
                });
                showSuccessMessage('Laboratorio creado correctamente');
            }
            
            // Actualizar tablas
            if (window.initializeLaboratoriesTable) {
                window.initializeLaboratoriesTable();
            }
            
            if (window.initializeLabSelector) {
                window.initializeLabSelector();
            }
            
            closeEditLaboratoryModalFunc();
        });
    }
}

function setupDeleteLaboratoryModalListeners() {
    const deleteLaboratoryModal = document.getElementById('delete-laboratory-modal');
    const closeDeleteLaboratoryModal = document.getElementById('close-delete-laboratory-modal');
    const cancelDeleteLaboratory = document.getElementById('cancel-delete-laboratory');
    const confirmDeleteLaboratory = document.getElementById('confirm-delete-laboratory');
    
    // Cerrar modal
    function closeDeleteLaboratoryModalFunc() {
        deleteLaboratoryModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        document.getElementById('header-container').classList.remove('modal-open');
    }
    
    if (closeDeleteLaboratoryModal) {
        closeDeleteLaboratoryModal.addEventListener('click', closeDeleteLaboratoryModalFunc);
    }
    
    if (cancelDeleteLaboratory) {
        cancelDeleteLaboratory.addEventListener('click', closeDeleteLaboratoryModalFunc);
    }
    
    if (deleteLaboratoryModal) {
        deleteLaboratoryModal.addEventListener('click', function(e) {
            if (e.target === deleteLaboratoryModal) {
                closeDeleteLaboratoryModalFunc();
            }
        });
    }
    
    // Confirmar eliminación
    if (confirmDeleteLaboratory) {
        confirmDeleteLaboratory.addEventListener('click', function() {
            const laboratoryId = parseInt(document.getElementById('delete-laboratory-id').value);
            
            const deleted = deleteLaboratory(laboratoryId);
            
            if (deleted) {
                showSuccessMessage('Laboratorio eliminado correctamente');
                
                // Actualizar tablas
                if (window.initializeLaboratoriesTable) {
                    window.initializeLaboratoriesTable();
                }
                
                if (window.initializeLabSelector) {
                    window.initializeLabSelector();
                }
                
                // Si el laboratorio eliminado estaba seleccionado en agenda
                if (AppState.selectedLabId === laboratoryId) {
                    if (window.showNoLabSelected) {
                        window.showNoLabSelected();
                    }
                    const labSelector = document.getElementById('lab-selector');
                    if (labSelector) {
                        labSelector.value = '';
                    }
                }
            } else {
                alert('No se puede eliminar el laboratorio porque tiene prácticas asignadas. Por favor, reasigne o elimine las prácticas primero.');
            }
            
            closeDeleteLaboratoryModalFunc();
        });
    }
}

function setupPracticeDetailsModalListeners() {
    const detailModal = document.getElementById('practice-detail-modal');
    const closeButtons = detailModal.querySelectorAll('.close-detail-modal');
    const editButton = detailModal.querySelector('.edit-practice-from-modal');
    
    // Cerrar modal
    function closeDetailModalFunc() {
        detailModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        document.getElementById('header-container').classList.remove('modal-open');
    }
    
    closeButtons.forEach(button => {
        button.addEventListener('click', closeDetailModalFunc);
    });
    
    if (detailModal) {
        detailModal.addEventListener('click', function(e) {
            if (e.target === detailModal) {
                closeDetailModalFunc();
            }
        });
    }
    
    // Editar práctica desde el modal
    if (editButton) {
        editButton.addEventListener('click', function() {
            const practiceId = parseInt(this.getAttribute('data-id'));
            closeDetailModalFunc();
            openEditModal(practiceId);
        });
    }
}

// Exportar funciones para uso global
window.createEditPracticeModal = createEditPracticeModal;
window.createDeletePracticeModal = createDeletePracticeModal;
window.createEditUserModal = createEditUserModal;
window.createDeleteUserModal = createDeleteUserModal;
window.createEditLaboratoryModal = createEditLaboratoryModal;
window.createDeleteLaboratoryModal = createDeleteLaboratoryModal;
window.createLogoutModal = createLogoutModal;
window.createPracticeDetailsModal = createPracticeDetailsModal;

window.openNewPracticeModal = openNewPracticeModal;
window.openEditModal = openEditModal;
window.openDeleteModal = openDeleteModal;
window.openNewUserModal = openNewUserModal;
window.openEditUserModal = openEditUserModal;
window.openDeleteUserModal = openDeleteUserModal;
window.openNewLaboratoryModal = openNewLaboratoryModal;
window.openEditLaboratoryModal = openEditLaboratoryModal;
window.openDeleteLaboratoryModal = openDeleteLaboratoryModal;
window.openEditReportModal = openEditReportModal;
window.openDeleteReportModal = openDeleteReportModal;
window.showPracticeDetailsModal = showPracticeDetailsModal;

window.loadLaboratoriesSelect = loadLaboratoriesSelect;
window.manageOtherLabInput = manageOtherLabInput;