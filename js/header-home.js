class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>

      :host {
          display: block;
      }

      .header {
          background-color: var(--color-primary);
          padding: 1%;
          padding-left: 2rem;
          padding-right: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;

          position: sticky;
          top: 0;
          min-height: 64px;
          z-index: 10;
          box-shadow: 0 4px 16px rgba(50, 19, 34, 0.12);
      }

      .left-header {
          display: flex;
          align-items: center;
          gap: 1rem;
      }

      .header-controls {
          display: flex;
          align-items: center;
          gap: 0.4rem;
      }

      .language-toggle {
          min-width: 42px;
          height: 42px;
          padding: 0 0.55rem;
          border: 2px solid transparent;
          border-radius: 999px;
          background: transparent;
          color: var(--color-bg);
          font: inherit;
          font-size: 0.85rem;
          font-weight: 800;
          cursor: pointer;
      }

      .dark-mode-toggle {
          cursor: pointer;
          color: var(--color-bg);
          font-size: 1.5rem;
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          border: 2px solid transparent;
          border-radius: 50%;
          background: transparent;
      }

      .dark-mode-toggle.is-leaving svg {
          animation: celestial-leave 140ms ease-in forwards;
      }

      .dark-mode-toggle.is-entering svg {
          animation: celestial-enter 180ms ease-out both;
      }

      @keyframes celestial-leave {
          to {
              opacity: 0;
              transform: translateY(-4px) rotate(20deg) scale(0.8);
          }
      }

      @keyframes celestial-enter {
          from {
              opacity: 0;
              transform: translateY(4px) rotate(-20deg) scale(0.8);
          }
          to {
              opacity: 1;
              transform: translateY(0) rotate(0deg) scale(1);
          }
      }

      .header .portfolio {
          color: var(--color-bg);
          font-weight: 800;
          text-align: bottom;
          font-size: 1.5rem;

      }

      .menu {
          display: none;

      }

      .header ul {
          margin: 0px;
          padding: 0%;
          box-sizing: border-box;
          list-style: none;

          display: flex;
          gap: 1rem;

          align-items: center;
      }

      .header ul li a {
          font-size: 100%;
          text-decoration: none;

          color: var(--color-bg);

          border-radius: 30px;
          padding: 8px 10px;
          display: inline-block;

      }

      .header ul li a:hover {
          color: var(--color-bg);
          font-weight: 800;
          border: 1px solid var(--color-bg);


      }

      .header button:focus-visible,
      .header a:focus-visible {
          outline: 3px solid var(--color-bg);
          outline-offset: 3px;
      }



      @media screen and (max-width: 600px) {

          .header {
              padding-left: 1rem;
              padding-right: 1rem;
          }

          .left-header {
              gap: 0.5rem;
          }

          .header-controls {
              gap: 0.15rem;
          }

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

              z-index: 9999;

          }

          .header nav ul li {
              border-bottom: 1px solid #ccc;

          }


          .header nav ul li:last-child {
              border-bottom: none;
          }

          .header ul li a {
              background-color: transparent;

              color: var(--color-primary);
          }

          .header ul li a:hover {
              border: none;
              font-weight: 700;
              color: var(--color-primary);

          }

          .header nav ul.show {
              display: flex;
          }

          .menu {
              display: block;

              background-color: transparent;
              color: var(--color-bg);
              padding: 10px 12px;
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
          <span class="portfolio">Portfolio</span>
          <div class="header-controls">
          <button class="language-toggle" type="button" aria-label="Switch language to Spanish">ES</button>
          <button class="dark-mode-toggle" type="button" aria-label="Switch to dark mode" aria-pressed="false">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
            </svg>
          </button>
          </div>
      </div>
        <div class="right-header">
          <nav id="nav-menu" aria-label="Main navigation">
            <ul id="nav-links">
              <li><a href="#about-me" data-i18n-en="About me" data-i18n-es="Sobre mí">About me</a></li>
              <li><a href="#education" data-i18n-en="Education" data-i18n-es="Formación">Education</a></li>
              <li><a href="#experience" data-i18n-en="Experience" data-i18n-es="Experiencia">Experience</a></li>
              <li><a href="#skills" data-i18n-en="Skills" data-i18n-es="Lenguajes">Skills</a></li>
              <li><a href="#projects" data-i18n-en="Projects" data-i18n-es="Proyectos">Projects</a></li>
              <li><a href="#contact-me" data-i18n-en="Contact me" data-i18n-es="Contacto">Contact me</a></li>
            </ul>
          </nav>
          <button class="menu" id="menu" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="nav-links">&#9776;</button>
        </div>
      </header>
    `;



    const menuButton = this.shadowRoot.getElementById("menu");
    const navMenu = this.shadowRoot.getElementById("nav-menu").querySelector("ul");

    function updateMenuLabel(isOpen, language = document.documentElement.lang) {
      menuButton.setAttribute("aria-label", language === "es"
        ? (isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación")
        : (isOpen ? "Close navigation menu" : "Open navigation menu"));
    }

    menuButton.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("show");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      updateMenuLabel(isOpen);
      if (isOpen) navMenu.querySelector("a").focus();
    });

    navMenu.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        navMenu.classList.remove("show");
        menuButton.setAttribute("aria-expanded", "false");
        updateMenuLabel(false);
      }
    });

    this.shadowRoot.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
        menuButton.setAttribute("aria-expanded", "false");
        updateMenuLabel(false);
        menuButton.focus();
      }
    });

    document.addEventListener("click", (event) => {
      const path = event.composedPath();
      if (!path.includes(menuButton) && !path.includes(navMenu)) {
        navMenu.classList.remove("show");
        menuButton.setAttribute("aria-expanded", "false");
        updateMenuLabel(false);
      }
    });


    const darkModeToggle = this.shadowRoot.querySelector(".dark-mode-toggle");
    const languageToggle = this.shadowRoot.querySelector(".language-toggle");

    function applyLanguage(language) {
      document.documentElement.lang = language;
      const localizedElements = [
        ...document.querySelectorAll(":not(meta)[data-i18n-en][data-i18n-es]"),
        ...this.shadowRoot.querySelectorAll("[data-i18n-en][data-i18n-es]")
      ];

      localizedElements.forEach((element) => {
        element.textContent = language === "es" ? element.dataset.i18nEs : element.dataset.i18nEn;
      });

      [document, this.shadowRoot].forEach((root) => {
        root.querySelectorAll("[data-i18n-placeholder-en][data-i18n-placeholder-es]").forEach((element) => {
          element.placeholder = language === "es" ? element.dataset.i18nPlaceholderEs : element.dataset.i18nPlaceholderEn;
        });
        root.querySelectorAll("[data-i18n-alt-en][data-i18n-alt-es]").forEach((element) => {
          element.alt = language === "es" ? element.dataset.i18nAltEs : element.dataset.i18nAltEn;
        });
        root.querySelectorAll("[data-i18n-aria-en][data-i18n-aria-es]").forEach((element) => {
          element.setAttribute("aria-label", language === "es" ? element.dataset.i18nAriaEs : element.dataset.i18nAriaEn);
        });
      });

      const description = document.querySelector('meta[name="description"]');
      if (description) {
        description.content = language === "es" ? description.dataset.i18nEs : description.dataset.i18nEn;
      }
      document.title = language === "es"
        ? "Jimena Arnaiz González | Ingeniera Informática"
        : "Jimena Arnaiz González | Software Engineer";

      languageToggle.textContent = language === "es" ? "EN" : "ES";
      languageToggle.setAttribute("aria-label", language === "es" ? "Cambiar idioma a inglés" : "Switch language to Spanish");
      this.shadowRoot.querySelector("nav").setAttribute("aria-label", language === "es" ? "Navegación principal" : "Main navigation");
      updateMenuLabel(navMenu.classList.contains("show"), language);
      darkModeToggle.setAttribute("aria-label", document.body.classList.contains("dark-mode")
        ? (language === "es" ? "Cambiar al tema claro" : "Switch to light mode")
        : (language === "es" ? "Cambiar al tema oscuro" : "Switch to dark mode"));

      try {
        localStorage.setItem("portfolio-language", language);
      } catch {}
      document.dispatchEvent(new CustomEvent("portfolio-language-change", { detail: { language } }));
    }

    let initialLanguage = "en";
    try {
      initialLanguage = localStorage.getItem("portfolio-language") === "es" ? "es" : "en";
    } catch {}
    applyLanguage.call(this, initialLanguage);

    languageToggle.addEventListener("click", () => {
      applyLanguage.call(this, document.documentElement.lang === "en" ? "es" : "en");
    });

    function actualizarIconoGitHub() {
      const githubIcon = document.getElementById("github-icon");
      if (!githubIcon) return;
      const esOscuro = document.body.classList.contains("dark-mode");
      githubIcon.src = esOscuro
        ? "../img/github-svgrepo-com.svg"
        : "../img/github-142-svgrepo-com.svg";
    }

    function applyThemeChange() {
      const isDark = document.body.classList.toggle("dark-mode");
      darkModeToggle.setAttribute("aria-pressed", String(isDark));
      const language = document.documentElement.lang;
      darkModeToggle.setAttribute("aria-label", isDark
        ? (language === "es" ? "Cambiar al tema claro" : "Switch to light mode")
        : (language === "es" ? "Cambiar al tema oscuro" : "Switch to dark mode"));
      if (isDark) {
        darkModeToggle.innerHTML = `
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>`;

      }
      else {
        darkModeToggle.innerHTML = `

 <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
            </svg>`;
      }

      actualizarIconoGitHub();
    }

    darkModeToggle.addEventListener("click", () => {
      if (darkModeToggle.classList.contains("is-leaving") || darkModeToggle.classList.contains("is-entering")) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        applyThemeChange();
        return;
      }

      darkModeToggle.classList.add("is-leaving");
      darkModeToggle.addEventListener("animationend", function leaveCurrentIcon(event) {
        if (event.target !== darkModeToggle.querySelector("svg")) return;
        darkModeToggle.removeEventListener("animationend", leaveCurrentIcon);
        applyThemeChange();
        darkModeToggle.classList.remove("is-leaving");
        darkModeToggle.classList.add("is-entering");
        darkModeToggle.addEventListener("animationend", function showNewIcon(event) {
          if (event.target !== darkModeToggle.querySelector("svg")) return;
          darkModeToggle.removeEventListener("animationend", showNewIcon);
          darkModeToggle.classList.remove("is-entering");
        });
      });
    });




  }
}

customElements.define("my-header", MyHeader);
