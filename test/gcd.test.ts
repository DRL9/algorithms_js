import gcd = require('../libs/gcd');

test('gcd1 is right', () => {
    let testCases = [
        [13, 13, 13],
        [37, 600, 1],
        [20, 100, 20],
        [624129, 2061517, 18913]
    ];
    testCases.forEach(item => {
        expect(gcd(item[0], item[1])).toEqual(item[2]);
    });
});
