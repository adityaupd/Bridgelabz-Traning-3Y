function Person(name) { this.name = name; }
Person.prototype.describe = function () { return `Name: ${this.name}`; };
function Student(name, branch) { Person.call(this, name); this.branch = branch; }
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.getDetails = function () { return `${this.describe()}, branch: ${this.branch}`; };
console.log(new Student("Aditya", "Computer Science").getDetails());
