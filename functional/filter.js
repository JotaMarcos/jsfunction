const numbers = [1, 2, 3, 4, 5, 6]

const greaterThanZero = el  => el > 0
const greaterThanTen = el => el > 10
const even = el => el % 2 === 0
const evenV2 = el => el % 2 === 1

console.log(`Another form of numbers greater than zero: ${numbers.filter(el => el > 0)}`)
console.log(`Numbers greater than zero: ${numbers.filter(greaterThanZero)}`)
console.log(`Numbers greater than ten: ${numbers.filter(greaterThanTen)}`)
console.log(`Pair numbers: ${numbers.filter(even)}`)
console.log(`Odd numbers: ${numbers.filter(evenV2)}`)

const students = [
    {name: 'Jake', score: 6.4 },
    {name: 'Susan', score: 8.6 },
    {name: 'Emma', score: 9.4 },
    {name: 'Peter', score: 9.1 },
]

const greatStudent = students => students.score >= 9

console.log(students.filter(greatStudent))
console.log(students)
