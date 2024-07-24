//1.Longest sstring in an sentence
function largest(str){
    temp=""
    str=str.match(/[a-zA-Z0-9]+/gi);
    for(var i=0;i<str.length;i++){
        if(str[i].length > temp.length){
            temp=str[i]
}
    }
    return temp;
}
console.log(largest("Javascript is an scripting language"));
console.log(largest("Lorem ipsum dolor sit amet."));



//2.Majority element in a array;
function maj(arr){
    temp=[];
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                temp.push(arr[i]);
            }
}
    }
    return temp;
}
let arr=[2,6,9,1,5,7,6,2,8]
console.log(maj(arr));



//3.Difference between two arrays
function diff(arr1,arr2){
    temp=[];
    for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                temp.push(arr1[i]);
            }
}
    }
    return temp;
}
let arr1=[1,2,3,4,5,6,7]
let arr2=[2,7,9,3,8]
console.log(diff(arr1, arr2));



//4.Finding the minimum and maximum values;
function findMin(nums){
    nums.sort();
    return nums[0];
}
function findMax(nums){
    nums.sort();
    nums.reverse();
    return nums[0];
}
let nums=[6,2,9,4,5]
console.log(findMin(nums))
console.log(findMax(nums))


//5.Sorting the array without using predefined functions;
function sorting(nums){
    let n=num.length;
    let temp;
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(num[i]>=num[j]){
                temp=num[i];
                num[i]=num[j];
                num[j]=temp;
        }
        
}}
return num;
}
let num=[89,21,15,17,35,22]
console.log(sorting(num));