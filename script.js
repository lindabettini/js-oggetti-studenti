const studenteElement = document.getElementById('studente');

const studente = {
    nome: 'Linda',
    cognome: 'Bettini',
    eta: 27, 
}

for (let key in studente) {
    console.log(`${key} : ${studente[key]}`);
    studenteElement.innerHTML = (`${key} : ${studente[key]}`);
}
