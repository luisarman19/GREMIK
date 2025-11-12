
  const images = [
    "imagenes/imagen8.jpeg",
    "imagenes/imagen9.jpeg",
    "imagenes/imagen10.jpeg",
    "imagenes/imagen11.jpeg"
  ];

  const texts = [
    {
      title: "Soluciones en estructuras metálicas",
      desc: "Diseñamos, fabricamos e instalamos estructuras metálicas para proyectos industriales, comerciales y residenciales."
    },
    {
      title: "Fabricación personalizada",
      desc: "Creamos estructuras a medida con materiales de la más alta calidad."
    },
    {
      title: "Ingeniería y precisión",
      desc: "Cada diseño es calculado para garantizar estabilidad, seguridad y eficiencia."
    },
    {
      title: "Instalaciones profesionales",
      desc: "Contamos con personal capacitado para el montaje de torres y estructuras metálicas."
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

  setInterval(changeImage, 10000);
  mainImage.addEventListener("click", changeImage);

  // Detecta las tarjetas y las anima al hacer scroll
  const cards = document.querySelectorAll('.service-card');

  function showCardsOnScroll() {
    const triggerBottom = window.innerHeight * 0.85; // punto donde empieza la animación

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', showCardsOnScroll);
  window.addEventListener('load', showCardsOnScroll);


