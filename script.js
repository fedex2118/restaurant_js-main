//codice sconto
const discountCode = "SERVLET20";

//alert("benvenuto, questo è il codice sconto: " + discountCode);

//NOME BURGER DA PROMPT
//var burgerName = prompt("Inserisci il nome del burger");

//per stampare il nome del burger in HTML
//document.getElementById("hamburger-name").textContent = "The " + burgerName + " Burger";

//ref per calcolo
var bottoneCalcolo = document.getElementById("calcoloTotale");

//prezzo burger
var prezzoBurger = document.getElementById("price");

//prendere input codice sconto
var input = document.getElementById("discount");

// ingredienti
var ingr1 = document.getElementById("ingr-1");
var ingr2 = document.getElementById("ingr-2");
var ingr3 = document.getElementById("ingr-3");
var ingr4 = document.getElementById("ingr-4");
var ingr5 = document.getElementById("ingr-5");
var ingr6 = document.getElementById("ingr-6");

console.log(ingr1);
console.log(ingr2);
console.log(ingr3);
console.log(ingr4);
console.log(ingr5);
console.log(ingr6);

console.log(ingr1.checked);
console.log(ingr1.value);

// listener bottone
bottoneCalcolo.addEventListener("click", function() {
    
    
    console.log(ingr1.checked);
    console.log(prezzoBurger);
})


