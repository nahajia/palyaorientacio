
import "./App.css";

function Ertekeles({tipus,szam}) {
    const ertekTomb=[
//kézügyesség
        {
            "sorszam":1,
            "tipus":"kézügyesség",
            "ertek":"átlag alatti",
            "jellemzo":"Kézügyessége az átlagosnál gyengébb, a kéz és ujjmozdulatokat kivitelezésében kevésbé gyors és pontos. Az apró tárgyakkal végzendő munka kevésbé megfelelő az Ön számára."
        },
        {
            "sorszam":2,
            "tipus":"kézügyesség",
            "ertek":"átlagos",
            "jellemzo":"A kezek használatát igénylő munkavégzés általában nem okoz gondot, de a különösen precíz kéz - és ujjmozdulatok kivitelezésében nehézségei lehetnek."
        },
        {
            "sorszam":3,
            "tipus":"kézügyesség",
            "ertek":"átlag feletti",
            "jellemzo":"Az átlagosnál jobb a kézügyessége. Nem okoz számára nehézséget, ha a kezeinek, ujjainak használatával kell munkát végeznie, képes a gyors- és pontos kéz- és ujjmozdulatok kivitelezésére."
        },
//matematikai
        {
            "sorszam":4,
            "tipus":"matematikai",
            "ertek":"átlag alatti",
            "jellemzo":"Matematikai képessége az átlagosnál gyengébb. A számtani műveletekkel, matematikai problémák megoldásának képességét igénylő munkára kevésbé alkalmas."
        },
        {
            "sorszam":5,
            "tipus":"matematikai",
            "ertek":"átlagos",
            "jellemzo":"Matematikai képessége átlagos szintű. Általában elboldogul a számtani műveletek elvégzését igénylő feladatokkal, de a nehezebb matematikai problémák megoldása már gondot jelenthet."
        },
        {
            "sorszam":6,
            "tipus":"matematikai",
            "ertek":"átlag feletti",
            "jellemzo":"Matematikai képessége az átlagosnál magasabb szintű. A számtani műveletekben való jártasságot, vagy a matematikai problémák megoldását igénylő feladatokat jól el tudja látni."
        },
//problémamegoldó
        {
            "sorszam":7,
            "tipus":"problémamegoldó",
            "ertek":"átlag alatti",
            "jellemzo":"Problémamegoldó képessége az átlagosnál gyengébb. A szellemi erőfeszítést, gondolkodást igénylő foglalkozások kevésbé kedvezőek számára."
        },
        {
            "sorszam":8,
            "tipus":"problémamegoldó",
            "ertek":"átlagos",
            "jellemzo":"Problémamegoldó képessége átlagos. Az átlagos szintű szellemi erőfeszítést igénylő feladatokat általában el tudja végezni, de a különösen nehéz, összetett problémák megértésében és megoldásában kevésbé hatékony."
        },
        {
            "sorszam":9,
            "tipus":"problémamegoldó",
            "ertek":"átlag feletti",
            "jellemzo":"Problémamegoldó képessége magas szintű. A szellemi erőfeszítést, gondolkodást igénylő feladatokat jól átlátja, megoldásukban hatékony."
        },
//együttműködő
        {
            "sorszam":10,
            "tipus":"együttműködő",
            "ertek":"átlag alatti",
            "jellemzo":"Együttműködő képessége az átlagosnál gyengébb. A feladatok megosztásán, a társakkal való együttműködésen alapuló munka kevésbé megfelelő számára. Az önálló tevékenység előnyösebb számára."
        },
        {
            "sorszam":11,
            "tipus":"együttműködő",
            "ertek":"átlagos",
            "jellemzo":"Együttműködő képessége átlagos. Általában nem okoz problémát, ha másokkal közösen kell dolgoznia, de a társakkal való tökéletes összhangot, együttműködést igénylő tevékenység kevésbé megfelelő számára."
        },
        {
            "sorszam":12,
            "tipus":"együttműködő",
            "ertek":"átlag feletti",
            "jellemzo":"Együttműködő képessége az átlagosnál magasabb szintű. Képes a cél érdekében a másik emberrel való harmonikus együttműködésre. Kedvezőek számára a társakkal való közös tevékenységen, a feladatok megosztásán alapuló munkák."
        },
//kommunikációs
        {
            "sorszam":13,
            "tipus":"kommunikációs",
            "ertek":"átlag alatti",
            "jellemzo":"Kommunikációs képessége az átlagosnál gyengébb. Kevésbé jól fejezi ki magát, kedvezőtlenek a számára az olyan munkák, amelyek a másokkal való szóbeli, vagy írásbeli kommunikációt, esetleg az emberek csoportja előtti beszédet igénylik."
        },
        {
            "sorszam":14,
            "tipus":"kommunikációs",
            "ertek":"átlagos",
            "jellemzo":"Kommunikációs képessége átlagos szintű. Nem okoz gondot számára általában a szóbeli, vagy írásbeli megnyilatkozás. A kommunikáción alapuló, nagyfokú kifejezőképességet igénylő foglalkozások kevésbé megfelelőek számára."
        },
        {
            "sorszam":15,
            "tipus":"kommunikációs",
            "ertek":"átlag feletti",
            "jellemzo":"Kommunikációs képessége az átlagosnál magasabb szintű. Gondolatait képes árnyaltan megfogalmazni, jó szókinccsel rendelkezik. Nem jelent nehézséget, ha emberek előtt kell beszélnie."
        },
    ]

  

  return (
    <div style={{marginTop:20}}>
    <div style={{fontWeight:"bold"}}>
        { szam<=12 ?    ertekTomb[(tipus-1)*3].ertek : 
            szam<=24?   ertekTomb[(tipus-1)*3+1].ertek :
                        ertekTomb[(tipus-1)*3+2].ertek
        }
        
    </div>
    <div style={{fontStyle:"italic"}}>
        { szam<=12 ?    ertekTomb[(tipus-1)*3].jellemzo : 
            szam<=24?   ertekTomb[(tipus-1)*3+1].jellemzo :
                        ertekTomb[(tipus-1)*3+2].jellemzo
        }
      
    </div>
    
    </div>
  );
}

export default Ertekeles;


