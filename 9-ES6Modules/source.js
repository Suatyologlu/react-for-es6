export let isim = "Mehmet";
export const kullanici = {isim, yas:35};
export function merhaba(isim) {
    return `Merhaba, ${isim}`;
}

//export {isim, kullanici, merhaba};

// Default Exports & Imports (varsayılan içe/dışa aktarmalar)

export { merhaba as default, isim, kullanici }; // merhaba varsayılan, diğerleri isimli dışa aktarma

