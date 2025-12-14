correjir reporte para rev-- ============================================
-- BASE DE DATOS: sistema_universitario
-- AUTOR: Sistema de Gestión de Prácticas
-- FECHA: 2024
-- ============================================

-- Crear base de datos
DROP DATABASE IF EXISTS system;
CREATE DATABASE sistema_universitario;
USE system;

-- ============================================
-- TABLAS PRINCIPALES
-- ============================================

-- Tabla: usuarios
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    rol ENUM('Administrador', 'Profesor') NOT NULL,
    academia VARCHAR(100),
    estado ENUM('Activo', 'Inactivo') DEFAULT 'Activo',
    ultimo_acceso TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_rol (rol),
    INDEX idx_estado (estado),
    INDEX idx_academia (academia)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla: laboratorios
CREATE TABLE laboratorios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    edificio VARCHAR(100) NOT NULL,
    capacidad INT DEFAULT 20,
    estado ENUM('Disponible', 'Mantenimiento', 'Ocupado') DEFAULT 'Disponible',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_edificio (edificio),
    INDEX idx_estado (estado)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla: asignaturas
CREATE TABLE asignaturas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(150) NOT NULL,
    codigo VARCHAR(20) UNIQUE NOT NULL,
    creditos INT DEFAULT 5,
    semestre INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_codigo (codigo),
    INDEX idx_semestre (semestre)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla: practicas
