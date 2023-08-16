const kirbyObj = {
    id: 20,
    titulo: "Kirby",
    precio: 29.990,
    color: "rojo",
    descripción: "Kirby (カービイ Kābī) es un personaje inicial en Super Smash Bros., quien se encuentra en la posición número 2 en la tier list por tener una de las mejores recuperaciones, debido a su baja velocidad de caída y por tener la habilidad de hacer 5 saltos en el aire, aparte de que también posee un movimiento especial hacia arriba que le ayuda aún más en su recuperación. No obstante, Kirby es un personaje flotante, y por ende, es más vulnerable a los K.O. de forma vertical. Aún así, Kirby tiene combates generalmente a su favor con casi todos los personajes.",
};

const articulosSection = document.querySelector('.articulos');

articulosSection.innerHTML =`
<article id="articulo">
    <h2>${kirbyObj.titulo}</h2>
    <p>${kirbyObj.precio}</p>
    <p>${kirbyObj.descripción}</p>
</article>`


console.log(kirbyObj.id)