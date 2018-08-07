function takeANumber (lineNumber,customer){
  if (lineNumber.length === 0){
  lineNumber[0] = customer;
  return `Welcome, ${customer}. You are number ${lineNumber.indexOf(customer)+1} in line.`;
  } else {
  lineNumber.push = customer;
  return `Welcome, ${customer}. You are number ${lineNumber.length} in line.`;
  }

  
}