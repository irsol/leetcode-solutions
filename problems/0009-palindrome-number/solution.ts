// Palindrome Number
// https://leetcode.com/problems/palindrome-number

export function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    if (x < 10) return true;

    let original = x;
    let reversed = 0;

    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    };

    return original === reversed;
};