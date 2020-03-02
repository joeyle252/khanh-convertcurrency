let exchangeRate = 23000;
let amount = 0;
const vndUsd = 23208;
const usdVnd = 1/vndUsd;

const currency = prompt ("VND or USD?");

function usdToVnd () {
    let result = amount / usdVnd;
    console.log("USD to VND",result);
}


function vndToUsd () {
    let result = amount / vndUsd;
    console.log("VND to USD",result)
} 


if (currency == "vnd") {
    amount= prompt ("How much??")
    while (isNaN (amount)=== true){
        alert("please choose a number!")
        amount= prompt ("How much??")
    }
    vndToUsd ()
    
} else if (currency == "usd"){
    amount = prompt ("how much??")
    if (isNaN(amount)===true){
        alert("please choose a number")
    }else {
        usdToVnd ();
    }};
// function usdToVnd () {
//     let result = amount / usdVnd;
//     console.log("USD to VND",result);
// }


// function vndToUsd () {
//     let result = amount / vndUsd;
//     console.log("VND to USD",result)
// } 
// }

    

// let amount = prompt ("How much?");

// const vndUsd = 23208;
// const usdVnd = 1/vndUsd;


// function usdToVnd () {
//     if (isNaN(amount)=== true){
//         alert ("please choose a number")
//     } else {
//     let result = amount / usdVnd;
//     console.log("USD to VND",result);
// }
// }

// function vndToUsd () {
//     if (isNaN(amount)===true) {
//         alert("Please type a number")
//     } else {
//     let result = amount / vndUsd;
//     console.log("VND to USD",result)
// } 
// }


