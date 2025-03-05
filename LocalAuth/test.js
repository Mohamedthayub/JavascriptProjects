const validate  = require("validator");

console.log(validate.isEmail("thayub@gmailcom"));
console.log(validate.isStrongPassword("Thayub@#$124"));
console.log(validate.isEmail("thayub@gmail.com"));