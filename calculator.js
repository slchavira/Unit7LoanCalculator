window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };

  const amount = document.getElementById("loan-amount");
  const years = document.getElementById("loan-years");
  const rate = document.getElementById("loan-rate");

  amount.value = values.amount;
  years.value = values.years;
  rate.value = values.rate;

  updateMonthly(calculateMonthlyPayment(values));
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();

  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const amount = values.amount;
  const years = values.years;
  const rate = values.rate;
  const monthlyRate = (rate / 100) / 12;
  const numOfPayments = years * 12;
  
  const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow((1 + monthlyRate), -numOfPayments));
  return monthlyPayment.toFixed(2);
  // The following return was giving an error within Jasmine testing:
  // TypeError: Cannot set property 'innerText' of null
  // return updateMonthly(monthlyPayment.toFixed(2)); 
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUIUpdate = document.getElementById("monthly-payment");

  monthlyUIUpdate.innerText = "$" + monthly;
}
