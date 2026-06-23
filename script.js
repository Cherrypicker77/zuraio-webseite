const translations = {
  de: {
    meta: {
      title: "zuraio | own your data",
      description:
        "zuraio ist der AI-Orchestrator für Schweizer KMU, die KI nutzen wollen, ohne Kontrolle über Daten, Wissen und Prozesse zu verlieren.",
    },
    nav: {
      why: "Was wir lösen",
      solution: "Sicherheit",
      security: "Integrationen",
      orchestrator: "Preise und Modelle",
      roadmap: "Über uns",
      demo: "Demo anfragen",
      language: "Sprache",
      menu: "Menü",
    },
    ui: {
      brandAriaLabel: "zuraio Startseite",
      navAriaLabel: "Hauptnavigation",
      openNavAriaLabel: "Navigation öffnen",
      chooseLanguageAriaLabel: "Sprache wählen",
      selectLanguageAriaLabel: "Sprache auswählen",
      heroFeaturesAriaLabel: "Kernfunktionen",
      heroImageAlt: "Moderner Arbeitsplatz mit Panoramablick auf See, Stadt und Berge",
      integrationsImageAlt: "Arbeitsplatz mit Laptop und zuraio-Oberfläche als Symbol für Tool-Integration",
      integrationsAriaLabel: "Unterstützte Integrationen",
      answerImageAlt: "Orchestrator-Grafik mit zuraio Systemlogik vor Schweizer Stadt",
      roadmapImageAlt: "Modernes Büro mit Panoramablick auf Berglandschaft",
      roadmapViewAriaLabel: "Roadmap ansehen",
    },
    heroFeatures: [
      { title: "Sicherheits-Modelle", body: "Massgeschneidert an<br>Ihrem Unternehmen" },
      { title: "Skalierbar", body: "Die KI wächst<br>nach Ihrem Tempo" },
      { title: "Unternehmenswissen", body: "Am sicheren Ort<br>Ihrer Wahl" },
      { title: "Entlastung", body: "Sie wählen Ihre<br>digitalen Spezialisten" },
      { title: "Digitale Lösungen", body: "Persönliche Ansprechpartner<br>für Sie vor Ort." },
    ],
    hero: {
      titleLines: [
        [{ text: "Deine Arbeit" }],
        [
          { text: "ist bereit", accent: true },
          { text: "," },
        ],
        [{ text: "bevor du es bist." }],
      ],
      leadLines: [
        { before: "Wir haben ", brand: "zuraio", after: " gebaut," },
        "weil es genau diese Lösung noch nicht gab:",
        "Eine KI-Plattform, die Ihrem Team lästige Admin-Arbeit abnimmt",
        "Ihr gesamtes Firmenwissen nutzbar macht und mit Ihrem Unternehmen wächst.",
        "Und Ihre Daten?",
        "Bleiben dort, wo Sie es bestimmen.",
      ],
    },
    intro: {
      eyebrow: "KENNST DU DAS?",
      titleHtml:
        "<span>Zu viele <span class=\"brand-highlight\">Tools</span></span><span>Zu wenig <span class=\"brand-highlight\">Kontrolle</span>.</span><span>Zu viel verlorene <span class=\"brand-highlight\">Zeit</span></span>",
      lines: [
        "Unternehmenswissen ist da, aber schwer auffindbar. Mitarbeitende wechseln zwischen Systemen, wiederholen Arbeit und verlieren Zeit mit Administration.",
        "Gleichzeitig wächst die Unsicherheit: Wo landen sensible Daten? Wem gehört das Wissen? Und passt Standard-KI überhaupt zu Ihrem Unternehmen?",
      ],
      badges: [
        "Besuchsberichte",
        "Beschlüsse",
        "Zusammenfassung",
        "Vorbereitung",
        "Follow-ups",
        "Email",
        "Antworten",
        "Ideen",
        "Projekttagebuch",
        "Telefonnotiz",
        "Pendenzenlisten",
        "Termine",
        "Traktanden",
        "Projektrisiken",
        "Eskalationen",
        "Erinnerungen",
        "Übergaben",
      ],
      featureBadges: [
        {
          number: "01",
          title: "Zeitverlust durch Administration",
          body: "Digitale Spezialisten übernehmen wiederkehrende Aufgaben und schaffen Zeit für die Arbeit, die wirklich zählt.",
        },
        {
          number: "02",
          title: "Wichtiges Wissen ist verstreut",
          body: "zuraio macht Unternehmenswissen zentral auffindbar und jederzeit nutzbar.",
        },
        {
          number: "03",
          title: "Wissen geht bei Abgängen verloren",
          body: "Wissen wird mittels Interviews gesichert, bevor es verloren geht.",
        },
        {
          number: "04",
          title: "Toolhopping nervt und braucht Zeit",
          body: "Eine zentrale KI-Plattform verbindet Wissen, Aufgaben und Anwendungen an einem Ort.",
        },
        {
          number: "05",
          title: "Sensible Daten landen in fremden Systemen",
          body: "Datensouveränität ist bei zuraio kein Zusatz, sondern Grundprinzip.",
        },
        {
          number: "06",
          title: "Standard-KI kennt das Unternehmen nicht",
          body: "zuraio arbeitet mit Ihren Richtlinien, Ihrem Wording, Ihrem Wissen und Ihren Daten.",
        },
        {
          number: "07",
          title: "Pläne der Anbieter geben Leistungen vor",
          body: "Der modulare Aufbau wächst mit Ihrem Unternehmen und nicht mit starren Paketgrenzen.",
        },
        {
          number: "08",
          title: "Abhängigkeit von grossen Anbietern",
          body: "Modelle, Provider und sogar zuraio selbst bleiben ersetzbar, Ihr Wissen bleibt Ihres.",
        },
        {
          number: "09",
          title: "Wenig bis keine Kontrolle",
          body: "Sie bestimmen, wo Daten liegen, wer Zugriff hat und wie KI im Unternehmen arbeitet.",
        },
        {
          number: "10",
          title: "Bestehende Softwarelösungen",
          body: "zuraio bindet die wichtigsten Anwendungen an, statt noch ein weiteres isoliertes Tool zu sein.",
        },
      ],
      link: "Weitere Informationen",
    },
    problem: {
      eyebrow: "VERTRAUEN & DATENKONTROLLE",
      titleHtml: 'KI, ohne die <span class="brand-highlight">Kontrolle</span> aus der Hand zu geben.',
      lead:
        "KI darf nicht bedeuten, die Kontrolle über Unternehmensdaten zu verlieren. Mit zuraio bestimmen Unternehmen, wo das System betrieben wird, welche Daten es nutzen darf, wer darauf zugreifen kann und wie sich Ergebnisse überprüfen lassen.",
      solutionLead: "Unsere Lösung",
      solutionBody: "Lokal, hybrid oder in der Cloud",
      solutionSub: "Sie bestimmen das passende Modell",
      cards: [
        {
          title: "Lokal",
          body:
            "System, KI-Modelle und Daten werden vollständig in Ihrer eigenen Infrastruktur betrieben. Die richtige Wahl für maximale Datenhoheit und besonders sensible Informationen.",
        },
        {
          title: "Hybrid",
          body:
            "Sensible Daten und vertrauliche Prozesse bleiben in Ihrer eigenen Infrastruktur. Für leistungsintensive oder kreative Aufgaben können ausgewählte Inhalte kontrolliert über freigegebene Cloud-Modelle verarbeitet werden. Plattform und Datenhaltung bleiben in der Schweiz.",
        },
        {
          title: "Cloud",
          body:
            "Für maximale KI-Leistung ohne eigene Hardware bietet die Cloud-Lösung mit Schweizer Hosting eine starke Kombination aus Leistung, Flexibilität und Sicherheit.",
        },
      ],
    },
    integrations: {
      eyebrow: "FUNKTIONIERT DORT, WO DEIN TEAM ARBEITET",
      titleHtml: 'Passt zu den <span class="brand-highlight">Tools</span>, die Du bereits nutzt.',
      body: [
        "Kommunikation entscheidet, wie gut ein Unternehmen funktioniert. Das gilt für Menschen genauso wie für digitale Systeme. zuraio verbindet die gängigsten Anwendungen und bringt Ihre Tools und Unternehmeswissen Schritt für Schritt in eine zentrale KI-Umgebung.",
        "Nicht alles auf einmal. Sondern kontrolliert, nachvollziehbar und dort, wo es echten Mehrwert bringt. So entsteht eine Plattform, die bestehende Tools nicht ersetzt, sondern produktiver macht.",
      ],
      pills: [
        "Outlook",
        "Gmail",
        "Microsoft 365",
        "Google Workspace",
        "Teams",
        "Slack",
        "Notion",
        "SharePoint",
        "OneDrive",
        "HubSpot",
        "Salesforce",
        "WhatsApp",
        "Sprachnotizen",
      ],
      link: "Weitere Informationen",
    },
    useCases: {
      eyebrow: "USE CASES",
      titleHtml:
        '<span>Damit Ihr Team</span><span class="use-cases-accent">Zeit für das Wesentliche</span><span>hat</span>',
      leadHtml:
        "zuraio übernimmt Zeitfresser im Alltag:<br>geführte Antworten im Unternehmenswording, sichere Verarbeitung<br>sensibler Daten, Wissenserfassung, automatisierte Recherchen,<br>Aufgaben per Sprache delegieren, und vieles mehr",
      closing:
        "Wir kümmern uns um Ihre Zeitfresser, damit Sie sich wieder auf Ihre Leidenschaft konzentrieren können.",
      cards: [
        {
          badge: "Zuverlässig",
          title: "Geführte Antworten",
          body: "Antworten entstehen kontrolliert, nachvollziehbar und mit den passenden Quellen.",
        },
        {
          badge: "Unternehmen",
          title: "Corporate Wording",
          body: "zuraio antwortet in der Sprache, Haltung und Tonalität Ihres Unternehmens.",
        },
        {
          badge: "Wissen",
          title: "Meetings zusammenfassen",
          body: "Gespräche werden transkribiert, verdichtet und als nutzbares Wissen gesichert.",
        },
        {
          badge: "Sicherheit",
          title: "Sensible Dateien nutzen",
          body: "Auch vertrauliche Inhalte können kontrolliert verarbeitet und ausgewertet werden.",
        },
        {
          badge: "Integration",
          title: "E-Mails entlasten",
          body: "Nachrichten werden vorbereitet, zusammengefasst und passend beantwortet.",
        },
        {
          badge: "Anbindung",
          title: "Wissen verbinden",
          body: "Bestehende Ablagen und Wissensquellen werden gezielt in zuraio nutzbar gemacht.",
        },
        {
          badge: "Recherche",
          title: "Webrecherche automatisieren",
          body: "Aufwändige Recherchen werden wiederholbar, strukturiert und regelmässig ausgeführt.",
        },
        {
          badge: "Daten",
          title: "Produktdaten extrahieren",
          body: "Informationen aus Dokumenten und Webseiten werden sauber erkannt und weiterverwendet.",
        },
        {
          badge: "Wissen",
          title: "Wissen erfassen",
          body: "Interviews und Gespräche werden in dauerhaftes Unternehmenswissen verwandelt.",
        },
        {
          badge: "Automatisierung",
          title: "Aufgaben ausführen",
          body: "zuraio kann Aufgaben anstossen, Systeme bedienen und Prozesse unterstützen.",
        },
        {
          badge: "Datenhoheit",
          title: "Eigenes Wissen behalten",
          body: "Ihr aufgebautes Wissen bleibt verfügbar, übertragbar und unter Ihrer Kontrolle.",
        },
        {
          badge: "Effizienz",
          title: "Tote Zeit nutzen",
          body: "Unterwegs sprechen statt tippen und Aufgaben direkt im Arbeitsfluss erfassen.",
        },
      ],
    },
    answer: {
      eyebrow: "Harness",
      titleHtml: 'Ein zentraler <span class="brand-highlight">Orchestrator</span>.<br>Volle Kontrolle über deine KI.',
      kicker: "Nicht einfach ein Chatbot.",
      body: [
        "zuraio ist ein intelligentes Harness, das jede Anfrage analysiert, prüft und orchestriert. Komplexe Anfragen durchlaufen dabei mehrere Loops, bevor eine Antwort erstellt wird.",
        "Damit Antworten zu eurem Wissen, euren Prozessen, euren Richtlinien und eurer Unternehmenskultur passen. Mit zuraio trägt deine KI eure DNA.",
      ],
      features: [
        "RAG für jedes Projekt",
        "Rollen und Rechte",
        "Ein Agent pro Aufgabe",
        "Lokal, hybrid oder Cloud",
        "Audio-Modus für unterwegs",
        "Audit Logging inklusive",
        "Antworten mit Quellenangaben",
        "Modular und skalierbar",
      ],
      featurePool: [
        "RAG für jedes Projekt",
        "Rollen und Rechte",
        "Ein Agent pro Aufgabe",
        "Lokal, hybrid oder Cloud",
        "Audio-Modus für unterwegs",
        "Audit Logging inklusive",
        "Antworten mit Quellenangaben",
        "Modular und skalierbar",
        "Intent Detection",
        "Task Planning",
        "Agent Routing",
        "Tool Calling",
        "Evaluation",
        "Source Check",
        "Fusion Layer",
        "Corporate Wording",
        "Audit Logging",
        "Access Control",
        "Policy Guardrails",
        "API Layer",
        "MCP Layer",
        "Permission Check",
        "Risk Classification",
        "Policy Check",
        "Tone Detection",
        "Agent Selection",
        "Tool Selection",
        "Connector Layer",
        "Data Retrieval",
        "Web Search",
        "Guardrail Layer",
        "Compliance Layer",
        "Tenant Permissions",
        "Source Validation",
        "Hallucination Check",
        "Fact Check",
        "Policy Enforcement",
        "Prompt Injection Protection",
        "Data Leakage Protection",
        "Relevance Check",
        "Safety Check",
        "Human Review Option",
        "Feedback Loop",
        "Response Layer",
        "Corporate Wording Layer",
        "Tone of Voice Layer",
      ],
      link: "Weitere Informationen",
    },
    voice: {
      eyebrow: "Voice-Mode",
      title: "Nutze Zeit, die bisher verloren ging.",
      body:
        "Besuchsberichte, Projektstatus, Gedanken, Aufgaben und Informationen können per Sprache erfasst werden: im Auto, zwischen zwei Terminen oder direkt nach einem Kundengespräch.",
      link: "Voice-Agent vertiefen",
    },
    project: {
      eyebrow: "Wissen",
      title: "Für jedes Projekt ein Agent, der den Projektkontext versteht.",
      body:
        "Der Projekt-Agent kennt Dokumente, Protokolle, Aufgaben, Status, Entscheidungen und offene Punkte. So bleibt Projektwissen verfügbar, ohne dass Führung in Administration untergeht.",
      stats: [
        { title: "24/7", label: "Kontext abrufbar" },
        { title: "RAG", label: "Antwort mit Quellen" },
        { title: "Team", label: "Wissen bleibt geteilt" },
      ],
      link: "Projekt-Agent ansehen",
    },
    knowledge: {
      eyebrow: "Wissenssicherung",
      title: "Dein Unternehmen baut jeden Tag Wissen auf. Warum sollte es jemand anderem gehören?",
      body:
        "zuraio sichert nicht nur Dokumente, sondern auch Erfahrungswissen, Entscheidungen, Prozesse und Kontext. So bleibt Wissen im Unternehmen – auch wenn Mitarbeitende oder KI-Provider wechseln.",
      cards: [
        {
          title: "Meine KI",
          body: "Das Wissen aus deinem Unternehmenskontext gehört dir und bleibt unter deiner Kontrolle.",
        },
        {
          title: "Meine RAGs",
          body: "Vektorisierte Wissensdatenbanken werden dort betrieben, wo du es vorgibst.",
        },
        {
          title: "Meine Daten",
          body: "Speicherort, Zugriff und Nutzung folgen deinen Vorgaben, nicht denen eines Anbieters.",
        },
        {
          title: "Mein Wissen",
          body: "Erfahrungen werden zu Unternehmenswissen. Sichere das Wissen der Mitarbeiter, bevor sie das Unternehmen verlassen.",
        },
        {
          title: "Meine Kontrolle",
          body: "Rollen, Rechte und Zugriffe werden bewusst gesteuert und nachvollziehbar dokumentiert.",
        },
      ],
      link: "RAG & Wissensicherung",
    },
    security: {
      eyebrow: "Sicherheit & Datensouveränität",
      title: "Jeder spricht über Leistung. Wir sprechen zuerst über Vertrauen.",
      body:
        "Datenhoheit ist kein Zusatz. Sie ist die Grundlage, damit KI im Unternehmen wirklich eingesetzt werden kann.",
      cards: [
        {
          title: "Maximale Sicherheit",
          body: "Corporate LLM, lokale Infrastruktur, lokale Datenspeicherung für maximale Kontrolle.",
        },
        {
          title: "Bewusste Sicherheit",
          body: "Hybride Architektur: Kritisches lokal, weniger Kritisches über geprüfte Cloud-Modelle.",
        },
        {
          title: "Anerkannte Sicherheit",
          body: "Cloud-basiert mit Swiss Hosting, kontrollierter Datenhaltung und klarer Governance.",
        },
        {
          title: "Maximale Leistung",
          body: "Zugriff auf führende LLMs über API für Nutzung mit geringerem Schutzbedarf.",
        },
      ],
      badges: [
        "EU AI Act Readiness",
        "DSGVO Readiness",
        "Human Oversight",
        "Audit Logging",
        "Nachvollziehbarkeit",
        "Transparenz",
        "Revisionssicherheit",
        "Compliance by Design",
        "Governance Framework",
        "Zugriffskontrolle",
        "Freigabeprozesse",
        "Datenhoheit",
        "Swiss Hosting",
        "Corporate LLM",
        "Private AI",
        "Tenant Isolation",
        "Verschlüsselung",
        "Mandantentrennung",
        "Backup & Recovery",
      ],
    },
    orchestrator: {
      eyebrow: "So denkt zuraio",
      title: "Mehr als Chat:<br>Eine kontrollierte Antwortkette.",
      body:
        "Der Orchestrator prüft zuerst den Rahmen, wählt dann den passenden Weg und liefert erst danach eine nachvollziehbare Antwort.",
      steps: [
        {
          title: "Anfrage",
          body: "Was will der Nutzer wissen oder tun?",
        },
        {
          title: "Governance Gate",
          body: "Darf diese Person diese Daten nutzen?",
        },
        {
          title: "Intent Detection",
          body: "Welche Absicht steckt dahinter?",
        },
        {
          title: "Planner",
          body: "Welcher Agent, welches Wissen, welches Modell?",
        },
        {
          title: "RAG & Tools",
          body: "Quellen, Dokumente und Aktionen werden genutzt.",
        },
        {
          title: "Evaluator",
          body: "Antworten werden geprüft und eingeordnet.",
        },
        {
          title: "Antwort",
          body: "Mit Quellen, Grenzen und nächstem Schritt.",
        },
        {
          title: "Audit",
          body: "Nachvollziehbar für Governance und Lernen.",
        },
      ],
      link: "Harness",
    },
    scaling: {
      eyebrow: "Skalierbarkeit",
      title: "Nicht morgen alles.<br>Heute das Richtige.",
      body:
        "zuraio wächst mit deinem Unternehmen. Starte dort, wo der grösste Hebel liegt, und erweitere die Lösung dann in deinem Tempo.",
      steps: [
        {
          title: "Starten",
          body: "Mail-Agent, Projekt-Agent, Wissens-RAG oder Voice-Agent.",
        },
        {
          title: "Vertrauen",
          body: "Rechte, Quellen, Hosting und Governance sauber einrichten.",
        },
        {
          title: "Integrieren",
          body: "Datenquellen, Workflows und bestehende Systeme anbinden.",
        },
        {
          title: "Wachsen",
          body: "Mehr Agents, mehr Bereiche, mehr Automatisierung.",
        },
      ],
      link: "Skalierbarkeit",
    },
    team: {
      eyebrow: "Warum Zuraio",
      title: "<span class=\"hero-title-line\">Weil wir keine passende Lösung fanden</span><span class=\"hero-title-line\">haben wir <span class=\"hero-brand\">zuraio</span> gebaut</span>",
      heroes: [
        {
          title: "Der Ausgangspunkt",
          body: "Wir wollten KI nicht nur ausprobieren, sondern sicher und sinnvoll in Unternehmen integrieren. Doch keine Lösung vereinte Datenschutz, Datenhoheit, Flexibilität und einen bezahlbaren Einstieg.",
        },
        {
          title: "Was uns gefehlt hat",
          body: "Uns fehlte eine Plattform, die Unternehmenswissen vom ersten Tag an nutzbar macht, digitale Spezialisten ermöglicht und mit den Anforderungen des Unternehmens wächst.",
        },
        {
          title: "Warum zuraio",
          body: "Damit Sie nicht selbst durch die undurchsichtige KI-Welt navigieren müssen und sich auf Ihre Kernkompetenz konzentrieren können.",
        },
      ],
      link: "Über uns",
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "Heute ein Orchestrator<br>Morgen ein",
      ecosystem: "KI-Ökosystem",
      steps: [
        {
          title: "Heute",
          body: "Multifunktionales Chat-Interface, Audio-Funktion, Mail-Agent, Projekt-Agent, Internet-Agent, Harness Grundlage, Rollenverwaltung, Systemverwaltung, API Layer, Audit Logging, u.v.m.",
        },
        {
          title: "Nächste Schritte",
          body: "Echtzeit Sprachmodus, Meeting-Transkript, Harness Optimierung, Hardware, Mitarbeiterschulung, Ihr Agent nach Wunsch, u.v.m.",
        },
        {
          title: "Vision",
          body: "zuraio als turn key solution. Ein Ansprechpartner, vollste Flexibilität, absolute Transparenz, fair und kundennah.",
        },
      ],
      link: "Weitere Informationen",
    },
    demoModal: {
      eyebrow: "Demo",
      title: "Termin buchen",
      name: "Name",
      firstName: "Vorname",
      company: "Firma",
      phone: "Telefonnummer",
      email: "E-Mail Adresse",
      note: "Notiz",
      optional: "optional",
      calendar: "Kalender",
      hint: "Wählen Sie einen freien Tag und eine Uhrzeit.",
      hintSelectDay: "Bitte wählen Sie zuerst einen Tag im Kalender.",
      hintSelectTime: "Bitte wählen Sie eine freie Uhrzeit.",
      submit: "Absenden",
      close: "Schliessen",
      weekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
      monthNavPrev: "Vorheriger Monat",
      monthNavNext: "Nächster Monat",
      months: [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
      ],
      bookedLabel: "Belegt",
      availableLabel: "Verfügbar",
      mailSubject: "Demo-Termin zuraio",
    },
    footer: {
      columns: [
        {
          title: "Navigation",
          links: [
            "Was wir lösen",
            "Sicherheit",
            "Integration",
            "Preise & Modelle",
            "Über uns",
          ],
        },
        {
          title: "Sicherheit & Compliance",
          links: [
            "Swiss Hosting",
            "Lokal installierbar",
            "DSG / DSGVO ready",
            "EU AI Act ready",
          ],
        },
        {
          title: "Kontakt & Rechtliches",
          links: [
            "Kontakt",
            "Impressum",
            "Datenschutz",
            "Cookie-Einstellungen",
          ],
        },
        {
          title: "Netzwerk & Social Media",
          links: ["Partner", "Social Media"],
        },
      ],
      copyright: "© 2026 zuraio. All rights reserved.",
    },
  },
  en: {
    meta: {
      title: "zuraio | own your data",
      description:
        "zuraio is the AI orchestrator for Swiss SMEs that want to use AI without losing control over data, knowledge, and processes.",
    },
    nav: {
      why: "What we solve",
      solution: "Security",
      security: "Integrations",
      orchestrator: "Pricing and models",
      roadmap: "About us",
      demo: "Request demo",
      language: "Language",
      menu: "Menu",
    },
    ui: {
      brandAriaLabel: "zuraio homepage",
      navAriaLabel: "Main navigation",
      openNavAriaLabel: "Open navigation",
      chooseLanguageAriaLabel: "Choose language",
      selectLanguageAriaLabel: "Select language",
      heroFeaturesAriaLabel: "Core features",
      heroImageAlt: "Modern workspace with panoramic view of lake, city, and mountains",
      integrationsImageAlt: "Workspace with laptop and zuraio interface as a symbol for tool integration",
      integrationsAriaLabel: "Supported integrations",
      answerImageAlt: "Orchestrator graphic with zuraio system logic in front of a Swiss city",
      roadmapImageAlt: "Modern office with panoramic view of mountain landscape",
      roadmapViewAriaLabel: "View roadmap",
    },
    heroFeatures: [
      { title: "Security models", body: "Tailored to<br>your company" },
      { title: "Scalable", body: "AI grows<br>at your pace" },
      { title: "Company knowledge", body: "At the secure location<br>of your choice" },
      { title: "Relief", body: "You choose your<br>digital specialists" },
      { title: "Digital solutions", body: "Personal contacts<br>for you on site." },
    ],
    hero: {
      titleLines: [
        [{ text: "Your work" }],
        [{ text: "is ready", accent: true }, { text: "," }],
        [{ text: "before you are." }],
      ],
      leadLines: [
        { before: "We built ", brand: "zuraio", after: "," },
        "because this exact solution did not exist yet:",
        "An AI platform that takes tedious admin work off your team's plate,",
        "makes your entire company knowledge usable, and grows with your business.",
        "And your data?",
        "It stays exactly where you decide.",
      ],
    },
    intro: {
      eyebrow: "DO YOU KNOW THIS?",
      titleHtml: "<span>Too many <span class=\"brand-highlight\">tools</span></span><span>Too little <span class=\"brand-highlight\">control</span>.</span><span>Too much lost <span class=\"brand-highlight\">time</span></span>",
      lines: [
        "Company knowledge exists but is hard to find. Employees switch between systems, repeat work, and lose time on administration.",
        "At the same time, uncertainty grows: Where do sensitive data end up? Who owns the knowledge? And does standard AI even fit your company?",
      ],
      badges: [
        "Visit reports",
        "Decisions",
        "Summary",
        "Preparation",
        "Follow-ups",
        "Email",
        "Answers",
        "Ideas",
        "Project diary",
        "Phone note",
        "Task lists",
        "Appointments",
        "Agenda items",
        "Project risks",
        "Escalations",
        "Reminders",
        "Handoffs",
      ],
      featureBadges: [
        {
          number: "01",
          title: "Time lost to administration",
          body: "Digital specialists take over recurring tasks and create time for the work that really matters.",
        },
        {
          number: "02",
          title: "Important knowledge is scattered",
          body: "zuraio makes company knowledge centrally findable and always usable.",
        },
        {
          number: "03",
          title: "Knowledge is lost when people leave",
          body: "Knowledge is secured through interviews before it is lost.",
        },
        {
          number: "04",
          title: "Tool hopping is annoying and time-consuming",
          body: "One central AI platform connects knowledge, tasks and applications in one place.",
        },
        {
          number: "05",
          title: "Sensitive data ends up in foreign systems",
          body: "Data sovereignty is not an add-on at zuraio, but a core principle.",
        },
        {
          number: "06",
          title: "Standard AI does not know the company",
          body: "zuraio works with your policies, your wording, your knowledge and your data.",
        },
        {
          number: "07",
          title: "Provider plans dictate capabilities",
          body: "The modular design grows with your company, not with rigid package limits.",
        },
        {
          number: "08",
          title: "Dependence on large providers",
          body: "Models, providers and even zuraio itself remain replaceable; your knowledge stays yours.",
        },
        {
          number: "09",
          title: "Little to no control",
          body: "You decide where data resides, who has access and how AI works in the company.",
        },
        {
          number: "10",
          title: "Existing software solutions",
          body: "zuraio connects the most important applications instead of being yet another isolated tool.",
        },
      ],
      link: "More information",
    },
    problem: {
      eyebrow: "TRUST & DATA CONTROL",
      titleHtml: 'AI without giving up <span class="brand-highlight">control</span>.',
      lead:
        "AI must not mean losing control over company data. With zuraio, companies decide where the system runs, which data it may use, who can access it, and how results can be verified.",
      solutionLead: "Our solution",
      solutionBody: "Local, hybrid, or in the cloud",
      solutionSub: "You choose the model that fits",
      cards: [
        {
          title: "Local",
          body:
            "System, AI models, and data run entirely in your own infrastructure. The right choice for maximum data sovereignty and especially sensitive information.",
        },
        {
          title: "Hybrid",
          body:
            "Sensitive data and confidential processes stay in your own infrastructure. For compute-intensive or creative tasks, selected content can be processed in a controlled way through approved cloud models. Platform and data storage remain in Switzerland.",
        },
        {
          title: "Cloud",
          body:
            "For maximum AI performance without your own hardware, the cloud solution with Swiss hosting offers a strong combination of performance, flexibility, and security.",
        },
      ],
    },
    integrations: {
      eyebrow: "WORKS WHERE YOUR TEAM WORKS",
      titleHtml: 'Fits into the <span class="brand-highlight">tools</span> you already use.',
      body: [
        "Communication determines how well a company functions. That applies to people just as much as to digital systems. zuraio connects the most common applications and brings your tools and company knowledge step by step into a central AI environment.",
        "Not everything at once. Instead, in a controlled, traceable way and where it creates real value. That is how a platform emerges that does not replace existing tools, but makes them more productive.",
      ],
      pills: [
        "Outlook",
        "Gmail",
        "Microsoft 365",
        "Google Workspace",
        "Teams",
        "Slack",
        "Notion",
        "SharePoint",
        "OneDrive",
        "HubSpot",
        "Salesforce",
        "WhatsApp",
        "Voice notes",
      ],
      link: "More information",
    },
    useCases: {
      eyebrow: "USE CASES",
      titleHtml:
        '<span>So your team</span><span class="use-cases-accent">time for what matters</span><span>has</span>',
      leadHtml:
        "zuraio takes over everyday time sinks:<br>guided answers in your company wording, secure processing<br>of sensitive data, knowledge capture, automated research,<br>delegating tasks by voice, and much more",
      closing:
        "We take care of your time sinks so you can focus on what you are passionate about again.",
      cards: [
        {
          badge: "Reliability",
          title: "Guided answers",
          body: "Answers are created in a controlled, traceable way with the right sources.",
        },
        {
          badge: "Company",
          title: "Corporate wording",
          body: "zuraio responds in your company's language, mindset, and tone.",
        },
        {
          badge: "Knowledge",
          title: "Summarize meetings",
          body: "Conversations are transcribed, condensed, and preserved as usable knowledge.",
        },
        {
          badge: "Security",
          title: "Use sensitive files",
          body: "Confidential content can also be processed and analyzed in a controlled way.",
        },
        {
          badge: "Integration",
          title: "Reduce email load",
          body: "Messages are prepared, summarized, and answered appropriately.",
        },
        {
          badge: "Connection",
          title: "Connect knowledge",
          body: "Existing repositories and knowledge sources are made usable in zuraio.",
        },
        {
          badge: "Research",
          title: "Automate web research",
          body: "Complex research runs in a repeatable, structured, and regular way.",
        },
        {
          badge: "Data",
          title: "Extract product data",
          body: "Information from documents and websites is recognized cleanly and reused.",
        },
        {
          badge: "Knowledge",
          title: "Capture knowledge",
          body: "Interviews and conversations are turned into lasting company knowledge.",
        },
        {
          badge: "Automation",
          title: "Execute tasks",
          body: "zuraio can trigger tasks, operate systems, and support processes.",
        },
        {
          badge: "Data sovereignty",
          title: "Keep your own knowledge",
          body: "Your built-up knowledge stays available, transferable, and under your control.",
        },
        {
          badge: "Efficiency",
          title: "Use idle time",
          body: "Speak instead of type on the go and capture tasks directly in the workflow.",
        },
      ],
    },
    answer: {
      eyebrow: "Harness",
      titleHtml: 'A central <span class="brand-highlight">orchestrator</span>.<br>Full control over your AI.',
      kicker: "Not just a chatbot.",
      body: [
        "zuraio is an intelligent harness that analyzes, checks, and orchestrates every request. Complex requests run through multiple loops before an answer is created.",
        "So answers fit your knowledge, your processes, your policies, and your company culture. With zuraio, your AI carries your DNA.",
      ],
      features: [
        "RAG for every project",
        "Roles and permissions",
        "One agent per task",
        "Local, hybrid, or cloud",
        "Audio mode for on the go",
        "Audit logging included",
        "Answers with sources",
        "Modular and scalable",
      ],
      featurePool: [
        "RAG for every project",
        "Roles and permissions",
        "One agent per task",
        "Local, hybrid, or cloud",
        "Audio mode for on the go",
        "Audit logging included",
        "Answers with sources",
        "Modular and scalable",
        "Intent Detection",
        "Task Planning",
        "Agent Routing",
        "Tool Calling",
        "Evaluation",
        "Source Check",
        "Fusion Layer",
        "Corporate Wording",
        "Audit Logging",
        "Access Control",
        "Policy Guardrails",
        "API Layer",
        "MCP Layer",
        "Permission Check",
        "Risk Classification",
        "Policy Check",
        "Tone Detection",
        "Agent Selection",
        "Tool Selection",
        "Connector Layer",
        "Data Retrieval",
        "Web Search",
        "Guardrail Layer",
        "Compliance Layer",
        "Tenant Permissions",
        "Source Validation",
        "Hallucination Check",
        "Fact Check",
        "Policy Enforcement",
        "Prompt Injection Protection",
        "Data Leakage Protection",
        "Relevance Check",
        "Safety Check",
        "Human Review Option",
        "Feedback Loop",
        "Response Layer",
        "Corporate Wording Layer",
        "Tone of Voice Layer",
      ],
      link: "More information",
    },
    voice: {
      eyebrow: "Voice Mode",
      title: "Use time that was lost before.",
      body:
        "Visit reports, project status, thoughts, tasks, and information can be captured by voice: in the car, between meetings, or right after a customer conversation.",
      link: "Explore Voice Agent",
    },
    project: {
      eyebrow: "Knowledge",
      title: "For every project, an agent that understands the project context.",
      body:
        "The project agent knows documents, protocols, tasks, status, decisions, and open points. That keeps project knowledge available without leadership getting buried in administration.",
      stats: [
        { title: "24/7", label: "Context available" },
        { title: "RAG", label: "Answers with sources" },
        { title: "Team", label: "Knowledge stays shared" },
      ],
      link: "See Project Agent",
    },
    knowledge: {
      eyebrow: "Knowledge safeguarding",
      title: "Your company builds knowledge every day. Why should it belong to anyone else?",
      body:
        "zuraio safeguards not only documents, but also experience, decisions, processes, and context. So knowledge stays in the company, even when employees or AI providers change.",
      cards: [
        {
          title: "My AI",
          body: "The knowledge from your company context belongs to you and stays under your control.",
        },
        {
          title: "My RAGs",
          body: "Vectorized knowledge bases run wherever you specify.",
        },
        {
          title: "My data",
          body: "Storage location, access, and usage follow your rules, not the vendor's.",
        },
        {
          title: "My knowledge",
          body: "Experience becomes company knowledge. Safeguard employee knowledge before they leave.",
        },
        {
          title: "My control",
          body: "Roles, permissions, and access are consciously managed and documented.",
        },
      ],
      link: "RAG & knowledge safeguarding",
    },
    security: {
      eyebrow: "Security & data sovereignty",
      title: "Everyone talks about performance. We talk about trust first.",
      body:
        "Data sovereignty is not an extra. It is the foundation for using AI effectively in the company.",
      cards: [
        {
          title: "Maximum security",
          body: "Corporate LLM, local infrastructure, and local storage for maximum control.",
        },
        {
          title: "Conscious security",
          body: "Hybrid architecture: critical data local, less critical data through vetted cloud models.",
        },
        {
          title: "Recognized security",
          body: "Cloud-based with Swiss hosting, controlled data handling, and clear governance.",
        },
        {
          title: "Maximum performance",
          body: "Access leading LLMs via API for use with lower protection needs.",
        },
      ],
      badges: [
        "EU AI Act Ready",
        "GDPR Ready",
        "Human Oversight",
        "Audit Logging",
        "Traceability",
        "Transparency",
        "Auditability",
        "Compliance by Design",
        "Governance Framework",
        "Access Control",
        "Approval Workflows",
        "Data Sovereignty",
        "Swiss Hosting",
        "Corporate LLM",
        "Private AI",
        "Tenant Isolation",
        "Encryption",
        "Tenant Separation",
        "Backup & Recovery",
      ],
    },
    orchestrator: {
      eyebrow: "How zuraio thinks",
      title: "More than chat:<br>A controlled response chain.",
      body:
        "The orchestrator first checks the frame, then chooses the right path, and only then delivers a traceable answer.",
      steps: [
        { title: "Request", body: "What does the user want to know or do?" },
        { title: "Governance Gate", body: "May this person use this data?" },
        { title: "Intent Detection", body: "What intent is behind it?" },
        { title: "Planner", body: "Which agent, which knowledge, which model?" },
        { title: "RAG & Tools", body: "Sources, documents, and actions are used." },
        { title: "Evaluator", body: "Answers are reviewed and classified." },
        { title: "Answer", body: "With sources, boundaries, and next step." },
        { title: "Audit", body: "Traceable for governance and learning." },
      ],
      link: "Harness",
    },
    scaling: {
      eyebrow: "Scalability",
      title: "Not everything tomorrow.<br>Just the right thing today.",
      body:
        "zuraio grows with your company. Start where the biggest lever is and expand the solution at your pace.",
      steps: [
        { title: "Start", body: "Mail agent, project agent, knowledge RAG, or voice agent." },
        { title: "Trust", body: "Set up rights, sources, hosting, and governance properly." },
        { title: "Integrate", body: "Connect data sources, workflows, and existing systems." },
        { title: "Grow", body: "More agents, more areas, more automation." },
      ],
      link: "Scalability",
    },
    team: {
      eyebrow: "Why zuraio",
      title: "<span class=\"hero-title-line\">Because we couldn't find the right solution</span><span class=\"hero-title-line\">we built <span class=\"hero-brand\">zuraio</span></span>",
      heroes: [
        {
          title: "The starting point",
          body: "We wanted to explore AI not just as an experiment, but to integrate it securely and meaningfully into businesses. Yet no solution combined data protection, data sovereignty, flexibility, and an affordable entry point.",
        },
        {
          title: "What was missing",
          body: "We lacked a platform that makes company knowledge usable from day one, enables digital specialists, and grows with the company's requirements.",
        },
        {
          title: "Why zuraio",
          body: "So you don't have to navigate the opaque world of AI yourself and can focus on your core competency.",
        },
      ],
      link: "About us",
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "Today an orchestrator<br>Tomorrow an",
      ecosystem: "AI ecosystem",
      steps: [
        {
          title: "Today",
          body: "Multi-functional chat interface, audio function, mail agent, project agent, internet agent, harness foundation, roles management, system management, API layer, audit logging, and more.",
        },
        {
          title: "Next steps",
          body: "Real-time voice mode, meeting transcript, harness optimization, hardware, employee training, your agent on demand, and more.",
        },
        {
          title: "Vision",
          body: "zuraio as a turn-key solution. One point of contact, full flexibility, complete transparency, fair and close to the customer.",
        },
      ],
      link: "More information",
    },
    demoModal: {
      eyebrow: "Demo",
      title: "Book appointment",
      name: "Last name",
      firstName: "First name",
      company: "Company",
      phone: "Phone number",
      email: "Email address",
      note: "Note",
      optional: "optional",
      calendar: "Calendar",
      hint: "Choose an available day and time.",
      hintSelectDay: "Please select a day in the calendar first.",
      hintSelectTime: "Please choose an available time slot.",
      submit: "Submit",
      close: "Close",
      weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      monthNavPrev: "Previous month",
      monthNavNext: "Next month",
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      bookedLabel: "Booked",
      availableLabel: "Available",
      mailSubject: "zuraio demo appointment",
    },
    footer: {
      columns: [
        {
          title: "Navigation",
          links: [
            "What we solve",
            "Security",
            "Integration",
            "Pricing & models",
            "About us",
          ],
        },
        {
          title: "Security & compliance",
          links: [
            "Swiss hosting",
            "Locally installable",
            "DSG / GDPR ready",
            "EU AI Act ready",
          ],
        },
        {
          title: "Contact & legal",
          links: [
            "Contact",
            "Imprint",
            "Privacy",
            "Cookie settings",
          ],
        },
        {
          title: "Network & social media",
          links: ["Partners", "Social media"],
        },
      ],
      copyright: "© 2026 zuraio. All rights reserved.",
    },
  },
  "pt-BR": {
    meta: {
      title: "zuraio | own your data",
      description:
        "zuraio é o orquestrador de IA para PMEs suíças que querem usar IA sem perder o controle sobre dados, conhecimento e processos.",
    },
    nav: {
      why: "O que resolvemos",
      solution: "Segurança",
      security: "Integrações",
      orchestrator: "Preços e modelos",
      roadmap: "Sobre nós",
      demo: "Solicitar demo",
      language: "Idioma",
      menu: "Menu",
    },
    ui: {
      brandAriaLabel: "Página inicial zuraio",
      navAriaLabel: "Navegação principal",
      openNavAriaLabel: "Abrir navegação",
      chooseLanguageAriaLabel: "Escolher idioma",
      selectLanguageAriaLabel: "Selecionar idioma",
      heroFeaturesAriaLabel: "Funcionalidades principais",
      heroImageAlt: "Espaço de trabalho moderno com vista panorâmica para lago, cidade e montanhas",
      integrationsImageAlt: "Espaço de trabalho com laptop e interface zuraio como símbolo de integração de ferramentas",
      integrationsAriaLabel: "Integrações suportadas",
      answerImageAlt: "Gráfico do orquestrador com lógica do sistema zuraio diante de uma cidade suíça",
      roadmapImageAlt: "Escritório moderno com vista panorâmica para paisagem montanhosa",
      roadmapViewAriaLabel: "Ver roadmap",
    },
    heroFeatures: [
      { title: "Modelos de segurança", body: "Sob medida para<br>sua empresa" },
      { title: "Escalável", body: "A IA cresce<br>no seu ritmo" },
      { title: "Conhecimento empresarial", body: "No local seguro<br>de sua escolha" },
      { title: "Alívio", body: "Você escolhe seus<br>especialistas digitais" },
      { title: "Soluções digitais", body: "Contatos pessoais<br>para você no local." },
    ],
    hero: {
      titleLines: [
        [{ text: "Seu trabalho" }],
        [{ text: "está pronto", accent: true }, { text: "," }],
        [{ text: "antes de você." }],
      ],
      leadLines: [
        { before: "Construímos a ", brand: "zuraio", after: "," },
        "porque essa solução exata ainda não existia:",
        "Uma plataforma de IA que tira do seu time o trabalho administrativo,",
        "torna todo o conhecimento da empresa utilizável e cresce com a sua empresa.",
        "E os seus dados?",
        "Ficam exatamente onde você decidir.",
      ],
    },
    intro: {
      eyebrow: "VOCÊ CONHECE ISSO?",
      titleHtml: "<span><span class=\"brand-highlight\">Ferramentas</span> demais</span><span><span class=\"brand-highlight\">Controle</span> de menos.</span><span><span class=\"brand-highlight\">Tempo</span> perdido demais</span>",
      lines: [
        "O conhecimento da empresa existe, mas é difícil de encontrar. Colaboradores alternam entre sistemas, repetem trabalho e perdem tempo com administração.",
        "Ao mesmo tempo, a incerteza cresce: Onde vão parar dados sensíveis? De quem é o conhecimento? E a IA padrão se encaixa na sua empresa?",
      ],
      badges: [
        "Relatórios de visita",
        "Decisões",
        "Resumo",
        "Preparação",
        "Follow-ups",
        "E-mail",
        "Respostas",
        "Ideias",
        "Diário do projeto",
        "Nota telefônica",
        "Listas de pendências",
        "Compromissos",
        "Pautas",
        "Riscos do projeto",
        "Escaladas",
        "Lembretes",
        "Transferências",
      ],
      featureBadges: [
        {
          number: "01",
          title: "Perda de tempo com administração",
          body: "Especialistas digitais assumem tarefas recorrentes e criam tempo para o trabalho que realmente importa.",
        },
        {
          number: "02",
          title: "Conhecimento importante está disperso",
          body: "A zuraio torna o conhecimento da empresa centralmente acessível e sempre utilizável.",
        },
        {
          number: "03",
          title: "Conhecimento se perde com saídas",
          body: "O conhecimento é preservado por meio de entrevistas antes de se perder.",
        },
        {
          number: "04",
          title: "Trocar de ferramentas irrita e consome tempo",
          body: "Uma plataforma central de IA conecta conhecimento, tarefas e aplicações em um só lugar.",
        },
        {
          number: "05",
          title: "Dados sensíveis acabam em sistemas externos",
          body: "Soberania de dados na zuraio não é um extra, é princípio fundamental.",
        },
        {
          number: "06",
          title: "IA padrão não conhece a empresa",
          body: "A zuraio trabalha com suas políticas, sua linguagem, seu conhecimento e seus dados.",
        },
        {
          number: "07",
          title: "Planos dos fornecedores definem o que é possível",
          body: "A estrutura modular cresce com a sua empresa, não com limites rígidos de pacotes.",
        },
        {
          number: "08",
          title: "Dependência de grandes fornecedores",
          body: "Modelos, provedores e até a própria zuraio permanecem substituíveis; seu conhecimento continua seu.",
        },
        {
          number: "09",
          title: "Pouco ou nenhum controle",
          body: "Você decide onde os dados ficam, quem tem acesso e como a IA funciona na empresa.",
        },
        {
          number: "10",
          title: "Soluções de software existentes",
          body: "A zuraio integra as aplicações mais importantes, em vez de ser mais uma ferramenta isolada.",
        },
      ],
      link: "Mais informações",
    },
    problem: {
      eyebrow: "CONFIANÇA & CONTROLE DE DADOS",
      titleHtml: 'IA sem perder o <span class="brand-highlight">controle</span>.',
      lead:
        "IA não deve significar perder o controle sobre os dados da empresa. Com a zuraio, as empresas decidem onde o sistema opera, quais dados ele pode usar, quem pode acessá-los e como os resultados podem ser verificados.",
      solutionLead: "Nossa solução",
      solutionBody: "Local, híbrida ou na nuvem",
      solutionSub: "Você escolhe o modelo adequado",
      cards: [
        {
          title: "Local",
          body:
            "Sistema, modelos de IA e dados operam totalmente em sua própria infraestrutura. A escolha certa para máxima soberania de dados e informações especialmente sensíveis.",
        },
        {
          title: "Híbrida",
          body:
            "Dados sensíveis e processos confidenciais permanecem em sua própria infraestrutura. Para tarefas intensivas ou criativas, conteúdos selecionados podem ser processados de forma controlada por modelos de nuvem aprovados. Plataforma e armazenamento de dados permanecem na Suíça.",
        },
        {
          title: "Nuvem",
          body:
            "Para máximo desempenho de IA sem hardware próprio, a solução em nuvem com hosting suíço oferece uma forte combinação de desempenho, flexibilidade e segurança.",
        },
      ],
    },
    integrations: {
      eyebrow: "FUNCIONA ONDE A SUA EQUIPA TRABALHA",
      titleHtml: 'Encaixa-se nas <span class="brand-highlight">ferramentas</span> que já utiliza.',
      body: [
        "A comunicação decide quão bem uma empresa funciona. Isso vale tanto para pessoas como para sistemas digitais. A zuraio liga as aplicações mais comuns e leva as suas ferramentas e o conhecimento da empresa, passo a passo, para um ambiente central de IA.",
        "Nem tudo de uma vez. Mas de forma controlada, rastreável e onde cria valor real. Assim surge uma plataforma que não substitui as ferramentas existentes, mas as torna mais produtivas.",
      ],
      pills: [
        "Outlook",
        "Gmail",
        "Microsoft 365",
        "Google Workspace",
        "Teams",
        "Slack",
        "Notion",
        "SharePoint",
        "OneDrive",
        "HubSpot",
        "Salesforce",
        "WhatsApp",
        "Notas de voz",
      ],
      link: "Mais informações",
    },
    useCases: {
      eyebrow: "USE CASES",
      titleHtml:
        '<span>Para que a sua equipa</span><span class="use-cases-accent">tempo para o essencial</span><span>tenha</span>',
      leadHtml:
        "A zuraio assume os devoradores de tempo do dia a dia:<br>respostas guiadas na linguagem da empresa, processamento seguro<br>de dados sensíveis, captura de conhecimento, pesquisas automatizadas,<br>delegar tarefas por voz, e muito mais",
      closing:
        "Tratamos dos seus devoradores de tempo para que possa voltar a concentrar-se na sua paixão.",
      cards: [
        {
          badge: "Confiabilidade",
          title: "Respostas guiadas",
          body: "As respostas são criadas de forma controlada, rastreável e com as fontes certas.",
        },
        {
          badge: "Empresa",
          title: "Wording corporativo",
          body: "A zuraio responde na linguagem, postura e tonalidade da sua empresa.",
        },
        {
          badge: "Conhecimento",
          title: "Resumir reuniões",
          body: "Conversas são transcritas, condensadas e preservadas como conhecimento utilizável.",
        },
        {
          badge: "Segurança",
          title: "Usar ficheiros sensíveis",
          body: "Conteúdos confidenciais também podem ser processados e analisados de forma controlada.",
        },
        {
          badge: "Integração",
          title: "Aliviar e-mails",
          body: "Mensagens são preparadas, resumidas e respondidas de forma adequada.",
        },
        {
          badge: "Ligação",
          title: "Conectar conhecimento",
          body: "Repositórios e fontes de conhecimento existentes são tornados utilizáveis na zuraio.",
        },
        {
          badge: "Pesquisa",
          title: "Automatizar pesquisa web",
          body: "Pesquisas complexas são executadas de forma repetível, estruturada e regular.",
        },
        {
          badge: "Dados",
          title: "Extrair dados de produtos",
          body: "Informações de documentos e sites são reconhecidas de forma limpa e reutilizadas.",
        },
        {
          badge: "Conhecimento",
          title: "Capturar conhecimento",
          body: "Entrevistas e conversas são transformadas em conhecimento empresarial duradouro.",
        },
        {
          badge: "Automação",
          title: "Executar tarefas",
          body: "A zuraio pode iniciar tarefas, operar sistemas e apoiar processos.",
        },
        {
          badge: "Soberania de dados",
          title: "Manter o próprio conhecimento",
          body: "O conhecimento que construiu permanece disponível, transferível e sob o seu controlo.",
        },
        {
          badge: "Eficiência",
          title: "Aproveitar tempo morto",
          body: "Falar em vez de escrever em deslocação e capturar tarefas diretamente no fluxo de trabalho.",
        },
      ],
    },
    answer: {
      eyebrow: "Harness",
      titleHtml: 'Um <span class="brand-highlight">orquestrador</span> central.<br>Controle total sobre sua IA.',
      kicker: "Não é apenas um chatbot.",
      body: [
        "A zuraio é um harness inteligente que analisa, verifica e orquestra cada solicitação. Pedidos complexos passam por vários loops antes de uma resposta ser criada.",
        "Assim, as respostas se encaixam no seu conhecimento, nos seus processos, nas suas políticas e na cultura da sua empresa. Com a zuraio, sua IA carrega o seu DNA.",
      ],
      features: [
        "RAG para cada projeto",
        "Funções e permissões",
        "Um agente por tarefa",
        "Local, híbrido ou nuvem",
        "Modo de áudio para unterwegs",
        "Registro de auditoria incluído",
        "Respostas com fontes",
        "Modular e escalável",
      ],
      featurePool: [
        "RAG para cada projeto",
        "Funções e permissões",
        "Um agente por tarefa",
        "Local, híbrido ou nuvem",
        "Modo de áudio para unterwegs",
        "Registro de auditoria incluído",
        "Respostas com fontes",
        "Modular e escalável",
        "Intent Detection",
        "Task Planning",
        "Agent Routing",
        "Tool Calling",
        "Evaluation",
        "Source Check",
        "Fusion Layer",
        "Corporate Wording",
        "Audit Logging",
        "Access Control",
        "Policy Guardrails",
        "API Layer",
        "MCP Layer",
        "Permission Check",
        "Risk Classification",
        "Policy Check",
        "Tone Detection",
        "Agent Selection",
        "Tool Selection",
        "Connector Layer",
        "Data Retrieval",
        "Web Search",
        "Guardrail Layer",
        "Compliance Layer",
        "Tenant Permissions",
        "Source Validation",
        "Hallucination Check",
        "Fact Check",
        "Policy Enforcement",
        "Prompt Injection Protection",
        "Data Leakage Protection",
        "Relevance Check",
        "Safety Check",
        "Human Review Option",
        "Feedback Loop",
        "Response Layer",
        "Corporate Wording Layer",
        "Tone of Voice Layer",
      ],
      link: "Mais informações",
    },
    voice: {
      eyebrow: "Modo de voz",
      title: "Use o tempo que antes se perdia.",
      body:
        "Relatórios de visita, status de projetos, ideias, tarefas e informações podem ser capturados por voz: no carro, entre reuniões ou logo após uma conversa com o cliente.",
      link: "Aprofundar agente de voz",
    },
    project: {
      eyebrow: "Conhecimento",
      title: "Para cada projeto, um agente que entende o contexto do projeto.",
      body:
        "O agente de projeto conhece documentos, protocolos, tarefas, status, decisões e pontos em aberto. Assim, o conhecimento do projeto continua disponível sem que a liderança afunde na administração.",
      stats: [
        { title: "24/7", label: "Contexto disponível" },
        { title: "RAG", label: "Resposta com fontes" },
        { title: "Equipe", label: "Conhecimento permanece compartilhado" },
      ],
      link: "Ver agente de projeto",
    },
    knowledge: {
      eyebrow: "Proteção do conhecimento",
      title: "Sua empresa constrói conhecimento todos os dias. Por que isso deveria pertencer a outra pessoa?",
      body:
        "A zuraio protege não só documentos, mas também experiência, decisões, processos e contexto. Assim, o conhecimento permanece na empresa, mesmo quando colaboradores ou fornecedores de IA mudam.",
      cards: [
        {
          title: "Minha IA",
          body: "O conhecimento do contexto da sua empresa pertence a você e permanece sob seu controle.",
        },
        {
          title: "Meus RAGs",
          body: "Bases de conhecimento vetorizadas operam onde você definir.",
        },
        {
          title: "Meus dados",
          body: "Local de armazenamento, acesso e uso seguem suas regras, não as do fornecedor.",
        },
        {
          title: "Meu conhecimento",
          body: "Experiências viram conhecimento corporativo. Proteja o conhecimento dos colaboradores antes que saiam.",
        },
        {
          title: "Meu controle",
          body: "Papéis, permissões e acessos são geridos de forma consciente e documentados.",
        },
      ],
      link: "RAG & proteção do conhecimento",
    },
    security: {
      eyebrow: "Segurança & soberania dos dados",
      title: "Todos falam em desempenho. Nós falamos primeiro em confiança.",
      body:
        "Soberania dos dados não é um extra. É a base para usar IA de forma eficaz na empresa.",
      cards: [
        {
          title: "Segurança máxima",
          body: "LLM corporativo, infraestrutura local e armazenamento local para controle máximo.",
        },
        {
          title: "Segurança consciente",
          body: "Arquitetura híbrida: dados críticos locais, menos críticos por modelos em nuvem verificados.",
        },
        {
          title: "Segurança reconhecida",
          body: "Baseado em nuvem com hospedagem suíça, tratamento controlado de dados e governança clara.",
        },
        {
          title: "Desempenho máximo",
          body: "Acesso aos principais LLMs via API para uso com menor necessidade de proteção.",
        },
      ],
      badges: [
        "Pronto para EU AI Act",
        "Pronto para RGPD",
        "Supervisão humana",
        "Registo de auditoria",
        "Rastreabilidade",
        "Transparência",
        "Auditabilidade",
        "Conformidade por conceção",
        "Estrutura de governação",
        "Controlo de acesso",
        "Fluxos de aprovação",
        "Soberania dos dados",
        "Hospedagem suíça",
        "LLM corporativo",
        "IA privada",
        "Isolamento de tenants",
        "Encriptação",
        "Separação de tenants",
        "Backup & recuperação",
      ],
    },
    orchestrator: {
      eyebrow: "Como a zuraio pensa",
      title: "Mais do que chat:<br>Uma cadeia de respostas controlada.",
      body:
        "O orquestrador primeiro verifica o contexto, depois escolhe o caminho certo e só então entrega uma resposta rastreável.",
      steps: [
        { title: "Pedido", body: "O que o usuário quer saber ou fazer?" },
        { title: "Gatilho de governança", body: "Essa pessoa pode usar esses dados?" },
        { title: "Detecção de intenção", body: "Qual é a intenção por trás disso?" },
        { title: "Planejador", body: "Qual agente, qual conhecimento, qual modelo?" },
        { title: "RAG & ferramentas", body: "Fontes, documentos e ações são usados." },
        { title: "Avaliador", body: "As respostas são revisadas e classificadas." },
        { title: "Resposta", body: "Com fontes, limites e próximo passo." },
        { title: "Auditoria", body: "Rastreável para governança e aprendizado." },
      ],
      link: "Harness",
    },
    scaling: {
      eyebrow: "Escalabilidade",
      title: "Não tudo amanhã.<br>O certo hoje.",
      body:
        "A zuraio cresce com a sua empresa. Comece onde o maior impacto está e amplie a solução no seu ritmo.",
      steps: [
        { title: "Começar", body: "Agente de e-mail, agente de projeto, RAG de conhecimento ou agente de voz." },
        { title: "Confiança", body: "Configure corretamente permissões, fontes, hospedagem e governança." },
        { title: "Integrar", body: "Conecte fontes de dados, fluxos de trabalho e sistemas existentes." },
        { title: "Crescer", body: "Mais agentes, mais áreas, mais automação." },
      ],
      link: "Escalabilidade",
    },
    team: {
      eyebrow: "Por que zuraio",
      title: "<span class=\"hero-title-line\">Como não encontramos a solução certa</span><span class=\"hero-title-line\">construímos a <span class=\"hero-brand\">zuraio</span></span>",
      heroes: [
        {
          title: "O ponto de partida",
          body: "Queríamos explorar a IA não apenas como experimento, mas integrá-la de forma segura e sensata nas empresas. Porém, nenhuma solução reunia proteção de dados, soberania dos dados, flexibilidade e um ponto de entrada acessível.",
        },
        {
          title: "O que nos faltava",
          body: "Faltava-nos uma plataforma que tornasse o conhecimento da empresa utilizável desde o primeiro dia, permitisse especialistas digitais e crescesse com as exigências da empresa.",
        },
        {
          title: "Por que a zuraio",
          body: "Para que você não precise navegar sozinho pelo mundo opaco da IA e possa se concentrar na sua competência central.",
        },
      ],
      link: "Sobre nós",
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "Hoje um orquestrador<br>Amanhã um",
      ecosystem: "ecossistema de IA",
      steps: [
        {
          title: "Hoje",
          body: "Interface de chat multifuncional, função de áudio, agente de e-mail, agente de projeto, agente de internet, base do harness, gestão de papéis, gestão do sistema, camada de API, registro de auditoria e muito mais.",
        },
        {
          title: "Próximos passos",
          body: "Modo de voz em tempo real, transcrição de reuniões, otimização do harness, hardware, treinamento de colaboradores, seu agente sob demanda e muito mais.",
        },
        {
          title: "Visão",
          body: "A zuraio como solução turn-key. Um único ponto de contato, total flexibilidade, transparência absoluta, justa e próxima do cliente.",
        },
      ],
      link: "Mais informações",
    },
    demoModal: {
      eyebrow: "Demo",
      title: "Agendar horário",
      name: "Sobrenome",
      firstName: "Nome",
      company: "Empresa",
      phone: "Telefone",
      email: "E-mail",
      note: "Nota",
      optional: "opcional",
      calendar: "Calendário",
      hint: "Escolha um dia e horário disponíveis.",
      hintSelectDay: "Selecione primeiro um dia no calendário.",
      hintSelectTime: "Escolha um horário disponível.",
      submit: "Enviar",
      close: "Fechar",
      weekdays: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      monthNavPrev: "Mês anterior",
      monthNavNext: "Próximo mês",
      months: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ],
      bookedLabel: "Ocupado",
      availableLabel: "Disponível",
      mailSubject: "Agendamento demo zuraio",
    },
    footer: {
      columns: [
        {
          title: "Navegação",
          links: [
            "O que resolvemos",
            "Segurança",
            "Integração",
            "Preços e modelos",
            "Sobre nós",
          ],
        },
        {
          title: "Segurança e conformidade",
          links: [
            "Hosting suíço",
            "Instalável localmente",
            "DSG / GDPR ready",
            "EU AI Act ready",
          ],
        },
        {
          title: "Contato e legal",
          links: [
            "Contato",
            "Impressum",
            "Privacidade",
            "Configurações de cookies",
          ],
        },
        {
          title: "Rede e mídias sociais",
          links: ["Parceiros", "Mídias sociais"],
        },
      ],
      copyright: "© 2026 zuraio. All rights reserved.",
    },
  },
};

