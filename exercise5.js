// Soal 1
var word = 'Javascript'
var second = 'is'
var third = 'awesome'
var fourth = 'and'
var fifth = 'I'
var sixth ='love'
var seventh ='it!'

console.log (word +' '+second+' '+third+' '+fourth+' '+fifth+' '+sixth+' '+seventh)

//
// // Soal 2
var word ='wow Javascript is so cool'
var exampleFirstWord= word[0]+word[1]+word[2]
var secondword=word[3]+word[4]+word[5]+word[6]+word[7]+word[8]+word[9]+word[10]+word[11]+word[12]+word[13]
var thirdword=word[15]+word[16]
var fourthword=word[18]+word[19]
var fiftword=word[21]+word[22]+word[23]+word[24]

console.log ('First Word: '+ exampleFirstWord)
console.log ('Second Word: '+ secondword)
console.log ('Third Word: '+ thirdword)
console.log ('Fourth Word: '+ fourthword)
console.log ('Fifth Word: '+ fiftword)

// Soal 3
var word ='wow Javascript is so cool'
var exampleFirstWord= word.substring(0,3)
var secondword=word.substring(4,14)
var thirdword=word.substring(15,17)
var fourthword=word.substring(18,20)
var fiftword=word.substring(21,25)

console.log ('First Word: '+ exampleFirstWord)
console.log ('Second Word: '+ secondword)
console.log ('Third Word: '+ thirdword)
console.log ('Fourth Word: '+ fourthword)
console.log ('Fifth Word: '+ fiftword)

// Soal 4
var word ='wow Javascript is so cool'
var exampleFirstWord= word.substring(0,3)
var secondword=word.substring(4,14)
var thirdword=word.substring(15,17)
var fourthword=word.substring(18,20)
var fiftword=word.substring(21,25)

var firstwordlenght = exampleFirstWord.length
var secondwordlenght = secondword.length;
var thirdwordlenght = thirdword.length;
var fourthwordlenght = fourthword.length;
var fifthwordlenght = fiftword.length;

console.log ('First Word: '+ exampleFirstWord+ ', with lenght: '+firstwordlenght)
console.log ('Second Word: '+ secondword+ ', with lenght: '+secondwordlenght)
console.log ('Third Word: '+ thirdword+ ', with lenght: '+thirdwordlenght)
console.log ('Fourth Word: '+ fourthword+ ', with lenght: '+fourthwordlenght)
console.log ('Fifth Word: '+ fiftword+ ', with lenght: '+fifthwordlenght)
