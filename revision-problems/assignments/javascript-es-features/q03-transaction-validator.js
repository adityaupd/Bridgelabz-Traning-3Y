"use strict";
const transactions=[{id:1,amount:2000},{id:2,amount:-500},{id:3},null],valid=[],invalid=[];
transactions.forEach((transaction,index)=>{try{if(!transaction)throw new TypeError("Null transaction");if(transaction.id==null||transaction.amount==null)throw new ReferenceError("Missing id or amount");if(transaction.amount<0)throw new RangeError("Negative amount");valid.push(transaction)}catch(error){invalid.push({row:index+1,error:error.name,message:error.message})}});
console.table({valid:valid.length,invalid:invalid.length});console.table(invalid);
