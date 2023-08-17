// Array Methods (Dizi Metodları)

// .filter() Verilen dizi elemanlarına, girilen callback fonksiyonu uygular, false döndüren sonuçları eler ve true döndüren sonuçlarla yeni bir dizi oluşturur.

const urunler = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    { id: 3, name: "Silgi", fiyat: 2 },
    { id: 4, name: "Kalemtraş", fiyat: 7 },
];


console.log(urunler.filter((urun) => urun.fiyat > 5));

/*
[{id: 3, name: "Defter", fiyat: 10}, 
{id: 4, name: "Kalemtraş", fiyat: 7}]
*/

// Ornek:  
console.log(
    urunler
    .filter((urun) => urun.fiyat > 5)
    .map((urun) => `${urun.name} fiyati 5'ten buyuktur.`)
);

//.filter() ve .map() her ikisi de yeni bir dizi döndürdüğünden, birbirine eklenerek tek satırda kullanılabilir.
/* 
    ["Defter fiyatı 5'ten buyuktur.",
     "Kalemtraş fiyatı 5'ten buyuktur."]
*/ 