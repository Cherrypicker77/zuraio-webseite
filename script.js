const translations = {
  de: {
    meta: {
      title: "zuraio | own your data",
      description:
        "zuraio ist der AI-Orchestrator für Schweizer KMU, die KI nutzen wollen, ohne Kontrolle über Daten, Wissen und Prozesse zu verlieren.",
    },
    nav: {
      solution: "Lösung",
      integration: "Integration",
      security: "Sicherheit",
      insight: "Einblick",
      scaling: "Skalierung",
      transparency: "Transparenz",
      about: "Über uns",
      pricing: "Preise",
      demo: "zuraio erleben",
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
      heroImageAlt: "Luftaufnahme der Zürcher Altstadt bei Sonnenuntergang mit Blick auf Limmat, See und Alpen",
      heroPopupAlt: "zuraio Oberfläche – Apps Vision",
      integrationsImageAlt: "Arbeitsplatz mit Laptop und zuraio-Oberfläche als Symbol für Tool-Integration",
      integrationsAriaLabel: "Unterstützte Integrationen",
      answerImageAlt: "Orchestrator-Grafik mit zuraio Systemlogik vor Schweizer Stadt",
      roadmapImageAlt: "Innenraum mit Panoramablick auf Zürich bei Sonnenuntergang",
      roadmapViewAriaLabel: "Roadmap ansehen",
      teamSectionAriaLabel: "Team",
      storyExamplesLabel: "Beispiele",
      storyValueLabel: "Mehrwert",
      designLabel: "Design",
      chooseDesignAriaLabel: "Design wählen",
      selectDesignAriaLabel: "Hero-Design auswählen",
      designOptions: {
        current: "Aktuell",
        new: "Fenster weiss transp.",
        window: "Fenster weiss",
        fade: "Fade weiss",
        "fade-transparent": "Fade transparent",
        "glow-text": "GlowText",
        "glow-text-1": "Glowtext 1",
        "white-text": "White Text",
        "green-text": "GreenText",
      },
      heroVariantAriaLabel: "Hero-Design wählen",
      heroVariantCurrent: "Aktuell",
      heroVariantAlternative: "Alternative",
    },
    heroFeatures: [
      { title: "Sicher", body: "An Dein Unternehmen<br>angepasst" },
      { title: "Vernetzt", body: "Integriere bestehende<br>Tools" },
      { title: "Erweiterbar", body: "Die KI wächst<br>in Deinem Tempo" },
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
        "zuraio ist die zentrale KI-Arbeitsplattform",
        "für Schweizer KMU.",
        "Sie verbindet Unternehmenswissen,",
        "bestehende Anwendungen und",
        "spezialisierte Assistenten,",
        "damit Aufgaben nicht nur beantwortet,",
        "sondern sicher ausgeführt werden.",
      ],
      workCta: "So arbeitet zuraio",
    },
    intro: {
      eyebrow: "KOMMT DIR DAS BEKANNT VOR?",
      titleParts: [
        { text: "Zu viele " },
        { text: "Tools", accent: true },
        { text: "." },
        { br: true },
        { text: "Zu wenig " },
        { text: "Kontrolle", accent: true },
        { text: "." },
        { br: true },
        { text: "Zu viel " },
        { text: "Zeitverlust", accent: true },
        { text: "." },
      ],
      lead:
        "Deine Mitarbeitenden suchen Informationen, wechseln zwischen Anwendungen und erledigen Aufgaben mehrfach. zuraio verbindet, was heute getrennt arbeitet.",
      link: "So löst zuraio dieses Problem",
      cards: [
        {
          title: "Wissen bleibt verstreut",
          body: "Wichtige Informationen liegen in E-Mails, Dokumenten, Meetings und verschiedenen Systemen. Wer sie braucht, muss zuerst danach suchen.",
        },
        {
          title: "Administration frisst Zeit",
          body: "Zusammenfassungen, Berichte, Vorbereitungen und Follow-ups verdrängen die Aufgaben, die Dein Unternehmen wirklich voranbringen.",
        },
        {
          title: "Antworten fehlt der Zusammenhang",
          body: "Ohne vollständige Historie, verlässliche Quellen und den richtigen Kontext dauern Abklärungen länger und Entscheidungen werden unsicherer.",
        },
      ],
    },
    problem: {
      eyebrow: "VERTRAUEN & DATENKONTROLLE",
      titleHtml: 'KI, ohne die <span class="brand-highlight">Kontrolle</span><br>aus der Hand zu geben.',
      lead:
        "KI darf nicht bedeuten, die Kontrolle über Unternehmensdaten zu verlieren. Mit zuraio bestimmst Du, wo das System betrieben wird, welche Daten es nutzen darf, wer darauf zugreifen kann und wie sich Ergebnisse überprüfen lassen.",
      leadClose: "Du bestimmst das Sicherheits-Modell, das zu deinem Unternehmen passt.",
      link: "Lösungen entdecken",
      cards: [
        {
          title: "Lokal",
          body:
            "<strong>Datenhaltung</strong><span>Eigene Infrastruktur</span><strong>Geeignet für</strong><span>Höchste Schutzanforderungen</span>",
        },
        {
          title: "Hybrid",
          body:
            "<strong>Datenhaltung</strong><span>Sensible Daten lokal, Übriges in der Cloud</span><strong>Geeignet für</strong><span>Balance aus Kontrolle und Leistung</span>",
        },
        {
          title: "Cloud",
          body:
            "<strong>Datenhaltung</strong><span>Schweizer Hosting</span><strong>Geeignet für</strong><span>Schneller Einstieg ohne eigene Hardware</span>",
        },
      ],
    },
    integrations: {
      eyebrow: "FUNKTIONIERT DORT, WO DEIN TEAM ARBEITET",
      titleHtml: '<span class="integrations-title-line">Passt zu den <span class="brand-highlight">Tools</span>, </span><span class="integrations-title-line">die Du bereits nutzt</span>',
      body: [
        "Noch nicht jede Integration ist sofort verfügbar.\nGemeinsam prüfen wir, welche Systeme\nfür Dein Unternehmen\nden grössten Nutzen bringen\nund binden sie Schritt für Schritt,\nkontrolliert und nachvollziehbar an.",
      ],
      pills: [
        "Outlook",
        "Gmail",
        "Microsoft 365",
        "Google Workspace",
        "Teams",
        "WhatsApp",
        "Slack",
        "Notion",
        "SharePoint",
        "OneDrive",
        "Salesforce",
        "Sprachnotizen",
        "HubSpot",
      ],
      link: "Weitere Informationen",
    },
    assistantShowcase: {
      eyebrow: "TÄGLICHE AUFGABEN",
      titleLine1Before: "Erlebe ",
      titleAccent: "Deinen Assistenten",
      titleLine2: "bei der Arbeit",
      progressAriaLabel: "Fortschritt der Beispiele",
      processAriaLabel: "Prozessfortschritt",
      processStatus: "Aktueller Schritt: {phase} · {title}",
      prevAriaLabel: "Vorheriges Beispiel",
      nextAriaLabel: "Nächstes Beispiel",
      pauseAriaLabel: "Animation pausieren",
      playAriaLabel: "Animation fortsetzen",
      pauseLabel: "Pause",
      playLabel: "Weiter",
      exampleAriaLabel: "Beispiel {n} anzeigen",
      statusQuestion: "Beispiel {n} von {total} · Frage",
      statusAnswer: "Beispiel {n} von {total} · Antwort",
      statusAnswerPart: "Beispiel {n} von {total} · Antwort {part}",
      processSteps: [
        { phase: "Frage 1", title: "Mail abrufen" },
        { phase: "Frage 2", title: "Mail zusammenfassen" },
        { phase: "Frage 3", title: "Termine planen" },
        { phase: "Ergebnis", title: "Mailantwort vorbereiten" },
        { phase: "Frage 4", title: "Meeting zusammenfassen" },
        { phase: "Frage 5", title: "Aufgaben setzen" },
        { phase: "Frage 6", title: "Briefing erstellen" },
      ],
      alts: [
        [
          "Eingabe: Zeige mir die letzte E-Mail von Michael Keller zum Projekt Areal Meierwiesen",
          "Antwort: zuraio zeigt die letzte E-Mail zum Projekt Areal Meierwiesen",
        ],
        [
          "Eingabe: Fasse mir den aktuellen Stand des Projekts Areal Meierwiesen zusammen",
          "Antwort: zuraio liefert eine Projektzusammenfassung zu Areal Meierwiesen",
        ],
        [
          "Eingabe: Schlage drei Termine vor und beantworte die E-Mail",
          "Antwort: zuraio erstellt Terminvorschläge und eine E-Mail-Antwort",
        ],
        [
          "Eingabe: Starte das Meetingtranskript zum Projekt Areal Meierwiesen",
          "Antwort: zuraio zeigt das Meetingtranskript mit Audio-Wellenform",
        ],
        [
          "Eingabe: Erstelle aus dem Meeting die Aufgaben für mich",
          "Antwort: zuraio legt die Meeting-Aufgaben im Board an",
        ],
        [
          "Eingabe: Erstelle mir ein kompaktes Briefing für das Statusmeeting mit dem Kunden",
          "Antwort: zuraio liefert ein kompaktes Meetingbriefing",
        ],
      ],
    },
    useCases: {
      eyebrow: "USE CASES",
      titleHtml:
        '<span>Damit Ihr Team</span><span class="use-cases-title-line"><span class="use-cases-accent">Zeit für das Wesentliche</span> hat</span>',
      leadHtml:
        "zuraio übernimmt im Alltag:<br>Geführte Antworten im Unternehmenswording, sichere Verarbeitung<br>sensibler Daten, Wissenserfassung, automatisierte Recherchen,<br>Aufgaben per Sprache delegieren, und vieles mehr",
      closing:
        "Wir kümmern uns um Ihre Zeitfresser, damit Sie sich wieder auf Ihre Leidenschaft konzentrieren können.",
      nextCardAriaLabel: "Nächste Use-Case-Karte anzeigen",
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
          title: "Meeting-Transkript",
          body: "Gespräche werden transkribiert, verdichtet und als nutzbares Wissen gesichert.",
        },
        {
          badge: "Sicherheit",
          title: "Sensible Daten nutzen",
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
          title: "Webrecherche",
          body: "Aufwändige Recherchen werden wiederholbar, strukturiert und regelmässig ausgeführt.",
        },
        {
          badge: "Daten",
          title: "Produktdaten-Extrakt",
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
          title: "Wissen sichern",
          body: "Ihr aufgebautes Wissen bleibt verfügbar, übertragbar und unter Ihrer Kontrolle.",
        },
        {
          badge: "Effizienz",
          title: "Tote Zeit nutzen",
          body: "Unterwegs sprechen statt tippen und Aufgaben direkt im Arbeitsfluss erfassen.",
        },
      ],
    },
    product: {
      eyebrow: "NACHVOLLZIEHBAR",
      titleHtml: 'KI, die Sie später <em class="product-title-accent">erklären</em> können.',
      body: [
        "Die Nutzung von KI wird zunehmend leichter überprüfbar. Kunden, Prüfer und Regulierungsbehörden werden künftig verstärkt erwarten, dass Unternehmen erklären können, woher Informationen stammen und wie KI eingesetzt wurde.",
        "zuraio hilft Dir, vorbereitet zu sein mit quellengestützten Antworten und überprüfbarer KI.",
      ],
      cta: "Mehr zur Transparenz",
      cards: [
        {
          label: "Was gefragt wurde",
          title: "Die Anfrage",
          body: "Behalte die Eingabe oder Aufgabe im Blick.",
        },
        {
          label: "Was genutzt wurde",
          title: "Die Quellen",
          body: "Sehe genau, welche genehmigten Unternehmensinformationen genutzt wurden.",
        },
        {
          label: "Was produziert wurde",
          title: "Das Ergebnis",
          body: "Prüfe die erstellte Antwort, den Entwurf oder die Zusammenfassung.",
        },
        {
          label: "Wer freigegeben hat",
          title: "Die Prüfung",
          body: "Wissen, wer das Ergebnis geprüft, bearbeitet oder freigegeben hat.",
        },
      ],
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
      title: "<span class=\"hero-title-line\">Weil wir keine Lösung fanden,</span><span class=\"hero-title-line\">haben wir <span class=\"hero-brand\">zuraio</span> gebaut.</span>",
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
      eyebrow: "Skalierbar",
      title: "Heute ein sicherer<br><span class=\"roadmap-title-accent\">KI-Assistent.</span><br>Morgen ein KI-Ökosystem",
      leadHtml:
        "Starte dort, wo der Nutzen sofort entsteht.<br>Wachse erst dann weiter, wenn dein Unternehmen bereit ist.<br>Ohne unnötige Komplexität, dafür mit einer klaren Strategie.<br>Mit zuraio an der Seite brauchts Du keine eigene KI-Abteilung.",
      link: "Wachstum erkunden",
      steps: [
        {
          title: "Start",
          body: "KI wird dort akzeptiert, wo sie im Alltag spürbar entlastet. Wir beziehen Mitarbeitende früh ein, schaffen Vertrauen und machen den Nutzen von Anfang an sichtbar.",
        },
        {
          title: "Nächste Schritte",
          body: "Auf dieser Basis entstehen konkrete Ideen aus den Fachbereichen. Systeme werden gezielt angebunden und digitale Assistenten übernehmen wiederkehrende Aufgaben.",
        },
        {
          title: "Zukunft",
          body: "Schritt für Schritt entsteht eine vernetzte KI-Arbeitsumgebung, die Wissen, Systeme und Prozesse verbindet und Dein Unternehmen nachhaltig entlastet.",
        },
      ],
    },
    homeCta: {
      title: "Wo verliert Dein Team heute unnötig Zeit?",
      lead: "Zeig uns einen konkreten Arbeitsablauf aus Deinem Unternehmen. Gemeinsam prüfen wir, ob Zuraio dabei sinnvoll helfen kann und welche Systeme dafür benötigt werden. Falls der Einsatz keinen echten Mehrwert bringt, sagen wir Dir das genauso offen.",
      primary: "Jetzt kennenlernen",
      secondary: "zuraio im Arbeitsalltag",
      tagline: "Dein Unternehmen. Deine Informationen. Deine Freigabe.",
    },
    demoModal: {
      eyebrow: "Demo",
      title: "Termin buchen",
      introLines: [
        "30 Minuten für Dich.",
        "Wir betrachten eine konkrete Aufgabe, Deine Systeme und Deine Anforderungen.",
        "Im Anschluss erhältst Du eine Empfehlung für einen sinnvollen ersten Schritt.",
      ],
      footerNote: "Kostenlos und unverbindlich.",
      name: "Name",
      firstName: "Vorname",
      company: "Firma",
      phone: "Telefonnummer",
      email: "E-Mail Adresse",
      note: "Notiz",
      optionalHeading: "Optional",
      optional: "optional",
      calendar: "Kalender",
      hint: "Wähle einen freien Tag und eine Uhrzeit.",
      hintSelectDay: "Bitte wähle zuerst einen Tag im Kalender.",
      hintSelectTime: "Bitte wähle eine freie Uhrzeit.",
      submit: "Absenden",
      cancel: "Abbrechen",
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
      mailtoLabels: {
        appointment: "Termin",
        name: "Name",
        firstName: "Vorname",
        company: "Firma",
        phone: "Telefon",
        email: "E-Mail",
        note: "Notiz",
      },
    },
    footer: {
      columns: [
        {
          title: "Navigation",
          navAriaLabel: "Navigation",
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
          navAriaLabel: "Sicherheit und Compliance",
          links: [
            "Swiss Hosting",
            "Lokal installierbar",
            "DSG / DSGVO",
            "EU AI Act",
          ],
        },
        {
          title: "Kontakt & Rechtliches",
          navAriaLabel: "Kontakt und Rechtliches",
          links: [
            "Kontakt",
            "Impressum",
            "Datenschutz",
            "Cookie-Einstellungen",
          ],
        },
        {
          title: "Netzwerk & Social Media",
          navAriaLabel: "Netzwerk und Social Media",
          links: ["Partner", "Social Media"],
        },
      ],
      tagline:
        "KI für Schweizer Unternehmen, die sich mehr Kontrolle wünschen",
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
      solution: "Solution",
      integration: "Integration",
      security: "Security",
      insight: "Insights",
      scaling: "Scaling",
      transparency: "Transparency",
      about: "About us",
      pricing: "Pricing",
      demo: "Check potential",
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
      heroImageAlt: "Aerial view of Zurich’s old town at sunset overlooking the Limmat, lake, and Alps",
      heroPopupAlt: "zuraio interface – Apps Vision",
      integrationsImageAlt: "Workspace with laptop and zuraio interface as a symbol for tool integration",
      integrationsAriaLabel: "Supported integrations",
      answerImageAlt: "Orchestrator graphic with zuraio system logic in front of a Swiss city",
      roadmapImageAlt: "Interior space with panoramic view of Zurich at sunset",
      roadmapViewAriaLabel: "View roadmap",
      teamSectionAriaLabel: "Team",
      storyExamplesLabel: "Examples",
      storyValueLabel: "Value",
      designLabel: "Design",
      chooseDesignAriaLabel: "Choose design",
      selectDesignAriaLabel: "Select hero design",
      designOptions: {
        current: "Current",
        new: "White window transp.",
        window: "White window",
        fade: "White fade",
        "fade-transparent": "Transparent fade",
        "glow-text": "GlowText",
        "glow-text-1": "Glowtext 1",
        "white-text": "White Text",
        "green-text": "GreenText",
      },
      heroVariantAriaLabel: "Choose hero design",
      heroVariantCurrent: "Current",
      heroVariantAlternative: "Alternative",
    },
    heroFeatures: [
      { title: "Secure", body: "Tailored to<br>your company" },
      { title: "Connected", body: "Integrate existing<br>tools" },
      { title: "Expandable", body: "AI grows<br>at your pace" },
    ],
    hero: {
      titleLines: [
        [{ text: "Your work" }],
        [{ text: "is ready", accent: true }, { text: "," }],
        [{ text: "before you are." }],
      ],
      leadLines: [
        "zuraio is the central AI control layer",
        "for Swiss SMEs.",
        "It connects company knowledge,",
        "existing applications and",
        "specialized assistants,",
        "so tasks are not only answered,",
        "but securely prepared",
        "and executed.",
      ],
      workCta: "How zuraio works",
    },
    intro: {
      eyebrow: "RECOGNISE THIS?",
      titleParts: [
        { text: "Too many " },
        { text: "tools", accent: true },
        { text: "." },
        { br: true },
        { text: "Too little " },
        { text: "control", accent: true },
        { text: "." },
        { br: true },
        { text: "Too much " },
        { text: "time lost", accent: true },
        { text: "." },
      ],
      lead:
        "Your employees search for information, switch between applications, and complete the same tasks more than once. zuraio connects what today works separately.",
      link: "How zuraio solves this problem",
      cards: [
        {
          title: "Knowledge stays scattered",
          body: "Important information sits in emails, documents, meetings, and different systems. Anyone who needs it has to search for it first.",
        },
        {
          title: "Admin work eats time",
          body: "Summaries, reports, preparation, and follow-ups push aside the tasks that really move your company forward.",
        },
        {
          title: "Answers lack the full picture",
          body: "Without complete history, reliable sources, and the right context, clarifications take longer and decisions become less certain.",
        },
      ],
    },
    problem: {
      eyebrow: "TRUST & DATA CONTROL",
      titleHtml: 'AI without giving up <span class="brand-highlight">control</span>.',
      lead:
        "AI must not mean losing control over company data. With zuraio, you decide where the system runs, which data it may use, who can access it, and how results can be verified.",
      leadClose: "You choose the security model that fits your company.",
      link: "Discover solutions",
      cards: [
        {
          title: "Local",
          body:
            "<strong>Data storage</strong><span>Own infrastructure</span><strong>Suitable for</strong><span>Highest protection requirements</span>",
        },
        {
          title: "Hybrid",
          body:
            "<strong>Data storage</strong><span>Sensitive data local, everything else in the cloud</span><strong>Suitable for</strong><span>Balance of control and performance</span>",
        },
        {
          title: "Cloud",
          body:
            "<strong>Data storage</strong><span>Swiss hosting</span><strong>Suitable for</strong><span>Fast start without own hardware</span>",
        },
      ],
    },
    integrations: {
      eyebrow: "WORKS WHERE YOUR TEAM WORKS",
      titleHtml: '<span class="integrations-title-line">Fits into the <span class="brand-highlight">tools</span></span><span class="integrations-title-line">you already use</span>',
      body: [
        "Not everything at once. Instead, in a controlled, traceable way and where it creates real value. That is how a platform emerges that does not replace existing tools, but makes them more productive.",
      ],
      pills: [
        "Outlook",
        "Gmail",
        "Microsoft 365",
        "Google Workspace",
        "Teams",
        "WhatsApp",
        "Slack",
        "Notion",
        "SharePoint",
        "OneDrive",
        "Salesforce",
        "Voice notes",
        "HubSpot",
      ],
      link: "More information",
    },
    assistantShowcase: {
      eyebrow: "DAILY TASKS",
      titleLine1Before: "See ",
      titleAccent: "your assistant",
      titleLine2: "at work",
      progressAriaLabel: "Example progress",
      processAriaLabel: "Process progress",
      processStatus: "Current step: {phase} · {title}",
      prevAriaLabel: "Previous example",
      nextAriaLabel: "Next example",
      pauseAriaLabel: "Pause animation",
      playAriaLabel: "Resume animation",
      pauseLabel: "Pause",
      playLabel: "Play",
      exampleAriaLabel: "Show example {n}",
      statusQuestion: "Example {n} of {total} · Question",
      statusAnswer: "Example {n} of {total} · Answer",
      statusAnswerPart: "Example {n} of {total} · Answer {part}",
      processSteps: [
        { phase: "Question 1", title: "Retrieve mail" },
        { phase: "Question 2", title: "Summarize mail" },
        { phase: "Question 3", title: "Plan appointments" },
        { phase: "Result", title: "Prepare mail reply" },
        { phase: "Question 4", title: "Summarize meeting" },
        { phase: "Question 5", title: "Set tasks" },
        { phase: "Question 6", title: "Create briefing" },
      ],
      alts: [
        [
          "Input: Show me the latest email from Michael Keller about the Areal Meierwiesen project",
          "Answer: zuraio shows the latest email about the Areal Meierwiesen project",
        ],
        [
          "Input: Summarize the current status of the Areal Meierwiesen project for me",
          "Answer: zuraio delivers a project summary for Areal Meierwiesen",
        ],
        [
          "Input: Suggest three appointments and answer the email",
          "Answer: zuraio creates appointment suggestions and an email reply",
        ],
        [
          "Input: Start the meeting transcript for the Areal Meierwiesen project",
          "Answer: zuraio shows the meeting transcript with an audio waveform",
        ],
        [
          "Input: Create my tasks from the meeting",
          "Answer: zuraio adds the meeting tasks to the board",
        ],
        [
          "Input: Create a compact briefing for the status meeting with the customer",
          "Answer: zuraio delivers a compact meeting briefing",
        ],
      ],
    },
    useCases: {
      eyebrow: "USE CASES",
      titleHtml:
        '<span>So your team</span><span class="use-cases-accent">time for what matters</span><span>has</span>',
      leadHtml:
        "zuraio takes over everyday time sinks:<br>guided answers in your company wording, secure processing<br>of sensitive data, knowledge capture, automated research,<br>delegating tasks by voice, and much more",
      closing:
        "We take care of your time sinks so you can focus on what you are passionate about again.",
      nextCardAriaLabel: "Show next use case card",
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
    product: {
      eyebrow: "TRACEABLE",
      titleHtml: 'AI you can later <em class="product-title-accent">explain</em>.',
      body: [
        "The use of AI is becoming increasingly easier to audit. Customers, auditors, and regulators will increasingly expect companies to explain where information comes from and how AI was used.",
        "zuraio helps you be prepared with source-backed answers and verifiable AI.",
      ],
      cta: "More about transparency",
      cards: [
        {
          label: "What was asked",
          title: "The request",
          body: "Keep the input or task in view.",
        },
        {
          label: "What was used",
          title: "The sources",
          body: "See exactly which approved company information was used.",
        },
        {
          label: "What was produced",
          title: "The result",
          body: "Review the created answer, draft, or summary.",
        },
        {
          label: "Who approved it",
          title: "The review",
          body: "Know who reviewed, edited, or approved the result.",
        },
      ],
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
      title: "<span class=\"hero-title-line\">Because we couldn't find a solution,</span><span class=\"hero-title-line\">we built <span class=\"hero-brand\">zuraio</span>.</span>",
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
      eyebrow: "Scalable",
      title: "Today a secure<br><span class=\"roadmap-title-accent\">AI assistant.</span><br>Tomorrow an AI ecosystem",
      leadHtml:
        "Start where value appears immediately. Grow further only when your company is ready. Without unnecessary complexity — with a clear strategy and sustainable progress. With zuraio by your side, you don’t need your own AI department.",
      link: "Explore growth",
      steps: [
        {
          title: "Start",
          body: "Integrating AI into a company means involving employees from day one. Visible value reduces uncertainty and builds trust. AI is experienced as support that relieves work, strengthens skills, and noticeably improves everyday tasks.",
        },
        {
          title: "Next steps",
          body: "Once trust is established, new ideas emerge directly from the business units. Internal tools are connected step by step, and tailored digital assistants are developed to support concrete tasks and processes.",
        },
        {
          title: "Future",
          body: "From this strong foundation grows a company-wide AI ecosystem that intelligently connects knowledge, systems, assistants, and automations.",
        },
      ],
    },
    homeCta: {
      title: "See what your own assistant could take off your desk.",
      lead: "We look at your current tools, your company knowledge, and your data-control requirements — and identify where Zuraio could help first.",
      primary: "Book a private demo",
      secondary: "See the assistant at work",
      tagline: "Your company. Your information. Your approval.",
    },
    demoModal: {
      eyebrow: "Demo",
      title: "Book appointment",
      introLines: [
        "30 minutes, no obligation.",
        "We look at a concrete task, your systems, and your requirements for data control.",
        "Afterwards you receive a recommendation for a sensible first step.",
      ],
      footerNote: "Free and without obligation.",
      name: "Last name",
      firstName: "First name",
      company: "Company",
      phone: "Phone number",
      email: "Email address",
      note: "Note",
      optionalHeading: "Optional",
      optional: "optional",
      calendar: "Calendar",
      hint: "Choose an available day and time.",
      hintSelectDay: "Please select a day in the calendar first.",
      hintSelectTime: "Please choose an available time slot.",
      submit: "Submit",
      cancel: "Cancel",
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
      mailtoLabels: {
        appointment: "Appointment",
        name: "Last name",
        firstName: "First name",
        company: "Company",
        phone: "Phone",
        email: "Email",
        note: "Note",
      },
    },
    footer: {
      columns: [
        {
          title: "Navigation",
          navAriaLabel: "Navigation",
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
          navAriaLabel: "Security and compliance",
          links: [
            "Swiss hosting",
            "Locally installable",
            "DSG / GDPR",
            "EU AI Act",
          ],
        },
        {
          title: "Contact & legal",
          navAriaLabel: "Contact and legal",
          links: [
            "Contact",
            "Imprint",
            "Privacy",
            "Cookie settings",
          ],
        },
        {
          title: "Network & social media",
          navAriaLabel: "Network and social media",
          links: ["Partners", "Social media"],
        },
      ],
      tagline: "AI for Swiss companies that want more control",
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
      solution: "Solução",
      integration: "Integração",
      security: "Segurança",
      insight: "Insights",
      scaling: "Escala",
      transparency: "Transparência",
      about: "Sobre nós",
      pricing: "Preços",
      demo: "Verificar potencial",
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
      heroImageAlt: "Vista aérea da cidade velha de Zurique ao pôr do sol com Limmat, lago e Alpes",
      heroPopupAlt: "Interface zuraio – Apps Vision",
      integrationsImageAlt: "Espaço de trabalho com laptop e interface zuraio como símbolo de integração de ferramentas",
      integrationsAriaLabel: "Integrações suportadas",
      answerImageAlt: "Gráfico do orquestrador com lógica do sistema zuraio diante de uma cidade suíça",
      roadmapImageAlt: "Interior com vista panorâmica de Zurique ao pôr do sol",
      roadmapViewAriaLabel: "Ver roadmap",
      teamSectionAriaLabel: "Equipe",
      storyExamplesLabel: "Exemplos",
      storyValueLabel: "Valor",
      designLabel: "Design",
      chooseDesignAriaLabel: "Escolher design",
      selectDesignAriaLabel: "Selecionar design do hero",
      designOptions: {
        current: "Atual",
        new: "Janela branca transp.",
        window: "Janela branca",
        fade: "Fade branco",
        "fade-transparent": "Fade transparente",
        "glow-text": "GlowText",
        "glow-text-1": "Glowtext 1",
        "white-text": "White Text",
        "green-text": "GreenText",
      },
      heroVariantAriaLabel: "Escolher design do hero",
      heroVariantCurrent: "Atual",
      heroVariantAlternative: "Alternativa",
    },
    heroFeatures: [
      { title: "Seguro", body: "Sob medida para<br>sua empresa" },
      { title: "Conectado", body: "Integre ferramentas<br>existentes" },
      { title: "Expansível", body: "A IA cresce<br>no seu ritmo" },
    ],
    hero: {
      titleLines: [
        [{ text: "Seu trabalho" }],
        [{ text: "está pronto", accent: true }, { text: "," }],
        [{ text: "antes de você." }],
      ],
      leadLines: [
        "zuraio é o controlo central de IA",
        "para PMEs suíças.",
        "Liga conhecimento empresarial,",
        "aplicações existentes e",
        "assistentes especializados,",
        "para que as tarefas não sejam só respondidas,",
        "mas preparadas com segurança",
        "e executadas.",
      ],
      workCta: "Assim trabalha o zuraio",
    },
    intro: {
      eyebrow: "ISTO PARECE-LHE FAMILIAR?",
      titleParts: [
        { text: "Demasiadas " },
        { text: "ferramentas", accent: true },
        { text: "." },
        { br: true },
        { text: "Pouco " },
        { text: "controle", accent: true },
        { text: "." },
        { br: true },
        { text: "Muito " },
        { text: "tempo perdido", accent: true },
        { text: "." },
      ],
      lead:
        "Os seus colaboradores procuram informações, alternam entre aplicações e realizam tarefas mais do que uma vez. A zuraio liga o que hoje trabalha em separado.",
      link: "Como a zuraio resolve este problema",
      cards: [
        {
          title: "O conhecimento continua disperso",
          body: "Informações importantes estão em e-mails, documentos, reuniões e sistemas diferentes. Quem precisa delas tem de as procurar primeiro.",
        },
        {
          title: "A administração consome tempo",
          body: "Resumos, relatórios, preparação e follow-ups empurram para segundo plano as tarefas que realmente fazem avançar a sua empresa.",
        },
        {
          title: "Às respostas falta o quadro completo",
          body: "Sem histórico completo, fontes fiáveis e o contexto certo, as clarificações demoram mais e as decisões tornam-se menos seguras.",
        },
      ],
    },
    problem: {
      eyebrow: "CONFIANÇA & CONTROLE DE DADOS",
      titleHtml: 'IA sem perder o <span class="brand-highlight">controle</span>.',
      lead:
        "IA não deve significar perder o controle sobre os dados da empresa. Com a zuraio, você decide onde o sistema opera, quais dados ele pode usar, quem pode acessá-los e como os resultados podem ser verificados.",
      leadClose: "Você define o modelo de segurança que se adequa à sua empresa.",
      link: "Descobrir soluções",
      cards: [
        {
          title: "Local",
          body:
            "<strong>Armazenamento</strong><span>Infraestrutura própria</span><strong>Adequado para</strong><span>Máximos requisitos de proteção</span>",
        },
        {
          title: "Híbrida",
          body:
            "<strong>Armazenamento</strong><span>Dados sensíveis locais, o restante na nuvem</span><strong>Adequado para</strong><span>Equilíbrio entre controle e desempenho</span>",
        },
        {
          title: "Nuvem",
          body:
            "<strong>Armazenamento</strong><span>Hosting suíço</span><strong>Adequado para</strong><span>Entrada rápida sem hardware próprio</span>",
        },
      ],
    },
    integrations: {
      eyebrow: "FUNCIONA ONDE A SUA EQUIPA TRABALHA",
      titleHtml: '<span class="integrations-title-line">Encaixa-se nas <span class="brand-highlight">ferramentas</span></span><span class="integrations-title-line">que já utiliza</span>',
      body: [
        "Nem tudo de uma vez. Mas de forma controlada, rastreável e onde cria valor real. Assim surge uma plataforma que não substitui as ferramentas existentes, mas as torna mais produtivas.",
      ],
      pills: [
        "Outlook",
        "Gmail",
        "Microsoft 365",
        "Google Workspace",
        "Teams",
        "WhatsApp",
        "Slack",
        "Notion",
        "SharePoint",
        "OneDrive",
        "Salesforce",
        "Notas de voz",
        "HubSpot",
      ],
      link: "Mais informações",
    },
    assistantShowcase: {
      eyebrow: "TAREFAS DIÁRIAS",
      titleLine1Before: "Veja ",
      titleAccent: "o seu assistente",
      titleLine2: "em ação",
      progressAriaLabel: "Progresso dos exemplos",
      processAriaLabel: "Progresso do processo",
      processStatus: "Passo atual: {phase} · {title}",
      prevAriaLabel: "Exemplo anterior",
      nextAriaLabel: "Próximo exemplo",
      pauseAriaLabel: "Pausar animação",
      playAriaLabel: "Retomar animação",
      pauseLabel: "Pausa",
      playLabel: "Continuar",
      exampleAriaLabel: "Mostrar exemplo {n}",
      statusQuestion: "Exemplo {n} de {total} · Pergunta",
      statusAnswer: "Exemplo {n} de {total} · Resposta",
      statusAnswerPart: "Exemplo {n} de {total} · Resposta {part}",
      processSteps: [
        { phase: "Pergunta 1", title: "Buscar e-mail" },
        { phase: "Pergunta 2", title: "Resumir e-mail" },
        { phase: "Pergunta 3", title: "Planear reuniões" },
        { phase: "Resultado", title: "Preparar resposta" },
        { phase: "Pergunta 4", title: "Resumir reunião" },
        { phase: "Pergunta 5", title: "Definir tarefas" },
        { phase: "Pergunta 6", title: "Criar briefing" },
      ],
      alts: [
        [
          "Entrada: Mostre-me o último e-mail de Michael Keller sobre o projeto Areal Meierwiesen",
          "Resposta: a zuraio mostra o último e-mail sobre o projeto Areal Meierwiesen",
        ],
        [
          "Entrada: Faça-me um resumo do estado atual do projeto Areal Meierwiesen",
          "Resposta: a zuraio entrega um resumo do projeto Areal Meierwiesen",
        ],
        [
          "Entrada: Sugira três horários e responda ao e-mail",
          "Resposta: a zuraio cria sugestões de horário e uma resposta de e-mail",
        ],
        [
          "Entrada: Inicie a transcrição da reunião do projeto Areal Meierwiesen",
          "Resposta: a zuraio mostra a transcrição da reunião com forma de onda de áudio",
        ],
        [
          "Entrada: Crie as tarefas para mim a partir da reunião",
          "Resposta: a zuraio coloca as tarefas da reunião no board",
        ],
        [
          "Entrada: Crie um briefing compacto para a reunião de status com o cliente",
          "Resposta: a zuraio entrega um briefing compacto da reunião",
        ],
      ],
    },
    useCases: {
      eyebrow: "USE CASES",
      titleHtml:
        '<span>Para que a sua equipa</span><span class="use-cases-accent">tempo para o essencial</span><span>tenha</span>',
      leadHtml:
        "A zuraio assume os devoradores de tempo do dia a dia:<br>respostas guiadas na linguagem da empresa, processamento seguro<br>de dados sensíveis, captura de conhecimento, pesquisas automatizadas,<br>delegar tarefas por voz, e muito mais",
      closing:
        "Tratamos dos seus devoradores de tempo para que possa voltar a concentrar-se na sua paixão.",
      nextCardAriaLabel: "Mostrar próximo cartão de use case",
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
    product: {
      eyebrow: "RASTREÁVEL",
      titleHtml: 'IA que você pode depois <em class="product-title-accent">explicar</em>.',
      body: [
        "O uso de IA está cada vez mais fácil de auditar. Clientes, auditores e reguladores vão esperar cada vez mais que as empresas expliquem de onde vêm as informações e como a IA foi usada.",
        "A zuraio ajuda você a estar preparado com respostas baseadas em fontes e IA verificável.",
      ],
      cta: "Mais sobre transparência",
      cards: [
        {
          label: "O que foi perguntado",
          title: "O pedido",
          body: "Mantenha a entrada ou a tarefa à vista.",
        },
        {
          label: "O que foi usado",
          title: "As fontes",
          body: "Veja exatamente quais informações empresariais aprovadas foram usadas.",
        },
        {
          label: "O que foi produzido",
          title: "O resultado",
          body: "Revise a resposta, o rascunho ou o resumo criado.",
        },
        {
          label: "Quem aprovou",
          title: "A revisão",
          body: "Saiba quem revisou, editou ou aprovou o resultado.",
        },
      ],
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
      title: "<span class=\"hero-title-line\">Como não encontramos uma solução,</span><span class=\"hero-title-line\">construímos a <span class=\"hero-brand\">zuraio</span>.</span>",
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
      eyebrow: "Escalável",
      title: "Hoje um<br><span class=\"roadmap-title-accent\">assistente de IA seguro.</span><br>Amanhã um ecossistema de IA",
      leadHtml:
        "Comece onde o valor surge de imediato. Cresça só quando a sua empresa estiver pronta. Sem complexidade desnecessária — com uma estratégia clara e progresso sustentável. Com a zuraio ao lado, não precisa de um departamento próprio de IA.",
      link: "Explorar o crescimento",
      steps: [
        {
          title: "Início",
          body: "Integrar IA na empresa significa envolver as pessoas desde o início. Valor visível reduz a incerteza e cria confiança. A IA é vivida como apoio que alivia, reforça capacidades e melhora o dia a dia.",
        },
        {
          title: "Próximos passos",
          body: "Com a confiança criada, surgem novas ideias diretamente das áreas de negócio. Ferramentas internas são ligadas passo a passo e desenvolvem-se assistentes digitais à medida para tarefas e processos concretos.",
        },
        {
          title: "Futuro",
          body: "Desta base sólida cresce de forma sustentável um ecossistema de IA em toda a empresa, que liga de forma inteligente conhecimento, sistemas, assistentes e automações.",
        },
      ],
    },
    homeCta: {
      title: "Veja o que o seu próprio assistente poderia tirar da sua secretária.",
      lead: "Analisamos as suas ferramentas atuais, o conhecimento da empresa e os requisitos de controlo de dados — e identificamos onde a Zuraio pode ajudar primeiro.",
      primary: "Reservar demo privada",
      secondary: "Ver o assistente em ação",
      tagline: "Sua empresa. Suas informações. Sua autorização.",
    },
    demoModal: {
      eyebrow: "Demo",
      title: "Agendar reunião",
      introLines: [
        "30 minutos, sem compromisso.",
        "Analisamos uma tarefa concreta, os seus sistemas e os seus requisitos de controlo de dados.",
        "Depois recebe uma recomendação para um primeiro passo sensato.",
      ],
      footerNote: "Gratuito e sem compromisso.",
      name: "Sobrenome",
      firstName: "Nome",
      company: "Empresa",
      phone: "Telefone",
      email: "E-mail",
      note: "Nota",
      optionalHeading: "Opcional",
      optional: "opcional",
      calendar: "Calendário",
      hint: "Escolha um dia e horário disponíveis.",
      hintSelectDay: "Selecione primeiro um dia no calendário.",
      hintSelectTime: "Escolha um horário disponível.",
      submit: "Enviar",
      cancel: "Cancelar",
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
      mailtoLabels: {
        appointment: "Horário",
        name: "Sobrenome",
        firstName: "Nome",
        company: "Empresa",
        phone: "Telefone",
        email: "E-mail",
        note: "Nota",
      },
    },
    footer: {
      columns: [
        {
          title: "Navegação",
          navAriaLabel: "Navegação",
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
          navAriaLabel: "Segurança e conformidade",
          links: [
            "Hosting suíço",
            "Instalável localmente",
            "DSG / GDPR",
            "EU AI Act",
          ],
        },
        {
          title: "Contato e legal",
          navAriaLabel: "Contato e legal",
          links: [
            "Contato",
            "Impressum",
            "Privacidade",
            "Configurações de cookies",
          ],
        },
        {
          title: "Rede e mídias sociais",
          navAriaLabel: "Rede e mídias sociais",
          links: ["Parceiros", "Mídias sociais"],
        },
      ],
      tagline: "IA para empresas suíças que querem mais controle",
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
const heroVariantStorageKey = "zuraio-hero-variant";
const HERO_VARIANTS = new Set(["current", "contrast"]);
const heroLeadStorageKey = "zuraio-hero-lead";
const HERO_LEAD_VARIANTS = new Set(["current", "new", "window", "fade", "fade-transparent", "glow-text", "glow-text-1", "white-text", "green-text"]);
const HERO_LEAD_WINDOW_VARIANTS = new Set(["new", "window"]);
const HERO_LEAD_MOBILE_MQ = "(max-width: 980px)";
const designToggle = document.getElementById("design-toggle");
const designMenu = document.getElementById("design-menu");
const USE_CASE_SWAP_MS = 1250;
const USE_CASE_ROTATE_MS = 2400;
let useCaseRotateTimer = null;
let useCaseInView = false;
let useCaseObserverBound = false;
let useCaseResizeListenerBound = false;
let useCaseReducedMotion = false;
let useCaseCardData = null;
let useCaseColumnCount = 0;
let useCaseSlots = [];
let useCaseVisibleData = [];
let useCasePool = [];
let useCaseLastRotatedSlotIndex = null;

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

function setIntroTitle(titleParts) {
  const titleElement = document.querySelector(".intro-band-title");
  if (!titleElement || !titleParts?.length) {
    return;
  }

  titleElement.replaceChildren();
  titleParts.forEach((part) => {
    if (part?.br) {
      titleElement.appendChild(document.createElement("br"));
      return;
    }

    if (!part?.text) {
      return;
    }

    if (part.accent) {
      const accentElement = document.createElement("span");
      accentElement.className = "intro-band-title-accent";
      accentElement.textContent = part.text;
      titleElement.appendChild(accentElement);
      return;
    }

    titleElement.appendChild(document.createTextNode(part.text));
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
    const nav = column.querySelector("nav");
    if (nav && columnData.navAriaLabel) {
      nav.setAttribute("aria-label", columnData.navAriaLabel);
    }
    const links = column.querySelectorAll("nav a");
    links.forEach((link, linkIndex) => {
      if (columnData.links[linkIndex] !== undefined) {
        link.textContent = columnData.links[linkIndex];
      }
    });
  });

  setText(".site-footer-tagline", footer.tagline);
  setText(".site-footer-copy", footer.copyright);
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element && value !== undefined) {
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

const INTEGRATION_ICON_BY_LABEL = {
  Outlook: "outlook.svg",
  Gmail: "gmail.svg",
  "Microsoft 365": "microsoft365.svg",
  "Google Workspace": "googleworkspace.svg",
  Teams: "teams.svg",
  Slack: "slack.svg",
  Notion: "notion.svg",
  SharePoint: "sharepoint.svg",
  OneDrive: "onedrive.svg",
  HubSpot: "hubspot.svg",
  Salesforce: "salesforce.svg",
  WhatsApp: "whatsapp.svg",
  Sprachnotizen: "voice-notes.svg",
  "Voice notes": "voice-notes.svg",
  "Notas de voz": "voice-notes.svg",
};

const UNAVAILABLE_INTEGRATIONS = new Set([
  "HubSpot",
  "Salesforce",
  "Slack",
  "Notion",
  "WhatsApp",
]);

function createIntegrationPill(label) {
  const icon = INTEGRATION_ICON_BY_LABEL[label] || "voice-notes.svg";
  const pill = document.createElement("span");
  pill.className = UNAVAILABLE_INTEGRATIONS.has(label)
    ? "integration-pill integration-pill--unavailable"
    : "integration-pill";

  const image = document.createElement("img");
  image.src = `assets/icons/integrations/${icon}`;
  image.alt = "";
  image.width = 20;
  image.height = 20;

  const text = document.createElement("span");
  text.className = "integration-pill-label";
  text.textContent = label;

  pill.append(image, text);
  return pill;
}

function markUnavailableIntegrationPills(track) {
  track.querySelectorAll(".integration-pill").forEach((pill) => {
    const label = pill.querySelector(".integration-pill-label")?.textContent;
    pill.classList.toggle(
      "integration-pill--unavailable",
      UNAVAILABLE_INTEGRATIONS.has(label)
    );
  });
}

function getIntegrationPillLabels(track) {
  return [...track.querySelectorAll(".integration-pill-label")].map((label) => label.textContent);
}

function integrationPillLabelsMatch(labels, existingLabels) {
  return (
    existingLabels.length === labels.length &&
    labels.every((label, index) => existingLabels[index] === label)
  );
}

function appendIntegrationPillSet(track, labels) {
  labels.forEach((label) => {
    track.append(createIntegrationPill(label));
  });
}

function resetIntegrationPillsAnimation(track) {
  if (!track) {
    return;
  }

  track.style.animation = "none";
  track.style.transform = "translateX(0)";
  void track.offsetWidth;
  track.style.removeProperty("transform");
  track.style.removeProperty("animation");
}

function setupIntegrationPills(labels) {
  const track = document.querySelector("#integrationen .integration-pills-track");
  if (!track || !labels?.length) {
    return;
  }

  const existingLabels = getIntegrationPillLabels(track);
  const hasDoubleSet =
    existingLabels.length === labels.length * 2 &&
    integrationPillLabelsMatch(labels, existingLabels.slice(0, labels.length)) &&
    integrationPillLabelsMatch(labels, existingLabels.slice(labels.length));

  if (hasDoubleSet) {
    markUnavailableIntegrationPills(track);
    return;
  }

  const hasSingleSet = integrationPillLabelsMatch(labels, existingLabels);
  if (hasSingleSet) {
    resetIntegrationPillsAnimation(track);
    appendIntegrationPillSet(track, labels);
    markUnavailableIntegrationPills(track);
    return;
  }

  resetIntegrationPillsAnimation(track);
  track.replaceChildren();
  appendIntegrationPillSet(track, labels);
  appendIntegrationPillSet(track, labels);
  markUnavailableIntegrationPills(track);
}

let featureMarqueeCleanup = null;

function setupInteractiveFeatureMarquee() {
  const container = document.querySelector(".hero-feature-batches");
  const track = document.querySelector(".hero-feature-batches-track");
  if (!container || !track || !track.children.length) {
    return null;
  }

  const AUTO_SCROLL_DURATION = 90;
  const RESUME_DELAY = 350;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let isDragging = false;
  let dragStartX = 0;
  let dragStartScrollLeft = 0;
  let resumeTimeout = null;

  const getLoopWidth = () => track.scrollWidth / 2;

  const normalizeOffset = (offset) => {
    const loopWidth = getLoopWidth();
    if (loopWidth <= 0) {
      return 0;
    }

    return ((offset % loopWidth) + loopWidth) % loopWidth;
  };

  const getAnimatedOffset = () => {
    const style = window.getComputedStyle(track);
    if (style.transform === "none") {
      return 0;
    }

    try {
      const matrix = new DOMMatrixReadOnly(style.transform);
      return Math.abs(matrix.m41);
    } catch {
      const match = style.transform.match(/matrix(3d)?\(([^)]+)\)/);
      if (!match) {
        return 0;
      }

      const values = match[2].split(",").map((value) => Number.parseFloat(value.trim()));
      return Math.abs(values.length === 16 ? values[12] : values[4] || 0);
    }
  };

  const normalizeScroll = () => {
    const loopWidth = getLoopWidth();
    if (loopWidth <= 0) {
      return;
    }

    if (container.scrollLeft >= loopWidth) {
      container.scrollLeft -= loopWidth;
    } else if (container.scrollLeft < 0) {
      container.scrollLeft += loopWidth;
    }
  };

  const enterManualMode = () => {
    if (container.classList.contains("is-manual")) {
      return;
    }

    const offset = normalizeOffset(getAnimatedOffset());
    track.style.animation = "none";
    track.style.transform = "none";
    track.style.willChange = "auto";
    void track.offsetWidth;
    container.classList.add("is-manual");
    container.scrollLeft = offset;
  };

  const exitManualMode = () => {
    if (!container.classList.contains("is-manual")) {
      return;
    }

    const loopWidth = getLoopWidth();
    const offset = normalizeOffset(container.scrollLeft);

    container.classList.remove("is-manual", "is-dragging");
    container.scrollLeft = 0;
    track.style.animation = "";
    track.style.transform = "";
    track.style.willChange = "transform";

    if (!reducedMotion && loopWidth > 0) {
      track.style.animationDelay = `-${(offset / loopWidth) * AUTO_SCROLL_DURATION}s`;
    }
  };

  const scheduleResume = () => {
    clearTimeout(resumeTimeout);
    resumeTimeout = window.setTimeout(() => {
      normalizeScroll();
      exitManualMode();
    }, RESUME_DELAY);
  };

  const onPointerDown = (event) => {
    if (event.button !== 0) {
      return;
    }

    enterManualMode();
    isDragging = true;
    dragStartX = event.clientX;
    dragStartScrollLeft = container.scrollLeft;
    container.classList.add("is-dragging");
    container.setPointerCapture(event.pointerId);
    clearTimeout(resumeTimeout);
  };

  const onPointerMove = (event) => {
    if (!isDragging) {
      return;
    }

    container.scrollLeft = dragStartScrollLeft + (dragStartX - event.clientX);
    normalizeScroll();
  };

  const endDrag = (event) => {
    if (!isDragging) {
      return;
    }

    isDragging = false;
    container.classList.remove("is-dragging");

    try {
      container.releasePointerCapture(event.pointerId);
    } catch {
      // Ignore if pointer capture was already released.
    }

    normalizeScroll();
    scheduleResume();
  };

  const onScroll = () => {
    if (isDragging) {
      return;
    }

    normalizeScroll();
    scheduleResume();
  };

  const onWheel = (event) => {
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.shiftKey ? event.deltaY : 0;
    if (!delta) {
      return;
    }

    enterManualMode();
    container.scrollLeft += delta;
    normalizeScroll();
    scheduleResume();
  };

  container.addEventListener("pointerdown", onPointerDown);
  container.addEventListener("pointermove", onPointerMove);
  container.addEventListener("pointerup", endDrag);
  container.addEventListener("pointercancel", endDrag);
  container.addEventListener("scroll", onScroll, { passive: true });
  container.addEventListener("wheel", onWheel, { passive: true });

  const resizeObserver = new ResizeObserver(() => {
    if (container.classList.contains("is-manual")) {
      normalizeScroll();
      return;
    }

    const loopWidth = getLoopWidth();
    if (loopWidth <= 0 || reducedMotion) {
      return;
    }

    const offset = normalizeOffset(getAnimatedOffset());
    track.style.animationDelay = `-${(offset / loopWidth) * AUTO_SCROLL_DURATION}s`;
  });
  resizeObserver.observe(track);

  if (reducedMotion) {
    enterManualMode();
  }

  return () => {
    clearTimeout(resumeTimeout);
    resizeObserver.disconnect();
    container.removeEventListener("pointerdown", onPointerDown);
    container.removeEventListener("pointermove", onPointerMove);
    container.removeEventListener("pointerup", endDrag);
    container.removeEventListener("pointercancel", endDrag);
    container.removeEventListener("scroll", onScroll);
    container.removeEventListener("wheel", onWheel);
    container.classList.remove("is-manual", "is-dragging");
    track.style.animation = "";
    track.style.animationDelay = "";
    track.style.transform = "";
    track.style.willChange = "";
  };
}

function renderFeatureBatch(item) {
  const article = document.createElement("article");
  article.className = "hero-feature-batch";

  const number = document.createElement("span");
  number.className = "hero-feature-batch-number";
  number.textContent = item.number;

  const copy = document.createElement("div");
  copy.className = "hero-feature-batch-copy";

  const title = document.createElement("h3");
  title.textContent = item.title;

  const body = document.createElement("p");
  body.textContent = item.body;

  copy.append(title, body);
  article.append(number, copy);
  return article;
}

function setFeatureMarquee(selector, items) {
  const track = document.querySelector(selector);
  if (!track || !items?.length) {
    return;
  }

  if (featureMarqueeCleanup) {
    featureMarqueeCleanup();
    featureMarqueeCleanup = null;
  }

  track.replaceChildren();
  items.forEach((item) => {
    track.append(renderFeatureBatch(item));
  });
  items.forEach((item) => {
    track.append(renderFeatureBatch(item));
  });

  const container = track.closest(".hero-feature-batches");
  if (container) {
    container.scrollLeft = 0;
  }

  featureMarqueeCleanup = setupInteractiveFeatureMarquee();
}

function getUseCaseColumnCount() {
  if (window.matchMedia("(max-width: 760px)").matches) {
    return 1;
  }

  if (window.matchMedia("(max-width: 980px)").matches) {
    return 3;
  }

  return 6;
}

function pickRandomUseCaseSlotIndex() {
  if (useCaseColumnCount <= 1) {
    useCaseLastRotatedSlotIndex = 0;
    return 0;
  }

  let slotIndex = Math.floor(Math.random() * useCaseColumnCount);
  while (slotIndex === useCaseLastRotatedSlotIndex) {
    slotIndex = Math.floor(Math.random() * useCaseColumnCount);
  }

  useCaseLastRotatedSlotIndex = slotIndex;
  return slotIndex;
}

function getUseCaseStage() {
  return document.querySelector("#use-cases-stage");
}

function getUseCaseCardsCenter() {
  return getUseCaseStage()?.querySelector(".use-case-cards-center") || null;
}

function getUseCaseCardsStack() {
  return getUseCaseStage()?.querySelector(".use-case-cards-stack") || null;
}

function createUseCaseCardElement(item) {
  const card = document.createElement("article");
  card.className = "use-case-card";

  const header = document.createElement("header");
  header.className = "use-case-card-header";

  const eyebrow = document.createElement("p");
  eyebrow.className = "use-case-card-eyebrow use-case-batch";
  eyebrow.textContent = item.badge;

  const title = document.createElement("h3");
  title.className = "use-case-card-title";
  title.textContent = item.title;

  header.append(eyebrow, title);

  const body = document.createElement("div");
  body.className = "use-case-card-body";

  const divider = document.createElement("hr");
  divider.className = "use-case-card-divider";

  const text = document.createElement("p");
  text.className = "use-case-card-text";
  text.textContent = item.body;

  body.append(divider, text);
  card.append(header, body);
  return card;
}

function shuffleUseCaseData(items) {
  const result = items.slice();
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function measureUseCaseRowHeight(stack, columnCount) {
  if (!useCaseCardData?.length || columnCount < 1) {
    return 0;
  }

  const styles = window.getComputedStyle(stack);
  const stageStyles = window.getComputedStyle(getUseCaseStage() || stack);
  const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
  const maxCardWidth = Number.parseFloat(stageStyles.getPropertyValue("--use-case-card-max")) || 260;
  const center = getUseCaseCardsCenter();
  const containerWidth = center?.clientWidth || getUseCaseStage()?.clientWidth || stack.clientWidth;
  const rawSlotWidth = (containerWidth - gap * (columnCount - 1)) / columnCount;
  const slotWidth = Math.min(maxCardWidth, rawSlotWidth);

  const gauge = document.createElement("div");
  gauge.setAttribute("aria-hidden", "true");
  gauge.style.position = "absolute";
  gauge.style.visibility = "hidden";
  gauge.style.pointerEvents = "none";
  gauge.style.left = "-9999px";
  gauge.style.top = "0";
  if (slotWidth > 0) {
    gauge.style.width = `${slotWidth}px`;
  }
  stack.appendChild(gauge);

  let maxHeight = 0;
  useCaseCardData.forEach((item) => {
    const card = createUseCaseCardElement(item);
    card.classList.add("is-measuring");
    gauge.appendChild(card);
    maxHeight = Math.max(maxHeight, card.offsetHeight || 0);
    gauge.removeChild(card);
  });

  stack.removeChild(gauge);
  return Math.ceil(maxHeight);
}

function applyUseCaseRowHeight() {
  const stack = getUseCaseCardsStack();
  if (!stack) {
    return;
  }

  const height = measureUseCaseRowHeight(stack, useCaseColumnCount);
  if (height > 0) {
    stack.style.setProperty("--use-case-row-height", `${height}px`);
  }
}

function renderUseCaseRow() {
  const stack = getUseCaseCardsStack();
  if (!stack || !useCaseCardData?.length) {
    return;
  }

  clearUseCaseRotateTimer();

  useCaseColumnCount = Math.min(getUseCaseColumnCount(), useCaseCardData.length);
  useCaseLastRotatedSlotIndex = null;

  const stage = getUseCaseStage();
  stage?.style.setProperty("--use-case-cols", String(useCaseColumnCount));

  stack.classList.add("is-row");

  applyUseCaseRowHeight();

  const shuffled = shuffleUseCaseData(useCaseCardData);
  useCaseVisibleData = shuffled.slice(0, useCaseColumnCount);
  useCasePool = shuffled.slice(useCaseColumnCount);

  useCaseSlots = useCaseVisibleData.map((item) => {
    const slot = document.createElement("div");
    slot.className = "use-case-slot";

    const card = createUseCaseCardElement(item);
    card.classList.add("is-visible", "has-entered");
    slot.appendChild(card);

    return slot;
  });

  stack.replaceChildren(...useCaseSlots);

  scheduleUseCaseRotation();
}

function rotateUseCaseRow() {
  if (!useCaseInView || useCaseColumnCount < 1 || !useCasePool.length) {
    return;
  }

  const slotIndex = pickRandomUseCaseSlotIndex();
  const slot = useCaseSlots[slotIndex];
  if (!slot) {
    return;
  }

  const poolIndex = Math.floor(Math.random() * useCasePool.length);
  const nextItem = useCasePool[poolIndex];
  const prevItem = useCaseVisibleData[slotIndex];

  useCasePool.splice(poolIndex, 1);
  if (prevItem) {
    useCasePool.push(prevItem);
  }
  useCaseVisibleData[slotIndex] = nextItem;

  const newCard = createUseCaseCardElement(nextItem);

  if (useCaseReducedMotion) {
    newCard.classList.add("is-visible", "has-entered");
    slot.replaceChildren(newCard);
    return;
  }

  const oldCard = slot.querySelector(".use-case-card");
  newCard.classList.add("is-entering");
  slot.appendChild(newCard);
  // Force layout so the enter state paints before Soft Bloom starts
  void newCard.offsetHeight;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (oldCard) {
        oldCard.classList.add("is-leaving");
      }
      newCard.classList.remove("is-entering");
      newCard.classList.add("is-visible", "has-entered");
    });
  });

  window.setTimeout(() => {
    if (oldCard && oldCard.parentNode === slot) {
      slot.removeChild(oldCard);
    }
  }, USE_CASE_SWAP_MS);
}

