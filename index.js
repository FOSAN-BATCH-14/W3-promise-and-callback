const beli = require('./beli');
console.log(`menjalankan program`);

beli(150000000, {item: 'Sepeda Motor', harga: 50000000, waktu: 10000}, function(kembalian) {
  beli(kembalian, {item: 'Laptop Gaming', harga: 25000000, waktu: 6000}, function(kembalian1) {
    beli(kembalian1, {item: 'Smartphone', harga: 7000000, waktu: 3000}, function(kembalian2) {
      beli(kembalian2, {item: 'TV LED', harga: 15000000, waktu: 7000}, function(kembalian3) {
        beli(kembalian3, {item: 'Kamera DSLR', harga: 12000000, waktu: 5000}, function(kembalian4) {
          beli(kembalian4, {item: 'Smartwatch', harga: 5000000, waktu: 4000}, function(kembalian5) {
            //
          })
        })
      })
    })
  })
});