const languageToggle = document.getElementById("language-toggle");
const languageMenu = document.getElementById("language-menu");
const languageOptions = document.querySelectorAll(".lang-option");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const htmlElement = document.documentElement;
const languageStorageKey = "zuraio-language";
const USE_CASE_FADE_IN_MS = 2000;
const USE_CASE_REVEAL_MS = 2800;
const USE_CASE_STACK_STEP = 36;
const USE_CASE_STACK_BOTTOM_GAP = 44;
const USE_CASE_STACK_TOP_OFFSET = -10;
const USE_CASE_TEXT_GAP = 32;
let useCaseRevealTimer = null;
let useCaseStackComplete = false;
let useCaseStackInView = false;
let useCaseStackObserverBound = false;
let useCaseRevealCardElements = null;
let useCaseRevealIndex = 0;
let useCaseRevealReducedMotion = false;
let useCaseStackHoverBound = false;
let useCaseHoveredCard = null;
let useCaseResizeListenerBound = false;

function setHeroLead(leadLines) {
  const leadContainer = document.querySelector(".hero-lead");
  if (!leadContainer || !leadLines?.length) {
    return;
  }

  leadContainer.replaceChildren();

  leadLines.forEach((line) => {
    const lineElement = document.createElement("p");
    lineElement.className = "hero-lead-line";

    if (typeof line === "object" && line.brand) {
      if (line.before) {
        lineElement.append(document.createTextNode(line.before));
      }
      const brandElement = document.createElement("span");
      brandElement.className = "hero-brand";
      brandElement.textContent = line.brand;
      lineElement.append(brandElement);
      if (line.after) {
        lineElement.append(document.createTextNode(line.after));
      }
    } else {
      lineElement.textContent = line;
    }

    leadContainer.appendChild(lineElement);
  });
}

