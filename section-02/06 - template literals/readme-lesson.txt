Template Literals: são literais string que permitem expressões embutidas. Você pode usar string multi-linhas e interpolação de string com elas. Elas eram chamadas "template strings" nas versões anteriores à especificação ES2015.

Maneira antiga de concatenar strings:
console.log('Hudson' + ' ' + 'tem 18 anos');
Maneira nova:
console.log(`Hudson tem 18 anos`);

Maneira antiga de concatenar templates em HTML:
html = '<ul>' +
        '<li>Name: ' + name + ' </li>' +
        '<li>Age: ' + age + ' </li>' + 
        '<li>Job: ' + job + ' </li>' +
        '<li>City: ' + city + ' </li>' +
        '</ul>';
Maneira nova de concatenar templates em HTML:
Obs: Para encapsular expressões dentro de strings, você precisa usar a sintaxe:
'${}', essa sintaxe aceita variaveis, funções, expressões matematicas e também logicas.
html = `
     <ul>
     <li>Name: ${name}</li>
     <li>Age: ${age}</li>
     <li>Job: ${job}</li>
     <li>City: ${city}</li>
     <li>${2 + 2}</li>
     <li>${hello()}</li>
     <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
     </ul>
     `;
