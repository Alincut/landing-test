// Delegación de eventos "clic"
function handleClickEvents(event) {
  event.stopPropagation();

  // Interacción con la lista de proyectos
  const work_item = event.target.closest(".work-item");
  const work_list = document.querySelector(".work");
  [...work_list.children].forEach((item) => {
    item.classList.remove("is-open");
  });
  if (work_item) {
    if (!work_item.classList.contains("is-open")) {
      work_item.classList.add("is-open");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", handleClickEvents);
  document.addEventListener("submit", (event) => event.preventDefault());
});

//   const checkBreakpoints = () => {
//     if (window.matchMedia("(max-width: 600px)").matches) {
//       console.log("Viewport is 600px or smaller");
//       // Aquí puedes ejecutar código específico para pantallas pequeñas
//     } else if (
//       window.matchMedia("(min-width: 601px) and (max-width: 1200px)").matches
//     ) {
//       console.log("Viewport is between 601px and 1200px");
//       // Aquí puedes ejecutar código específico para pantallas medianas
//     } else if (window.matchMedia("(min-width: 1201px)").matches) {
//       console.log("Viewport is 1201px or larger");
//       // Aquí puedes ejecutar código específico para pantallas grandes
//     }
//   };

//   // Verificar los breakpoints al cargar la página
//   checkBreakpoints();

//   // Verificar los breakpoints al redimensionar la ventana
//   window.addEventListener("resize", checkBreakpoints);
