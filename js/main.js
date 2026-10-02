// Os accordions usam <details> e <summary>; não precisam de JavaScript.

document.addEventListener("touchstart", function () {}, { passive: true });

const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !reduzirMovimento) {
  const blocos = document.querySelectorAll(
    ".important, .section-heading, .categories details, .help, .page-footer"
  );

  const observador = new IntersectionObserver(
    function (entradas) {
      let ordem = 0;

      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) {
          return;
        }

        const bloco = entrada.target;
        bloco.style.setProperty("--ordem", ordem);
        ordem += 1;
        bloco.classList.remove("oculto");
        bloco.classList.add("revelado");
        observador.unobserve(bloco);
      });
    },
    { rootMargin: "0px 0px -10% 0px" }
  );

  blocos.forEach(function (bloco) {
    const area = bloco.getBoundingClientRect();

    if (area.top < window.innerHeight && area.bottom > 0) {
      return;
    }

    bloco.classList.add("oculto");
    observador.observe(bloco);
  });
}
