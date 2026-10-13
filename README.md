# Happy Layers by Her: website

Static website for Sneha's eggless home bakery in Bhosari, PCMC, Pune.
Built with [Astro](https://astro.build) 5. No database and no server: it builds to plain HTML.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321, live reload while editing
npm run build     # makes the final site in dist/
npm run preview   # serves dist/ to check the build
```

Needs Node 18.17 or newer.

## Where to change things

| To change… | Edit this file |
|---|---|
| Phone, email, address, hours, FSSAI number, Google rating | `src/data/site.ts` |
| Menu items, prices, order form options | `src/data/menu.ts` |
| Gallery photos, reviews, policies, FAQ, workshop and hamper text | `src/data/content.ts` |
| Colours and fonts | `src/styles/global.css` (top of file) |
| Logo drawing | `src/lib/logo.ts`, then run `npx tsx scripts/make-logo.mjs` |

Every page reads from these files, so a price changed once updates the menu, the order form and the FAQ.

### Common jobs

- **New workshop batch:** in `content.ts`, set `workshop.nextBatch = '13 December 2026'`. Set it back to `''` afterwards.
- **After Diwali:** in `content.ts`, set `festiveHamper.show = false`.
- **FSSAI number:** in `site.ts`, fill `fssai: ''`. It then shows in the footer and on the About page.
- **New domain:** change `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt`.

### Adding photos

Photos are pre-resized WebP files in `public/img/` (480px and 960px wide), listed in `src/data/images.json`.
To add new ones, put the original JPGs in a folder and run:

```bash
pip install pillow
python scripts/resize_photos.py path/to/new-photos
```

Then use the file name (without `.jpg`) as the `img` value in the data files.

## How ordering works

There is no checkout. The order form (`src/pages/order.astro` + `src/scripts/order.ts`) builds a WhatsApp
message and opens `wa.me/919172714878` with it filled in. The customer presses send, Sneha replies with the
final price, and the customer pays a 50% advance as before.

Built-in rules:
- Earliest date is today + 2 days (+ 3 for fondant), skipping Thursdays (closed).
- Thursdays and too-early dates show an error.
- Choosing delivery for an item that normally isn't sent by Porter shows a warning.
- The send button checks name, item, date, delivery area and the policy checkbox first.
- Links like `/order/?kind=cheesecake&flavour=Lotus%20Biscoff` pre-fill the form.

The workshop and corporate enquiry forms use the simpler `src/scripts/waform.ts`.

## Hosting: AWS Amplify (ap-south-1, Mumbai)

The site is hosted on AWS Amplify, connected to this GitHub repo. Every push to `main` rebuilds
and redeploys automatically in a few minutes. Build settings are in `amplify.yml`.

Live address for now: **https://happylayers.opentestudox.org** (DNS in Route 53).

When Sneha buys her own domain: add it under Amplify → Hosting → Custom domains, change `site`
in `astro.config.mjs` and the sitemap line in `public/robots.txt`, then push.

## Before going live

- [ ] Sneha approves the prices (higher of her Instagram and WhatsApp prices was used)
- [ ] Add the FSSAI licence number
- [ ] Buy Sneha's own domain, connect it in Amplify, update `astro.config.mjs` and `robots.txt`
- [ ] Swap the home and About photos for her originals when she sends them (her Instagram profile photo is only 150px)
- [ ] Confirm the redrawn logo with her, or replace `public/logo.svg` with her original
- [ ] Point the "Website" button on her Google Business Profile to the new site
- [ ] Update her WhatsApp Business profile: description, real hours, and the old catalogue prices
