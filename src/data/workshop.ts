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
    { days: 'Montag–Freitag', time: '09:00–19:00' },
    { days: 'Samstag', time: '10:00–16:00' },
    { days: 'Sonntag', time: 'Geschlossen' },
  ],
  routeUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${street}, ${city}`)}`,
};

export const homeCopy = {
  intro: 'Steht die Inspektion an? Leuchtet eine Warnlampe? Rufen Sie uns an und vereinbaren Sie einen Werkstatttermin.',
  aboutTitle: 'Ihre freie Werkstatt vor Ort.',
  aboutBody: 'Wir warten und reparieren Fahrzeuge in der Philipp-Pforr-Straße 9A. Unser Kfz-Meisterbetrieb ist in der Handwerksrolle der Handwerkskammer Potsdam eingetragen.',
};

type Service = {
  id: string;
  title: string;
  price: number | null;
  unit: string;
  summary: string;
  detail: string;
};

// Die veröffentlichte Preisliste nennt Einstiegspreise ohne Angabe einer Einheit.
export const services: Service[] = [
  {
    id: 'inspektion',
    title: 'Inspektion',
    price: 40,
    unit: '',
    summary: 'Wir prüfen Ihr Fahrzeug und führen die fälligen Wartungsarbeiten durch.',
    detail: 'Welche Arbeiten anstehen, hängt vom Fahrzeug und seinem Wartungsintervall ab. Halten Sie für die Terminabsprache am besten den Kilometerstand bereit.',
  },
  {
    id: 'hu-au',
    title: 'HU/AU und Nachuntersuchung',
    price: 150,
    unit: '',
    summary: 'Bei uns können Sie einen Termin für die HU mit Abgasuntersuchung oder für die Nachuntersuchung vereinbaren.',
    detail: 'Bringen Sie zur Hauptuntersuchung den Fahrzeugschein mit. Für die Nachuntersuchung brauchen Sie auch den letzten Prüfbericht.',
  },
  {
    id: 'fahrzeugdiagnose',
    title: 'Fahrzeugdiagnose',
    price: 20,
    unit: '',
    summary: 'Wir lesen den Fehlerspeicher aus und gehen der Ursache auf den Grund.',
    detail: 'Leuchtet eine Warnlampe oder tritt der Fehler nur beim Fahren auf? Beschreiben Sie uns bei der Terminabsprache, wann Sie ihn bemerken.',
  },
  {
    id: 'reifenwechsel',
    title: 'Reifen- und Räderwechsel',
    price: 10,
    unit: '',
    summary: 'Wir wechseln Kompletträder oder montieren und wuchten Reifen.',
    detail: 'Sagen Sie uns bei der Terminabsprache, ob Sie bereits montierte Räder mitbringen. Für Ihren zweiten Radsatz bieten wir auch eine Einlagerung an.',
  },
  {
    id: 'klimawartung',
    title: 'Klimawartung',
    price: 70,
    unit: '',
    summary: 'Wir prüfen die Klimaanlage und füllen bei Bedarf Kältemittel nach.',
    detail: 'Wenn die Anlage kaum noch kühlt, prüfen wir, wo das Problem liegt.',
  },
  {
    id: 'bremsenwechsel',
    title: 'Bremsenwechsel',
    price: 40,
    unit: '',
    summary: 'Wir prüfen die Bremsanlage und tauschen verschlissene Beläge oder Scheiben.',
    detail: 'Sagen Sie uns, wenn die Bremsen Geräusche machen oder beim Bremsen das Lenkrad vibriert.',
  },
  {
    id: 'scheibenwechsel',
    title: 'Scheibenwechsel',
    price: 250,
    unit: '',
    summary: 'Wir ersetzen beschädigte Front-, Seiten- und Heckscheiben.',
    detail: 'Geben Sie bei Ihrer Anfrage bitte das Fahrzeugmodell und die betroffene Scheibe an.',
  },
  {
    id: 'motor',
    title: 'Motorservice',
    price: null,
    unit: '',
    summary: 'Wir warten und reparieren Motoren.',
    detail: 'Wir prüfen auch Verschleißteile wie Luftfilter und Zündkerzen und tauschen sie bei Bedarf aus.',
  },
  {
    id: 'getriebe',
    title: 'Getriebeservice',
    price: null,
    unit: '',
    summary: 'Wir prüfen das Getriebe auf Verschleiß und beheben Schäden.',
    detail: 'Falls das Getriebe ruckelt oder einzelne Gänge schwer einzulegen sind, schildern Sie uns das Problem bei der Terminabsprache.',
  },
  {
    id: 'abschleppen',
    title: 'Deutschlandweiter Abschleppservice',
    price: null,
    unit: '',
    summary: 'Wir holen nicht fahrbereite Autos deutschlandweit ab und bringen sie zu unserer Werkstatt.',
    detail: 'Nennen Sie uns bei Ihrer Anfrage den Standort und das Modell des Fahrzeugs.',
  },
  {
    id: 'oelwechsel',
    title: 'Ölwechsel',
    price: null,
    unit: '',
    summary: 'Wir wechseln das Motoröl und prüfen den Ölfilter.',
    detail: 'Bei Bedarf ersetzen wir auch den Ölfilter.',
  },
  {
    id: 'unfallinstandsetzung',
    title: 'Unfallinstandsetzung',
    price: null,
    unit: '',
    summary: 'Wir reparieren Fahrzeuge nach einem Unfall.',
    detail: 'Beschreiben Sie uns den Schaden und teilen Sie uns mit, ob Ihr Fahrzeug noch fahrbereit ist.',
  },
  {
    id: 'autopflege',
    title: 'Autopflege und Reinigung',
    price: null,
    unit: '',
    summary: 'Wir übernehmen die Pflege und Reinigung Ihres Fahrzeugs.',
    detail: 'Sprechen Sie mit uns darüber, was an Ihrem Fahrzeug gereinigt werden soll.',
  },
];
