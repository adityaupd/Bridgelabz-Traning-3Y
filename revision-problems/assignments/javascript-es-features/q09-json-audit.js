"use strict";
const rawData=['{"user":"Alex","age":25}','{"id":2}','{invalid}','{"user":"Mina","age":"22"}'],clean=[],errors=[];
rawData.forEach((line,index)=>{try{const entry=JSON.parse(line);if(typeof entry.user!=="string"||entry.age==null)throw new Error("Missing user or age");const age=Number(entry.age);if(!Number.isFinite(age))throw new Error("Age is not numeric");clean.push({...entry,age})}catch(error){errors.push({line:index+1,message:error.message})}});
console.table(clean.filter((entry)=>entry.age>=18));console.table(errors);
