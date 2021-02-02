// Exercici 1 Nivell 1
let printUser = name => console.log(name);
printUser("Juan Carlos");

// Exercici 1  Nivell 2
let nom = "Juan Carlos";
let cognom = "Fernandez";
console.log(`${nom} ${cognom}`);

// Exercici 2 Nivell 2
`${printUser("JC")}`;

// Exercici 1  Nivell 3
// Crea una matriu de deu funcions i empleni-la mitjançant un bucle. Cada funció comptarà del 0-9 imprimint-ho per pantalla. Invoqui cada funció de l'array iterativament. Haurà d'imprimir-se per pantalla el compte de 0-9 deu vegades

let funcArray = [];
let func = () => {for (let i=0; i<10; i++) console.log(i)};
for (let i=0; i<10; i++) funcArray[i] = func;

funcArray.forEach(i => i());


// Exercici 2  Nivell 3
(name => console.log(name))("JuanC");

