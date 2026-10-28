"use strict";
const apiData=["25","true","false","NaN"," ","100px","3.14",null,undefined];
const valid=[],invalid=[];
for(const value of apiData){const number=Number(value),row={value:String(value),number,boolean:Boolean(value),string:String(value)};if(value!==null&&value!==undefined&&String(value).trim()!==""&&Number.isFinite(number))valid.push(row);else invalid.push(row)}
console.log("Valid numeric data");console.table(valid);console.log("Invalid or non-numeric data");console.table(invalid);
