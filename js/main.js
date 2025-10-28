document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('langToggle');
  const themeToggle = document.getElementById('themeToggle');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const sendBtn = document.getElementById('sendBtn');
  const downloadCv = document.getElementById('downloadCv');
  const formStatus = document.getElementById('formStatus');

  const translations = {
    en: {
      // --- MENU ---
      navAbout: "About",
      navSkills: "Skills",
      navProjects: "Projects",
      navContact: "Contact",

      // --- HERO ---
      heroTitle: "Bartłomiej Białobrzewski",
      heroText: "Programming student — Junior Developer experienced in building mobile app interfaces (Swift) and working with data logic (C++, SQL, JavaScript).",
      heroCta: "See projects",
      heroGithub: "GitHub",

      // --- SECTIONS ---
      aboutTitle: "About Me",
      aboutText: "I've been programming since 2022, starting from HTML/CSS/JS basics and Python. Later, I focused on Swift, developing a commercial iOS app with advanced UI and data logic. I also have experience in C++ from my studies. I’m currently developing as a full-stack developer, combining UI work, SQL databases, and application logic.",
      skillsTitle: "Skills",
      projectsTitle: "Projects",
      contactTitle: "Contact",
      contactC: "Contact",
      contactMsg: "If you'd like to discuss internship documentation or confirm practice hours — feel free to send me an email.",
      sendBtn: "Send (demo)",
      downloadCv: "Download CV (PDF)",

      // --- PROJECTS ---
      studentProjectTitle: "Student Projects",
      studentGradesTitle: "Student Grade Management System",
      studentGradesDesc: "Group project in C++ for managing student grades — reading data from file, calculating averages and final grades, and searching students.",
      studentTech: "Technologies: C++, STL, I/O streams, File Handling",

      portfolioTitle: "Portfolio Website",
      portfolioDesc: "A responsive personal portfolio built with HTML, CSS, and JavaScript, featuring language switching and light/dark modes.",
      portfolioTech: "Technologies: HTML, CSS, JavaScript, TypeScript",

      vocabinTitle: "Vocabin — iOS App",
      vocabinDesc: "A commercial iOS vocabulary-learning app built with Swift, Core Data, and Firestore synchronization.",
      vocabinTech: "Technologies: Swift, Core Data, Firestore, MVVM",
      commercial: "Commercial app (repository not shared)",
      seeRepo: "View repository",

      location: "Gdansk, Poland"
    },

    pl: {
      // --- MENU ---
      navAbout: "O mnie",
      navSkills: "Umiejętności",
      navProjects: "Projekty",
      navContact: "Kontakt",

      // --- HERO ---
      heroTitle: "Bartłomiej Białobrzewski",
      heroText: "Student kierunku Programowanie — Junior Developer z doświadczeniem w projektowaniu interfejsów aplikacji mobilnych (Swift) i pracy z logiką danych (C++, SQL, JavaScript).",
      heroCta: "Zobacz projekty",
      heroGithub: "GitHub",

      // --- SEKCJE ---
      aboutTitle: "O mnie",
      aboutText: "Programuję od 2022 roku. Zaczynałem od HTML/CSS/JS i Pythona, a następnie specjalizowałem się w Swift, tworząc komercyjną aplikację iOS z rozbudowanym interfejsem i logiką danych. Mam też doświadczenie w C++ zdobyte na studiach. Obecnie rozwijam się jako programista full-stack, łącząc pracę z interfejsami, bazami danych SQL i logiką aplikacji.",
      skillsTitle: "Umiejętności",
      projectsTitle: "Projekty",
      contactTitle: "Kontakt",
      contactC: "Kontakt",
      contactMsg: "Jeśli chcesz uzyskać dokumenty potrzebne do praktyk lub potwierdzenie godzin — napisz maila.",
      sendBtn: "Wyślij (demo)",
      downloadCv: "Pobierz CV (PDF)",

      // --- PROJEKTY ---
      studentProjectTitle: "Projekty studenckie",
      studentGradesTitle: "System zarządzania ocenami studentów",
      studentGradesDesc: "Projekt zespołowy w C++ umożliwiający zarządzanie ocenami studentów — wczytywanie danych z pliku, obliczanie średnich, ocen końcowych oraz wyszukiwanie studentów.",
      studentTech: "Technologie: C++, STL, I/O streams, File Handling",

      portfolioTitle: "Strona portfolio",
      portfolioDesc: "Responsywna strona portfolio w HTML, CSS i JavaScript z możliwością zmiany języka i trybu kolorystycznego.",
      portfolioTech: "Technologie: HTML, CSS, JavaScript, TypeScript",

      vocabinTitle: "Vocabin — aplikacja iOS",
      vocabinDesc: "Komercyjna aplikacja iOS do nauki słownictwa (Swift, Core Data, Firestore).",
      vocabinTech: "Technologie: Swift, Core Data, Firestore, MVVM",
      commercial: "Aplikacja komercyjna (repozytorium niedostępne)",
      seeRepo: "Zobacz repozytorium",

      location: "Gdańsk, Polska"
    }
  };

  const map = [
    // --- MENU LINKS ---
    { sel: 'nav a[href="#about"]', key: 'navAbout' },
    { sel: 'nav a[href="#skills"]', key: 'navSkills' },
    { sel: 'nav a[href="#projects"]', key: 'navProjects' },
    { sel: 'nav a[href="#contact"]', key: 'navContact' },

    // --- HERO ---
    { sel: '#hero h1', key: 'heroTitle' },
    { sel: '#hero .lead', key: 'heroText' },
    { sel: '#hero .cta', key: 'heroCta' },
    { sel: '#hero .cta.ghost', key: 'heroGithub' },

    // --- ABOUT / SKILLS / CONTACT ---
    { sel: '#aboutTitle', key: 'aboutTitle' },
    { sel: '#about p', key: 'aboutText' },
    { sel: '#skillsTitle', key: 'skillsTitle' },
    { sel: '#projectsTitle', key: 'projectsTitle' },
    { sel: '#contactTitle', key: 'contactTitle' },
    { sel: '#contactC', key: 'contactC' },
    { sel: '#contact .container > p', key: 'contactMsg' },

    // --- PROJECTS ---
    { sel: '.section-subtitle:first-of-type', key: 'studentProjectTitle' },
    { sel: '#projects .project:nth-of-type(1) h3', key: 'studentGradesTitle' },
    { sel: '#projects .project:nth-of-type(1) p', key: 'studentGradesDesc' },
    { sel: '#projects .project:nth-of-type(1) .small', key: 'studentTech' },

    { sel: '#projects .project:nth-of-type(2) h3', key: 'portfolioTitle' },
    { sel: '#projects .project:nth-of-type(2) p', key: 'portfolioDesc' },
    { sel: '#projects .project:nth-of-type(2) .small', key: 'portfolioTech' },

    { sel: '#projects .project:nth-of-type(3) h3', key: 'vocabinTitle' },
    { sel: '#projects .project:nth-of-type(3) p', key: 'vocabinDesc' },
    { sel: '#projects .project:nth-of-type(3) .small', key: 'vocabinTech' },
    { sel: '#projects .project:nth-of-type(3) p:last-of-type', key: 'commercial' },

    { sel: '#location', key: 'location' }
  ];

  function applyLang(lang) {
    const dict = translations[lang] || translations.pl;
    map.forEach(item => {
      const el = document.querySelector(item.sel);
      if (el) el.textContent = dict[item.key] || '';
    });

    document.querySelectorAll('#projects a').forEach(a => a.textContent = dict.seeRepo);
    if (sendBtn) sendBtn.textContent = dict.sendBtn;
    if (downloadCv) downloadCv.textContent = dict.downloadCv;
    if (langToggle) langToggle.textContent = lang === 'en' ? 'PL' : 'EN';
  }

  let currentLang = localStorage.getItem('lang') || 'pl';
  applyLang(currentLang);

  langToggle?.addEventListener('click', () => {
    currentLang = currentLang === 'pl' ? 'en' : 'pl';
    localStorage.setItem('lang', currentLang);
    applyLang(currentLang);
  });

  // Theme toggle – dark mode
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
});
