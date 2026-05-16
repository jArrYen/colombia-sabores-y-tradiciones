document.addEventListener("DOMContentLoaded", () => {
    const mensaje = document.getElementById("mensaje");
    const idioma = document.getElementById("idioma");

    function actualizarMensaje() {
        const hora = new Date().getHours();
        let texto = "";

        const lang = idioma.value;

        if (hora < 12) {
            texto = lang === "es"
                ? "☀️¡Buenos días, Colombia Explorer! Comencemos esta nueva aventura": "☀️Good morning, Colombia Explorer! Let’s begin this new adventure.";
        } else if (hora < 18) {
            texto = lang === "es"
                ? "⛅¡Buenas tardes, Colombia Explorer! Descubramos lo mejor de este bello país": "⛅Good afternoon, Colombia Explorer! Let’s discover the best of this beautiful country.";
        } else {
            texto = lang === "es"
                ? "🌙¡Buenas noches, Colombia Explorer! Toma asiento, relájate y disfruta del recorrido": "🌙Good evening, Colombia Explorer! Take a seat, relax, and enjoy the journey.";
        }
        mensaje.textContent = texto;
    }

    //Opción para guardar la elección del usuario
    const idiomaGuardado = localStorage.getItem("idioma");

    if (idiomaGuardado) {
        idioma.value = idiomaGuardado;
    }
    //Variable para mostrar el saludo en el idioma seleccionado 
    actualizarMensaje();

    idioma.addEventListener("change", actualizarMensaje);
});


