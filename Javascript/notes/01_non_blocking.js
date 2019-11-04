function printHello() {
  console.log(4)
  console.log('Hello from baz');
}

function baz() {
  console.log(3)
  setTimeout(printHello, 3000);
}

function bar() {
  console.log(2)
  baz();
}

function foo() {
  console.log(1)
  bar();
}

foo();