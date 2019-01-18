function isFunction(func) {
    return func && {}.toString.call(func) === '[object Function]';
}

Array.prototype.myFilter = function(callbackFunction = false) {

    if (callbackFunction === false) {
        console.error('Invalid parameters!');
        return 'Invalid parameters!';
    }
    else if (isFunction(callbackFunction) !== true) {
        console.error('You must provide an argument that is a callback function!');
        return 'You must provide an argument that is a callback function!';
    } else if (callbackFunction.length > 3) {
        console.error('Your callback function has too many parameters');
        return 'Your callback function has too many parameters';
    }

    const paramNum = callbackFunction.length;
    const filtered = [];
    for (let i = 0; i < this.length; i++) {
        switch (paramNum) {
            case 1:
                const result1 = callbackFunction(this[i]);
                result1 === true ? filtered.push(this[i]) : 'do nothing';
                break;
            case 2:
                const result2 = callbackFunction(this[i], i);
                result2 === true ? filtered.push(this[i]) : 'do nothing';
                break;
            case 3:
                const result3 = callbackFunction(this[i], i, this);
                result3 === true ? filtered.push(this[i]) : 'do nothing';
                break;
        }
    }
    return filtered;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter( number => number % 2 === 0 );
const myEvenNumbers = numbers.myFilter(number => number % 2 === 0);
console.log('.filter result: ',evenNumbers);
console.log('.myFilter result: ',myEvenNumbers);
