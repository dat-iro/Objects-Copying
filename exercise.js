const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

//person1 e person2 puntano entrambe allo stesso oggetto, pertanto modificando il valore
//di una delle due variabili si cambiano i valori presenti nell'oggetto puntato da entrambe,
//quindi in questo caso firstName diventerà per entrambi "Simon".
