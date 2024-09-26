//Q1. Find the Product.


let arr=[5,1,2,3,4,5];
let product_arr=1;
for(let i=0; i<arr.length;i++){
    product_arr=arr[i]*product_arr;
}
console.log(product_arr);

// Q2. Find the Sum.

let arr1=[2,3,4,5];
let sum_arr=0;
for(let i=0; i<arr1.length;i++){
    sum_arr=arr1[i]+sum_arr;
}
console.log(sum_arr);

//Q3. Count Occurrences

let arr_num= [2,2,3,4,5,1,1];
let x=2;
let count=0;
for(let i=0; i<arr_num.length;i++){
    if (arr_num[i]==x){
        count++;
    }
}
console.log("The occurance of 2 is: "+ count);

//Q4. Even Odd

function findEvenOdd(){
let A= [1,3,2,5,6,7,8];
let S_even=0;
let S_odd=0;
for(let i=0; i<A.length;i++){
    if (A[i]%2==0){
        S_even =S_even+ A[i];
    }else{
        S_odd=S_odd+A[i];
    }
}
 let B=[S_even,S_odd]
return B;

}
 let B_arr=findEvenOdd();
 console.log(B_arr);


 //Q5. Find whether the number is present or not

 let arr_number= [4,5,3,2,1,9];
 let findNum= 0;
 let flag = "flase";
 for(let i=0; i<arr_number.length;i++){
    if (arr_number[i]== findNum){
        flag = "true";
        
    }
}
if (flag == "true"){
    console.log("Yes, Number is Present");
}
else{
    console.log("No, Number is  not Present");
}

//Q6. Higher Age

function highAge() {

    let arr = [34,25,18,17,6,10,38];
    let Filter_age = arr.filter((item) => item >= 18)
    return Filter_age;
}
console.log(highAge());

//Q7. Increment the Array Elements

let myArr = [10,0,2,45,67,22,11];

myArr.forEach(function(item) {
    console.log(item+1);
})

// Q8. Pass or Fail

let markArr = [50,39,34,80,68,77,90,32];
let res=0;

for(let i=0; i<=markArr.length;i++){
    if(markArr[i]<32){
        res++;
    }
}
if(res>0){
    console.log("Fail");
}else{
    console.log("Pass");
}

//Q9. Unique Color Shirt
function countUniqueShirts(shirtColors) {
    // Use an object to store frequency counts of each color
    const frequency = {};

    // Count the frequency of each shirt color
    for (let color of shirtColors) {
        if (frequency[color]) {
            frequency[color]++;
        } else {
            frequency[color] = 1;
        }
    }

    // Count how many colors appear exactly once
    let uniqueShirts = 0;
    for (let color in frequency) {
        if (frequency[color] === 1) {
            uniqueShirts++;
        }
    }

    return uniqueShirts;
}

// Example usage:
const shirts = [1, 2, 3, 2, 3, 4, 5];
const result = countUniqueShirts(shirts);
console.log(result);  // Output: 3


//Q10. Min and Max
function min_Max(arr){
    let min = arr[0];
    let max = arr[0]
   for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i];
        }
        if(arr[i]>max){
            max = arr[i];
        }
    }
    console.log(`Minimum number is ${min}`)
    console.log(`Maximum number is ${max}`)
 }
 min_Max([34,78,100,65,10,16,53]);

