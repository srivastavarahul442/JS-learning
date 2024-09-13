// function x(){
//     let a=10;
//     function y(){
//         let b=20;
//         function z(){
//             let c = 30;
//             console.log(a,b,c)
//         }
//         return z;
//     }
//     return y();
// }

// const result = x();
// console.log(result())



function abc(){
    a = 10; // it become a global scope becouse we didnt use let var const to declared it
   console.log(a)
}
abc();

console.log(a)
console.log(typeof a)
