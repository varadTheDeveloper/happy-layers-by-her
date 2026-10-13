// ─────────────────────────────────────────────────────────────
//  Gallery, reviews, workshops, gifting, policies and FAQ.
// ─────────────────────────────────────────────────────────────

export const galleryGroups = [
  { id: 'floral', label: 'Floral and birthday' },
  { id: 'vintage', label: 'Vintage piping' },
  { id: 'theme', label: 'Kids and theme' },
  { id: 'tiered', label: 'Tiered and weddings' },
  { id: 'bento', label: 'Bento' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'gifting', label: 'Gifting' },
] as const;

type G = (typeof galleryGroups)[number]['id'];

export const gallery: { img: string; alt: string; group: G }[] = [
  { img: 'lily-cake', alt: 'Pink cake with a real lily on top and pearl details', group: 'floral' },
  { img: 'vintage-red-bows', alt: 'White vintage cake with red piped bows and a heart pattern', group: 'vintage' },
  { img: 'blue-florals-pearls', alt: 'White cake with blue piped flowers and pearls', group: 'floral' },
  { img: 'ferrero-florals', alt: 'Chocolate cake with Ferrero chocolates, truffles and fresh roses', group: 'floral' },
  { img: 'pink-vintage-bows', alt: 'Pink vintage cake with black bows', group: 'vintage' },
  { img: 'sunflower-cake', alt: 'Cream cake topped with piped sunflowers', group: 'floral' },
  { img: 'dutch-truffle', alt: 'Dutch truffle cake with chocolate drip and chocolate pieces', group: 'floral' },
  { img: 'vintage-pink-piped', alt: 'White cake with pink vintage piping and ribbon bows', group: 'vintage' },
  { img: 'elephant-baby-cake', alt: 'Pink baby-welcome cake with a little elephant topper', group: 'theme' },
  { img: 'two-tier-floral', alt: 'Two-tier white cake with pink roses', group: 'tiered' },
  { img: 'red-roses-pink', alt: 'Pink and white cake covered in red piped roses', group: 'floral' },
  { img: 'chocolate-gold-balls', alt: 'Chocolate cake with gold spheres', group: 'floral' },
  { img: 'blue-heart-vintage', alt: 'Heart-shaped blue vintage cake', group: 'vintage' },
  { img: 'astronaut-space-cake', alt: 'Dark blue space cake with an astronaut and moon', group: 'theme' },
  { img: 'rasmalai-florals', alt: 'Rasmalai cake with pink piped flowers and a Ganesha topper', group: 'floral' },
  { img: 'bento-birthday', alt: 'Bento cake with a cute drawn face in a takeaway box', group: 'bento' },
  { img: 'red-velvet-vintage', alt: 'Deep red vintage cake with ribbon details', group: 'vintage' },
  { img: 'three-tier-white-roses', alt: 'Three-tier white wedding cake with white roses', group: 'tiered' },
  { img: 'bombolonis-box', alt: 'Box of filled bombolonis', group: 'desserts' },
  { img: 'lily-pink-ombre', alt: 'Pink ombre cake with a lily', group: 'floral' },
  { img: 'kitty-cake', alt: 'White kitty face cake with pink ears', group: 'theme' },
  { img: 'diwali-hamper-box', alt: 'Diwali hamper box with gold ribbon', group: 'gifting' },
  { img: 'pink-bow-vintage', alt: 'Pink vintage cake with a white bow', group: 'vintage' },
  { img: 'chocolate-heart-vintage', alt: 'Heart-shaped chocolate vintage cake with bows', group: 'vintage' },
  { img: 'wedding-couple-topper', alt: 'Anniversary cake with a couple topper', group: 'tiered' },
  { img: 'sunflower-bento', alt: 'Bento cake with piped sunflowers', group: 'bento' },
  { img: 'gold-butterflies', alt: 'Pink cake with gold butterflies', group: 'floral' },
  { img: 'princess-butterfly-cake', alt: 'Princess cake with butterflies and a castle', group: 'theme' },
  { img: 'roses-cake-combo', alt: 'Cake and red roses gift combo', group: 'gifting' },
  { img: 'lavender-florals', alt: 'Lavender cake with piped flowers', group: 'floral' },
  { img: 'two-tier-chocolate-drip', alt: 'Two-tier chocolate drip cake', group: 'tiered' },
  { img: 'donuts', alt: 'Box of glazed donuts', group: 'desserts' },
  { img: 'pink-anniversary', alt: 'Pink anniversary cake with flowers', group: 'floral' },
  { img: 'music-guitar-cake', alt: 'Music theme cake with a guitar', group: 'theme' },
  { img: 'red-heart-bento', alt: 'Red heart bento cake', group: 'bento' },
  { img: 'kitkat-gold-ribbon', alt: 'Chocolate wafer cake tied with a gold ribbon', group: 'floral' },
  { img: 'blue-florals', alt: 'White cake with blue flowers', group: 'floral' },
  { img: 'cupcakes', alt: 'Box of chocolate cupcakes', group: 'desserts' },
  { img: 'two-tier-couple', alt: 'Two-tier wedding cake with a couple', group: 'tiered' },
  { img: 'truffle-flowers-hamper', alt: 'Truffle cake with a bouquet', group: 'gifting' },
  { img: 'white-red-roses', alt: 'White cake with red roses', group: 'floral' },
  { img: 'gym-theme-cake', alt: 'Black and white gym theme cake', group: 'theme' },
  { img: 'rakhi-bento', alt: 'Rakhi bento cake', group: 'bento' },
  { img: 'daisy-cake', alt: 'White cake with daisies', group: 'floral' },
  { img: 'tiramisu', alt: 'Tiramisu in a tray', group: 'desserts' },
  { img: 'butterfly-drip', alt: 'Pink drip cake with butterflies', group: 'floral' },
  { img: 'artist-theme-cake', alt: 'Artist theme cake with paint drips', group: 'theme' },
  { img: 'anniversary-couple', alt: 'Pink cake with roses and a couple silhouette', group: 'tiered' },
  { img: 'brownie-flowers-box', alt: 'Brownie box with fresh flowers', group: 'gifting' },
  { img: 'black-forest-drip', alt: 'Black forest cake with cherries', group: 'floral' },
  { img: 'mango-bento', alt: 'Mango bento cake', group: 'bento' },
  { img: 'cookie-tin', alt: 'Tin of chocolate chunk cookies', group: 'desserts' },
  { img: 'pink-daisy', alt: 'Pink cake with daisies', group: 'floral' },
  { img: 'red-roses-bouquet', alt: 'White cake with a crown of red roses', group: 'floral' },
  { img: 'kids-blue-gold-birthday', alt: 'Blue and gold kids birthday cake', group: 'theme' },
  { img: 'chocolate-bento', alt: 'Chocolate bento cake', group: 'bento' },
  { img: 'bombolonis-filled', alt: 'Filled bombolonis', group: 'desserts' },
  { img: 'gift-boxes-gold-ribbon', alt: 'White gift boxes tied with gold ribbon', group: 'gifting' },
  { img: 'yellow-florals', alt: 'Cream cake with yellow piped flowers', group: 'floral' },
  { img: 'strawberry-cake', alt: 'Strawberry cream cake', group: 'floral' },
  { img: 'tall-floral-2kg', alt: 'Tall 2 kg cake with fresh roses', group: 'tiered' },
  { img: 'hazelnut-cupcake', alt: 'Hazelnut cupcake', group: 'desserts' },
  { img: 'bento-flowers-box', alt: 'Bento cake and flowers gift box', group: 'gifting' },
];