function setHeroTitle(heroContent) {
  const titleElement = document.querySelector(".hero-copy h1.hero-title");
  if (!titleElement || !heroContent) {
    return;
  }

  titleElement.replaceChildren();

  const appendAccent = (text) => {
    const accentElement = document.createElement("span");
    accentElement.className = "hero-accent";
    accentElement.textContent = text;
    titleElement.appendChild(accentElement);
  };

  const appendText = (text) => {
    titleElement.appendChild(document.createTextNode(text));
  };

  if (heroContent.titleLines) {
    heroContent.titleLines.forEach((line, lineIndex) => {
      if (lineIndex > 0) {
        titleElement.appendChild(document.createElement("br"));
      }

      line.forEach((segment) => {
        if (segment.accent) {
          appendAccent(segment.text);
        } else {
          appendText(segment.text);
        }
      });
    });
    return;
  }

  const appendLine = (text, accent) => {
    if (!text) {
      return;
    }

    if (titleElement.childNodes.length > 0) {
      titleElement.appendChild(document.createElement("br"));
    }

    if (accent) {
      appendAccent(text);
      return;
    }

    appendText(text);
  };

  appendLine(heroContent.titleBefore);
  appendLine(heroContent.titleAccent, true);
  appendLine(heroContent.titleAfter);
}

