// Soal 1
function shoutOut() {
  console.log("Haloooo Function!")
}

shoutOut()

// Soal 2
function calculateMultiply(a,b){
  return a*b
  }
  var hasil = calculateMultiply(5,6);
  console.log (hasil)

// // Soal 3

  var name = 'Agus'
  var age = '30'
  var address = 'Jln Malioboro, Yogyakarta'
  var hobby = 'Gaming'

  function processSentence(name,age,address,hobby){
  return   'Nama saya '+name+', umur saya '+age+' tahun'+', alamat saya di '+address+', dan saya punya hobby yaitu '+hobby+' !'
  }

  var fullSentence =processSentence (name,age,address,hobby)
  console.log (fullSentence)
