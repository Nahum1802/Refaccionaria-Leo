// config.js - Configuración global de Refaccionaria Leo

// 1. URL Centralizada de la API (Cambia esto cuando Ngrok se reinicie o subas a producción)
const API_BASE = 'https://renter-marrow-engraver.ngrok-free.dev/refaccionaria';

// 2. Lógica global del Menú de Navegación (Se ejecuta en todas las páginas)
document.addEventListener("DOMContentLoaded", () => {
    const sesionData = localStorage.getItem("usuario");
    
    // Buscamos los botones en el menú actual
    const btnLogin = document.getElementById('nav-login');
    const btnPerfil = document.getElementById('nav-perfil');

    if (sesionData) {
        const usuario = JSON.parse(sesionData);
        
        // Ocultamos el botón de iniciar sesión
        if (btnLogin) btnLogin.classList.add('hidden');
        
        // Mostramos y configuramos el botón de perfil/admin
        if (btnPerfil) {
            btnPerfil.classList.remove('hidden');
            
            if (usuario.id_rol == 2) {
                // Vista para el Dueño
                btnPerfil.innerHTML = `<a href="admin.html" class="block py-[7px] px-4 rounded-[6px] text-[13px] font-semibold tracking-[1.5px] uppercase no-underline transition-colors duration-200 bg-amarillo text-black hover:bg-yellow-500">Panel Admin</a>`;
            } else {
                // Vista para el Cliente
                btnPerfil.innerHTML = `<a href="Perfil.html" class="block py-[7px] px-4 rounded-[6px] text-[13px] font-semibold tracking-[1.5px] uppercase no-underline transition-colors duration-200 bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/30 hover:bg-[#4ade80]/20">Mi Perfil</a>`;
            }
        }
    }
});