const beli = require("./beli.js");

console.log("Menjalankan program");

function mulaiBelanja(uang) {
  beli(uang, { item: "Permen", harga: 2000, waktu: 2000 }, function (kembalian1) {
    console.log("--------------------------------");
    beli(kembalian1, { item: "Roti", harga: 3000, waktu: 3000 }, function (kembalian2) {
      console.log("--------------------------------");
      beli(kembalian2, { item: "Kue Sus", harga: 2500, waktu: 3000 }, function (kembalian3) {
        console.log("--------------------------------");
        beli(kembalian3, { item: "Susu", harga: 4000, waktu: 3000 }, function (kembalian4) {
          console.log("--------------------------------");
          beli(kembalian4, { item: "Coklat", harga: 1500, waktu: 3000 }, function () {
            console.log("--------------------------------");
          });
        });
      });
    });
  });
}

mulaiBelanja(10000);
