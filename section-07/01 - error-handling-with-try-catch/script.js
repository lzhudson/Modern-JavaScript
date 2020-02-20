const user = {
  email: "jdoe@gmail.com"
};

try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.MyFunction();

  // Will produce SyntaxError
  // console.log(eval("2+2"));
  // eval("Hello World");

  // Will produce URIError
  // decodeURIComponent("%");

  if (!user.name) {
    // throw "User has no name";
    throw new SyntaxError("User has no name");
  }
} catch (error) {
  console.log(`User Error: ${error.name}`);
  console.log(error);
  console.log(error.message);
  console.log(error.name);
  console.log(error instanceof ReferenceError);
} finally {
  console.log("Finally runs reguardless of result");
}

console.log("Program continues...");
