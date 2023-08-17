// Rest/Spread Operator (Toparlama/Yayma Operatörü)

//Örnek 1:
function topla(sayi1, sayi2, sayi3) {
    return sayi1 + sayi2 + sayi3;
}
//Örnek 2:
const sayilar = [1, 2, 3];
console.log(topla(...sayilar));

//Örnek 3:
const sayilar1 = [1, 2, 3];
const sayilar2 = [4, 5, 6];

const birlesmisDizi = [...sayilar1, ...sayilar2];
console.log(birlesmisDizi);

//Örnek 4:
const kullanici = { isim: "Mehmet", yas:35 };
const adres = { sehir: "Istanbul", semt:"Bakirkoy"};

const birlesmisObje = { ...kullanici, ...adres };
console.log(birlesmisObje);