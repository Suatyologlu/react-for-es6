// Ternary Conditional Operators (Üç Değişkenli Koşul Operatörleri) 

kosul ? dogruysa : yanlıssa ;

if (kosul) {
    dogruysa
} else {
    yanlıssa
}

// Örnek 1 :

// const koprununDurumu = "acik";

// koprununDurumu === "acik";
// ? console.log("kopru acik");
// : koprununDurumu === "Kapali";
// ? console.log("kopru kapali")
// : console.log(koprununDurumu);

const deger = 1 ;

deger ? console.log("sayi gecerli") : console.log("sayi gecersiz");

// Degerler asagıdakiler gibi girilirse ternary olumsuz döndürür

// null
// NaN
// 0
// ""
// undefined