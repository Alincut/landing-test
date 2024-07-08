// Delegacion de eventos //
function handleEvents(first_event) {
  first_event.stopPropagation();

  // Click sobre los proyectos
  const project_item = first_event.target.closest(".project-item");
  function closeProjectList() {
    let project_list = document.querySelector(".project-list");
    [...project_list.children].forEach((item) => {
      item.classList.remove("is-open");
    });
  }
  if (project_item) {
    if (!project_item.classList.contains("is-open")) {
      closeProjectList();
      project_item.classList.add("is-open");
    }
  } else {
    closeProjectList();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", handleEvents);
  document.addEventListener("submit", (event) => event.preventDefault());

  const checkBreakpoints = () => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      console.log("Viewport is 600px or smaller");
      // Aquí puedes ejecutar código específico para pantallas pequeñas
    } else if (
      window.matchMedia("(min-width: 601px) and (max-width: 1200px)").matches
    ) {
      console.log("Viewport is between 601px and 1200px");
      // Aquí puedes ejecutar código específico para pantallas medianas
    } else if (window.matchMedia("(min-width: 1201px)").matches) {
      console.log("Viewport is 1201px or larger");
      // Aquí puedes ejecutar código específico para pantallas grandes
    }
  };

  // Verificar los breakpoints al cargar la página
  checkBreakpoints();

  // Verificar los breakpoints al redimensionar la ventana
  window.addEventListener("resize", checkBreakpoints);
});
