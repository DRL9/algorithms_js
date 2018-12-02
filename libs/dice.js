/**
 * @description Given a dice with consecutive points of different distribution probability,
 * throw twice to calculate the probability of the sum given.
 */

class Dice {
    /**
     *
     * @param {number} number
     * @param {Array<number>} probabilities
     */
    constructor(number, probabilities) {
        this.numbers = Array(number)
            .fill(0)
            .map(index => index + 1);
        this.probabilities = probabilities;
    }
}

/**
 *
 * @param {Dice} dice
 * @param {number} sumExpected
 * @returns {number}
 */
function getProbability(dice, sumExpected) {
    let start, end;
    if (sumExpected > dice.numbers.length + 1) {
        start = sumExpected - 6;
        end = 6;
    } else {
        start = 1;
        end = sumExpected - 1;
    }
    let prob = 0;
    for (let i = start; i <= end; i++) {
        prob += dice.probabilities[i - 1] * dice.probabilities[sumExpected - 1];
    }
    return prob;
}

module.exports = {
    Dice,
    getProbability
};
