// let cart = ["kurta", "paints", "t-shirt"];

// api.createrOrder(cart, function () {
//   api.paymentToOrder(function () {
//     api.orderSummary(function () {
//       api.updateWallet();
//     });
//   });
// });


// let api = "https://api.github.com/users/srivastavarahul442";

// let promise = fetch(api);
// console.log(promise)

// promise.then((data)=>{
//     console.log(data)
// })

let cart = ["kurta", "paints", "t-shirt"];

createOrder(cart)
.then(function(orderID){
    console.log(orderID)
    return proceedToPayment(orderID);
})
.then(function(paymentInfo){
    console.log(paymentInfo)
})
.catch(function(err){
    console.log(err.message)
})
.then(function(orderID){
    console.log("called always")
})

function createOrder(cart){
    const pr = new Promise((resolve,reject)=>{
        //logic for create oreder
        if(true){
            let err = new Error("error cart is not correct");
            reject(err)
        }
        const orderID = "12345";
        if(orderID){
            resolve(orderID)
        }
    });

return pr;
}

function proceedToPayment(){
    return new Promise((res,rej)=>{
        res("Payment Done. Successfully")
    })
}