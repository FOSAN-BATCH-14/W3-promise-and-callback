//your Program in here
const beli = require("./beli.js");

beli(10000, { item: "permen", harga: 1000, waktu: 2000 }, function (kembalian) {
  console.log("--------------------------------");
  beli(
    kembalian,
    { item: "kue", harga: 5000, waktu: 3000 },
    function (kembalian) {
      console.log("--------------------------------");
      beli(
        kembalian,
        { item: "kopi", harga: 3000, waktu: 3000 },
        function (kembalian) {
          console.log("--------------------------------");
          beli(
            kembalian,
            { item: "es teh", harga: 3000, waktu: 3000 },
            function (kembalian) {
              console.log("--------------------------------");
              beli(
                kembalian,
                { item: "coklat", harga: 10000, waktu: 3000 },
                function () {
                  console.log("--------------------------------");
                }
              );
            }
          );
        }
      );
    }
  );
});

console.log(`menjalankan program`);
