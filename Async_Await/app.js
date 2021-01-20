// Exercici 1 Nivell 1
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmpleado = (id) => {
    const index = employees.findIndex(x => x.id == id);
    const request = new Promise((resolve, reject) => {
        if (index != null && index != -1) resolve(employees[index])
        else reject(new Error("Employee not found"));
    });
    return request
}

const getSalario = (employee) => {
    const index = salaries.findIndex(x => x.id == employee.id);
    const request2 = new Promise((resolve, reject) => {
        if (index != null && index != -1) resolve(salaries[index].salary)
        else reject(new Error("Employee not found"));
    });
    return request2
}

async function readData() {
    const empleat = await getEmpleado(1);
    console.log(empleat);
    const salari = await getSalario(employees[0]);
    console.log(salari);
}

readData();

// Exercici 2  Nivell 1
async function readData2(id) {
    const empleat = await getEmpleado(id);
    const salari = await getSalario(empleat);
    console.log(`${empleat.name} ${salari}`);
}

readData2(2);

// Exercici 1 Nivell 2
let languages = [{
    id: 1,
    name: 'JavaScript'
}, {
    id: 2,
    name: 'Kotlin'
},{
    id: 3,
    name: 'Python'
}];

// let languages = null;        // Uncomment to simulate error for Exerxici 1 Nivell 3 and change name of "languages" object defined above

async function readLanguages() {
    const getLanguage = () => {
        const request = new Promise((resolve, reject) => {
            if (languages != null) setTimeout(() => resolve(languages), 3000);
            else reject(new Error("Languages list not found"));
        });
        return request
    }
    const langs = await getLanguage();
    console.log(langs);
}

readLanguages();        // Comment to pass error to Exercici 1 Nivell 3

// Exercici 1  Nivell 3
readLanguages().catch(err => console.log(err.message));

