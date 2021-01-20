// Exercici 1 Nivell 1
const isOk = true;          // To simulate correct result
const isError = true;       // To simulate wrong result
const correct = () => console.log("El resultado es correcto");
const error = () => console.log("El resultado es erróneo");
const myFunction = (res, rej) => {
    return new Promise((resolve, reject) => {
        if (isOk) resolve = res;        // NOT A REAL CASE (BOTH CASES NOT POSSIBLE), JUST FOR TESTING
        if (isError) reject = rej;
        resolve();
        reject();
    })
}

myFunction(correct, error);

// Exercici 2  Nivell 1
((test, printer) => {
    let okmsg ="Result is OK";
    let errmsg ="Result is wrong";
    test ? printer(okmsg) : printer(errmsg)
})(true, myPrinter)

function myPrinter(msg) {
    console.log(msg);
}

// Exercici 1 Nivell 2
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
        if (index != null && index != -1) resolve(employees[index].name)
        else reject(new Error("Employye not found"));
    });
    return request
}

getEmpleado(3).then( res => console.log(res)).catch(err => console.log(err.message));

// Exercici 2 Nivell 2
const getSalario = (employee) => {
    const index = salaries.findIndex(x => x.id == employee.id);
    const request2 = new Promise((resolve, reject) => {
        if (index != null && index != -1) resolve(salaries[index].salary)
        else reject(new Error("Employye not found"));
    });
    return request2
}

getSalario(employees[0]).then(res => console.log(res)).catch(err => console.log(err.message));

// Exercici 3 Nivell 2
Promise.all([getEmpleado(1), getSalario(employees[1])]).then(res => console.log(res));

// Exercici 1  Nivell 3
Promise.all([getEmpleado(4), getSalario(employees[2])]).then(res => console.log(res)).catch(err => console.log(err.message));
