const studente = {
    nome: 'Linda',
    cognome: 'Bettini',
    eta: 27, 
}

for (let key in studente) {
    console.log(`${key} : ${studente[key]}`);
}
