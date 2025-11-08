
  const images = [
    "imagenes/imagen10.jpeg",
    "imagenes/imagen2.jpeg",
    "imagenes/imagen3.jpeg",
    "imagenes/imagen4.jpeg"
  ];

  const texts = [
    {
      title: "Soluciones en estructuras metálicas",
      desc: "Diseñamos, fabricamos e instalamos estructuras metálicas para proyectos industriales, comerciales y residenciales."
    },
    {
      title: "Fabricación personalizada",
      desc: "Nos adaptamos a tus necesidades para crear estructuras únicas con los más altos estándares de calidad."
    },
    {
      title: "Ingeniería y seguridad",
      desc: "Cada proyecto es calculado y diseñado para resistir las condiciones más exigentes y cumplir con las normas vigentes."
    },
    {
      title: "Instalaciones profesionales",
      desc: "Contamos con un equipo experto en montaje de torres y estructuras metálicas de gran escala."
    }
  ];

  let index = 0;
  const mainImage = document.getElementById("mainImage");
  const heroText = document.getElementById("heroText");

  function changeImage() {
    heroText.classList.add("fade");
    setTimeout(() => {
      index = (index + 1) % images.length;
      mainImage.src = images[index];
      heroText.querySelector("h1").textContent = texts[index].title;
      heroText.querySelector("p").textContent = texts[index].desc;
      heroText.classList.remove("fade");
    }, 800);
  }

  // Cambio automático cada 7 segundos
  setInterval(changeImage, 7000);

  // Cambio manual con clic
  mainImage.addEventListener("click", changeImage);
