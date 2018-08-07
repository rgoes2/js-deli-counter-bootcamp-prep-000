function takeANumber (lineNumber,customer){
  if (lineNumber.length === 0){
  lineNumber.unshift = customer;
  return `Welcome, ${customer}. You are number ${lineNumber.indexOf(customer)+1} in line.`;
  } else {
  lineNumber.push = customer;
  return `Welcome, ${customer}. You are number ${lineNumber.indexOf(customer)+1} in line.`;
  }

  
}