import gcd = require('../libs/gcd');

const { gcd1, gcd3 } = gcd;
const testCases = [
    [13, 13, 13],
    [37, 600, 1],
    [20, 100, 20],
    [624129, 2061517, 18913]
];

function verify(fn) {
    testCases.forEach(item => {
        expect(fn(item[0], item[1])).toEqual(item[2]);
    });
}

test('gcd1 is right', () => {
    verify(gcd1);
});

test("gcd of Euclid's algorithm is right", () => {
    verify(gcd3);
});