CREATE TABLE practicas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(200) NOT NULL,
    objetivo TEXT,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    duracion_horas DECIMAL(3,1) DEFAULT 1.0,
    estado ENUM('programada', 'confirmada', 'en-curso', 'completada', 'cancelada') DEFAULT 'programada',
    profesor_id INT NOT NULL,
    asignatura_id INT NOT NULL,
    laboratorio_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (profesor_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (asignatura_id) REFERENCES asignaturas(id) ON DELETE CASCADE,
    FOREIGN KEY (laboratorio_id) REFERENCES laboratorios(id) ON DELETE CASCADE,
    
    INDEX idx_fecha (fecha),
    INDEX idx_estado (estado),
    INDEX idx_profesor (profesor_id),
    INDEX idx_laboratorio (laboratorio_id),
    UNIQUE KEY uk_lab_fecha_hora (laboratorio_id, fecha, hora) -- Previene solapamientos
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla: actividades
CREATE TABLE actividades (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    tipo_accion ENUM('crear', 'editar', 'eliminar', 'confirmar', 'completar', 'cancelar', 'login', 'logout') NOT NULL,
    modulo ENUM('usuarios', 'practicas', 'laboratorios', 'asignaturas', 'sistema') NOT NULL,
    registro_id INT,
    descripcion TEXT,
    detalles JSON,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    
    INDEX idx_usuario (usuario_id),
    INDEX idx_modulo (modulo),
    INDEX idx_fecha_accion (created_at, tipo_accion)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla: configuraciones
CREATE TABLE configuraciones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    clave VARCHAR(50) UNIQUE NOT NULL,
    valor TEXT,
    tipo ENUM('texto', 'numero', 'booleano', 'json') DEFAULT 'texto',
    categoria VARCHAR(50) DEFAULT 'general',
    descripcion VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_clave (clave),
    INDEX idx_categoria (categoria)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla: horarios_laboratorios (horarios base)
CREATE TABLE horarios_laboratorios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    laboratorio_id INT NOT NULL,
    dia_semana ENUM('Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado') NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    disponible BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (laboratorio_id) REFERENCES laboratorios(id) ON DELETE CASCADE,
    
    UNIQUE KEY uk_lab_dia_hora (laboratorio_id, dia_semana, hora_inicio),
    INDEX idx_dia_disponible (dia_semana, disponible)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================
-- VISTAS
-- ============================================

-- Vista: vista_practicas_completas
CREATE VIEW vista_practicas_completas AS
SELECT 
    p.id,
    p.nombre as practica_nombre,
    p.objetivo,
    p.fecha,
    p.hora,
    p.duracion_horas,
    p.estado,
    DATE_FORMAT(p.created_at, '%d/%m/%Y %H:%i') as fecha_creacion,
    
    -- Información del profesor
    u.id as profesor_id,
    u.nombre as profesor_nombre,
    u.email as profesor_email,
    u.academia as profesor_academia,
    
    -- Información de asignatura
    a.id as asignatura_id,
    a.nombre as asignatura_nombre,
    a.codigo as asignatura_codigo,
    a.creditos,
    
    -- Información de laboratorio
    l.id as laboratorio_id,
    l.nombre as laboratorio_nombre,
    l.edificio,
    l.capacidad,
    l.estado as lab_estado
    
FROM practicas p
JOIN usuarios u ON p.profesor_id = u.id
JOIN asignaturas a ON p.asignatura_id = a.id
JOIN laboratorios l ON p.laboratorio_id = l.id
ORDER BY p.fecha DESC, p.hora DESC;

-- Vista: vista_dashboard_estadisticas
CREATE VIEW vista_dashboard_estadisticas AS
SELECT 
    -- Total de prácticas
    (SELECT COUNT(*) FROM practicas) as total_practicas,
    
    -- Prácticas este mes
    (SELECT COUNT(*) FROM practicas 
     WHERE MONTH(fecha) = MONTH(CURRENT_DATE) 
     AND YEAR(fecha) = YEAR(CURRENT_DATE)) as practicas_mes,
    
    -- Total de profesores activos
    (SELECT COUNT(*) FROM usuarios 
     WHERE rol = 'Profesor' AND estado = 'Activo') as total_profesores,
    
    -- Total de asignaturas
    (SELECT COUNT(*) FROM asignaturas) as total_asignaturas,
    
    -- Prácticas por estado
    (SELECT COUNT(*) FROM practicas WHERE estado = 'programada') as programadas,
    (SELECT COUNT(*) FROM practicas WHERE estado = 'confirmada') as confirmadas,
    (SELECT COUNT(*) FROM practicas WHERE estado = 'en-curso') as en_curso,
    (SELECT COUNT(*) FROM practicas WHERE estado = 'completada') as completadas,
    (SELECT COUNT(*) FROM practicas WHERE estado = 'cancelada') as canceladas,
    
    -- Laboratorios disponibles
    (SELECT COUNT(*) FROM laboratorios WHERE estado = 'Disponible') as labs_disponibles,
    
    -- Último mes comparación
    (SELECT COUNT(*) FROM practicas 
     WHERE fecha BETWEEN DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY) AND CURRENT_DATE) as ultimos_30_dias;

-- Vista: vista_proximas_practicas
CREATE VIEW vista_proximas_practicas AS
SELECT 
    p.id,
    p.nombre as practica,
    p.fecha,
    p.hora,
    p.estado,
    u.nombre as profesor,
    a.nombre as asignatura,
    l.nombre as laboratorio,
    l.edificio,
    DATEDIFF(p.fecha, CURDATE()) as dias_restantes,
    
    CASE 
        WHEN p.fecha = CURDATE() THEN 'Hoy'
        WHEN p.fecha = DATE_ADD(CURDATE(), INTERVAL 1 DAY) THEN 'Mañana'
        WHEN DATEDIFF(p.fecha, CURDATE()) <= 7 THEN 'Esta semana'
        WHEN DATEDIFF(p.fecha, CURDATE()) <= 30 THEN 'Este mes'
        ELSE 'Próximamente'
    END as proximidad
    
FROM practicas p
JOIN usuarios u ON p.profesor_id = u.id
JOIN asignaturas a ON p.asignatura_id = a.id
JOIN laboratorios l ON p.laboratorio_id = l.id
WHERE p.fecha >= CURDATE()
AND p.estado IN ('programada', 'confirmada')
ORDER BY p.fecha ASC, p.hora ASC;

-- Vista: vista_actividad_reciente
CREATE VIEW vista_actividad_reciente AS
SELECT 
    a.id,
    a.tipo_accion,
    a.modulo,
    a.descripcion,
    a.detalles,
    a.ip_address,
    DATE_FORMAT(a.created_at, '%d/%m/%Y %H:%i') as fecha_hora,
    TIMEDIFF(NOW(), a.created_at) as tiempo_transcurrido,
    
    u.id as usuario_id,
    u.nombre as usuario_nombre,
    u.rol as usuario_rol,
    
    CASE 
        WHEN TIMEDIFF(NOW(), a.created_at) < '01:00:00' THEN 'Hace menos de 1 hora'
        WHEN TIMEDIFF(NOW(), a.created_at) < '24:00:00' THEN 'Hoy'
        WHEN TIMEDIFF(NOW(), a.created_at) < '48:00:00' THEN 'Ayer'
        ELSE CONCAT('Hace ', FLOOR(HOUR(TIMEDIFF(NOW(), a.created_at)) / 24), ' días')
    END as tiempo_legible
    
FROM actividades a
JOIN usuarios u ON a.usuario_id = u.id
ORDER BY a.created_at DESC
LIMIT 50;

-- Vista: vista_disponibilidad_laboratorios
CREATE VIEW vista_disponibilidad_laboratorios AS
SELECT 
    l.id as laboratorio_id,
    l.nombre as laboratorio,
    l.edificio,
    l.capacidad,
    l.estado as estado_lab,
    
    -- Horarios disponibles
    (SELECT GROUP_CONCAT(CONCAT(dia_semana, ' ', TIME_FORMAT(hora_inicio, '%H:%i'), '-', TIME_FORMAT(hora_fin, '%H:%i')))
     FROM horarios_laboratorios hl
     WHERE hl.laboratorio_id = l.id AND hl.disponible = TRUE) as horarios_disponibles,
    
    -- Prácticas programadas para hoy
    (SELECT COUNT(*) FROM practicas p 
     WHERE p.laboratorio_id = l.id 
     AND p.fecha = CURDATE()
     AND p.estado IN ('programada', 'confirmada')) as practicas_hoy,
    
    -- Prácticas esta semana
    (SELECT COUNT(*) FROM practicas p 
     WHERE p.laboratorio_id = l.id 
     AND p.fecha BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 7 DAY)
     AND p.estado IN ('programada', 'confirmada')) as practicas_semana
    
