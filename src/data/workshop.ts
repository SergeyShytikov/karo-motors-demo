const street = 'Philipp-Pforr-Straße 9A';
const city = '16761 Hennigsdorf';

export const workshop = {
  name: 'KaRo Motors',
  owner: 'Roman Krich',
  phone: '+49 176 223 558 22',
  phoneHref: 'tel:+4917622355822',
  email: 'info@karo-motors.com',
  street,
  city,
  hours: [
    { days: 'Montag–Freitag', short: 'Mo–Fr', time: '09:00–19:00' },
    { days: 'Samstag', short: 'Sa', time: '10:00–16:00' },
    { days: 'Sonntag', short: 'So', time: 'Geschlossen' },
  ],
  routeUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${street}, ${city}`)}`,
};

export const homeCopy = {
  intro: 'Steht die Inspektion an oder leuchtet eine Warnlampe? Rufen Sie uns an und vereinbaren Sie einen Termin.',
  aboutTitle: 'Ihre freie Werkstatt vor Ort.',
  aboutBody: 'Wir warten und reparieren Fahrzeuge in der Philipp-Pforr-Straße 9A. Unser Kfz-Meisterbetrieb ist in der Handwerksrolle der Handwerkskammer Potsdam eingetragen.',
};

export type GroupId = 'pruefung' | 'bremsen-fahrwerk' | 'motor-antrieb' | 'reifen' | 'glas-karosserie';

export const groups: { id: GroupId; title: string }[] = [
  { id: 'pruefung', title: 'Prüfung & Wartung' },
  { id: 'bremsen-fahrwerk', title: 'Bremsen, Fahrwerk & Lenkung' },
  { id: 'motor-antrieb', title: 'Motor & Antrieb' },
  { id: 'reifen', title: 'Reifen & Räder' },
  { id: 'glas-karosserie', title: 'Glas, Karosserie & Abschleppen' },
];

export type Service = {
  id: string;
  group: GroupId;
  title: string;
  // Starting price in euros as published by the workshop; null means "auf Anfrage".
  price: number | null;
  // What the starting price refers to, when the service covers more than one job.
  priceFor?: string;
  summary?: string;
  scope?: string[];
  note?: string;
};

