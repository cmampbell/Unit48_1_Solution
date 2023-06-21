function genFrequencyCounter(str){
    const freqCounter = new Map();

    for(let char of str){
        freqCounter.get(char) ? freqCounter.set(char, freqCounter.get(char) + 1) : freqCounter.set(char, 1)
    }

    return freqCounter;
}

function constructNote(message, letters) {

    if(letters.length === 0 ) return false
    if(message.length === 0 ) return true

    //count frequency of letters in the message
    const freqCounterMessage = genFrequencyCounter(message);
        // count frequeency of letters in letters
    const freqCounterLetters = genFrequencyCounter(letters);

    // if message.size > letters.size, not enough letters for message
    if(freqCounterMessage.size > freqCounterLetters.size) return false

    for(let [key, value] of freqCounterMessage){
        if(value > freqCounterLetters.get(key)){
            return false
        }
    }
    return true
}

module.exports = constructNote;