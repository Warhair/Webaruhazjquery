
export const OBJEKTUMLISTA=[
    {nev:"I7",fajta: "processor", ar: 19000, kep: "Kepek/i7.jfif"},
    {nev:"RISEN", fajta: "processor", ar: 10000, kep: "Kepek/rog.jfif"},
    {nev: "ASUS", fajta: "videokartya", ar: 19500, kep: "Kepek/asus.jpg"},
    {nev: "NVDIA", fajta: "videokartya", ar: 20000, kep: "Kepek/nvidia.jpg"},
]




function RendezesArSzerint(lista){
    lista.sort(function(a,b){
        return a.ar-b.ar;
    })
}
function RendezesNevSzerint(lista,kulcs) {
    lista.sort(function (a,b){
        let ertek=1;
        if (a[kulcs].toUpperCase()<b[kulcs].toUpperCase()){
            ertek=-1
        }
        return ertek
    })
}
  export  function Rendezes(lista,kulcs){
            if (typeof lista[0][kulcs]==="number"){
                RendezesKorSzerint(lista,kulcs)
            }
            else {
                RendezesNevSzerint(lista,kulcs)
            }
    }
   export function Rendezes2(lista,kulcs) {
        lista.sort(function(a,b){
            return a[kulcs].localeCompare(b[kulcs])
        })
    }






export function Szures(lista,kulcs,szuresfeltetel){
    const RESULT =lista.filter(function(a){
        return a[kulcs].includes(szuresfeltetel)
    });
    return RESULT
}