function takeANumber (lineNumber,customer){
  if (lineNumber.length === 0){
  lineNumber[0] = customer;
  return `Welcome, ${customer}. You are number ${lineNumber.indexOf(customer)+1} in line.`;
  } else {
  lineNumber.push(customer);
  return `Welcome, ${customer}. You are number ${lineNumber.length} in line.`;
  }
}
function nowServing (lineNumber){
  if (lineNumber[0] === 0) {
    return `The line is empty!`
  }
  else {
  var currentCustomer = lineNumber[0]
  return `Now serving${currentCustomer}!`;
  lineNumber.unshift(currentCustomer)
  }
}