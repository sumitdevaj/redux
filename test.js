// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");
// function checkElennt(arr,ele){
//     // return arr.includes(ele);
//     let index;
//     for(let i in arr){
//         console.log(i,arr[i])
//         if(arr[i] === ele){
//             index = i
//             return {index}
//         }
//     }
//     return false
// }
//  console.log(checkElennt([1,2,3,4],3))


function cloneArr(arr){
    return [...arr]
}
function firstElement(arr,a=1){
    if(a <0){
        return []
    }
    return arr.slice(0,a)
}
// console.log(firstElement([1,2,3,4,5]))
function lastEle(arr,a){
    if(!a){
        return arr[arr.length -1]
    }
   return  arr.slice(Math.max(arr.length - a,0))
}
// console.log(lastEle([1,2,3,4],10))

function concadeEven(str){
    let newStr=[str[0]];
    for(let x =1;x<str.length;x++){
        if(str[x-1]%2 ===0 && str[x]%2===0){
            newStr.push('-',str[x])
        }
        else{
            newStr.push(str[x])
        }
    }
    return newStr.join('')
}
// console.log(concadeEven('012242'))

function bubbleSort(arr){
    for(let x=0;x< arr.length;x++){
        for(let j=0;j<arr.length - x -1;j++){
            if(arr[j] >= arr[j+1]){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]] 
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([14,6,43,23,24,3,2]))


function longestCount(arr){
    let obj = {}
    for(let i of arr){
        if(!obj[i]){
            obj[i]=1
        }
        else{
            obj[i]+=1
        }
    }
    let max
        max = {count: 0,name: ''}
    for(let i in obj){
        if(max?.count< obj[i]){
            max= {count: obj[i],name: i}
        }
    }
    console.log(max,obj)
}

// [1,2,3,4] =>1,4,9,16 =30
// monotonic arr 
// [123456789] = log(n)
// [87654321]
// [34993226333]
// longestCount([1,1,'a','a','a','a','b','b','b','c'])



// function binarySearch(arr,val){
//     let firstIdx =0
//     let lastIdx = arr.length-1
//     let middleIdx = Math.floor(firstIdx+lastIdx)/2;
//     while(arr[middleIdx] !==val && firstIdx <lastIdx){
//         if(arr[middleIdx] > val){
//             lastIdx = middleIdx -1
//         }
//         else {
//             firstIdx = middleIdx+1
//         }
//         middleIdx = Math.floor((lastIdx + firstIdx) / 2);
//     }
    
//     return arr[middleIdx] !==val ? -1 :middleIdx
// }
// console.log(binarySearch([1,2,3,4,5,6,7],7))



// varibale 
// empty box  which store data 
// js variable kese banana hai 
// let 
// var
// const
// let x;
// x=21;
// x=20
// console.log(x);
// datatypes 
// number 
// String
// Boolean
// null 
// undefined
// BigInt
// symbal 
// object
// let _+ww12 ='dkdndkf'
// console.log("hello world","kdndkd");
// console.log("ldsmckscndk");
// let x =1;
// if(x=='1'){
//     console.log("hello");
// }
// else{
//     console.log("bye")
// }

// mathmatical opeartor 
// +
// -
// / 
// *
// %

// logical opeartors
// OR ||  1 + 1 =1
//         0+1=1
//         1+0 =1
//         0+0=0
// AND &&
//         1*1=1
//         0*1=0
//         1*0=0
//         0 * 0 = 0
// NOT !   1=>0


// assignment opeartor
// = value assign
// == compartion with comparing datatype
// === comparing value with datatype 
// a< b
// <=
// >
// >=
// let x =2;
// if(x%2 ===0){
//     console.log("this is even");
    
// }else{
//     console.log("this is odd");
    
// }
// // days in a week 
// if(x===1){
//     console.log("monday");
    
// }
// if(x===2){
//     console.log("tuesday");
    
// }

// switch case 
// months in year 
// let month = 11;
// switch(month){
//     case 1:
//         console.log("jan");
//         break
//     default:
//         console.log("you entered wrong num");
        
// }

// grading system 
// let score = 56

// if(score >=95){
//     console.log("A+");
    
// }
// if(score < 95 && score >=85){
//     console.log("A");
    
// }
// if(score <85 && score >=70){
//     console.log("B");
    
// }
// if(score <70 && score >=55){
//     console.log("c");
    
// }
// else{
//     console.log("failed");
    
// }

// let i =10;
// console.log(++i + i++);
// console.log(i,"mkmdk");

// let a =5;
// let b =10;
// let c = 15;
//  let res = ++a + b
//  console.log(res);
// //  15 + 10 +7
//  let res2 = c + b++ + ++a
//  console.log(res2);

let sum =0;
for(let i =0;i<3;++i){
    sum+=i
}
let sum2 =0;
for(let i =0;i<3;i++){
    sum2+=i
}
console.log(sum,sum2);

 
 






