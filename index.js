const beli = require('./beli');
//your Program in here

console.log(`menjalankan program`);

let total_belanja;

beli(100000000, {item: 'Motor', harga: 40000000, waktu: 8000}, function(kembalian) {
  beli(kembalian, {item: 'Laptop', harga: 20000000, waktu: 5000}, function(kembalian1) {
    beli(kembalian1, {item: 'HP', harga: 5000000, waktu: 2000}, function(kembalian2) {
      beli(kembalian2, {item: 'Monitor', harga: 4000000, waktu: 2000}, function(kembalian3) {
        beli(kembalian3, {item: 'Jam Tangan', harga: 1000000, waktu: 2000}, function(kembalian4) {
          beli(kembalian4, {item: 'Tablet', harga: 10000000, waktu: 4000}, function(kembalian5) {
            //
          })
        })
      })
    })
  })
});
