document.querySelector('#loan-form').addEventListener('submit' , function(e){
  document.getElementById('loading').style.display = "block";
  document.getElementById('results').style.display = "hidden";

  setTimeout( loanCalculator, 2000);

  e.preventDefault();
});

function loanCalculator(){
  // INPUTS 
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');

  //OUTPUTS
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value)/100/12;
  const calculatedYears = parseFloat(years.value)*12;

  const x = Math.pow(1+calculatedInterest,calculatedYears);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly*calculatedYears).toFixed(2);
    totalInterest.value = ((monthly*calculatedYears)-principal).toFixed(2);

    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'block';
  }
  else {
    showError('Please check your numbers');
  }
  

}

function showError(error) {

  document.getElementById('loading').style.display = 'none';
  document.getElementById('results').style.display = 'none';


  errorDiv = document.createElement('div');
  errorDiv.className= 'alert alert-danger';
  
  const card = document.querySelector('.card');
  const heading =  document.querySelector('.heading');
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv,heading);
 
  setTimeout(checkout,3000);

  function checkout() {
    errorDiv.remove();

  }

}