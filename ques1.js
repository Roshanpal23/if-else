const input = require("readline-sync")


//let a=input.questionInt("enter the number : ")
//let b=input.questionInt("enter the number : ")
//let c=input.questionInt("enter the number : ")

//if (a>b && a>c){console.log
 //   ("a is greater number",a)}
//else if (b>a && b>c){console.log
   // ("b is geater nubmer",b)
//}
//else {console.log ("c is greater number",c)}

//ques2
// const input = require("readline-sync")


// let a =input.questionInt("enter the number : ")
// let b =input.questionInt("enter the number : ")
// let c =input.questionInt("enter the number : ")
// let d =input.questionInt("enter the number : ")

// if (a>b && a>c && a>d){
//     console.log("a is greater number",a)}
// else if (b>a && b>c && b>d){
//     console.log("b is greater number",b)}
// else if (c>a &&c>b && c>d){
//    console.log("c is greater number",c)}
// else {
//   console.log("d is greater number",d)
// }


//ques3

//  let a =input.questionInt("enter the number : ");
//  let b =input.questionInt("enter the number : ");
//  let c =input.questionInt("enter the number : ");
//  let d =input.questionInt("enter the number : ");

//   if (a>b){max=a, min=b}
//      else {max=b, min=a};
//   if(c>d){max1=c, min1=d}
//     else {max1=d, min1=c};
//   if (max>max1){max2=max, min2=max1}
//      else      {(max2=max1, min2=max)};
//   if (min2>min1) {max3=min2, min3=min1} 
//      else       {max3=min1, min3=min2}
//   if (min3>min) {max4=min3}
//      else      {max4=min};

//    console.log ("third max = ",max4)

// ques4

//  let a=input.questionInt("enter the number : ");


// let sum=0, n = a;
//  while(a>0)
//  {
//    p = a%10;
//    sum = (sum * 10)+p;
//    a=Math.floor(a/10);
   
   
//  }
 
//  a = n;
//  if(sum==a)
//  {
//    console.log("palindrome number");
//  }
//  else 
//  {
//    console.log("not palindrome")
//  }

//ques5

// let a = input.questionInt("enter the number : ");

// let i=2;
// while (i<a)
// {
//     if (a % i ==0)
//     {
//       console.log('not prime number',a);
//       i++;
//       break;
//     }
//     else
//     {
//       i++;
//     }
// }
// if (i == a)
// {
//      console.log('prime num');
// }

//ques6

//  let a=input.questionInt("enter the number : ")
//  let b=input.questionInt("enter the number : ")
//  let p=a*b


//  while(a%b!=0){r=a%b,a=b,b=r}
// console.log
//  ("hcm= "b,"lcf= ",p/b)

// ques7

// let a=input.questionInt("enter the number : ")

// let i=1
// let sum=0
// while(i<a)
// {
//    if(a%i==0){
//       sum+=i
//    }
//    i++
// }
// if(sum == a){
//    console.log("this is prefect");
// }
// else{
//    console.log("this is not prefect"); 
// }


//ques8

// let N = input.questionInt('enter the value of N : ');
// let a=input.questionInt("enter the number :");

// let max = a, min= a, i = 2;
// while (i <=N){
//    let num = input.questionInt("enter the element:")
//    if (num>max){
//       max=num
//    }
//    if (num<min){
//       min=num
//    }
//    i++
// }
// console.log("max=",max,"min=",min)

// ques9
// let N = input.questionInt("enter the value of N : ");
// let max = input.questionInt("enter the number ; "), smax = input.questionInt('enter a number: '), i = 3;
// while (i <= N)
// {
//    var a = input.questionInt('enter: ');
//    if (a > max)
//    {
//       var t = max;
//       max = smax, smax = t;
//    }
//    else if (a > smax)
//    {
//       smax = a;
//    }
//    i++;
// }
// console.log(smax);


//ques10 (i)
// let x = input.questionInt("enter the number: ");
// let N= input.questionInt("enter the value of N : ");
// i = 1;
// let sum = 0;
// { 

//  while (i<=N){
//      m =(x**i)/i;
//      sum=sum+m
     
//    i++ 
//  } 
// }
// console.log(sum);

// ques10 (ii)

// let x = input.questionInt("enter the number of x = ")
// let N = input.questionInt("enter the number of N = ")
// let i = 1
// let a=1
// let sum=0
// let m =0
// while (i<=N)
// {
//    if (i%2!=0){
//       m=(x**a)/a;
//     sum=sum + m;
//     i++;
//     a+=2;
      
//    }else 
//    {
//       m = (x**a)/a;
//       sum=sum-m;
//       i++;
//       a+=2;
//    }
// }
// console.log("Answer =",sum)

// ques10 (iii)

// let x= input.questionInt("enter the number of x = ")
// let N = input.questionInt("enter the number of N = ")
// let i = 1
// let a = 1
// let sum = 0
// while (i<=N)
// {
//    {if (i%2!=0);
//       m=x-(x**a)/a;

//    }
// }


// ques11 (i)
// *
// **
// ***
// ****
// *****


// let x = input.questionInt("enter the number");
// let c="";
// for (let i = 0; i<x; i++){
//    (j = 1, j<=i, j++)
//    {
//      c+="*"
//    }
//    console.log(c)
// }
    

// ques11 (ii)
// *****
// ****
// ***
// **
// *

// let n = input.questionInt("enter the number : ")
// for(let i=n ; i>0 ; i--){
//    console.log("*".repeat(i));
// }

// ques11 (iii)
// 1
// 1 2
// 1 2 3
// 1 2 3 4

// let x= input.questionInt("enter the value of x = ");
// let p = 1
// for(let i=1; i<=x; i++)

// {
//    row=""
//    for(let j=1; j<=i; j++){
//       row+=p + " ";
//       p++;
//    }

// console.log(row)
// }

// ques11 (iv)








// ques11 (v)
// 1
// 121
// 12321
// 1234321
// 123454321


// let n= input.questionInt("enter the number: ")
// for (let i=0; i<=n; i++){
//    let c="";
// for (let j = 1; j <= i; j++) {
//    c+=j;
// }
// for (let j = i-1; j >0; j--) {
//    c+=j
// }
// console.log(c);
// }

// ques12 (i)

// let n= input.questionInt("enter the number");

// r=1
// for(let i=1; i<=n; i++ ,r+=2)

// { 

//    console.log("*".repeat(r))

//    }   


// ques12 (ii)