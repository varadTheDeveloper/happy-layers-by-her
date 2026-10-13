// ─────────────────────────────────────────────────────────────
//  Menu and prices.
//  Prices are "starting from". Where Instagram and the WhatsApp
//  catalogue disagreed, the higher price is used.
// ─────────────────────────────────────────────────────────────

export const basePrices = [
  { item: 'Cakes', half: 650, one: 1300 },
  { item: 'Cheesecakes', half: 800, one: 1600 },
  { item: 'Brownies', half: 700, note: 'couverture chocolate' },
  { item: 'Fondant cakes', half: 1200, note: 'starting price' },
];

export const priceNotes = [
  'Design, flavour, toppings and structural customisations are added to the basic price.',
  'Add-ons like special packaging and premium toppers are charged extra.',
  'Delivery charges depend on the location.',
  'Fondant cakes start from ₹1,200 for ½ kg.',
];

export type MenuItem = {
  name: string;
  note?: string;
  price?: string; // display text, e.g. "from ₹650 / ½ kg"
  tag?: 'Bestseller' | 'Seasonal' | 'No maida, no sugar';
  img?: string; // key in images.json
};

export type MenuSection = {
  id: string;
  title: string;
  intro: string;
  items: MenuItem[];
  img?: string;
};

const CAKE = 'from ₹650 / ½ kg';

