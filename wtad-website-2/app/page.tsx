"use client"

import { useState } from "react"

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
    coverBorder: "0px",
    coverImageMargin: "0.7rem", // 3mm margin
    coverImageBorderRadius: "1rem", // Desktop image roundness
    contentPaddingHorizontal: "3rem",
    contentPaddingVertical: "2rem",
    coverImageBrightness: "1.15",
    mobile: {
      width: "95vw",
      heightOffset: "10rem",
      borderRadius: "2.07rem",
      coverHeight: "150px",
      coverImageBorderRadius: "1.5rem", // Mobile image roundness
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

if (typeof window !== "undefined") {
  console.log("[v0] WTAD Mobile Config:", {
    menuMobile: CONFIG.menu.mobile,
    buttonsMobile: CONFIG.buttons.mobile,
    panelMobile: CONFIG.panel.mobile,
    marginsMobile: CONFIG.margins.mobile,
    calculatedPanelHeight: `calc(100vh - ${CONFIG.panel.mobile.heightOffset} - ${CONFIG.margins.mobile} * 2)`,
  })
}

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

export default function Page() {
  const [currentPanel, setCurrentPanel] = useState<"articles" | "about" | null>(null)

  const openPanel = (type: "articles" | "about") => {
    if (currentPanel === type) {
      setCurrentPanel(null)
      console.log("[v0] Panel closed")
    } else {
      setCurrentPanel(type)
      console.log("[v0] Panel opened:", type)
    }
  }

  const closePanel = () => {
    setCurrentPanel(null)
  }

  const openEmail = () => {
    window.location.href = "mailto:info@placeholder.com?subject=Whytalkaboutdesign?"
  }

  const data = currentPanel ? panelData[currentPanel] : null

  return (
    <div className="wtad-container">
      <video autoPlay loop muted playsInline className="wtad-video-background">
        <source src="/background-video.mp4" type="video/mp4" />
      </video>

      <nav className={`wtad-menu wtad-menu-top ${currentPanel ? "panel-open" : ""}`}>
        <button className="wtad-menu-button wtad-fade-in" style={{ animationDelay: "0s" }} onClick={closePanel}>
          WTAD
        </button>
        <button
          className="wtad-menu-button wtad-fade-in"
          style={{ animationDelay: CONFIG.animation.fadeInDelay }}
          onClick={openEmail}
        >
          Whytalkaboutdesign
        </button>
      </nav>

      <div className={`wtad-panel ${currentPanel ? "active" : ""}`}>
        {data && (
          <>
            <div className="wtad-panel-cover">
              <img
                src="/abstract-artistic-text-pattern-establishment-typog.jpg"
                alt="Cover"
                className="wtad-panel-cover-image"
              />
            </div>

            <div className="wtad-panel-content">
              <div className="wtad-panel-header">
                <span className="wtad-panel-label">{data.label}</span>
                <span className="wtad-panel-date">30 set 2025</span>
              </div>

              <h1 className="wtad-panel-title">{data.title}</h1>

              <div className="wtad-panel-text">
                {data.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <nav className={`wtad-menu wtad-menu-bottom ${currentPanel ? "panel-open" : ""}`}>
        <button
          className="wtad-menu-button wtad-fade-in"
          style={{ animationDelay: `calc(2 * ${CONFIG.animation.fadeInDelay})` }}
          onClick={() => openPanel("articles")}
        >
          Articles
        </button>
        <button
          className="wtad-menu-button wtad-fade-in"
          style={{ animationDelay: `calc(3 * ${CONFIG.animation.fadeInDelay})` }}
          onClick={() => openPanel("about")}
        >
          Manifesto
        </button>
      </nav>

      <style jsx>{`
        .wtad-container {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .wtad-video-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          z-index: 0;
        }

        .wtad-menu {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          z-index: 10;
          transition: transform ${CONFIG.animation.panelTransition} cubic-bezier(0.4, 0, 0.2, 1);
        }

        .wtad-menu-top {
          position: absolute;
          top: 50%;
          transform: translateY(-100%);
        }

        .wtad-menu-top.panel-open {
          transform: translateY(calc(-50vh + ${CONFIG.margins.desktop}));
        }

        .wtad-menu-bottom {
          position: absolute;
          top: 50%;
          transform: translateY(0);
        }

        .wtad-menu-bottom.panel-open {
          transform: translateY(calc(50vh - 100% - ${CONFIG.margins.desktop}));
        }

        .wtad-menu-button {
          font-family: var(--font-inter), sans-serif;
          font-weight: 900;
          font-size: clamp(${CONFIG.menu.desktop.textSizeMin}, ${CONFIG.menu.desktop.textSizeVw}, ${CONFIG.menu.desktop.textSizeMax});
          letter-spacing: -0.05em;
          background-color: ${CONFIG.colors.buttonBackground};
          color: ${CONFIG.colors.buttonText};
          border: none;
          padding: clamp(${CONFIG.buttons.desktop.paddingVerticalMin}, ${CONFIG.buttons.desktop.paddingVerticalVw}, ${CONFIG.buttons.desktop.paddingVerticalMax}) clamp(${CONFIG.buttons.desktop.paddingHorizontalMin}, ${CONFIG.buttons.desktop.paddingHorizontalVw}, ${CONFIG.buttons.desktop.paddingHorizontalMax});
          border-radius: 9999px;
          cursor: pointer;
          white-space: nowrap;
        }

        .wtad-menu-button:active {
          transform: scale(0.98);
        }

        .wtad-fade-in {
          opacity: 0;
          animation: fadeIn ${CONFIG.animation.fadeInDuration} ease-in forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .wtad-panel {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: ${CONFIG.panel.width};
          max-width: ${CONFIG.panel.maxWidth};
          max-height: ${CONFIG.panel.maxHeight};
          background-color: ${CONFIG.colors.panelBackground};
          border-radius: ${CONFIG.panel.borderRadius};
          opacity: 0;
          pointer-events: none;
          transition: all ${CONFIG.animation.panelTransition} cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          z-index: 5;
        }

        .wtad-panel.active {
          opacity: 1;
          transform: translateY(-50%) scale(1);
          pointer-events: auto;
        }

        .wtad-panel-cover {
          width: 100%;
          height: ${CONFIG.panel.coverHeight};
          flex-shrink: 0;
          background-color: ${CONFIG.colors.panelBackground};
          overflow: hidden;
          border: none;
          box-sizing: border-box;
          padding: ${CONFIG.panel.coverImageMargin};
        }

        .wtad-panel-cover-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(${CONFIG.panel.coverImageBrightness});
          border-radius: ${CONFIG.panel.coverImageBorderRadius};
        }

        .wtad-panel-content {
          flex: 1;
          overflow-y: auto;
          padding: ${CONFIG.panel.contentPaddingVertical} ${CONFIG.panel.contentPaddingHorizontal};
          background-color: ${CONFIG.colors.panelBackground};
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .wtad-panel-content::-webkit-scrollbar {
          display: none;
        }

        .wtad-panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .wtad-panel-label,
        .wtad-panel-date {
          font-size: 0.875rem;
          color: ${CONFIG.colors.panelLabel};
          font-weight: 900;
        }

        .wtad-panel-title {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          font-weight: 900;
          color: ${CONFIG.colors.panelText};
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .wtad-panel-text {
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 400;
          line-height: 1.6;
          color: ${CONFIG.colors.panelText};
          font-family: 'Times New Roman', Times, serif;
        }

        .wtad-panel-text p {
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .wtad-menu-button {
            font-size: clamp(${CONFIG.menu.mobile.textSizeMin}, ${CONFIG.menu.mobile.textSizeVw}, ${CONFIG.menu.mobile.textSizeMax});
            padding: clamp(${CONFIG.buttons.mobile.paddingVerticalMin}, ${CONFIG.buttons.mobile.paddingVerticalVw}, ${CONFIG.buttons.mobile.paddingVerticalMax}) clamp(${CONFIG.buttons.mobile.paddingHorizontalMin}, ${CONFIG.buttons.mobile.paddingHorizontalVw}, ${CONFIG.buttons.mobile.paddingHorizontalMax});
          }

          .wtad-menu-top.panel-open {
            transform: translateY(calc(-50vh + ${CONFIG.margins.mobile}));
          }

          .wtad-menu-bottom.panel-open {
            transform: translateY(calc(50vh - 100% - ${CONFIG.margins.mobile}));
          }

          .wtad-panel {
            width: ${CONFIG.panel.mobile.width};
            /* Dynamic height calculation to fill space between buttons */
            height: calc(100vh - ${CONFIG.panel.mobile.heightOffset} - ${CONFIG.margins.mobile} * 2);
            max-height: none;
            border-radius: ${CONFIG.panel.mobile.borderRadius};
            z-index: 8;
          }

          .wtad-panel-cover {
            height: ${CONFIG.panel.mobile.coverHeight};
            border: none;
            padding: ${CONFIG.panel.coverImageMargin};
          }

          .wtad-panel-content {
            padding: ${CONFIG.panel.mobile.contentPaddingVertical} ${CONFIG.panel.mobile.contentPaddingHorizontal};
          }

          .wtad-panel-cover-image {
            filter: brightness(${CONFIG.panel.coverImageBrightness});
            border-radius: ${CONFIG.panel.mobile.coverImageBorderRadius};
          }
        }
      `}</style>
    </div>
  )
}