function applyFooterLanguage(footer) {
  if (!footer) {
    return;
  }

  const columns = document.querySelectorAll(".site-footer-column");
  columns.forEach((column, columnIndex) => {
    const columnData = footer.columns?.[columnIndex];
    if (!columnData) {
      return;
    }

    setTextSelector(column, ".site-footer-heading", columnData.title);
    const links = column.querySelectorAll("nav a");
    links.forEach((link, linkIndex) => {
      if (columnData.links[linkIndex] !== undefined) {
        link.textContent = columnData.links[linkIndex];
      }
    });
  });

  setText(".site-footer-copy", footer.copyright);
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function setHTML(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = value;
  }
}

function setList(selector, values) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    if (values[index] !== undefined) {
      element.textContent = values[index];
    }
  });
}

function setMarquee(selector, values) {
  const track = document.querySelector(selector);
  if (!track) {
    return;
  }

  track.innerHTML = [...values, ...values].map((value) => `<span>${value}</span>`).join("");
}

const INTEGRATION_ICON_FILES = [
  "outlook.svg",
  "gmail.svg",
  "microsoft365.svg",
  "googleworkspace.svg",
  "teams.svg",
  "slack.svg",
  "notion.svg",
  "sharepoint.svg",
  "onedrive.svg",
  "hubspot.svg",
  "salesforce.svg",
  "whatsapp.svg",
  "voice-notes.svg",
];

