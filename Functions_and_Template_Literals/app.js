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
let funcArray = [
    () => { console.log(funcArray[1]()) },
    () => { console.log(funcArray[2]()); return 10 },
    () => { console.log(funcArray[3]()); return 9 },
    () => { console.log(funcArray[4]()); return 8 },
    () => { console.log(funcArray[5]()); return 7 },
    () => { console.log(funcArray[6]()); return 6 },
    () => { console.log(funcArray[7]()); return 5 },
    () => { console.log(funcArray[8]()); return 4 },
    () => { console.log(funcArray[9]()); return 3 },
    () => { console.log(1); return 2 }
];
funcArray[0]();

// Exercici 2  Nivell 3
(name => console.log(name))("JuanC");

