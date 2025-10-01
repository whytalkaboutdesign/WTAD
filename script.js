// Configuration Object
const CONFIG = {
  menu: {
    desktop: {
      textSizeMin: "1.28rem",
      textSizeVw: "1.28vw",
      textSizeMax: "1.28rem",
    },
    mobile: {
      textSizeMin: "1.122rem",
      textSizeVw: "4.07vw",
      textSizeMax: "1.738rem",
    },
  },
  buttons: {
    desktop: {
      paddingVerticalMin: "0.19rem",
      paddingVerticalVw: "0.32vw",
      paddingVerticalMax: "0.32rem",
      paddingHorizontalMin: "0.54rem",
      paddingHorizontalVw: "0.96vw",
      paddingHorizontalMax: "0.77rem",
    },
    mobile: {
      paddingVerticalMin: "0.165rem",
      paddingVerticalVw: "0.286vw",
      paddingVerticalMax: "0.286rem",
      paddingHorizontalMin: "0.473rem",
      paddingHorizontalVw: "0.847vw",
      paddingHorizontalMax: "0.682rem",
    },
  },
  colors: {
    buttonBackground: "#d4d4d4",
    buttonText: "#ffffff",
    panelBackground: "#d4d4d4",
    panelText: "#000000",
    panelLabel: "#a3a3a3",
  },
  panel: {
    width: "90vw",
    maxWidth: "900px",
    maxHeight: "80vh",
    borderRadius: "8rem",
    coverHeight: "230px",
    coverImageMargin: "0.7rem",
    coverImageBorderRadius: "1rem",
    contentPaddingHorizontal: "3rem",
    contentPaddingVertical: "2rem",
    coverImageBrightness: "1.15",
    mobile: {
      width: "95vw",
      heightOffset: "10rem",
      borderRadius: "2.07rem",
      coverHeight: "150px",
      coverImageBorderRadius: "1.5rem",
      contentPaddingHorizontal: "1.5rem",
      contentPaddingVertical: "1.5rem",
    },
  },
  animation: {
    fadeInDuration: "0.4s",
    fadeInDelay: "0.1s",
    panelTransition: "0.6s",
  },
  margins: {
    desktop: "1rem",
    mobile: "0.5rem",
  },
}

