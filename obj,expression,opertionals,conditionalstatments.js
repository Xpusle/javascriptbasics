// // //create obj in js
// // let obj={
// //   name:"ramesh",
// //   marks:97,
// //   age:23,
// // }
// // // console.log(obj)
// // //accessing the obj using for in loop
// // let iii;
// // for(iii in obj){
// //   //if you want to only display the key only use i
// //   //console.log(i);
// // }
// // let ii;
// // for (ii in obj){
// //   //if you want to display the  values use obj[i]
// //   //console.log(obj[ii]);

// // }

// // //expression and opertions in js
// // let a=10;
// // let b=20;
// // console.log("a+b",a+b);
// // console.log("a-b",a-b);
// // console.log("a*b",a*b);
// // console.log("a**b",a**b);
// // console.log("a/b",a/b);
// // console.log("a%b",a%b);

// // //increament and decreament
// // let c=50;
// // console.log("c++",c++);
// // console.log("++c",++c);
// // console.log("c--",c--);
// // console.log("--c",--c)
// // c+=6;
// // c-=12;
// // console.log("+=",c);
// // console.log("-=",c);
// // //condtional statments
// // //logical operators
// // let age=18;
// // let height=5.5
// // if(age>=18){
// //   console.log("you are eligable for driving and you have correct height ",age,height);
// // }
// // else if(height<=5.5){
// //   console.log("you are not eligable for driving and you are short",age);
// // }
// // else{
// //   console.log("you are not eligable for driving",age);
// // }
// // //special opertoars
// // let age1=18
// // console.log(age1? "yes your able to drive":"you not able to drive");
// // //loops
// // //we are using arrays for loops you acn also use string
// // let array=[1,2,3,4,5,6,7,8,9,10];
// // for (let i=0;i<array.length;i++){
// //   console.log(array[i]);
// // }
// // //for in loop
// // let array1=[2,4,6,8,10,12,14,16,18,20];
// // for(let i in array1){
// //   console.log(array1[i]);
// // }
// // // //for of loop
// // let array2=[3,6,9,12,15,18,21,24,27,30];
// // let i;
// // for(i of array2){
// //   console.log(i);
// // }
// //note:while using for loop if you display the elements of a array use i not array[i]
// //while loop
// // let number=11;
// // while(number<=10){
// //   console.log("number",number);
// // }
// // //dowhileloop
// // let number2=14;
// // do{
// //   console.log(number2%2);
// // }while(number2<=10)
// //for eachloop
// array1=[1,2,3,4,5,6,7,8,9,10];
// array1.forEach(function array(element){
//   console.log(element*element);
// })
// console.log(array1)
// //fuctions in js
// function sum (a,b){
//   console.log(a+b);
// }
// sum(50,60);
// //strings
// let Name="   siddarth    ";
// let name2="kanamadi"
// console.log(Name.toUpperCase())
// console.log(Name.toLowerCase())
// console.log(Name.trim())
// console.log(Name.concat(name2))
// console.log(name2.slice(0,3))
// console.log(Name.replace("siddarth","SIDDARTH"));
// console.log(name2.length)

// let delete1 = array1.delete(0);
// console.log(delete1);

// let array=[1,2,3,4,5,6,7,8,9,10];
//shift
// console.log(array.shift())
// console.log(array)
//unshift
// console.log(array.unshift())
// console.log(array)
//push
// array.push(11)
// console.log(array)
// //pop
// array.pop()
// console.log(array)
//length
//console.log(array.length)
// // //reverse
// // console.log(array.reverse())
// //concat
// let array2=[11,12,13,1,4,15,16,17,18,19,20];
// let concat=array2.concat(array)
// console.log(concat);
//map
// let array8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let map = array8.map(function map(value, index) {
//   return value * index;
// });
// console.log(map);
// //filter
// let array9 = [2, 4, 6, 8, 10, 10, 17, 16, 18, 20];
// let filter = array9.filter(function filter(value) {
//   console.log(value % 2 == 0);
// });

// //reduce
// let array11 = [3, 6, 10, 12, 15, 18, 21, 24, 27, 30];
// let reduce = array11.reduce(function reduce(value, index) {
//   return value + index;
// });
// console.log(reduce);
console.log("hello world");