# W3-promise-and-callback
## Learning Competencies

- Promise

## Summary

Challenge kali ini akan membuat sebuah interface untuk membuat sebuah program call back multiple-file

Tujuan utama dari tantangan ini adalah untuk eksplorasi tentang penggunaan call back dan fungsi nya.

## LEVELS

### Level 0 : Call Back

pada file `program.js` buat lah sebuah program match-data yang bertujuan untuk menggabungkan data parent dengan children.

diberikan 2 file `.json` yaitu bernama `parent.json` dan `children.json` , file ini berfungsi sebagai database. file`parent.json` berisi data - data orangtua, dan file `children.json`berisi data - data anak.

di file `program.js` terdapat function `match_data` yang berisi coding anda.

1. baca file `parent.json` menggunakan fungsi `fs.readFile` , disetiap pembacaan berikan `console.log(loading)` dan `sleep(2000)`
2. baca file `children.json` menggunakan fungsi `fs.readFile` didalam callback `parent.json` , disetiap pembacaan berikan `console.log(loading)` dan `sleep(2000)`
3. Cek data tersebut apabila data `parent` `last_name ` sama dengan data `children` `family`maka masukkan ke dalam data parent.
4. buat lah key baru bernama `children` pada data `parent` yang berisi kumpulan data children yang mempunyai nama `last_name` sama dengan `family`

tampilan di akhir maka akan muncul seperti dibawah ini:

```bash
Notification : Data sedang diproses !
loading data parent.....
loading data children.....
[ { id: 1,
    first_name: 'Mike',
    last_name: 'Campbell',
    age: 36,
    children:
     [ 'Barrett Chan',
       'Hedda Downs',
       'Hope Hooper',
       'Kane Good',
       'Blossom Odom',
       'Allegra Rosales',
       'Lawrence Beach' ] },
  { id: 2,
    first_name: 'Igor',
    last_name: 'Katsev',
    age: 40,
    children:
     [ 'Lani Rollins',
       'Jonah Deleon',
       'Jackson Howell',
       'Emerald Graham',
       'Yardley Pruitt',
       'Isabella Santiago',
       'Ivy Robinson',
       'Charissa Mitchell' ] },
  { id: 3,
    first_name: 'Tran',
    last_name: 'Robin',
    age: 39,
    children:
     [ 'McKenzie Burris',
       'Marshall Griffith',
       'Kendall Burt',
       'Yen Ryan',
       'Marvin Stuart',
       'Justine Mosley',
       'Montana Hardy' ] },
  { id: 5,
    first_name: 'Eric',
    last_name: 'Oliver',
    age: 42,
    children:
     [ 'Kieran Edwards',
       'Brenna Horton',
       'Candice Kent',
       'Aphrodite Whitfield',
       'Alexander Henson' ] },
  { id: 7,
    first_name: 'Thomas',
    last_name: 'Wood',
    age: 50,
    children:
     [ 'Keegan Coleman',
       'Jorden Ruiz',
       'Ray Alexander',
       'Hanae Kelly',
       'Wylie Holden',
       'Vivian Larson',
       'James Oneill',
       'Hayes Weber',
       'Jessamine Swanson' ] },
  { id: 8,
    first_name: 'Alexandra',
    last_name: 'Bass',
    age: 45,
    children:
     [ 'Amethyst Morgan',
       'Latifah Barron',
       'Avram Lloyd',
       'Xerxes Cohen',
       'Xaviera Simpson',
       'Joy Wooten',
       'Ivy Wise',
       'Kimberley Alvarado',
       'Florence Ruiz',
       'Jerry Ellison',
       'Jemima Mack',
       'Hiram Freeman',
       'Kameko Garrison',
       'Octavia Odom' ] },
  { id: 9,
    first_name: 'Leo',
    last_name: 'Caldwell',
    age: 47,
    children:
     [ 'Lamar Hardin',
       'Fiona Howard',
       'Blossom Cantrell',
       'Tyler Daniels',
       'Bert Mullen',
       'Alfreda Peck',
       'Maia Mathews',
       'Zachery Diaz',
       'Ruby Maddox',
       'Buckminster Woodward' ] } ]

```
#  Callback Belanja

Terdapat 1 file beli.js yang berisikan function callback yang telah dibuat untuk digunakan melakukan proses pembelian.

cara pakainya adalah

```
beli(uang, objItem, callback)
```

**Uang**(number): jumlah uang yang dibawa ketika akan pergi Belanja

**objItem**(object):

- item(string): nama item yang akan dibeli
- harga(number): harga dari barang yang akan dibeli
- waktu(number): number dalam milliesecond perkiraan waktu untuk proses pembelian

**callback**(function):

- menerima 1 parameter kembalian dari proses belanja

## Release 0: Belanja

Gunakanlah Proses belanja tersebut dengan test case kalian masing-masing minimal 5 proses belanja dalam sekali jalan. misalnya: pertama beli permen setelah beli permen uang kemabaliannya dibelikan roti. begitu seterusnya sampai dengan 5 kali belanja


