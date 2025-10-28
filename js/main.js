// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // ELEMENTY
  const langToggle = document.getElementById('langToggle');
  const themeToggle = document.getElementById('themeToggle');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const sendBtn = document.getElementById('sendBtn');
  const downloadCv = document.getElementById('downloadCv');
  const formStatus = document.getElementById('formStatus');

  const translations = {
    en: {
      heroTitle: "Bartłomiej Białobrzewski",
      heroText: "Programming student — Junior Developer experienced in building mobile app interfaces (Swift) and working with data logic (C++, SQL, JavaScript).",
      heroCta: "See projects",
      heroGithub: "GitHub",
      aboutTitle: "About Me",
      aboutText: "I've been programming since 2022, starting from HTML/CSS/JS basics and Python. Later, I focused on Swift, developing a commercial iOS app with advanced UI and data logic. I also have experience in C++ from my studies. I’m currently developing as a full-stack developer, combining UI work, SQL databases, and application logic.",
      skillsTitle: "Skills",
      projectsTitle: "Projects",
      contactTitle: "Contact",
      contactC: "Contact",
      contactMsg: "If you'd like to discuss internship documentation or confirm practice hours — feel free to send me an email.",
      sendBtn: "Send (demo)",
      downloadCv: "Download CV (PDF)",
      portfolioDesc: "A responsive personal portfolio built with HTML, CSS, and JavaScript, featuring language switching and light/dark modes.",
      vocabinDesc: "A commercial iOS vocabulary-learning app built with Swift, Core Data, and Firestore synchronization.",
      commercial: "Commercial app (repository not shared)",
      seeRepo: "View repository",
      location: "Gdansk, Poland"
    },
    pl: {
      heroTitle: "Bartłomiej Białobrzewski",
      heroText: "Student kierunku Programowanie — Junior Developer z doświadczeniem w projektowaniu interfejsów aplikacji mobilnych (Swift) i pracy z logiką danych (C++, SQL, JavaScript).",
      heroCta: "Zobacz projekty",
      heroGithub: "GitHub",
      aboutTitle: "O mnie",
      aboutText: "Programuję od 2022 roku. Zaczynałem od HTML/CSS/JS i Pythona, a następnie specjalizowałem się w Swift, tworząc komercyjną aplikację iOS z rozbudowanym interfejsem i logiką danych. Mam też doświadczenie w C++ zdobyte na studiach. Obecnie rozwijam się jako programista full-stack, łącząc pracę z interfejsami, bazami danych SQL i logiką aplikacji.",
      skillsTitle: "Umiejętności",
      projectsTitle: "Projekty",
      contactTitle: "Kontakt",
      contactMsg: "Jeśli chcesz uzyskać dokumenty potrzebne do praktyk lub potwierdzenie godzin — napisz maila.",
      sendBtn: "Wyślij (demo)",
      downloadCv: "Pobierz CV (PDF)",
      portfolioDesc: "Responsywna strona portfolio w HTML, CSS i JavaScript z możliwością zmiany języka i trybu kolorystycznego.",
      vocabinDesc: "Komercyjna aplikacja iOS do nauki słownictwa (Swift, Core Data, Firestore).",
      commercial: "Aplikacja komercyjna (repozytorium niedostępne)",
      seeRepo: "Zobacz repozytorium",
      location: "Gdańsk, Polska"
    }
  };

  // Mapa selektorów -> klucze w translations
  const map = [
    { sel: '#hero h1', key: 'heroTitle' },
    { sel: '#hero .lead', key: 'heroText' },
    { sel: '#hero .cta', key: 'heroCta' },
    { sel: '#hero .cta.ghost', key: 'heroGithub' },
    { sel: '#aboutTitle', key: 'aboutTitle' },
    { sel: '#about p', key: 'aboutText' },
    { sel: '#skillsTitle', key: 'skillsTitle' },
    { sel: '#projectsTitle', key: 'projectsTitle' },
    { sel: '#contactTitle', key: 'contactTitle' },
    { sel: '#contactC', key: 'contactTitle' },
    { sel: '#contact .container > p', key: 'contactMsg' }, // pierwsze p w sekcji kontakt
    { sel: '#projects .project:nth-of-type(1) .project-info p', key: 'portfolioDesc' }, // opis projektu 1
    { sel: '#projects .project:nth-of-type(2) .project-info p', key: 'vocabinDesc' }, // opis projektu 2
    { sel: '#location', key: 'location' }
  ];

  // Funkcja, która ustawia teksty bez wywalenia błędów
  function applyLang(lang) {
    const dict = translations[lang] || translations.pl;
    map.forEach(item => {
      const el = document.querySelector(item.sel);
      if (el) {
        el.textContent = dict[item.key] || '';
      } else {
        // nie kryjemy błędów, wypiszemy w konsoli dla debugowania
        // console.debug('Missing element for selector:', item.sel);
      }
    });

    // Przyciski i linki obsługiwane osobno
    if (sendBtn) sendBtn.textContent = dict.sendBtn;
    if (downloadCv) downloadCv.textContent = dict.downloadCv;

    // link do repozytorium (jeśli chcesz zmieniać tekst linku)
    const repoLink = document.querySelector('#projects .project:nth-of-type(1) a');
    if (repoLink) repoLink.textContent = dict.seeRepo;

    // toggle button text: pokaż drugi język jako etykietę
    if (langToggle) langToggle.textContent = (lang === 'en') ? 'PL' : 'EN';
  }

  // Inicjalizacja języka (domyślnie PL)
  let currentLang = localStorage.getItem('lang') || 'pl';
  applyLang(currentLang);

  // Obsługa kliknięcia w toggle języka
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = (currentLang === 'pl') ? 'en' : 'pl';
      localStorage.setItem('lang', currentLang);
      applyLang(currentLang);
    });
  } else {
    console.warn('langToggle button not found (#langToggle).');
  }

  // --- menu toggle (mobilne) ---
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      if (nav.style.display === 'flex') {
        nav.style.display = '';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.gap = '1rem';
      }
    });
  }

  // --- theme toggle (prosty) ---
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = localStorage.getItem('darkMode') === '1';
      if (isDark) {
        localStorage.removeItem('darkMode');
        document.documentElement.style.removeProperty('--bg');
        document.documentElement.style.removeProperty('--card');
        document.documentElement.style.removeProperty('--text');
        document.documentElement.style.removeProperty('--muted');
      } else {
        localStorage.setItem('darkMode', '1');
        document.documentElement.style.setProperty('--bg','#1b1716');
        document.documentElement.style.setProperty('--card','#241f1f');
        document.documentElement.style.setProperty('--text','#f4eaea');
        document.documentElement.style.setProperty('--muted','#a49a96');
      }
    });
  }

  // --- formularz demo ---
  if (sendBtn) {
    sendBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('name')?.value?.trim();
      const email = document.getElementById('email')?.value?.trim();
      if (!name || !email) {
        formStatus.textContent = (currentLang === 'pl') ? 'Uzupełnij imię i email.' : 'Please fill in name and email.';
        return;
      }
      formStatus.textContent = (currentLang === 'pl') ? 'Wiadomość wysłana (demo).' : 'Message sent (demo).';
      setTimeout(() => { formStatus.textContent = ''; }, 3500);
    });
  }

  // --- pobieranie CV (demo) ---
  if (downloadCv) {
    downloadCv.addEventListener('click', (e) => {
      e.preventDefault();
      const pdfUrl = 'https://raw.githubusercontent.com/Bsheskee/portfolio-website/main/CV.pdf';
      window.open(pdfUrl, '_blank');
    });
  }
});
