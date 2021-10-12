# Algo Cruise
My journey in learning algorithms and DSA by solving various problems.
Problems are mostly taken from Leetcode and the solutions are developed by me.
Of course these solutions can be better!! and they will get better, it's just matter of time.

## Problems
- [Median of two sorted array](#medianoftwosortedarray)
- [Two Sum](https://github.com/vnucodes/algo-cruise/blob/master/problems/Two-Sum.js)
- [Longest palindromic substring](https://github.com/vnucodes/algo-cruise/blob/master/problems/Longest-Palindromic-Substring.js)

#### Median of two sorted array
```javascript
/**
 * Two sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * @param {number[]} nums - nums
 * @param {number} target - target
 * @returns {number[]} indices
 * 
*/

let twoSum = function(nums, target) {

    'use strict'
    
    try { 	
        
        // throw error if, nums / target is undefined			    
        if ( typeof nums == 'undefined' || typeof target == 'undefined' ) throw new Error('Error!! Invalid Params!');

        var twoSum = [], numToFind, numToFindIndex;

        // loop
        nums.every( (num, index) => {

            numToFind = target - num;

            numToFindIndex = nums.indexOf( numToFind, (index + 1) );

            if ( numToFindIndex !== -1 ) {
                twoSum.push( index, numToFindIndex );
            } 

            return !twoSum.length ? true : false;

        })

        return twoSum;

    } catch( e ) {

        console.error( e.message );
    }  
    
};

const nums1 = [2,7,11,15], target1 = 9
let indices_1 = twoSum( nums1, target1 )
console.log( 'Case 01 : ', indices_1 ) // Ans : [0, 1]

const nums2 = [3,3], target2 = 6
let indices_2 = twoSum( nums2, target2 )
console.log( 'Case 02 : ', indices_2 ) // Ans : [0, 1]
```