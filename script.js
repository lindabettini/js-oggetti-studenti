/*1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
   BONUS:
   Usiamo il DOM per stampare e chiedere le informazioni all'utente!*/

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


const studentList = [

studenteDue = {
    nome: 'Lucia',
    cognome: 'Dragoni',
    eta: 27, 
},

studenteTre = {
    nome: 'Martina',
    cognome: 'Bucciarelli',
    eta: 27, 
},

studenteQuattro = {
    nome: 'Lucia',
    cognome: 'Bonini',
    eta: 20, 
}
]

console.log(studentList);

// for (let i = 0; i < studentList.length; i++){
//     console.log(`QUA: ${studentList[i]}`);
//     const listaToPrint = studentList[i];
    
//     for (let key in )
// }