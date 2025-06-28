function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let current = '';

        for (let j = i; j < s.length; j++) {
            if (current.includes(s[j])) {
                break
            };

            current += s[j];
            maxLength = Math.max(maxLength, current.length)
        }
    };
    return maxLength;
};