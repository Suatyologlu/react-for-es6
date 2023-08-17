//Parameter Defaults (Varsayılan parametre değerleri )

function topla(sayi1 = 0, sayi2 = 0) {
    return sayi1 + sayi2; // 3 + 0
}

console.log(topla());

//Bir React örneği:

const STATE_BASLANGICI = { yukleniyor: false, yazilar: [] };

const reducer = (state = STATE_BASLANGICI, action) => {
  // burada state değerine başlangıç olarak STATE_BASLANGICI değeri atadık.
  // reducer detayları
  return state;
};