// add whatever parameters you deem necessary
function isSubsequence(substr, str) {
    // we get two strings
    // check if the first string is contained in the second string, in the same order

    // multiple pointers

    // one pointer pointed at the first char of srt1
    // second pointer pointed at first char of str2
    // while pointer1 < str1.length
        // check pointer2, is it the right char?
        // no, move pointer two, check again
        // we are looping through str2 while looping through str1
        // we only loop through str2 once, no matter what
        // not a nested loop because of this
        // why order matters

    // hello                hello word
    //      |                    |

    // cover edge case where substring is longer than string
    if(substr.length > str.length) return false

    // set up pointers
    let subPointer = 0;
    let strPointer = 0;

    // end loop when we check all of str
    while(strPointer < str.length){
        if(substr[subPointer] === str[strPointer]){
            subPointer++;
            strPointer++;
        }else{
            strPointer++
        }
        // if subStr pointer equals length
        // we know we found matches for the whole substring
        // return true
        if(subPointer === substr.length) return true
    }
    return false
}

module.exports = isSubsequence;