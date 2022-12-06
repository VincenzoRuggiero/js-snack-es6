/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */

const persone = [
  {
    nome: "Vincenzo",
    cognome: "Ruggiero",
    age: 33,
  },
  {
    nome: "Mario",
    cognome: "Rossi",
    age: 22,
  },
  {
    nome: "Sara",
    cognome: "Melis",
    age: 18,
  },
  {
    nome: "Morena",
    cognome: "Lombardi",
    age: 15,
  },
  {
    nome: "Stefano",
    cognome: "De Paolis",
    age: 13,
  },
  {
    nome: "Giorgio",
    cognome: "Manelli",
    age: 45,
  },
  {
    nome: "Luisa",
    cognome: "Trebbi",
    age: 10,
  },
  {
    nome: "Michela",
    cognome: "Laredi",
    age: 17,
  },
  {
    nome: "Luigi",
    cognome: "Santori",
    age: 29,
  },
  {
    nome: "Daniele",
    cognome: "Bressi",
    age: 19,
  },
];

let canDrive = persone.filter((person) => {
  if (person.age >= 18) {
    return console.log(`${person.nome} può guidare`);
  }
});
