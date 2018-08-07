
var deli = true;
var i = 0 ;
function takeANumber (lineNumber,customer){
while (deli){
  lineNumber[i]= i+1;
  return `Welcome, ${customer}. You are number ${lineNumber.indexOf(customer)+1} in line.`;
  i++;
  }
}