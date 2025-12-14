-- ============================================
-- SCRIPT COMPLETO PARA LIMPIAR Y POBLAR BD
-- ============================================

-- Deshabilitar restricciones FK temporalmente
SET FOREIGN_KEY_CHECKS = 0;

-- 1. ELIMINAR TODOS LOS DATOS
DELETE FROM actividades;
DELETE FROM practicas;
DELETE FROM horarios_laboratorios;
DELETE FROM configuraciones;
DELETE FROM laboratorios;
DELETE FROM asignaturas;
DELETE FROM usuarios;

-- 2. REINICIAR AUTO_INCREMENT
ALTER TABLE actividades AUTO_INCREMENT = 1;
ALTER TABLE practicas AUTO_INCREMENT = 1;
ALTER TABLE horarios_laboratorios AUTO_INCREMENT = 1;
ALTER TABLE configuraciones AUTO_INCREMENT = 1;
ALTER TABLE laboratorios AUTO_INCREMENT = 1;
ALTER TABLE asignaturas AUTO_INCREMENT = 1;
ALTER TABLE usuarios AUTO_INCREMENT = 1;

-- Restaurar restricciones
SET FOREIGN_KEY_CHECKS = 1;

SELECT 'Base de datos limpiada exitosamente' as mensaje;

-- ============================================
-- 3. INSERT USUARIOS (PRIMERO)
-- ============================================
INSERT INTO usuarios (nombre, username, email, contrasena, rol, academia, estado) VALUES
('Administrador', 'admin', 'admin@universidad.edu', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Administrador', NULL, 'Activo'),
('Dr. Fued', 'fued', 'fued@universidad.edu', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Profesor', 'Academia en Software', 'Activo'),
('Prof. Estefano', 'estefano', 'estefano@universidad.edu', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Profesor', 'Academia en Sistemas', 'Activo'),
('Prof. Ricardo', 'ricardo', 'ricardo@universidad.edu', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Profesor', 'Academia en Redes', 'Activo'),
('Prof. Valeria', 'valeria', 'valeria@universidad.edu', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Profesor', 'Academia en Inteligencia Artificial', 'Activo'),
('Dr. García', 'garcia', 'garcia@universidad.edu', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Profesor', 'Academia en Base de Datos', 'Activo'),
('Mtra. López', 'lopez', 'lopez@universidad.edu', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Profesor', 'Academia en Desarrollo Web', 'Activo'),
('Prof. Martínez', 'martinez', 'martinez@universidad.edu', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Profesor', 'Academia en Seguridad Informática', 'Activo'),
('Ing. Rodríguez', 'rodriguez', 'rodriguez@universidad.edu', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Profesor', 'Academia en Móviles', 'Activo');

SELECT 'Usuarios insertados: ' as resultado, COUNT(*) as total FROM usuarios;

-- ============================================
-- 4. INSERT LABORATORIOS (SEGUNDO)
-- ============================================
INSERT INTO laboratorios (nombre, edificio, capacidad, estado) VALUES
('Laboratorio de Química', 'Edificio de Ciencias', 25, 'Disponible'),
('Laboratorio de Física', 'Edificio de Ciencias', 20, 'Disponible'),
('Laboratorio de Computación', 'Edificio Tecnológico', 30, 'Disponible'),
('Aula 4', 'Edificio Principal', 40, 'Disponible'),
('Laboratorio de Biología', 'Edificio de Ciencias', 22, 'Disponible'),
('Laboratorio de Electrónica', 'Edificio Tecnológico', 18, 'Disponible'),
('Laboratorio de Redes', 'Edificio Tecnológico', 15, 'Disponible'),
('Aula Magna', 'Edificio Principal', 100, 'Disponible'),
('Laboratorio de Investigación', 'Edificio de Posgrado', 10, 'Disponible');

SELECT 'Laboratorios insertados: ' as resultado, COUNT(*) as total FROM laboratorios;

-- ============================================
-- 5. INSERT ASIGNATURAS (TERCERO)
-- ============================================
INSERT INTO asignaturas (nombre, codigo, creditos, semestre) VALUES
('Programación Concurrente', 'PC101', 5, 5),
('Sistemas Operativos', 'SO201', 6, 4),
('Programación I', 'PI301', 4, 1),
('Liderazgo eq. Alto desempeño', 'LEAD401', 3, 7),
('Base de Datos', 'BD501', 5, 3),
('Redes de Computadoras', 'RC601', 6, 5),
('Inteligencia Artificial', 'IA701', 5, 8),
('Estructuras de Datos', 'ED801', 5, 2),
('Cálculo Diferencial', 'CD901', 4, 1),
('Física General', 'FG1001', 5, 2),
('Química Orgánica', 'QO1101', 4, 3),
('Ingeniería de Software', 'IS1201', 6, 6),
('Desarrollo Web', 'DW1301', 4, 4),
('Seguridad Informática', 'SI1401', 5, 7),
('Aplicaciones Móviles', 'AM1501', 5, 6),
('Machine Learning', 'ML1601', 5, 8),
('Administración de Proyectos', 'AP1701', 3, 7),
('Circuitos Eléctricos', 'CE1801', 5, 3),
('Álgebra Lineal', 'AL1901', 4, 2),
('Metodología de la Investigación', 'MI2001', 3, 5);

SELECT 'Asignaturas insertadas: ' as resultado, COUNT(*) as total FROM asignaturas;

-- ============================================
-- 6. INSERT HORARIOS_LABORATORIOS (CUARTO - SIMPLIFICADO)
-- ============================================
-- Solo algunos horarios básicos para pruebas
INSERT INTO horarios_laboratorios (laboratorio_id, dia_semana, hora_inicio, hora_fin, disponible) VALUES
-- Lab Computación (ID: 3)
(3, 'Lunes', '07:00:00', '09:00:00', TRUE),
(3, 'Lunes', '09:00:00', '11:00:00', TRUE),
(3, 'Martes', '07:00:00', '09:00:00', TRUE),
(3, 'Martes', '09:00:00', '11:00:00', TRUE),
(3, 'Miércoles', '07:00:00', '09:00:00', TRUE),
(3, 'Miércoles', '09:00:00', '11:00:00', TRUE),

-- Lab Física (ID: 2)
(2, 'Lunes', '08:00:00', '10:00:00', TRUE),
(2, 'Lunes', '10:00:00', '12:00:00', TRUE),
(2, 'Martes', '08:00:00', '10:00:00', TRUE),

-- Aula 4 (ID: 4)
(4, 'Lunes', '07:00:00', '21:00:00', TRUE),
(4, 'Martes', '07:00:00', '21:00:00', TRUE),
(4, 'Miércoles', '07:00:00', '21:00:00', TRUE),

-- Lab Química (ID: 1)
(1, 'Lunes', '09:00:00', '13:00:00', TRUE),
(1, 'Martes', '09:00:00', '13:00:00', TRUE);

SELECT 'Horarios laboratorios insertados: ' as resultado, COUNT(*) as total FROM horarios_laboratorios;

-- ============================================
-- 7. INSERT PRACTICAS (QUINTO - SIMPLIFICADO Y SEGURO)
-- ============================================
-- Fechas fijas para evitar problemas
INSERT INTO practicas (nombre, objetivo, fecha, hora, duracion_horas, estado, profesor_id, asignatura_id, laboratorio_id) VALUES
-- Lunes 18 Marzo - SIN SOLAPAMIENTOS
('Laboratorio MAC', 'Programación de hilos en web', '2024-03-18', '07:00:00', 2.0, 'programada', 2, 1, 3),
('Laboratorio Linux', 'Instalación de sistema operativo', '2024-03-18', '10:00:00', 2.0, 'confirmada', 3, 2, 3), -- 10:00, no 9:00
('Introducción a Python', 'Sintaxis básica', '2024-03-18', '13:00:00', 1.5, 'programada', 4, 3, 2),

-- Martes 19 Marzo
('Laboratorio Windows', 'Instalación de Windows', '2024-03-19', '09:00:00', 1.5, 'en-curso', 4, 3, 2),
('Modelado de BD', 'Diseño de esquemas', '2024-03-19', '14:00:00', 2.0, 'programada', 6, 5, 1),
('Configuración de Redes', 'Routers y switches', '2024-03-19', '16:00:00', 3.0, 'confirmada', 7, 6, 7),

-- Miércoles 20 Marzo
('Examen de conocimientos', 'Evaluación', '2024-03-20', '09:00:00', 3.0, 'programada', 5, 4, 4),
('Algoritmos de Búsqueda', 'BFS y DFS', '2024-03-20', '14:00:00', 2.0, 'programada', 8, 8, 3),

-- Prácticas pasadas
('Introducción Programación', 'Java básico', '2024-03-11', '10:00:00', 2.0, 'completada', 4, 3, 3),
('Bases de Datos NoSQL', 'MongoDB', '2024-03-12', '14:00:00', 2.5, 'completada', 6, 5, 3),

-- Prácticas canceladas (diferentes días/labs)
('Laboratorio Electrónica', 'Circuitos', '2024-03-19', '11:30:00', 2.0, 'cancelada', 4, 18, 6),
('Taller Investigación', 'Metodología', '2024-03-20', '16:00:00', 1.5, 'cancelada', 8, 20, 9);

SELECT 'Prácticas insertadas: ' as resultado, COUNT(*) as total FROM practicas;

-- ============================================
-- 8. INSERT CONFIGURACIONES (SEXTO)
-- ============================================
INSERT INTO configuraciones (clave, valor, tipo, categoria, descripcion) VALUES
('notificaciones_email', 'true', 'booleano', 'sistema', 'Notificaciones por email'),
('idioma', 'es', 'texto', 'sistema', 'Idioma del sistema'),
('registro_actividades', 'true', 'booleano', 'sistema', 'Registro de actividades'),
('horario_inicio', '07:00', 'texto', 'horarios', 'Hora inicio actividades'),
('horario_fin', '20:00', 'texto', 'horarios', 'Hora fin actividades'),
('duracion_minima', '0.5', 'numero', 'practicas', 'Duración mínima práctica'),
('duracion_maxima', '4', 'numero', 'practicas', 'Duración máxima práctica'),
('email_from', 'sistema@universidad.edu', 'texto', 'email', 'Email remitente');

SELECT 'Configuraciones insertadas: ' as resultado, COUNT(*) as total FROM configuraciones;

-- ============================================
-- 9. INSERT ACTIVIDADES (SÉPTIMO - ÚLTIMO)
-- ============================================
INSERT INTO actividades (usuario_id, tipo_accion, modulo, registro_id, descripcion, ip_address) VALUES
(1, 'login', 'sistema', NULL, 'Administrador inició sesión', '192.168.1.100'),
(2, 'crear', 'practicas', 1, 'Dr. Fued creó práctica "Laboratorio MAC"', '192.168.1.101'),
(3, 'confirmar', 'practicas', 2, 'Prof. Estefano confirmó práctica "Laboratorio Linux"', '192.168.1.102'),
(4, 'crear', 'practicas', 3, 'Prof. Ricardo creó práctica "Introducción a Python"', '192.168.1.103'),
(6, 'crear', 'practicas', 5, 'Dr. García creó práctica "Modelado de BD"', '192.168.1.105'),
(7, 'confirmar', 'practicas', 6, 'Mtra. López confirmó práctica "Configuración de Redes"', '192.168.1.106'),
(5, 'crear', 'practicas', 7, 'Prof. Valeria creó práctica "Examen de conocimientos"', '192.168.1.104'),
(8, 'crear', 'practicas', 8, 'Prof. Martínez creó práctica "Algoritmos de Búsqueda"', '192.168.1.107');

SELECT 'Actividades insertadas: ' as resultado, COUNT(*) as total FROM actividades;

-- ============================================
-- 10. VERIFICACIÓN FINAL
-- ============================================
SELECT '✅ BASE DE DATOS POBLADA EXITOSAMENTE' as titulo;
SELECT 'Resumen de datos:' as seccion;
SELECT 'usuarios' as tabla, COUNT(*) as registros FROM usuarios
UNION ALL SELECT 'laboratorios', COUNT(*) FROM laboratorios
UNION ALL SELECT 'asignaturas', COUNT(*) FROM asignaturas
UNION ALL SELECT 'practicas', COUNT(*) FROM practicas
UNION ALL SELECT 'horarios_laboratorios', COUNT(*) FROM horarios_laboratorios
UNION ALL SELECT 'configuraciones', COUNT(*) FROM configuraciones
UNION ALL SELECT 'actividades', COUNT(*) FROM actividades;