// main.ts (opcjonalnie) — prosty przykład (musisz zainicjować npm + tsc)
const el = document.getElementById('hero');
if (el) {
  el.setAttribute('data-loaded', new Date().toISOString());
}