function clearUseCaseRotateTimer() {
  if (useCaseRotateTimer) {
    clearTimeout(useCaseRotateTimer);
    useCaseRotateTimer = null;
  }
}

function scheduleNextUseCaseRotation() {
  clearUseCaseRotateTimer();

  if (!useCaseInView || useCaseColumnCount < 1 || !useCasePool.length) {
    return;
  }

  useCaseRotateTimer = window.setTimeout(() => {
    rotateUseCaseRow();
    scheduleNextUseCaseRotation();
  }, USE_CASE_ROTATE_MS);
}

function scheduleUseCaseRotation() {
  clearUseCaseRotateTimer();

  if (!useCaseInView || useCaseColumnCount < 1 || !useCasePool.length) {
    return;
  }

  useCaseRotateTimer = window.setTimeout(() => {
    rotateUseCaseRow();
    scheduleNextUseCaseRotation();
  }, USE_CASE_ROTATE_MS);
}

function isUseCaseShellInView() {
  const shell = document.getElementById("use-cases-shell");
  if (!shell) {
    return false;
  }

  const rect = shell.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight;
}

function bindUseCaseObserver() {
  if (useCaseObserverBound) {
    return;
  }

  const shell = document.getElementById("use-cases-shell");
  if (!shell) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      useCaseInView = entries.some((entry) => entry.isIntersecting);

      if (useCaseInView) {
        scheduleUseCaseRotation();
        return;
      }

      clearUseCaseRotateTimer();
    },
    { threshold: 0.12 }
  );

  observer.observe(shell);
  useCaseObserverBound = true;
}

