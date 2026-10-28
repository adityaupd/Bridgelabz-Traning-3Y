function Person(name) { this.name = name; }
Person.prototype.introduce = function () { return `Person: ${this.name}`; };
function Faculty(name, department) { Person.call(this, name); this.department = department; }
Faculty.prototype = Object.create(Person.prototype); Faculty.prototype.constructor = Faculty;
Faculty.prototype.teach = function () { return `Teaches ${this.department}`; };
function Professor(name, department, title) { Faculty.call(this, name, department); this.title = title; }
Professor.prototype = Object.create(Faculty.prototype); Professor.prototype.constructor = Professor;
Professor.prototype.getTitle = function () { return this.title; };
const professor = new Professor("Dr. Rao", "Computer Science", "Professor");
console.log(professor.introduce(), professor.teach(), professor.getTitle());
