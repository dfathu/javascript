function splice() {
  var kota = ['jakarta', 'medan', 'padang', 'malang'];
  console.log(kota)
  kota.splice(0, 0, 'palembang')
  return kota
}
console.log(splice())
// untuk menyisipkan variabel baru pada array dan parameter kedua dari splice(1,2,3) untuk menghapus data yg berada disamping kanannya