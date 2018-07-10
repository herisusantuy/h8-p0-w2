// Soal 1
-----Looping Pertama------
var counter=0;
console.log('LOOPING PERTAMA')
while (counter < 20){

  var angka=counter + 2
  console.log (angka+' - I Love Coding')
  counter+=2
  }
-----Looping Kedua------
  var counter=20;
  console.log('LOOPING KEDUA')
  while (counter > 0){

    var angka=counter
    console.log (angka+' - I will become fullstack developer')
    counter-=2
    }

// Soal 2
-----Looping Pertama------
var counter =1;
console.log('LOOPING PERTAMA')
for ( counter;counter <= 20;counter +=1 ){
  console.log (counter+' - I Love coding')
}
-----Looping Kedua------
var counter =20;
console.log('LOOPING KEDUA')
for ( counter;counter >= 1;counter -=1 ){
  console.log (counter+' - I will become fullstack developer')
}

Soal 3

var counter=1;

for (counter;counter <= 100;counter+=1){
  if (counter%2==0) {
    console.log (counter + ' GENAP')
  }
  else {
    console.log(counter + ' GANJIL')
  }
}
------------------------------------------------------
var counter=1;

for (counter;counter <= 100;counter+=2){
  if (counter%3==0) {
      console.log (counter + ' kelipatan 3')
    }
    else {
      console.log(counter)
    }
}
--------------------------------------------------------

var counter=1;

for (counter;counter <= 100;counter+=5){
  if (counter%6==0) {
      console.log (counter + ' kelipatan 6')
    }
    else {
      console.log(counter)
    }
}

---------------------------------------------------------

var counter=1;

for (counter;counter <= 100;counter+=9){
  if (counter%10==0) {
      console.log (counter + ' kelipatan 9')
    }
    else {
      console.log(counter)
    }
}
