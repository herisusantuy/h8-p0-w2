// Soal 1
// ALGORITMA
SIMPAN massa benda = 600 kg
SIMPAN percepatan = 2 m/s2
SIMPAN resultan gaya dengan rumus "massa benda" dikalikan dengan
       "percepatan"
Hitung hasil perkalian antara "massa" dengan "percepatan"
Tampilkan nilai gaya


// PSEUDOCODE
STORE "massa" with 600kg
STORE "percepatan" with 2 m/s2
STORE "gaya" with massa * percepatan


CALCULATE "massa" times "percepatan"

DISPLAY "gaya"

// SYNTAX
var m = 600;
var a = 2 ;
var F = m*a ;


console.log (F) ;

// Soal 2
// // ALGORITMA

1. Masukkan (tahun)
2. Jika sisa pembagian (tahun dibagi 4) != (tidak sama dengan) 0,
maka cetak (“Tahun ” ,tahun, “bukan tahun kabisat”)
Sebaliknya
3. Jika sisa pembagian (tahun dibagi 100) = (sama dengan) 0
dan sisa pembagian (tahun dibagi 400) != (tidak sama dengan) 0,
maka cetak (“Tahun” ,tahun, “bukan tahun kabisat)
sebaliknya
4. Jika tidak memenuhi semua kondisi di atas, cetak(“Tahun” ,tahun, “adalah tahun kabisat”)


// // PSEUDOCODE
STORE "year" with any value
WHILE "year" /4 = 0 AND "year"/100 !=0
  DISPLAY "Tahun", "year", "Tahun Kabisat"
WHILE "year"/4=0 AND "year"/100=0 AND "year"/400=0
  DISPLAY "Tahun", "year", "Tahun Kabisat"
ELSE
  DISPLAY "Tahun", "year", "Bukan Tahun Kabisat"


// SYNTAX
var year=2020 ;

if (year % 4 != 0 ){
  console.log ("Tahun "+year +" Bukan tahun kabisat")
}
else if (year % 100 == 0 &&  year % 400!=0){
  console.log ("Tahun "+year +" Bukan tahun kabisat")
}
else {
 console.log ("Tahun "+year +" tahun kabisat")
}

// Soal 3
// ALGORITMA
1. Masukan (Jumlah Pakaian)
2. Jika jumlah pakaian kurang dari 20 maka jumlah pakaian ditambah 1
3. Jika jumlah pakian = 20 maka tampilkan "Mesin Cuci Siap"

// PSEUDOCODE
1. STORE 'pakaian' 0
2. WHILE ('pakaian' < 20) then
         'pakaian' ='pakaian' + 1
3. DISPLAY 'Mesin Cuci Siap'

// Soal 4
ALGORITMA
1. Masukan (kuku siswa)
2. Jika kuku = panjang maka 'dihukum'
3. Jika kuku = tidak pajang maka 'dipuji'

PSEUDOCODE
1. STORE 'kuku' with any text
2. IF kuku = panjang
   DO 'dihukum'
      else
   DO 'dipuji'
