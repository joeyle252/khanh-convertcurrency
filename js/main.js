let exchangeRate = 23000;

let currency = document.getElementById('currency');
let amountInput = document.getElementById('amount');
let resultArea = document.getElementById('resultArea');

function usdToVnd() {
    let amount = amountInput.value;
    let result = (amount * exchangeRate);
    result = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' }).format(result);
    resultArea.innerHTML = `this is the result ${result}`;
};
function vndToUsd () {
    let amount = amountInput.value;
    let result = (amount / exchangeRate);
    result = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' }).format(result);
    resultArea.innerHTML = `this is the result ${result}`;
};

function convertCurrency () {
    console.log(currency.value.toLowerCase()) ;
    if (currency.value.toLowerCase() ==="vnd"){
    vndToUsd ();
    } else if (currency.value.toLowerCase() ==="usd") {
    usdToVnd();
    } 
    else{
        alert ("please choose VND or USd");
    }
};


convertButton.addEventListener("click",convertCurrency);

// let amount = amountInput.value;

// let currencyInput = document.getElementById('currency');

// let convertButton = document.getElementById('convertButton');

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

// convertButton.addEventListener("click",usdToVnd);

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