export const menu: MenuSection[] = [
  {
    id: 'bestsellers',
    title: 'Bestseller cakes',
    intro: 'The flavours people come back for. All eggless, all priced from ₹650 for ½ kg.',
    img: 'dutch-truffle',
    items: [
      { name: 'Signature Chocolate', price: CAKE, tag: 'Bestseller', img: 'signature-chocolate-birthday' },
      { name: 'Signature Vanilla', price: CAKE, tag: 'Bestseller', img: 'white-gold-birthday' },
      { name: 'Dutch Truffle', price: CAKE, tag: 'Bestseller', img: 'dutch-truffle' },
      { name: 'Black Forest', price: CAKE, tag: 'Bestseller', img: 'black-forest' },
      { name: 'White Forest', price: CAKE, tag: 'Bestseller' },
      { name: 'Choco Espresso', price: CAKE, tag: 'Bestseller' },
      { name: 'Exotic Pineapple', price: CAKE, tag: 'Bestseller', img: 'fresh-pineapple' },
      { name: 'Salted Caramel', price: CAKE, tag: 'Bestseller' },
      { name: 'Mixed Fruit', price: CAKE, tag: 'Bestseller' },
      { name: 'No Maida No Sugar', note: 'Atta and jaggery', price: CAKE, tag: 'No maida, no sugar' },
    ],
  },
  {
    id: 'signature',
    title: 'Signature cakes',
    intro: 'Richer, layered flavours with fillings made in-house.',
    img: 'rasmalai-florals',
    items: [
      { name: 'Decadent Butterscotch', price: CAKE },
      { name: 'Red Velvet', note: 'With cream cheese frosting', price: CAKE, img: 'lily-pink-ombre' },
      { name: 'Cookies and Crème', price: CAKE },
      { name: 'Praline', note: 'Hazelnut, almond, pistachio or walnut', price: CAKE, img: 'dutch-almond' },
      { name: 'Nutty cakes', price: CAKE, img: 'chocolate-hazelnut' },
      { name: 'Carrot cake', price: CAKE },
      { name: 'Royal Rasmalai', price: CAKE, img: 'rasmalai-florals' },
      { name: 'Gulab Jamun', price: CAKE, img: 'wa-gulabjamun-cake' },
      { name: 'Chocolate Kunafa', price: CAKE },
      { name: 'Banana Caramel', price: CAKE },
      { name: 'Pistachio tea cake', price: CAKE },
    ],
  },
  {
    id: 'cheesecakes',
    title: 'Cheesecakes',
    intro: 'Baked and set by hand. From ₹800 for ½ kg, ₹1,600 for 1 kg.',
    items: [
      { name: 'Lotus Biscoff', price: 'from ₹800 / ½ kg' },
      { name: 'Blueberry', price: 'from ₹800 / ½ kg' },
      { name: 'Chocolate', price: 'from ₹800 / ½ kg' },
      { name: 'Nutella', price: 'from ₹800 / ½ kg' },
      { name: 'Pistachio Kunafa', price: 'from ₹800 / ½ kg' },
      { name: 'Mango', price: 'from ₹800 / ½ kg', tag: 'Seasonal' },
      { name: 'Strawberry', price: 'from ₹800 / ½ kg', tag: 'Seasonal' },
      { name: 'Cheesecake cups', price: 'Ask for price' },
    ],
  },
  {
    id: 'designs',
    title: 'Designs and occasions',
    intro: 'Pick any flavour above, then a design. Price depends on weight and how detailed the design is.',
    items: [
      { name: 'Custom cakes', note: 'Bring a reference picture', price: CAKE, img: 'vintage-pink-piped' },
      { name: 'Floral and vintage piping', price: CAKE, img: 'pink-bow-vintage' },
      { name: 'Bento cakes', note: 'Small cakes in a box', price: 'from ₹359', img: 'bento-birthday' },
      { name: 'Theme cakes', price: 'from ₹699', img: 'astronaut-space-cake' },
      { name: 'Pinata cakes', price: CAKE, img: 'wa-pinata-cake' },
      { name: 'Fruit basket cakes', price: CAKE, img: 'wa-fruit-basket-cake' },
      { name: 'Chocolate cage cakes', price: CAKE, img: 'wa-chocolate-cage-cake' },
      { name: 'Doll cakes', price: 'from ₹999', img: 'wa-doll-cake' },
      { name: 'Chocolate overload', price: 'from ₹999', img: 'chocolate-overload' },
      { name: 'Two-tier cakes', price: 'from ₹999', img: 'two-tier-floral' },
      { name: 'Party cakes', note: 'Bigger cakes for big gatherings', price: 'from ₹1,299', img: 'three-tier-white-roses' },
      { name: 'Fondant cakes', price: 'from ₹1,200 / ½ kg' },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts and treats',
    intro: 'For gifting, parties, or a box for yourself. Most of these can be delivered.',
    img: 'bombolonis-box',
    items: [
      { name: 'Bombolonis', note: 'Filled Italian doughnuts, eggless', price: 'Ask for price', tag: 'Bestseller', img: 'bombolonis-box' },
      { name: 'Couverture brownies', price: '₹700 / ½ kg', tag: 'Bestseller', img: 'bento-brownie' },
      { name: 'Donuts', price: 'from ₹159', img: 'donuts' },
      { name: 'Chocolates', price: 'from ₹299', img: 'chocolate-jar' },
      { name: 'Dubai Kunafa chocolate', price: 'Ask for price' },
      { name: 'Korean cream cheese buns', price: 'Ask for price' },
      { name: 'Cookies', price: 'Ask for price', img: 'cookie-tin' },
      { name: 'Cupcakes', price: 'Ask for price', img: 'cupcakes' },
      { name: 'Cake cups', price: 'Ask for price' },
      { name: 'Cake pops', price: 'Ask for price' },
      { name: 'Pastries', price: 'from ₹50' },
      { name: 'Tiramisu', price: 'Ask for price', img: 'tiramisu' },
    ],
  },
];

// ─── Order form options ────────────────────────────────────────

export type OrderKind = {
  value: string;
  label: string;
  unit: 'weight' | 'qty';
  flavours?: 'cake' | 'cheesecake';
  fondant?: boolean;
  deliverable: boolean; // can go by Porter
  priceHint?: string;
};

export const orderKinds: OrderKind[] = [
  { value: 'cake', label: 'Cake', unit: 'weight', flavours: 'cake', deliverable: false, priceHint: 'Cakes start from ₹650 for ½ kg and ₹1,300 for 1 kg.' },
  { value: 'fondant', label: 'Fondant cake', unit: 'weight', flavours: 'cake', fondant: true, deliverable: false, priceHint: 'Fondant cakes start from ₹1,200 for ½ kg. Needs 3 days notice.' },
  { value: 'tier', label: 'Two-tier or party cake', unit: 'weight', flavours: 'cake', deliverable: false, priceHint: 'Two-tier cakes start from ₹999, party cakes from ₹1,299.' },
  { value: 'cheesecake', label: 'Cheesecake', unit: 'weight', flavours: 'cheesecake', deliverable: false, priceHint: 'Cheesecakes start from ₹800 for ½ kg and ₹1,600 for 1 kg.' },
  { value: 'bento', label: 'Bento cake', unit: 'qty', flavours: 'cake', deliverable: true, priceHint: 'Bento cakes start from ₹359.' },
  { value: 'brownies', label: 'Couverture brownies', unit: 'weight', deliverable: true, priceHint: 'Brownies are ₹700 for ½ kg.' },
  { value: 'bombolonis', label: 'Bombolonis', unit: 'qty', deliverable: true },
  { value: 'donuts', label: 'Donuts', unit: 'qty', deliverable: true, priceHint: 'Donuts start from ₹159.' },
  { value: 'chocolates', label: 'Chocolates', unit: 'qty', deliverable: true, priceHint: 'Chocolates start from ₹299.' },
  { value: 'cookies', label: 'Cookies', unit: 'qty', deliverable: true },
  { value: 'cupcakes', label: 'Cupcakes, cake cups or cake pops', unit: 'qty', deliverable: false },
  { value: 'buns', label: 'Korean cream cheese buns', unit: 'qty', deliverable: false },
  { value: 'other', label: 'Something else', unit: 'qty', deliverable: false },
];

export const cakeFlavours = [
  ...menu[0].items.map((i) => i.name),
  ...menu[1].items.map((i) => i.name),
];
export const cheesecakeFlavours = menu[2].items.filter((i) => i.name !== 'Cheesecake cups').map((i) => i.name);

export const weights = ['½ kg', '1 kg', '1.5 kg', '2 kg', '3 kg', 'More than 3 kg'];

export const deliverableNote =
  'Delivery by Porter is available for bento cakes, bombolonis, donuts, chocolates, brownies and cookies. Other cakes are pickup only, or ask on WhatsApp.';