// Panel Data
const panelData = {
  articles: {
    label: "Article 1",
    title: "Establishment.",
    content: [
      "Eccoci al commento assolutamente non richiesto della terza edizione dei Design Talks: quella che, a nostro avviso, rivela inequivocabilmente l'esistenza di un establishment. Gli ospiti sono più o meno sempre gli stessi, più o meno mascherati.",
      "Gli attori principali: Studio Mistaker già organizzatore e promotore, nella persona di Martina Tariciotti, ospite e moderatrice, insieme a Stefano Cipolla, anche lui tra gli organizzatori, ultimamente impegnato con Grafica Magazine (nei primi 5 numeri, tra gli altri, compaiono Studio Mistakers, La Tigre e Francesca Pignataro, che abbiamo incontrato lungo questa edizione — fateci sapere se ci siamo persi qualcuno tra i presenti).",
      "Cipolla resta un conducente capace: le sue aperture e i suoi interventi funzionano, intrattiene, ricorda Rauch… insomma, non al primo rodeo. Forse, e diciamo forse, varrebbe la pena prevedere un coinvolgimento del pubblico. Non lo sappiamo, eh! Ma l'idea di subire così passivamente un intervento ha il sapore televisivo. A questo punto, perché non un podcast?",
      "Terzo anno di fila e ancora le modalità di partecipazione ai panel non sono chiarissime. Roba da 2016: bigliettino della lotteria e braccialetto. Ma a noi piace così, un po' rough.",
      "⸻",
      'Si parte con la presentazione delle tesi, a detta di lady Mistaker, "meritevoli" (ammesso che ci sia stata una selezione). Quattro scuole romane (le stesse dello scorso anno) presentano i loro lavori: uno dei criteri era sicuramente che i relatori sarebbero poi apparsi nell\'ultimo panel. Dionigi Mattia Gagliardi per NABA, Matteo Modena per IED, Emanuele Cappelli per RUFA. Li ritroveremo più tardi, rispettivamente nelle vesti di Numero Cromatico, We meet Brands e Cappelli Design. Tre piccioni con una fava? No, establishment.',
      "Le tesi sono degne dei loro relatori: egoriferite. Si parte dal territorio come se bastassero un paio di interviste a definirlo, e si arriva a parlare di tabù sessuali — in un modo raccapricciante, perché si possono dire tante cose sul sesso, ma non che nel 2025 sia un tabù. Forse un tema ancora stigmatizzato, ma da qui a tabù ce ne passa. Comprendiamo la questione del designer trasversale e del design transdisciplinare, però il trend di fare i sociologi e gli antropologi ha un po' stufato - è una cosa che non tutti si possono permettere in sostanza. Senza contare che temi del genere richiederebbero bibliografie immense, che avremmo letto molto volentieri.",
      "Martina Tariciotti conclude dicendo che questo passaggio permette di intuire le inclinazioni delle diverse scuole. Verissimo, aggiungeremmo anche lo stato di salute: ancora una volta abbiamo notato quanto queste scuole risultino scollate dalla realtà, in preda a manie di protagonismo e a un amore romantico per i prodotti editoriali belli (e facili) da fotografare.",
      "In generale, i ragazzi si sono cimentati in presentazioni più o meno noiose, da cui traspariva soltanto la voglia di stabilire la propria presenza sul palco. Voto: 5. Forse servirebbe un criterio qualitativo, non solo un invito a priori.",
      "⸻",
      'Durante le tesi andava in scena anche il panel "Visual Festivals". Purtroppo eravamo sulle tesi. Quello che ci chiediamo è: è possibile che a Roma ci sia una sola giornata dedicata al design della comunicazione visiva (già solo su questo ci sarebbe da discutere per anni) e che si abbia la brillante idea di piazzare due dei quattro panel nello stesso momento? Voto: sconcertante.',
      "⸻",
      "Il pomeriggio porta sul palco Atelier Tatanka, Francesca Pignataro ed Enrico Gisana. Uno scroll collettivo dei vari portfolio, più o meno animati.",
      'Nota positiva: Francesca, che ha davvero qualcosa da dire. Si perde, poi ritorna, poi si perde di nuovo, ma solo per paura che i tempi "televisivi" la rendano noiosa. In definitiva: vorremmo conoscerla.',
      "Nota negativa: Gisana. Per carità, persona squisita; produce tantissimo, si dedica alla didattica, va ad Amsterdam e non fuma canne (x3). Ma il momento più alto del portfolio è stato ringraziare Cipolla per l'invito, con tanto di mail proiettata in presentazione.",
      'Poi arrivano La Tigre, che forse da oggi ricorderemo come tigrotti. Meravigliosi, per fortuna. Tengono banco, raccontano i progetti con dinamismo: progettisti con la "P" maiuscola. D\'altronde, in AGI non ci si entra per caso.',
      "Alla fine Cipolla chiede se ci siano domande dal pubblico… ahahah. Ovviamente no: a lui non sembra neanche venire in mente che qualcun altro, oltre a lui e al suo entourage, possa unire dei puntini, formulare un pensiero e magari fare una domanda. Sia mai!",
      'E a proposito di puntini: quando Cipolla dice "collegare i puntini" o "quello che cerchiamo di dare sono delle coordinate", e Jacopo Undari nomina Alessio D\'Elena (ospite lo scorso anno), tutto si schiarisce. I Design Talks non sono una conversazione sul design: sono dei designer che parlano. Tutto qui. Un evento autocelebrativo e di posizionamento, per gli organizzatori, per gli organizzatori mascherati da ospiti e per tutti gli altri che indistintamente chiameremo gruppi. Conoscersi e riconoscersi: è notte nel villaggio, che si sveglino i lupi!',
      "Voto: 6+, merito degli ospiti.",
      "⸻",
      'Arriviamo all\'ultimo panel, chiacchierata tutta romana, moderata da Valerio Di Mario (ex-Mistakerino, ospite lo scorso anno, ora moderatore). Promette e mantiene: "Vado a braccio". E infatti è finita a tarallucci e vino: i taralli non li abbiamo visti, il vino sì.',
      'Matteo Modena dichiara: "siamo degli outsider". Da un palco. Strano modo di essere outsider. L\'unica cosa "out" era il suo mocassino da barca a fine settembre a Testaccio. Ma non è il mocassino il problema: il dresscode era da montagna, sembrava un raduno di guide alpine, tripudio di Salomon, CMP, La Sportiva e Mammut.',
      'Per fortuna ci hanno pensato Martina Tariciotti e Francesca Pignataro. La prima ribatte lucida con un convinto "no" alla questione degli outsider. La seconda aborre il termine: chi decide chi sta da una parte e chi dall\'altra? E soprattutto: chi ha tracciato questa linea? — Vi preghiamo, fatele scrivere qualcosa!',
      'Poi Dionigi accenna al ruolo dei docenti (molti su quel palco lo erano). A quel punto abbiamo spento il cervello: oltre a non sentire bene acusticamente, non ci sentivamo bene neanche fisicamente. Il ruolo dei docenti, per come lo intendiamo, è silenzioso, di affiancamento, di maestranza. Qui, invece, sembrava che l\'unica cosa da insegnare fosse come stare su un palco. Se oggi possiamo riconoscere il merito di avere "le spalle coperte" — per percorso formativo, professione ed esperienza comprovata — non sappiamo se chi verrà dopo, emulandovi, avrà la stessa fortuna o sarà altrettanto preparato.',
      "Voto: 5. Bella intuizione, meno l'esecuzione.",
      "⸻",
      "In conclusione, ciò a cui abbiamo assistito non è stato altro che un esperimento onanistico in pubblico (Dogging), con gli spettatori (molti studenti, come hanno fatto notare chiedendo un'alzata di mani) ridotti a voyeur.",
      "Detto ciò, ci teniamo anche noi a ringraziare David Aprea e REF che hanno permesso questa terza edizione. Ci vediamo nel 2026.",
      "⸻",
      "Il tool è di Giuseppe Laezza, probabile ospite del 2026.",
      "⸻",
    ],
  },
  about: {
    label: "Manifesto",
    title: "Establishment.",
    content: [
      "Eccoci al commento assolutamente non richiesto della terza edizione dei Design Talks: quella che, a nostro avviso, rivela inequivocabilmente l'esistenza di un establishment. Gli ospiti sono più o meno sempre gli stessi, più o meno mascherati.",
      "Gli attori principali: Studio Mistaker già organizzatore e promotore, nella persona di Martina Tariciotti, ospite e moderatrice, insieme a Stefano Cipolla, anche lui tra gli organizzatori, ultimamente impegnato con Grafica Magazine (che è media partner dell'evento).",
    ],
  },
}

