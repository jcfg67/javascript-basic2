// Exercici 1 Nivell 1
((num1, num2) => console.log(num1 + num2))(35, 65);

// Exercici 1  Nivell 2
console.log(((param) => ({name : param}))("Joan"));

// Exercici 2 Nivell 2
class Persona {
    constructor(nom) {
        this.nom = nom;
    }

    decirNombre() {
        return console.log(this.nom);
    }
}

let p1 = new Persona("Carlos");
p1.decirNombre();

// Exercici 1  Nivell 3
function Persons(name, surname, age, gender) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
}

let p2 = new Persons("Jhon", "Smith");
let p3 = new Persons("Peter", "Parker", 35, "male");
console.log(p2);
console.log(p3);


