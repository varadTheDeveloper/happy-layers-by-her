// ─────────────────────────────────────────────────────────────
//  Business details. Change anything here and every page updates.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Happy Layers by Her',
  owner: 'Sneha Karande',
  tagline: 'Eggless cakes and desserts, made by hand in Pune',

  // WhatsApp number in international format, digits only (no +, no spaces)
  whatsapp: '919172714878',
  phoneDisplay: '+91 91727 14878',
  email: 'snehakarande2002@gmail.com',

  // TODO: add the FSSAI licence number when Sneha sends it (14 digits).
  // While it is empty, the site only says "FSSAI approved".
  fssai: '',

  address: {
    line1: 'Ellora Shoppee, Chaitanya Park, Sector No. 1',
    line2: 'Bhosari, Pimpri-Chinchwad',
    city: 'Pune',
    pincode: '411039',
    state: 'Maharashtra',
  },
  area: 'Bhosari, PCMC, Pune',

  // 0 = Sunday … 6 = Saturday. Thursday is closed.
  closedDays: [4],
  hours: [
    { day: 'Monday', time: '10:30 am – 6:00 pm' },
    { day: 'Tuesday', time: '10:30 am – 6:00 pm' },
    { day: 'Wednesday', time: '10:30 am – 6:00 pm' },
    { day: 'Thursday', time: 'Closed' },
    { day: 'Friday', time: '10:30 am – 6:00 pm' },
    { day: 'Saturday', time: '10:30 am – 6:00 pm' },
    { day: 'Sunday', time: '10:30 am – 6:00 pm' },
  ],
  timeSlots: ['10:30 am – 12:00 pm', '12:00 – 2:00 pm', '2:00 – 4:00 pm', '4:00 – 6:00 pm'],

  // Days of notice needed before the pickup / delivery date
  noticeDays: 2,
  noticeDaysFondant: 3,

  google: {
    rating: '5.0',
    reviewCount: 43,
    reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Happy+Layers+By+Her+Bhosari+Pune',
    mapEmbed:
      'https://maps.google.com/maps?q=Happy%20Layers%20By%20Her%2C%20Chaitanya%20Park%2C%20Bhosari%2C%20Pune&z=15&output=embed',
  },

  social: {
    instagram: 'https://www.instagram.com/happylayersbyher/',
    instagramHandle: '@happylayersbyher',
    threads: 'https://www.threads.com/@happylayersbyher',
  },

  yearsBaking: '5+',
  ordersServed: '1,000+',
};

/** wa.me link with an optional pre-filled message */
export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const nav = [
  { href: '/menu/', label: 'Menu & prices' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/gifting/', label: 'Gifting' },
  { href: '/workshops/', label: 'Workshops' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
