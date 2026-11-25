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
  note?: string;
};

// The workshop publishes starting prices without a per-wheel or per-hour rate.
export const services: Service[] = [
  { id: 'inspektion', title: 'Inspektion', price: 40, note: 'Wartung nach Kilometerstand und Intervall' },
  { id: 'hu-au', title: 'HU/AU', price: 150, note: 'GTÜ-Prüfstützpunkt. Auch Termine zur Nachuntersuchung.' },
  { id: 'fahrzeugdiagnose', title: 'Fahrzeugdiagnose', price: 20, note: 'Fehlerspeicher auslesen und Ursache prüfen' },
  { id: 'reifenwechsel', title: 'Reifen- und Räderwechsel', price: 10, note: 'Einlagerung auf Anfrage' },
  { id: 'klimawartung', title: 'Klimawartung', price: 70, note: 'Klimaanlage und Kühlleistung prüfen' },
  { id: 'bremsenwechsel', title: 'Bremsenwechsel', price: 40, note: 'Bremsbeläge und Bremsscheiben' },
  { id: 'scheibenwechsel', title: 'Scheibenwechsel', price: 250, note: 'Front-, Seiten- und Heckscheiben' },
  { id: 'motor', title: 'Motorservice', price: null },
  { id: 'getriebe', title: 'Getriebeservice', price: null },
  { id: 'abschleppen', title: 'Deutschlandweiter Abschleppservice', price: null },
  { id: 'oelwechsel', title: 'Ölwechsel', price: null },
  { id: 'unfallinstandsetzung', title: 'Unfallinstandsetzung', price: null },
  { id: 'autopflege', title: 'Autopflege und Reinigung', price: null },
];
