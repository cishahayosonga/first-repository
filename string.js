// Strings

let str = "Mama" // Double quotes
let str1 = 'Papa ${sum}' // Single quote
let str2 = `Kaka ${23 +45}}` // Backticks

// Backtics

// let lines = `My buddies:

// 1. Kamali,
// 2. Kanyarengwe,
// 3. Kamaramasenge`;



// console.log(lines)

// console.log(lines)

// Quotes

let lines1 = "My buddies:\n\n1. Kamali,\n2. Kanyarengwe,\n3. Kamaramasenge\n";

let umugani = "Kirima Rujugira yaravuze ngo, \"Ntabyera ngo de\"";

let gusobanura = "Ikimeneyetso \\ ni cyo kidufasha gutaruka umurongo.";

console.log(lines1, umugani, gusobanura)

let ababyeyi = "Ababyeyi beza";

// methods

console.log(lines1.length)
console.log(gusobanura.toLowerCase())
console.log(umugani.indexOf("r", 14))
console.log(umugani.lastIndexOf('r', 30))
console.log(umugani.includes('papa'))
console.log(ababyeyi.slice(0,3))
console.log(ababyeyi.substring(3, 0))
console.log(ababyeyi.substr(0, 10))
console.log(ababyeyi.split(" "))
console.log(umugani.split('"'))