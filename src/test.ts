// type AddFn = (a: number, b: number) => number

interface AddFn {
  (n1: number, n2: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Named {
  readonly name: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {

  constructor(public name: string){};

  greet(phrase: string) {
    console.log(this.name)
  }
}

const user1 = new Person('kek');


user1.greet("hi there - I am");
