document.addEventListener("DOMContentLoaded", function () {
  // Cargamos el header
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;


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
    })
    .catch(error => console.error("Error loading header:", error));
});