FROM laboratorios l
ORDER BY l.edificio, l.nombre;

-- Vista: vista_agenda_semanal
CREATE VIEW vista_agenda_semanal AS
WITH dias_semana AS (
    SELECT 'Lunes' as dia, 1 as orden UNION
    SELECT 'Martes', 2 UNION
    SELECT 'Miércoles', 3 UNION
    SELECT 'Jueves', 4 UNION
    SELECT 'Viernes', 5 UNION
    SELECT 'Sábado', 6
),
horas_dia AS (
    SELECT '07:00' as hora, 1 as orden UNION
    SELECT '08:00', 2 UNION SELECT '09:00', 3 UNION SELECT '10:00', 4 UNION
    SELECT '11:00', 5 UNION SELECT '12:00', 6 UNION SELECT '13:00', 7 UNION
    SELECT '14:00', 8 UNION SELECT '15:00', 9 UNION SELECT '16:00', 10 UNION
    SELECT '17:00', 11 UNION SELECT '18:00', 12 UNION SELECT '19:00', 13
)
SELECT 
    ds.dia,
    hd.hora,
    l.id as laboratorio_id,
    l.nombre as laboratorio,
    
    -- Información de práctica si existe
    p.id as practica_id,
    p.nombre as practica_nombre,
    p.estado as practica_estado,
    u.nombre as profesor,
    a.nombre as asignatura
    
FROM dias_semana ds
CROSS JOIN horas_dia hd
CROSS JOIN laboratorios l
LEFT JOIN practicas p ON l.id = p.laboratorio_id 
    AND p.fecha = DATE_ADD(CURDATE(), INTERVAL (ds.orden - DAYOFWEEK(CURDATE()) + 1) DAY)
    AND TIME_FORMAT(p.hora, '%H:%i') = hd.hora
    AND p.estado NOT IN ('cancelada')
LEFT JOIN usuarios u ON p.profesor_id = u.id
LEFT JOIN asignaturas a ON p.asignatura_id = a.id
WHERE l.estado = 'Disponible'
ORDER BY ds.orden, hd.orden, l.nombre;

-- ============================================
-- PROCEDIMIENTOS ALMACENADOS
-- ============================================

