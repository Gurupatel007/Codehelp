// console.log("Namaste Dunia");

// let a= 5;
// console.log(a);


// object
// var x = {
//     fName : "guru",
//     lName : "patel",
// }
// console.log(x.fName)
// console.log(x['lName']);

// functions

// function func(){
//     console.log("hello");
// }

// func();
// 54 48 56 63


// increment decrement operators
// let x = 5;
// let y = 10;
// let ans1 = (++x)*(--y);
// let ans2 = (x++)*(--y);
// let ans3 = (x++)*(y--);
// let ans4 = (++x)*(y--);

// console.log(ans1);
// console.log(ans2);
// console.log(ans3);
// console.log(ans4);


// assignment operators

/*
x = 3;
x+=2;
console.log(x); //outputs 5  
*/


// objects

// let rectangle = {
//     length : 1,
//     breadth : 2,

//     draw: function (){
//         console.log('drawing rectangle');
//     }
// }
// console.log(rectangle.draw());


// factory function

function createRectangle(){

    let rectangle = {
        length : 1,
        breadth : 2,

        draw : function(){
            console.log("drawing");
        }
    }

    return rectangle;
}
// console.log(createRectangle());
let x  = createRectangle();
console.log(x);