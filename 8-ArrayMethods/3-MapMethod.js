// Array Methods (Dizi Metodları)

// .map() Verilen dizi elemanlarına, girilen callback fonksiyonu uygular ve elde edilen sonuçlarla yeni bir dizi oluşturur.

const urunler = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    { id: 3, name: "Silgi", fiyat: 2 },
    { id: 4, name: "Kalemtraş", fiyat: 7 },
];

urunler.map((urun)=> `${urun.name} fiyatı ${urun.fiyat} liradır.`);

// Bu şekil de clean koda dönüştürülebilir
/*
const urunolusturucu = (urun)=> `${urun.name} fiyatı ${urun.fiyat} liradır.`;
console.log(urunler.map(urunolusturucu));
*/

/*["Kalem fiyatı 5 liradır.", 
"Defter fiyatı 10 liradır.", 
"Silgi fiyatı 2 liradır.", 
"Kalemtraş fiyatı 7 liradır."]*/

// React İçinde Kullanımı

function UrunGoster({ urunListesi }) {
    return urunListesi.map((urun,index) => <li key ={index}>{urun.name} fiyatı {urun.fiyat} liradır.</li>)
}

  