-- SP: sp_registrar_practica
DELIMITER //
CREATE PROCEDURE sp_registrar_practica(
    IN p_nombre VARCHAR(200),
    IN p_objetivo TEXT,
    IN p_fecha DATE,
    IN p_hora TIME,
    IN p_duracion DECIMAL(3,1),
    IN p_profesor_id INT,
    IN p_asignatura_id INT,
    IN p_laboratorio_id INT,
    IN p_usuario_id INT
)
BEGIN
    DECLARE v_existe INT;
    DECLARE v_lab_estado VARCHAR(20);
    DECLARE v_profesor_rol VARCHAR(20);
    
    -- Verificar que el laboratorio existe y está disponible
    SELECT estado INTO v_lab_estado 
    FROM laboratorios 
    WHERE id = p_laboratorio_id;
    
    IF v_lab_estado IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Laboratorio no encontrado';
    END IF;
    
    IF v_lab_estado != 'Disponible' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Laboratorio no disponible';
    END IF;
    
    -- Verificar que el usuario es profesor
    SELECT rol INTO v_profesor_rol 
    FROM usuarios 
    WHERE id = p_profesor_id AND estado = 'Activo';
    
    IF v_profesor_rol != 'Profesor' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Usuario no es profesor activo';
    END IF;
    
    -- Verificar solapamiento de horario
    SELECT COUNT(*) INTO v_existe
    FROM practicas
    WHERE laboratorio_id = p_laboratorio_id
    AND fecha = p_fecha
    AND hora = p_hora
    AND estado NOT IN ('cancelada', 'completada');
    
    IF v_existe > 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Horario ocupado en este laboratorio';
    END IF;
    
    -- Insertar práctica
    INSERT INTO practicas (
        nombre, objetivo, fecha, hora, duracion_horas,
        profesor_id, asignatura_id, laboratorio_id, estado
    ) VALUES (
        p_nombre, p_objetivo, p_fecha, p_hora, p_duracion,
        p_profesor_id, p_asignatura_id, p_laboratorio_id, 'programada'
    );
    
    -- Registrar actividad
    INSERT INTO actividades (usuario_id, tipo_accion, modulo, registro_id, descripcion)
    VALUES (
        p_usuario_id, 'crear', 'practicas', 
        LAST_INSERT_ID(),
        CONCAT('Práctica "', p_nombre, '" registrada para ', p_fecha, ' ', p_hora)
    );
    
    SELECT LAST_INSERT_ID() as nueva_practica_id;
END //
DELIMITER ;

-- SP: sp_actualizar_estado_practica
DELIMITER //
CREATE PROCEDURE sp_actualizar_estado_practica(
    IN p_practica_id INT,
    IN p_nuevo_estado VARCHAR(20),
    IN p_usuario_id INT,
    IN p_observaciones TEXT
)
BEGIN
    DECLARE v_estado_actual VARCHAR(20);
    DECLARE v_nombre_practica VARCHAR(200);
    
    -- Obtener estado actual y nombre
    SELECT estado, nombre INTO v_estado_actual, v_nombre_practica
    FROM practicas WHERE id = p_practica_id;
    
    IF v_estado_actual IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Práctica no encontrada';
    END IF;
    
    -- Validar transición de estado
    IF NOT (
        (v_estado_actual = 'programada' AND p_nuevo_estado IN ('confirmada', 'cancelada')) OR
        (v_estado_actual = 'confirmada' AND p_nuevo_estado IN ('en-curso', 'cancelada')) OR
        (v_estado_actual = 'en-curso' AND p_nuevo_estado IN ('completada', 'cancelada')) OR
        p_nuevo_estado = v_estado_actual
    ) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Transición de estado no válida';
    END IF;
    
    -- Actualizar estado
    UPDATE practicas 
    SET estado = p_nuevo_estado, 
        updated_at = CURRENT_TIMESTAMP
    WHERE id = p_practica_id;
    
    -- Registrar actividad
    INSERT INTO actividades (
        usuario_id, tipo_accion, modulo, registro_id, descripcion, detalles
    ) VALUES (
        p_usuario_id, 
        CASE p_nuevo_estado 
            WHEN 'confirmada' THEN 'confirmar'
            WHEN 'cancelada' THEN 'cancelar'
            WHEN 'completada' THEN 'completar'
            ELSE 'editar'
        END,
        'practicas',
        p_practica_id,
        CONCAT('Práctica "', v_nombre_practica, '" cambiada de ', v_estado_actual, ' a ', p_nuevo_estado),
        JSON_OBJECT(
            'estado_anterior', v_estado_actual,
            'estado_nuevo', p_nuevo_estado,
            'observaciones', COALESCE(p_observaciones, '')
        )
    );
    
    SELECT 'Estado actualizado correctamente' as mensaje;
