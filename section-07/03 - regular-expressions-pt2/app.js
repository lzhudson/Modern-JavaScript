let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = /d$/i; // Must ends with
re = /world$/i; // Must ends with
re = /^hello$/i; // Must begin and end with
re = /^h.llo$/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character

// String to Match
let str = 'João Hello World';
str = 'Hllo';
str = 'gray';
str = 'grey';
str = 'gry';
str = 'gray?';
// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)){
    console.log(`${str} matched ${re.source}`)
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);