// State Management
let currentPanel = null

// DOM Elements
const panel = document.getElementById("panel")
const topMenu = document.getElementById("topMenu")
const bottomMenu = document.getElementById("bottomMenu")
const panelLabel = document.getElementById("panelLabel")
const panelTitle = document.getElementById("panelTitle")
const panelText = document.getElementById("panelText")
const panelCoverVideo = document.getElementById("panelCoverVideo")
const panelCoverImage = document.getElementById("panelCoverImage")

// Functions
function openPanel(type) {
  if (currentPanel === type) {
    closePanel()
    return
  }

  currentPanel = type
  const data = panelData[type]

  // Update panel content
  panelLabel.textContent = data.label
  panelTitle.textContent = data.title

  // Clear and populate text content
  panelText.innerHTML = ""
  data.content.forEach((paragraph) => {
    const p = document.createElement("p")
    p.textContent = paragraph
    panelText.appendChild(p)
  })

  if (type === "articles") {
    panelCoverVideo.style.display = "block"
    panelCoverImage.style.display = "none"
    panelCoverVideo.play() // Ensure video plays
  } else {
    panelCoverVideo.style.display = "none"
    panelCoverImage.style.display = "block"
    panelCoverVideo.pause() // Pause video when not visible
  }

  // Show panel and transform menus
  panel.classList.add("active")
  topMenu.classList.add("panel-open")
  bottomMenu.classList.add("panel-open")

  console.log("[v0] Panel opened:", type)
}

function closePanel() {
  currentPanel = null
  panel.classList.remove("active")
  topMenu.classList.remove("panel-open")
  bottomMenu.classList.remove("panel-open")
  console.log("[v0] Panel closed")
}

function openEmail() {
  window.location.href = "mailto:whytalkaboutdesign@proton.me?subject=Whytalkaboutdesign?"
}

// Log configuration on load
console.log("[v0] WTAD Mobile Config:", {
  menuMobile: CONFIG.menu.mobile,
  buttonsMobile: CONFIG.buttons.mobile,
  panelMobile: CONFIG.panel.mobile,
  marginsMobile: CONFIG.margins.mobile,
  calculatedPanelHeight: `calc(100vh - ${CONFIG.panel.mobile.heightOffset} - ${CONFIG.margins.mobile} * 2)`,
})
