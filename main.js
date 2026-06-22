//  TERMINAL ANIMATION 

const TERM_LINES = [
  { type: 'cmd',   text: 'whoami' },
  { type: 'out',   html: '<span class="t-green">fred-madzou</span>' },
  { type: 'blank' },
  { type: 'cmd',   text: 'cat stack.json' },
  { type: 'out',   html: '<span class="t-muted">{</span>' },
  { type: 'out',   html: '  <span class="t-purple">"mastered"</span><span class="t-muted">:</span> [<span class="t-green">"Python"</span>, <span class="t-green">"Django"</span>, <span class="t-green">"Docker"</span>],' },
  { type: 'out',   html: '  <span class="t-purple">"learning"</span><span class="t-muted">:</span> [<span class="t-orange">"Node.js"</span>, <span class="t-orange">"React"</span>, <span class="t-orange">"K8s"</span>]' },
  { type: 'out',   html: '<span class="t-muted">}</span>' },
  { type: 'blank' },
  { type: 'cmd',   text: 'ls projects/' },
  { type: 'out',   html: '<span class="t-blue">G-360/</span>          <span class="t-blue">La-Conoscenza/</span>' },
  { type: 'out',   html: '<span class="t-blue">Vinted-Monitor/</span>  <span class="t-blue">LinguaLab/</span>  <span class="t-blue">BlueHarbor/</span>' },
  { type: 'blank' },
  { type: 'cmd',   text: 'echo $STATUS' },
  { type: 'out',   html: '<span class="t-green">Disponible · stage / apprendistato ✓</span>' },
];

function termDelay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function runTerminal() {
  const body = document.getElementById('terminalBody');
  if (!body) return;
  body.innerHTML = '';

  for (const line of TERM_LINES) {
    if (line.type === 'blank') {
      const el = document.createElement('span');
      el.className = 'term-line';
      el.innerHTML = ' ';
      body.appendChild(el);
      await termDelay(140);
      continue;
    }

    if (line.type === 'cmd') {
      const el = document.createElement('span');
      el.className = 'term-line';
      const prompt = document.createElement('span');
      prompt.className = 't-prompt';
      prompt.textContent = '$ ';
      el.appendChild(prompt);
      const cursor = document.createElement('span');
      cursor.className = 'term-cursor';
      el.appendChild(cursor);
      body.appendChild(el);
      body.scrollTop = body.scrollHeight;

      for (const ch of line.text) {
        cursor.insertAdjacentText('beforebegin', ch);
        body.scrollTop = body.scrollHeight;
        await termDelay(30 + Math.random() * 50);
      }
      cursor.remove();
      await termDelay(320);
    }

    if (line.type === 'out') {
      const el = document.createElement('span');
      el.className = 'term-line';
      el.innerHTML = line.html;
      body.appendChild(el);
      body.scrollTop = body.scrollHeight;
      await termDelay(55);
    }
  }

  // blink cursor at end then restart
  const finalLine = document.createElement('span');
  finalLine.className = 'term-line';
  const fp = document.createElement('span');
  fp.className = 't-prompt';
  fp.textContent = '$ ';
  finalLine.appendChild(fp);
  const fc = document.createElement('span');
  fc.className = 'term-cursor';
  finalLine.appendChild(fc);
  body.appendChild(finalLine);

  await termDelay(5000);
  await runTerminal();
}

runTerminal();

// ── SLIDESHOWS ────────────────────────────────────────────────────────────────

function initSlideshow(id, intervalMs) {
  const container = document.getElementById(id);
  if (!container) return;
  const slides = Array.from(container.querySelectorAll('.slide'));
  const dots   = Array.from(container.querySelectorAll('.slide-dot'));
  let current  = 0;

  setInterval(() => {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }, intervalMs);
}

initSlideshow('vinSlides', 3000);

//  TRADUCTIONS — FR / IT / EN

