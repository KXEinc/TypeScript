class Department {
  // name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.name = n;
  }
  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.employees[2] = "Maria";

accounting.printEmployeeInformation();

// accounting.describe();
//
// const accountingCopy = { name: "test", describe: accounting.describe };
// accountingCopy.describe = accountingCopy.describe.bind(accounting);
//
// accountingCopy.describe();
