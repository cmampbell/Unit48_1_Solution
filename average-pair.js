// add whatever parameters you deem necessary
function averagePair(numArr, targetAvg) {

    // we have a sorted array and a target average
    // we want to find a pair in the array that averages to the target average
    // return true or false if we do

    // multiple pointers problem
    // average the pair
    // compare the pairs average to the target average
        // if we find the target average, return true
        // if target is larger, move left pointer one index up to larger value
        // if target is smaller, move right pointer one index down, to smaller value

    // loop until left pointer is larger than right
    // return false

    let left = 0;
    let right = numArr.length - 1;

    while(left < right){
        let currAvg = (numArr[left] + numArr[right])/2

        if(currAvg === targetAvg) return true

        currAvg > targetAvg ? right-- : left++
    }

    return false
}

module.exports = averagePair;