// Services and work steps follow the owner's service posters (November 2026).
// Entries without a summary come from the previous website and still need the owner's confirmation.
export const services: Service[] = [
  {
    id: 'hu-au',
    group: 'pruefung',
    title: 'HU/AU mit GTÜ',
    price: 165,
    summary: 'Ein Prüfingenieur der GTÜ führt die Haupt- und Abgasuntersuchung bei uns in der Werkstatt durch. Auf Wunsch prüfen wir Ihr Fahrzeug vor dem Termin. Reparaturen führen wir nach Rücksprache aus.',
    scope: [
      'Fahrzeugcheck vor dem Prüftermin',
      'HU und AU durch die GTÜ',
      'Mängelbeseitigung nach Rücksprache',
      'Termine zur Nachuntersuchung',
    ],
  },
  {
    id: 'inspektion',
    group: 'pruefung',
    title: 'Inspektion',
    price: 40,
    summary: 'Wartung nach dem Serviceplan Ihres Fahrzeugs, abhängig von Kilometerstand und Wartungsintervall.',
  },
  {
    id: 'oelwechsel',
    group: 'pruefung',
    title: 'Ölwechsel',
    price: null,
    summary: 'Wechsel des Motoröls nach Wartungsplan oder wenn das Fahrzeug den Ölservice anzeigt.',
  },
  {
    id: 'fahrzeugdiagnose',
    group: 'pruefung',
    title: 'Fahrzeugdiagnose',
    price: 20,
    summary: 'Leuchtet eine Warnlampe, lesen wir den Fehlerspeicher aus und suchen die Ursache.',
  },
  {
    id: 'klimawartung',
    group: 'pruefung',
    title: 'Klimaservice',
    price: 70,
    summary: 'Kühlt die Klimaanlage nicht mehr richtig, prüfen wir die Anlage und ihre Kühlleistung.',
  },
  {
    id: 'winter-check',
    group: 'pruefung',
    title: 'Winter-Check',
    price: null,
    summary: 'Durchsicht vor der kalten Jahreszeit.',
    scope: [
      'Batterie und Beleuchtung',
      'Heizung, Gebläse und Scheibenentfrostung',
      'Wischerblätter und Scheibenwaschanlage',
      'Frostschutz und Betriebsflüssigkeiten',
      'Bremsen, Reifenprofil und Luftdruck',
    ],
    note: 'Auf Wunsch beraten wir Sie zu Winterreifen.',
  },
  {
    id: 'bremsenwechsel',
    group: 'bremsen-fahrwerk',
    title: 'Bremsen',
    price: 40,
    summary: 'Quietscht oder schleift es beim Bremsen, prüfen wir die Bremsanlage und tauschen verschlissene Teile.',
    scope: [
      'Bremsbeläge und Bremsscheiben wechseln',
      'Bremsflüssigkeit wechseln',
      'Bremsanlage auf Verschleiß und Dichtheit prüfen',
      'Fehlerdiagnose am ABS',
    ],
  },
  {
    id: 'fahrwerk',
    group: 'bremsen-fahrwerk',
    title: 'Fahrwerk',
    price: null,
    summary: 'Klappert es über Bodenwellen oder schwingt das Auto nach, prüfen wir das Fahrwerk und tauschen verschlissene Teile.',
    scope: [
      'Querlenker vorn und hinten',
      'Stoßdämpfer und Fahrwerksfedern',
      'Koppelstangen und Stabilisatorlager',
      'Fahrwerkslager und Buchsen',
    ],
  },
  {
    id: 'lenkung',
    group: 'bremsen-fahrwerk',
    title: 'Lenkung und Achsvermessung',
    price: null,
    summary: 'Zieht das Auto zur Seite oder steht das Lenkrad bei Geradeausfahrt schief, prüfen wir Lenkung und Achseinstellung.',
    scope: [
      'Lenkgetriebe reparieren oder tauschen',
      'Spurstangen, Spurstangenköpfe und Gelenke',
      'Achsvermessung und Spureinstellung',
      'Servolenkung prüfen, Flüssigkeit wechseln',
    ],
  },
  {
    id: 'zahnriemen',
    group: 'motor-antrieb',
    title: 'Zahnriemenwechsel',
    price: null,
    summary: 'Für den Zahnriemen gibt der Hersteller ein Wechselintervall vor. Wir prüfen, wann er bei Ihrem Motor fällig ist, und wechseln ihn.',
    scope: [
      'Zahnriemen wechseln',
      'Spannrolle und Umlenkrolle wechseln',
      'Wasserpumpe bei Bedarf mit wechseln',
    ],
  },
  {
    id: 'wasserpumpe',
    group: 'motor-antrieb',
    title: 'Wasserpumpe',
    price: null,
    summary: 'Die Wasserpumpe hält das Kühlmittel im Umlauf. Ist sie undicht oder defekt, tauschen wir sie aus.',
    scope: [
      'Wasserpumpe wechseln',
      'Kühlmittelwechsel und Entlüftung auf Wunsch',
    ],
    note: 'Treibt der Zahnriemen die Wasserpumpe an, lassen sich beide in einem Termin wechseln.',
  },
  {
    id: 'kupplung',
    group: 'motor-antrieb',
    title: 'Kupplung',
    price: null,
    summary: 'Rutscht die Kupplung oder trennt sie nicht mehr sauber, wechseln wir den Kupplungssatz.',
    scope: [
      'Kupplungsscheibe und Druckplatte',
      'Ausrücklager',
    ],
    note: 'Auf Wunsch prüfen wir dabei das Zweimassenschwungrad.',
  },
  {
    id: 'auspuff',
    group: 'motor-antrieb',
    title: 'Auspuff',
    price: null,
    summary: 'Wird der Auspuff lauter oder ist er undicht, prüfen wir die Abgasanlage und reparieren oder ersetzen beschädigte Teile.',
    scope: [
      'Rohre und Schalldämpfer',
      'Undichte Stellen an der Abgasanlage',
      'Katalysator prüfen und wechseln',
    ],
  },
  { id: 'motor', group: 'motor-antrieb', title: 'Motorservice', price: null },
  { id: 'getriebe', group: 'motor-antrieb', title: 'Getriebeservice', price: null },
  {
    id: 'reifenwechsel',
    group: 'reifen',
    title: 'Reifenservice',
    price: 10,
    priceFor: 'Reifen- und Räderwechsel',
    summary: 'Räderwechsel zur Saison, Einlagerung und neue Reifen.',
    scope: [
      'Reifen- und Räderwechsel',
      'Einlagerung auf Anfrage',
      'Neureifen: Beratung, Bestellung und Montage',
      'Entsorgung von Altreifen',
    ],
  },
  {
    id: 'scheibenwechsel',
    group: 'glas-karosserie',
    title: 'Scheibenwechsel',
    price: 250,
    summary: 'Ist eine Scheibe gerissen oder gebrochen, tauschen wir Front-, Seiten- oder Heckscheibe aus.',
    scope: [
      'Aus- und Einbau der Scheibe',
      'Abstimmung mit Ihrer Versicherung auf Wunsch',
      'Kalibrierung von Assistenzkameras auf Anfrage',
    ],
    note: 'Ob und in welcher Höhe Ihre Versicherung die Kosten übernimmt, regelt Ihr Versicherungsvertrag.',
  },
  { id: 'unfallinstandsetzung', group: 'glas-karosserie', title: 'Unfallinstandsetzung', price: null },
  { id: 'autopflege', group: 'glas-karosserie', title: 'Autopflege und Reinigung', price: null },
  { id: 'abschleppen', group: 'glas-karosserie', title: 'Deutschlandweiter Abschleppservice', price: null },
];

export const serviceById = (id: string) => {
  const service = services.find(entry => entry.id === id);
  if (!service) throw new Error(`Unknown service: ${id}`);
  return service;
};

export const formatPrice = (price: number) => `${price} €`;
