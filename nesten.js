/* ==========================================================================
   FOTO'S PER NESTJE — hier voegt u nieuwe foto's of een nieuw nestje toe.
   Dit ene bestand geldt voor ALLE talen (NL, EN, FR).

   NIEUWE FOTO TOEVOEGEN aan een bestaand nestje:
     1. Zet de foto in de map (naast index.html)
     2. Voeg onderaan de lijst "fotos" een regel toe:
          "bestandsnaam.jpeg",                  <- zonder bijschrift
        of met eigen bijschrift per taal:
          ["bestandsnaam.jpeg", {nl:"...", en:"...", fr:"..."}],

   NIEUW NESTJE: kopieer het hele blok { id: ... } hieronder, plak het
   BOVENAAN (nieuwste eerst) en pas id, map, titel, intro en fotos aan.
   Let op: elke foto-regel en elk blok eindigt met een komma.
   ========================================================================== */
window.NESTEN = [
  {
    id: "nestje2026",
    map: "",
    titel: { nl: "Nestje 2026 — Sansa × Master Yoda", en: "Litter 2026 — Sansa × Master Yoda", fr: "Portée 2026 — Sansa × Master Yoda" },
    intro: { nl: "De eerste weken van ons eerste nestje.", en: "The first weeks of our first litter.", fr: "Les premières semaines de notre première portée." },
    fotos: [
      "kittens-geboorte-1.jpg",
      "Sansa (2).jpeg",
      "W4.jpeg",
      "W4-1.jpeg",
      "W4-3.jpeg",
      "W4-4.jpeg",
      "week9-bed.jpg",
      "week10-binnenplaats.jpg",
      "week10-baksteen-1.jpg",
      "week10-baksteen-2.jpg",
      "week11-bank.jpg",
      "week11-deur-1.jpg",
      "week11-deur-2.jpg",
      "week11-kasseien.jpg",
      "week11-mand.jpg",
    ]
  },
];
