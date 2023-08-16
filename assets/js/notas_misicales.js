
let notas = ['DO','RE','MI','FA','SOL','LA','SI'];
let notasUl = document.getElementById('notas_misicales');
for (let item of notas){
    notasUl.innerHTML+= `<li>${item}</li>`
}