function renderIntegrationPill(label, index) {
  const icon = INTEGRATION_ICON_FILES[index] || "voice-notes.svg";
  return `
    <span class="integration-pill">
      <img src="assets/icons/integrations/${icon}" alt="" width="20" height="20">
      <span class="integration-pill-label">${label}</span>
    </span>`;
}

function setupIntegrationPills(labels) {
  const track = document.querySelector("#integrationen .integration-pills-track");
  if (!track || !labels?.length) {
    return;
  }

  const singleSet = labels.map(renderIntegrationPill).join("");
  track.innerHTML = singleSet + singleSet;
}

function setFeatureMarquee(selector, items) {
  const track = document.querySelector(selector);
  if (!track || !items?.length) {
    return;
  }

  const markup = items
    .map(
      (item) => `
        <article class="hero-feature-batch">
          <span class="hero-feature-batch-number">${item.number}</span>
          <div class="hero-feature-batch-copy">
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </div>
        </article>`
    )
    .join("");

  track.innerHTML = markup + markup;
}

function getUseCaseTextSection() {
  return document.querySelector("#use-cases");
}

function getUseCaseStage() {
  return document.querySelector("#use-cases-stage");
}

function getUseCaseCardsStack() {
  return getUseCaseStage()?.querySelector(".use-case-cards-stack") || null;
}
function getUseCaseTextElements(section) {
  return [
    section.querySelector(".use-cases-eyebrow"),
    ...section.querySelectorAll(".use-cases-title > span"),
    section.querySelector(".use-cases-lead"),
    section.querySelector(".use-cases-closing"),
  ].filter(Boolean);
}

function getUseCaseMinLeftForCard(stackRect, top, cardHeight, section) {
  const cardTop = stackRect.top + top;
  const cardBottom = cardTop + cardHeight;
  let minLeft = 0;

  getUseCaseTextElements(section).forEach((element) => {
    const rect = element.getBoundingClientRect();

    if (cardBottom + USE_CASE_TEXT_GAP <= rect.top || cardTop >= rect.bottom + USE_CASE_TEXT_GAP) {
      return;
    }

    minLeft = Math.max(minLeft, rect.right - stackRect.left + USE_CASE_TEXT_GAP);
  });

  return minLeft;
}

function getMaxUseCaseCardHeight(stack) {
  const cards = Array.from(stack.querySelectorAll(".use-case-card"));
  return cards.reduce((max, card) => Math.max(max, card.offsetHeight || 0), 0) || 300;
}

function getUseCaseStackStep(total, zone, maxCardHeight) {
  if (total <= 1) {
    return 0;
  }

  const available = Math.max(0, zone.bottom - zone.top - maxCardHeight);
  return Math.min(USE_CASE_STACK_STEP, available / (total - 1));
}

function getUseCaseStackPosition(index, total, stackRect, textSection, cardWidth, cardHeight, zone, maxCardHeight) {
  const step = getUseCaseStackStep(total, zone, maxCardHeight);
  const top = zone.top + index * step;
  const minLeft = getUseCaseMinLeftForCard(stackRect, top, cardHeight, textSection);
  const maxLeft = stackRect.width - cardWidth;
  const left = Math.min(maxLeft, Math.max(minLeft, maxLeft));

  return { top, left };
}

function getUseCaseCardFromStackPoint(cards, x, y) {
  for (let index = 0; index < cards.length; index += 1) {
    const card = cards[index];
    const top = Number.parseFloat(card.dataset.useTop);
    const left = Number.parseFloat(card.dataset.useLeft);
    const height = card.offsetHeight || 300;
    const width = card.offsetWidth || 280;

    if (!Number.isFinite(top) || !Number.isFinite(left)) {
      continue;
    }

    const peekBottom =
      index < cards.length - 1
        ? Number.parseFloat(cards[index + 1].dataset.useTop)
        : top + height;

    if (y < top || y >= peekBottom || x < left || x > left + width) {
      continue;
    }

    return card;
  }

  return null;
}

function setUseCaseHoveredCard(card) {
  if (useCaseHoveredCard === card) {
    return;
  }

  const stack = getUseCaseCardsStack();
  const cards = Array.from(stack?.querySelectorAll(".use-case-card.is-visible") || []);

  cards.forEach((item) => {
    item.classList.remove("is-hovered");
    const stackIndex = Number.parseInt(item.dataset.stackIndex, 10);
    item.style.zIndex = Number.isFinite(stackIndex) ? String(stackIndex + 1) : "1";
  });

  if (card) {
    card.classList.add("is-hovered");
    card.style.zIndex = "100";
  }

  useCaseHoveredCard = card;
}

function bindUseCaseStackHover() {
  if (useCaseStackHoverBound) {
    return;
  }

  const stack = getUseCaseCardsStack();
  if (!stack) {
    return;
  }

  stack.addEventListener("mousemove", (event) => {
    const rect = stack.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const cards = Array.from(stack.querySelectorAll(".use-case-card.is-visible"));
    setUseCaseHoveredCard(getUseCaseCardFromStackPoint(cards, x, y));
  });

  stack.addEventListener("mouseleave", () => {
    setUseCaseHoveredCard(null);
  });

  useCaseStackHoverBound = true;
}

function layoutUseCaseStackCard(card, index, total) {
  const textSection = getUseCaseTextSection();
  const stack = getUseCaseCardsStack();

  if (!textSection || !stack || !card) {
    return;
  }

  syncUseCaseLayout();

  const stackRect = stack.getBoundingClientRect();
  const cardHeight = card.offsetHeight || 300;
  const cardWidth = card.offsetWidth > 0 ? Math.min(card.offsetWidth, 280) : 280;
  const maxCardHeight = getMaxUseCaseCardHeight(stack);
  const zone = getUseCasePositionZone(stackRect, textSection, cardWidth, maxCardHeight);
  const { top, left } = getUseCaseStackPosition(
    index,
    total,
    stackRect,
    textSection,
    cardWidth,
    cardHeight,
    zone,
    maxCardHeight
  );

  card.dataset.stackIndex = String(index);
  card.dataset.useTop = String(top);
  card.dataset.useLeft = String(left);
  card.style.top = `${top}px`;
  card.style.left = `${left}px`;
  card.style.right = "auto";
  card.style.bottom = "auto";
  card.style.zIndex = card.classList.contains("is-hovered") ? "100" : String(index + 1);
}

function layoutAllUseCaseStackCards() {
  const stack = getUseCaseCardsStack();
  if (!stack) {
    return;
  }

  const cards = Array.from(stack.querySelectorAll(".use-case-card.is-visible"));
  cards.forEach((card) => {
    const index = Number.parseInt(card.dataset.stackIndex, 10);
    if (Number.isFinite(index)) {
      layoutUseCaseStackCard(card, index, cards.length);
    }
  });
}

function revealUseCaseStackCard(card, index, total) {
  layoutUseCaseStackCard(card, index, total);

  requestAnimationFrame(() => {
    card.classList.add("is-visible");

    window.setTimeout(() => {
      card.classList.add("has-entered");
    }, 700);
  });

  if (index === total - 1) {
    useCaseStackComplete = true;
  }
}

function isUseCaseShellInView() {
  const shell = document.getElementById("use-cases-shell");
  if (!shell) {
    return false;
  }

  const rect = shell.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight;
}

function revealNextUseCaseStackCard() {
  const cardElements = useCaseRevealCardElements;
  if (!cardElements?.length || useCaseStackComplete) {
    clearUseCaseRevealTimer();
    return;
  }

  if (useCaseRevealIndex >= cardElements.length) {
    clearUseCaseRevealTimer();
    useCaseStackComplete = true;
    return;
  }

  revealUseCaseStackCard(cardElements[useCaseRevealIndex], useCaseRevealIndex, cardElements.length);
  useCaseRevealIndex += 1;

  if (useCaseRevealIndex >= cardElements.length) {
    clearUseCaseRevealTimer();
  }
}

function startUseCaseStackReveal() {
  const cardElements = useCaseRevealCardElements;
  if (!cardElements?.length || useCaseStackComplete || !useCaseStackInView) {
    return;
  }

  if (useCaseRevealTimer) {
    return;
  }

  if (useCaseRevealIndex >= cardElements.length) {
    useCaseStackComplete = true;
    return;
  }

  if (useCaseRevealReducedMotion) {
    while (useCaseRevealIndex < cardElements.length) {
      revealUseCaseStackCard(cardElements[useCaseRevealIndex], useCaseRevealIndex, cardElements.length);
      useCaseRevealIndex += 1;
    }
    return;
  }

  if (useCaseRevealIndex === 0) {
    requestAnimationFrame(revealNextUseCaseStackCard);
  }

  if (cardElements.length > 1 && useCaseRevealIndex < cardElements.length) {
    useCaseRevealTimer = setInterval(revealNextUseCaseStackCard, USE_CASE_REVEAL_MS);
  }
}

function pauseUseCaseStackReveal() {
  if (useCaseStackComplete) {
    return;
  }

  clearUseCaseRevealTimer();
}

function scheduleUseCaseStackReveal() {
  useCaseStackInView = isUseCaseShellInView();

  if (useCaseStackInView) {
    startUseCaseStackReveal();
  }
}

function bindUseCaseStackObserver() {
  if (useCaseStackObserverBound) {
    return;
  }

  const shell = document.getElementById("use-cases-shell");
  if (!shell) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const wasInView = useCaseStackInView;
      useCaseStackInView = entries.some((entry) => entry.isIntersecting);

      if (useCaseStackInView) {
        if (!wasInView) {
          startUseCaseStackReveal();
        }
        return;
      }

      if (wasInView) {
        pauseUseCaseStackReveal();
      }
    },
    { threshold: 0.12 }
  );

  observer.observe(shell);
  useCaseStackObserverBound = true;
}

function getUseCasePositionZone(stackRect, textSection, cardWidth, cardHeight) {
  const closing = textSection.querySelector(".use-cases-closing");
  const copy = textSection.querySelector(".use-cases-copy");
  const title = textSection.querySelector(".use-cases-title");
  const stage = getUseCaseStage();
  const stageRect = stage?.getBoundingClientRect() || stackRect;
  const isMobile = window.matchMedia("(max-width: 760px)").matches;

  if (!closing) {
    return {
      top: 0,
      bottom: stackRect.height - USE_CASE_STACK_BOTTOM_GAP,
      height: Math.max(0, stackRect.height - cardHeight - USE_CASE_STACK_BOTTOM_GAP),
    };
  }

  const closingRect = closing.getBoundingClientRect();

  if (isMobile && copy) {
    const copyRect = copy.getBoundingClientRect();
    const zoneTop = copyRect.bottom - stageRect.top + USE_CASE_TEXT_GAP;

    return {
      top: zoneTop,
      bottom: closingRect.bottom - stageRect.top - USE_CASE_STACK_BOTTOM_GAP,
      height: Math.max(0, closingRect.bottom - stageRect.top - zoneTop - cardHeight - USE_CASE_STACK_BOTTOM_GAP),
    };
  }

  const shell = document.getElementById("use-cases-shell");
  const shellRect = shell?.getBoundingClientRect();
  const titleRect = title?.getBoundingClientRect();
  const zoneTop = titleRect
    ? titleRect.top - stageRect.top + USE_CASE_STACK_TOP_OFFSET
    : USE_CASE_STACK_TOP_OFFSET;
  const zoneBottom = shellRect
    ? shellRect.bottom - stageRect.top - USE_CASE_STACK_BOTTOM_GAP
    : closingRect.bottom - stageRect.top - USE_CASE_STACK_BOTTOM_GAP;

  return {
    top: zoneTop,
    bottom: zoneBottom,
    height: Math.max(0, zoneBottom - zoneTop - cardHeight),
  };
}

function syncUseCaseLayout() {
  const textSection = getUseCaseTextSection();
  const stage = getUseCaseStage();
  const stack = getUseCaseCardsStack();

  if (!textSection || !stage || !stack) {
    return;
  }

  stage.style.height = `${textSection.offsetHeight}px`;
  stack.style.top = "0";
  stack.style.left = "0";
  stack.style.right = "0";
  stack.style.bottom = "0";
  stack.style.height = "";
}

function bindUseCaseResizeListener() {
  if (useCaseResizeListenerBound) {
    return;
  }

  window.addEventListener("resize", () => {
    syncUseCaseLayout();
    layoutAllUseCaseStackCards();
  });
  useCaseResizeListenerBound = true;
}

function clearUseCaseRevealTimer() {
  if (useCaseRevealTimer) {
    clearInterval(useCaseRevealTimer);
    useCaseRevealTimer = null;
  }
}