const translations = {
  fr: {
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.formation": "Formation",
    "nav.contact": "Contact",

    "hero.badge": "Disponible — stage / apprendistato",
    "hero.title": "Bonjour, je suis<br><em>Frédéric Franchir</em>",
    "hero.desc":
      "Étudiant passionné en architecture de solutions web, je conçois des applications robustes et scalables qui répondent aux vrais besoins des utilisateurs et des entreprises.",
    "hero.cta1": "Voir mes projets",
    "hero.cta2": "Me contacter",

    "about.label": "À propos",
    "about.title": "Qui suis-je ?",
    "about.p1":
      "Actuellement en formation en <strong>Architecture de solutions web</strong> à l'ITS ICT Piemonte (Torino), je m'intéresse à la conception d'applications complètes, de la définition de l'architecture technique jusqu'au déploiement en production.",
    "about.p2":
      "J'ai développé cinq projets concrets : <strong>G-360</strong>, une application de gestion commerciale pour PME, <strong>La Conoscenza</strong>, un site pour un centre de langue italienne, ainsi que <strong>Vinted Monitor</strong>, <strong>LinguaLab</strong> et <strong>BlueHarbor</strong>.",
    "about.p3":
      "Je cherche à mettre en pratique mes compétences dans un environnement professionnel stimulant via un stage, avec pour ambition à long terme d'évoluer vers un rôle <strong>DevOps Engineer</strong>.",
    "about.stat1": "Projets livrés",
    "about.stat2": "Ans d'études",
    "about.stat3": "Curiosité",

    "skills.label": "Compétences",
    "skills.title": "Mon arsenal technique",
    "skills.card1": "Architecture & Conception",
    "skills.card2": "Front-end",
    "skills.card3": "Back-end",
    "skills.card4": "Bases de données",
    "skills.card5": "DevOps & Cloud",
    "skills.card6": "Design & Outils",
    "skills.mastered": "Maîtrisé",
    "skills.learning": "En apprentissage",

    "projects.label": "Projets",
    "projects.title": "Ce que j'ai construit",
    "projects.github": "GitHub",
    "projects.demo": "Démo",

    "p1.tag": "Application Web · Gestion commerciale",
    "p1.title": "G-360",
    "p1.desc":
      "Application web dédiée aux PME pour centraliser la gestion commerciale : suivi des clients, devis, factures, tableau de bord analytique et reporting. Architecture modulaire MVC.",

    "p2.tag": "Site Web · Centre de langue",
    "p2.title": "La Conoscenza",
    "p2.desc":
      "Site vitrine pour un centre de langue italienne basé à Brazzaville : cours, certifications CILS B2 et accompagnement pour les universités italiennes.",

    "p3.tag": "Automatisation · Python",
    "p3.title": "Vinted Monitor",
    "p3.desc":
      "Outil de veille automatique sur Vinted. Surveille les annonces en temps réel par mots-clés et critères de prix, puis envoie des alertes instantanées.",

    "p4.tag": "Éducation · Web App",
    "p4.title": "LinguaLab",
    "p4.desc":
      "Application web d'apprentissage des langues avec modules de vocabulaire interactifs, exercices grammaticaux et suivi de progression personnalisé.",

    "p5.tag": "Application Web",
    "p5.title": "BlueHarbor",
    "p5.desc":
      "Plateforme web moderne avec interface épurée, conçue pour offrir une expérience utilisateur fluide et des fonctionnalités robustes.",

    "formation.label": "Formation",
    "formation.title": "Mon parcours",
    "formation.date1": "2026 — En cours",
    "formation.ongoing": "En cours",
    "formation.school1": "ITS ICT PIEMONTE · Torino",
    "formation.desc1":
      "Cours biennal post-diplôme axé sur la conception et l'implémentation d'architectures web complexes, scalables et sécurisées. Technologies web, bases de données, intégration de services. Diplôme reconnu au niveau européen (5e niveau EQF).",
    "formation.degree2": "Laurea in Informatica Gestionale",
    "formation.school2": "ISM · Dakar (parcours en ligne)",
    "formation.desc2":
      "Formation axée sur l'intégration entre informatique et gestion d'entreprise. Systèmes d'information, gestion de données, analyse de processus métier et développement de solutions digitales orientées business.",
    "formation.degree3": "Baccalauréat en sciences économiques",
    "formation.school3": "CL-PN · Pointe-Noire, Congo",
    "formation.desc3": "Série BG.",
    "formation.degree4": "Baccalauréat en sciences mathématiques",
    "formation.school4": "Lycée Jean Baptiste Taty Loutard · Pointe-Noire, Congo",
    "formation.desc4": "Série C.",

    "contact.label": "Contact",
    "contact.title": "Travaillons ensemble",
    "contact.intro":
      "Ouvert aux opportunités de stage, d'alternance ou de collaboration sur des projets ambitieux. N'hésite pas à me laisser un message !",
    "contact.phone": "Téléphone",
    "contact.location": "Localisation",
    "contact.fname": "Votre nom",
    "contact.femail": "Votre email",
    "contact.fsubject": "Sujet",
    "contact.fmessage": "Message",
    "contact.pname": "Jean Dupont",
    "contact.pemail": "jean@exemple.com",
    "contact.psubject": "Proposition de stage / Collaboration...",
    "contact.pmessage": "Bonjour, je souhaite...",
    "contact.send": "Envoyer le message",
    "contact.success": "✓ Merci pour votre message ! Je vous répondrai très prochainement.",
  },

  it: {
    "nav.about": "Chi sono",
    "nav.skills": "Competenze",
    "nav.projects": "Progetti",
    "nav.formation": "Formazione",
    "nav.contact": "Contatto",

    "hero.badge": "Disponibile — stage / apprendistato",
    "hero.title": "Ciao, sono<br><em>Frédéric Franchir</em>",
    "hero.desc":
      "Studente appassionato di architettura di soluzioni web, progetto applicazioni robuste e scalabili che rispondono ai veri bisogni degli utenti e delle aziende.",
    "hero.cta1": "Vedi i miei progetti",
    "hero.cta2": "Contattami",

    "about.label": "Chi sono",
    "about.title": "Chi sono?",
    "about.p1":
      "Attualmente in formazione in <strong>Architettura di soluzioni web</strong> presso ITS ICT Piemonte (Torino), mi interesso alla progettazione di applicazioni complete, dalla definizione dell'architettura tecnica fino al deploy in produzione.",
    "about.p2":
      "Ho sviluppato cinque progetti concreti: <strong>G-360</strong>, un'applicazione di gestione commerciale per PMI, <strong>La Conoscenza</strong>, un sito per un centro di lingua italiana, oltre a <strong>Vinted Monitor</strong>, <strong>LinguaLab</strong> e <strong>BlueHarbor</strong>.",
    "about.p3":
      "Cerco di mettere in pratica le mie competenze in un ambiente professionale stimolante tramite uno stage, con l'obiettivo a lungo termine di evolvermi verso il ruolo di <strong>DevOps Engineer</strong>.",
    "about.stat1": "Progetti consegnati",
    "about.stat2": "Anni di studi",
    "about.stat3": "Curiosità",

    "skills.label": "Competenze",
    "skills.title": "Il mio arsenale tecnico",
    "skills.card1": "Architettura & Progettazione",
    "skills.card2": "Front-end",
    "skills.card3": "Back-end",
    "skills.card4": "Database",
    "skills.card5": "DevOps & Cloud",
    "skills.card6": "Design & Strumenti",
    "skills.mastered": "Padroneggiato",
    "skills.learning": "In apprendimento",

    "projects.label": "Progetti",
    "projects.title": "Cosa ho costruito",
    "projects.github": "GitHub",
    "projects.demo": "Demo",

    "p1.tag": "Applicazione Web · Gestione commerciale",
    "p1.title": "G-360",
    "p1.desc":
      "Applicazione web per PMI per centralizzare la gestione commerciale: clienti, preventivi, fatture, dashboard analitica e reporting. Architettura modulare MVC.",

    "p2.tag": "Sito Web · Centro linguistico",
    "p2.title": "La Conoscenza",
    "p2.desc":
      "Sito vetrina per un centro di lingua italiana a Brazzaville: corsi, certificazioni CILS B2 e supporto per le università italiane.",

    "p3.tag": "Automazione · Python",
    "p3.title": "Vinted Monitor",
    "p3.desc":
      "Strumento di monitoraggio automatico su Vinted. Sorveglia gli annunci in tempo reale per parole chiave e criteri di prezzo, inviando notifiche istantanee.",

    "p4.tag": "Educazione · Web App",
    "p4.title": "LinguaLab",
    "p4.desc":
      "Applicazione web per l'apprendimento delle lingue con moduli di vocabolario interattivi, esercizi grammaticali e monitoraggio dei progressi.",

    "p5.tag": "Applicazione Web",
    "p5.title": "BlueHarbor",
    "p5.desc":
      "Piattaforma web moderna con interfaccia pulita, progettata per offrire un'esperienza utente fluida e funzionalità robuste.",

    "formation.label": "Formazione",
    "formation.title": "Il mio percorso",
    "formation.date1": "2026 — In corso",
    "formation.ongoing": "In corso",
    "formation.school1": "ITS ICT PIEMONTE · Torino",
    "formation.desc1":
      "Corso biennale post-diploma focalizzato sulla progettazione e implementazione di architetture web complesse, scalabili e sicure. Diploma riconosciuto a livello europeo (5° livello EQF).",
    "formation.degree2": "Laurea in Informatica Gestionale",
    "formation.school2": "ISM · Dakar (percorso online)",
    "formation.desc2":
      "Corso di laurea focalizzato sull'integrazione tra informatica e gestione aziendale, con competenze in sistemi informativi, gestione dei dati e sviluppo di soluzioni digitali.",
    "formation.degree3": "Diploma in scienze economiche",
    "formation.school3": "CL-PN · Pointe-Noire, Congo",
    "formation.desc3": "Opzione: BG.",
    "formation.degree4": "Diploma in scienze matematiche",
    "formation.school4": "Lycée Jean Baptiste Taty Loutard · Pointe-Noire, Congo",
    "formation.desc4": "Opzione: C.",

    "contact.label": "Contatto",
    "contact.title": "Lavoriamo insieme",
    "contact.intro":
      "Aperto a opportunità di stage, alternanza o collaborazione su progetti ambiziosi. Non esitare a lasciarmi un messaggio!",
    "contact.phone": "Telefono",
    "contact.location": "Posizione",
    "contact.fname": "Il tuo nome",
    "contact.femail": "La tua email",
    "contact.fsubject": "Oggetto",
    "contact.fmessage": "Messaggio",
    "contact.pname": "Mario Rossi",
    "contact.pemail": "mario@esempio.com",
    "contact.psubject": "Proposta di stage / Collaborazione...",
    "contact.pmessage": "Buongiorno, vorrei...",
    "contact.send": "Invia messaggio",
    "contact.success": "✓ Grazie per il tuo messaggio! Ti risponderò al più presto.",
  },

  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.formation": "Education",
    "nav.contact": "Contact",

    "hero.badge": "Available — internship / apprenticeship",
    "hero.title": "Hello, I'm<br><em>Frédéric Franchir</em>",
    "hero.desc":
      "Passionate student in web solution architecture, I design robust and scalable applications that address the real needs of users and businesses.",
    "hero.cta1": "View my projects",
    "hero.cta2": "Contact me",

    "about.label": "About",
    "about.title": "Who am I?",
    "about.p1":
      "Currently studying <strong>Web Solution Architecture</strong> at ITS ICT Piemonte (Turin), I focus on designing complete applications — from technical architecture to production deployment.",
    "about.p2":
      "I have developed five concrete projects: <strong>G-360</strong>, a commercial management app for SMEs, <strong>La Conoscenza</strong>, a website for an Italian language centre, along with <strong>Vinted Monitor</strong>, <strong>LinguaLab</strong> and <strong>BlueHarbor</strong>.",
    "about.p3":
      "I'm looking to apply my skills in a stimulating professional environment through an internship, with the long-term ambition of evolving into a <strong>DevOps Engineer</strong> role.",
    "about.stat1": "Projects delivered",
    "about.stat2": "Years of study",
    "about.stat3": "Curiosity",

    "skills.label": "Skills",
    "skills.title": "My technical arsenal",
    "skills.card1": "Architecture & Design",
    "skills.card2": "Front-end",
    "skills.card3": "Back-end",
    "skills.card4": "Databases",
    "skills.card5": "DevOps & Cloud",
    "skills.card6": "Design & Tools",
    "skills.mastered": "Mastered",
    "skills.learning": "Learning",

    "projects.label": "Projects",
    "projects.title": "What I've built",
    "projects.github": "GitHub",
    "projects.demo": "Demo",

    "p1.tag": "Web Application · Business management",
    "p1.title": "G-360",
    "p1.desc":
      "A web application for SMEs to centralise commercial management: clients, quotes, invoices, analytics dashboard and reporting. Modular MVC architecture.",

    "p2.tag": "Website · Language centre",
    "p2.title": "La Conoscenza",
    "p2.desc":
      "Showcase website for an Italian language centre in Brazzaville: courses, CILS B2 certifications and support for Italian universities.",

    "p3.tag": "Automation · Python",
    "p3.title": "Vinted Monitor",
    "p3.desc":
      "Automated monitoring tool for Vinted. Tracks listings in real time by keyword and price criteria, sending instant alerts.",

    "p4.tag": "Education · Web App",
    "p4.title": "LinguaLab",
    "p4.desc":
      "Language learning web application featuring interactive vocabulary modules, grammar exercises and personalised progress tracking.",

    "p5.tag": "Web Application",
    "p5.title": "BlueHarbor",
    "p5.desc":
      "Modern web platform with a clean interface, designed to deliver a smooth user experience and robust features.",

    "formation.label": "Education",
    "formation.title": "My journey",
    "formation.date1": "2026 — Ongoing",
    "formation.ongoing": "Ongoing",
    "formation.school1": "ITS ICT PIEMONTE · Turin",
    "formation.desc1":
      "Two-year post-diploma course focused on designing and implementing complex, scalable and secure web architectures. EU-recognised diploma (EQF level 5).",
    "formation.degree2": "Bachelor's in Computer Science & Business Management",
    "formation.school2": "ISM · Dakar (online)",
    "formation.desc2":
      "Training focused on integrating IT with business management — covering information systems, data management, business process analysis and digital solutions.",
    "formation.degree3": "High school diploma in Economic Sciences",
    "formation.school3": "CL-PN · Pointe-Noire, Congo",
    "formation.desc3": "Option: BG.",
    "formation.degree4": "High school diploma in Mathematical Sciences",
    "formation.school4": "Lycée Jean Baptiste Taty Loutard · Pointe-Noire, Congo",
    "formation.desc4": "Option: C.",

    "contact.label": "Contact",
    "contact.title": "Let's work together",
    "contact.intro":
      "Open to internship, work-study or collaboration opportunities on ambitious projects. Feel free to drop me a message!",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.fname": "Your name",
    "contact.femail": "Your email",
    "contact.fsubject": "Subject",
    "contact.fmessage": "Message",
    "contact.pname": "John Doe",
    "contact.pemail": "john@example.com",
    "contact.psubject": "Internship proposal / Collaboration...",
    "contact.pmessage": "Hello, I would like to...",
    "contact.send": "Send message",
    "contact.success": "✓ Thank you for your message! I will reply very soon.",
  },
};

//  MOTEUR I18N 

let currentLang = "fr";

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("portfolio-lang", lang);
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

const saved = localStorage.getItem("portfolio-lang");
const browser = navigator.language?.slice(0, 2);
const init = saved || (["fr", "it", "en"].includes(browser) ? browser : "fr");
applyLang(init);

//  NAV SCROLL 

const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);

  // active link highlight
  let current = "";
  document.querySelectorAll("section[id]").forEach((s) => {
    if (window.scrollY >= s.offsetTop - 130) current = s.id;
  });
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.classList.toggle("nav-active", a.getAttribute("href") === `#${current}`);
  });
});

//  SCROLL ANIMATIONS 

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

//FORMULAIRE DE CONTACT 

function handleSubmit() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    const alerts = {
      fr: "Merci de remplir tous les champs obligatoires.",
      it: "Si prega di compilare tutti i campi obbligatori.",
      en: "Please fill in all required fields.",
    };
    alert(alerts[currentLang]);
    return;
  }

  document.getElementById("formSuccess").style.display = "block";
}
