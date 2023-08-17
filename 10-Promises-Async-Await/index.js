//Promises and Async/Await

const veriGetir = new Promise((basarili, basarisiz) => {
    // islemler yap, veriyi ara, bul, getir
    if (veriBasariliBirSekildeGeldiyse) {
      basarili(getirilenVeri);
    } else {
      basarisiz("veriyi getiremedik");
    }
  });

  //
  const veri = veriGetir
  .then((veri) => console.log("Basarili bir sekilde gelen veri:", veri))
  .catch((hata) => console.log("Hatadan gelen mesaj:", hata));
