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