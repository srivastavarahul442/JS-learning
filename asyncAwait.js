/**
 * async
 * await
 * async and await work behind the scense
 * example
 * error handling
 * interview
 * async/await vs promise.then/.catch
 */


//------------async-------------
// const p = new Promise((resolve,reject)=>{
//     resolve("Don")
// })

// // This always return promise
// async function getData() {
//     // return new Error("error");
//     return p;
// }

// const promise = getData()
// .then(function(data){
//     console.log(data)
// })


//---------------------await---------------------

// const p1 = new Promise((resolve,reject)=>{
//     resolve("Mithu")
// })


// using await 
// async function getData(){
//     const promise = await p1;
//     console.log(promise)
// }

// by using .then keyword
// function getData(){
//     p1.then(function(data){
//         console.log(data)
//     })
// }

// getData();

//--------------how async and await works behind the scenes-----------

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved value 1")
    },5000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved value 2")
    },10000)
})

async function getData(){
    console.log("Nameste javaScript")
    const val1 = await p1;
    console.log("Nameste javaScript 1")
    console.log(val1)

    const val2 = await p2;
    console.log("Nameste javaScript 2")
    console.log(val2)
}
getData()
