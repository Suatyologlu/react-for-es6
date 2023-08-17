// Array Method (Dizi Metodları)
// .reduce() Bu fonksiyonun döndürdüğü sonuç her bir döngüde hatırlanır ve bir sonraki döndürülen sonuç bir öncekine eklenir.

const urunler = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    { id: 3, name: "Silgi", fiyat: 2 },
    { id: 4, name: "Kalemtraş", fiyat: 7 },
];

const toplamUrunFiyati = urunler.reduce((toplam,urun) => (toplam = toplam + urun.fiyat),0);

console.log ({toplamUrunFiyati});

// { toplamUrunFiyati: 24 }

const toplamString = urunler.reduce((isimler, urun) => isimler + " " + urun.name, "Ürün İsimleri:"); 

console.log(toplamString);
//  Urun isimlerini tek satırda yazar.
// "Ürün İsimleri: Kalem Defter Silgi Kalemtraş"

