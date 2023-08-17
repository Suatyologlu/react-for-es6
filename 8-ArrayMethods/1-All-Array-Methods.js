// Array Methods (Dizi Metodları)

/* .find() Dizide bir eleman bulmaya yarar. Eleman bulunduğu anda arama işlemi durdurur ve bulunan elemanı döndürür. 
Aynı koşulları sağlayan başka bir eleman olması durumunda ilk bulunan eleman döndürülür.*/

// .some() Dizide en az bir elemanın, girilen koşulu sağlayıp sağlamadığıyla ilgili true/false döndürür.

// .every() Dizideki tüm elemanların girili koşulu sağlayıp sağlamadığıyla ilgili true/false döndürür.

const urunler = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    { id: 3, name: "Silgi", fiyat: 2 },
    { id: 4, name: "Kalemtraş", fiyat: 7 },
];

// .find() 
console.log(
    "Find: ", urunler.find((urun) => urun.fiyat > 5)
)
// .some()
console.log(
    "Some: ", urunler.find((urun) => urun.fiyat <= 2)
)
// .every()
console.log(
    "Every: ", urunler.find((urun) => urun.fiyat > 2)
)