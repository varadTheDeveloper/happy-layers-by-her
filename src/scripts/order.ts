// Order form: builds a WhatsApp message from the form and opens wa.me.

type Kind = {
  value: string;
  label: string;
  unit: 'weight' | 'qty';
  flavours?: 'cake' | 'cheesecake';
  fondant?: boolean;
  deliverable: boolean;
  priceHint?: string;
};
type Data = {
  whatsapp: string;
  kinds: Kind[];
  cakeFlavours: string[];
  cheesecakeFlavours: string[];
  noticeDays: number;
  noticeDaysFondant: number;
  closedDays: number[];
};

const SUGGEST = 'Not sure yet, please suggest';
const OTHER = 'Something else (in the notes)';
const CAKE_MSG_KINDS = ['cake', 'fondant', 'tier', 'cheesecake', 'bento'];

const pad = (n: number) => String(n).padStart(2, '0');
const isoDate = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parseDate = (v: string) => {
  const [y, m, d] = v.split('-').map(Number);
  return new Date(y, m - 1, d);
};
const niceDate = (d: Date) =>
  d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

export function initOrderForm() {
  const dataEl = document.getElementById('order-data');
  const form = document.getElementById('order-form') as HTMLFormElement | null;
  if (!dataEl || !form) return;
  const data: Data = JSON.parse(dataEl.textContent || '{}');

  const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
  const kindSel = $<HTMLSelectElement>('kind');
  const flavourSel = $<HTMLSelectElement>('flavour');
  const flavourText = $<HTMLInputElement>('flavour-text');
  const weightWrap = $<HTMLElement>('weight-wrap');
  const qtyWrap = $<HTMLElement>('qty-wrap');
  const priceHint = $<HTMLElement>('price-hint');
  const cakeMsgWrap = $<HTMLElement>('cake-msg-wrap');
  const dateInput = $<HTMLInputElement>('date');
  const dateHint = $<HTMLElement>('date-hint');
  const deliveryWrap = $<HTMLElement>('delivery-wrap');
  const deliveryNote = $<HTMLElement>('delivery-note');
  const defaultDeliveryNote = deliveryNote.textContent || '';
  const preview = $<HTMLElement>('preview');

  const kind = () => data.kinds.find((k) => k.value === kindSel.value);
  const mode = () => (form.querySelector('input[name="mode"]:checked') as HTMLInputElement)?.value || 'pickup';

  function minDate(k?: Kind) {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + (k?.fondant ? data.noticeDaysFondant : data.noticeDays));
    while (data.closedDays.includes(d.getDay())) d.setDate(d.getDate() + 1);
    return d;
  }

  function fillFlavours(k?: Kind) {
    const list = k?.flavours === 'cake' ? data.cakeFlavours : k?.flavours === 'cheesecake' ? data.cheesecakeFlavours : null;
    const wrap = $<HTMLElement>('flavour-wrap');
    if (!list) {
      flavourSel.hidden = true;
      flavourText.hidden = false;
      wrap.querySelector('label')!.setAttribute('for', 'flavour-text');
      return;
    }
    const prev = flavourSel.value;
    flavourSel.innerHTML = '';
    for (const f of ['', ...list, SUGGEST, OTHER]) {
      const o = document.createElement('option');
      o.value = f;
      o.textContent = f || 'Choose a flavour';
      flavourSel.append(o);
    }
    if ([...list, SUGGEST, OTHER].includes(prev)) flavourSel.value = prev;
    flavourSel.hidden = false;
    flavourText.hidden = true;
    wrap.querySelector('label')!.setAttribute('for', 'flavour');
  }

  function syncKind() {
    const k = kind();
    fillFlavours(k);
    const byWeight = !k || k.unit === 'weight';
    weightWrap.hidden = !byWeight;
    qtyWrap.hidden = byWeight;
    priceHint.textContent = k?.priceHint || (k ? 'Sneha will share the price on WhatsApp.' : '');
    cakeMsgWrap.hidden = !!k && !CAKE_MSG_KINDS.includes(k.value);
    const min = minDate(k);
    dateInput.min = isoDate(min);
    dateHint.textContent = k?.fondant
      ? `Fondant cakes need 3 days notice. Earliest date: ${niceDate(min)}. Closed on Thursdays.`
      : `Order at least 2 days ahead. Earliest date: ${niceDate(min)}. Closed on Thursdays.`;
    syncDelivery();
  }

  function syncDelivery() {
    const k = kind();
    const isDelivery = mode() === 'delivery';
    deliveryWrap.hidden = !isDelivery;
    if (isDelivery && k && !k.deliverable) {
      deliveryNote.classList.add('warn');
      deliveryNote.textContent = `${k.label} is usually pickup only. Sneha will tell you on WhatsApp if delivery is possible for your order.`;
    } else {
      deliveryNote.classList.remove('warn');
      deliveryNote.textContent = defaultDeliveryNote;
    }
  }

  function dateProblem(): string {
    if (!dateInput.value) return 'Choose the date you need it.';
    const d = parseDate(dateInput.value);
    if (data.closedDays.includes(d.getDay())) return 'The studio is closed on Thursdays. Choose another day.';
    const min = minDate(kind());
    if (d < min) return `That’s too soon. The earliest date is ${niceDate(min)}.`;
    return '';
  }

  function value(name: string) {
    const el = form.elements.namedItem(name) as HTMLInputElement | RadioNodeList | null;
    if (!el) return '';
    return ('value' in el ? el.value : '').trim();
  }

  function buildMessage() {
    const k = kind();
    const lines: string[] = ['Hi Sneha! I’d like to place an order.', ''];
    const add = (label: string, v: string) => v && lines.push(`*${label}:* ${v}`);
    add('Item', k?.label || '');
    const flav = k?.flavours ? flavourSel.value : flavourText.value.trim();
    add(k?.flavours ? 'Flavour' : 'Type', flav);
    if (k) add(k.unit === 'weight' ? 'Weight' : 'Quantity', k.unit === 'weight' ? value('weight') : value('qty'));
    add('Design', value('design'));
    if (($<HTMLInputElement>('refphoto')).checked) add('Reference photo', 'I’ll send it here');
    if (!cakeMsgWrap.hidden && value('cakeMessage')) add('Message on cake', `“${value('cakeMessage')}”`);
    if (dateInput.value) add('Date', niceDate(parseDate(dateInput.value)));
    add('Time', value('slot'));
    add(mode() === 'delivery' ? 'Delivery to' : 'Pickup', mode() === 'delivery' ? value('area') || '(area to confirm)' : 'From the Bhosari studio');
    add('Name', value('name'));
    add('Notes', value('notes'));
    if (($<HTMLInputElement>('agree')).checked) lines.push('', 'I’ve read the order policies.');
    return lines.join('\n');
  }

  function update() {
    preview.textContent = buildMessage();
  }

  function setError(id: string, msg: string, field?: HTMLElement) {
    const el = $<HTMLElement>(id);
    el.textContent = msg || el.textContent;
    el.hidden = !msg;
    field?.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  }

  function validate() {
    const checks = [
      setError('kind-error', kindSel.value ? '' : 'Choose what you’d like to order.', kindSel),
      setError('date-error', dateProblem(), dateInput),
      setError('area-error', mode() === 'delivery' && !value('area') ? 'Add the area so Sneha can work out the delivery charge.' : '', $('area')),
      setError('name-error', value('name') ? '' : 'Add your name.', $('name')),
      setError('agree-error', $<HTMLInputElement>('agree').checked ? '' : 'Tick the box to confirm you’ve read the policies.', $('agree')),
    ];
    if (checks.every(Boolean)) return true;
    const first = form.querySelector<HTMLElement>('[aria-invalid="true"]');
    first?.focus();
    first?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return false;
  }

  // Prefill from links like /order/?kind=cheesecake&flavour=Blueberry
  const params = new URLSearchParams(location.search);
  if (params.get('kind') && data.kinds.some((k) => k.value === params.get('kind'))) kindSel.value = params.get('kind')!;
  syncKind();
  if (params.get('flavour')) flavourSel.value = params.get('flavour')!;

  kindSel.addEventListener('change', syncKind);
  form.addEventListener('change', (e) => {
    if ((e.target as HTMLInputElement).name === 'mode') syncDelivery();
    if (e.target === dateInput && dateInput.value) setError('date-error', dateProblem(), dateInput);
    update();
  });
  form.addEventListener('input', update);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    update();
    if (!validate()) return;
    const url = `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(buildMessage())}`;
    const win = window.open(url, '_blank', 'noopener');
    if (!win) location.href = url;
  });
  update();
}
