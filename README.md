# Algo Cruise
My journey in learning algorithms and DSA by solving various problems.
Problems are mostly taken from Leetcode and the solutions are developed by me.
Of course these solutions can be better!! and they will get better, it's just matter of time.

## Problems
- [Median of two sorted array](#median-of-two-sorted-array)
- [Two Sum](#two-sum)
- [Longest palindromic substring](#longest-palindromic-substring)

### Median of two sorted array

```javascript

/**
 * Two sum
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
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
        if ( typeof nums == 'undefined' || typeof target == 'undefined' ) {
            throw new Error('Error!! Invalid Params!')
        }

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

### Two Sum

```javascript
/**
 * Two sum
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
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
        if ( typeof nums == 'undefined' || typeof target == 'undefined' ) {
            throw new Error('Error!! Invalid Params!');
        }

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

### Longest palindromic substring

```javascript

/**
 * Longest Palindromic Substring
 * Given a string s, return the longest palindromic substring in s.
 * 
 * @param {string} s - haystack string
 * @returns {string} - longest palindrome
 * 
*/

var longestPalindrome = function(s) {

    if ( s.length === 1 ) return s[0]

    let anOddCenter, anEvenCenter, left, right
    let longestPalindrome = '', currentPalindrome = ''

    for ( let i = 0; i < s.length; ) {

        anOddCenter = s[i - 1] === s[i + 1] 
        anEvenCenter = s[i] === s[i + 1]

        // as an odd center
        if ( anOddCenter ) {

            [ left, right ] = expand( i - 1, i + 1 )
            testAndAssignPalindrome(left, right)
        }	

        // as an even center	
        if ( anEvenCenter ) {

            [ left, right ] = expand( i, i + 1 )
            testAndAssignPalindrome(left, right)
        }				 

        i++
    }

    function expand(left, right) {

        return 	s[left - 1] && s[right + 1] && s[left - 1] === s[right + 1] 
                        ? expand(left - 1, right + 1) 
                        : [ left, right ] 
    }

    function testAndAssignPalindrome(left, right) {

        currentPalindrome = s.substr( left, (right - left + 1) )

        longestPalindrome = currentPalindrome.length > longestPalindrome.length 
                                            ? currentPalindrome 
                                            : longestPalindrome

    }

    return longestPalindrome.length ? longestPalindrome : s[0]

}

const s1 = 'babad'
let lps_1 = longestPalindrome( s1 )
console.log( 'Case 01 : ', lps_1 ) // Ans : 'bab'

const s2 = 'cbbd'
let lps_2 = longestPalindrome( s2 )
console.log( 'Case 02 : ', lps_2 ) // Ans : 'bb'

```