function mostrarSeguidos() {
    document.getElementById("Seguidos").style.display = "block";
    document.getElementById("Principal").style.display = "none";
    document.getElementById("Tendencias").style.display = "none";
}

function mostrarTendencias() {
    document.getElementById("Tendencias").style.display = "block";
    document.getElementById("Principal").style.display = "none";
    document.getElementById("Seguidos").style.display = "none";
}

function mostrarPrincipal() {
    document.getElementById("Principal").style.display = "block";
    document.getElementById("Seguidos").style.display = "none";
    document.getElementById("Tendencias").style.display = "none";
}