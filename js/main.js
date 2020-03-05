let exchangeRate = 23000;

let currency = document.getElementById('currency');
let amountInput = document.getElementById('amount');
let convertButton = document.getElementById('convertButton');
let resultArea = document.getElementById('resultArea');
function formatCurrency(type, value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: type }).format(value)
}

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
    },
    eur: {
      aud: 1.69,
      cad: 1.5,
      hkd: 8.69,
      vnd: 25947.23,
      krw: 1328.71,
      usd: 1.12,
    },
    hkd: {
      aud: 0.19,
      cad: 0.17,
      vnd: 2985.34,
      krw: 152.89,
      usd: 0.13,
    },
    cad: {
      aud: 1.13,
      hkd: 5.80,
      vnd: 17310.61,
      krw: 886.50,
      usd: 0.75,
    },
    aud: {
      cad: 0.88,
      hkd: 5.13,
      vnd: 15307.74,
      krw: 784.28,
      usd: 0.66,
    }
  };
  
function usdToVnd() {
    let from = document.getElementById('fromCurrencyList').value;
    let to = document.querySelector('input[name="To"]:checked').value;
    let currency = currencyRatio[from.toLowerCase()][to.toLowerCase()];
    let amount = amountInput.value;
    let result = amount * currency;
    result = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' }).format(result);
    resultArea.innerHTML = `This is the result ${formatCurrency(toCurrency,convertedAmount)}`;
    
};

function reverse() {
  const [from, to] = getFromTo();

  document.getElementById("from").value = to;
  document.getElementById("to").value = from;
}








