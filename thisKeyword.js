"use strict"
console.log(this) // in global space it always refer to window object

function a(){
    console.log(this) // in function it refer to window object but in strict mode it return undefined
}
a();

let b = ()=>{
    console.log(this) // arrow function it refers to its lexical environment this
}
b();

let obj = {
    f1: function(){
        console.log(this) // it refer to outer object
    }
}
obj.f1()
