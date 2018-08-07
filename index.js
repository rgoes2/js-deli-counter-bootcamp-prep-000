var i = 0;
function takeANumber (lineNumber,customer){
  if (lineNumber.length === 0){
  lineNumber[i]= customer;
  return `Welcome, ${customer}. You are number ${lineNumber.indexOf(customer)+1} in line.`
  i++;
  } else {
  lineNumber.push = customer;
  return `Welcome, ${customer}. You are number ${lineNumber.indexOf(customer)+1} in line.`;
  }

  
}