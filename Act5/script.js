// 1. Funció que comprova si un nombre és divisible per 2 mitjançant una promesa
function esDivisibleEntreDos(nombre) {
    return new Promise((resolve, reject) => {
        if (nombre % 2 === 0) {
            resolve(`${nombre} és divisible entre dos.`);
        } else {
            reject(`${nombre} no és divisible entre dos.`);
        }
    });
}

// Prova de la funció esDivisibleEntreDos
esDivisibleEntreDos(10)
    .then(resultat => console.log(resultat))
    .catch(error => console.log(error));

// 2. Assignació d'una promesa a una variable per comprovar si un valor està entre 0 i 10
let comprovaValor = new Promise((resolve, reject) => {
    const valor = 5;
    if (valor >= 0 && valor <= 10) {
        resolve(`${valor} està dins de l'interval [0, 10].`);
    } else {
        reject(`${valor} està fora de l'interval [0, 10].`);
    }
});

// Prova de la variable comprovaValor
comprovaValor
    .then(resultat => console.log(resultat))
    .catch(error => console.log(error));

// 3. Funció que comprova si una lletra és una vocal
function esVocal(lletra) {
    let arr = ["a", "e", "i", "o", "u"];
    return new Promise((resolve, reject) => {
        if (arr.includes(lletra)) {
            resolve(`${lletra} és una vocal.`);
        } else {
            reject(`${lletra} no és una vocal.`);
        }
    });
}

// Prova de la funció esVocal
esVocal('e')
    .then(resultat => console.log(resultat))
    .catch(error => console.log(error));

// 4. Funció que calcula la divisió de dos nombres mitjançant una promesa
function divide(dividend, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject('Error: Divisió per zero.');
        } else {
            resolve(dividend / divisor);
        }
    });
}

// Prova de la funció divide
divide(10, 2)
    .then(quocient => console.log(`Quocient: ${quocient}`))
    .catch(error => console.log(error));
divide(10, 0)
    .then(quocient => console.log(`Quocient: ${quocient}`))
    .catch(error => console.log(error));
