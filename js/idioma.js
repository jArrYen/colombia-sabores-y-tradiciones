const idiomaSelect = document.getElementById("idioma");
const textos = document.querySelectorAll("[data-section]");

// Función para cambiar el idioma
function cambiarIdioma(idioma) {
    fetch(`./Lenguajes/${idioma}.json`)
        .then(res => res.json())
        .then(data => {
            textos.forEach(el => {
                const section = el.dataset.section;
                const value = el.dataset.value;

                if (data[section] && data[section][value]) {
                    el.textContent = data[section][value];
                }
            });
        })
        .catch(error => console.error("Error cargando idioma:", error));
}

idiomaSelect.addEventListener("change", () => {
    const idioma = idiomaSelect.value;

    // Opción para guardar el idioma seleccionado por el usuario
    localStorage.setItem("idioma", idioma);

    cambiarIdioma(idioma);
});

document.addEventListener("DOMContentLoaded", () => {
    const idiomaGuardado = localStorage.getItem("idioma");


    if (idiomaGuardado) {
        idiomaSelect.value = idiomaGuardado;
        cambiarIdioma(idiomaGuardado);
    }
});