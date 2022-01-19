// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]
let smallestNum = array[0]
let largestNum = array[0]
for(i = 1; i < array.length; i++){
    if(array[i]<smallestNum){
        smallestNum = array[i]
    }
    if(array[i]>largestNum){
        largestNum = array[i]
    }
}

console.log("The smallest number is: ", smallestNum)
console.log("The largest number is: ",largestNum)
// Write your solution below: