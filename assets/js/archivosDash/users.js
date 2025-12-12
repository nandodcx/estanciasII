// Módulo de Gestión de Usuarios

// Renderizar vista de usuarios
function renderUsersView() {
    console.log('renderUsersView llamado - Vista de usuarios renderizada');
    return `
        <div id="users-view" class="fade-in">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl font-bold text-gray-800" data-i18n="users.title">Gestión de Usuarios</h1>
                <button id="add-user-btn" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                    <i class="fas fa-user-plus"></i>
                    <span data-i18n="users.addUser">Agregar Usuario</span>
                </button>
            </div>
            
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200" id="users-table">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-i18n="users.table.user">
                                    Usuario
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-i18n="users.table.role">
                                    Rol
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-i18n="users.table.email">
                                    Correo
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-i18n="users.table.academy">
                                    Academia
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-i18n="users.table.status">
                                    Estado
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-i18n="users.table.lastAccess">
                                    Último Acceso
                                </th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-i18n="users.table.actions">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody id="users-table-body" class="bg-white divide-y divide-gray-200">
                            <!-- Los datos se cargarán dinámicamente -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// ========== FUNCIONES AUXILIARES ==========

// Obtener iniciales del nombre
function getInitials(name) {
    if (!name) return '??';
    return name.split(' ')
        .map(part => part[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
}

// Obtener color según el rol
function getRoleColor(role) {
    const roleLower = role.toLowerCase();
    
    if (roleLower.includes('admin')) return 'bg-purple-100 text-purple-800';
    if (roleLower.includes('profesor') || roleLower.includes('teacher')) return 'bg-blue-100 text-blue-800';
    if (roleLower.includes('estudiante') || roleLower.includes('student')) return 'bg-green-100 text-green-800';
    if (roleLower.includes('asistente') || roleLower.includes('assistant')) return 'bg-yellow-100 text-yellow-800';
    
    return 'bg-gray-100 text-gray-800';
}

// Obtener texto traducido del rol
function getRoleText(role) {
    const roleLower = role.toLowerCase();
    
    if (roleLower.includes('admin')) return 'Administrador';
    if (roleLower.includes('profesor') || roleLower.includes('teacher')) return 'Docente';
    if (roleLower.includes('estudiante') || roleLower.includes('student')) return 'Estudiante';
    if (roleLower.includes('asistente') || roleLower.includes('assistant')) return 'Asistente';
    
    return role;
}

// ========== INICIALIZAR TABLA DE USUARIOS ==========

function initializeUsersTable() {
    console.log('initializeUsersTable llamado');
    
    const tableBody = document.getElementById('users-table-body');
    if (!tableBody) {
        console.error('ERROR: No se encontró el elemento users-table-body');
        console.log('Buscando en el documento:', document.querySelector('#users-table-body'));
        return;
    }
    
    // Verificar que AppState existe
    if (!window.AppState) {
        console.error('ERROR: AppState no está definido');
        return;
    }
    
    // Verificar que usersData existe
    if (!window.AppState.usersData || !Array.isArray(window.AppState.usersData)) {
        console.error('ERROR: AppState.usersData no es un array válido');
        console.log('AppState.usersData:', window.AppState.usersData);
        return;
    }
    
    console.log('Usuarios a mostrar:', window.AppState.usersData.length);
    
    // Limpiar tabla
    tableBody.innerHTML = '';
    
    // Generar filas de la tabla
    window.AppState.usersData.forEach((item) => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50 transition-colors';
        
        // Determinar colores según estado y rol
        const statusColor = (item.status === 'Activo' || item.status === 'active') 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800';
        
        const statusText = item.status || 'Desconocido';
        const roleColor = getRoleColor(item.role);
        const roleText = getRoleText(item.role);
        
        // Crear fila HTML
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <div class="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                            ${getInitials(item.name)}
                        </div>
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                            ${item.name || 'Sin nombre'}
                        </div>
                        <div class="text-sm text-gray-500">
                            ${item.username || 'Sin usuario'}
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${roleColor}">
                    ${roleText}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${item.email || 'Sin correo'}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${item.academy || '-'}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}">
                    ${statusText}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${item.lastAccess || '-'}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="edit-user-btn text-indigo-600 hover:text-indigo-900 mr-3 px-2 py-1 hover:bg-indigo-50 rounded transition-colors"
                        data-id="${item.id}">
                    Editar
                </button>
                <button class="delete-user-btn text-red-600 hover:text-red-900 px-2 py-1 hover:bg-red-50 rounded transition-colors"
                        data-id="${item.id}"
                        data-name="${item.name}">
                    Eliminar
                </button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    console.log('Tabla renderizada con', window.AppState.usersData.length, 'usuarios');
    
    // Configurar event listeners después de un pequeño delay
    setTimeout(() => {
        // Event listeners para botones de editar
        document.querySelectorAll('.edit-user-btn').forEach(button => {
            button.addEventListener('click', function() {
                const userId = parseInt(this.getAttribute('data-id'));
                console.log('Editar usuario ID:', userId);
                
                // Buscar usuario
                const user = window.AppState.usersData.find(u => u.id === userId);
                if (user) {
                    console.log('Usuario encontrado:', user.name);
                    
                    // Abrir modal de edición si existe la función
                    if (typeof window.openEditUserModal === 'function') {
                        window.openEditUserModal(userId);
                    } else {
                        alert(`Editar usuario: ${user.name}\nID: ${userId}\n\nFunción openEditUserModal no disponible`);
                    }
                }
            });
        });
        
        // Event listeners para botones de eliminar
        document.querySelectorAll('.delete-user-btn').forEach(button => {
            button.addEventListener('click', function() {
                const userId = parseInt(this.getAttribute('data-id'));
                const userName = this.getAttribute('data-name');
                console.log('Eliminar usuario ID:', userId, 'Nombre:', userName);
                
                // Abrir modal de eliminación si existe la función
                if (typeof window.openDeleteUserModal === 'function') {
                    window.openDeleteUserModal(userId, userName);
                } else {
                    if (confirm(`¿Está seguro de eliminar al usuario "${userName}"?`)) {
                        alert(`Usuario "${userName}" eliminado (simulado)`);
                        // Aquí iría la lógica real de eliminación
                    }
                }
            });
        });
        
        // Botón para agregar nuevo usuario
        const addUserBtn = document.getElementById('add-user-btn');
        if (addUserBtn) {
            addUserBtn.addEventListener('click', function() {
                console.log('Agregar nuevo usuario');
                
                if (typeof window.openNewUserModal === 'function') {
                    window.openNewUserModal();
                } else {
                    alert('Funcionalidad de agregar usuario no disponible');
                }
            });
        }
        
        console.log('Event listeners configurados para la tabla de usuarios');
    }, 100);
}

// ========== FUNCIONES PARA MODALES (simuladas si no existen) ==========

// Función para abrir modal de nuevo usuario (simulada si no existe)
if (typeof window.openNewUserModal === 'undefined') {
    window.openNewUserModal = function() {
        alert('Modal para agregar nuevo usuario\n\nEsta funcionalidad está en desarrollo.');
    };
}

// Función para abrir modal de editar usuario (simulada si no existe)
if (typeof window.openEditUserModal === 'undefined') {
    window.openEditUserModal = function(userId) {
        const user = window.AppState?.usersData?.find(u => u.id === userId);
        if (user) {
            alert(`Editar usuario:\n\nID: ${user.id}\nNombre: ${user.name}\nUsuario: ${user.username}\nEmail: ${user.email}\nRol: ${user.role}\n\nEsta funcionalidad está en desarrollo.`);
        }
    };
}

// Función para abrir modal de eliminar usuario (simulada si no existe)
if (typeof window.openDeleteUserModal === 'undefined') {
    window.openDeleteUserModal = function(userId, userName) {
        if (confirm(`¿Está seguro de eliminar al usuario "${userName}"?\n\nEsta acción no se puede deshacer.`)) {
            // Simular eliminación
            alert(`Usuario "${userName}" eliminado exitosamente (simulado).`);
            
            // Actualizar tabla (en una implementación real, esto actualizaría AppState y la tabla)
            console.log('Usuario eliminado (simulado):', userName);
        }
    };
}

// ========== EXPORTAR FUNCIONES ==========

// Asegurarse de que las funciones estén disponibles globalmente
if (typeof window !== 'undefined') {
    window.renderUsersView = renderUsersView;
    window.initializeUsersTable = initializeUsersTable;
    
    // También exportar funciones auxiliares por si se necesitan
    window.getInitials = getInitials;
    window.getRoleColor = getRoleColor;
    window.getRoleText = getRoleText;
    
    console.log('users.js cargado correctamente');
}