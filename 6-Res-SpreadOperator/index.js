// Rest/Spread Operator (Toparlama/Yayma Operatörü)

let kullanici = {isim: "Mehmet", Yas:35, sehir:"Istanbul"};

//kullanici.sehir = "Ankara"; //Kullanici daki sehiri Ankara olarak değiştirir
kullanici = { ...kullanici, sehir:"Ankara"}; //Spread Operatoru Kullanarak Yapılışı
console.log(kullanici); 


