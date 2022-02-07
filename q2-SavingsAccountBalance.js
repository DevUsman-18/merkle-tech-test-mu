
function balance(openingSum, interestRate, taxFreeLimit, taxRate, numMonths) {
    let interestPercentage = interestRate / 100 ;
    let taxRatePercentage = taxRate / 100;
    let accountBalance = openingSum;

    function calculateInterest(accountBalance, interestPercentage, numMonths) {
        let monthlyInterest = accountBalance * interestPercentage;
        return monthlyInterest * numMonths;
    }

    function calculateTax(accountBalance, interestPercentage, taxFreeLimit, taxRatePercentage, numMonths) {
        if(accountBalance > taxFreeLimit) {
            let tax = (accountBalance - taxFreeLimit) * taxRatePercentage;
            return tax * numMonths;
        } else {
            return 0;
        }
    }

    function updateMonthlyBalance(accountBalance, monthlyInterest, monthlyTax) {
        return (accountBalance + monthlyInterest) - monthlyTax;
    }

    let monthlyInterest = calculateInterest(accountBalance, interestPercentage, numMonths);
    let monthlyTax = calculateTax(accountBalance, interestPercentage, taxFreeLimit, taxRatePercentage, numMonths);
    let updatedAccountBalance = updateMonthlyBalance(accountBalance, monthlyInterest, monthlyTax);

    console.log("updated", updatedAccountBalance);
    return updatedAccountBalance;
}

// balance(10000, 1, 20000, 1, 2);
// balance(25000, 2, 20000, 1, 2);
// balance(19800, 2, 20000, 1, 2);