/**
 * calculate greatest common divisor
 */

/**
 * method 1 :
 * Calculate all divisors of given numbers, and then get the intersection. At last, get the max one.
 */

/**
 *
 * @param {...number} numbers
 * @returns {number}
 */
function gcd1(...numbers) {
    return Math.max(...getIntersection(...numbers.map(getDivisors)));
}

/**
 *
 * @param {number} number
 * @returns {number[]}
 */
function getDivisors(number) {
    let divisors = [];
    if (number == 1) {
        divisors.push(1);
    } else {
        for (let i = 1; i <= number / 2; i++) {
            if (number % i == 0) {
                divisors.push(i);
            }
        }
        divisors.push(number);
    }
    return divisors;
}

/**
 *
 * @param  {...number[]} sets
 * @returns {number[]}
 */
function getIntersection(...sets) {
    return sets.reduce((preSet, curSet) =>
        preSet.filter(num => curSet.indexOf(num) > -1)
    );
}

module.exports = gcd1;
