/**
 * 
   Crea un array composto da 10 automobili.
   Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

   Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
   Infine stampa separatamente i 3 array.
 */

const cars = [
  {
    marca: "Toyota",
    modello: "01",
    alimentazione: "benzina",
  },
  {
    marca: "Mitsubishi",
    modello: "XYZ",
    alimentazione: "diesel",
  },
  {
    marca: "Lancia",
    modello: "Z-251",
    alimentazione: "gpl",
  },
  {
    marca: "Fiat",
    modello: "Panda",
    alimentazione: "benzina",
  },
  {
    marca: "Ford",
    modello: "Transit",
    alimentazione: "elettrico",
  },
  {
    marca: "Renault",
    modello: "Megane",
    alimentazione: "metano",
  },
  {
    marca: "Dacia",
    modello: "Sandero",
    alimentazione: "diesel",
  },
  {
    marca: "Citroen",
    modello: "C3",
    alimentazione: "gpl",
  },
  {
    marca: "Toyota",
    modello: "Yaris",
    alimentazione: "benzina",
  },
  {
    marca: "Dacia",
    modello: "Sandero",
    alimentazione: "diesel",
  },
];

const benzina = [];
const diesel = [];
const others = [];