function setUseCaseCarousel(cards) {
  const contentStack = getUseCaseCardsStack();
  if (!contentStack || !cards?.length) {
    return;
  }

  clearUseCaseRevealTimer();
  useCaseStackComplete = false;
  useCaseRevealIndex = 0;
  useCaseRevealCardElements = null;
  useCaseHoveredCard = null;
  bindUseCaseResizeListener();
  bindUseCaseStackObserver();

  contentStack.classList.add("is-interactive");
  bindUseCaseStackHover();
  contentStack.replaceChildren(
    ...cards.map((item) => {
      const card = document.createElement("article");
      card.className = "use-case-card";

      const badge = document.createElement("span");
      badge.className = "use-case-batch";
      badge.textContent = item.badge;

      const title = document.createElement("h3");
      title.textContent = item.title;

      const divider = document.createElement("hr");
      divider.className = "use-case-card-divider";

      const body = document.createElement("p");
      body.textContent = item.body;

      card.append(badge, title, divider, body);
      return card;
    })
  );

  const cardElements = Array.from(contentStack.querySelectorAll(".use-case-card"));
  useCaseRevealReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  useCaseRevealCardElements = cardElements;

  cardElements.forEach((card) => {
    card.classList.remove("is-visible", "is-hovered", "has-entered");
    card.style.zIndex = "1";
  });

  syncUseCaseLayout();
  scheduleUseCaseStackReveal();
}

function setCards(selector, cards, mapCard) {
  const cardElements = document.querySelectorAll(selector);
  cardElements.forEach((cardElement, index) => {
    const cardData = cards[index];
    if (cardData) {
      mapCard(cardElement, cardData);
    }
  });
}

function normalizeLanguage(languageCode) {
  if (languageCode === "pt" || languageCode === "pt-BR") {
    return "pt-BR";
  }

  if (languageCode === "en") {
    return "en";
  }

  return "de";
}

function getPreferredLanguage() {
  const storedLanguage = normalizeLanguage(window.localStorage.getItem(languageStorageKey) || "");
  if (storedLanguage !== "de") {
    return storedLanguage;
  }

  const browserLanguage = normalizeLanguage(navigator.language || navigator.userLanguage || "");
  return browserLanguage;
}

function getCurrentPageKey() {
  const dataPage = document.body?.dataset.page;
  if (dataPage) {
    return dataPage;
  }

  const pathname = window.location.pathname.split("/").pop() || "";
  if (!pathname || pathname === "index.html") {
    return null;
  }

  return pathname.replace(/\.html$/, "");
}

function applyCommonUILanguage(ui) {
  if (!ui) {
    return;
  }

  const brandLink = document.querySelector(".brand, .site-footer-brand");
  if (brandLink && ui.brandAriaLabel) {
    brandLink.setAttribute("aria-label", ui.brandAriaLabel);
  }

  const nav = document.querySelector(".site-nav");
  if (nav && ui.navAriaLabel) {
    nav.setAttribute("aria-label", ui.navAriaLabel);
  }

  const menuToggleButton = document.querySelector(".menu-toggle");
  if (menuToggleButton && ui.openNavAriaLabel) {
    menuToggleButton.setAttribute("aria-label", ui.openNavAriaLabel);
  }

  const languageToggleButton = document.getElementById("language-toggle");
  if (languageToggleButton && ui.chooseLanguageAriaLabel) {
    languageToggleButton.setAttribute("aria-label", ui.chooseLanguageAriaLabel);
  }

  const languageMenuElement = document.getElementById("language-menu");
  if (languageMenuElement && ui.selectLanguageAriaLabel) {
    languageMenuElement.setAttribute("aria-label", ui.selectLanguageAriaLabel);
  }

  const heroFeaturesNav = document.querySelector(".hero-features");
  if (heroFeaturesNav && ui.heroFeaturesAriaLabel) {
    heroFeaturesNav.setAttribute("aria-label", ui.heroFeaturesAriaLabel);
  }

  const heroImage = document.querySelector(".hero picture img, .hero > img");
  if (heroImage && ui.heroImageAlt) {
    heroImage.alt = ui.heroImageAlt;
  }

  const integrationsImage = document.querySelector("#integrationen .integrations-image img");
  if (integrationsImage && ui.integrationsImageAlt) {
    integrationsImage.alt = ui.integrationsImageAlt;
  }

  const integrationsPills = document.querySelector("#integrationen .integration-pills");
  if (integrationsPills && ui.integrationsAriaLabel) {
    integrationsPills.setAttribute("aria-label", ui.integrationsAriaLabel);
  }

  const answerImage = document.querySelector(".answer-image img");
  if (answerImage && ui.answerImageAlt) {
    answerImage.alt = ui.answerImageAlt;
  }

  const roadmapImage = document.querySelector("#roadmap .roadmap-image-link img");
  if (roadmapImage && ui.roadmapImageAlt) {
    roadmapImage.alt = ui.roadmapImageAlt;
  }

  const roadmapLink = document.querySelector("#roadmap .roadmap-image-link");
  if (roadmapLink && ui.roadmapViewAriaLabel) {
    roadmapLink.setAttribute("aria-label", ui.roadmapViewAriaLabel);
  }
}

function applyHeroFeatures(features) {
  if (!features?.length) {
    return;
  }

  const items = document.querySelectorAll(".hero-features .hero-feature");
  items.forEach((item, index) => {
    const data = features[index];
    if (!data) {
      return;
    }

    const strong = item.querySelector(".hero-feature-text strong");
    const span = item.querySelector(".hero-feature-text span");
    if (strong) {
      strong.textContent = data.title;
    }
    if (span) {
      span.innerHTML = data.body;
    }
  });
}

function applyDetailPageLanguage(pageContent) {
  if (!pageContent) {
    return;
  }

  if (pageContent.meta?.title) {
    document.title = pageContent.meta.title;
  }

  setText(".detail-hero .eyebrow", pageContent.hero?.eyebrow);
  setText(".detail-hero h1", pageContent.hero?.title);
  setText(".detail-hero .lead", pageContent.hero?.lead);

  const heroImage = document.querySelector(".detail-hero img");
  if (heroImage && pageContent.hero?.imageAlt) {
    heroImage.alt = pageContent.hero.imageAlt;
  }

  const actionButtons = document.querySelectorAll(".detail-hero .hero-actions a, .detail-hero .hero-actions button");
  if (pageContent.actions?.length) {
    pageContent.actions.forEach((action, index) => {
      if (actionButtons[index]) {
        actionButtons[index].textContent = action.text;
      }
    });
  }

  const articles = document.querySelectorAll(".detail-content article");
  articles.forEach((article, index) => {
    const data = pageContent.articles?.[index];
    if (!data) {
      return;
    }

    setTextSelector(article, "h2", data.title);
    setTextSelector(article, "p", data.body);
  });
}

function applyLanguage(languageCode) {
  const code = normalizeLanguage(languageCode);
  const content = translations[code] || translations.de;

  htmlElement.lang = code;

  const isHomePage = Boolean(document.getElementById("home"));
  if (isHomePage) {
    document.title = content.meta.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", content.meta.description);
    }
  }

  setText(".menu-toggle", content.nav.menu);
  setText(".lang-label", content.nav.language);
  applyCommonUILanguage(content.ui);

  const navTexts = [
    content.nav.why,
    content.nav.solution,
    content.nav.security,
    content.nav.orchestrator,
    content.nav.roadmap,
  ];
  Array.from(document.querySelectorAll(".site-nav > a:not(.nav-cta)")).forEach((link, index) => {
    if (navTexts[index]) {
      link.textContent = navTexts[index];
    }
  });
  setText(".nav-cta", content.nav.demo);

  setHeroTitle(content.hero);
  setHeroLead(content.hero.leadLines);
  applyHeroFeatures(content.heroFeatures);

  setText(".intro-band .eyebrow", content.intro.eyebrow);
  setHTML(".project-title", content.intro.titleHtml);
  const introParagraphs = document.querySelectorAll(".intro-copy p");
  introParagraphs.forEach((paragraph, index) => {
    if (content.intro.lines[index]) {
      paragraph.textContent = content.intro.lines[index];
    }
  });
  setText("#warum .intro-link", content.intro.link);
  setMarquee(".hero-badges-track", content.intro.badges);
  setFeatureMarquee(".hero-feature-batches-track", content.intro.featureBadges);

  setText("#loesung .trust-eyebrow", content.problem.eyebrow);
  setHTML("#loesung .trust-title", content.problem.titleHtml);
  setText("#loesung .trust-lead", content.problem.lead);
  setText("#loesung .trust-solution-lead", content.problem.solutionLead);
  setText("#loesung .trust-solution-body", content.problem.solutionBody);
  setText("#loesung .trust-solution-sub", content.problem.solutionSub);
  setCards("#loesung .trust-cards .trust-card", content.problem.cards, (cardElement, cardData) => {
    setTextSelector(cardElement, ".trust-card-text h3", cardData.title);
    setTextSelector(cardElement, ".trust-card-text p", cardData.body);
  });

  setText("#integrationen .integrations-eyebrow", content.integrations.eyebrow);
  setHTML("#integrationen .integrations-title", content.integrations.titleHtml);
  const integrationParagraphs = document.querySelectorAll("#integrationen .integrations-text p");
  integrationParagraphs.forEach((paragraph, index) => {
    if (content.integrations.body[index]) {
      paragraph.textContent = content.integrations.body[index];
    }
  });
  setupIntegrationPills(content.integrations.pills);
  setText("#integrationen .intro-link", content.integrations.link);

  setText("#use-cases .use-cases-eyebrow", content.useCases.eyebrow);
  setHTML("#use-cases .use-cases-title", content.useCases.titleHtml);
  setHTML("#use-cases .use-cases-lead", content.useCases.leadHtml);
  setText("#use-cases .use-cases-closing", content.useCases.closing);
  setUseCaseCarousel(content.useCases.cards);

  setText(".answer-copy .eyebrow", content.answer.eyebrow);
  setHTML(".answer-copy h2", content.answer.titleHtml);
  setText(".answer-kicker", content.answer.kicker);
  const answerParagraphs = document.querySelectorAll(".answer-copy p:not(.eyebrow):not(.answer-kicker)");
  if (answerParagraphs[0]) answerParagraphs[0].textContent = content.answer.body[0];
  if (answerParagraphs[1]) answerParagraphs[1].textContent = content.answer.body[1];
  setText(".answer-link", content.answer.link);

  setText(".story-card .eyebrow", content.voice.eyebrow);
  setText(".story-card h2", content.voice.title);
  setText(".story-card .story-body", content.voice.body);
  setText(".story-card .text-link", content.voice.link);

  setText(".feature-copy .eyebrow", content.project.eyebrow);
  setText(".feature-copy h2", content.project.title);
  setText("#projekt-agent .feature-body", content.project.body);
  const statCells = document.querySelectorAll(".stat-row div");
  statCells.forEach((cell, index) => {
    const statData = content.project.stats[index];
    if (statData) {
      const titleElement = cell.querySelector("strong");
      const labelElement = cell.querySelector("span");
      if (titleElement) titleElement.textContent = statData.title;
      if (labelElement) labelElement.textContent = statData.label;
    }
  });
  setText("#projekt-agent .text-link", content.project.link);

  setText("#wissen .section-heading .eyebrow", content.knowledge.eyebrow);
  setText("#wissen .section-heading h2", content.knowledge.title);
  setText("#wissen .section-heading > p:last-of-type", content.knowledge.body);
  setText("#wissen .knowledge-link", content.knowledge.link);
  setCards("#wissen .knowledge-list article", content.knowledge.cards, (cardElement, cardData) => {
    const heading = cardElement.querySelector("h3");
    if (heading) {
      heading.innerHTML = `<span class="check-icon" aria-hidden="true">✓</span>${cardData.title}`;
    }
    setTextSelector(cardElement, "p", cardData.body);
  });

  setText("#sicherheit .security-hero .eyebrow", content.security.eyebrow);
  setText("#sicherheit .security-hero h2", content.security.title);
  setText("#sicherheit .security-hero p:last-of-type", content.security.body);
  setCards("#sicherheit .security-grid article", content.security.cards, (cardElement, cardData) => {
    setTextSelector(cardElement, "h3", cardData.title);
    setTextSelector(cardElement, "p", cardData.body);
  });
  setMarquee(".compliance-track", content.security.badges);

  setText("#orchestrator .eyebrow", content.orchestrator.eyebrow);
  setHTML("#orchestrator .section-heading h2", content.orchestrator.title);
  setText("#orchestrator .section-heading > p:last-of-type", content.orchestrator.body);
  setText("#orchestrator .orchestrator-link", content.orchestrator.link);
  setCards("#orchestrator .flow li", content.orchestrator.steps, (cardElement, cardData) => {
    setTextSelector(cardElement, "strong", cardData.title);
    setTextSelector(cardElement, "span", cardData.body);
  });

  setText("#skalierung .section-heading .eyebrow", content.scaling.eyebrow);
  setHTML("#skalierung .section-heading h2", content.scaling.title);
  setText("#skalierung .section-heading > p:last-of-type", content.scaling.body);
  setText("#skalierung .scaling-link", content.scaling.link);
  setCards("#skalierung .steps article", content.scaling.steps, (cardElement, cardData) => {
    setTextSelector(cardElement, "h3", cardData.title);
    setTextSelector(cardElement, "p", cardData.body);
  });

  setText("#ueber-uns .eyebrow", content.team.eyebrow);
  setHTML("#ueber-uns h2", content.team.title);
  setText("#ueber-uns .team-link", content.team.link);
  setCards("#ueber-uns .team-heroes .team-hero", content.team.heroes, (cardElement, cardData) => {
    setTextSelector(cardElement, "h3", cardData.title);
    setTextSelector(cardElement, "p", cardData.body);
  });

  setText("#roadmap > .eyebrow", content.roadmap.eyebrow);
  setHTML("#roadmap .roadmap-overlay h2", content.roadmap.title);
  setText("#roadmap .roadmap-overlay .roadmap-ecosystem", content.roadmap.ecosystem);
  setText("#roadmap .roadmap-link", content.roadmap.link);
  setCards("#roadmap .timeline article", content.roadmap.steps, (cardElement, cardData) => {
    setTextSelector(cardElement, "strong", cardData.title);
    setTextSelector(cardElement, "p", cardData.body);
  });

  applyDemoModalLanguage(content.demoModal);

  applyFooterLanguage(content.footer);

  const pageKey = getCurrentPageKey();
  if (pageKey && typeof detailPageTranslations !== "undefined") {
    const pageContent =
      detailPageTranslations[code]?.[pageKey] || detailPageTranslations.de?.[pageKey];
    applyDetailPageLanguage(pageContent);
  }

  if (languageOptions) {
    languageOptions.forEach((option) => {
      const isSelected = option.dataset.language === code;
      option.setAttribute("aria-selected", String(isSelected));
    });
  }

  try {
    window.localStorage.setItem(languageStorageKey, code);
  } catch {
    // Ignore storage failures on restricted file origins.
  }
}

