// let userScore=0;
// let compScore=0;


// const choices= document.querySelectorAll(".choice");
// choices.forEach((choice)=>{
// choice.addEventListener("click",()=>{
//     const userId=choice.getAttribute("id");
//     console.log("choice was clicked",userId);
// })
// })


/// practice for loop

for (let count =1; count<=5;count++){
    console.log("apana practice");
}

// console.log("loop has ended");

///calculate sum of 1 to 20
let sum =0;
for (let i =2; i<=5; i++){
    sum=sum+i;      
 }
console.log("total =",sum);

let sm=0;
for (let i=0; i < 5;i++){
    if (i % 1 !==0) {
        sum+=i;
    }
}

console.log(sum);



//while loop

let a= 1;

while(a<=5){
    
    console.log("a=", a);
    a++
}

// do while loop

let b=20;

do {
    console.log("do while loop")  // there is gurenty to run atleat once in do while loop.
    b++
} while(b<=10);

// for of loop
// syntex-> for (let val OF str val){do some work}.
// it works only with strings and arrays

let str ="apnacollege"

for (let val of str){
    console.log("val",val);
}

// if we want to know the string size

let strVal="javascript";

let size =0

for (let val of strVal){
    console.log("val", val);
    size++;
}
console.log("total",size);


// for in loo
// syntex => for (let val IN strVal){do some work}
// for in loo works with object and arrays

let empploy ={
    Name: "md shakir",
    age: 28,
    cgpa: 7.5,
    isPass:  true,
}

for (let val in empploy){
    console.log(val,empploy[val]);
}

//print all even no from 0 to 100.

let c =1;

for (let j=2; j<=100;j++){
    if (j % 2 ===0){
        console.log(j);
    }
}

for (let cont=0; cont<=100;cont++){
    console.log(cont);
}