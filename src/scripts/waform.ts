// Simple WhatsApp enquiry forms (workshops, gifting).
// <form data-wa-form data-intro="First line of the message"> … fields with data-label="Label" …
export function initWaForms(whatsapp: string) {
  document.querySelectorAll<HTMLFormElement>('form[data-wa-form]').forEach((form) => {
    form.noValidate = true;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let ok = true;
      form.querySelectorAll<HTMLInputElement>('[required]').forEach((el) => {
        const err = form.querySelector<HTMLElement>(`[data-error-for="${el.id}"]`);
        const bad = el.type === 'checkbox' ? !el.checked : !el.value.trim();
        el.setAttribute('aria-invalid', String(bad));
        if (err) err.hidden = !bad;
        if (bad && ok) {
          el.focus();
          ok = false;
        }
      });
      if (!ok) return;

      const lines = [form.dataset.intro || 'Hi Sneha!', ''];
      const seen = new Set<string>();
      form.querySelectorAll<HTMLInputElement>('[data-label]').forEach((el) => {
        if (el.type === 'radio') {
          if (seen.has(el.name)) return;
          seen.add(el.name);
          const checked = form.querySelector<HTMLInputElement>(`input[name="${el.name}"]:checked`);
          if (checked?.value) lines.push(`*${el.dataset.label}:* ${checked.value}`);
          return;
        }
        if (el.type === 'date' && el.value) {
          const [y, m, d] = el.value.split('-').map(Number);
          const nice = new Date(y, m - 1, d).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
          lines.push(`*${el.dataset.label}:* ${nice}`);
          return;
        }
        if (el.value.trim()) lines.push(`*${el.dataset.label}:* ${el.value.trim()}`);
      });
      const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
      const win = window.open(url, '_blank', 'noopener');
      if (!win) location.href = url;
    });
  });
}