function bindUseCaseResizeListener() {
  if (useCaseResizeListenerBound) {
    return;
  }

  let resizeRaf = null;
  window.addEventListener("resize", () => {
    if (resizeRaf) {
      window.cancelAnimationFrame(resizeRaf);
    }

    resizeRaf = window.requestAnimationFrame(() => {
      resizeRaf = null;
      const nextColumns = Math.min(getUseCaseColumnCount(), useCaseCardData?.length || 0);
      if (nextColumns !== useCaseColumnCount) {
        renderUseCaseRow();
      } else {
        applyUseCaseRowHeight();
      }
    });
  });
  useCaseResizeListenerBound = true;
}

function setUseCaseCarousel(cards) {
  const stack = getUseCaseCardsStack();
  if (!stack || !cards?.length) {
    return;
  }

  useCaseReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  useCaseCardData = cards.slice();

  bindUseCaseResizeListener();
  bindUseCaseObserver();

  useCaseInView = isUseCaseShellInView();
  renderUseCaseRow();
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
  const rawStored = window.localStorage.getItem(languageStorageKey);
  if (rawStored) {
    return normalizeLanguage(rawStored);
  }

  return normalizeLanguage(navigator.language || navigator.userLanguage || "");
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

  document.querySelectorAll(".brand, .site-footer-brand-link").forEach((brandLink) => {
    if (ui.brandAriaLabel) {
      brandLink.setAttribute("aria-label", ui.brandAriaLabel);
    }
  });

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

  const heroPopupImage = document.querySelector(".hero-popup");
  if (heroPopupImage && ui.heroPopupAlt) {
    heroPopupImage.alt = ui.heroPopupAlt;
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

  const roadmapImage = document.querySelector("#roadmap .roadmap-image");
  if (roadmapImage && ui.roadmapImageAlt) {
    roadmapImage.alt = ui.roadmapImageAlt;
  }

  applyDesignSwitcherLanguage(ui);
}

function applyDesignSwitcherLanguage(ui) {
  if (!ui) {
    return;
  }

  if (ui.designLabel) {
    setText(".design-label", ui.designLabel);
  }

  const designToggleButton = document.getElementById("design-toggle");
  if (designToggleButton && ui.chooseDesignAriaLabel) {
    designToggleButton.setAttribute("aria-label", ui.chooseDesignAriaLabel);
  }

  const designMenuElement = document.getElementById("design-menu");
  if (designMenuElement && ui.selectDesignAriaLabel) {
    designMenuElement.setAttribute("aria-label", ui.selectDesignAriaLabel);
  }

  if (ui.designOptions) {
    document.querySelectorAll(".design-option").forEach((button) => {
      const optionKey = button.dataset.heroLead;
      if (optionKey && ui.designOptions[optionKey]) {
        button.textContent = ui.designOptions[optionKey];
      }
    });
  }

  const heroVariantGroup = document.querySelector(".hero-variant-toggle");
  if (heroVariantGroup && ui.heroVariantAriaLabel) {
    heroVariantGroup.setAttribute("aria-label", ui.heroVariantAriaLabel);
  }

  const currentVariantButton = document.querySelector('.hero-variant-btn[data-hero-variant="current"]');
  if (currentVariantButton && ui.heroVariantCurrent) {
    currentVariantButton.textContent = ui.heroVariantCurrent;
  }

  const alternativeVariantButton = document.querySelector('.hero-variant-btn[data-hero-variant="contrast"]');
  if (alternativeVariantButton && ui.heroVariantAlternative) {
    alternativeVariantButton.textContent = ui.heroVariantAlternative;
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


const ASSISTANT_SHOWCASE_STEP_COUNTS = [2, 2, 2, 2, 2, 2];
const ASSISTANT_SHOWCASE_QUESTION_MS = 4400;
const ASSISTANT_SHOWCASE_ANSWER_MS = 4500;
const ASSISTANT_SHOWCASE_TRANSITION_MS = 1050;
const ASSISTANT_SHOWCASE_EXAMPLE_TRANSITION_MS = 820;
const ASSISTANT_PROCESS_STATION_COUNT = 7;
const ASSISTANT_PROCESS_CHECK_COUNT = 7;
const ASSISTANT_PROCESS_STEP_BY_SLIDE = [
  [0, 0],
  [1, 1],
  [2, 3],
  [4, 4],
  [5, 5],
  [6, 6],
];
const ASSISTANT_PROCESS_CHECK_BY_EXAMPLE = [0, 1, 2, 4, 5, 6];

function getAssistantProcessChecks(exampleIndex, stepIndex, progressRatio = 0) {
  const checks = Array.from({ length: ASSISTANT_PROCESS_CHECK_COUNT }, () => false);
  const isAnswer = stepIndex > 0;
  const ratio = Math.max(0, Math.min(1, progressRatio || 0));

  // The point reaches each check exactly when its answer starts.
  if (exampleIndex > 0 || (exampleIndex === 0 && isAnswer)) {
    checks[0] = true;
  }
  if (exampleIndex > 1 || (exampleIndex === 1 && isAnswer)) {
    checks[1] = true;
  }
  if (exampleIndex > 2 || (exampleIndex === 2 && isAnswer)) {
    checks[2] = true;
  }
  // The third answer flows through "Mailantwort vorbereiten" and its check.
  if (exampleIndex > 2 || (exampleIndex === 2 && isAnswer && ratio >= 2 / 3)) {
    checks[3] = true;
  }
  if (exampleIndex > 3 || (exampleIndex === 3 && isAnswer)) {
    checks[4] = true;
  }
  if (exampleIndex > 4 || (exampleIndex === 4 && isAnswer)) {
    checks[5] = true;
  }
  if (exampleIndex === 5 && isAnswer) {
    checks[6] = true;
  }

  return checks;
}

function getAssistantProcessState(exampleIndex, stepIndex, progressRatio) {
  const ratio = Math.max(0, Math.min(1, progressRatio || 0));
  const stations = ASSISTANT_PROCESS_STATION_COUNT;
  const lastStation = stations - 1;
  const mapping = ASSISTANT_PROCESS_STEP_BY_SLIDE[exampleIndex] || [lastStation, lastStation];
  let activeStep = mapping[stepIndex] ?? mapping[0] ?? 0;
  const checks = getAssistantProcessChecks(exampleIndex, stepIndex, ratio);
  const currentCheck =
    ASSISTANT_PROCESS_CHECK_BY_EXAMPLE[exampleIndex] ??
    ASSISTANT_PROCESS_CHECK_COUNT - 1;
  let startType = "step";
  let startIndex = mapping[0] ?? activeStep;
  let targetType = "check";
  let targetIndex = currentCheck;
  let duration = ASSISTANT_SHOWCASE_QUESTION_MS;

  if (stepIndex > 0) {
    startType = "check";
    startIndex = currentCheck;
    duration = ASSISTANT_SHOWCASE_ANSWER_MS;

    if (exampleIndex === 2) {
      activeStep = ratio < 1 / 3 ? 2 : 3;
      targetType = "step";
      targetIndex = 4;
    } else if (exampleIndex < ASSISTANT_SHOWCASE_STEP_COUNTS.length - 1) {
      targetType = "step";
      targetIndex = ASSISTANT_PROCESS_STEP_BY_SLIDE[exampleIndex + 1]?.[0] ?? activeStep;
    } else {
      targetType = "check";
      targetIndex = currentCheck;
      duration = 0;
    }
  }

  return {
    activeStep: Math.max(0, Math.min(lastStation, activeStep)),
    startType,
    startIndex: Math.max(0, Math.min(ASSISTANT_PROCESS_CHECK_COUNT - 1, startIndex)),
    targetType,
    targetIndex: Math.max(0, Math.min(ASSISTANT_PROCESS_CHECK_COUNT - 1, targetIndex)),
    duration,
    checks,
  };
}

let assistantShowcaseController = null;

function formatAssistantShowcaseCopy(template, values) {
  return String(template || "").replace(/\{(\w+)\}/g, (_, key) => {
    return values[key] == null ? "" : String(values[key]);
  });
}

function applyAssistantShowcaseLanguage(copy) {
  const root = document.getElementById("assistent-bei-der-arbeit");
  if (!root || !copy) {
    return;
  }

  setText("#assistent-bei-der-arbeit .assistant-showcase-eyebrow", copy.eyebrow);

  const title = root.querySelector("#assistant-showcase-title");
  if (
    title &&
    copy.titleLine1Before != null &&
    copy.titleAccent != null &&
    copy.titleLine2 != null
  ) {
    title.replaceChildren();
    const line1 = document.createElement("span");
    line1.className = "assistant-showcase-title-line";
    line1.append(document.createTextNode(copy.titleLine1Before));
    const accent = document.createElement("span");
    accent.className = "assistant-showcase-accent";
    accent.textContent = copy.titleAccent;
    line1.append(accent);
    const line2 = document.createElement("span");
    line2.className = "assistant-showcase-title-line";
    line2.textContent = copy.titleLine2;
    title.append(line1, line2);
  }

  const processList = root.querySelector("[data-assistant-process-list]");
  if (processList && copy.processAriaLabel) {
    processList.setAttribute("aria-label", copy.processAriaLabel);
  }

  if (Array.isArray(copy.processSteps)) {
    copy.processSteps.forEach((stepCopy, stepIndex) => {
      const step = root.querySelector(`[data-process-step="${stepIndex}"]`);
      if (!step || !stepCopy) {
        return;
      }

      const phase = step.querySelector(".assistant-process-phase");
      const title = step.querySelector(".assistant-process-title");
      if (phase && stepCopy.phase != null) {
        phase.textContent = stepCopy.phase;
      }
      if (title && stepCopy.title != null) {
        title.textContent = stepCopy.title;
      }
    });
  }

  const prev = root.querySelector('[data-action="prev"]');
  if (prev && copy.prevAriaLabel) {
    prev.setAttribute("aria-label", copy.prevAriaLabel);
  }

  const next = root.querySelector('[data-action="next"]');
  if (next && copy.nextAriaLabel) {
    next.setAttribute("aria-label", copy.nextAriaLabel);
  }

  const pauseLabel = root.querySelector("[data-label-pause]");
  if (pauseLabel && copy.pauseLabel) {
    pauseLabel.textContent = copy.pauseLabel;
  }

  const playLabel = root.querySelector("[data-label-play]");
  if (playLabel && copy.playLabel) {
    playLabel.textContent = copy.playLabel;
  }

  if (Array.isArray(copy.alts)) {
    copy.alts.forEach((alts, exampleIndex) => {
      alts.forEach((alt, stepIndex) => {
        const image = root.querySelector(
          `.assistant-showcase-slide[data-example="${exampleIndex}"][data-step="${stepIndex}"] img`
        );
        if (image && alt) {
          image.alt = alt;
        }
      });
    });
  }

  if (assistantShowcaseController) {
    assistantShowcaseController.setCopy(copy);
    assistantShowcaseController.refreshStatus();
    assistantShowcaseController.refreshToggleLabels();
    assistantShowcaseController.refreshProcessStatus?.();
  }
}

function initAssistantShowcase() {
  const root = document.getElementById("assistent-bei-der-arbeit");
  if (!root || assistantShowcaseController) {
    return assistantShowcaseController;
  }

  const stage = root.querySelector("[data-assistant-stage]");
  const viewport = root.querySelector(".assistant-showcase-viewport");
  const slides = [...root.querySelectorAll(".assistant-showcase-slide")];
  const processRoot = root.querySelector("[data-assistant-process]");
  const processScroll = root.querySelector("[data-assistant-process-scroll]");
  const processTrack = root.querySelector(".assistant-process-track");
  const processStatus = root.querySelector("[data-assistant-process-status]");
  const processSteps = [...root.querySelectorAll("[data-process-step]")];
  const processChecks = [...root.querySelectorAll("[data-process-check]")];
  const status = root.querySelector("[data-assistant-status]");
  const toggle = root.querySelector('[data-action="toggle"]');
  const prev = root.querySelector('[data-action="prev"]');
  const next = root.querySelector('[data-action="next"]');
  const pauseLabel = root.querySelector("[data-label-pause]");
  const playLabel = root.querySelector("[data-label-play]");
  const narrowProcessQuery = window.matchMedia("(max-width: 900px)");

  if (!stage || !slides.length || !processRoot || !processSteps.length) {
    return null;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let copy = translations.de.assistantShowcase;
  let exampleIndex = 0;
  let stepIndex = 0;
  let playing = !reducedMotion;
  let inView = false;
  let hoverPaused = false;
  let focusPaused = false;
  let tabHidden = document.hidden;
  let timerId = null;
  let progressRaf = null;
  let stepStartedAt = 0;
  let stepDuration = ASSISTANT_SHOWCASE_QUESTION_MS;
  let leavingTimeout = null;
  let activeProcessStep = -1;
  let visibleCheckMask = "";
  let activeProcessTarget = "";
  let processTargetState = null;

  const totalExamples = ASSISTANT_SHOWCASE_STEP_COUNTS.length;
  const totalSteps = ASSISTANT_SHOWCASE_STEP_COUNTS.reduce((sum, count) => sum + count, 0);

  function getStepCount(index) {
    return ASSISTANT_SHOWCASE_STEP_COUNTS[index] || 2;
  }

  function getSlide(example, step) {
    return root.querySelector(
      `.assistant-showcase-slide[data-example="${example}"][data-step="${step}"]`
    );
  }

  function getDurationForStep(step) {
    return step === 0 ? ASSISTANT_SHOWCASE_QUESTION_MS : ASSISTANT_SHOWCASE_ANSWER_MS;
  }

  function getTransitionMs(comingFromAnswer, targetIsAnswer) {
    if (comingFromAnswer && !targetIsAnswer) {
      return ASSISTANT_SHOWCASE_EXAMPLE_TRANSITION_MS;
    }
    return ASSISTANT_SHOWCASE_TRANSITION_MS;
  }

  function getCompletedStepsBefore(example) {
    let completed = 0;
    for (let index = 0; index < example; index += 1) {
      completed += getStepCount(index);
    }
    return completed;
  }

  function canAutoplay() {
    return playing && inView && !hoverPaused && !focusPaused && !tabHidden && !reducedMotion;
  }

  function setCopy(nextCopy) {
    if (nextCopy) {
      copy = nextCopy;
    }
  }

  function refreshToggleLabels() {
    if (!toggle) {
      return;
    }

    const showPause = playing;
    if (pauseLabel) {
      pauseLabel.hidden = !showPause;
    }
    if (playLabel) {
      playLabel.hidden = showPause;
    }
    toggle.setAttribute("aria-pressed", showPause ? "false" : "true");
    toggle.setAttribute(
      "aria-label",
      showPause ? copy.pauseAriaLabel || "Pause" : copy.playAriaLabel || "Play"
    );
  }

  function refreshStatus() {
    if (!status || !copy) {
      return;
    }

    const values = {
      n: exampleIndex + 1,
      total: totalExamples,
      part: stepIndex,
    };

    const template = stepIndex > 0 ? copy.statusAnswer : copy.statusQuestion;
    status.textContent = formatAssistantShowcaseCopy(template, values);
  }

  function refreshProcessStatus(stepIndexOverride) {
    if (!processStatus || !copy) {
      return;
    }

    const step = Number.isInteger(stepIndexOverride) ? stepIndexOverride : activeProcessStep;
    const stepCopy = copy.processSteps?.[step];
    if (!stepCopy) {
      processStatus.textContent = "";
      return;
    }

    processStatus.textContent = formatAssistantShowcaseCopy(
      copy.processStatus || "{phase} · {title}",
      {
        phase: stepCopy.phase,
        title: stepCopy.title,
      }
    );
  }

  function scrollActiveProcessStepIntoView(stepElement) {
    if (!processScroll || !stepElement || !narrowProcessQuery.matches) {
      return;
    }

    const left = stepElement.offsetLeft - (processScroll.clientWidth - stepElement.offsetWidth) / 2;
    processScroll.scrollTo({
      left,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  function getProcessElement(type, index) {
    if (type === "check") {
      return processChecks[index] || null;
    }

    return processSteps[index]?.querySelector(".assistant-process-marker") || null;
  }

  function syncProcessGeometry(state, immediate = false, useStart = false) {
    if (!processRoot || !processTrack || !state) {
      return;
    }

    const firstMarker = processSteps[0]?.querySelector(".assistant-process-marker");
    const lastCheck = processChecks[processChecks.length - 1];
    const target = getProcessElement(
      useStart ? state.startType : state.targetType,
      useStart ? state.startIndex : state.targetIndex
    );
    if (!firstMarker || !lastCheck || !target) {
      return;
    }

    const trackRect = processTrack.getBoundingClientRect();
    const centerX = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.left - trackRect.left + rect.width / 2;
    };

    processRoot.style.setProperty(
      "--assistant-process-motion-duration",
      immediate || reducedMotion ? "0ms" : `${state.duration}ms`
    );
    processRoot.style.setProperty("--assistant-process-line-start-x", `${centerX(firstMarker)}px`);
    processRoot.style.setProperty("--assistant-process-line-end-x", `${centerX(lastCheck)}px`);
    processRoot.style.setProperty("--assistant-process-point-x", `${centerX(target)}px`);

  }

  function updateProcess(progressRatio) {
    if (!processRoot || !processSteps.length) {
      return;
    }

    const previousTargetState = processTargetState;
    const state = getAssistantProcessState(exampleIndex, stepIndex, progressRatio);
    processTargetState = state;

    const nextTarget = `${state.targetType}:${state.targetIndex}`;
    if (nextTarget !== activeProcessTarget) {
      const restartForward =
        activeProcessTarget === "" ||
        (previousTargetState && state.targetIndex < previousTargetState.targetIndex);
      activeProcessTarget = nextTarget;
      if (restartForward) {
        syncProcessGeometry(state, true, true);
        window.requestAnimationFrame(() => {
          syncProcessGeometry(state);
        });
      } else {
        syncProcessGeometry(state);
      }
    }

    const nextCheckMask = state.checks.map((visible) => (visible ? "1" : "0")).join("");
    if (nextCheckMask !== visibleCheckMask) {
      visibleCheckMask = nextCheckMask;
      processChecks.forEach((checkElement) => {
        const index = Number(checkElement.dataset.processCheck || 0);
        const visible = Boolean(state.checks[index]);
        const wasVisible = checkElement.classList.contains("is-visible");
        checkElement.classList.toggle("is-visible", visible);
        if (visible && !wasVisible && !reducedMotion) {
          const icon = checkElement.querySelector(".assistant-process-check-icon");
          if (icon) {
            icon.style.animation = "none";
            void icon.offsetWidth;
            icon.style.animation = "";
          }
        }
      });
    }

    if (state.activeStep === activeProcessStep) {
      return;
    }

    activeProcessStep = state.activeStep;
    let activeElement = null;

    processSteps.forEach((stepElement) => {
      const index = Number(stepElement.dataset.processStep || 0);
      const isActive = index === activeProcessStep;
      const isComplete = index < activeProcessStep;
      stepElement.classList.toggle("is-active", isActive);
      stepElement.classList.toggle("is-complete", isComplete);
      if (isActive) {
        stepElement.setAttribute("aria-current", "step");
        activeElement = stepElement;
      } else {
        stepElement.removeAttribute("aria-current");
      }
    });

    refreshProcessStatus(activeProcessStep);
    scrollActiveProcessStepIntoView(activeElement);
  }

  if (processTrack) {
    window.addEventListener("resize", () => {
      syncProcessGeometry(processTargetState, true);
    });
  }

  function clearAdvanceTimers() {
    if (timerId) {
      window.clearTimeout(timerId);
      timerId = null;
    }
    if (progressRaf) {
      window.cancelAnimationFrame(progressRaf);
      progressRaf = null;
    }
  }

  function clearTimers() {
    clearAdvanceTimers();
    if (leavingTimeout) {
      window.clearTimeout(leavingTimeout);
      leavingTimeout = null;
    }
    if (viewport) {
      viewport.classList.remove("is-clipping-slides");
    }
  }

  function updateLoader(progressRatio) {
    const ratio = Math.max(0, Math.min(1, progressRatio || 0));
    updateProcess(ratio);
  }

  function clearMotionClasses(slide) {
    slide.classList.remove(
      "is-enter-question",
      "is-enter-answer",
      "is-leave-question",
      "is-leave-answer",
      "is-leaving",
      "is-pulse-in",
      "is-slide-in-answer"
    );
  }

  function hideSlide(slide) {
    if (!slide) {
      return;
    }

    clearMotionClasses(slide);
    slide.classList.remove("is-active");
    slide.hidden = true;
    slide.setAttribute("aria-hidden", "true");
  }

  function scheduleLeave(slidesToHide, transitionMs) {
    if (!slidesToHide.length) {
      return;
    }

    if (leavingTimeout) {
      window.clearTimeout(leavingTimeout);
      leavingTimeout = null;
    }

    leavingTimeout = window.setTimeout(() => {
      slidesToHide.forEach(hideSlide);
      leavingTimeout = null;
    }, transitionMs);
  }

  function showSlide(nextExample, nextStep, options = {}) {
    const immediate = Boolean(options.immediate) || reducedMotion;
    const current = root.querySelector(".assistant-showcase-slide.is-active");
    const target = getSlide(nextExample, nextStep);
    const targetIsAnswer = nextStep > 0;
    const comingFromAnswer =
      Boolean(current) && Number(current.dataset.step || 0) > 0;
    const transitionMs = getTransitionMs(comingFromAnswer, targetIsAnswer);

    if (!target) {
      return;
    }

    if (current === target) {
      exampleIndex = nextExample;
      stepIndex = nextStep;
      target.hidden = false;
      target.setAttribute("aria-hidden", "false");
      refreshStatus();
      updateLoader(0);
      return;
    }

    slides.forEach((slide) => {
      if (slide !== target && slide !== current) {
        hideSlide(slide);
      }
    });

    target.hidden = false;
    target.setAttribute("aria-hidden", "false");
    const leavingSlides = [];

    if (current) {
      if (immediate) {
        hideSlide(current);
      } else {
        clearMotionClasses(current);
        current.classList.remove("is-active");
        current.classList.add(
          "is-leaving",
          comingFromAnswer ? "is-leave-answer" : "is-leave-question"
        );
        current.setAttribute("aria-hidden", "true");
        leavingSlides.push(current);
      }
    }

    clearMotionClasses(target);
    const enterClass = targetIsAnswer ? "is-enter-answer" : "is-enter-question";
    const motionClass = targetIsAnswer ? "is-slide-in-answer" : "is-pulse-in";
    if (viewport) {
      viewport.classList.toggle("is-clipping-slides", !immediate && targetIsAnswer);
    }
    if (!immediate) {
      target.classList.add(enterClass);
      void target.offsetWidth;
    }
    target.classList.add("is-active");
    if (!immediate) {
      window.requestAnimationFrame(() => {
        target.classList.remove(enterClass);
        target.classList.add(motionClass);
        const onMotionEnd = (event) => {
          const name = String(event.animationName || "");
          if (
            event.target !== target ||
            !(
              name.includes("assistant-showcase-pulse") ||
              name.includes("assistant-showcase-slide-in-answer")
            )
          ) {
            return;
          }
          target.removeEventListener("animationend", onMotionEnd);
          target.classList.remove(motionClass);
          if (viewport && name.includes("assistant-showcase-slide-in-answer")) {
            viewport.classList.remove("is-clipping-slides");
          }
        };
        target.addEventListener("animationend", onMotionEnd);
      });
    } else if (viewport) {
      viewport.classList.remove("is-clipping-slides");
    }

    scheduleLeave(leavingSlides, transitionMs);

    exampleIndex = nextExample;
    stepIndex = nextStep;
    refreshStatus();
    updateLoader(0);
  }

  function advance() {
    // Lock the point to its exact endpoint before the paired slide changes.
    syncProcessGeometry(processTargetState, true);

    const stepCount = getStepCount(exampleIndex);
    if (stepIndex + 1 < stepCount) {
      goTo(exampleIndex, stepIndex + 1);
      return;
    }

    goTo((exampleIndex + 1) % totalExamples, 0);
  }

  function goTo(nextExample, nextStep, options = {}) {
    clearTimers();
    showSlide(nextExample, nextStep, options);
    stepDuration = getDurationForStep(nextStep);
    stepStartedAt = performance.now();
    if (canAutoplay()) {
      scheduleAdvance();
    } else {
      updateLoader(0);
    }
  }

  function tickProgress() {
    if (!canAutoplay()) {
      progressRaf = null;
      return;
    }

    const elapsed = performance.now() - stepStartedAt;
    const ratio = stepDuration > 0 ? elapsed / stepDuration : 1;
    updateLoader(ratio);
    progressRaf = window.requestAnimationFrame(tickProgress);
  }

  function scheduleAdvance() {
    clearAdvanceTimers();
    stepStartedAt = performance.now();
    stepDuration = getDurationForStep(stepIndex);
    updateLoader(0);
    progressRaf = window.requestAnimationFrame(tickProgress);
    timerId = window.setTimeout(() => {
      advance();
    }, stepDuration);
  }

  function syncPlayback() {
    if (canAutoplay()) {
      // Do not restart an already-running step; IntersectionObserver
      // fires on every threshold and was resetting the advance timer.
      if (!timerId) {
        scheduleAdvance();
      }
    } else {
      clearAdvanceTimers();
      updateLoader(0);
    }
    refreshToggleLabels();
  }

  function restartFromStart() {
    activeProcessTarget = "";
    visibleCheckMask = "";
    activeProcessStep = -1;
    processTargetState = null;
    hoverPaused = false;
    if (!reducedMotion) {
      playing = true;
    }
    goTo(0, 0, { immediate: true });
    refreshToggleLabels();
  }

  function setPlaying(nextPlaying) {
    playing = Boolean(nextPlaying) && !reducedMotion;
    syncPlayback();
  }

  prev?.addEventListener("click", () => {
    const previousExample = (exampleIndex - 1 + totalExamples) % totalExamples;
    goTo(previousExample, 0, { immediate: true });
    if (!reducedMotion) {
      setPlaying(true);
    }
  });

  next?.addEventListener("click", () => {
    goTo((exampleIndex + 1) % totalExamples, 0, { immediate: true });
    if (!reducedMotion) {
      setPlaying(true);
    }
  });

  toggle?.addEventListener("click", () => {
    setPlaying(!playing);
  });

  // Hover pause removed: the stage fills the viewport, so pointerenter
  // permanently stopped autoplay at the first check while viewing.

  stage.addEventListener("focusin", () => {
    focusPaused = true;
    syncPlayback();
  });

  stage.addEventListener("focusout", (event) => {
    if (!stage.contains(event.relatedTarget)) {
      focusPaused = false;
      syncPlayback();
    }
  });

  document.addEventListener("visibilitychange", () => {
    tabHidden = document.hidden;
    syncPlayback();
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const nextInView = entries.some(
        (entry) => entry.isIntersecting && entry.intersectionRatio >= 0.35
      );
      const entered = nextInView && !inView;
      inView = nextInView;
      if (entered) {
        restartFromStart();
      } else {
        syncPlayback();
      }
    },
    { threshold: [0, 0.35, 0.6, 1] }
  );
  observer.observe(root);

  showSlide(0, 0, { immediate: true });
  refreshToggleLabels();
  refreshStatus();
  refreshProcessStatus(0);
  syncPlayback();

  assistantShowcaseController = {
    setCopy,
    refreshStatus,
    refreshProcessStatus,
    refreshToggleLabels,
    setPlaying,
    goTo,
  };

  return assistantShowcaseController;
}

function applyProductLanguage(product) {
  if (!product) {
    return;
  }

  setText("#antwort .product-eyebrow-text", product.eyebrow);
  setHTML("#antwort .product-title", product.titleHtml);
  const productParagraphs = document.querySelectorAll("#antwort .product-lead");
  product.body?.forEach((text, index) => {
    if (productParagraphs[index]) {
      productParagraphs[index].textContent = text;
    }
  });
  setText("#antwort .product-link", product.cta);
  setCards("#antwort .product-cards .product-card", product.cards, (cardElement, cardData) => {
    setTextSelector(cardElement, ".product-card-title", cardData.title);
    setTextSelector(cardElement, ".product-card-body", cardData.body);
  });
}

function applyDetailPolicyIntro(pageContent) {
  const intro = pageContent.policyIntro;
  if (!intro) {
    return;
  }

  setText(".detail-policy-title", intro.title);
  setText(".detail-policy-subtitle", intro.subtitle);
  const introParagraphs = document.querySelectorAll(".detail-policy-intro p:not(.detail-policy-subtitle)");
  introParagraphs.forEach((paragraph, index) => {
    const data = intro.paragraphs?.[index];
    if (!data) {
      return;
    }

    if (typeof data === "object" && data.html) {
      paragraph.innerHTML = data.html;
    } else {
      paragraph.textContent = typeof data === "string" ? data : data.text ?? "";
    }
  });
}

function applyDetailStoryLanguage(pageContent, storyLabels) {
  const labels = storyLabels || {};
  const storyBlocks = document.querySelectorAll(".detail-story-block");
  storyBlocks.forEach((block, index) => {
    const data = pageContent.story?.[index];
    if (!data) {
      return;
    }

    setTextSelector(block, "h2", data.title);
    block.querySelectorAll("p, ul, h3, h4, .detail-chapter-way").forEach((element) => element.remove());

    data.content?.forEach((item) => {
      if (item.type === "p") {
        const paragraph = document.createElement("p");
        if (item.html) {
          paragraph.innerHTML = item.html;
        } else {
          paragraph.textContent = item.text;
        }
        if (item.className) {
          item.className.split(/\s+/).filter(Boolean).forEach((name) => paragraph.classList.add(name));
        }
        block.appendChild(paragraph);
        return;
      }

      if (item.type === "ul" && item.items?.length) {
        const list = document.createElement("ul");
        list.className = "detail-story-list";
        item.items.forEach((text) => {
          const listItem = document.createElement("li");
          listItem.textContent = text;
          list.appendChild(listItem);
        });
        block.appendChild(list);
        return;
      }

      if (item.type === "way") {
        const section = document.createElement("div");
        section.className = "detail-chapter-way";

        const heading = document.createElement("h3");
        heading.textContent = item.title;
        section.appendChild(heading);

        item.paragraphs?.forEach((text) => {
          const paragraph = document.createElement("p");
          paragraph.textContent = text;
          section.appendChild(paragraph);
        });

        const examplesHeading = document.createElement("h4");
        examplesHeading.className = "detail-chapter-subheading";
        examplesHeading.textContent = item.examplesLabel ?? labels.examples ?? "Beispiele";
        section.appendChild(examplesHeading);

        const list = document.createElement("ul");
        list.className = "detail-story-list";
        item.examples?.forEach((text) => {
          const listItem = document.createElement("li");
          listItem.textContent = text;
          list.appendChild(listItem);
        });
        section.appendChild(list);

        const valueHeading = document.createElement("h4");
        valueHeading.className = "detail-chapter-subheading";
        valueHeading.textContent = item.valueLabel ?? labels.value ?? "Mehrwert";
        section.appendChild(valueHeading);

        const valueParagraph = document.createElement("p");
        valueParagraph.className = "detail-chapter-value";
        valueParagraph.textContent = item.value ?? "";
        section.appendChild(valueParagraph);

        block.appendChild(section);
      }
    });
  });
}

function applyDetailPageLanguage(pageContent, storyLabels) {
  if (!pageContent) {
    return;
  }

  if (pageContent.meta?.title) {
    document.title = pageContent.meta.title;
  }

  setText(".detail-hero .eyebrow", pageContent.hero?.eyebrow);
  const detailHeroTitle = document.querySelector(".detail-hero h1");
  if (pageContent.hero?.titleHtml) {
    if (detailHeroTitle) {
      detailHeroTitle.classList.add("hero-title");
    }
    setHTML(".detail-hero h1", pageContent.hero.titleHtml);
  } else {
    setText(".detail-hero h1", pageContent.hero?.title);
  }
  if (pageContent.hero?.leadHtml) {
    setHTML(".detail-hero .lead", pageContent.hero.leadHtml);
  } else {
    setText(".detail-hero .lead", pageContent.hero?.lead);
  }

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

  if (pageContent.contact) {
    setText(".contact-details-label", pageContent.contact.label);
    setText(".contact-details-city", pageContent.contact.city);
    setText(".contact-details-mail-label", pageContent.contact.mailLabel);
  }

  const articles = document.querySelectorAll(".detail-content article");
  articles.forEach((article, index) => {
    const data = pageContent.articles?.[index];
    if (!data) {
      return;
    }

    setTextSelector(article, "h2", data.title);
    const body = article.querySelector(".detail-card-body") || article.querySelector("p");
    if (body) {
      if (data.bodyHtml) {
        body.innerHTML = data.bodyHtml;
      } else if (data.body !== undefined) {
        body.textContent = data.body;
      }
    }
  });

  if (pageContent.notice !== undefined) {
    setText(".detail-notice-text", pageContent.notice);
  }

  applyDetailPolicyIntro(pageContent);

  const teamPhotos = document.querySelector(".detail-team-photos");
  if (teamPhotos && pageContent.teamSectionAriaLabel) {
    teamPhotos.setAttribute("aria-label", pageContent.teamSectionAriaLabel);
  }

  applyDetailStoryLanguage(pageContent, storyLabels);
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
    content.nav.solution,
    content.nav.integration,
    content.nav.security,
    content.nav.insight,
    content.nav.scaling,
    content.nav.transparency,
    content.nav.about,
    content.nav.pricing,
  ];
  Array.from(document.querySelectorAll(".site-nav > a:not(.nav-cta)")).forEach((link, index) => {
    if (navTexts[index]) {
      link.textContent = navTexts[index];
    }
  });
  setText(".nav-cta", content.nav.demo);

  setHeroTitle(content.hero);
  setHeroLead(content.hero.leadLines);
  setText(".hero-work-cta", content.hero.workCta);
  applyHeroFeatures(content.heroFeatures);

  setText(".intro-band .eyebrow", content.intro.eyebrow);
  setIntroTitle(content.intro.titleParts);
  setText(".intro-band-lead", content.intro.lead);
  setText(".intro-band-link", content.intro.link);
  setCards("#warum .intro-pain-card", content.intro.cards, (cardElement, cardData) => {
    setTextSelector(cardElement, "h3", cardData.title);
    setTextSelector(cardElement, "p", cardData.body);
  });

  setText("#loesung .trust-eyebrow", content.problem.eyebrow);
  setHTML("#loesung .trust-title", content.problem.titleHtml);
  const trustLeads = document.querySelectorAll("#loesung .trust-lead");
  if (trustLeads[0]) {
    trustLeads[0].textContent = content.problem.lead;
  }
  if (trustLeads[1]) {
    trustLeads[1].textContent = content.problem.leadClose;
  }
  setText("#loesung .trust-link", content.problem.link);
  setCards("#loesung .trust-cards .trust-card", content.problem.cards, (cardElement, cardData) => {
    setTextSelector(cardElement, ".trust-card-text h3", cardData.title);
    setHTMLSelector(cardElement, ".trust-card-text p", cardData.body);
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

  applyAssistantShowcaseLanguage(content.assistantShowcase);

  setText("#use-cases .use-cases-eyebrow", content.useCases.eyebrow);
  setHTML("#use-cases .use-cases-title", content.useCases.titleHtml);
  setHTML("#use-cases .use-cases-lead", content.useCases.leadHtml);
  setText("#use-cases .use-cases-closing", content.useCases.closing);
  setUseCaseCarousel(content.useCases.cards);
  const useCaseStack = getUseCaseCardsStack();
  if (useCaseStack && content.useCases?.nextCardAriaLabel) {
    useCaseStack.setAttribute("aria-label", content.useCases.nextCardAriaLabel);
  }

  applyProductLanguage(content.product);

  if (content.homeCta) {
    setText("#cta .home-cta-title", content.homeCta.title);
    setText("#cta .home-cta-lead", content.homeCta.lead);
    setText("#cta .home-cta-btn-primary", content.homeCta.primary);
    setText("#cta .home-cta-btn-secondary", content.homeCta.secondary);
    setText("#cta .home-cta-tagline", content.homeCta.tagline);
  }

  setText("#ueber-uns .eyebrow", content.team.eyebrow);
  setHTML("#ueber-uns h2", content.team.title);
  setText("#ueber-uns .team-link", content.team.link);
  setCards("#ueber-uns .team-heroes .team-hero", content.team.heroes, (cardElement, cardData) => {
    setTextSelector(cardElement, "h3", cardData.title);
    setTextSelector(cardElement, "p", cardData.body);
  });

  setText("#roadmap .roadmap-eyebrow", content.roadmap.eyebrow);
  setHTML("#roadmap .roadmap-title", content.roadmap.title);
  if (content.roadmap.leadHtml) {
    setHTML("#roadmap .roadmap-lead", content.roadmap.leadHtml);
  }
  setText("#roadmap .roadmap-link", content.roadmap.link);
  setCards("#roadmap .roadmap-windows .roadmap-window", content.roadmap.steps, (cardElement, cardData) => {
    setTextSelector(cardElement, "strong", cardData.title);
    setTextSelector(cardElement, "p", cardData.body);
  });

  applyDemoModalLanguage(content.demoModal);

  applyFooterLanguage(content.footer);

  const pageKey = getCurrentPageKey();
  if (pageKey && typeof detailPageTranslations !== "undefined") {
    const pageContent =
      detailPageTranslations[code]?.[pageKey] || detailPageTranslations.de?.[pageKey];
    applyDetailPageLanguage(pageContent, {
      examples: content.ui?.storyExamplesLabel,
      value: content.ui?.storyValueLabel,
    });
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

function initSynapseCanvas(sectionSelector, canvasSelector, colors, options) {
  const section = document.querySelector(sectionSelector);
  const canvas = document.querySelector(canvasSelector);
  if (!section || !canvas) {
    return;
  }

  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  const config = { glow: false, glowFromLayer: 99, ...(options || {}) };
  const glow = config.glow;
  const glowTone = colors.glow || "255, 255, 255";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Keep background motion calm; previous full-speed drift felt too nervous.
  const ANIM_SPEED = 0.4;
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
    const nodeGlow = glow && layerIndex >= config.glowFromLayer;
    return {
      x,
      y,
      vx: randomBetween(-0.22, 0.22) * layerConfig.speed,
      vy: randomBetween(-0.22, 0.22) * layerConfig.speed,
      phase: Math.random() * Math.PI * 2,
      pulse: randomBetween(0.7, 1.2),
      radius: randomBetween(radiusMin, radiusMax),
      accent,
      glow: nodeGlow,
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
    const frontDepth = Math.max(a.depth, b.depth);
    const frontBoost = 1 + frontDepth * 0.9;
    const alpha =
      strength * strength * (0.16 + a.layerOpacity * 0.32 + b.layerOpacity * 0.32) * 0.55 * depthFactor * lineBoost * frontBoost;
    const lineTone = a.accent || b.accent ? colors.accent : colors.primary;
    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.strokeStyle = `rgba(${lineTone}, ${Math.min(1, alpha)})`;
    context.lineWidth = (strength > 0.72 ? 1.35 : 0.95) * (0.7 + frontDepth * 0.85);
    context.stroke();
  }

  function drawNode(node, elapsed) {
    const pulse = 0.88 + Math.sin(elapsed * (1.1 + node.depth * 0.5) + node.phase) * 0.12;
    const radius = node.radius * pulse * (0.82 + node.depth * 0.28);
    const tone = node.accent ? colors.accent : colors.deep;
    const frontBoost = 1 + node.depth * 0.7;
    const alpha = Math.min(1, node.layerOpacity * (node.accent ? 1.08 : 0.92) * frontBoost);

    if (node.glow) {
      const glowRadius = radius + 5 * node.depth;
      const glowAlpha = alpha * 0.55;
      const glowGradient = context.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, glowRadius
      );
      glowGradient.addColorStop(0, `rgba(${glowTone}, ${glowAlpha})`);
      glowGradient.addColorStop(0.35, `rgba(${glowTone}, ${glowAlpha * 0.4})`);
      glowGradient.addColorStop(1, `rgba(${glowTone}, 0)`);
      context.beginPath();
      context.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
      context.fillStyle = glowGradient;
      context.fill();

      const coreGradient = context.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, radius
      );
      coreGradient.addColorStop(0, `rgba(${glowTone}, ${Math.min(1, alpha * 1.25)})`);
      coreGradient.addColorStop(0.5, `rgba(${glowTone}, ${alpha})`);
      coreGradient.addColorStop(1, `rgba(${tone}, ${alpha * 0.5})`);
      context.beginPath();
      context.arc(node.x, node.y, radius, 0, Math.PI * 2);
      context.fillStyle = coreGradient;
      context.fill();
      return;
    }

    context.beginPath();
    context.arc(node.x, node.y, radius + 2.2 * node.depth, 0, Math.PI * 2);
    context.fillStyle = `rgba(${tone}, ${alpha * 0.18})`;
    context.fill();

    context.beginPath();
    context.arc(node.x, node.y, radius, 0, Math.PI * 2);
    context.fillStyle = `rgba(${tone}, ${Math.min(1, alpha * 0.85)})`;
    context.fill();
  }

  function drawFrame(time) {
    context.clearRect(0, 0, width, height);

    const baseConnectDistance = Math.min(190, Math.max(112, width * 0.145));
    const motionScale = reducedMotion ? 0 : ANIM_SPEED;
    const elapsed = time * 0.001 * ANIM_SPEED;

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

initSynapseCanvas(".trust-section", ".trust-synapse-canvas", {
  primary: "215, 232, 160",
  accent: "248, 255, 220",
  deep: "200, 218, 130",
});

initSynapseCanvas(".product-section", ".product-synapse-canvas", {
  primary: "215, 232, 160",
  accent: "248, 255, 220",
  deep: "200, 218, 130",
  glow: "248, 255, 220",
}, { glow: true, glowFromLayer: 3 });


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

function ensureDemoModalIntro() {
  const title = document.querySelector(".demo-modal-title");
  if (!title || document.querySelector(".demo-modal-intro")) {
    return;
  }

  const intro = document.createElement("div");
  intro.className = "demo-modal-intro";

  const lead = document.createElement("p");
  lead.className = "demo-modal-lead";
  intro.appendChild(lead);

  const note = document.createElement("p");
  note.className = "demo-modal-note";
  intro.appendChild(note);

  title.insertAdjacentElement("afterend", intro);
}

function setDemoModalLead(copy) {
  const lead = document.querySelector(".demo-modal-lead");
  if (!lead) {
    return;
  }

  const lines = Array.isArray(copy?.introLines)
    ? copy.introLines
    : copy?.intro
      ? [copy.intro]
      : [];

  lead.replaceChildren();
  lines.forEach((line) => {
    const lineElement = document.createElement("span");
    lineElement.className = "demo-modal-lead-line";
    lineElement.textContent = line;
    lead.appendChild(lineElement);
  });
}

function applyDemoModalLanguage(copy) {
  demoModalCopy = copy || translations.de.demoModal;

  ensureDemoModalIntro();
  document.querySelector(".demo-modal-audience-heading")?.remove();
  document.querySelector(".demo-modal-audience-text")?.remove();

  setText(".demo-modal-eyebrow", demoModalCopy.eyebrow);
  setText(".demo-modal-title", demoModalCopy.title);
  setDemoModalLead(demoModalCopy);
  setText(".demo-modal-note", demoModalCopy.footerNote);
  setText(".demo-calendar-heading", demoModalCopy.calendar);
  setText(".demo-calendar-hint", demoModalCopy.hint);
  setText(".demo-submit", demoModalCopy.submit);
  setText(".demo-cancel", demoModalCopy.cancel);
  setText("[data-demo-optional-heading]", demoModalCopy.optionalHeading);

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

    labelElement.textContent = labelText;
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

    const fillTrack = document.createElement("span");
    fillTrack.className = "demo-calendar-day-fill";
    fillTrack.setAttribute("aria-hidden", "true");
    const filledCount = Math.min(DEMO_SELECTABLE_SLOTS.length, blockedSlots.size);
    for (let slotIndex = 0; slotIndex < DEMO_SELECTABLE_SLOTS.length; slotIndex += 1) {
      const segment = document.createElement("span");
      segment.className = "demo-calendar-day-fill-segment";
      if (slotIndex < filledCount) {
        segment.classList.add("is-filled");
      }
      fillTrack.appendChild(segment);
    }
    dayButton.appendChild(fillTrack);

    const dayLabel = document.createElement("span");
    dayLabel.className = "demo-calendar-day-label";
    dayLabel.textContent = String(day);
    dayButton.appendChild(dayLabel);

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
      dayButton.dataset.bookedCount = String(filledCount);
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
    const mailLabels = demoModalCopy.mailtoLabels || translations.de.demoModal.mailtoLabels;
    const bodyLines = [
      `${mailLabels.appointment}: ${demoSelectedDateKey} ${demoSelectedTime}`,
      `${mailLabels.name}: ${formData.get("nachname")}`,
      `${mailLabels.firstName}: ${formData.get("vorname")}`,
      `${mailLabels.company}: ${formData.get("firma")}`,
      `${mailLabels.phone}: ${formData.get("telefon")}`,
      `${mailLabels.email}: ${formData.get("email")}`,
    ];

    const note = String(formData.get("notiz") || "").trim();
    if (note) {
      bodyLines.push(`${mailLabels.note}: ${note}`);
    }

    const mailto = `mailto:hello@zuraio.ch?subject=${encodeURIComponent(demoModalCopy.mailSubject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
    closeDemoModal();
  });
}

function normalizeHeroVariant(variant) {
  return HERO_VARIANTS.has(variant) ? variant : "current";
}

function getPreferredHeroVariant() {
  try {
    return normalizeHeroVariant(window.localStorage.getItem(heroVariantStorageKey) || "");
  } catch {
    return "current";
  }
}

function setHeroVariant(variant) {
  const hero = document.querySelector("main#home > .hero");
  if (!hero) {
    return;
  }

  const nextVariant = normalizeHeroVariant(variant);
  hero.dataset.heroVariant = nextVariant;

  hero.querySelectorAll(".hero-variant-btn").forEach((button) => {
    const isActive = button.dataset.heroVariant === nextVariant;
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  try {
    window.localStorage.setItem(heroVariantStorageKey, nextVariant);
  } catch {
    // Ignore storage failures; the in-page state still updates.
  }
}

function setupHeroVariantToggle() {
  const hero = document.querySelector("main#home > .hero");
  if (!hero) {
    return;
  }

  // Toggle is currently hidden; keep the polished "current" design active.
  setHeroVariant("current");
}

function normalizeHeroLeadVariant(variant) {
  return HERO_LEAD_VARIANTS.has(variant) ? variant : "current";
}

function getPreferredHeroLeadVariant() {
  try {
    return normalizeHeroLeadVariant(window.localStorage.getItem(heroLeadStorageKey) || "");
  } catch {
    return "current";
  }
}

function clearHeroLeadPopupAlign() {
  const shell = document.querySelector("main#home > .hero .hero-lead-shell");
  if (shell) {
    shell.style.marginTop = "";
  }
}

function syncHeroLeadPopupAlign() {
  const hero = document.querySelector("main#home > .hero");
  const shell = hero?.querySelector(".hero-lead-shell");
  const lead = hero?.querySelector(".hero-lead");
  const popup = hero?.querySelector(".hero-popup");
  const title = hero?.querySelector(".hero-title");

  if (!hero || !shell || !lead || !popup) {
    return;
  }

  const isWindowLead = HERO_LEAD_WINDOW_VARIANTS.has(hero.dataset.heroLead);
  const isMobile = window.matchMedia(HERO_LEAD_MOBILE_MQ).matches;

  if (!isWindowLead || isMobile) {
    clearHeroLeadPopupAlign();
    return;
  }

  // Measure from a zero margin baseline, then place lead UK on popup UK.
  shell.style.marginTop = "0px";

  const popupBottom = popup.getBoundingClientRect().bottom;
  const leadBottom = lead.getBoundingClientRect().bottom;
  const desiredMargin = popupBottom - leadBottom;

  let minMargin = Number.NEGATIVE_INFINITY;
  if (title) {
    const titleBottom = title.getBoundingClientRect().bottom;
    const shellTop = shell.getBoundingClientRect().top;
    minMargin = titleBottom + 12 - shellTop;
  }

  const nextMargin = Math.max(minMargin, desiredMargin);
  shell.style.marginTop = `${nextMargin}px`;
}

function closeDesignMenu() {
  if (!designMenu || !designToggle) {
    return;
  }

  designMenu.hidden = true;
  designToggle.setAttribute("aria-expanded", "false");
}

function toggleDesignMenu(forceOpen) {
  if (!designMenu || !designToggle) {
    return;
  }

  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : designMenu.hidden;
  designMenu.hidden = !shouldOpen;
  designToggle.setAttribute("aria-expanded", String(shouldOpen));
}

function setHeroLeadVariant(variant) {
  const hero = document.querySelector("main#home > .hero");
  if (!hero) {
    return;
  }

  const nextVariant = normalizeHeroLeadVariant(variant);
  hero.dataset.heroLead = nextVariant;

  const integrationsHero = document.querySelector("#integrationen .integrations-hero");
  if (integrationsHero) {
    integrationsHero.dataset.heroLead = nextVariant;
  }

  const roadmap = document.querySelector("#roadmap");
  if (roadmap) {
    roadmap.dataset.heroLead = nextVariant;
  }

  document.querySelectorAll(".design-option").forEach((button) => {
    const isActive = button.dataset.heroLead === nextVariant;
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  try {
    window.localStorage.setItem(heroLeadStorageKey, nextVariant);
  } catch {
    // Ignore storage failures; the in-page state still updates.
  }

  requestAnimationFrame(() => {
    syncHeroLeadPopupAlign();
  });
}

function setupHeroLeadToggle() {
  const hero = document.querySelector("main#home > .hero");
  if (!hero || !designToggle || !designMenu) {
    return;
  }

  designToggle.addEventListener("click", () => {
    toggleDesignMenu();
  });

  designMenu.addEventListener("click", (event) => {
    const option = event.target instanceof HTMLElement ? event.target.closest(".design-option") : null;
    if (!option) {
      return;
    }

    const nextVariant = option.getAttribute("data-hero-lead");
    if (nextVariant) {
      setHeroLeadVariant(nextVariant);
      closeDesignMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Node)) {
      return;
    }

    const target = event.target;
    if (designToggle.contains(target) || designMenu.contains(target)) {
      return;
    }

    closeDesignMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDesignMenu();
    }
  });

  const popup = hero.querySelector(".hero-popup");
  const lead = hero.querySelector(".hero-lead");
  if (typeof ResizeObserver !== "undefined") {
    const observer = new ResizeObserver(() => {
      syncHeroLeadPopupAlign();
    });
    if (popup) {
      observer.observe(popup);
    }
    if (lead) {
      observer.observe(lead);
    }
  }

  window.addEventListener("resize", () => {
    syncHeroLeadPopupAlign();
  });

  if (popup && !popup.complete) {
    popup.addEventListener("load", () => {
      syncHeroLeadPopupAlign();
    });
  }

  setHeroLeadVariant(getPreferredHeroLeadVariant());
}

initDemoBookingModal();
initAssistantShowcase();
setupHeroVariantToggle();
setupHeroLeadToggle();
applyLanguage(getPreferredLanguage());
requestAnimationFrame(() => {
  syncHeroLeadPopupAlign();
});

(function initIntroDataQuestionVisual() {
  const visual = document.querySelector("#warum .intro-band-visual");
  const canvas = document.querySelector("#warum .intro-synapse-canvas");
  const magnifierImg = document.querySelector("#warum .intro-magnifier-img");
  if (!visual || !canvas) {
    return;
  }

  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  const ICON_SOURCES = [
    {
      basePath: "assets/icons/Icon-cloud",
      files: [
        "clock-1.svg",
        "clock-2.svg",
        "clock-3.svg",
        "clock-4.svg",
        "clock-5.svg",
        "cloud.svg",
        "database.svg",
        "gmail.svg",
        "google.svg",
        "microsoft.svg",
        "onedrive.svg",
        "outlook.svg",
        "pdf.svg",
        "salesforce.svg",
        "sharepoint.svg",
        "slack.svg",
        "teams.svg",
        "voice.svg",
        "whatsapp.svg",
        "word.svg",
        "hubspot.svg",
      ],
    },
  ];
  const ICON_BASE_PATH = "assets/icons/Icon-cloud";
  // Keep these icons from appearing as a visual pair in the lens.
  const SEPARATED_ICON_PAIRS = [
    ["hubspot.svg", "whatsapp.svg"],
    ["whatsapp.svg", "microsoft.svg"],
  ];

  const FAVORED_ICON_FILES = new Set([
    "teams.svg",
    "outlook.svg",
    "whatsapp.svg",
    "slack.svg",
    "sharepoint.svg",
    "onedrive.svg",
    "gmail.svg",
  ]);
  const FAVORED_ICON_WEIGHT = 3.5;
  const NORMAL_ICON_WEIGHT = 1;

  const ICON_FILL = { r: 70, g: 70, b: 70 }; // #464646
  const ICON_STROKE = { r: 70, g: 70, b: 70 }; // #464646
  const TEXT_COLOR = { r: 0, g: 0, b: 0 };
  const MAGNIFIER_SRC_CANDIDATES = [
    "assets/images/Luope 01.png?v=20260723d",
    "assets/images/Lupe.png",
  ];
  // Measured from assets/images/Luope 01.png (1254x1254)
  const MAGNIFIER_NATIVE = 1254;
  const MAGNIFIER_CONTENT = { left: 141, top: 138, right: 1120, bottom: 1088 };
  const MAGNIFIER_LENS = { x: 431.47, y: 431.73, radius: 274.75 };
  const MAGNIFIER_INNER_RATIO = 0.9;

  // Short labels sit left of the lens; longer labels sit right. Order = fixed seats.
  const NETWORK_TEXTS = [
    "Wo ist es?",
    "Schon erledigt?",
    "Wer hat Zugriff?",
    "Welches Dokument",
    "Wie lange dauert es",
    "Wer hat den Kontext?",
    "Wurde das Aktualisiert?",
    "Wo wurde es abgelegt?",
    "Hat das schon jemand gemacht?",
  ];

  // Polar seats around the rim. No seats in the handle sector (bottom-right).
  // radiusMul/drift vary so labels do not sit on one vertical line.
  const TEXT_LAYOUT = [
    { side: "left", angle: -1.95, radiusMul: 1.06, driftX: -6, driftY: -10, weight: 1 },
    { side: "left", angle: -2.55, radiusMul: 1.11, driftX: -16, driftY: 4, weight: 1 },
    // "Wer hat Zugriff?" — exactly 06:00 under the lens
    { side: "bottom", angle: Math.PI / 2, radiusMul: 1.12, driftX: 0, driftY: 0, weight: 1 },
    { side: "left", angle: 2.45, radiusMul: 1.1, driftX: -12, driftY: 18, weight: 1 },
    // "Wie lange dauert es" — exactly 09:00 left of the lens
    { side: "left", angle: Math.PI, radiusMul: 1.1, driftX: 0, driftY: 0, weight: 1 },
    { side: "right", angle: -0.72, radiusMul: 1.13, driftX: 18, driftY: -6, weight: 1 },
    { side: "right", angle: -0.28, radiusMul: 1.09, driftX: 12, driftY: 8, weight: 1 },
    { side: "right", angle: 0.12, radiusMul: 1.16, driftX: 22, driftY: 2, weight: 1 },
    { side: "right", angle: -1.55, radiusMul: 1.1, driftX: 6, driftY: -22, weight: 1 },
  ];

  const FADE_IN_MIN = 0.4;
  const FADE_IN_MAX = 1.4;
  const HOLD_MIN = 1.2;
  const HOLD_MAX = 3.6;
  const FADE_OUT_MIN = 0.4;
  const FADE_OUT_MAX = 1.3;
  const TEXT_FADE_IN_MIN = FADE_IN_MIN;
  const TEXT_FADE_IN_MAX = FADE_IN_MAX;
  const TEXT_HOLD_MIN = 1.4;
  const TEXT_HOLD_MAX = 3.2;
  const TEXT_FADE_OUT_MIN = FADE_OUT_MIN;
  const TEXT_FADE_OUT_MAX = FADE_OUT_MAX;
  const POSITION_COOLDOWN_MIN = 1.4;
  const POSITION_COOLDOWN_MAX = 3.2;
  const INNER_SPAWN_RATIO = 0.75;
  const SPACING_GAP = 30;
  const TARGET_VISIBLE_TEXTS = 6;
  const TARGET_TEXTS_PER_SIDE = 3;
  const ENTITY_GAP = 14;
  // Reduce overall animation speed by 40% (60% of original).
  const ANIM_SPEED = 0.6;

  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let reducedMotion = reducedMotionQuery.matches;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let maxIconSlots = 18;
  let targetVisibleIcons = 16;
  let iconImages = [];
  let iconWeights = [];
  let iconFiles = [];
  let iconSlots = [];
  let textSlots = [];
  let recentPositions = [];
  let nextIconCursor = 0;
  let textDeck = [];
  let lastSpawnedTextIndex = -1;
  let lastLayoutWidth = 0;
  let lastLayoutHeight = 0;
  let animationFrame = 0;
  let isVisible = false;
  let isRunning = false;
  let lastTime = 0;
  let animTime = 0;
  let centerX = 0;
  let centerY = 0;
  let chaosStrokes = [];
  let magnifierLayout = null;
  let magnifierImage = null;
  let labelLayer = null;

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function easeSmooth(t) {
    const x = clamp(t, 0, 1);
    return x * x * (3 - 2 * x);
  }

  function qualityProfile() {
    const shortSide = Math.min(width, height);
    const isNarrow = width < 700 || shortSide < 340;
    maxIconSlots = isNarrow ? 18 : 22;
    targetVisibleIcons = isNarrow ? 13 : 16;
    dpr = Math.min(window.devicePixelRatio || 1, isNarrow ? 1.5 : 2);
    syncMagnifierLayout();
  }

  function syncMagnifierLayout() {
    if (!width || !height) {
      magnifierLayout = null;
      centerX = 0;
      centerY = 0;
      return;
    }

    const marginX = 4;
    const marginTop = 4;
    const contentW = MAGNIFIER_CONTENT.right - MAGNIFIER_CONTENT.left;

    // Base fit for the lens diameter, then +30% as requested.
    // Chaos lines + green glow share this lens center. Handle may leave the frame.
    let scale =
      Math.min((width - marginX * 2) / contentW, height / (MAGNIFIER_LENS.radius * 2)) * 1.3;

    for (let step = 0; step < 28; step += 1) {
      // Green field center == lens glass center.
      centerX = width * 0.5;
      centerY = height * 0.5;
      let originX = centerX - MAGNIFIER_LENS.x * scale;
      let originY = centerY - MAGNIFIER_LENS.y * scale;

      const lensLeft = originX + (MAGNIFIER_LENS.x - MAGNIFIER_LENS.radius) * scale;
      const lensRight = originX + (MAGNIFIER_LENS.x + MAGNIFIER_LENS.radius) * scale;
      const lensTop = originY + (MAGNIFIER_LENS.y - MAGNIFIER_LENS.radius) * scale;

      // Keep the circular head mostly in view; allow handle to exit bottom/right.
      if (lensLeft >= -width * 0.02 && lensRight <= width * 1.02 && lensTop >= -height * 0.02) {
        const radius = MAGNIFIER_LENS.radius * scale;
        magnifierLayout = {
          scale,
          drawSize: MAGNIFIER_NATIVE * scale,
          originX,
          originY,
          radius,
          innerRadius: radius * MAGNIFIER_INNER_RATIO,
        };
        visual.style.setProperty("--intro-lens-x", `${((centerX / width) * 100).toFixed(2)}%`);
        visual.style.setProperty("--intro-lens-y", `${((centerY / height) * 100).toFixed(2)}%`);
        visual.style.setProperty(
          "--intro-glow-size",
          `${Math.max(90, ((radius * 3.8) / Math.min(width, height)) * 100).toFixed(1)}%`
        );
        syncMagnifierDom();
        return;
      }
      scale *= 0.97;
    }

    const fallbackScale =
      Math.min((width - marginX * 2) / contentW, height / (MAGNIFIER_LENS.radius * 2)) * 1.3;
    centerX = width * 0.5;
    centerY = height * 0.5;
    const originX = centerX - MAGNIFIER_LENS.x * fallbackScale;
    const originY = centerY - MAGNIFIER_LENS.y * fallbackScale;
    const radius = MAGNIFIER_LENS.radius * fallbackScale;
    magnifierLayout = {
      scale: fallbackScale,
      drawSize: MAGNIFIER_NATIVE * fallbackScale,
      originX,
      originY,
      radius,
      innerRadius: radius * MAGNIFIER_INNER_RATIO,
    };
    visual.style.setProperty("--intro-lens-x", `${((centerX / width) * 100).toFixed(2)}%`);
    visual.style.setProperty("--intro-lens-y", `${((centerY / height) * 100).toFixed(2)}%`);
    visual.style.setProperty(
      "--intro-glow-size",
      `${Math.max(90, ((radius * 3.8) / Math.min(width, height)) * 100).toFixed(1)}%`
    );
    syncMagnifierDom();
  }

  function syncMagnifierDom() {
    if (!magnifierImg || !magnifierLayout) {
      return;
    }
    magnifierImg.style.left = `${magnifierLayout.originX}px`;
    magnifierImg.style.top = `${magnifierLayout.originY}px`;
    magnifierImg.style.width = `${magnifierLayout.drawSize}px`;
    magnifierImg.style.height = `${magnifierLayout.drawSize}px`;
  }

  function magnifierRadius() {
    return magnifierLayout ? magnifierLayout.radius : Math.min(width, height) * 0.28;
  }

  function magnifierInnerRadius(padding = 0) {
    const inner = magnifierLayout
      ? magnifierLayout.innerRadius
      : magnifierRadius() * MAGNIFIER_INNER_RATIO;
    return Math.max(12, inner - padding);
  }

  function insideLens(x, y, radius = 0) {
    return Math.hypot(x - centerX, y - centerY) + radius <= magnifierInnerRadius(6);
  }

  function chaosRadii() {
    // Extend evenly beyond the magnifier head on all sides.
    const lensR = Math.max(magnifierRadius(), Math.min(width, height) * 0.28);
    const span = lensR * 1.85;
    const fade = lensR * 2.05;
    return {
      cloudRx: span,
      cloudRy: span,
      fadeRx: fade,
      fadeRy: fade,
    };
  }

  function textExtentRadius(metrics) {
    return Math.hypot(metrics.width * 0.5, metrics.height * 0.5) + 3;
  }

  function createChaosStroke(shortSide, cloudRx, cloudRy) {
    const lobe = Math.random();
    const baseAngle = Math.random() * Math.PI * 2;
    const baseRadius = Math.pow(Math.random(), 0.55) * (lobe < 0.35 ? 0.55 : 1);
    let x = Math.cos(baseAngle) * cloudRx * baseRadius * randomBetween(0.7, 1.15);
    let y = Math.sin(baseAngle) * cloudRy * baseRadius * randomBetween(0.65, 1.2);
    const points = [{ x, y, vx: 0, vy: 0 }];
    const segments = 5 + Math.floor(Math.random() * 7);
    let heading = Math.random() * Math.PI * 2;

    for (let step = 0; step < segments; step += 1) {
      heading += randomBetween(-0.9, 0.9);
      const stepLen = randomBetween(10, 34) * (shortSide / 420);
      x += Math.cos(heading) * stepLen;
      y += Math.sin(heading) * stepLen;
      const nx = x / cloudRx;
      const ny = y / cloudRy;
      if (nx * nx + ny * ny > 1.15) {
        x *= 0.82;
        y *= 0.82;
        heading += Math.PI * randomBetween(0.4, 0.9);
      }
      points.push({
        x,
        y,
        vx: randomBetween(-6, 6),
        vy: randomBetween(-6, 6),
      });
    }

    return {
      points,
      width: randomBetween(1.0, 2.8),
      baseAlpha: randomBetween(0.12, 0.3),
      alpha: 0,
      phase: Math.random() * Math.PI * 2,
      speed: randomBetween(0.35, 0.9),
      life: 0,
      maxLife: randomBetween(2.4, 6.5),
      morph: randomBetween(0.9, 2.0),
    };
  }

  function rebuildChaosCloud() {
    if (!width || !height) {
      chaosStrokes = [];
      return;
    }
    const shortSide = Math.min(width, height);
    const count = Math.round(shortSide < 340 ? 56 : 84);
    const { cloudRx, cloudRy } = chaosRadii();
    chaosStrokes = Array.from({ length: count }, () => {
      const stroke = createChaosStroke(shortSide, cloudRx, cloudRy);
      stroke.life = randomBetween(0, stroke.maxLife * 0.85);
      stroke.alpha = stroke.baseAlpha;
      return stroke;
    });
  }

  function updateChaosCloud(dt) {
    if (!width || !height) {
      return;
    }

    const shortSide = Math.min(width, height);
    const { cloudRx, cloudRy } = chaosRadii();
    const targetCount = Math.round(shortSide < 340 ? 56 : 84);

    chaosStrokes = chaosStrokes.filter((stroke) => {
      stroke.life += dt;
      const fadeIn = clamp(stroke.life / 0.8, 0, 1);
      const fadeOut = clamp((stroke.maxLife - stroke.life) / 1.1, 0, 1);
      stroke.alpha = stroke.baseAlpha * Math.min(fadeIn, fadeOut);

      stroke.points.forEach((point, index) => {
        point.vx += Math.sin(stroke.phase + index + stroke.life * stroke.morph) * 7 * dt;
        point.vy += Math.cos(stroke.phase * 0.8 + index * 0.7 + stroke.life * stroke.speed) * 7 * dt;
        point.vx = clamp(point.vx, -22, 22);
        point.vy = clamp(point.vy, -22, 22);
        point.x += point.vx * dt;
        point.y += point.vy * dt;

        const nx = point.x / cloudRx;
        const ny = point.y / cloudRy;
        const outside = nx * nx + ny * ny;
        if (outside > 0.85) {
          const pull = (outside - 0.85) * 0.08;
          point.vx -= point.x * pull;
          point.vy -= point.y * pull;
        }
      });

      return stroke.life < stroke.maxLife;
    });

    while (chaosStrokes.length < targetCount) {
      chaosStrokes.push(createChaosStroke(shortSide, cloudRx, cloudRy));
    }
  }

  function drawChaosCloud(elapsed) {
    if (!chaosStrokes.length) {
      return;
    }

    const { fadeRx, fadeRy } = chaosRadii();

    context.save();
    context.translate(centerX, centerY);
    context.lineCap = "round";
    context.lineJoin = "round";

    chaosStrokes.forEach((stroke) => {
      if (stroke.alpha <= 0.01) {
        return;
      }
      const drift = reducedMotion ? 0 : Math.sin(elapsed * stroke.speed + stroke.phase) * 2.5;

      let midX = 0;
      let midY = 0;
      stroke.points.forEach((point) => {
        midX += point.x;
        midY += point.y;
      });
      midX /= stroke.points.length;
      midY /= stroke.points.length;
      const edge = Math.hypot(midX / fadeRx, midY / fadeRy);
      const edgeFade = edge <= 0.55 ? 1 : edge >= 1.05 ? 0 : 1 - (edge - 0.55) / 0.5;
      const alpha = stroke.alpha * edgeFade;
      if (alpha <= 0.01) {
        return;
      }

      const centerBias = clamp(1 - edge / 0.75, 0, 1);
      const darkMix = centerBias * 0.22;
      const r = Math.round(159 * (1 - darkMix) + 120 * darkMix);
      const g = Math.round(175 * (1 - darkMix) + 132 * darkMix);
      const b = Math.round(82 * (1 - darkMix) + 52 * darkMix);
      const blurPx = 1.35 - centerBias * 0.75;
      const lineAlpha = clamp(alpha * (1 + centerBias * 0.18), 0, 0.42);

      context.filter = `blur(${blurPx.toFixed(2)}px)`;
      context.beginPath();
      stroke.points.forEach((point, index) => {
        const px = point.x + drift * Math.cos(stroke.phase + index);
        const py = point.y + drift * Math.sin(stroke.phase * 0.7 + index);
        if (index === 0) {
          context.moveTo(px, py);
        } else {
          context.lineTo(px, py);
        }
      });
      context.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineAlpha})`;
      context.lineWidth = stroke.width * (1 - centerBias * 0.1);
      context.stroke();
    });

    context.filter = "none";
    context.restore();
  }

  function makeTintedIcon(source) {
    const size = 96;
    const pad = 8;
    const offscreen = document.createElement("canvas");
    offscreen.width = size;
    offscreen.height = size;
    const ctx = offscreen.getContext("2d");
    if (!ctx) {
      return null;
    }

    ctx.clearRect(0, 0, size, size);
    ctx.drawImage(source, pad, pad, size - pad * 2, size - pad * 2);
    const imageData = ctx.getImageData(0, 0, size, size);
    const src = imageData.data;
    const out = ctx.createImageData(size, size);
    const dst = out.data;
    const threshold = 28;
    const edge = new Uint8Array(size * size);

    function alphaAt(x, y) {
      if (x < 0 || y < 0 || x >= size || y >= size) {
        return 0;
      }
      return src[(y * size + x) * 4 + 3];
    }

    for (let y = 0; y < size; y += 1) {
      for (let x = 0; x < size; x += 1) {
        const alpha = alphaAt(x, y);
        if (alpha < threshold) {
          continue;
        }
        const isEdge =
          alphaAt(x - 1, y) < threshold ||
          alphaAt(x + 1, y) < threshold ||
          alphaAt(x, y - 1) < threshold ||
          alphaAt(x, y + 1) < threshold;
        if (isEdge) {
          edge[y * size + x] = 1;
        }
      }
    }

    for (let y = 0; y < size; y += 1) {
      for (let x = 0; x < size; x += 1) {
        const i = y * size + x;
        if (alphaAt(x, y) < threshold) {
          continue;
        }
        const isStroke =
          edge[i] ||
          (x > 0 && edge[i - 1]) ||
          (x < size - 1 && edge[i + 1]) ||
          (y > 0 && edge[i - size]) ||
          (y < size - 1 && edge[i + size]);
        const tone = isStroke ? ICON_STROKE : ICON_FILL;
        const index = i * 4;
        dst[index] = tone.r;
        dst[index + 1] = tone.g;
        dst[index + 2] = tone.b;
        dst[index + 3] = 255;
      }
    }

    ctx.clearRect(0, 0, size, size);
    ctx.putImageData(out, 0, 0);
    return offscreen;
  }

  function loadSourceIcon(file, basePath = ICON_BASE_PATH) {
    return new Promise((resolve) => {
      const image = new Image();
      image.decoding = "async";
      image.onload = () => resolve(image);
      image.onerror = () => resolve(null);
      image.src = `${basePath}/${file}`;
    });
  }

  function iconPixelSize(slot) {
    const base = 24 + Math.min(width, height) * 0.028;
    return base * slot.sizeScale * Math.max(slot.scale, 0.35);
  }

  function entityDrawHalf(entity) {
    return iconPixelSize(entity) * 0.5;
  }

  function visibleBoundsFor(entity) {
    const half = entityDrawHalf(entity) + 3;
    return {
      minX: half,
      maxX: Math.max(half, width - half),
      minY: half,
      maxY: Math.max(half, height - half),
    };
  }

  function innerDisk(full) {
    const cx = (full.minX + full.maxX) * 0.5;
    const cy = (full.minY + full.maxY) * 0.5;
    const w = Math.max(1, full.maxX - full.minX);
    const h = Math.max(1, full.maxY - full.minY);
    const halfAreaR = Math.sqrt((0.5 * w * h) / Math.PI);
    const fitR = Math.min(w, h) * 0.5 * 0.98;
    return { cx, cy, r: Math.min(halfAreaR, fitR) };
  }

  function pointInInnerDisk(x, y, full) {
    const disk = innerDisk(full);
    return Math.hypot(x - disk.cx, y - disk.cy) <= disk.r;
  }

  function samplePointInLens(half) {
    const maxR = Math.max(8, magnifierInnerRadius(10 + half));
    for (let tryIndex = 0; tryIndex < 36; tryIndex += 1) {
      const angle = Math.random() * Math.PI * 2;
      const rad = maxR * Math.sqrt(Math.random());
      const x = centerX + Math.cos(angle) * rad;
      const y = centerY + Math.sin(angle) * rad;
      if (x >= half && x <= width - half && y >= half && y <= height - half && insideLens(x, y, half)) {
        return { x, y };
      }
    }
    return {
      x: clamp(centerX, half, Math.max(half, width - half)),
      y: clamp(centerY, half, Math.max(half, height - half)),
    };
  }

  function samplePointInRegion(full, region) {
    // Icons always spawn inside the lens; keep helper for resize rehoming compatibility.
    const half = Math.max(4, Math.min(full.minX, full.minY));
    return samplePointInLens(half);
  }

  function getActiveSlots(exclude) {
    return iconSlots.filter(
      (slot) => slot !== exclude && slot.phase !== "wait" && slot.alpha > 0.02
    );
  }

  function pruneRecentPositions() {
    recentPositions = recentPositions.filter((entry) => entry.until > animTime);
  }

  function rememberPosition(slot) {
    if (typeof slot.x !== "number" || typeof slot.y !== "number") {
      return;
    }
    recentPositions.push({
      x: slot.x,
      y: slot.y,
      radius: entityDrawHalf(slot) + SPACING_GAP * 0.65,
      until: animTime + randomBetween(POSITION_COOLDOWN_MIN, POSITION_COOLDOWN_MAX),
    });
  }

  function minDistanceFor(slot, other) {
    return entityDrawHalf(slot) + entityDrawHalf(other) + SPACING_GAP;
  }

  function scoreCandidate(candidate, slot, others) {
    if (!insideLens(candidate.x, candidate.y, entityDrawHalf(slot))) {
      return -1;
    }

    let nearest = Infinity;
    for (let i = 0; i < textSlots.length; i += 1) {
      const textSlot = textSlots[i];
      if (textSlot.phase === "wait" || textSlot.alpha <= 0.02) {
        continue;
      }
      const textExtent = textExtentRadius(textMetrics(textSlot));
      const textDist = Math.hypot(candidate.x - textSlot.x, candidate.y - textSlot.y);
      if (textDist < entityDrawHalf(slot) + textExtent + ENTITY_GAP) {
        return -1;
      }
      nearest = Math.min(nearest, textDist);
    }

    const slotFile = iconFiles[slot.imageIndex];
    for (let i = 0; i < others.length; i += 1) {
      const other = others[i];
      const ox = typeof other.x === "number" ? other.x : other.anchorX;
      const oy = typeof other.y === "number" ? other.y : other.anchorY;
      const dist = Math.hypot(candidate.x - ox, candidate.y - oy);
      const pairGap = iconsFormSeparatedPair(slotFile, iconFiles[other.imageIndex])
        ? Math.min(width, height) * 0.28
        : 0;
      if (dist < Math.max(minDistanceFor(slot, other), pairGap)) {
        return -1;
      }
      nearest = Math.min(nearest, dist);
    }

    for (let i = 0; i < recentPositions.length; i += 1) {
      const recent = recentPositions[i];
      const dist = Math.hypot(candidate.x - recent.x, candidate.y - recent.y);
      const need = recent.radius + entityDrawHalf(slot) + SPACING_GAP * 0.35;
      if (dist < need) {
        return -1;
      }
      nearest = Math.min(nearest, dist);
    }

    if (!Number.isFinite(nearest)) {
      nearest = Math.min(width, height) * 0.25;
    }
    return nearest;
  }

  function placeSlot(slot) {
    slot.region = "inner";
    const full = visibleBoundsFor(slot);
    const others = getActiveSlots(slot);
    let best = null;
    let bestScore = -1;
    const half = entityDrawHalf(slot);

    for (let tryIndex = 0; tryIndex < 120; tryIndex += 1) {
      const candidate = samplePointInLens(half);
      const score = scoreCandidate(candidate, slot, others);
      if (score < 0) {
        continue;
      }
      if (score > bestScore) {
        best = candidate;
        bestScore = score;
        if (score >= entityDrawHalf(slot) * 2 + SPACING_GAP * 1.4) {
          break;
        }
      }
    }

    if (!best) {
      return false;
    }

    slot.x = best.x;
    slot.y = best.y;
    slot.anchorX = best.x;
    slot.anchorY = best.y;
    return true;
  }

  function rehomeActiveSlots() {
    const active = getActiveSlots(null);
    active.forEach((slot) => {
      slot.region = "inner";
    });

    const ordered = active.slice();
    const placed = [];
    ordered.forEach((slot) => {
      let best = null;
      let bestScore = -1;
      const half = entityDrawHalf(slot);
      for (let tryIndex = 0; tryIndex < 72; tryIndex += 1) {
        const candidate = samplePointInLens(half);
        const score = scoreCandidate(candidate, slot, placed);
        if (score < 0) {
          continue;
        }
        if (score > bestScore) {
          best = candidate;
          bestScore = score;
        }
      }
      if (!best) {
        best = samplePointInLens(half);
      }
      slot.x = best.x;
      slot.y = best.y;
      slot.anchorX = best.x;
      slot.anchorY = best.y;
      placed.push(slot);
    });
  }

  function iconsFormSeparatedPair(fileA, fileB) {
    if (!fileA || !fileB) {
      return false;
    }
    return SEPARATED_ICON_PAIRS.some(
      ([left, right]) =>
        (fileA === left && fileB === right) || (fileA === right && fileB === left)
    );
  }

  function visibleIconFiles() {
    return iconSlots
      .filter((slot) => slot.phase !== "wait")
      .map((slot) => iconFiles[slot.imageIndex])
      .filter(Boolean);
  }

  function pickNextImageIndex() {
    if (!iconImages.length) {
      return 0;
    }

    const visibleIndexes = new Set(
      iconSlots
        .filter((slot) => slot.phase !== "wait")
        .map((slot) => slot.imageIndex)
    );
    const visibleFiles = visibleIconFiles();
    const candidates = [];
    let totalWeight = 0;

    for (let index = 0; index < iconImages.length; index += 1) {
      if (visibleIndexes.has(index)) {
        continue;
      }
      const file = iconFiles[index];
      if (visibleFiles.some((visibleFile) => iconsFormSeparatedPair(file, visibleFile))) {
        continue;
      }
      const weight = iconWeights[index] || NORMAL_ICON_WEIGHT;
      candidates.push({ index, weight });
      totalWeight += weight;
    }

    if (!candidates.length) {
      for (let index = 0; index < iconImages.length; index += 1) {
        if (visibleIndexes.has(index)) {
          continue;
        }
        const weight = iconWeights[index] || NORMAL_ICON_WEIGHT;
        candidates.push({ index, weight });
        totalWeight += weight;
      }
    }

    if (!candidates.length) {
      for (let index = 0; index < iconImages.length; index += 1) {
        const weight = iconWeights[index] || NORMAL_ICON_WEIGHT;
        candidates.push({ index, weight });
        totalWeight += weight;
      }
    }

    let roll = Math.random() * totalWeight;
    for (let i = 0; i < candidates.length; i += 1) {
      roll -= candidates[i].weight;
      if (roll <= 0) {
        nextIconCursor = (candidates[i].index + 1) % iconImages.length;
        return candidates[i].index;
      }
    }

    const last = candidates[candidates.length - 1];
    nextIconCursor = (last.index + 1) % iconImages.length;
    return last.index;
  }

  function beginIconFadeIn(slot) {
    slot.imageIndex = pickNextImageIndex();
    slot.sizeScale = randomBetween(0.72, 1.35);
    slot.fadeIn = randomBetween(FADE_IN_MIN, FADE_IN_MAX);
    slot.hold = randomBetween(HOLD_MIN, HOLD_MAX);
    slot.fadeOut = randomBetween(FADE_OUT_MIN, FADE_OUT_MAX);
    if (!placeSlot(slot)) {
      slot.phase = "wait";
      slot.timer = randomBetween(0.08, 0.22);
      slot.alpha = 0;
      slot.scale = 0.12;
      return false;
    }
    slot.phase = "in";
    slot.timer = slot.fadeIn;
    slot.alpha = 0;
    slot.scale = 0.12;
    return true;
  }

  function beginIconFadeOut(slot) {
    slot.fadeOut = slot.fadeOut || randomBetween(FADE_OUT_MIN, FADE_OUT_MAX);
    slot.phase = "out";
    slot.timer = slot.fadeOut;
  }

  function visibleIconCount() {
    return iconSlots.filter((slot) => slot.phase !== "wait").length;
  }

  function scheduleTransitions() {
    let spawnBudget = 3;
    while (spawnBudget > 0 && visibleIconCount() < targetVisibleIcons) {
      const ready = iconSlots.find((slot) => slot.phase === "wait" && slot.timer <= 0);
      if (!ready) {
        break;
      }
      if (!beginIconFadeIn(ready)) {
        break;
      }
      spawnBudget -= 1;
    }

    const transitioning = iconSlots.filter(
      (slot) => slot.phase === "in" || slot.phase === "out"
    ).length;

    const expiredHolds = iconSlots.filter((slot) => slot.phase === "hold" && slot.timer <= 0);
    // Prefer natural hold expiry; only nudge early fades when almost nothing is moving.
    const earlyHolds =
      transitioning < 2
        ? iconSlots
            .filter((slot) => {
              if (slot.phase !== "hold" || slot.timer <= 0) {
                return false;
              }
              const total = slot.hold || HOLD_MIN;
              const elapsed = total - slot.timer;
              return elapsed >= HOLD_MIN * 1.15;
            })
            .slice()
            .sort((a, b) => a.timer - b.timer)
        : [];

    const overflow = Math.max(0, visibleIconCount() - targetVisibleIcons);
    const wantTransitions = clamp(2 + overflow, 1, 4);
    const fadeBudget = Math.max(0, wantTransitions - transitioning);
    if (fadeBudget <= 0) {
      return;
    }

    const pool = expiredHolds.length ? expiredHolds : earlyHolds;
    if (!pool.length) {
      return;
    }

    pool.slice(0, fadeBudget).forEach((slot) => beginIconFadeOut(slot));
  }

  function buildIconSlots() {
    if (!iconImages.length || !width || !height) {
      iconSlots = [];
      return;
    }

    nextIconCursor = 0;
    iconSlots = [];
    recentPositions = [];
    const count = Math.min(maxIconSlots, Math.max(targetVisibleIcons + 3, iconImages.length));
    const slotCount = Math.min(maxIconSlots, Math.max(count, targetVisibleIcons + 3));

    for (let index = 0; index < slotCount; index += 1) {
      iconSlots.push({
        imageIndex: 0,
        x: centerX,
        y: centerY,
        anchorX: centerX,
        anchorY: centerY,
        sizeScale: randomBetween(0.72, 1.35),
        alpha: 0,
        scale: 0.12,
        phase: "wait",
        timer: randomBetween(0, 0.35),
        hold: randomBetween(HOLD_MIN, HOLD_MAX),
        fadeIn: randomBetween(FADE_IN_MIN, FADE_IN_MAX),
        fadeOut: randomBetween(FADE_OUT_MIN, FADE_OUT_MAX),
        region: "inner",
      });
    }

    let seeded = 0;
    const seedTarget = Math.min(targetVisibleIcons, iconSlots.length);
    for (let i = 0; i < iconSlots.length && seeded < seedTarget; i += 1) {
      if (beginIconFadeIn(iconSlots[i])) {
        const progress = randomBetween(0.05, 0.85);
        iconSlots[i].timer = iconSlots[i].fadeIn * (1 - progress);
        iconSlots[i].alpha = easeSmooth(progress);
        iconSlots[i].scale = 0.12 + iconSlots[i].alpha * 0.88;
        seeded += 1;
      }
    }
  }

  function textFontSize(slot) {
    const shortSide = Math.min(width, height);
    return clamp(shortSide * 0.034 * (slot.weight || 1), 14, 20);
  }

  function textMetrics(slot) {
    const fontSize = textFontSize(slot);
    context.save();
    context.font = `500 ${fontSize}px "Bradley Hand", "Bradley Hand ITC", "Segoe Print", "Comic Sans MS", cursive`;
    const metrics = context.measureText(slot.text);
    context.restore();
    return {
      width: metrics.width,
      height: fontSize * 1.2,
      fontSize,
    };
  }

  function ensureLabelLayer() {
    if (labelLayer && labelLayer.isConnected) {
      return labelLayer;
    }
    labelLayer = visual.querySelector(".intro-orbit-labels");
    if (!labelLayer) {
      labelLayer = document.createElement("div");
      labelLayer.className = "intro-orbit-labels";
      labelLayer.setAttribute("aria-hidden", "true");
      visual.appendChild(labelLayer);
    }
    return labelLayer;
  }

  function resolveOrbitPosition(slot) {
    const layout = TEXT_LAYOUT[slot.textIndex % TEXT_LAYOUT.length];
    const metrics = textMetrics(slot);
    // Sit close to the brass rim; small drifts break the "one line" look.
    const rimR = magnifierRadius() * 1.05 + 8;
    const dist = rimR * (layout.radiusMul || 1.1);
    const x = centerX + Math.cos(layout.angle) * dist + (layout.driftX || 0);
    const y = centerY + Math.sin(layout.angle) * dist + (layout.driftY || 0);
    return {
      x,
      y,
      side: layout.side,
      weight: layout.weight,
      metrics,
      extent: textExtentRadius(metrics),
    };
  }

  function resolveTextAnchor(slot) {
    return resolveOrbitPosition(slot);
  }

  function syncLabelDom(slot) {
    if (!slot.el) {
      return;
    }
    const layout = TEXT_LAYOUT[slot.textIndex % TEXT_LAYOUT.length];
    slot.el.textContent = slot.text;
    slot.el.dataset.side = layout.side;
    slot.el.style.left = `${slot.x}px`;
    slot.el.style.top = `${slot.y}px`;
    slot.el.style.fontSize = `${textFontSize(slot)}px`;
    const visible = slot.phase !== "wait" && slot.alpha > 0.01;
    slot.el.style.opacity = visible ? String(clamp(slot.alpha, 0, 1)) : "0";
    slot.el.style.visibility = visible ? "visible" : "hidden";
  }

  function syncAllLabels() {
    textSlots.forEach((slot) => syncLabelDom(slot));
  }

  function reshuffleTextDeck() {
    const indices = NETWORK_TEXTS.map((_, index) => index);
    for (let i = indices.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const swap = indices[i];
      indices[i] = indices[j];
      indices[j] = swap;
    }
    if (
      lastSpawnedTextIndex >= 0 &&
      indices.length > 1 &&
      indices[0] === lastSpawnedTextIndex
    ) {
      const swapAt = 1 + Math.floor(Math.random() * (indices.length - 1));
      const swap = indices[0];
      indices[0] = indices[swapAt];
      indices[swapAt] = swap;
    }
    textDeck = indices;
  }

  function takeNextTextIndex() {
    if (!textDeck.length) {
      reshuffleTextDeck();
    }
    return textDeck.shift();
  }

  function beginTextFadeIn(slot) {
    slot.text = NETWORK_TEXTS[slot.textIndex % NETWORK_TEXTS.length];
    const resolved = resolveOrbitPosition(slot);
    slot.weight = resolved.weight;
    slot.x = resolved.x;
    slot.y = resolved.y;
    slot.side = resolved.side;
    slot.fadeIn = randomBetween(TEXT_FADE_IN_MIN, TEXT_FADE_IN_MAX);
    slot.hold = randomBetween(TEXT_HOLD_MIN, TEXT_HOLD_MAX);
    slot.fadeOut = randomBetween(TEXT_FADE_OUT_MIN, TEXT_FADE_OUT_MAX);
    slot.phase = "in";
    slot.timer = slot.fadeIn;
    slot.alpha = 0;
    syncLabelDom(slot);
    return true;
  }

  function beginTextFadeOut(slot) {
    slot.fadeOut = slot.fadeOut || randomBetween(TEXT_FADE_OUT_MIN, TEXT_FADE_OUT_MAX);
    slot.phase = "out";
    slot.timer = slot.fadeOut;
  }

  function visibleTextCount() {
    return textSlots.filter((slot) => slot.phase !== "wait").length;
  }

  function visibleCountOnSide(side) {
    return textSlots.filter((slot) => {
      if (slot.phase === "wait") {
        return false;
      }
      return TEXT_LAYOUT[slot.textIndex % TEXT_LAYOUT.length].side === side;
    }).length;
  }

  function preferredSpawnSide() {
    const leftCount = visibleCountOnSide("left");
    const rightCount = visibleCountOnSide("right");
    if (leftCount < rightCount && leftCount < TARGET_TEXTS_PER_SIDE) {
      return "left";
    }
    if (rightCount < leftCount && rightCount < TARGET_TEXTS_PER_SIDE) {
      return "right";
    }
    if (leftCount >= TARGET_TEXTS_PER_SIDE && rightCount < TARGET_TEXTS_PER_SIDE) {
      return "right";
    }
    if (rightCount >= TARGET_TEXTS_PER_SIDE && leftCount < TARGET_TEXTS_PER_SIDE) {
      return "left";
    }
    return null;
  }

  function tryActivateTextIndex(textIndex) {
    const slot = textSlots.find((entry) => entry.textIndex === textIndex);
    if (!slot || slot.phase !== "wait" || slot.timer > 0) {
      return false;
    }
    const side = TEXT_LAYOUT[textIndex % TEXT_LAYOUT.length].side;
    if (visibleCountOnSide(side) >= TARGET_TEXTS_PER_SIDE) {
      return false;
    }
    beginTextFadeIn(slot);
    lastSpawnedTextIndex = textIndex;
    textSlots.forEach((other) => {
      if (other !== slot && other.phase === "wait" && other.timer < 0.35) {
        other.timer = randomBetween(0.35, 0.8);
      }
    });
    return true;
  }

  function scheduleTextTransitions() {
    let spawnBudget = 2;
    while (spawnBudget > 0 && visibleTextCount() < TARGET_VISIBLE_TEXTS) {
      const preferSide = preferredSpawnSide();
      let activated = false;

      // First pass: honour side balance.
      if (preferSide) {
        for (let attempt = 0; attempt < NETWORK_TEXTS.length; attempt += 1) {
          const textIndex = takeNextTextIndex();
          const side = TEXT_LAYOUT[textIndex % TEXT_LAYOUT.length].side;
          if (side !== preferSide) {
            textDeck.push(textIndex);
            continue;
          }
          if (tryActivateTextIndex(textIndex)) {
            activated = true;
            break;
          }
          textDeck.push(textIndex);
        }
      }

      // Fallback: any free seat under the per-side cap.
      if (!activated) {
        for (let attempt = 0; attempt < NETWORK_TEXTS.length; attempt += 1) {
          const textIndex = takeNextTextIndex();
          if (tryActivateTextIndex(textIndex)) {
            activated = true;
            break;
          }
          textDeck.push(textIndex);
        }
      }

      if (!activated) {
        break;
      }
      spawnBudget -= 1;
    }

    const expired = textSlots
      .filter((slot) => slot.phase === "hold" && slot.timer <= 0)
      .sort((a, b) => {
        const sideA = TEXT_LAYOUT[a.textIndex % TEXT_LAYOUT.length].side;
        const sideB = TEXT_LAYOUT[b.textIndex % TEXT_LAYOUT.length].side;
        return visibleCountOnSide(sideB) - visibleCountOnSide(sideA);
      });
    expired.slice(0, 2).forEach((slot) => beginTextFadeOut(slot));
  }

  function buildTextSlots() {
    if (!width || !height) {
      textSlots.forEach((slot) => {
        if (slot.el) {
          slot.el.remove();
        }
      });
      textSlots = [];
      return;
    }

    const layer = ensureLabelLayer();
    lastSpawnedTextIndex = -1;
    reshuffleTextDeck();

    // Reuse existing label nodes when possible.
    const previous = new Map(
      textSlots
        .filter((slot) => slot.el)
        .map((slot) => [slot.textIndex, slot.el])
    );
    layer.replaceChildren();

    textSlots = NETWORK_TEXTS.map((labelText, index) => {
      const el = previous.get(index) || document.createElement("p");
      el.className = "intro-orbit-label";
      el.textContent = labelText;
      layer.appendChild(el);
      const slot = {
        text: labelText,
        textIndex: index,
        anchorIndex: index,
        el,
        x: centerX,
        y: centerY,
        side: TEXT_LAYOUT[index % TEXT_LAYOUT.length].side,
        weight: TEXT_LAYOUT[index % TEXT_LAYOUT.length].weight,
        alpha: 0,
        phase: "wait",
        timer: randomBetween(0.1, 1.4),
        hold: randomBetween(TEXT_HOLD_MIN, TEXT_HOLD_MAX),
        fadeIn: randomBetween(TEXT_FADE_IN_MIN, TEXT_FADE_IN_MAX),
        fadeOut: randomBetween(TEXT_FADE_OUT_MIN, TEXT_FADE_OUT_MAX),
      };
      const resolved = resolveOrbitPosition(slot);
      slot.x = resolved.x;
      slot.y = resolved.y;
      slot.side = resolved.side;
      syncLabelDom(slot);
      return slot;
    });

    let seeded = 0;
    const seedTarget = Math.min(TARGET_VISIBLE_TEXTS, textSlots.length);
    let preferSide = Math.random() < 0.5 ? "left" : "right";
    for (let attempt = 0; attempt < NETWORK_TEXTS.length * 2 && seeded < seedTarget; attempt += 1) {
      const textIndex = takeNextTextIndex();
      const side = TEXT_LAYOUT[textIndex % TEXT_LAYOUT.length].side;
      const slot = textSlots.find((entry) => entry.textIndex === textIndex);
      if (!slot || slot.phase !== "wait") {
        textDeck.push(textIndex);
        continue;
      }
      if (side !== preferSide && visibleCountOnSide(preferSide) < TARGET_TEXTS_PER_SIDE) {
        textDeck.push(textIndex);
        continue;
      }
      if (visibleCountOnSide(side) >= TARGET_TEXTS_PER_SIDE) {
        textDeck.push(textIndex);
        continue;
      }
      beginTextFadeIn(slot);
      const progress = randomBetween(0.2, 0.85);
      slot.timer = slot.fadeIn * (1 - progress);
      slot.alpha = easeSmooth(progress);
      lastSpawnedTextIndex = textIndex;
      syncLabelDom(slot);
      seeded += 1;
      preferSide = preferSide === "left" ? "right" : "left";
    }
  }

  function loadMagnifierImage() {
    return new Promise((resolve) => {
      let index = 0;

      function tryNext() {
        if (index >= MAGNIFIER_SRC_CANDIDATES.length) {
          magnifierImage = null;
          if (magnifierImg) {
            magnifierImg.removeAttribute("src");
          }
          resolve(null);
          return;
        }
        const src = MAGNIFIER_SRC_CANDIDATES[index];
        index += 1;
        const image = new Image();
        image.decoding = "async";
        image.onload = () => {
          magnifierImage = image;
          if (magnifierImg) {
            magnifierImg.src = src;
          }
          syncMagnifierLayout();
          resolve(image);
        };
        image.onerror = () => tryNext();
        image.src = src;
      }

      tryNext();
    });
  }

  function loadIcons() {
    const iconJobs = [];
    ICON_SOURCES.forEach((source) => {
      source.files.forEach((file) => {
        iconJobs.push(
          loadSourceIcon(file, source.basePath).then((image) => ({
            image,
            file,
          }))
        );
      });
    });

    const iconsPromise = Promise.all(iconJobs).then((results) => {
      iconImages = [];
      iconWeights = [];
      iconFiles = [];
      results.forEach(({ image, file }) => {
        if (!image) {
          return;
        }
        const tinted = makeTintedIcon(image);
        if (!tinted) {
          return;
        }
        iconImages.push(tinted);
        iconFiles.push(file);
        iconWeights.push(
          FAVORED_ICON_FILES.has(file) ? FAVORED_ICON_WEIGHT : NORMAL_ICON_WEIGHT
        );
      });
    });

    return Promise.all([iconsPromise, loadMagnifierImage()]).then(() => {
      syncMagnifierLayout();
      buildIconSlots();
      buildTextSlots();
    });
  }

  function updateIcons(dt) {
    if (!iconSlots.length || !iconImages.length) {
      return;
    }

    pruneRecentPositions();

    iconSlots.forEach((slot) => {
      slot.timer -= dt;
      if (typeof slot.anchorX === "number") {
        slot.x = slot.anchorX;
        slot.y = slot.anchorY;
      }

      if (slot.phase === "wait") {
        slot.alpha = 0;
        slot.scale = 0.12;
        return;
      }

      if (slot.phase === "in") {
        const duration = Math.max(slot.fadeIn || FADE_IN_MIN, 0.01);
        const t = 1 - clamp(slot.timer / duration, 0, 1);
        const eased = easeSmooth(t);
        slot.alpha = eased;
        slot.scale = 0.12 + eased * 0.88;
        if (slot.timer <= 0) {
          slot.phase = "hold";
          slot.timer = slot.hold || randomBetween(HOLD_MIN, HOLD_MAX);
          slot.hold = slot.timer;
          slot.alpha = 1;
          slot.scale = 1;
        }
        return;
      }

      if (slot.phase === "hold") {
        slot.alpha = 1;
        slot.scale = 1;
        return;
      }

      if (slot.phase === "out") {
        const duration = Math.max(slot.fadeOut || FADE_OUT_MIN, 0.01);
        const t = clamp(slot.timer / duration, 0, 1);
        const eased = easeSmooth(t);
        slot.alpha = eased;
        slot.scale = 0.12 + eased * 0.88;
        if (slot.timer <= 0) {
          rememberPosition(slot);
          slot.phase = "wait";
          slot.timer = randomBetween(0.2, 0.7);
          slot.alpha = 0;
          slot.scale = 0.12;
        }
      }
    });

    scheduleTransitions();
  }

  function updateTexts(dt) {
    if (!textSlots.length) {
      return;
    }

    textSlots.forEach((slot) => {
      slot.timer -= dt;

      if (slot.phase === "wait") {
        slot.alpha = 0;
        syncLabelDom(slot);
        return;
      }

      if (slot.phase === "in") {
        const duration = Math.max(slot.fadeIn || TEXT_FADE_IN_MIN, 0.01);
        const t = 1 - clamp(slot.timer / duration, 0, 1);
        slot.alpha = easeSmooth(t);
        if (slot.timer <= 0) {
          slot.phase = "hold";
          slot.timer = slot.hold || randomBetween(TEXT_HOLD_MIN, TEXT_HOLD_MAX);
          slot.hold = slot.timer;
          slot.alpha = 1;
        }
        syncLabelDom(slot);
        return;
      }

      if (slot.phase === "hold") {
        slot.alpha = 1;
        syncLabelDom(slot);
        return;
      }

      if (slot.phase === "out") {
        const duration = Math.max(slot.fadeOut || TEXT_FADE_OUT_MIN, 0.01);
        const t = clamp(slot.timer / duration, 0, 1);
        slot.alpha = easeSmooth(t);
        if (slot.timer <= 0) {
          slot.phase = "wait";
          slot.timer = randomBetween(0.35, 1.4);
          slot.alpha = 0;
        }
        syncLabelDom(slot);
      }
    });

    scheduleTextTransitions();
  }

  function drawIcons() {
    iconSlots.forEach((slot) => {
      if (slot.alpha <= 0.01 || slot.phase === "wait") {
        return;
      }

      const image = iconImages[slot.imageIndex];
      if (!image) {
        return;
      }

      const size = iconPixelSize(slot);
      const half = size * 0.5;

      context.save();
      context.translate(slot.x, slot.y);
      context.globalAlpha = clamp(slot.alpha, 0, 1);
      context.drawImage(image, -half, -half, size, size);
      context.restore();
    });
  }

  function drawMagnifier() {
    // Magnifier is an HTML foreground overlay so the handle is not clipped by the canvas.
    if (!magnifierLayout) {
      syncMagnifierLayout();
    } else {
      syncMagnifierDom();
    }
  }

  function drawFrame() {
    context.clearRect(0, 0, width, height);
    // Lines and green may extend beyond the lens.
    drawChaosCloud(animTime);

    // Icons stay in the glass opening; question texts orbit outside the lens.
    context.save();
    context.beginPath();
    context.arc(centerX, centerY, magnifierInnerRadius(2), 0, Math.PI * 2);
    context.clip();
    drawIcons();
    context.restore();

    syncAllLabels();
    drawMagnifier();
  }

  function tick(time) {
    if (!isRunning) {
      return;
    }
    const dt = Math.min(0.033, ((time - lastTime) || 16) / 1000) * ANIM_SPEED;
    lastTime = time;
    animTime += dt;

    if (!reducedMotion) {
      updateChaosCloud(dt);
      updateIcons(dt);
      updateTexts(dt);
    }

    drawFrame();
    animationFrame = window.requestAnimationFrame(tick);
  }

  function start() {
    if (isRunning || reducedMotion) {
      return;
    }
    isRunning = true;
    lastTime = performance.now();
    animationFrame = window.requestAnimationFrame(tick);
  }

  function stop() {
    isRunning = false;
    window.cancelAnimationFrame(animationFrame);
  }

  function renderStatic() {
    if (!iconSlots.length && iconImages.length) {
      buildIconSlots();
    }
    if (!textSlots.length) {
      buildTextSlots();
    }

    const keepIcons = Math.min(targetVisibleIcons, iconSlots.length);
    iconSlots.forEach((slot, index) => {
      if (index < keepIcons) {
        if (slot.phase === "wait") {
          beginIconFadeIn(slot);
        }
        slot.phase = "hold";
        slot.alpha = 1;
        slot.scale = 1;
        slot.timer = 999;
      } else {
        slot.phase = "wait";
        slot.alpha = 0;
        slot.scale = 0.12;
      }
    });

    const keepTexts = Math.min(TARGET_VISIBLE_TEXTS, textSlots.length);
    textSlots.forEach((slot, index) => {
      if (index < keepTexts) {
        if (slot.phase === "wait") {
          beginTextFadeIn(slot);
        }
        slot.phase = "hold";
        slot.alpha = 1;
        slot.timer = 999;
      } else {
        slot.phase = "wait";
        slot.alpha = 0;
      }
      syncLabelDom(slot);
    });

    drawFrame();
  }

  function resizeCanvas() {
    const bounds = visual.getBoundingClientRect();
    const nextWidth = Math.max(1, Math.round(bounds.width));
    const nextHeight = Math.max(1, Math.round(bounds.height));
    const sizeChanged =
      Math.abs(nextWidth - lastLayoutWidth) > 8 ||
      Math.abs(nextHeight - lastLayoutHeight) > 8;
    const firstLayout = lastLayoutWidth === 0 || lastLayoutHeight === 0;

    width = nextWidth;
    height = nextHeight;
    qualityProfile();
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (!firstLayout && !sizeChanged) {
      return;
    }

    lastLayoutWidth = width;
    lastLayoutHeight = height;
    rebuildChaosCloud();

    const expectedSlots = iconImages.length
      ? Math.min(maxIconSlots, Math.max(targetVisibleIcons + 3, Math.min(maxIconSlots, iconImages.length + 3)))
      : 0;
    const needsSlotRebuild = Boolean(iconImages.length) && iconSlots.length !== expectedSlots;

    if (needsSlotRebuild || (firstLayout && iconImages.length && !iconSlots.length)) {
      buildIconSlots();
    } else if (!firstLayout && sizeChanged && iconSlots.length) {
      recentPositions = [];
      rehomeActiveSlots();
    }

    if (!textSlots.length || sizeChanged || firstLayout) {
      buildTextSlots();
    } else {
      textSlots.forEach((slot) => {
        const resolved = resolveTextAnchor(slot);
        slot.x = resolved.x;
        slot.y = resolved.y;
        slot.weight = resolved.weight;
        slot.side = resolved.side;
        syncLabelDom(slot);
      });
    }
  }

  const resizeObserver = new ResizeObserver(() => {
    resizeCanvas();
    if (reducedMotion) {
      renderStatic();
      return;
    }
    if (isVisible || !isRunning) {
      drawFrame();
    }
  });
  resizeObserver.observe(visual);

  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      isVisible = entries.some((entry) => entry.isIntersecting);
      if (reducedMotion) {
        stop();
        return;
      }
      if (isVisible && document.visibilityState === "visible") {
        start();
      } else {
        stop();
      }
    },
    { threshold: 0.08 }
  );
  intersectionObserver.observe(visual);

  document.addEventListener("visibilitychange", () => {
    if (reducedMotion) {
      return;
    }
    if (document.visibilityState === "visible" && isVisible) {
      start();
    } else {
      stop();
    }
  });

  function syncMotionPreference() {
    reducedMotion = reducedMotionQuery.matches;
    if (reducedMotion) {
      stop();
      renderStatic();
      return;
    }
    if (isVisible && document.visibilityState === "visible") {
      start();
    }
  }

  if (typeof reducedMotionQuery.addEventListener === "function") {
    reducedMotionQuery.addEventListener("change", syncMotionPreference);
  } else if (typeof reducedMotionQuery.addListener === "function") {
    reducedMotionQuery.addListener(syncMotionPreference);
  }

  resizeCanvas();

  loadIcons().then(() => {
    if (reducedMotion) {
      renderStatic();
      return;
    }
    drawFrame();
    const bounds = visual.getBoundingClientRect();
    isVisible = bounds.bottom > 0 && bounds.top < window.innerHeight;
    if (isVisible && document.visibilityState === "visible") {
      start();
    }
  });

  if (reducedMotion) {
    renderStatic();
  } else {
    drawFrame();
  }
})();


(function syncSiteHeaderOffset() {
  const header = document.querySelector(".site-header");
  if (!header) {
    return;
  }

  // Enter quickly on any real scroll; leave only when fully back at the top.
  const enterCompactAt = 1;
  const exitCompactAt = 0;
  const exitSettleMs = 160;
  const transitionMs = 420;
  let sectionHold = false;
  let settlingSectionJump = false;
  let settleTimer = null;
  let exitTimer = null;
  let transitionLock = false;
  let transitionTimer = null;
  let expandedHeight = 0;
  let lastAppliedHeight = 0;
  let compact = false;

  const spacer = document.createElement("div");
  spacer.className = "site-header-spacer";
  spacer.setAttribute("aria-hidden", "true");
  header.after(spacer);

  function applyHeaderHeight(height) {
    const next = Math.max(1, Math.ceil(height));
    if (next === lastAppliedHeight) {
      return;
    }
    lastAppliedHeight = next;
    document.documentElement.style.setProperty("--site-header-height", `${next}px`);
  }

  function measureExpandedHeight() {
    if (compact) {
      return expandedHeight || lastAppliedHeight;
    }
    const measured = Math.ceil(header.getBoundingClientRect().height);
    if (measured > 0) {
      expandedHeight = measured;
    }
    return expandedHeight || lastAppliedHeight;
  }

  function updateHeight() {
    applyHeaderHeight(measureExpandedHeight());
  }

  function setCompact(shouldCompact) {
    if (compact === shouldCompact) {
      updateHeight();
      return;
    }

    window.clearTimeout(exitTimer);
    exitTimer = null;

    if (shouldCompact) {
      const height = measureExpandedHeight();
      applyHeaderHeight(height);
      spacer.style.height = `${height}px`;
      compact = true;
      header.classList.add("is-compact");
    } else {
      compact = false;
      header.classList.remove("is-compact");
      spacer.style.height = "0px";
      applyHeaderHeight(expandedHeight || lastAppliedHeight);
      window.setTimeout(() => {
        if (compact) {
          return;
        }
        updateHeight();
      }, transitionMs);
    }

    transitionLock = true;
    window.clearTimeout(transitionTimer);
    transitionTimer = window.setTimeout(() => {
      transitionLock = false;
    }, transitionMs);
  }

  function scheduleSectionSettle() {
    window.clearTimeout(settleTimer);
    settleTimer = window.setTimeout(() => {
      settlingSectionJump = false;
      setCompact(false);
    }, 220);
  }

  function beginSectionJump() {
    sectionHold = true;
    settlingSectionJump = true;
    header.classList.add("is-section-jump");
    setCompact(false);
    void header.offsetHeight;
    window.requestAnimationFrame(() => {
      header.classList.remove("is-section-jump");
    });
    scheduleSectionSettle();
  }

  function releaseSectionHold() {
    if (!sectionHold && !settlingSectionJump) {
      return;
    }
    sectionHold = false;
    settlingSectionJump = false;
    window.clearTimeout(settleTimer);
    // Tiny scroll gestures after a section jump should still open the pill.
    const y = window.scrollY || window.pageYOffset || 0;
    setCompact(y > exitCompactAt);
  }

  function updateCompact() {
    if (sectionHold || settlingSectionJump) {
      window.clearTimeout(exitTimer);
      exitTimer = null;
      setCompact(false);
      if (settlingSectionJump) {
        scheduleSectionSettle();
      }
      return;
    }

    if (transitionLock) {
      return;
    }

    const y = window.scrollY || window.pageYOffset || 0;

    if (!compact) {
      window.clearTimeout(exitTimer);
      exitTimer = null;
      if (y >= enterCompactAt) {
        setCompact(true);
      }
      return;
    }

    // Stay in pill mode while scrolling; only expand after resting at the top.
    if (y > exitCompactAt) {
      window.clearTimeout(exitTimer);
      exitTimer = null;
      return;
    }

    if (exitTimer) {
      return;
    }

    exitTimer = window.setTimeout(() => {
      exitTimer = null;
      if (sectionHold || settlingSectionJump || transitionLock) {
        return;
      }
      const currentY = window.scrollY || window.pageYOffset || 0;
      if (currentY <= exitCompactAt) {
        setCompact(false);
      }
    }, exitSettleMs);
  }

  function isScrollKey(event) {
    return (
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === "PageUp" ||
      event.key === "PageDown" ||
      event.key === "Home" ||
      event.key === "End" ||
      event.key === " "
    );
  }

  function isSamePageHashLink(link) {
    if (!(link instanceof HTMLAnchorElement)) {
      return false;
    }

    const href = link.getAttribute("href");
    if (!href || href === "#") {
      return false;
    }

    let url;
    try {
      url = new URL(link.href, window.location.href);
    } catch (error) {
      return false;
    }

    if (!url.hash || url.hash === "#") {
      return false;
    }

    return (
      url.origin === window.location.origin &&
      url.pathname === window.location.pathname
    );
  }

  updateHeight();
  updateCompact();
  window.addEventListener("scroll", updateCompact, { passive: true });
  window.addEventListener("scrollend", () => {
    if (!sectionHold) {
      return;
    }
    settlingSectionJump = false;
    setCompact(false);
  });
  window.addEventListener("resize", () => {
    if (!compact && !transitionLock) {
      updateHeight();
      return;
    }
    if (compact && expandedHeight) {
      spacer.style.height = `${expandedHeight}px`;
    }
  });
  window.addEventListener("hashchange", beginSectionJump);
  window.addEventListener("wheel", releaseSectionHold, { passive: true });
  window.addEventListener("touchmove", releaseSectionHold, { passive: true });
  window.addEventListener("keydown", (event) => {
    if (isScrollKey(event)) {
      releaseSectionHold();
    }
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!isSamePageHashLink(link)) {
      return;
    }

    const url = new URL(link.href, window.location.href);
    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) {
      return;
    }

    event.preventDefault();
    beginSectionJump();
    target.scrollIntoView({ block: "start" });
    if (window.location.hash !== url.hash) {
      window.history.pushState(null, "", url.hash);
    }
  });

  if (window.location.hash) {
    beginSectionJump();
  }

  if ("ResizeObserver" in window) {
    new ResizeObserver(() => {
      if (transitionLock || compact) {
        return;
      }
      updateHeight();
    }).observe(header);
  }
})();
