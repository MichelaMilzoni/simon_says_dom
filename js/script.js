// ? - il pc genera 5 numeri random da 1 a 50
// ? - in pagina compare un countdown di 30 secondi per la memorizzazione da parte dell'utente dei 5 numeri random 
// ? - al termine del countdown i 5 numeri random scompaiono 
// ? - e appaiono 5 caselle input dove l'utente inserirà i 5 numeri e il bottone di conferma 
// ? - al click del bottone conferma, il programma esegue un confronto tra i numeri randomici e i numeri inseriti dall'utente. 
// ? - in pagina verranno visualizzati i numeri azzeccati dall'utente cerchiati di verde e un messaggio di quanti numeri ha indovinato

// * CREO ARRAY VUOTO PER I 5 NUMERI RANDOM 
let randomNumbers = [];

// * INIZIALIZZO IL GIOCO CON UNA FUNZIONE
function InitializeGame() {
    generateRandomNumbers(); // funzione per generare i 5 numeri randomici
    displayCoundown(30); // funzione per visualizzare in pagina il countdown
    displayNumbers(); // funzione per visualizzare in pagina i numeri 
}
// ! ho raggruppato tutte le funzioni presenti nel programma, in un'unica funzione

// * GENERO 5 NUMERI RANDOM TRA 1 E 50 all'interno della loro funzione
function generateRandomNumbers() {
    for (let i = 0; i < 5; index++) {
        let randomNumber = Math.floor(Math.random() * 50) + 1;
        randomNumbers.push(randomNumber); // li aggiungo all'array vuoto
    }
}

// * MOSTRO I NUMERI IN PAGINA ATTRAVERSO LA FUNZIONE 
function displayNumbers() {
    const numbersList = document.getElementById("numbers-list"); 
    randomNumbers.forEach(num => { // num = ogni elemento dell'array randomNumbers 
        // ! .for.each = funzione di callback su ogni elemento 
        // per ogni elemento (num) dell'array randomNumbers, creo una lista con proprietà HTML 
        const li = document.createElement("li"); 
        // creo variabile li 
        li.textContent = num;
        // li contiene un numero (num) dell'arrray randomNumbers
        li.classList.add("fs-3", "fw-bold");
        // aggiungo a ogni li delle proprietà Bootstrap 
        numbersList.appendChild(li);
        // ! appendChild aggiunge un nuovo elemento figlio del nodo specificato 
        // ! (numberList in HTML)
    })
}