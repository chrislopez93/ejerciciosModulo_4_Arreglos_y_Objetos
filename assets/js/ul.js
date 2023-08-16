const data = ['Javiera', 'Camila', 'Francisco', 'Jorge', 'Daniela'];
const d = document.getElementById('dynamic-content');
for (const item of data) {
    d.innerHTML+= `<li> ${item} </li>`;
}