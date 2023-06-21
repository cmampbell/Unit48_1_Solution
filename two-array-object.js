// add whatever parameters you deem necessary
function twoArrayObject(keyArr, valArr) {
    // take two arrays
    // first array contains keys
    // second array contains values

    //return an object created from two arrays

    // if we run out of values, keys values should be set to null
    // if we run out of keys, ignore the rest of the values

    // what if we get an empty valArr? loop through keys and set equal to null
    // what if we get an empty keyArr? return {}
    // will keys repeat?

    // create an empty object

    // loop, i=0, while i < keyArr.length, i++
    // if valArr[i] exists, key in empty object equals val
    // else key in empty object = null
    // continue until we get through all keys
    
    if(keyArr.length === 0) return {};

    const result = {}

    for(let i = 0; i < keyArr.length; i++){
        valArr[i] ? result[keyArr[i]] = valArr[i] : result[keyArr[i]] = null
    }

    return result;
}

module.exports = twoArrayObject;
