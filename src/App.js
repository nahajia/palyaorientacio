import { useState,useEffect } from 'react';
import './App.css';

const tomb=[
  { "sorszam": 1, "kijelentes": "Kéziszerszámok használata.", "tipus": "kezugyesseg" },
  { "sorszam": 2, "kijelentes": "A visszajáró pénz gyors kiszámolása.", "tipus": "matematikai" },
  { "sorszam": 3, "kijelentes": "A munkavégzés során felmerülő problémák önálló megoldása.", "tipus": "problemamegoldo" },
  { "sorszam": 4, "kijelentes": "A konfliktusok ellenére együtt dolgozni valakivel.", "tipus": "egyuttmukodo" },
  { "sorszam": 5, "kijelentes": "Ügyfeleket tájékoztatni.", "tipus": "kommunikacios" },
  { "sorszam": 6, "kijelentes": "Egész nap kétkezi munkát végezni.", "tipus": "kezugyesseg" },
  { "sorszam": 7, "kijelentes": "Adatsorok összeadása fejben.", "tipus": "matematikai" },
  { "sorszam": 8, "kijelentes": "Rájönni egy összetett feladat legegyszerűbb megoldására.", "tipus": "problemamegoldo" },
  { "sorszam": 9, "kijelentes": "Közösségi tevékenységben való aktív részvétel.", "tipus": "egyuttmukodo" },
  { "sorszam": 10, "kijelentes": "Bonyolult gondolatok elmagyarázása szóban.", "tipus": "kommunikacios" },
  { "sorszam": 11, "kijelentes": "Cérna befűzése tűbe.", "tipus": "kezugyesseg" },
  { "sorszam": 12, "kijelentes": "Családi költségvetés - bevételek, kiadások - tervezése.", "tipus": "matematikai" },
  { "sorszam": 13, "kijelentes": "Logikai fejtörők megoldása.", "tipus": "problemamegoldo" },
  { "sorszam": 14, "kijelentes": "Csoportban való munkavégzés/ együttműködés a feladatok megoldásában.", "tipus": "egyuttmukodo" },
  { "sorszam": 15, "kijelentes": "Hallott szöveg gyors felfogása.", "tipus": "kommunikacios" },
  { "sorszam": 16, "kijelentes": "Célba dobni.", "tipus": "kezugyesseg" },
  { "sorszam": 17, "kijelentes": "Adatokkal, számokkal való munkavégzés.", "tipus": "matematikai" },
  { "sorszam": 18, "kijelentes": "Különböző megoldások kigondolása egy feladathoz.", "tipus": "problemamegoldo" },
  { "sorszam": 19, "kijelentes": "A közös hang megtalálása munkatársaimmal.", "tipus": "egyuttmukodo" },
  { "sorszam": 20, "kijelentes": "Népes hallgatóság előtt beszélni.", "tipus": "kommunikacios" },
  { "sorszam": 21, "kijelentes": "Csipesszel apró tárgyak megfogása.", "tipus": "kezugyesseg" },
  { "sorszam": 22, "kijelentes": "Utazás várható időtartamának kiszámítása.", "tipus": "matematikai" },
  { "sorszam": 23, "kijelentes": "Problémák lényegének gyors felismerése.", "tipus": "problemamegoldo" },
  { "sorszam": 24, "kijelentes": "Konszenzus/egyetértés kialakítása kollégáimmal.", "tipus": "egyuttmukodo" },
  { "sorszam": 25, "kijelentes": "Gondolataimat írásban kifejteni.", "tipus": "kommunikacios" },
  { "sorszam": 26, "kijelentes": "Tárgyak elemeinek összecsavarozása.", "tipus": "kezugyesseg" },
  { "sorszam": 27, "kijelentes": "Matematikai feladványok kiszámítása.", "tipus": "matematikai" },
  { "sorszam": 28, "kijelentes": "Ugyanannak a problémának több szempont szerinti megközelítése.", "tipus": "problemamegoldo" },
  { "sorszam": 29, "kijelentes": "Jó munkahelyi légkör kialakítása.", "tipus": "egyuttmukodo" },
  { "sorszam": 30, "kijelentes": "Mondatok tiszta, érthető kiejtése.", "tipus": "kommunikacios" }
  ]




function App() {
  const [tombKevert,SetTombKevert]=useState([])
  useEffect(()=>{
      let tombSeged=[...tomb]
      for (let i = 0; i < 100; i++) {
          let random1=Math.floor(Math.random()*tombSeged.length)
          let random2=Math.floor(Math.random()*tombSeged.length)
          let csere=tombSeged[random1]
          tombSeged[random1]=tombSeged[random2]
          tombSeged[random2]=csere
     }
     //alert(JSON.stringify(tombSeged))
     SetTombKevert(tombSeged)
     
  },[])
  return (
    <div className="App">
      <h1>Pályaorientáció</h1>
      <h2>Ha pályaválasztás előtt állsz, érdemes
      tisztázni, hogy milyen képességekkel rendelkezel. A képességek erősen befolyásolják, hogy
      pályádon, egy foglalkozás gyakorlásánál mennyire leszel sikeres. Az alábbi kérdőív ebben jelenthet
      segítséget: kitöltésével tájékozódhatsz a képességeidről, melyek jelentik az erősségeidet és melyek
      azok, amelyekben gyengébb vagy.
      </h2>
      <div>
          {tombKevert.map((elem,index)=>(
            <div>{elem.kijelentes}</div>
          ))}
      </div>

    </div>
  );
}

export default App;