END //
DELIMITER ;

-- SP: sp_obtener_disponibilidad_lab
DELIMITER //
CREATE PROCEDURE sp_obtener_disponibilidad_lab(
    IN p_laboratorio_id INT,
    IN p_fecha DATE,
    IN p_semana BOOLEAN
)
BEGIN
    IF p_semana THEN
        -- Disponibilidad para toda la semana
        WITH dias AS (
            SELECT p_fecha as fecha, DAYNAME(p_fecha) as dia
            UNION SELECT DATE_ADD(p_fecha, INTERVAL 1 DAY), DAYNAME(DATE_ADD(p_fecha, INTERVAL 1 DAY))
            UNION SELECT DATE_ADD(p_fecha, INTERVAL 2 DAY), DAYNAME(DATE_ADD(p_fecha, INTERVAL 2 DAY))
            UNION SELECT DATE_ADD(p_fecha, INTERVAL 3 DAY), DAYNAME(DATE_ADD(p_fecha, INTERVAL 3 DAY))
            UNION SELECT DATE_ADD(p_fecha, INTERVAL 4 DAY), DAYNAME(DATE_ADD(p_fecha, INTERVAL 4 DAY))
            UNION SELECT DATE_ADD(p_fecha, INTERVAL 5 DAY), DAYNAME(DATE_ADD(p_fecha, INTERVAL 5 DAY))
            UNION SELECT DATE_ADD(p_fecha, INTERVAL 6 DAY), DAYNAME(DATE_ADD(p_fecha, INTERVAL 6 DAY))
        ),
        horas AS (
            SELECT '07:00' as hora UNION SELECT '08:00' UNION SELECT '09:00' UNION SELECT '10:00'
            UNION SELECT '11:00' UNION SELECT '12:00' UNION SELECT '13:00' UNION SELECT '14:00'
            UNION SELECT '15:00' UNION SELECT '16:00' UNION SELECT '17:00' UNION SELECT '18:00'
            UNION SELECT '19:00'
        )
        SELECT 
            d.fecha,
            d.dia,
            h.hora,
            CASE 
                WHEN p.id IS NOT NULL THEN 'Ocupado'
                WHEN hl.disponible = FALSE THEN 'No disponible'
                ELSE 'Disponible'
            END as estado,
            COALESCE(p.nombre, '') as practica,
            COALESCE(u.nombre, '') as profesor
        FROM dias d
        CROSS JOIN horas h
        LEFT JOIN horarios_laboratorios hl ON hl.dia_semana = d.dia 
            AND TIME_FORMAT(hl.hora_inicio, '%H:%i') = h.hora
            AND hl.laboratorio_id = p_laboratorio_id
        LEFT JOIN practicas p ON p.laboratorio_id = p_laboratorio_id 
            AND p.fecha = d.fecha 
            AND TIME_FORMAT(p.hora, '%H:%i') = h.hora
            AND p.estado NOT IN ('cancelada')
        LEFT JOIN usuarios u ON p.profesor_id = u.id
        WHERE hl.disponible IS NOT NULL OR p.id IS NOT NULL
        ORDER BY d.fecha, h.hora;
    ELSE
        -- Disponibilidad para un día específico
        SELECT 
            p_fecha as fecha,
            h.hora,
            CASE 
                WHEN p.id IS NOT NULL THEN 'Ocupado'
                WHEN hl.disponible = FALSE THEN 'No disponible'
                ELSE 'Disponible'
            END as estado,
            COALESCE(p.nombre, '') as practica,
            COALESCE(u.nombre, '') as profesor,
            COALESCE(p.estado, '') as estado_practica
        FROM (
            SELECT '07:00' as hora UNION SELECT '08:00' UNION SELECT '09:00' UNION SELECT '10:00'
            UNION SELECT '11:00' UNION SELECT '12:00' UNION SELECT '13:00' UNION SELECT '14:00'
            UNION SELECT '15:00' UNION SELECT '16:00' UNION SELECT '17:00' UNION SELECT '18:00'
            UNION SELECT '19:00'
        ) h
        LEFT JOIN horarios_laboratorios hl ON hl.dia_semana = DAYNAME(p_fecha)
            AND TIME_FORMAT(hl.hora_inicio, '%H:%i') = h.hora
            AND hl.laboratorio_id = p_laboratorio_id
        LEFT JOIN practicas p ON p.laboratorio_id = p_laboratorio_id 
            AND p.fecha = p_fecha 
            AND TIME_FORMAT(p.hora, '%H:%i') = h.hora
            AND p.estado NOT IN ('cancelada')
        LEFT JOIN usuarios u ON p.profesor_id = u.id
        WHERE hl.disponible IS NOT NULL OR p.id IS NOT NULL
        ORDER BY h.hora;
    END IF;
