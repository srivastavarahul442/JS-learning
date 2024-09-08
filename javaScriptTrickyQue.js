console.log(0.1 + 0.2 === 0.3); //JavaScript uses floating-point arithmetic (expression 0.1 + 0.2 actually evaluates to 0.30000000000000004, which is not exactly 0.3.)

//----------------------------------------------------------

// let a =[1,2,3,4];
// let b =[...a]; // copy the value only.

// b[1]=10;

// console.log(a)
// console.log(b)

// let a =[1,2,3,4];
// let b =a; // copy the reference.

// b[1]=10;

// console.log(a)
// console.log(b)

//--------------------------------------------------------------------------

// const obj = { a: 1, b: 2 };
// const clone = { ...obj };

// console.log(clone === obj); //The spread operator ... creates a shallow copy of obj, meaning clone is a new object. Since both clone and obj are different objects (though they have the same properties), the strict equality (===) returns false.

// clone.a = "Rahul";

// console.log(obj);
// console.log(clone);

// const obj = { a: 1, b: 2 };
// const clone = obj;

// console.log(clone === obj);

// clone.a = "Rahul";

// console.log(obj);
// console.log(clone);

//---------------------------------------------------------------

// (function (){
//     var a=b=10;
// })()

// console.log(typeof a);//Inside the IIFE, var x = y = 10; is equivalent to y = 10; var x = y;. The y = 10 creates a global variable y because no var, let, or const keyword is used. x is a local variable inside the function. So outside the function, x is undefined, but y is accessible and is of type number.
// console.log(typeof b);

//---------------------------------------------------------------

// const arr = [1, 2, 3];
// arr[10] = 99;
// console.log(arr.length); //11

//----------------------------------------------------------------

// let a = 5;
// setTimeout(() => {
//   console.log(a);
// }, 1000);
// a = 10;

//----------------------------------------------------------------

// const foo = {
//     bar: function() {
//       return this.baz;
//     },
//     baz: 42
//   };
  
//   const extractedBar = foo.bar;
//   console.log(extractedBar()); // undefined

//------------------------------------------------------------

// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, 1000);
//   }

//----------------------------------------------------------

// const person = {
//     name: "John",
//     age: 30,
//     getAge: () => this.age
//   };
//   console.log(person.getAge()); //Arrow functions do not have their own this; they inherit this from the lexical context in which they are defined. In this case, this refers to the global object, not the person object. Since age is not defined globally, it returns undefined.

//-------------------------------------------------------------

// console.log([] + []);
// console.log({} + []);
// console.log([] + {});

//--------------------------------------------------------------

// const obj1 = { a: 1 };
// const obj2 = { b: 2 };
// const obj3 = { ...obj1, ...obj2, a: 10 };
// console.log(obj3);