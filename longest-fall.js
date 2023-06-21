// add whatever parameters you deem necessary
function longestFall(arr) {
    // we get an array

    // we want to check the longest consecutive decreasing integers

    // multiple pointers
    // one pointer at the start
    // another pointer

    // just one pointer
    // variable that holds start
    // currCount starts at 1
    // longest count = 1

    // move pointer to right
    // if currVal less than startVal?
        // count++
        // startVal = currVal
        // move pointer to right
        // loop
    // else
        // if currCount > longestCount
            // longest count = currCount
        // move pointer to the right
        // count = 1

    if (arr.length < 2) return arr.length

    let currCount = 1
    let longestCount = 1

    let prevVal = arr[0]
    for(let i = 1; i < arr.length; i++){

        let currVal = arr[i] 

        if(currVal < prevVal){
            currCount++;
        } else {
            currCount = 1
        }
        
        if(currCount > longestCount){
            longestCount = currCount;
        }
        prevVal = currVal;
    }

    return longestCount;
}

module.exports = longestFall