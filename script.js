/*1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
   BONUS:
   Usiamo il DOM per stampare e chiedere le informazioni all'utente!*/


   // // STAMPO OGGETTO STUDDENTE 
const studenteElement = document.getElementById('studente');

const studenteUno = {
    nome: 'Linda',
    cognome: 'Bettini',
    eta: 27, 
}

for (let key in studenteUno) {    
    let studToPrint = (`${key} : ${studenteUno[key]}`);
    studenteElement.innerHTML += `<div>${studToPrint}</div>`;
}

// // CREO ARRAYY DI STUDENTI SU CUI CICLARE

const studentList = [
    studenteDue = {nome: 'Antonella', cognome: 'Dragoni', eta: 27},
    studenteTre = {nome: 'Martina', cognome: 'Bucciarelli', eta: 27},
    studenteQuattro = {nome: 'Lucia', cognome: 'Bonini', eta: 20}
]

// // Stampare nome e cognome oggetti array

const listToPrint = document.getElementById('lista-studenti');
let print = '';

for (let i = 0; i < studentList.length; i++){

    let currentStudent = studentList[i];
      
    for(let key in currentStudent){
        if (key !== 'eta') {         
            listToPrint.innerHTML += `<div>${[key]} : ${currentStudent[key]}</div>`;
        }
        if (key == 'cognome'){
            listToPrint.innerHTML += `<hr>`;
        }        
    }
}


// < FUNZIONEREBBE ANCHE COSI' >
// for (let i = 0; i < studentList.length; i++){
//     const currentStudent = studentList[i];

//     const currentName = currentStudent.nome;
//     const currentSurname = currentStudent.cognome;

//     console.log(currentName);
//     console.log(currentSurname);
//     }