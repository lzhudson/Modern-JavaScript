Objetos: Objetos em JavaScript, assim como em muitas outras linguagens de programação, podem ser comparados a objetos na vida real. O conceito de objetos em JavaScript pode ser entendido com objetos tangíveis da vida real.

Criando um objeto literal:
const person = {  
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com', 
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function() {
    return 2019 - this.age;
  }
}

Accesando propiedades do objeto:
objetoNome.propiedade;
Retorna o valor da propiedade do objeto se a mesma existir.
person.firstName; Saida: Steve;
Usando notação de array:
person['lastName']; Saida: Smith;

Iterando arrays que contem objetos:
Retorna os valores conforme o array for iterado.
const people = [
  {name: 'Jhon', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
];
for(let i = 0; i < people.length; i++) {
  console.log(people[i].name); Saida: Jhon, Mike, Nancy
  console.log(people[i].age); Saida: 30,23,40.
}