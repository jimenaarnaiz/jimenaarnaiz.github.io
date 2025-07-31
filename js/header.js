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

      .header .saludo {
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
              background-color: whitesmoke;
              gap: 15px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
              border-radius: 0px 0px 8px 8px;
              width: fit-content;
              display: none;
              /* Oculto por defecto */
             
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
        <h1 class="saludo">Portfolio</h1>
        <nav id="nav-menu">
          <ul>
            <li><a href="#about-me">About me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact-me">Contact me</a></li>
          </ul>
        </nav>
        <button class="menu" id="menu">&#9776;</button>
      </header>
    `;


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


    
  }
}

customElements.define("my-header", MyHeader);
