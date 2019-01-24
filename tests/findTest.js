describe('Input parameters', function () {
    const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    describe('Checks for callback function', function () {
        it('for function that should find sth should return expected value', function () {
            expect(exampleArray.myFind( (number) =>  number === 1)).toBe(1);
        });
        it('for function that should not found sth should return undefined', function () {
            expect(exampleArray.myFind( (num) =>  num === 10)).toBe(undefined);
        });
    });
});
