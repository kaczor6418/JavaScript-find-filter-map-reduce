const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// filter out only even numbers
const evenNumbers = numbers.filter( number => number % 2 === 0 );
console.log(evenNumbers);

function isFunction(func) {
    return func && {}.toString.call(func) === '[object Function]';
}

function myFilter(array = false, callbackFunction = false) {

    if (array === false || callbackFunction === false) {
        console.error('Invalid parameters!');
        return 'Invalid parameters!';
    }
    else if (isFunction(callbackFunction) != true) {
        console.error('Invalid parameters!');
        return 'Invalid parameters!';
    } else if (callbackFunction.length > 3) {
        console.error('Your callback function has too many parameters');
        return 'Your callback function has too many parameters';
    } else if (!Array.isArray(array)) {
        console.error('No array detected!');
        return 'No array detected!';
    }

    const paramNum = callbackFunction.length;
    const filtered = [];
    for (let i = 0; i < array.length; i++) {
        switch (paramNum) {
            case 1:
                const result1 = callbackFunction(array[i]);
                result1 === true ? filtered.push(array[i]) : 'do nothing';
                break;
            case 2:
                const result2 = callbackFunction(array[i], i);
                result2 === true ? filtered.push(array[i]) : 'do nothing';
                break;
            case 3:
                const result3 = callbackFunction(array[i], i, array);
                result3 === true ? filtered.push(array[i]) : 'do nothing';
                break;
        }
    }
    return filtered;
}

const myEvenNumbers = myFilter(numbers, (number) => number % 2 === 0);
console.log(myEvenNumbers);