END //
DELIMITER ;

-- SP: sp_generar_reporte_practicas
DELIMITER //
CREATE PROCEDURE sp_generar_reporte_practicas(
    IN p_fecha_inicio DATE,
    IN p_fecha_fin DATE,
    IN p_profesor_id INT,
    IN p_laboratorio_id INT,
    IN p_estado VARCHAR(20)
)
BEGIN
    SELECT 
        p.id,
        p.nombre as practica,
        p.objetivo,
        p.fecha,
        p.hora,
        p.duracion_horas,
        p.estado,
        DATE_FORMAT(p.created_at, '%d/%m/%Y %H:%i') as fecha_registro,
        
        u.nombre as profesor,
        u.email as profesor_email,
        u.academia,
        
        a.nombre as asignatura,
        a.codigo as codigo_asignatura,
        a.creditos,
        
        l.nombre as laboratorio,
        l.edificio,
        l.capacidad
        
    FROM practicas p
    JOIN usuarios u ON p.profesor_id = u.id
    JOIN asignaturas a ON p.asignatura_id = a.id
    JOIN laboratorios l ON p.laboratorio_id = l.id
    
    WHERE p.fecha BETWEEN p_fecha_inicio AND p_fecha_fin
    AND (p_profesor_id IS NULL OR p.profesor_id = p_profesor_id)
    AND (p_laboratorio_id IS NULL OR p.laboratorio_id = p_laboratorio_id)
    AND (p_estado IS NULL OR p.estado = p_estado)
    
    ORDER BY p.fecha DESC, p.hora DESC;
END //
DELIMITER ;

-- SP: sp_obtener_estadisticas_usuario
DELIMITER //
CREATE PROCEDURE sp_obtener_estadisticas_usuario(
    IN p_usuario_id INT
)
BEGIN
    DECLARE v_rol VARCHAR(20);
    
    SELECT rol INTO v_rol FROM usuarios WHERE id = p_usuario_id;
    
    IF v_rol = 'Profesor' THEN
        -- Estadísticas para profesor
        SELECT 
            (SELECT COUNT(*) FROM practicas WHERE profesor_id = p_usuario_id) as total_practicas,
            (SELECT COUNT(*) FROM practicas WHERE profesor_id = p_usuario_id 
             AND fecha >= CURDATE() AND estado IN ('programada', 'confirmada')) as practicas_futuras,
            (SELECT COUNT(*) FROM practicas WHERE profesor_id = p_usuario_id 
             AND MONTH(fecha) = MONTH(CURRENT_DATE) AND YEAR(fecha) = YEAR(CURRENT_DATE)) as practicas_mes_actual,
            (SELECT COUNT(*) FROM practicas WHERE profesor_id = p_usuario_id 
             AND estado = 'completada') as practicas_completadas,
            (SELECT COUNT(DISTINCT laboratorio_id) FROM practicas 
             WHERE profesor_id = p_usuario_id) as laboratorios_utilizados;
    ELSE
        -- Estadísticas para administrador
        SELECT 
            (SELECT COUNT(*) FROM usuarios WHERE rol = 'Profesor' AND estado = 'Activo') as profesores_activos,
            (SELECT COUNT(*) FROM laboratorios WHERE estado = 'Disponible') as labs_disponibles,
            (SELECT COUNT(*) FROM practicas WHERE fecha = CURDATE()) as practicas_hoy,
            (SELECT COUNT(*) FROM actividades WHERE DATE(created_at) = CURDATE()) as actividades_hoy;
    END IF;
END //
DELIMITER ;

-- ============================================
-- TRIGGERS
-- ============================================

