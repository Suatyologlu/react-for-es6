// Shorthand Property Names (Kısayol Obje Anahtarı İsimleri)

const isim = "Mehmet";
const yas = 35;

// { isim: "Mehmet", yas:35 }

const kullanici_objesi = {isim, yas};
 
console.log(kullanici_objesi);

// React Örneğin de Obje Kullanımı

function sayac ({ baslangicDegeri, adim}) {
    const [sayac, setSayac] = useCounter({baslangicDegeri, adim})

    return <button onClick={setSayac}>{sayac}</button>
}

