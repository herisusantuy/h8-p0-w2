// Soal 1
var nama = 'Zero';
var peran = 'Penyihir';

if (peran === 'Ksatria'){
  console.log ('Selamat data di Dunia Proxitia, '+nama)
  console.log ('Halo '+peran+' '+nama+', kamu dapat menyerang dengan senjatamu!')
} else if (peran === 'Tabib'){
  console.log ('Selamat data di Dunia Proxitia, '+nama)
  console.log ('Halo '+peran+' '+nama+', kamu akan membantu temanmu yang terluka.')
} else if (peran === 'Penyihir'){
  console.log ('Selamat data di Dunia Proxitia, '+nama)
  console.log ('Halo '+peran+' '+nama+', ciptakan keajaiban yang membantu kemenanganmu!')
} else if (nama !=='' && peran === ''){
  console.log ('Halo '+nama+', Pilih peranmu untuk memulai game!')
} else if (nama ==='' && peran === ''){
  console.log ('Nama harus diisi!')
} 