-- Trigger: Validar solapamiento al insertar práctica
DELIMITER //
CREATE TRIGGER tr_validar_solapamiento_insert
BEFORE INSERT ON practicas
FOR EACH ROW
BEGIN
    DECLARE v_existe INT;
    DECLARE v_hora_fin TIME;
    
    -- Calcular hora de fin
    SET v_hora_fin = ADDTIME(NEW.hora, SEC_TO_TIME(NEW.duracion_horas * 3600));
    
    -- Verificar solapamientos
    SELECT COUNT(*) INTO v_existe
    FROM practicas
    WHERE laboratorio_id = NEW.laboratorio_id
    AND fecha = NEW.fecha
    AND estado NOT IN ('cancelada')
    AND (
        (NEW.hora BETWEEN hora AND ADDTIME(hora, SEC_TO_TIME(duracion_horas * 3600))) OR
        (v_hora_fin BETWEEN hora AND ADDTIME(hora, SEC_TO_TIME(duracion_horas * 3600))) OR
        (hora BETWEEN NEW.hora AND v_hora_fin)
    );
    
    IF v_existe > 0 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'El horario se solapa con otra práctica en el mismo laboratorio';
    END IF;
END //
DELIMITER ;

-- Trigger: Validar solapamiento al actualizar práctica
DELIMITER //
CREATE TRIGGER tr_validar_solapamiento_update
BEFORE UPDATE ON practicas
FOR EACH ROW
BEGIN
    DECLARE v_existe INT;
    DECLARE v_hora_fin TIME;
    
    -- Solo validar si cambia fecha, hora o laboratorio
    IF NOT (OLD.fecha <=> NEW.fecha AND OLD.hora <=> NEW.hora 
            AND OLD.laboratorio_id <=> NEW.laboratorio_id AND OLD.duracion_horas <=> NEW.duracion_horas) THEN
        
        -- Calcular hora de fin
        SET v_hora_fin = ADDTIME(NEW.hora, SEC_TO_TIME(NEW.duracion_horas * 3600));
        
        -- Verificar solapamientos (excluyendo la práctica actual)
        SELECT COUNT(*) INTO v_existe
        FROM practicas
    WHERE laboratorio_id = NEW.laboratorio_id
    AND fecha = NEW.fecha
    AND id != NEW.id
    AND estado NOT IN ('cancelada')
    AND (
        (NEW.hora BETWEEN hora AND ADDTIME(hora, SEC_TO_TIME(duracion_horas * 3600))) OR
        (v_hora_fin BETWEEN hora AND ADDTIME(hora, SEC_TO_TIME(duracion_horas * 3600))) OR
        (hora BETWEEN NEW.hora AND v_hora_fin)
    );
    
        IF v_existe > 0 THEN
            SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'El horario se solapa con otra práctica en el mismo laboratorio';
        END IF;
    END IF;
END //
DELIMITER ;

-- Trigger: Actualizar estado de laboratorio cuando se programa práctica
DELIMITER //
CREATE TRIGGER tr_actualizar_estado_lab_insert
AFTER INSERT ON practicas
FOR EACH ROW
BEGIN
    -- Si hay prácticas hoy o mañana, marcar laboratorio como "Ocupado" parcialmente
    UPDATE laboratorios 
    SET estado = CASE 
        WHEN (SELECT COUNT(*) FROM practicas 
              WHERE laboratorio_id = NEW.laboratorio_id 
              AND fecha BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 1 DAY)
              AND estado IN ('programada', 'confirmada', 'en-curso')) > 0 
        THEN 'Ocupado'
        ELSE 'Disponible'
    END
    WHERE id = NEW.laboratorio_id;
END //
DELIMITER ;

-- Trigger: Registrar actividad automática en usuarios
DELIMITER //
CREATE TRIGGER tr_registrar_actividad_usuarios
AFTER INSERT ON usuarios
FOR EACH ROW
BEGIN
    INSERT INTO actividades (usuario_id, tipo_accion, modulo, registro_id, descripcion)
    VALUES (NEW.id, 'crear', 'usuarios', NEW.id, 
            CONCAT('Usuario "', NEW.nombre, '" creado con rol ', NEW.rol));
END //
DELIMITER ;

