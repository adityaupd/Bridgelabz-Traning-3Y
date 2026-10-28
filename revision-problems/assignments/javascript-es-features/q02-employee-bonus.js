"use strict";
const employees=[{name:"Amit",salary:"45000",years:"5"},{name:"Sara",salary:"38000",years:"2"},{name:"Kiran",salary:"52000",years:"7"}];
for(const employee of employees){try{if(!employee.name)throw new Error("Missing name");const salary=Number(employee.salary),years=Number(employee.years);if(!Number.isFinite(salary)||!Number.isFinite(years))throw new Error("Invalid salary or years");const bonus=salary*(years>3?0.1:0.05);console.log(`${employee.name}: salary $${salary.toFixed(2)}, bonus $${bonus.toFixed(2)}`)}catch(error){console.error("Employee record error:",error.message)}}
