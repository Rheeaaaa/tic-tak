// const profile = {
//     fullName: "riya singh",
//     isFollow:true,
//     post:195,
//     followers:569000,
//     following:4,
//     discrption:"Enterpreneur Apna college/ Ex- microsoft stc"
// };
// console.log(typeof profile.following );

// let mode = "light";
// let color;

// if(mode === "dark") {
//     color="black";
// }else{
//     color = "white";
// }

// console.log(color);

// let age = 15;

// if (age>=18){
//     console.log("vote")
// }
// else{
//     console.log("not vote")
// }

// let num =15;

// if (num%2 ===0 ){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// let mode="pink";
// let color;

// if(mode === "dark"){
//     color = "dark";
// } else if(mode ==="blue"){
//     color ="blue";
// }else if (mode ==="pink"){
//     color="pink";
// } else{
//     color="white";
// }

// console.log(color);
 
// let age=5;
// let result = age >= 18? console.log("adult"): console.log("not adult");

// prompt("enter a number");

// let num = prompt("enter a number");
//  if (num % 5===0 ){
//     console.log(num, "number is divisible by 5")
//  }
//  else {
//     console.log(num, "number is not divisible by 5")
//  }

// let score = prompt("enter your score(0-100)");
// let grade;
// if(score  >=90 && score<=100){
//     grade ="A";
// }
// else if( score >=70 && score<=89){
//     grade ="B";
// }
// else if ( score>= 60 && score<=69){
//     grade = "C";
// }
// else if (score >= 50 && score<= 59){
//     grade ="D";
// }
// else if (score >= 0 && score<= 49){
//     grade = "F";
// }

// console.log("according to the resukt your grade is:" ,grade);

// for (let count=1; count<=2; count ++){
//     console.log("apna col"); 
// }

// let sum=0;
// for(let i=0; i<=100; i++){
//     sum= sum+i;
// }
// console.log("sum is", sum);

// let i=1
// while(i<=10){
//     console.log("i=")
//     i++;
// }


// for(let i=0; i<=100; i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }

// let num=25;
// let unum = prompt("enter a num");
// while(unum != num){
//   unum =  prompt("try again");
// }
// console.log("congrats");


// let name= prompt("enter full name");
// let username= "@" + name + name.length;
// console.log(username);

// let marks=[ 85,97,44,37,76,60];

// let sum=0;
// for(let val of marks){
//   sum+=val;
// }

// let avg =sum/marks.length;
// console.log(avg);

// let items= [250,645,300,900,50];

// let i=0;
// for(let val of items){
// //  console.log(val);
//  let offer= val/10;
//  items[i]= items[i]- offer;
//  console.log(items[i]);
//  i++;
// }

// let companies = ["bloomberg" ,"microsoft" ,"uber" ," google", "ibm" ,"netflix"];
// companies.splice(2 , 1, "ola");
// companies.push("amazon")
// console.log(companies);

// function myfunction(){
//   console.log("yo");
//   console.log(50);
// }

// myfunction();

// function sum(a, b){
//   s = a+b;
//   return s;
// }
// let val =sum(5, 100);
// console.log(val); 

// const arrowsum = (a,b) =>{
//   console.log(a+b)
// };
// arrowsum(4,5);

// let arrowmul= (a,b) =>{
//   return a*b ;
// };
// arrowmul= 5;

// function countvowels(str){
//   let count =0;
//   for (const char of str) {
//     if (
//       char=== "a"||
//       char=== "e"||
//       char=== "i"||
//       char=== "o"||
//       char=== "u"
//       ) {
//         count++;
//       }
//   }
//   return count;
// }

// const countvow = (str) =>{
//   let count=0;
//   for (const char of str) {
//     if (
//       char=== "a"||
//       char=== "e"||
//       char=== "i"||
//       char=== "o"||
//       char=== "u"
//       ) {
//         count++;
//       }
//   }
//   return count;
// }

// let nums = [2,3,4,5];
// let calsqu= (num) => {
//   console.log(num*num);
// };
// nums.forEach(calsqu);

// let marks = [50, 20,30,90,95,100,96];
// const newmks= marks.filter((val) => {
//     return val>90;
// })
// console.log(newmks);

// let n =prompt("enter a num");
// let arr=[];

// for(let i=0; i<=n; i++){
//     arr[i-1] =i ;
// }

// console.log(arr);

// let sum= arr.reduce((prev, curr)=>{
//     return prev*curr;
// })
// console.log(sum);

//  let  h2 = document.querySelector("h2");
//  console.dir(h2);

//  h2.innerText= h2.innerText+ "from apna college"
//  console.dir(h2.innerText)

// let divs= document.querySelectorAll(".box");

// let idx= 1;
// for(div of divs){
//     div.innertext =`new value ${idx}`;
//     idx++;
// }

// let newbtn= document.createElement("button");
// newbtn.innerText="click me";

// newbtn.style.color = "white";
// newbtn.style.backgroundColor="red";

// document.querySelector("body").prepend(newbtn);

// let mode = document.querySelector("#mode");
// let body=document.querySelector("body")
// let currmode="light";

// mode.addEventListener("click",() =>{
//     if(currmode ==="light"){
//         currmode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         currmode ="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currmode);
// });


let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");

let turno = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        // console.log("box was clicked");
        if(turno){
            box.innerHTML= "O";
            turno= false;
        } else{
        box.innerHTML= "X";
        turno = true;
        }
        box.disabled= true;

        checkwinner();
    });
});

const checkwinner= () => {
    for(let pattern of winpattern) {
        let pos1val =  boxes[pattern[0]].innerHTML;
        let pos2val =  boxes[pattern[1]].innerHTML;
        let pos3val =  boxes[pattern[2]].innerHTML;

        if(pos1val != null && pos2val != null && pos3val != null){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
            }
        }
    }
};