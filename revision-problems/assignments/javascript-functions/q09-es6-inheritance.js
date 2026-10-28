class Person { constructor(name) { this.name = name; } describe() { return `Name: ${this.name}`; } }
class Student extends Person {
  constructor(name, branch) { super(name); this.branch = branch; }
  getDetails() { return `${this.describe()}, branch: ${this.branch}`; }
}
console.log(new Student("Aditya", "Computer Science").getDetails());
