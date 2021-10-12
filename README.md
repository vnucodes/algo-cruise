# Algo Cruise
My journey in learning algorithms and DSA by solving various problems.
Problems are mostly taken from Leetcode and the solutions are developed by me.
Of course these solutions can be better!! and they will get better, it's just matter of time.

## Problems
- [Median of two sorted array](#median-of-two-sorted-array)
- [Two Sum](#two-sum)
- [Longest palindromic substring](#longest-palindromic-substring)
- [Longest Substring Without Repeating Characters](#longest-substring-without-repeating-characters)
- [Container With Most Water](#container-with-most-water)

### Median of two sorted array

```javascript

/**
 * Median of Two Sorted Arrays
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * 
 * @param {number[]} nums1 - sorted array
 * @param {number[]} nums2 - sorted array
 * @returns {number} median - median of nums1 and nums2
 * 
*/

let  findMedianSortedArrays = function(nums1, nums2) {

    'use strict'
    
    var merged, isOddArr

    // merge and sort
    merged = ([ ...nums1, ...nums2 ]).sort( (a, b) => a - b )

    // if single element array, return 
    if( merged.length === 1 ) return merged[0]

    // set up if odd or even length array
    isOddArr = !!(merged.length % 2)

    // odd length array median
    if ( isOddArr ) return ( merged[ Math.floor( merged.length * .5 ) ] ).toFixed(5)

    // even length array median
    return ( (merged[Math.floor(merged.length * .5) - 1] + merged[Math.floor(merged.length * .5)]) * .5 ).toFixed(5)
    
};

const nums1 = [1,3], nums2 = [2]
let median_1 = findMedianSortedArrays( nums1, nums2 )
console.log( 'Case 01 : ', median_1 ) // Ans : 2.00000

const nums3 = [0,0], nums4 = [0,0]
let median_2 = findMedianSortedArrays( nums3, nums4 )
console.log( 'Case 02 : ', median_2 ) // Ans : 0.00000

const nums5 = [], nums6 = [1]
let median_3 = findMedianSortedArrays( nums5, nums6 )
console.log( 'Case 03 : ', median_3 ) // Ans : 1.00000

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

### Longest Substring Without Repeating Characters

```javascript

/**
 * Longest Substring Without Repeating Characters
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * @param {string} s
 * @return {number} longest substring length
 */
let lengthOfLongestSubstring = function(s) {

    'use strict'
    
    // if length == 0
	if ( !s.length || s.length == 1 ) return s.length

	var currentSubstrArr = [], LongestSubstr = '', currentSubstr = '', startIndex, nextIndex

	s.split('').forEach( (letter, index, strArray) => {

		// set startIndex and nextIndex
		startIndex = index
		nextIndex = startIndex + 1

		// push the iterating letter first
		currentSubstrArr.push( letter )

		// function to keep pushing unique 
		// letters into 'currentSubstrArr'
		function getCurrentSubstrArr ( nextIndex ) {			

			if ( currentSubstrArr.includes( s[nextIndex] ) ) {
				
				return currentSubstrArr.join('')

			} else {

				currentSubstrArr.push( s[nextIndex] )

				nextIndex++

				return  nextIndex <= s.length ? getCurrentSubstrArr( nextIndex ) : currentSubstrArr.join('')
			}
		}

		// function call
		currentSubstr = getCurrentSubstrArr( nextIndex )		

		// update LongestSubstr, if currentSubstr is longer
		LongestSubstr = LongestSubstr.length >= currentSubstr.length ? LongestSubstr : currentSubstr
		
		// resets for next iteration
		currentSubstr = ''
		currentSubstrArr.length = 0

	});	

	// return 
	return LongestSubstr.length
}

let s1 = 'abcabcbb', lls_1
lls_1 = lengthOfLongestSubstring( s1 )
console.log(lls_1) // Ans. 3 ('abc')

let s2 = 'bbbbb', lls_2
lls_2 = lengthOfLongestSubstring( s2 )
console.log(lls_2) // Ans.1 (b)

```

### Container With Most Water

```javascript

/**
 * Container With Most Water
 * Given n non-negative integers a1, a2, ..., an , 
 * where each represents a point at coordinate (i, ai). n vertical lines 
 * are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
 * Find two lines, which, together with the x-axis forms a container, 
 * such that the container contains the most water.
 *
 * @param {number[]} height
 * @return {number} 
 */
var maxArea = function(height) {
    
    // if empty height
    if ( !height.length ) return 0

    // variables
    var left = 0, 
    right = ( height.length - 1 ), 
    maxArea = 0,
    dist,
    min

    while ( left !== right ) {

        dist = right - left

        min = Math.min( height[ left ], height[ right ] )

        maxArea = ( dist * min ) > maxArea ? ( dist * min ) : maxArea

        // update left or right based on value compare
        height[ left ] >= height[ right ] ? --right : ++left

    }

    return maxArea  
}

const height1 =  [1,8,6,2,5,4,8,3,7]
let maxArea_1 = maxArea( height1 )
console.log( maxArea_1 )

const height2 =  [1,2,1]
let maxArea_2 = maxArea( height2 )
console.log( maxArea_2 )


```