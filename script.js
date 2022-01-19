const studenteElement = document.getElementById('studente');

const studente = {
    nome: 'Linda',
    cognome: 'Bettini',
    eta: 27, 
}

for (let key in studente) {
    console.log(`${key} : ${studente[key]}`);
    let studToPrint = (`${key} : ${studente[key]}`);
    studenteElement.innerHTML += `<div>${studToPrint}</div>`;
}
