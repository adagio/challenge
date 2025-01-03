"use strict";
/**
 * Finds the first subset of two numbers in an array that sum to a target value.
 *
 * @param {number[]} numbers The array of numbers to search within.
 * @param {number} target The target sum to find.
 * @returns {(number[] | undefined)} An array containing the two numbers that sum to the target,
 *   or undefined if no such subset is found.
 * @throws {Error} If the input array is empty.
 */
function findFirstSumPair(numbers, target) {
    if (numbers.length === 0) {
        throw new Error("Input array cannot be empty.");
    }
    const seen = new Set(); // Use a set for O(1) lookups
    for (const num of numbers) {
        const complement = target - num;
        if (seen.has(complement)) {
            return [complement, num];
        }
        seen.add(num);
    }
    return undefined; // No pair found
}
// Example usage and tests
function runTests() {
    console.log("Running tests...");
    const testCases = [
        { input: { numbers: [2, 5, 8, 14, 0], target: 10 }, expected: [2, 8] },
        { input: { numbers: [1, 2, 3, 4, 5], target: 7 }, expected: [3, 4] },
        { input: { numbers: [-1, 2, -3, 4, -5], target: 1 }, expected: [-1, 2] },
        { input: { numbers: [10, 20, 30, 40, 50], target: 100 }, expected: undefined },
        { input: { numbers: [5, 5, 5, 5, 5], target: 10 }, expected: [5, 5] },
        { input: { numbers: [-5, -2, 2, 5, 10], target: 0 }, expected: [-2, 2] },
        { input: { numbers: [5, 5, 5, 5, 5], target: 10 }, expected: [5, 5] },
        { input: { numbers: [], target: 10 }, expected: "error" }
        // added test to throw error
    ];
    testCases.forEach((testCase, index) => {
        try {
            const actual = findFirstSumPair(testCase.input.numbers, testCase.input.target);
            if (testCase.expected === "error") {
                console.error(`Test ${index + 1}: Failed. Expected an error but it didn't happen`);
            }
            else if (JSON.stringify(actual) === JSON.stringify(testCase.expected)) {
                console.log(`Test ${index + 1}: Passed`);
            }
            else {
                console.error(`Test ${index + 1}: Failed. Expected: ${JSON.stringify(testCase.expected)}, but got: ${JSON.stringify(actual)}`);
            }
        }
        catch (error) {
            if (testCase.expected === "error") {
                console.log(`Test ${index + 1}: Passed (error thrown as expected)`);
            }
            else {
                console.error(`Test ${index + 1}: Failed. Exception: ${error.message}`);
            }
        }
    });
}
runTests();
