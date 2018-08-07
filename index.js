
var deli = true;
var i = 0 ;
function takeANumber (lineNumber,customer){
while (deli){
  lineNumber[i]= i+1;
  console.log(`Welcome, ${customer}. You are number ${lineNumber.indexOf(customer)+1} in line.`);
  i++;;
  }
}