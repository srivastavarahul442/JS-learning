//createOrder()
//proceedPayment()
//showOrderSummary()
//updateWallet()

const cart = ["kurta", "paints", "t-shirt"];

createOrder(cart)
.then(function(orderID){
    console.log(orderID)
    return proceedPayment(orderID)
})
.then(function(paymentInfo){
    console.log(paymentInfo)
    return showOrderSummary(paymentInfo)
})
.then(function(orederSummry){
    console.log(orederSummry)
    return updateWallet()
})
.then(function(balance){
    console.log(balance)
})
.catch(function(err){
    console.log(err.message)
})


function createOrder(cart){
    return new Promise((res,rej)=>{
        if(false){
            const err = new Error("Cart data is missing")
            rej(err)
        }
        if(true){
            const orderID = "12345";
            setTimeout(function(){
                res(orderID);
            },2000)
        }
    })
}

function proceedPayment(orderID){
    return new Promise((res,rej)=>{
        res("Payment Successful")
    })
}

function showOrderSummary(paymentInfo){
    return new Promise((res,rej)=>{
        setTimeout(function(){
            res("order summary created")
        },3000)
    })
}

function updateWallet(){
    const balance = 1234;
    return new Promise((res,rej)=>{
        res(`Your balance is ${balance}`)
    })
}
