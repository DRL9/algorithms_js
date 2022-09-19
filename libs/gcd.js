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
export function gcd1(...numbers) {
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
    preSet.filter((num) => curSet.indexOf(num) > -1)
  );
}

/**
 * method 2:
 * Calculacte the common prime factorization of numbers, and then get the product of them. The result is the gcd.
 */

/**
 * method 3 (Euclid's algorithm):
 * the gcd of two numbers also divides their difference
 * eg:
 * gcd(a,b)=c
 * a=c*a1
 * b=c*b1
 * a=b*x+y
 * c*a1=c*b1*x+y
 * y=c*(a1-b1*x)
 */

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
export function gcd3(num1, num2) {
  return getGCDbyEuclid(num1, num2);
}

function getGCDbyEuclid(num1, num2) {
  let [max, min] = num1 > num2 ? [num1, num2] : [num2, num1];
  let mod = max % min;
  if (mod == 0) {
    return min;
  }
  return getGCDbyEuclid(min, mod);
}
