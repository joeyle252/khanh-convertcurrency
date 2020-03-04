let exchangeRate = 23000;

let currency = document.getElementById('currency');
let amountInput = document.getElementById('amount');
let convertButton = document.getElementById('convertButton');
let resultArea = document.getElementById('resultArea');

convertButton.addEventListener("click",usdToVnd);

const currencyRatio = {
    vnd: {
      aud: 0.000043,
      cad: 0.000058,
      eur: 0.000039,
      hkd: 0.00034,
      vnd: 1,
      krw: 0.051,
      usd: 0.000043
    },
    usd: {
      aud: 1.51,
      cad: 1.34,
      eur: 0.90,
      hkd: 7.77,
      vnd: 23205.50,
      krw: 1182.61
    },
    krw: {
      aud: 0.0013,
      cad: 0.0011,
      eur: 0.00076,
      hkd: 0.0066,
      vnd: 19.63,
      krw: 1,
    }
  };
  
function usdToVnd() {
    let from = document.getElementById('fromCurrencyList').value;
    let to = document.querySelector('input[name="To"]:checked').value;
    let currency = currencyRatio[from.toLowerCase()][to.toLowerCase()];
    let amount = amountInput.value;
    let result = amount * currency;
    result = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' }).format(result);
    resultArea.innerHTML = `this is the result ${result}`;
    
};











