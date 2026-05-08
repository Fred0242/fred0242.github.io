// ── TRADUCTIONS — FR / IT / EN ──────────────────────────────────────────────

const translations = {
  fr: {
    "nav.about":       "À propos",
    "nav.skills":      "Compétences",
    "nav.projects":    "Projets",
    "nav.formation":   "Formation",
    "nav.contact":     "Contact",

    "hero.title":      "Bonjour, je suis<br /><em>Frédéric Franchir</em>",
    "hero.desc":       "Étudiant passionné en architecture de solutions web, je conçois des applications robustes et scalables qui répondent aux vrais besoins des utilisateurs et des entreprises.",
    "hero.cta1":       "Voir mes projets",
    "hero.cta2":       "Me contacter",

    "about.label":     "À propos",
    "about.title":     "Qui suis-je ?",
    "about.p1":        "Actuellement en formation en <strong>Architecture de solutions web</strong> à l'ITS ICT Piemonte (Torino), je m'intéresse à la conception d'applications complètes, de la définition de l'architecture technique jusqu'au déploiement en production.",
    "about.p2":        "J'ai développé deux projets concrets : <strong>G-360</strong>, une application de gestion commerciale pour PME, et <strong>La Conoscenza</strong>, un site web pour un centre de langue italienne basé à Brazzaville.",
    "about.p3":        "Je cherche à mettre en pratique mes compétences dans un environnement professionnel stimulant via un stage, avec pour ambition à long terme d'évoluer vers un rôle <strong>DevOps Engineer</strong>.",
    "about.stat1":     "Projets livrés",
    "about.stat2":     "Ans d'études",
    "about.stat3":     "Curiosité",

    "skills.label":    "Compétences",
    "skills.title":    "Mon arsenal technique",
    "skills.card1":    "Architecture & Conception",
    "skills.card4":    "Bases de données",
    "skills.card6":    "Design & Outils",
    "skills.modeling": "Modélisation",
    "skills.tests":    "Tests unitaires",

    "projects.label":  "Projets",
    "projects.title":  "Ce que j'ai construit",
    "projects.github": "Voir sur GitHub",

    "p1.tag":   "Application Web · Gestion commerciale",
    "p1.title": "G-360 — Gestion commerciale pour PME",
    "p1.desc":  "Application web complète dédiée aux PME pour centraliser leur gestion commerciale : suivi des clients, devis, factures, tableau de bord analytique et reporting. Conçue avec une architecture modulaire pour une maintenabilité optimale.",

    "p2.tag":   "Site Web · Centre de langue",
    "p2.title": "La Conoscenza — Centre de langue italienne",
    "p2.desc":  "Site vitrine complet pour un centre de langue italienne basé à Brazzaville, offrant des cours, des certifications CILS B2 et un accompagnement pour les universités italiennes. Design professionnel avec formulaire de contact et structure multipage.",

    "formation.label":   "Formation",
    "formation.title":   "Mon parcours",
    "formation.date1":   "2026 — En cours",
    "formation.ongoing": "En cours",
    "formation.school1": "ITS ICT PIEMONTE · Torino",
    "formation.desc1":   "Cours biennal post-diplôme axé sur la conception et l'implémentation d'architectures web complexes, scalables et sécurisées. Technologies web, bases de données, intégration de services. Diplôme reconnu au niveau européen (5e niveau EQF).",
    "formation.degree2": "Laurea in Informatica Gestionale",
    "formation.school2": "ISM · Dakar (parcours en ligne)",
    "formation.desc2":   "Formation axée sur l'intégration entre informatique et gestion d'entreprise. Systèmes d'information, gestion de données, analyse de processus métier et développement de solutions digitales orientées business.",
    "formation.degree3": "Baccalauréat en sciences économiques",
    "formation.school3": "CL-PN · Pointe-Noire, Congo",
    "formation.desc3":   "Série BG.",
    "formation.degree4": "Baccalauréat en sciences mathématiques",
    "formation.school4": "Lycée Jean Baptiste Taty Loutard · Pointe-Noire, Congo",
    "formation.desc4":   "Série C.",

    "contact.label":    "Contact",
    "contact.title":    "Travaillons ensemble",
    "contact.intro":    "Ouvert aux opportunités de stage, d'alternance ou de collaboration sur des projets ambitieux. N'hésite pas à me laisser un message !",
    "contact.phone":    "Téléphone",
    "contact.location": "Localisation",
    "contact.fname":    "Votre nom",
    "contact.femail":   "Votre email",
    "contact.fsubject": "Sujet",
    "contact.fmessage": "Message",
    "contact.pname":    "Jean Dupont",
    "contact.pemail":   "jean@exemple.com",
    "contact.psubject": "Proposition de stage / Collaboration...",
    "contact.pmessage": "Bonjour, je souhaite...",
    "contact.send":     "Envoyer le message",
    "contact.success":  "✓ Merci pour votre message ! Je vous répondrai très prochainement.",
  },

  it: {
    "nav.about":       "Chi sono",
    "nav.skills":      "Competenze",
    "nav.projects":    "Progetti",
    "nav.formation":   "Formazione",
    "nav.contact":     "Contatto",

    "hero.title":      "Ciao, sono<br /><em>Frédéric Franchir</em>",
    "hero.desc":       "Studente appassionato di architettura di soluzioni web, progetto applicazioni robuste e scalabili che rispondono ai veri bisogni degli utenti e delle aziende.",
    "hero.cta1":       "Vedi i miei progetti",
    "hero.cta2":       "Contattami",

    "about.label":     "Chi sono",
    "about.title":     "Chi sono?",
    "about.p1":        "Attualmente in formazione in <strong>Architettura di soluzioni web</strong> presso ITS ICT Piemonte (Torino), mi interesso alla progettazione di applicazioni complete, dalla definizione dell'architettura tecnica fino al deploy in produzione.",
    "about.p2":        "Ho sviluppato due progetti concreti: <strong>G-360</strong>, un'applicazione di gestione commerciale per PMI, e <strong>La Conoscenza</strong>, un sito web per un centro di lingua italiana a Brazzaville.",
    "about.p3":        "Cerco di mettere in pratica le mie competenze in un ambiente professionale stimolante tramite uno stage, con l'obiettivo a lungo termine di evolvermi verso il ruolo di <strong>DevOps Engineer</strong>.",
    "about.stat1":     "Progetti consegnati",
    "about.stat2":     "Anni di studi",
    "about.stat3":     "Curiosità",

    "skills.label":    "Competenze",
    "skills.title":    "Il mio arsenale tecnico",
    "skills.card1":    "Architettura & Progettazione",
    "skills.card4":    "Database",
    "skills.card6":    "Design & Strumenti",
    "skills.modeling": "Modellazione",
    "skills.tests":    "Test unitari",

    "projects.label":  "Progetti",
    "projects.title":  "Cosa ho costruito",
    "projects.github": "Vedi su GitHub",

    "p1.tag":   "Applicazione Web · Gestione commerciale",
    "p1.title": "G-360 — Gestione commerciale per PMI",
    "p1.desc":  "Applicazione web completa dedicata alle PMI per centralizzare la gestione commerciale: clienti, preventivi, fatture, dashboard analitica e reporting. Progettata con un'architettura modulare per una manutenibilità ottimale.",

    "p2.tag":   "Sito Web · Centro linguistico",
    "p2.title": "La Conoscenza — Centro di lingua italiana",
    "p2.desc":  "Sito vetrina completo per un centro di lingua italiana a Brazzaville, con corsi, certificazioni CILS B2 e supporto per le università italiane. Design professionale con modulo di contatto e struttura multipagina.",

    "formation.label":   "Formazione",
    "formation.title":   "Il mio percorso",
    "formation.date1":   "2026 — In corso",
    "formation.ongoing": "In corso",
    "formation.school1": "ITS ICT PIEMONTE · Torino",
    "formation.desc1":   "Corso biennale post-diploma focalizzato sulla progettazione e implementazione di architetture web complesse, scalabili e sicure. Diploma riconosciuto a livello europeo (5° livello EQF).",
    "formation.degree2": "Laurea in Informatica Gestionale",
    "formation.school2": "ISM · Dakar (percorso online)",
    "formation.desc2":   "Corso di laurea focalizzato sull'integrazione tra informatica e gestione aziendale, con competenze in sistemi informativi, gestione dei dati, analisi dei processi aziendali e sviluppo di soluzioni digitali.",
    "formation.degree3": "Diploma in scienze economiche",
    "formation.school3": "CL-PN · Pointe-Noire, Congo",
    "formation.desc3":   "Indirizzo: BG.",
    "formation.degree4": "Diploma in scienze matematiche",
    "formation.school4": "Lycée Jean Baptiste Taty Loutard · Pointe-Noire, Congo",
    "formation.desc4":   "Indirizzo: C.",

    "contact.label":    "Contatto",
    "contact.title":    "Lavoriamo insieme",
    "contact.intro":    "Aperto a opportunità di stage, alternanza o collaborazione su progetti ambiziosi. Non esitare a lasciarmi un messaggio!",
    "contact.phone":    "Telefono",
    "contact.location": "Posizione",
    "contact.fname":    "Il tuo nome",
    "contact.femail":   "La tua email",
    "contact.fsubject": "Oggetto",
    "contact.fmessage": "Messaggio",
    "contact.pname":    "Mario Rossi",
    "contact.pemail":   "mario@esempio.com",
    "contact.psubject": "Proposta di stage / Collaborazione...",
    "contact.pmessage": "Buongiorno, vorrei...",
    "contact.send":     "Invia messaggio",
    "contact.success":  "✓ Grazie per il tuo messaggio! Ti risponderò al più presto.",
  },

  en: {
    "nav.about":       "About",
    "nav.skills":      "Skills",
    "nav.projects":    "Projects",
    "nav.formation":   "Education",
    "nav.contact":     "Contact",

    "hero.title":      "Hello, I'm<br /><em>Frédéric Franchir</em>",
    "hero.desc":       "Passionate student in web solution architecture, I design robust and scalable applications that address the real needs of users and businesses.",
    "hero.cta1":       "View my projects",
    "hero.cta2":       "Contact me",

    "about.label":     "About",
    "about.title":     "Who am I?",
    "about.p1":        "Currently studying <strong>Web Solution Architecture</strong> at ITS ICT Piemonte (Turin), I focus on designing complete applications — from technical architecture to production deployment.",
    "about.p2":        "I have developed two concrete projects: <strong>G-360</strong>, a commercial management app for SMEs, and <strong>La Conoscenza</strong>, a website for an Italian language centre in Brazzaville.",
    "about.p3":        "I'm looking to apply my skills in a stimulating professional environment through an internship, with the long-term ambition of evolving into a <strong>DevOps Engineer</strong> role.",
    "about.stat1":     "Projects delivered",
    "about.stat2":     "Years of study",
    "about.stat3":     "Curiosity",

    "skills.label":    "Skills",
    "skills.title":    "My technical arsenal",
    "skills.card1":    "Architecture & Design",
    "skills.card4":    "Databases",
    "skills.card6":    "Design & Tools",
    "skills.modeling": "Modeling",
    "skills.tests":    "Unit testing",

    "projects.label":  "Projects",
    "projects.title":  "What I've built",
    "projects.github": "View on GitHub",

    "p1.tag":   "Web Application · Business management",
    "p1.title": "G-360 — Business management for SMEs",
    "p1.desc":  "A complete web application for SMEs to centralise commercial management: client tracking, quotes, invoices, analytics dashboard and reporting. Built with a modular architecture for optimal maintainability.",

    "p2.tag":   "Website · Language centre",
    "p2.title": "La Conoscenza — Italian Language Centre",
    "p2.desc":  "A complete showcase website for an Italian language centre in Brazzaville, offering courses, CILS B2 certifications and support for Italian universities. Professional design with contact form and multipage structure.",

    "formation.label":   "Education",
    "formation.title":   "My journey",
    "formation.date1":   "2026 — Ongoing",
    "formation.ongoing": "Ongoing",
    "formation.school1": "ITS ICT PIEMONTE · Turin",
    "formation.desc1":   "Two-year post-diploma course focused on designing and implementing complex, scalable and secure web architectures. EU-recognised diploma (EQF level 5).",
    "formation.degree2": "Bachelor's in Computer Science & Business Management",
    "formation.school2": "ISM · Dakar (online)",
    "formation.desc2":   "Versatile training covering IT fundamentals, project management, information systems and databases, with a business-oriented approach.",
    "formation.degree3": "High school diploma in Economic Sciences",
    "formation.school3": "CL-PN · Pointe-Noire, Congo",
    "formation.desc3":   "Stream: BG.",
    "formation.degree4": "High school diploma in Mathematical Sciences",
    "formation.school4": "Lycée Jean Baptiste Taty Loutard · Pointe-Noire, Congo",
    "formation.desc4":   "Stream: C.",

    "contact.label":    "Contact",
    "contact.title":    "Let's work together",
    "contact.intro":    "Open to internship, work-study or collaboration opportunities on ambitious projects. Feel free to drop me a message!",
    "contact.phone":    "Phone",
    "contact.location": "Location",
    "contact.fname":    "Your name",
    "contact.femail":   "Your email",
    "contact.fsubject": "Subject",
    "contact.fmessage": "Message",
    "contact.pname":    "John Doe",
    "contact.pemail":   "john@example.com",
    "contact.psubject": "Internship proposal / Collaboration...",
    "contact.pmessage": "Hello, I would like to...",
    "contact.send":     "Send message",
    "contact.success":  "✓ Thank you for your message! I will reply very soon.",
  }
};


// ── MOTEUR I18N ──────────────────────────────────────────────────────────────

let currentLang = 'fr';

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('portfolio-lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

const saved   = localStorage.getItem('portfolio-lang');
const browser = navigator.language?.slice(0, 2);
const init    = saved || (['fr','it','en'].includes(browser) ? browser : 'fr');
applyLang(init);


// ── SCROLL ANIMATIONS ────────────────────────────────────────────────────────

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


// ── FORMULAIRE DE CONTACT ────────────────────────────────────────────────────

function handleSubmit() {
  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    const alerts = {
      fr: 'Merci de remplir tous les champs obligatoires.',
      it: 'Si prega di compilare tutti i campi obbligatori.',
      en: 'Please fill in all required fields.'
    };
    alert(alerts[currentLang]);
    return;
  }

  // ── Activer Formspree (décommente et remplace TON-ID) ──
  // fetch('https://formspree.io/f/TON-ID', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     name,
  //     email,
  //     subject: document.getElementById('subject').value,
  //     message
  //   }),
  // });

  document.getElementById('formSuccess').style.display = 'block';
}


// ── NAV ACTIVE AU SCROLL ─────────────────────────────────────────────────────

const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}`
      ? 'var(--accent)'
      : '';
  });
});