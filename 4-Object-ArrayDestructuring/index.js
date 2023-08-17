// Object / Array Destructuring
// obje ve dizilerin parçalarına bölünüp değişkenlere atanması

//const kullanici = { isim: "Mehmet", yas: 35 };

//const { isim, yas } = kullanici; 
//console.log(isim); 

// Rest Operator (Rest/Spread)  örn: *...digerleri*
const kullanici = {
  isim: "Mehmet",
  yas: 35,
  sehir: "İstanbul",
};

const { isim, ...digerleri } = kullanici; // (...) rest/spread operatörüdür.

console.log(isim); // "Mehmet"
console.log(digerleri); // { yas: 35, sehir: "İstanbul" }

/*Dizilerde destructuring yaparken ise elemanların sırası önemlidir. 
İlk eleman, ilk girilen değişkene atanır.*/

//const sayilar = [1,2,3,4,5];
//const [bir, iki, uç, dort, bes] = sayilar;


const sayilar = [1, 2, 3, 4, 5];
const [bir, ...kalanlar] = sayilar; // Burada ilk elemanı bir değişkenine atadık. Kalanlar ise kalanlar değişkenine atandı.

console.log({ bir, kalanlar }); // {bir: 1, kalanlar: [2,3,4,5] }

