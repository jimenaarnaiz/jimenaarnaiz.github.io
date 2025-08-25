class MyHeader extends HTMLElement {
  constructor() {
    super();
    // Crear Shadow DOM 
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>

      .header {
          background-color: var(--color-primary);
          padding: 1%;
          padding-left: 1rem;
          padding-right: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          /*centra verticalmente*/
          position: relative;
          height: 60px;
      }

      .left-header {
          display: flex;
          align-items: center;
          gap: 1rem;
      }

      .dark-mode-toggle {
          cursor: pointer;
          color: var(--color-bg);
          font-size: 1.5rem;
      }

      .header .portfolio {
          color: var(--color-bg);
          font-weight: 800;
          text-align: bottom;
          font-size: 1.5rem;
    
      }

      .menu {
          display: none;
          /* Oculto por defecto */
      }

      .header ul {
          margin: 0px;
          padding: 0%;
          box-sizing: border-box;
          list-style: none;
          /*quita los puntos*/
          display: flex;
          gap: 1rem;
          /* espacio entre ellos */
          align-items: center;
      }

      .header ul li a {
          font-size: 100%;
          text-decoration: none;
          /*quita el subrayado*/
          color: var(--color-bg);

          border-radius: 30px;
          padding: 8px 10px;
          display: inline-block;
          /*necesario para q se vea siempre bien*/
      }

      .header ul li a:hover {
          color: var(--color-bg);
          font-weight: 800;
         border: 1px solid var(--color-bg);
        
         
      }



      @media screen and (max-width: 600px) {

          .header nav ul {
              position: absolute;
              top: 100%;
              right: 0;
              flex-direction: column;
              padding: 1rem 2rem;
              background-color: var(--color-nav-menu-bg);
              gap: 15px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
              border-radius: 0px 0px 8px 8px;
              width: fit-content;
              display: none;
              /* Oculto por defecto */
              z-index: 9999;     /* <-- asegura que va por encima */
             
          }

          .header nav ul li {
              border-bottom: 1px solid #ccc;
  
          }

          /* Quitar la línea del último elemento */
          .header nav ul li:last-child {
              border-bottom: none;
          }

          .header ul li a {
              background-color: transparent;
              /* Cambia el fondo a transparente */
              color: var(--color-primary);
          }

          .header ul li a:hover {
              border: none;
              text-style: bold;
              color: var(--color-primary);

          }

          .header nav ul.show {
              display: flex;
          }

          .menu {
              display: block;
              /* Muestra el menú en pantallas pequeñas */
              background-color: transparent;
              color: var(--color-bg);
              padding: 10px 20px;
              align-items: end;
              justify-content: end;
              border: none;
              font-size: 20px;
              cursor: pointer;
          }


      }

      </style>


      <header class="header">
        <div class="left-header">
          <h1 class="portfolio">Portfolio</h1>
          <div class="dark-mode-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
            </svg>
          </div>
      </div>
        <div class="right-header">
          <nav id="nav-menu">
            <ul>
              <li><a href="#about-me">About me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact-me">Contact me</a></li>
            </ul>
          </nav>
          <button class="menu" id="menu">&#9776;</button>
        </div>
      </header>
    `;


    /*    Funcionalidad botón de menú */
    const menuButton = this.shadowRoot.getElementById("menu");
    const navMenu = this.shadowRoot.getElementById("nav-menu").querySelector("ul");

    menuButton.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });

    document.addEventListener("click", (event) => {
      const path = event.composedPath();
      if (!path.includes(menuButton) && !path.includes(navMenu)) {
        navMenu.classList.remove("show");
      }
    });

    /* Funcionalidad del modo oscuro */
    const darkModeToggle = this.shadowRoot.querySelector(".dark-mode-toggle");

    function actualizarIconoGitHub() {
      const githubIcon = document.getElementById("github-icon");
      if (!githubIcon) return;
      const esOscuro = document.body.classList.contains("dark-mode");
      githubIcon.src = esOscuro 
        ? "../img/github-svgrepo-com.svg"
        : "../img/github-142-svgrepo-com.svg";
    }

    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      darkModeToggle.classList.toggle("active");
      if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>`;

      }
      else {
        darkModeToggle.innerHTML = `  
       
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
            </svg>`;
      }

      actualizarIconoGitHub();
    });




  }
}

customElements.define("my-header", MyHeader);
