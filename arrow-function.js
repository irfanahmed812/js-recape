/* example 1 */
function add(num1, num2) {
    return num1 + num2;
}

/* example 2 */
const add2 = function (num1, num2) {
    return num1 + num2;
}

/* example 3 */
const add3 = (num1, num2) => {
    return num1 + num2;
}

/* example 4 */
const add4 = (num1, num2) => num1 + num2;

// const sum2 = add2(15, 20);
// const sum3 = add3(15, 20);
const sum4 = add4(15, 20);

/* example 5 */
const doMath = (x, y) => {
    // const sum = x + y;
    // const dif = x - y;
    const mult = x * y;
    // const divi = y / x;

    return mult;
}

const result = doMath(15, 4);
console.log(result);