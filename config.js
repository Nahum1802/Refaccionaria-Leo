const API_BASE = window.location.origin + '/refaccionaria';

function verificarSesion() {
    const sesionData = localStorage.getItem("usuario");
    if (!sesionData) return null;
    try {
        return JSON.parse(sesionData);
    } catch {
        localStorage.removeItem("usuario");
        return null;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const usuario = verificarSesion();
    const btnLogin = document.getElementById('nav-login');
    const btnPerfil = document.getElementById('nav-perfil');
    if (usuario) {
        if (btnLogin) btnLogin.classList.add('hidden');
        if (btnPerfil) {
            btnPerfil.classList.remove('hidden');
            if (usuario.id_rol == 2) {
                btnPerfil.innerHTML = `<a href="admin.html" class="block py-[7px] px-4 rounded-[6px] text-[13px] font-semibold tracking-[1.5px] uppercase no-underline transition-colors duration-200 bg-amarillo text-black hover:bg-yellow-500">Panel Admin</a>`;
            } else {
                btnPerfil.innerHTML = `<a href="Perfil.html" class="block py-[7px] px-4 rounded-[6px] text-[13px] font-semibold tracking-[1.5px] uppercase no-underline transition-colors duration-200 bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/30 hover:bg-[#4ade80]/20">Mi Perfil</a>`;
            }
        }
    }
});
