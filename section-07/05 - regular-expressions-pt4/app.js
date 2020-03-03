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

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or_
re = /\w+/; // + = one or more
re = /\W/; // Non-Word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit one more
re = /\D/; // Match any Non-digit
re = /\s/; // Match whitespace char
re = /\S/; // Match non-whitespace char
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if followed by y

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
str = '!';
str = ' ';
str = '3';
str = '123456678';
str = 'ead';
str = ' ';
str = 'D';
str = 'Hello, welcome to Hell';
str = 'xy';
str = 'xasxasxas'
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

