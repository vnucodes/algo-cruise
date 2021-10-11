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