// Short quotes from her public Google reviews (no names on purpose)
export const reviews = [
  { text: 'I have lost count of my orders by now. She is the best in the town. Highly recommend.', about: 'Regular customer' },
  {
    text: 'One of the best cakes I’ve ever had! Beautifully decorated and tasted even better than it looked. Fresh ingredients and great attention to detail.',
    about: 'Custom cake',
  },
  {
    text: 'The cakes are delicious, and the bombolonis are just amazing. Soft, with the proper amount of sweetness filled in. The theme cakes were always above expectations.',
    about: 'Theme cakes and bombolonis',
  },
  {
    text: 'I ordered over 30 Korean buns for my office and home, and everyone absolutely loved them.',
    about: 'Office order',
  },
  { text: 'Awesome homemade quality cakes and pastries.', about: 'Cakes and pastries' },
  { text: 'A great place for ordering dessert, birthday cakes and even some buns.', about: 'Birthday cake' },
];

export const orderSteps = [
  { title: 'Tell us what you want', text: 'Pick the item, flavour, weight and date in the order form.' },
  { title: 'Send it on WhatsApp', text: 'The form writes the message for you. Add a design photo if you have one.' },
  { title: 'Get your final price', text: 'Sneha replies with the price for your design. Please confirm it before going ahead.' },
  { title: 'Pay 50% to confirm', text: 'Your order is booked once the advance is received. The rest is paid at pickup or dispatch.' },
];

// ─── Policies (her "Please read" slide) ───────────────────────
export const policies = [
  { title: 'Order in advance', text: 'Orders must be placed at least 2 days in advance, and 3 days for fondant cakes.' },
  { title: '50% advance', text: 'A 50% advance confirms your order. It is non-refundable. The rest is settled when the order is dispatched or handed over.' },
  { title: 'No last-minute changes', text: 'Once an order is confirmed, changes to the design or flavour can’t be made at the last minute.' },
  { title: 'Reference images', text: 'Every cake is made by hand, so slight differences from reference images may occur.' },
  { title: 'Pickup and delivery', text: 'Pickup is always the safest option. Only selected items (bento cakes, bombolonis, donuts, chocolates, brownies and cookies) are sent via Porter.' },
  { title: 'After pickup', text: 'We are not responsible for damage after pickup or during third-party delivery, and no refund can be given in such cases.' },
  { title: 'Fixed prices', text: 'Everything is made fresh with high-quality ingredients, so prices are fixed and discounts are not offered.' },
];

