var i = 0;
function takeANumber (lineNumber,customer){
  lineNumber[i]= i+1;
  return `Welcome, ${customer}. You are number ${lineNumber.indexOf(customer)} in line.`;
  i++;
}