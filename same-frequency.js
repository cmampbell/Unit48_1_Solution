function genFrequencyCounter(str){
    const freqCounter = new Map();

    for(let char of str){
        freqCounter.get(char) ? freqCounter.set(char, freqCounter.get(char) + 1) : freqCounter.set(char, 1)
    }

    return freqCounter;
}

function sameFrequency(int1, int2) {
    // check if two integers have the same count of digits

    // if the string lengths do not equal return false
    // frequency counter
    // convert int to strings
    // create a frequency counter for both of the strings
        // count the frequency of numbers in the strings

    //check key in one string against the other

    const int1Str = `${int1}`
    const int2Str = `${int2}`

    if(int1Str.length !== int2Str.length) return false

    const int1FreqCounter = genFrequencyCounter(int1Str)
    const int2FreqCounter = genFrequencyCounter(int2Str)

    for(let [key, value] in int1FreqCounter){
        if(value !== int2FreqCounter.get(key)) return false
    }

    return true
}

module.exports = sameFrequency;