const departamentos = [
{ departamento: 323, propietario: "Natalia Jiménez", telft: "+56 9 5312 4578"},
{ departamento: 123, propietario: "Luis Fonsi", telft: "+56 9 4612 7894"},
{ departamento: 431, propietario: "David Bisbal", telft: "+56 9 8978 4465"},
{ departamento: 412, propietario: "Noel Schajris", telft: "+56 9 9874 6432"},
{ departamento: 203, propietario: "Ricardo Montaner", telft: "+56 9 8764 6813"},
];

for (let dpto of departamentos) {
    const template = `
    <tr>
    <td>${dpto.departamento}</td>
    <td>${dpto.propietario}</td>
    <td>${dpto.telft}</td>
    </tr>
    `;
    tbody.innerHTML += template;
    }





// const producto = {
//   id: 43,
//   titulo: "Cafetera magnética",
//   precio: 23990,
//   color: "rojo",
//   descripción:
//     "Kirby es un personaje inicial en Super Smash Bros., quien se encuentra en la posición número 2 en la tier list por tener una de las mejores recuperaciones, debido a su baja velocidad de caída y por tener la habilidad de hacer 5 saltos en el aire, aparte de que también posee un movimiento especial hacia arriba que le ayuda aún más en su recuperación. No obstante, Kirby es un personaje flotante, y por ende, es más vulnerable a los K.O. de forma vertical. Aún así, Kirby tiene combates generalmente a su favor con casi todos los personajes.",
// };
// const templateTarjeta = document.querySelector(".tarjeta");
// templateTarjeta.innerHTML = `
//     <article class="articulo">
//     <h2>${producto.titulo}</h2>
//     <p>${producto.precio}</p>
//     <p>${producto.color}</p>
//     <img src="../img/kirby.png">
//     <p>${producto.descripción}</p>
//     <a href= "/producto/${producto.id}"><button>Ver más...</button></a>
    
//     </article>


// `;

// const kirbyObj = {
//     id: 20,
//     titulo: "Kirby",
//     precio: 29.990,
//     color: "rojo",
//     src: "../img/kirby.png",
//     descripción: "Kirby es un personaje inicial en Super Smash Bros., quien se encuentra en la posición número 2 en la tier list por tener una de las mejores recuperaciones, debido a su baja velocidad de caída y por tener la habilidad de hacer 5 saltos en el aire, aparte de que también posee un movimiento especial hacia arriba que le ayuda aún más en su recuperación. No obstante, Kirby es un personaje flotante, y por ende, es más vulnerable a los K.O. de forma vertical. Aún así, Kirby tiene combates generalmente a su favor con casi todos los personajes.",
// };
// const articulosSection = document.querySelector('.articulos');
// articulosSection.innerHTML =`
// <article id="articulo">
//     <h2>${kirbyObj.titulo}</h2>
//     <p>${kirbyObj.precio}</p>
//     <p>${kirbyObj.descripción}</p>
//     <figure>
//         <img>${kirbyObj.src}</img>
//     </figure>
// </article>`

// const preciosData = [1000, 2500, 3100, 4800, 7500];
// const preciosDOM = document.querySelector('.preciosS');
// const elemento0 = preciosData[1];
// preciosDOM.innerHTML+= '<p>' + elemento0 + '</p>'
// for (let item of preciosData) {
//     preciosDOM.innerHTML+= '<p>' + item + '</p>'
// }
// const estudiantes = [
//     ["Francisca", 10, 8, 10],
//     ["Camila", 9, 9, 10, 9],
//     ["Patricio", 7, 9, 9, 6, 10, 10],
//     ["Pedro", 8, 8, 10]
//     ];
//     let html = ""
//     for (let estudiante of estudiantes) {
//     html += `<p>`
//     for (let nota of estudiante){
//     html += ` ${nota} `
//     }
//     html += `</p>`
//     }
//     const body = document.querySelector("body")
//     body.innerHTML = html;

//arreglo bidimiencional
//     const productos = [
//         ["Patineta", "verde", 35990],
//         ["Bicicleta", "Amarilla", 120990],
//         ["Patines", "Morado", 60990],
//         ["Scooter", "Negro", 250990]
// ];
// let html1 = ''
// for (let producto of productos) {
// html1 += `<div>
// <h2> ${producto[0]} </h2>
// <p> ${producto[1]} </p>
// <p> ${producto[2]} </p>
// </div>`;
// }
// const mercaderia = document.querySelector(".productos")
// mercaderia.innerHTML = html1

//Arreglos bidimencionales con doble ciclo
// const estudiantes = [
//     ["Francisca", 10, 8, 10],
//     ["Camila", 9, 9, 10, 9],
//     ["Patricio", 7, 9, 9, 6, 10, 10],
//     ["Pedro", 8, 8, 10]
//     ];
//     let html = ""
//     for (let estudiante of estudiantes) {
//     html += `<p>`
//     for (let nota of estudiante){
//     html += ` ${nota} `
//     }
//     html += `</p>`
//     }
//     const body = document.querySelector("body")
//     body.innerHTML = html
