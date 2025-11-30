// Reservas.js
// SOLO se modificó lo necesario para coincidir con tu backend y BD.

const API_URL_RESERVAS = "/api/reservas";
const API_URL_LABS = "/api/laboratorios";

document.addEventListener("DOMContentLoaded", () => {
    initUserAndUI();
    initEvents();
    cargarReservas();
    cargarLaboratorios();
    cargarAsignaturas();
});

function initUserAndUI() {
    let usuario = null;
    try { usuario = JSON.parse(localStorage.getItem("usuario")); } catch(e) { usuario = null; }

    if (!usuario) {
        if (!location.pathname.includes("login")) {
            window.location.href = "../views/login.html";
            return;
        }
    } else {
        const iniciales =
            (usuario.nombre?.charAt(0) || "").toUpperCase() +
            (usuario.apellido?.charAt(0) || "").toUpperCase();

        const nameEl = document.getElementById("user-name");
        const initialsEl = document.getElementById("user-initials-btn");
        const mobileInitials = document.getElementById("mobile-user-initials");
        const mobileName = document.getElementById("mobile-user-name");
        const mobileRole = document.getElementById("mobile-user-role");

        if (nameEl) nameEl.textContent = `${usuario.nombre} ${usuario.apellido}`;
        if (initialsEl) initialsEl.textContent = iniciales;
        if (mobileInitials) mobileInitials.textContent = iniciales;
        if (mobileName) mobileName.textContent = `${usuario.nombre} ${usuario.apellido}`;
        if (mobileRole) mobileRole.textContent = usuario.rol ?? "Usuario";
    }

    const html = document.documentElement;

    if (localStorage.getItem("theme") === "dark") {
        html.classList.add("dark");
    } else {
        html.classList.remove("dark");
    }

    const darkModeBtn = document.getElementById("darkModeBtn");
    const darkModeBtnMobile = document.getElementById("btn-darkMode-mobile");
    const toggleDark = () => {
        const isDark = html.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    if (darkModeBtn) darkModeBtn.addEventListener("click", toggleDark);
    if (darkModeBtnMobile) darkModeBtnMobile.addEventListener("click", toggleDark);
}

// =============================
// EVENTOS
// =============================
function initEvents() {
    const newBtn = document.getElementById("new-practice-btn");
    if (newBtn) newBtn.addEventListener("click", () => {
        document.getElementById("fecha").value = "";
        document.getElementById("practica").value = "";
        document.getElementById("asignatura").value = "";
        document.getElementById("modalNuevaPractica").classList.remove("hidden");
    });

    document.getElementById("guardarBtn")?.addEventListener("click", guardarNueva);
    document.getElementById("editarBtn")?.addEventListener("click", guardarEdicion);
    document.getElementById("cancelarEliminar")?.addEventListener("click", () => {
        document.getElementById("modalEliminar").classList.add("hidden");
    });
    document.getElementById("confirmarEliminar")?.addEventListener("click", confirmarEliminarReserva);
}

let editarId = null;
let eliminarId = null;

// =============================
// CARGAR RESERVAS
// =============================
async function cargarReservas() {
    const tablaBody = document.getElementById("tablaReservas");
    if (!tablaBody) return;
    tablaBody.innerHTML = "";

    try {
        const res = await fetch(API_URL_RESERVAS);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();

        data.forEach(r => {
            const fecha = (r.fecha || "").slice(0,10);
            const nombreLab = r.nombre_laboratorio || "—";
            const clase = r.clase || "—";
            const estado = r.estado || "pendiente";
            const id = r.id_reserva;

            tablaBody.innerHTML += `
                <tr>
                    <td class="px-6 py-3">${fecha}</td>
                    <td class="px-6 py-3">${escapeHtml(nombreLab)}</td>
                    <td class="px-6 py-3">${escapeHtml(clase)}</td>
                    <td class="px-6 py-3">${escapeHtml(estado)}</td>
                    <td class="px-6 py-3">
                        <button data-id="${id}" class="btn-editar text-blue-500 hover:underline">Editar</button>
                        <button data-id="${id}" class="btn-eliminar text-red-500 hover:underline ml-3">Eliminar</button>
                    </td>
                </tr>
            `;
        });

        document.querySelectorAll(".btn-eliminar").forEach(btn =>
            btn.addEventListener("click", e => abrirEliminar(e.currentTarget.dataset.id))
        );
        document.querySelectorAll(".btn-editar").forEach(btn =>
            btn.addEventListener("click", e => abrirEditar(e.currentTarget.dataset.id))
        );

    } catch (err) {
        console.error("Error cargando reservas:", err);
        tablaBody.innerHTML = `<tr><td colspan="5">Error cargando reservas.</td></tr>`;
    }
}

// =============================
// CARGAR LABORATORIOS
// =============================
async function cargarLaboratorios() {
    try {
        const res = await fetch(API_URL_LABS);
        const labs = await res.json();

        const sel = document.getElementById("practica");
        const selEdit = document.getElementById("editPractica");

        sel.innerHTML = `<option value="">Seleccione laboratorio</option>`;
        selEdit.innerHTML = `<option value="">Seleccione laboratorio</option>`;

        labs.forEach(l =>
            sel.innerHTML += `<option value="${l.id_laboratorio}">${escapeHtml(l.nombre)}</option>`
        );

        labs.forEach(l =>
            selEdit.innerHTML += `<option value="${l.id_laboratorio}">${escapeHtml(l.nombre)}</option>`
        );

    } catch (e) {
        console.error("Error cargando laboratorios:", e);
    }
}

// =============================
// CARGAR ASIGNATURAS
// =============================
async function cargarAsignaturas() {
    try {
        const res = await fetch(API_URL_RESERVAS);
        const data = await res.json();

        const asignaturas = [...new Set(data.map(r => r.clase).filter(Boolean))];

        const sel = document.getElementById("asignatura");
        const selEdit = document.getElementById("editAsignatura");

        sel.innerHTML = `<option value="">Seleccione asignatura</option>`;
        selEdit.innerHTML = `<option value="">Seleccione asignatura</option>`;

        asignaturas.forEach(a => {
            sel.innerHTML += `<option value="${a}">${a}</option>`;
            selEdit.innerHTML += `<option value="${a}">${a}</option>`;
        });

    } catch (error) {
        console.error("Error cargando asignaturas:", error);
    }
}

// =============================
// GUARDAR NUEVA
// =============================
async function guardarNueva() {
    const fecha = document.getElementById("fecha").value;
    const id_laboratorio = document.getElementById("practica").value;
    const clase = document.getElementById("asignatura").value;

    if (!id_laboratorio) return alert("Seleccione un laboratorio.");
    if (!clase) return alert("Seleccione una asignatura.");

    const usuario = JSON.parse(localStorage.getItem("usuario") || "{}");

    const nueva = {
        id_usuario: usuario.id_usuario,
        id_laboratorio,
        fecha,                      // ✔ ahora coincide con la BD
        hora_inicio: "00:00:00",
        hora_fin: "00:00:00",
        clase,
        descripcion: "",            // ✔ agregado porque tu BD lo tiene
        estado: "pendiente",
        nombre_laboratorio: ""      // ✔ campo existente en tu BD
    };

    try {
        const res = await fetch(API_URL_RESERVAS, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nueva)
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
    } catch (e) {
        console.error("Error creando reserva:", e);
        alert("Error creando reserva.");
    }

    document.getElementById("modalNuevaPractica").classList.add("hidden");
    cargarReservas();
}

// =============================
// EDITAR
// =============================
async function abrirEditar(id) {
    editarId = id;

    const res = await fetch(`${API_URL_RESERVAS}/${id}`);
    const r = await res.json();

    document.getElementById("editFecha").value = (r.fecha || "").slice(0,10);
    document.getElementById("editPractica").value = r.id_laboratorio;
    document.getElementById("editAsignatura").value = r.clase;

    document.getElementById("modalEditar").classList.remove("hidden");
}

async function guardarEdicion() {
    if (!editarId) return;

    const fecha = document.getElementById("editFecha").value;
    const id_laboratorio = document.getElementById("editPractica").value;
    const clase = document.getElementById("editAsignatura").value;

    const body = {
        id_laboratorio,
        fecha,         // ✔ corregido
        clase
    };

    try {
        const res = await fetch(`${API_URL_RESERVAS}/${editarId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
    } catch (e) {
        console.error("Error guardando edición:", e);
        alert("Error al guardar cambios.");
    }

    document.getElementById("modalEditar").classList.add("hidden");
    cargarReservas();
}

// =============================
// ELIMINAR
// =============================
function abrirEliminar(id) {
    eliminarId = id;
    document.getElementById("modalEliminar").classList.remove("hidden");
}

async function confirmarEliminarReserva() {
    const res = await fetch(`${API_URL_RESERVAS}/${eliminarId}`, {
        method: "DELETE"
    });

    document.getElementById("modalEliminar").classList.add("hidden");
    cargarReservas();
}

// =============================
// UTILS
// =============================
function escapeHtml(str) {
    if (str == null) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// CIERRE MODALES
["modalNuevaPractica", "modalEditar", "modalEliminar"].forEach(id => {
    const modal = document.getElementById(id);
    if (modal) {
        modal.addEventListener("click", e => {
            if (e.target === modal) modal.classList.add("hidden");
        });
    }
});
