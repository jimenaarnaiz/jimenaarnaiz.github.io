// Esta función se ejecuta al cargar el archivo.
// Inicializa EmailJS
(function () {
  emailjs.init("olY4iy91a-lquNPnK"); //public key
})();

// Espera a que todo el contenido de la página esté listo
document.addEventListener("DOMContentLoaded", function () {

  // ----- CONFIGURACION de EmailJS ----- 
  
  // Seleccionamos el formulario
  const form = document.querySelector(".contact-me-form");

  // Añadimos un evento cuando el usuario intente enviar el formulario
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Cancela el envío normal del formulario (no recarga la página)

    // Obtenemos el botón de envío para desactivarlo temporalmente
    const submitButton = form.querySelector("button");

    // Cambiamos el texto del botón mientras se está enviando
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";

    // Llamamos a la función de EmailJS para enviar el formulario
    // sendForm necesita: Service ID, Template ID y el formulario como tal
    emailjs.sendForm("service_5ynz1x3", "template_rblycyj", form)
      .then(function () {
        alert("✅ ¡Correo enviado correctamente!");

        // Limpiamos el formulario
        form.reset();

        // Restauramos el botón
        submitButton.disabled = false;
        submitButton.textContent = "Send 📩";
      }, function (error) {
        // Si ocurre un error
        alert("❌ Error al enviar: " + JSON.stringify(error));

        // Restauramos el botón
        submitButton.disabled = false;
        submitButton.textContent = "Send 📩";
      });
  });


 // ----- BOTÓN HAMBURGUESA -----
    const menuButton = document.getElementById("menu");
    const navMenu = document.getElementById("nav-menu").querySelector("ul");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // Añadimos un evento al documento para cerrar el menú al hacer clic fuera de él
    document.addEventListener("click", function (event) { 
        if (!navMenu.contains(event.target) && !menuButton.contains(event.target)) {
            navMenu.classList.remove("show");
        }
    });

















});


