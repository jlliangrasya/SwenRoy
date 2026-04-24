// ─────────────────────────────────────────────────────────────────────────────
//  Letters Archive
//
//  HOW TO USE:
//  ─ Each object you add to LETTERS unlocks the next envelope in order.
//  ─ The locked envelopes are filled in automatically — you don't need to add them.
//  ─ Just copy the template below, paste it at the end of the array, and fill it in.
//
//  TEMPLATE:
//  {
//    title: "Your Letter Title",
//    date:  "Month Day, Year",
//    content: `Your full letter text goes here.
//
//You can use multiple paragraphs like this.
//Each blank line becomes a new paragraph.`,
//
//    // Optional — add photos that appear at the bottom of the letter:
//    // images: [importedPhoto, anotherPhoto],
//  },
// ─────────────────────────────────────────────────────────────────────────────

// ── Import photos here, then reference them in the images field below ────────
import newhairImg from '../assets/newhair.jpg'
// import someOtherPhoto from '../assets/someOtherPhoto.jpg'
// ─────────────────────────────────────────────────────────────────────────────

export const LETTERS = [
  {
    title: "Yearning Boss Level!",
    date: "April 23, 2026",
    content: `Hello, Boky!

    Surprise! Surprise!
    Wala ka nag expect ani noh? Kaingon kag same content lang gihapon
    imo makita diri. Haha ako sad.

    Mao na guro ni boss level sa yearning phase, so sagdii lang ko.
    Ganahan na kayko mo chika nimo sa chat, musabay nimo sa chat.
    Pero dapat mulimit ko, I need to protect the covenant I have,
    the covenant and the promise WE HAVE with the Lord. Ky if
    ako-ako lang lagi, naah same cycle nasad ta ani Hahahahuhu.
    Hays, nag last pa gyud ka asking kung unsay naa sa cbp. Haynako
    boky. ka replyon na bya ko.

    Anyway, my heart is so happy to see nga nag cell ka.
    Tan-aw na lang ko nimos mga myday ani HAHAHAHA.

    Anyway, short update! na Ban mis Anthropic a.k.a. Claude.
    Hahaha naa Ban ang team account sa company, I don't know why pero
    daghan na ban dili ra amoa, nag clearing sila hahah ssooo
    No claude atm. Hays magamit nag ahung natutulog na utok.

    Mao rato!
    God Bless! Have a great day ahead!

    ~ Grace (no dear)
`,
  },
  {
    title: "CYA",
    date: "April 24, 2026",
    content: `Hello, Boky!

    Ngano wala ka sa CYA? I was looking for you.
    Nag expect ko naa ka ky ana paman ka nako nga "naa d i
    reg sa CYA" so nag expect ko muattend ka.

    Hays! Iflex unta nako ako new hair.
    Pakit-on nalang tika pic. 

    Anyway, nndota sa topic today.
    Ana si Kuya Sid, "nag save na daw siya for marriage before siya nagkauyab"
    Hahaha iya gipakita iya allocations sa iya bank, syempre gihide ang amount.

    Pero nndot jud.
    Tithing/Offering is just the first page of God's Financial Manual daw.
    Offering and Stewardship should come hand in hand. If you decide to 
    offer, make sure to steward what's left properly. At some point, 
    dili mu make sense imo offering if wa gihapon nimo na properly
    manage what's left. Moreover, it's also about surrender.

    What hit me ky ana ang speakers:
    "It is not The Grass is greener on the other side, but the Grass is
    greener where God planted you".
    So the Lord is not limited to where you are, whether nag barko ba ka ky maoy dako
    ug sweldo or asa ka na company because it is God who decides the increase.
    Nag start to siya ky ang question ky, Asa man ka? Higher pay pero di ka ganahan?
    or lower pay pero malipayon ka?

    Unya ila answer tanan ky bahala ug lower pay basta malipayon ka.
    MAo rato!

    God Bless! Pray and have a great day ahead!

    ~ Grace

    `,
    images: [newhairImg],
  },

  // ── Add your next letter below this line ────────────────────────────────
  // {
  //   title: "Your Letter Title",
  //   date:  "Month Day, Year",
  //   content: `Your letter here.`,
  //   images: [importedPhoto],
  // },
]

// Total number of envelopes shown in the grid (unlocked + locked placeholders).
// Increase this number when you want more empty slots visible.
export const TOTAL_ENVELOPES = 8
