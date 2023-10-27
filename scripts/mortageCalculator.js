const principal=53000;
const interest= .07625/ 12;
const loanLength= 15* 12;

const expectedMonthlyPayment= principal * (interest / (1-(1+interest)**-loanLength));
// const totalInterestPaid=
console.log(expectedMonthlyPayment)