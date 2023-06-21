// add whatever parameters you deem necessary
function separatePositive(nums) {
    // given an array of non-zero numbers
    // in place, put all the positive numbers to the left
    // and all the negative numbers to the right

    // multiple pointers
    // need temp variable to store values

    //[2, -1, -3, 6, -8, 10]
    //     |              |

    //[2, 10, -3, 6, -8, -1]
    //         |  |

    // i think we have one left pointer and one right pointer
    // if left pointer is positive, move left pointer one index up
    // if left pointer is negative and right is positive, swap values
        // left pointer++ right pointer--
    // if left poitner is negative and right pointer is negative, right pointer--
    
    let left = 0;
    let right = nums.length - 1

    while(left < right){
        if(nums[left] > 0){
            left++;
        } else if(nums[left] < 0 && nums[right] > 0){
            let temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            left++;
            right--;
        } else if(nums[left] < 0 && nums[right] < 0){
            right--;
        }
    }
    return nums
}

module.exports = separatePositive;