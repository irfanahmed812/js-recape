document.getElementById('main').addEventListener('click', function () {
    const div = document.createElement('h3')
})

function bgColor() {
    const numbers = document.getElementsByClassName('text');
    for (const number of numbers) {
        number.style.backgroundColor = 'green';
    }
}


// let

let balance = 45;
balance = 199;
const userName = 'david_clerk'

/* arry */

const numbers = [45, 52, 84, 64, 78, 5];
// push . pop . numbers[2] = 233
numbers = [44, 15, 22, 11];
console.log(numbers);

let sum = 0;
for (let i = 0; i <= numbers.length; i++) {
    const number = numbers[i];
    sum = sum + number;
}

// object
const student = { roll: 11, name: 'rafik', job: 'student' };
student.name = 'ahmed';
console.log(student);