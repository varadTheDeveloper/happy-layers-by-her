// Vector redraw of the Happy Layers by Her logo:
// double pink ring with gaps, "HAPPY LAYERS / BY HER" in a didone serif,
// and a line-drawn cake on a stand with daisies.

const C = 100;
const rad = (d: number) => (d * Math.PI) / 180;
const pt = (r: number, d: number) => `${(C + r * Math.cos(rad(d))).toFixed(2)} ${(C + r * Math.sin(rad(d))).toFixed(2)}`;
const arc = (r: number, from: number, to: number, sweep: 0 | 1) =>
  `M${pt(r, from)} A${r} ${r} 0 0 ${sweep} ${pt(r, to)}`;

function daisy(x: number, y: number, s = 1) {
  const petals = Array.from({ length: 8 }, (_, i) => {
    const a = i * 45;
    return `<ellipse cx="${x}" cy="${y - 4.2 * s}" rx="${1.7 * s}" ry="${3.4 * s}" transform="rotate(${a} ${x} ${y})"/>`;
  }).join('');
  return `<g fill="#fff">${petals}<circle cx="${x}" cy="${y}" r="${1.9 * s}"/></g>`;
}

function cake() {
  const wave = (y: number) => `M77 ${y} q5.75 -1.6 11.5 0 t11.5 0 t11.5 0 t11.5 0`;
  return `
  <g fill="#fff" stroke="#2b1f23" stroke-width="1.15" stroke-linejoin="round" stroke-linecap="round">
    <path d="M95.8 118 v4.5 q-3.6 3 0 6.2 v3.6 l-8.5 5 h25.4 l-8.5 -5 v-3.6 q3.6 -3.2 0 -6.2 v-4.5"/>
    <path d="M71 113.5 v2.2 q29 6 58 0 v-2.2"/>
    <path d="M71 113.5 q29 6 58 0 q-29 -5.5 -58 0z"/>
    <path d="M77 87 v24 q23 4.2 46 0 v-24"/>
    <ellipse cx="100" cy="87" rx="23" ry="3.8"/>
    <g fill="none" stroke-width=".8">
      <path d="${wave(94.5)}"/><path d="${wave(100.5)}"/><path d="${wave(106.5)}"/>
    </g>
    <path d="M83 82 q-7 -6 -12.5 -2.5 q5.5 5 12.5 2.5z M105 77 q6 -6.5 12 -3.5 q-5 5.5 -12 3.5z"/>
    ${daisy(89, 79, 1.15)}${daisy(100, 74.5, 1.2)}${daisy(95, 85, 1)}${daisy(108.5, 81.5, 0.85)}
  </g>`;
}

export function logoSvg({ text = true, title = 'Happy Layers by Her', id = 'hl' } = {}) {
  const font = `font-family="'Bodoni Moda Variable', 'Bodoni Moda', Didot, 'Bodoni 72', Georgia, serif"`;
  const rings = `
    <g fill="none" stroke-linecap="round">
      <path d="${arc(95, 274, 446, 1)}" stroke="#e48aa5" stroke-width="2.6"/>
      <path d="${arc(95, 94, 266, 1)}" stroke="#e48aa5" stroke-width="2.6"/>
      <path d="${arc(89.5, 274, 446, 1)}" stroke="#f3bfcd" stroke-width="1.2"/>
      <path d="${arc(89.5, 94, 266, 1)}" stroke="#f3bfcd" stroke-width="1.2"/>
    </g>`;
  const words = text
    ? `
    <defs>
      <path id="${id}-top" d="${arc(64, 186, 354, 1)}"/>
      <path id="${id}-bot" d="${arc(80, 152, 28, 0)}"/>
    </defs>
    <g fill="#2b1f23" ${font} font-weight="560">
      <text font-size="21" letter-spacing="2.2"><textPath href="#${id}-top" startOffset="50%" text-anchor="middle">HAPPY LAYERS</textPath></text>
      <text font-size="21" letter-spacing="2.6"><textPath href="#${id}-bot" startOffset="50%" text-anchor="middle">BY HER</textPath></text>
    </g>`
    : '';
  const inner = text ? cake() : `<g transform="translate(100 104) scale(1.55) translate(-100 -104)">${cake()}</g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="${title}"><title>${title}</title><circle cx="100" cy="100" r="99" fill="#fff"/>${rings}${words}${inner}</svg>`;
}
