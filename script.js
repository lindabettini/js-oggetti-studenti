const studenteElement = document.getElementById('studente');

const studenteUno = {
    nome: 'Linda',
    cognome: 'Bettini',
    eta: 27, 
}

for (let key in studenteUno) {
    console.log(`${key} : ${studenteUno[key]}`);
    let studToPrint = (`${key} : ${studenteUno[key]}`);
    studenteElement.innerHTML += `<div>${studToPrint}</div>`;
}

const studenteDue = {
    nome: 'Lucia',
    cognome: 'Dragoni',
    eta: 27, 
}

const studenteTre = {
    nome: 'Martina',
    cognome: 'Bucciarelli',
    eta: 27, 
}

const studentList = [studenteUno, studenteDue, studenteTre]; 
console.log(studentList);