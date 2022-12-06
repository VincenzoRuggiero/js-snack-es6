// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]

// Crea un nuovo array con la lista dei mammiferi.
// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI

const animals = [
  {
    nome: "leone",
    famiglia: "felidi",
    classe: "mammiferi",
  },

  {
    nome: "cane",
    famiglia: "canidi",
    classe: "mammiferi",
  },
  {
    nome: "gallina",
    famiglia: "fasianidi",
    classe: "uccelli",
  },
  {
    nome: "cavallo",
    famiglia: "equidi",
    classe: "mammiferi",
  },
  {
    nome: "tartaruga",
    famiglia: "testudinati",
    classe: "rettili",
  },
  {
    nome: "coccinella",
    famiglia: "coleotteri",
    classe: "insetti",
  },
  {
    nome: "farfalla",
    famiglia: "papilionidi",
    classe: "insetti",
  },
  {
    nome: "pesce",
    famiglia: "vertebrati",
    classe: "vertebrati",
  },
];

const mammiferi = animals.filter((mammifero) => {
  if (mammifero.classe === "mammiferi") {
    return true;
  }
});

console.log(mammiferi);