function setTextSelector(containerElement, selector, value) {
  const element = containerElement.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function setHTMLSelector(containerElement, selector, value) {
  const element = containerElement.querySelector(selector);
  if (element) {
    element.innerHTML = value;
  }
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    const target = event.target instanceof HTMLElement ? event.target : null;
    if (target?.closest("a[href]") || target?.closest(".js-demo-trigger")) {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

function closeLanguageMenu() {
  if (!languageMenu || !languageToggle) {
    return;
  }

  languageMenu.hidden = true;
  languageToggle.setAttribute("aria-expanded", "false");
}

function toggleLanguageMenu(forceOpen) {
  if (!languageMenu || !languageToggle) {
    return;
  }

  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : languageMenu.hidden;
  languageMenu.hidden = !shouldOpen;
  languageToggle.setAttribute("aria-expanded", String(shouldOpen));
}

if (languageToggle && languageMenu) {
  languageToggle.addEventListener("click", () => {
    toggleLanguageMenu();
  });

  languageMenu.addEventListener("click", (event) => {
    const option = event.target instanceof HTMLElement ? event.target.closest(".lang-option") : null;
    if (!option) {
      return;
    }

    const language = option.getAttribute("data-language");
    if (language) {
      applyLanguage(language);
      closeLanguageMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Node)) {
      return;
    }

    const target = event.target;
    if (languageToggle.contains(target) || languageMenu.contains(target)) {
      return;
    }

    closeLanguageMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLanguageMenu();
    }
  });
}

function initTrustSynapseCanvas() {
  const section = document.querySelector(".trust-section");
  const canvas = document.querySelector(".trust-synapse-canvas");
  if (!section || !canvas) {
    return;
  }

  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  const colors = {
    primary: "215, 232, 160",
    accent: "248, 255, 220",
    deep: "200, 218, 130",
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clusterSeeds = [
    { x: 0.18, y: 0.28 },
    { x: 0.42, y: 0.22 },
    { x: 0.68, y: 0.34 },
    { x: 0.84, y: 0.24 },
    { x: 0.3, y: 0.62 },
    { x: 0.58, y: 0.58 },
    { x: 0.78, y: 0.72 },
  ];

  const depthLayers = [
    { depth: 0.18, density: 1.35, speed: 0.28, opacity: 0.22, radius: [0.8, 1.3], connect: 0.82 },
    { depth: 0.4, density: 1.15, speed: 0.48, opacity: 0.34, radius: [1.2, 1.9], connect: 0.96 },
    { depth: 0.62, density: 0.95, speed: 0.68, opacity: 0.44, radius: [1.7, 2.5], connect: 1.08 },
    { depth: 0.84, density: 0.72, speed: 0.92, opacity: 0.54, radius: [2.2, 3.3], connect: 1.22 },
    { depth: 1, density: 0.48, speed: 1.12, opacity: 0.62, radius: [2.8, 4.1], connect: 1.34 },
  ];

  let width = 0;
  let height = 0;
  let dpr = 1;
  let layers = [];
  let animationFrame = 0;
  let isVisible = false;
  let isRunning = false;

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function createNode(x, y, layerIndex, layerConfig) {
    const accent = Math.random() < (layerIndex >= 3 ? 0.34 : 0.18);
    const [radiusMin, radiusMax] = layerConfig.radius;
    return {
      x,
      y,
      vx: randomBetween(-0.22, 0.22) * layerConfig.speed,
      vy: randomBetween(-0.22, 0.22) * layerConfig.speed,
      phase: Math.random() * Math.PI * 2,
      pulse: randomBetween(0.7, 1.2),
      radius: randomBetween(radiusMin, radiusMax),
      accent,
      layerIndex,
      depth: layerConfig.depth,
      layerOpacity: layerConfig.opacity,
      layerSpeed: layerConfig.speed,
      connectScale: layerConfig.connect,
    };
  }

  function buildLayerNodes(layerIndex, layerConfig) {
    const area = width * height;
    const baseCount = Math.round(area / 22000);
    const clusterNodes = Math.round(clusterSeeds.length * 10 * layerConfig.density);
    const total = Math.min(
      layerIndex === 0 ? 70 : 52,
      Math.max(layerIndex === 0 ? 34 : 22, Math.round((baseCount + clusterNodes) * layerConfig.density))
    );
    const layerNodes = [];

    clusterSeeds.forEach((seed) => {
      const clusterSize = Math.round(10 * layerConfig.density);
      for (let index = 0; index < clusterSize; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        const spread = Math.pow(Math.random(), 0.55) * Math.min(width, height) * (0.1 + layerIndex * 0.015);
        layerNodes.push(
          createNode(
            seed.x * width + Math.cos(angle) * spread,
            seed.y * height + Math.sin(angle) * spread,
            layerIndex,
            layerConfig
          )
        );
      }
    });

    while (layerNodes.length < total) {
      layerNodes.push(
        createNode(Math.random() * width, Math.random() * height, layerIndex, layerConfig)
      );
    }

    return layerNodes;
  }

  function buildNodes() {
    layers = depthLayers.map((layerConfig, layerIndex) => ({
      config: layerConfig,
      nodes: buildLayerNodes(layerIndex, layerConfig),
    }));
  }

  function resizeCanvas() {
    const bounds = section.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.round(bounds.width));
    height = Math.max(1, Math.round(bounds.height));
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildNodes();
  }

  function updateNode(node, elapsed, motionScale) {
    const driftX = Math.sin(elapsed * 0.22 * node.pulse + node.phase) * 0.34 * node.layerSpeed;
    const driftY = Math.cos(elapsed * 0.19 * node.pulse + node.phase) * 0.34 * node.layerSpeed;
    node.x += (node.vx + driftX) * motionScale;
    node.y += (node.vy + driftY) * motionScale;

    if (node.x < -24) node.vx = Math.abs(node.vx);
    if (node.x > width + 24) node.vx = -Math.abs(node.vx);
    if (node.y < -24) node.vy = Math.abs(node.vy);
    if (node.y > height + 24) node.vy = -Math.abs(node.vy);

    node.vx += Math.sin(elapsed * 0.15 + node.phase) * 0.0025 * node.layerSpeed * motionScale;
    node.vy += Math.cos(elapsed * 0.13 + node.phase) * 0.0025 * node.layerSpeed * motionScale;
    const maxSpeed = 0.35 * node.layerSpeed;
    node.vx = Math.max(-maxSpeed, Math.min(maxSpeed, node.vx));
    node.vy = Math.max(-maxSpeed, Math.min(maxSpeed, node.vy));
  }

  function drawConnection(a, b, connectDistance, depthFactor, lineBoost) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const distance = Math.hypot(dx, dy);
    if (distance > connectDistance) {
      return;
    }

    const strength = 1 - distance / connectDistance;
    const alpha =
      strength * strength * (0.16 + a.layerOpacity * 0.32 + b.layerOpacity * 0.32) * 0.55 * depthFactor * lineBoost;
    const lineTone = a.accent || b.accent ? colors.accent : colors.primary;
    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.strokeStyle = `rgba(${lineTone}, ${alpha})`;
    context.lineWidth = (strength > 0.72 ? 1.35 : 0.95) * (0.7 + a.depth * 0.45);
    context.stroke();
  }

  function drawNode(node, elapsed) {
    const pulse = 0.88 + Math.sin(elapsed * (1.1 + node.depth * 0.5) + node.phase) * 0.12;
    const radius = node.radius * pulse * (0.82 + node.depth * 0.28);
    const tone = node.accent ? colors.accent : colors.deep;
    const alpha = node.layerOpacity * (node.accent ? 1.08 : 0.92);

    context.beginPath();
    context.arc(node.x, node.y, radius + 2.6 * node.depth, 0, Math.PI * 2);
    context.fillStyle = `rgba(${tone}, ${alpha * 0.16})`;
    context.fill();

    context.beginPath();
    context.arc(node.x, node.y, radius, 0, Math.PI * 2);
    context.fillStyle = `rgba(${tone}, ${alpha * 0.72})`;
    context.fill();
  }

  function drawFrame(time) {
    context.clearRect(0, 0, width, height);

    const baseConnectDistance = Math.min(190, Math.max(112, width * 0.145));
    const motionScale = reducedMotion ? 0 : 1;
    const elapsed = time * 0.001;

    layers.forEach((layer) => {
      layer.nodes.forEach((node) => updateNode(node, elapsed, motionScale));
    });

    layers.forEach((layer) => {
      const connectDistance = baseConnectDistance * layer.config.connect;
      const nodes = layer.nodes;

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j += 1) {
          drawConnection(a, nodes[j], connectDistance, 1, 1);
        }
      }
    });

    for (let layerIndex = 0; layerIndex < layers.length - 1; layerIndex += 1) {
      const backLayer = layers[layerIndex];
      const frontLayer = layers[layerIndex + 1];
      const depthGap = frontLayer.config.depth - backLayer.config.depth;
      const bridgeDistance = baseConnectDistance * (0.72 + depthGap * 0.35);
      const bridgeBoost = 0.58 - layerIndex * 0.04;

      backLayer.nodes.forEach((backNode) => {
        frontLayer.nodes.forEach((frontNode) => {
          drawConnection(backNode, frontNode, bridgeDistance, 0.55 + depthGap * 0.35, bridgeBoost);
        });
      });
    }

    layers.forEach((layer) => {
      layer.nodes.forEach((node) => drawNode(node, elapsed));
    });
  }

  function tick(time) {
    if (!isRunning) {
      return;
    }

    drawFrame(time);
    animationFrame = window.requestAnimationFrame(tick);
  }

  function start() {
    if (isRunning || reducedMotion) {
      return;
    }
    isRunning = true;
    animationFrame = window.requestAnimationFrame(tick);
  }

  function stop() {
    isRunning = false;
    window.cancelAnimationFrame(animationFrame);
  }

  const resizeObserver = new ResizeObserver(() => {
    resizeCanvas();
    if (isVisible || reducedMotion) {
      drawFrame(performance.now());
    }
  });
  resizeObserver.observe(section);

  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      isVisible = entries.some((entry) => entry.isIntersecting);
      if (isVisible && document.visibilityState === "visible") {
        start();
      } else {
        stop();
      }
    },
    { threshold: 0.08 }
  );
  intersectionObserver.observe(section);

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && isVisible) {
      start();
    } else {
      stop();
    }
  });

  resizeCanvas();
  drawFrame(performance.now());

  if (reducedMotion) {
    return;
  }

  const initialBounds = section.getBoundingClientRect();
  isVisible = initialBounds.bottom > 0 && initialBounds.top < window.innerHeight;
  if (isVisible && document.visibilityState === "visible") {
    start();
  }
}

initTrustSynapseCanvas();


function roundedRectPerimeter(x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  return [
    `M ${x + r} ${y}`,
    `H ${x + width - r}`,
    `A ${r} ${r} 0 0 1 ${x + width} ${y + r}`,
    `V ${y + height - r}`,
    `A ${r} ${r} 0 0 1 ${x + width - r} ${y + height}`,
    `H ${x + r}`,
    `A ${r} ${r} 0 0 1 ${x} ${y + height - r}`,
    `V ${y + r}`,
    `A ${r} ${r} 0 0 1 ${x + r} ${y}`,
  ].join(" ");
}

function initHeroLeadBorder() {
  const shell = document.querySelector(".hero-lead-shell");
  if (!shell) {
    return;
  }

  const svg = shell.querySelector(".hero-lead-border");
  const track = shell.querySelector(".hero-lead-border-track");
  const borderPath = shell.querySelector(".hero-lead-border-path");
  const canvas = shell.querySelector(".hero-lead-border-flow");
  if (!svg || !track || !borderPath || !canvas) {
    return;
  }

  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let perimeter = 0;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let animationFrame = 0;
  let isRunning = false;
  let particles = [];

  const FLOW_PAD = 22;

  function pickTargetSpeed(bias = 1) {
    const roll = Math.random();
    if (roll < 0.1) {
      return (0.35 + Math.random() * 0.55) * bias;
    }
    if (roll < 0.38) {
      return (0.9 + Math.random() * 1.2) * bias;
    }
    if (roll < 0.68) {
      return (1.8 + Math.random() * 2.2) * bias;
    }
    return (3.8 + Math.random() * 5.8) * bias;
  }

  function createParticles() {
    if (!perimeter) {
      return;
    }

    particles = [
      {
        progress: perimeter * 0.08,
        speed: 1.1,
        targetSpeed: 1.1,
        modeTimer: 18,
        phase: 0.2,
        tailLength: 185,
        speedBias: 1.05,
      },
      {
        progress: perimeter * 0.46,
        speed: 2.4,
        targetSpeed: 2.4,
        modeTimer: 14,
        phase: 1.8,
        tailLength: 165,
        speedBias: 1.45,
      },
      {
        progress: perimeter * 0.78,
        speed: 0.85,
        targetSpeed: 0.85,
        modeTimer: 22,
        phase: 3.4,
        tailLength: 200,
        speedBias: 0.95,
      },
    ];
  }

  function buildPath() {
    const shellWidth = shell.offsetWidth;
    const shellHeight = shell.offsetHeight;
    if (!shellWidth || !shellHeight) {
      return;
    }

    width = shellWidth + FLOW_PAD * 2;
    height = shellHeight + FLOW_PAD * 2;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    const path = roundedRectPerimeter(
      FLOW_PAD + 0.5,
      FLOW_PAD + 0.5,
      shellWidth - 1,
      shellHeight - 1,
      8
    );

    track.setAttribute("d", path);
    borderPath.setAttribute("d", path);
    perimeter = borderPath.getTotalLength();
    particles.forEach((particle) => {
      particle.progress %= perimeter || 1;
    });

    if (!particles.length) {
      createParticles();
    }
  }

  function pointAt(distance) {
    return borderPath.getPointAtLength((distance + perimeter) % perimeter);
  }

  function smoothstep(t) {
    const x = Math.max(0, Math.min(1, t));
    return x * x * (3 - 2 * x);
  }

  function mixColor(from, to, amount) {
    return [
      from[0] + (to[0] - from[0]) * amount,
      from[1] + (to[1] - from[1]) * amount,
      from[2] + (to[2] - from[2]) * amount,
    ];
  }

  function cometTailStyle(t) {
    const accent = [208, 220, 154];
    const primary = [159, 175, 82];
    const white = [255, 255, 252];
    const stops = [
      { at: 0, color: accent },
      { at: 0.46, color: primary },
      { at: 1, color: white },
    ];

    let rgb = stops[0].color;

    for (let index = 0; index < stops.length - 1; index += 1) {
      const current = stops[index];
      const next = stops[index + 1];

      if (t <= next.at) {
        const local = (t - current.at) / (next.at - current.at);
        rgb = mixColor(current.color, next.color, smoothstep(local));
        break;
      }
    }

    const alpha = smoothstep(t) * 0.9;
    return { rgb, alpha };
  }

  function traceSmoothPath(points) {
    if (points.length < 2) {
      return;
    }

    context.moveTo(points[0].x, points[0].y);

    if (points.length === 2) {
      context.lineTo(points[1].x, points[1].y);
      return;
    }

    for (let index = 1; index < points.length - 1; index += 1) {
      const current = points[index];
      const next = points[index + 1];
      const midX = (current.x + next.x) / 2;
      const midY = (current.y + next.y) / 2;
      context.quadraticCurveTo(current.x, current.y, midX, midY);
    }

    const last = points[points.length - 1];
    const beforeLast = points[points.length - 2];
    context.quadraticCurveTo(beforeLast.x, beforeLast.y, last.x, last.y);
  }

  function drawTail(particle) {
    const steps = Math.min(240, Math.max(130, Math.round(particle.tailLength / 4)));
    const tailPoints = [];

    for (let index = steps; index >= 0; index -= 1) {
      const t = index / steps;
      const distance = particle.progress - particle.tailLength * t;
      tailPoints.push(pointAt(distance));
    }

    context.save();
    context.lineCap = "round";
    context.lineJoin = "round";

    const lastIndex = tailPoints.length - 1;

    for (let index = 0; index < lastIndex; index += 1) {
      const t0 = index / lastIndex;
      const t1 = (index + 1) / lastIndex;
      const start = tailPoints[index];
      const end = tailPoints[index + 1];
      const color0 = cometTailStyle(t0);
      const color1 = cometTailStyle(t1);
      const lineWidth = 0.85 + ((t0 + t1) / 2) * 3.8;
      const gradient = context.createLinearGradient(start.x, start.y, end.x, end.y);

      gradient.addColorStop(
        0,
        `rgba(${color0.rgb[0]}, ${color0.rgb[1]}, ${color0.rgb[2]}, ${color0.alpha})`,
      );
      gradient.addColorStop(
        1,
        `rgba(${color1.rgb[0]}, ${color1.rgb[1]}, ${color1.rgb[2]}, ${color1.alpha})`,
      );

      context.beginPath();
      context.moveTo(start.x, start.y);
      context.lineTo(end.x, end.y);
      context.strokeStyle = gradient;
      context.lineWidth = lineWidth;
      context.stroke();
    }

    context.restore();
  }

  function drawHead(particle, time) {
    const head = pointAt(particle.progress);
    const shimmer = 0.62 + Math.sin(time * 0.007 + particle.phase) * 0.28;

    context.save();
    context.shadowBlur = 16;
    context.shadowColor = `rgba(208, 220, 154, ${0.55 + shimmer * 0.4})`;
    context.beginPath();
    context.arc(head.x, head.y, 5.2, 0, Math.PI * 2);
    context.fillStyle = `rgba(245, 250, 220, ${0.28 + shimmer * 0.22})`;
    context.fill();

    context.shadowBlur = 8;
    context.shadowColor = "rgba(247, 251, 232, 0.95)";
    context.beginPath();
    context.arc(head.x, head.y, 3.1, 0, Math.PI * 2);
    context.fillStyle = "#f7fbe8";
    context.fill();

    context.shadowBlur = 0;
    context.beginPath();
    context.arc(head.x, head.y, 1.35, 0, Math.PI * 2);
    context.fillStyle = "#ffffff";
    context.fill();
    context.restore();
  }

  function renderBorder(time) {
    context.clearRect(0, 0, width, height);
    if (!perimeter) {
      return;
    }

    particles.forEach((particle) => {
      drawTail(particle);
      drawHead(particle, time);
    });
  }

  function tick(time) {
    if (!isRunning || !perimeter) {
      return;
    }

    particles.forEach((particle) => {
      if (particle.modeTimer <= 0) {
        particle.targetSpeed = pickTargetSpeed(particle.speedBias);
        particle.modeTimer = 14 + Math.floor(Math.random() * 52);
      } else {
        particle.modeTimer -= 1;
      }

      const acceleration = particle.targetSpeed > particle.speed ? 0.14 : 0.055;
      particle.speed += (particle.targetSpeed - particle.speed) * acceleration;
      if (particle.speed < 0.28) {
        particle.speed = 0.28;
      }
      particle.progress = (particle.progress + particle.speed) % perimeter;
    });

    renderBorder(time);
    animationFrame = window.requestAnimationFrame(tick);
  }

  function start() {
    if (isRunning || reducedMotion) {
      return;
    }
    isRunning = true;
    animationFrame = window.requestAnimationFrame(tick);
  }

  function stop() {
    isRunning = false;
    window.cancelAnimationFrame(animationFrame);
  }

  const resizeObserver = new ResizeObserver(() => {
    buildPath();
    renderBorder(performance.now());
  });
  resizeObserver.observe(shell);

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      start();
    } else {
      stop();
    }
  });

  buildPath();
  renderBorder(performance.now());

  if (reducedMotion) {
    return;
  }

  window.requestAnimationFrame(() => {
    buildPath();
    renderBorder(performance.now());
    start();
  });
}

