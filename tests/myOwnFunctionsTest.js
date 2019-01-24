describe('My own functions test', function () {
    const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    describe('.myFind', function () {
        describe('Checks for callback function', function () {
            it('for function that should find sth, should return expected value', function () {
                expect(exampleArray.myFind( number =>  number === 1)).toEqual(1);
            });
            it('for function that should not found sth, should return undefined', function () {
                expect(exampleArray.myFind( number =>  number === 10)).toEqual(undefined);
            });
        });
    });

    describe('.myFilter', function () {
        describe('Checks for callback function', function () {
            it('for function that should find sth, should return expected value', function () {
                const expectedArray = [2, 4, 6, 8];
                expect(exampleArray.myFilter( number =>  number % 2 === 0)).toEqual(expectedArray);
            });
            it('for function that should not found sth, should return []', function () {
                expect(exampleArray.myFilter( number =>  number === 10)).toEqual([]);
            });
        });
    });

    describe('.myMap', function () {
        describe('Checks for callback function', function () {
            it('for function that should modify sth, should return expected value', function () {
                const expectedArray = [2, 4, 6, 8, 10, 12, 14, 16, 18];
                expect(exampleArray.myMap( number =>  number * 2)).toEqual(expectedArray);
            });
            it('for function that should not modify nothing, should return []', function () {
                expect(exampleArray.myMap( number =>  {
                    if (number === 10) {
                        return number * 2;
                    }
                })).toEqual([]);
            });
        });
    });

    describe('.myReduce', function () {
        describe('Checks for callback function', function () {
            it('for function that should reduce sth, should return expected value', function () {
                const expectedArray = 45;
                expect(exampleArray.myReduce( (acc, currNumber) =>  acc + currNumber)).toEqual(expectedArray);
            });
            it('for function that should not reduce nothing, should return undefined', function () {
                expect(exampleArray.myReduce( (acc, currNumber) =>  {
                    if (currNumber === 10) {
                        return acc + currNumber;
                    }
                })).toEqual(undefined);
            });
        });
    });
});
