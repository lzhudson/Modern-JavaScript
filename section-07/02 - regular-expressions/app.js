let re;
re = /hello/;
re = /hello/i; // i = case insensitive
re = /hello/g; // g = global search
re = /hello/i;

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null, return specif index of start regex.
// const result = re.exec('brad hello world');
// const result2 = re.exec('hi world');
// console.log(result);
// console.log(result2);
// console.log(result[0]);
// console.log(result['index']);
// console.log(result.input);

// test() - Returns true of false if match
// const result = re.test('Hello'); // false 
// const result2 = re.test('hello'); // true

// console.log(result);
// console.log(result2);

// match() - Return result array or null
// const str = 'Hello There';
// const str2 = 'Hell There';
// const result = str.match(re); // true
// const result2 = str2.match(re); // null

// console.log(result);
// console.log(result2);

// search() - Returns index of the first match if not found returns -1

// const str = 'Hudson Hello There';
// const result = str.search(re);

// console.log(result);

// replace() - Return new String with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'hi');

// console.log(newStr);