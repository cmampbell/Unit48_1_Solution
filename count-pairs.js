// add whatever parameters you deem necessary
function countPairs(numArr, target) {
    // we get an array of integers and a number
    // we need to find the number of pairs in the array that add up to the target number

    // there are no duplicates so we know that once we find a match we wont
    // find another match with those two numbers again

    //take first number, target - first number search array for the result
    // still touching every element in the array multiple times

    // frequency counter? we are counting the frequency of a result
    // create a set from the array
    // for each item in the array
    // if set has target number - current number, add to count
    // return count

    //o(n)
    const numSet = new Set(numArr)

    let count = 0;
    // check each value in the set o(n)
    numSet.forEach((num) => {
        // if the set contains target - current number, increment count
        // comparison o(1)         check set for value o(1)
        if((target-num) !== num && numSet.has(target-num)) {
            count++
            //delete current num from set o(1)
            numSet.delete(num)
        }
    })
    // o(2n) => o(n)
    return count
}

module.exports = countPairs;