-- Trigger: Registrar actualización de usuarios
DELIMITER //
CREATE TRIGGER tr_registrar_actualizacion_usuarios
AFTER UPDATE ON usuarios
FOR EACH ROW
BEGIN
    IF OLD.estado != NEW.estado THEN
        INSERT INTO actividades (usuario_id, tipo_accion, modulo, registro_id, descripcion, detalles)
        VALUES (
            NEW.id, 'editar', 'usuarios', NEW.id,
            CONCAT('Estado de usuario "', NEW.nombre, '" cambiado'),
            JSON_OBJECT('estado_anterior', OLD.estado, 'estado_nuevo', NEW.estado)
        );
    END IF;
END //
DELIMITER ;

-- ============================================
-- FUNCIONES
-- ============================================

-- Función: Calcular horas utilizadas de laboratorio
DELIMITER //
CREATE FUNCTION fn_calcular_horas_laboratorio(
    p_laboratorio_id INT,
    p_fecha_inicio DATE,
    p_fecha_fin DATE
) RETURNS DECIMAL(10,2)
DETERMINISTIC
READS SQL DATA
BEGIN
    DECLARE v_total_horas DECIMAL(10,2);
    
    SELECT COALESCE(SUM(duracion_horas), 0) INTO v_total_horas
    FROM practicas
    WHERE laboratorio_id = p_laboratorio_id
    AND fecha BETWEEN p_fecha_inicio AND p_fecha_fin
    AND estado NOT IN ('cancelada');
    
    RETURN v_total_horas;
END //
DELIMITER ;

-- Función: Verificar disponibilidad de horario
DELIMITER //
CREATE FUNCTION fn_verificar_disponibilidad(
    p_laboratorio_id INT,
    p_fecha DATE,
    p_hora TIME,
    p_duracion DECIMAL(3,1)
) RETURNS BOOLEAN
DETERMINISTIC
READS SQL DATA
BEGIN
    DECLARE v_existe INT;
    DECLARE v_hora_fin TIME;
    DECLARE v_disponible BOOLEAN;
    
    -- Calcular hora de fin
    SET v_hora_fin = ADDTIME(p_hora, SEC_TO_TIME(p_duracion * 3600));
    
    -- Verificar en horarios base
    SELECT disponible INTO v_disponible
    FROM horarios_laboratorios
    WHERE laboratorio_id = p_laboratorio_id
    AND dia_semana = DAYNAME(p_fecha)
    AND hora_inicio <= p_hora
    AND hora_fin >= v_hora_fin;
    
    IF v_disponible IS NULL OR v_disponible = FALSE THEN
        RETURN FALSE;
    END IF;
    
    -- Verificar prácticas existentes
    SELECT COUNT(*) INTO v_existe
    FROM practicas
    WHERE laboratorio_id = p_laboratorio_id
    AND fecha = p_fecha
    AND estado NOT IN ('cancelada')
    AND (
        (p_hora BETWEEN hora AND ADDTIME(hora, SEC_TO_TIME(duracion_horas * 3600))) OR
        (v_hora_fin BETWEEN hora AND ADDTIME(hora, SEC_TO_TIME(duracion_horas * 3600))) OR
        (hora BETWEEN p_hora AND v_hora_fin)
    );
    
    RETURN v_existe = 0;
END //
DELIMITER ;

-- Función: Obtener próximo horario disponible
DELIMITER //
CREATE FUNCTION fn_proximo_horario_disponible(
    p_laboratorio_id INT,
    p_fecha DATE,
    p_duracion DECIMAL(3,1)
) RETURNS TIME
DETERMINISTIC
READS SQL DATA
BEGIN
    DECLARE v_hora TIME;
    DECLARE v_hora_actual TIME DEFAULT '07:00:00';
    
    hora_loop: LOOP
        IF v_hora_actual >= '19:00:00' THEN
            SET v_hora = NULL;
            LEAVE hora_loop;
        END IF;
        
        IF fn_verificar_disponibilidad(p_laboratorio_id, p_fecha, v_hora_actual, p_duracion) THEN
            SET v_hora = v_hora_actual;
            LEAVE hora_loop;
        END IF;
        
        SET v_hora_actual = ADDTIME(v_hora_actual, '01:00:00');
    END LOOP;
    
    RETURN v_hora;
END //
DELIMITER ;

esiión