export const faqs = [
  { q: 'Is everything eggless?', a: 'Yes. Every cake and dessert is 100% eggless.' },
  { q: 'Are you FSSAI approved?', a: 'Yes, Happy Layers by Her is an FSSAI approved home bakery.' },
  { q: 'How much does a cake cost?', a: 'Cakes start from ₹650 for ½ kg and ₹1,300 for 1 kg. Cheesecakes start from ₹800 for ½ kg. The final price depends on the design. See the full menu for details.' },
  { q: 'How early should I order?', a: 'At least 2 days before you need it, and 3 days for fondant cakes. For big or tiered cakes, earlier is better.' },
  { q: 'Do you deliver?', a: 'Bento cakes, bombolonis, donuts, chocolates, brownies and cookies can be sent by Porter. Delivery charges depend on your location. Other cakes are best picked up from the studio in Bhosari.' },
  { q: 'Where do I pick up my order?', a: 'From the studio at Ellora Shoppee, Chaitanya Park, Sector No. 1, Bhosari, PCMC. Open 10:30 am to 6 pm, closed on Thursdays.' },
  { q: 'How do I pay?', a: 'Pay 50% in advance to confirm the order, and the rest at pickup or when it is dispatched. The advance is non-refundable.' },
  { q: 'Can I send my own design?', a: 'Yes. Send a reference photo on WhatsApp. Handmade cakes can differ slightly from the picture.' },
  { q: 'Do you take bulk or corporate orders?', a: 'Yes, for hampers, buns, brownies and dessert boxes. Use the corporate enquiry form on the Gifting page.' },
  { q: 'Can I call?', a: 'Please send a WhatsApp text instead of calling. Sneha is usually baking and replies to messages as soon as she can.' },
  { q: 'Do you give discounts?', a: 'Prices are fixed. Everything is made fresh with high-quality ingredients like couverture chocolate.' },
];

// ─── Workshops ─────────────────────────────────────────────────
export const workshop = {
  title: 'Bomboloni and donut masterclass',
  summary: 'Learn to make soft, airy, perfectly proofed eggless bombolonis and donuts from scratch. For beginners, home bakers, and anyone who wants to start selling them.',
  // Set to a date string like '13 September 2026' when the next batch is announced.
  nextBatch: '' as string,
  modes: [
    { name: 'Offline, hands-on', detail: 'At the studio in Bhosari, PCMC. 4 hours, 11 am to 3 pm.', fee: '₹3,000 per person', note: 'Early-bird price on some batches. Limited seats.' },
    { name: 'Live online', detail: 'Bake along from your own kitchen.', fee: 'Fee shared with each batch', note: '' },
  ],
  covers: [
    'Role of each ingredient and how it changes the result',
    'Activating yeast',
    'Kneading and the windowpane test',
    'Proofing',
    'Shaping',
    'Frying',
    'Filling',
    'Storage and shelf life',
    'Packaging and pricing',
    'Donut toppings and finishing',
  ],
  receive: [
    'Detailed recipe PDF with a step-by-step process',
    'Filling recipes and techniques',
    '10+ bomboloni flavour variations',
    'Donut dipping and topping guide',
  ],
};

// ─── Gifting ───────────────────────────────────────────────────
export const festiveHamper = {
  show: true, // turn off after Diwali
  title: 'Diwali hamper collection',
  intro: 'Make your Diwali gifting a little sweeter and healthier this year. Available in multiple price ranges, with bulk and corporate orders welcome.',
  contains: [
    'Bestselling atta jaggery cake loaf',
    'Peri peri cheese makhana jar',
    'Date truffles and chocolate bites',
    'Cheese chilli crackers',
    'Brown butter atta jaggery cookies',
  ],
  img: 'diwali-hamper-box',
};

export const giftIdeas = [
  { title: 'Cake and flowers', text: 'A cake with a fresh bouquet, ready to hand over.', img: 'roses-cake-combo' },
  { title: 'Brownie and flower box', text: 'Couverture brownies with fresh flowers in one box.', img: 'brownie-flowers-box' },
  { title: 'Bento and flowers', text: 'A small personalised cake with a few flowers.', img: 'bento-flowers-box' },
  { title: 'Chocolate jars and boxes', text: 'Handmade chocolates for festivals, Rakhi and thank-yous.', img: 'chocolate-jar' },
];
