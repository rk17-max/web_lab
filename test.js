function add(){;
    const userInput1 = prompt("Please enter your num1:")
    const userInput2 = prompt("Please enter your num2:");

    const num1 = parseInt(userInput1); 
    const num2 = parseInt(userInput2); 

   alert(num1+num2)
}


function check(){
    const userInput1 = prompt("Please enter your number:")
    const num1 = parseInt(userInput1); 

    if(num1%2==0){
        alert("even number")
    }
    else{
        alert("odd number")
    }


}


function factorial(){

    let n=parseInt(prompt("enter numbver whose factorial You want to calculate"));

     fact=1;

     for(i=1;i<=n;i++){
        fact*=i;
        
     }
     alert("factorial of number is"+fact);
}


function table(){

    let n=parseInt(prompt("enter numbver whose factorial You want to calculate"));

    for(let i =1;i<=10;i++){
        console.log(`${n} x ${i}=${n*i}`)
    }
}

function input(){
   
    
    let a=parseInt(prompt("enter number a"));
    let b=parseInt(prompt("enter number b"));
    swap(a,b)
}
function swap(a,b){

    alert("value of a before swapping is"+a);
    alert("value of b before swapping is"+b);
 
    


    let temp=a;
    a=b;
    b=temp;


    alert("value of a after swapping is"+a);
    alert("value of b after swapping is"+b);
}



function asum(){

   

    const arr=[1,2,3,4,5];
    let sum=0;

    for(let i=0;i<5;i++){

        sum+=arr[i];
    }
    alert("sum of array elements is"+sum)

}

function input2() {
    let b = parseInt(prompt("Enter a number to check:"));
    isPrime(b);
}

function isPrime(num) {
    if (num < 2) {
        console.log("Not prime");
        return;
    }

    let flag = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log("Not prime");
            return;
        }
    }

    console.log("Prime number");
}


function calculator(){



    flag=true
    while(flag){
        let a=parseInt(prompt("enter number 1"));
    let b=parseInt(prompt("enter number 2"));
    let op=(prompt("Enter operation you want to perform -> +,-,/,x"));
    if(op=='+'){
        alert("Result after addition is: " + (a + b));

        let up=(prompt("do You want to calculate more"));
        if(up!="yes"){
            break;
        }

        

    }
    else if(op=='-'){
        alert("Result after addition is: " + (a - b));

        let up=(prompt("do You want to calculate more"));
        if(up!="yes"){
            break;
        }
        
    }
    else if(op=='x'){
        alert("Result after addition is: " + (a * b));

        let up=(prompt("do You want to calculate more"));
        if(up!="yes"){
            break;
        }
    }
    else{
        alert("Result after addition is: " + (a / b));

       
       
       
        let up=(prompt("do You want to calculate more"));
        if(up!="yes"){
            break;
        }
    }


    }

  

}

function larger(){
    let a=parseInt(prompt("enter number a"));
    let b=parseInt(prompt("enter number b"));

    if(a>b){
        alert ("a is bigger");
    }
    else if(b>a){
        alert ("b is bigger");
    }
    else{
        alert ("both are same");

    }
    

}

function external(){

    alert("congrats You are linked to external javascript")
}



const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();