initHeroLeadBorder();

const DEMO_SELECTABLE_SLOTS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];
const DEMO_SLOT_PATTERNS = [
  ["09:00", "14:00"],
  ["09:30", "15:00"],
  ["11:00"],
  ["14:30", "16:00"],
  ["09:00"],
  ["10:30"],
  ["09:30", "10:00"],
  ["15:00"],
  ["11:30", "14:00"],
  ["09:30", "11:00", "15:30"],
];

let demoModalCopy = translations.de.demoModal;
let demoBookedAppointments = {};
let demoCalendarMonth = null;
let demoSelectedDateKey = null;
let demoSelectedTime = null;
let demoModalLastFocus = null;

function formatDemoDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getInitialDemoMonth() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), 1);
}

function formatDemoMonthLabel(viewMonth, viewYear) {
  return `${demoModalCopy.months[viewMonth]} ${viewYear}`;
}

function getDemoBlockedSelectableSlots(bookedTimes) {
  const blocked = new Set();

  bookedTimes.forEach((time) => {
    const [hourPart, minutePart] = time.split(":");
    const hour = Number(hourPart);
    const minute = Number(minutePart);

    if (minute === 0) {
      blocked.add(`${String(hour).padStart(2, "0")}:00`);
    } else if (minute === 30) {
      blocked.add(`${String(hour + 1).padStart(2, "0")}:00`);
    }
  });

  return blocked;
}

function isDemoWeekday(date) {
  const weekday = date.getDay();
  return weekday >= 1 && weekday <= 5;
}

function buildDemoBookedAppointments() {
  const booked = {};
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let dayOffset = 1;
  let patternIndex = 0;

  while (patternIndex < DEMO_SLOT_PATTERNS.length && dayOffset < 60) {
    const date = new Date(today);
    date.setDate(date.getDate() + dayOffset);
    dayOffset += 1;

    if (!isDemoWeekday(date)) {
      continue;
    }

    booked[formatDemoDateKey(date)] = DEMO_SLOT_PATTERNS[patternIndex];
    patternIndex += 1;
  }

  return booked;
}

function applyDemoModalLanguage(copy) {
  demoModalCopy = copy || translations.de.demoModal;

  setText(".demo-modal-eyebrow", demoModalCopy.eyebrow);
  setText(".demo-modal-title", demoModalCopy.title);
  setText(".demo-calendar-heading", demoModalCopy.calendar);
  setText(".demo-calendar-hint", demoModalCopy.hint);
  setText(".demo-submit", demoModalCopy.submit);

  const closeButton = document.querySelector(".demo-modal-close");
  if (closeButton) {
    closeButton.setAttribute("aria-label", demoModalCopy.close);
  }

  const labels = [
    ["nachname", demoModalCopy.name],
    ["vorname", demoModalCopy.firstName],
    ["firma", demoModalCopy.company],
    ["telefon", demoModalCopy.phone],
    ["email", demoModalCopy.email],
    ["notiz", demoModalCopy.note],
  ];

  labels.forEach(([name, labelText]) => {
    const field = document.querySelector(`.demo-field [name="${name}"]`)?.closest(".demo-field");
    const labelElement = field?.querySelector(".demo-field-label");
    if (!labelElement) {
      return;
    }

    if (name === "notiz") {
      labelElement.textContent = "";
      labelElement.append(`${labelText} `);
      const optional = document.createElement("span");
      optional.className = "demo-optional";
      optional.textContent = demoModalCopy.optional;
      labelElement.append(optional);
    } else {
      labelElement.textContent = labelText;
    }
  });

  if (demoCalendarMonth) {
    renderDemoCalendar();
  }
}

function getDemoModalElements() {
  return {
    modal: document.getElementById("demo-modal"),
    form: document.getElementById("demo-booking-form"),
    calendar: document.getElementById("demo-calendar"),
    timeSlots: document.getElementById("demo-time-slots"),
    hint: document.getElementById("demo-calendar-hint"),
  };
}

function openDemoModal() {
  const { modal } = getDemoModalElements();
  if (!modal) {
    return;
  }

  demoModalLastFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  demoSelectedDateKey = null;
  demoSelectedTime = null;
  demoCalendarMonth = getInitialDemoMonth();
  demoBookedAppointments = buildDemoBookedAppointments();

  modal.hidden = false;
  document.body.classList.add("demo-modal-open");

  const firstInput = modal.querySelector("input");
  if (firstInput instanceof HTMLElement) {
    firstInput.focus();
  }

  renderDemoCalendar();
  renderDemoTimeSlots();
}

function closeDemoModal() {
  const { modal, form } = getDemoModalElements();
  if (!modal) {
    return;
  }

  modal.hidden = true;
  document.body.classList.remove("demo-modal-open");

  if (form instanceof HTMLFormElement) {
    form.reset();
  }

  demoSelectedDateKey = null;
  demoSelectedTime = null;
  renderDemoTimeSlots();

  if (demoModalLastFocus instanceof HTMLElement) {
    demoModalLastFocus.focus();
  }
}

function setDemoHint(message) {
  const { hint } = getDemoModalElements();
  if (hint) {
    hint.textContent = message;
  }
}

function renderDemoCalendar() {
  const { calendar } = getDemoModalElements();
  if (!calendar || !demoCalendarMonth) {
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const viewMonth = demoCalendarMonth.getMonth();
  const viewYear = demoCalendarMonth.getFullYear();
  const monthStart = new Date(viewYear, viewMonth, 1);
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const startOffset = (monthStart.getDay() + 6) % 7;

  const minMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const canGoPrev = monthStart.getTime() > minMonth.getTime();

  calendar.replaceChildren();

  const nav = document.createElement("div");
  nav.className = "demo-calendar-nav";

  const prevButton = document.createElement("button");
  prevButton.type = "button";
  prevButton.setAttribute("aria-label", demoModalCopy.monthNavPrev);
  prevButton.textContent = "‹";
  prevButton.disabled = !canGoPrev;
  prevButton.addEventListener("click", () => {
    demoCalendarMonth.setMonth(demoCalendarMonth.getMonth() - 1);
    demoSelectedDateKey = null;
    demoSelectedTime = null;
    renderDemoCalendar();
    renderDemoTimeSlots();
  });

  const monthLabel = document.createElement("span");
  monthLabel.className = "demo-calendar-month";
  monthLabel.textContent = formatDemoMonthLabel(viewMonth, viewYear);

  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.setAttribute("aria-label", demoModalCopy.monthNavNext);
  nextButton.textContent = "›";
  nextButton.addEventListener("click", () => {
    demoCalendarMonth.setMonth(demoCalendarMonth.getMonth() + 1);
    demoSelectedDateKey = null;
    demoSelectedTime = null;
    renderDemoCalendar();
    renderDemoTimeSlots();
  });

  nav.append(prevButton, monthLabel, nextButton);

  const grid = document.createElement("div");
  grid.className = "demo-calendar-grid";
  grid.setAttribute("role", "grid");

  demoModalCopy.weekdays.forEach((weekday) => {
    const weekdayCell = document.createElement("div");
    weekdayCell.className = "demo-calendar-weekday";
    weekdayCell.textContent = weekday;
    grid.appendChild(weekdayCell);
  });

  for (let index = 0; index < startOffset; index += 1) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "demo-calendar-day is-empty";
    emptyCell.setAttribute("aria-hidden", "true");
    grid.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(viewYear, viewMonth, day);
    const dateKey = formatDemoDateKey(date);
    const bookedTimes = demoBookedAppointments[dateKey] || [];
    const blockedSlots = getDemoBlockedSelectableSlots(bookedTimes);
    const isPast = date < today;
    const isWeekend = !isDemoWeekday(date);
    const isFullyBooked = DEMO_SELECTABLE_SLOTS.every((slot) => blockedSlots.has(slot));
    const hasBookings = bookedTimes.length > 0;
    const isToday = date.getTime() === today.getTime();
    const isSelected = dateKey === demoSelectedDateKey;
    const isSelectable = !isPast && !isFullyBooked && !isWeekend;

    const dayButton = document.createElement("button");
    dayButton.type = "button";
    dayButton.className = "demo-calendar-day";
    dayButton.dataset.date = dateKey;
    dayButton.textContent = String(day);

    if (isPast) {
      dayButton.classList.add("is-past");
      dayButton.disabled = true;
    }

    if (isWeekend) {
      dayButton.classList.add("is-weekend");
      dayButton.disabled = true;
    }

    if (isToday) {
      dayButton.classList.add("is-today");
    }

    if (hasBookings) {
      dayButton.classList.add("is-booked");
      const dot = document.createElement("span");
      dot.className = "demo-calendar-day-dot";
      dot.setAttribute("aria-hidden", "true");
      dayButton.appendChild(dot);
    }

    if (isFullyBooked) {
      dayButton.classList.add("is-booked-full");
      dayButton.disabled = true;
      dayButton.title = demoModalCopy.bookedLabel;
    }

    if (isSelected) {
      dayButton.classList.add("is-selected");
    }

    if (isSelectable) {
      dayButton.addEventListener("click", () => {
        demoSelectedDateKey = dateKey;
        demoSelectedTime = null;
        renderDemoCalendar();
        renderDemoTimeSlots();
      });
    }

    grid.appendChild(dayButton);
  }

  calendar.append(nav, grid);
}

function renderDemoTimeSlots() {
  const { timeSlots } = getDemoModalElements();
  if (!timeSlots) {
    return;
  }

  timeSlots.replaceChildren();

  if (!demoSelectedDateKey) {
    timeSlots.hidden = true;
    setDemoHint(demoModalCopy.hint);
    return;
  }

  timeSlots.hidden = false;
  const bookedTimes = demoBookedAppointments[demoSelectedDateKey] || [];
  const blockedSlots = getDemoBlockedSelectableSlots(bookedTimes);

  DEMO_SELECTABLE_SLOTS.forEach((slot) => {
    const slotButton = document.createElement("button");
    slotButton.type = "button";
    slotButton.className = "demo-time-slot";
    slotButton.textContent = slot;

    if (blockedSlots.has(slot)) {
      slotButton.classList.add("is-booked");
      slotButton.disabled = true;
      slotButton.title = demoModalCopy.bookedLabel;
    } else if (slot === demoSelectedTime) {
      slotButton.classList.add("is-selected");
    }

    if (!blockedSlots.has(slot)) {
      slotButton.addEventListener("click", () => {
        demoSelectedTime = slot;
        renderDemoTimeSlots();
        setDemoHint(`${demoModalCopy.availableLabel}: ${demoSelectedDateKey}, ${slot}`);
      });
    }

    timeSlots.appendChild(slotButton);
  });
}

function initDemoBookingModal() {
  const { modal, form } = getDemoModalElements();
  if (!modal || !form) {
    return;
  }

  demoBookedAppointments = buildDemoBookedAppointments();

  document.addEventListener("click", (event) => {
    const trigger = event.target instanceof Element ? event.target.closest(".js-demo-trigger") : null;
    if (!trigger) {
      return;
    }

    event.preventDefault();
    openDemoModal();
  });

  modal.querySelectorAll("[data-demo-close]").forEach((element) => {
    element.addEventListener("click", closeDemoModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeDemoModal();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!demoSelectedDateKey) {
      setDemoHint(demoModalCopy.hintSelectDay);
      return;
    }

    if (!demoSelectedTime) {
      setDemoHint(demoModalCopy.hintSelectTime);
      return;
    }

    const formData = new FormData(form);
    const bodyLines = [
      `Termin: ${demoSelectedDateKey} ${demoSelectedTime}`,
      `Name: ${formData.get("nachname")}`,
      `Vorname: ${formData.get("vorname")}`,
      `Firma: ${formData.get("firma")}`,
      `Telefon: ${formData.get("telefon")}`,
      `E-Mail: ${formData.get("email")}`,
    ];

    const note = String(formData.get("notiz") || "").trim();
    if (note) {
      bodyLines.push(`Notiz: ${note}`);
    }

    const mailto = `mailto:hello@zuraio.ch?subject=${encodeURIComponent(demoModalCopy.mailSubject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
    closeDemoModal();
  });
}

initDemoBookingModal();
applyLanguage(getPreferredLanguage());

(function syncSiteHeaderOffset() {
  const header = document.querySelector(".site-header");
  if (!header) {
    return;
  }

  function update() {
    document.documentElement.style.setProperty(
      "--site-header-height",
      `${Math.ceil(header.getBoundingClientRect().height)}px`
    );
  }

  update();
  window.addEventListener("resize", update);

  if ("ResizeObserver" in window) {
    new ResizeObserver(update).observe(header);
  }
})();
