// Esta función se ejecuta al cargar el archivo.
// Inicializa EmailJS
(function () {
  emailjs.init("olY4iy91a-lquNPnK"); //public key
})();

// Espera a que todo el contenido de la página esté listo
document.addEventListener("DOMContentLoaded", function () {

    // ...código de EmailJS...
  
  // Seleccionamos el formulario con la clase .contact-me-form
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
    // sendForm necesita:
    // 1. Service ID (el "servicio" de correo que creaste)
    // 2. Template ID (la plantilla de correo)
    // 3. El formulario como tal
    emailjs.sendForm("service_5ynz1x3", "template_rblycyj", form)
      .then(function () {
        // Si todo va bien
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


  // --- Slider de proyectos ---
  /*
   const grid = document.querySelector('.projects-grid');
  if (!grid) return;
  const cards = Array.from(grid.children);
  const left = document.querySelector('.projects-arrow.left');
  const right = document.querySelector('.projects-arrow.right');
  let start = 0;

  function getVisible() {
    if (window.innerWidth <= 600) return 2; // 2 en 2 en pantallas pequeñas
    if (window.innerWidth <= 900) return 3; // 3 en 3 en medianas
    return 4; // todas en grandes
  }

  function updateGrid() {
    const visible = getVisible();
    cards.forEach((card, i) => {
      card.style.display = (i >= start && i < start + visible) ? 'block' : 'none';
    });
    // Mostrar/ocultar flechas solo si hay más proyectos que visibles
    const showArrows = cards.length > visible && window.innerWidth <= 900;
    left && (left.style.display = showArrows ? 'block' : 'none');
    right && (right.style.display = showArrows ? 'block' : 'none');
  }

  left && left.addEventListener('click', () => {
    const visible = getVisible();
    if (start > 0) {
      start -= visible;
      if (start < 0) start = 0;
      updateGrid();
    }
  });

  right && right.addEventListener('click', () => {
    const visible = getVisible();
    if (start + visible < cards.length) {
      start += visible;
      updateGrid();
    }
  });

  window.addEventListener('resize', () => {
    start = 0; // reinicia al cambiar tamaño
    updateGrid();
  });
  updateGrid();
*/















});


