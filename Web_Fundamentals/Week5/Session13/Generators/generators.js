let input = ['hello', 'world', 'test'];

//Generator function
function* generateFunction(input) {
  for (const element of input) {
    yield Symbol(element);
  }
}

let calling = generateFunction(input);
let called  = calling.next();

//To print all the element inside the input array
while (!called.done) {
  console.log(called.value); //OUTPUT on every iteration of while loop
                             // Symbol(hello)
                             // Symbol(world)
                             // Symbol(test)
  called = calling.next(); //Updating the called with the next element in the aaray
}