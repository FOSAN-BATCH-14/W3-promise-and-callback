let beli = require('./beli.js')

function belanja(uang) {
  beli(uang, { item: "Cilok", harga: 2000, waktu: 1000 }, function(kembalian1) {
    beli(kembalian1, { item: "Es teh", harga: 5000, waktu: 1100 }, function(kembalian2) {
      beli(kembalian2, { item: "Martabak", harga: 10000, waktu: 1200 }, function(kembalian3) {
        beli(kembalian3, { item: "Nasi Padang", harga: 15000, waktu: 1300 }, function(kembalian4) {
          beli(kembalian4, { item: "Bakpao", harga: 2500, waktu: 1500 }, function(kembalian5) {
            console.log(`Sisa uang: ${kembalian5}`);
          });
        });
      });
    });
  });
}

belanja(50000);
