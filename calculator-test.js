
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 25000,
    years: 7,
    rate: 6
  }

  expect(calculateMonthlyPayment(values)).toEqual("365.21");
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 50171,
    years: 10,
    rate: 6
  }

  expect(calculateMonthlyPayment(values)).toEqual("557.00");
});

/// etc
