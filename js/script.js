// ? - il pc genera 5 numeri random da 1 a 50
// ? - in pagina compare un countdown di 30 secondi per la memorizzazione da parte dell'utente dei 5 numeri random 
// ? - al termine del countdown i 5 numeri random scompaiono 
// ? - e appaiono 5 caselle input dove l'utente inserirà i 5 numeri e il bottone di conferma 
// ? - al click del bottone conferma, il programma esegue un confronto tra i numeri randomici e i numeri inseriti dall'utente. 
// ? - in pagina verranno visualizzati i numeri azzeccati dall'utente cerchiati di verde e un messaggio di quanti numeri ha indovinato

// TODO: CREO ARRAY VUOTO PER I 5 NUMERI RANDOM 
let randomNumbers = [];
console.log(randomNumbers);

// TODO: INIZIALIZZO IL GIOCO CON UNA FUNZIONE
function InitializeGame() {
    generateRandomNumbers(); // funzione per generare i 5 numeri randomici
    displayCoundown(30); // funzione per visualizzare in pagina il countdown
    displayNumbers(); // funzione per visualizzare in pagina i numeri 
}
// ! ho raggruppato tutte le funzioni presenti nel programma, in un'unica funzione

// TODO: GENERO 5 NUMERI RANDOM TRA 1 E 50 all'interno della loro funzione
function generateRandomNumbers() {
    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * 50) + 1;
        randomNumbers.push(randomNumber); // li aggiungo all'array vuoto
    }
    console.log(randomNumbers);
}

// TODO: MOSTRO I NUMERI IN PAGINA ATTRAVERSO LA FUNZIONE 
function displayNumbers() {
    const numbersList = document.getElementById("numbers-list"); 
    // seleziono un elemento HTML tramite ID
    numbersList.innerHTML = ""; // Pulizia della lista
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
        console.log(li);
    })

    console.log(numbersList);
}

// TODO: COUNTDOWN
function displayCoundown(seconds) { // nome funzione(parametro seconds specifica i secondi del countdown)
    const countdownElement = document.getElementById("countdown");
    // countdownElement = cuondown ID presente in HTML //! (individuo elemento nel DOM)
    
    // * avvio intervallo - imposto un timer
    const interval = setInterval(() => {
    // interval = variabile x memorizzare il riferimento del timer così da poterlo fermare (clearInterval)
    //! setInterval imposta il timer che esegue (=>) la funzione anonima () ogni 1000 millisecondi
    // (vedi 1000 scritto alla fine della funzione)
        countdownElement.textContent = `Tempo rimasto: ${seconds} secondi`;
        // countdownElement.textContent aggiorna il contenuto di testo ogni secondo passato
        seconds--;
        // decremento i secondi ad ogni iterazione

        //* condizione per terminare il conto alla rovescia
        if(seconds < 0) { // se seconds < 
            clearInterval(interval); // interrompo il timer così non continua a eseguire la funzione
            countdownElement.textContent = ""; // cancello il contenuto del countdown 
            hideNumbers(); // chiamo la funzione per nascondere i numeri random
            showInputForm(); // chiamo funzione per mostrare input (dove vengono inseriti i numeri dall'utente)
        }
    }, 1000); //* esegui la funzione ogni 1000 millisecondi
}

// TODO: NASCONDO I NUMERI DA MEMORIZZARE
function hideNumbers() { // definisco la funzione 
    const numberList = document.getElementById("numbers-list"); // seleziono un elemento HTML tramite ID
    numberList.innerHTML = ""; // cancello contenuto elemento 
}

// TODO: MOSTRO INPUT PER INSERIMENTO NUMERI DA PARTE DELL'USER
function showInputForm() { // definisco la funzione
    const form = document.getElementById("answers-form"); // seleziono un elemento HTML tramite ID
    form.classList.remove("d-none"); // rimuovo display none - lo rendo visibile
}

// TODO: CONFRONTO I NUMERI INSERITI CON QUELLI GENERATI
function checkAnswer(event) { // definisco la funzione
    event.preventDefault(); 
    //! .preventDefault previene il reload della pagina!!
    //! blocca il comportamento predefinito della pagina
    //! nel caso di FORM impedisce il refresh o l'invio automatico del modulo

    const inputs = document.querySelectorAll("#input-group input"); // seleziono tutti gli input
    //! inputs = "NodeList" (simile array), contiene tutti gli elementi <input>
    const userNumbers = Array.from(inputs).map(input => parseInt(input.value));
    //! array.from converte il "NodeList" in un vero array così posso utilizzare i metodi array (map) 
    // .map(input => itera su ogni elemento dell'array
    // input.value recupera il valore del campo di input
    // parseInt converte il valore di input.value in numero intero
    // ? a questo punto USERNUMBER sarà un array di numeri interi inseriti dall'utente
    
    displayResults(userNumbers); // chiamo la funzione displayResults 
    // mostra il risultato del confronto
}

// TODO: MOSTRO I RISULTATI
function displayResults(userNumbers) { // definisco la funzione
    const message = document.getElementById("message"); // seleziono un elemento HTML tramite ID
    let correctCount = 0; // variabile per contare i numeri corretti

    const result = randomNumbers.map(num => { 
        //.map itera su ogni elemento dell'array userNumbers
        if (randomNumbers.includes(num)) { // controllo se il numero utente è presente nell'array randomNumbers 
            correctCount++; // se TRUE aumento il correctCount
            return `<span style="color: green; font-weight: bold;">${num}</span>`; // e ritorna una stringa con il numero evidenziato
        } else { // altrimenti se FALSE
            return `<span>${num}</span>`; // restituisce stringa con numero visualizzatto normalmente
        }
    });

    //* mostro i numeri generati
    message.innerHTML = `Numeri generati: ${randomNumbers.join(", ")}<br>`;
    //* mostro i numeri inseriti
    message.innerHTML += `Numeri inseriti: ${result.join(", ")}<br>`; 
    //* mostro il conteggio dei numeri corretti
    message.innerHTML += `Hai indovinato ${correctCount} numeri!`; 
}

// TODO: EVENT LISTENER PER BOTTONE DI CONFERMA
document.getElementById("answers-form").addEventListener("submit", checkAnswer);

// TODO: AVVIO OIL GIOCO
InitializeGame();