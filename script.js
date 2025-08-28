function mostrarInfo(tipo) {
  const info = {
    quienes: "Somos una tienda dedicada a ofrecer productos de calidad a precios accesibles.",
    mision: "Nuestra misión es brindar una experiencia de compra única y satisfactoria.",
    vision: "Ser líderes en el mercado ofreciendo innovación y servicio al cliente.",
    dedicatoria: "Este proyecto surge en colaboracion con mi amada futura esposa, con el proposito de tener algo muy nuestro en lo que pudieramos trabajar juntos y ayudarla llegar a ser lo grande que merece ser"
  };

  document.getElementById("info").innerText = info[tipo];
}

function mostrarCuadro(nombre) {
  const mensajes = {
    "Ofertas": "Aquí encontrarás las mejores promociones del momento.",
    "Ropa": "Explora nuestra colección de ropa para todas las estaciones.",
    "Accesorios": "Complementa tu estilo con nuestros accesorios únicos.",
    "Cuidado Personal": "Productos para tu bienestar y cuidado diario."
  };

  document.getElementById("info").innerText = mensajes[nombre];
}
