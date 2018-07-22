// Soal 1
var nama = 'Java';
var peran = '';

if (nama == '' && peran == ''){
  console.log ('Nama & Peran harus diisi!')
}
else if (nama != '' && peran ==''){
  console.log ('Halo '+nama+', Pilih peranmu,Apakah sebagai Ksatria, Tabib atau Penyihir untuk memulai game!')
}
else if (nama == '' && peran !=''){
  console.log ('Untuk memulai game nama Anda harus diisi!')
}
else if (nama == 'Nina' && peran =='Ksatria'){
  console.log ('Selamat datang di dunia Proxyta, '+nama)
  console.log ('Halo '+peran+' '+nama+ ', kamu dapat menyerang dengan senjatamu!')
}
else if (nama == 'Danu' && peran == 'Tabib'){
  console.log ('Selamat datang di dunia Proxyta, '+nama)
  console.log ('Halo '+peran+' '+nama+ ', kamu akan membantu temanmu yang terluka.')
}
else if (nama == 'Zero' && peran == 'Penyihir'){
  console.log ('Selamat datang di dunia Proxyta, '+nama)
  console.log ('Halo '+peran+' '+nama+ ', ciptakan keajaiban yang membantu kemenanganmu!')
}
else if (nama !== 'Nina' || nama !== 'Danu' || nama !=='Zero' && peran !== ''){
  console.log ('Selamat datang di dunia Proxyta, '+nama)
  console.log ('Halo '+peran+' '+nama+ ', ciptakan keajaiban yang membantu kemenanganmu!')
}
else {
  console.log ('Nama Anda belum terdaftar, silahkan hubungi Admin!')
}
