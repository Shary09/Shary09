(() => {
    const loaderScript = document.currentScript;
    const headerMount = document.querySelector("[data-header-mount]");

    if (!loaderScript || !headerMount) {
        return;
    }

    const projectRoot = new URL("../", loaderScript.src);

    fetch(new URL("includes/header.html", projectRoot))
        .then((response) => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar header.html: ${response.status}`);
            }

            return response.text();
        })
        .then((markup) => {
            headerMount.outerHTML = markup;

            const navbar = document.querySelector(".navbar");
            const pageFile = window.location.pathname.split("/").pop().toLowerCase();
            const currentPage = !pageFile || pageFile === "index.html"
                ? "home"
                : pageFile.replace(/\.html$/, "");
            const pageRoutes = {
                home: "index.html#inicio",
                "sobre-mi": "pages/sobre-mi.html",
                habilidades: "pages/habilidades.html",
                proyectos: "pages/proyectos.html",
                educacion: "pages/educacion.html",
                experiencia: "pages/experiencia.html",
                contacto: "pages/contacto.html"
            };

            navbar.classList.toggle("navbar--home", currentPage === "home");
            navbar.querySelector("[data-home-link]").href = new URL("index.html", projectRoot).href;

            navbar.querySelectorAll("[data-nav-page]").forEach((link) => {
                const page = link.dataset.navPage;
                link.href = new URL(pageRoutes[page], projectRoot).href;

                if (page === currentPage) {
                    link.classList.add("active");
                    link.setAttribute("aria-current", "page");
                }
            });

            const menuButton = navbar.querySelector(".menu-button");
            const navLinks = navbar.querySelector(".nav-links");

            menuButton.addEventListener("click", () => {
                navLinks.classList.toggle("mobile-active");
                menuButton.setAttribute(
                    "aria-expanded",
                    navLinks.classList.contains("mobile-active")
                );
            });
        })
        .catch((error) => console.error(error));
})();