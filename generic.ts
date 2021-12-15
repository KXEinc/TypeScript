// const names: Array<string> = [];
// names[0].split("");
//
// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => resolve("This is done"), 2000);
// });
//
// promise.then(data => {
//     data.split(' ')
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObject1 = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
const mergedObject2 = merge({ name: "Max" }, { age: 30 });

console.log(mergedObject1.age);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 0) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndPrint("Hi there!"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "kek" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
