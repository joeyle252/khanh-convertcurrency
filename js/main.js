let exchangeRate = 23000;

let currency = document.getElementById('currency');
let amountInput = document.getElementById('amount');
let convertButton = document.getElementById('convertButton');
let resultArea = document.getElementById('resultArea');

convertButton.addEventListener("click",usdToVnd);

const currencyRatio = {
    vnd: {
      usd: 0.000043,
      krw: 0.051,
      eur: 0.000039,
      vnd: 1
    },
    usd: {
      usd: 1,
      krw: 1193.27,
      eur: 0.9,
      vnd: 23235.5
    },
    krw: {
      usd: 0.00084,
      krw: 1,
      eur: 0.00075,
      vnd: 19.47
    }
  };

function usdToVnd() {
    let from = document.getElementById('fromCurrencyList').value;
    let to = document.getElementById('toCurrencyList').value;
    // let to = document.querySelector('input[name="To"]:checked').value;
    let currency = currencyRatio[from.toLowerCase()][to.toLowerCase()];
    let amount = amountInput.value;
    let result = amount * currency;
    resultArea.innerHTML = `this is the result ${result}`;
    

    
};


// function vndToUsd () {
//     let amount = amountInput.value;
//     let result = (amount / exchangeRate);
//     result = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' }).format(result);
//     resultArea.innerHTML = `this is the result ${result}`;
// };

// function convertCurrency () {
//     console.log(currency.value.toLowerCase()) ;
//     if (currency.value.toLowerCase() ==="vnd"){
//     vndToUsd ();
//     } else if (currency.value.toLowerCase() ==="usd") {
//     usdToVnd();
//     } 
//     else{
//         alert ("please choose VND or USd");
//     }
// };


// convertButton.addEventListener("click",convertCurrency);

// // let amount = amountInput.value;

// // let currencyInput = document.getElementById('currency');

// // 

// function vndToUsd () {
//     let result = amount / vndUsd;
//     console.log("VND to USD",result)
//     };

// function formatCurrency(type, value) {
//         const formatter = new Intl.NumberFormat(type, {
//           currency: type,
//           style: "currency"
//         });
//         return formatter.format(value);
//       }

// if (currency.toLowerCase="usd") {
//     usdToVnd()
// } else {
// vndToUsd ();
// };

// const vndUsd = 23208;
// const usdVnd = 1 / vndUsd;

// function usdToVnd () {
//     let result = amount / usdVnd;
//     console.log("USD to VND",result);
// };

// function convertToVnd() {
//     let conversion = 23262;
//     let vndAmount = document.write("50 USD is VND");
// }

// 

// convertButton.addEventListener("mouseover",mouseoverFunction)

// convertButton.addEventListener("mouseout",mouseoutFunction)

// function usdToVnd () {
// let amount = amountInput.value;
// resultArea.innerHTML = `this is the result ${amount}`;
// }

// function mouseoverFunction () {
//     resultArea.style.color="red";
// }
// function mouseoutFunction () {
//     resultArea.style.color="blue";
// }

// if (currency.toLowerCase == "vnd") {
//     amount = prompt("How much??")
//     while (isNaN(amount) === true) {
//         alert("please choose a number!")
//         amount = prompt("How much??")
//     }
//     vndToUsd()

// } else if (currency.toLowerCase == "usd") {
//     amount = prompt("how much??")
//     if (isNaN(amount) === true) {
//         alert("please choose a number")
//     } else {
//         usdToVnd();
//     }
// };

// function usdToVnd () {
//     let result = amount / usdVnd;
//     console.log("USD to VND",result);
// }

// function vndToUsd () {
//     let result = amount / vndUsd;
//     console.log("VND to USD",result)
// } 

// if (currency.toLowerCase == "vnd") {
//     amount= prompt ("How much??")
//     while (isNaN (amount)=== true){
//         alert("please choose a number!")
//         amount= prompt ("How much??")
//     }
//     vndToUsd ()

// } else if (currency.toLowerCase == "usd"){
//     amount = prompt ("how much??")
//     if (isNaN(amount)===true){
//         alert("please choose a number")
//     }else {
//         usdToVnd ();
//     }};










