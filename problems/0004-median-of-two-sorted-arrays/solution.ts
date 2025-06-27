export function findMedianSortedArraysSimple(nums1: number[], nums2: number[]): number {
    const mergedArrays: number[] = [];
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            mergedArrays.push(nums1[i]);
            i++;
        } else {
            mergedArrays.push(nums2[j]);
            j++;
        };
    };

    // Handle cases when any nums left in the arrays
    while (i < nums1.length) {
        mergedArrays.push(nums1[i]);
        i++;
    };

    while (j < nums2.length) {
        mergedArrays.push(nums2[j]);
        j++;
    };

    // Find median
    const totalLength = mergedArrays.length;
    if (totalLength % 2 === 0) {
        const mid1 = mergedArrays[totalLength / 2 - 1];
        const mid2 = mergedArrays[totalLength / 2];
        return (mid1 + mid2) / 2;
    } else {
        return mergedArrays[Math.floor(totalLength / 2)];
    };
};