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

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/i; // Must be G or F
re = /[^GF]ray/i; // Match anithing excepet a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit
re = /[0-9][0-9]ray/; // Match any digit

// Braces { } = Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times

re = /Hel{2,4}o/i; // Must occur exactly {m} amount of times(two and four)

re = /Hel{2,}o/i; // Must occur at least {m} times

// Parentheses () - Grouping
re = /[0-9]x{3}/;

// String to Match
let str = 'João Hello World';
str = 'Hllo';
str = 'gray';
str = 'grey';
str = 'gry';
str = 'gray?';
str = 'Gray';
str = 'Fray';
str = 'Xray';
str = 'Dray';
str = 'dray';
str = '1ray';
str = '10ray';
str = 'Hello';
str = 'Helllo';
str = 'Helllllllllllllllo';
str = '0xxx';
// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`)
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);

