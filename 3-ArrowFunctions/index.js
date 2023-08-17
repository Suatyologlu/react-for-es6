// Arrow Functions (Oklu Fonksiyon İfadeleri)

// Normal Fonksiyon :
console.log(topla(3,5));

function topla(sayi1,sayi2) {
    return sayi1 + sayi2;
}

// Oklu Fonksiyon İfadesi :
console.log(topla(3,5))

const topla = (sayi1,sayi2) => {
    return sayi1 +sayi2
};

/* Fonksiyon içinde herhangi başka bir ifade olmaksızın tek bir ifade döndürülüyorsa 
implicit return özelliği kullanılabilir: */

const topla =(sayi1, sayi2) => sayi1 + sayi2;

console.log(topla(3,5));