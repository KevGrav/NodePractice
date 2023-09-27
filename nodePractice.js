// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const firstName = getInput(1)
const lastName = getInput(2)
const fullName = firstName + ' ' + lastName
console.log('Hello ' + firstName + " " + lastName)
console.log(firstName .toUpperCase() + ' ' + lastName .toUpperCase() + ' is your name capitalized')
console.log('Your initials are ' + (firstName[0]) + ". " + (lastName[0]) + ".")
console.log('Your email is ' + (firstName .toLowerCase()[0]) + (lastName .toLowerCase()) + '.prsvr@gmail.com')