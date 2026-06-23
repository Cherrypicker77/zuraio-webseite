const translations = {
  de: {
    meta: {
      title: "zuraio | own your data",
      description:
        "zuraio ist der AI-Orchestrator für Schweizer KMU, die KI nutzen wollen, ohne Kontrolle über Daten, Wissen und Prozesse zu verlieren.",
    },
    nav: {
      why: "Warum",
      solution: "Lösung",
      security: "Sicherheit",
      orchestrator: "Orchestrator",
      roadmap: "Roadmap",
      demo: "Demo anfragen",
      language: "Sprache",
      menu: "Menü",
    },
    hero: {
      eyebrow: "KI-ORCHESTRATOR FÜR SCHWEIZER KMU'S",
      titleHtml:
        'Weil es keine passende Lösung gab, haben wir <span class="brand-highlight">zuraio</span> gegründet',
      lead:
        "zuraio verbindet Unternehmenswissen mit individuellen Agents, Voice-Funktionen und sicherer Infrastruktur zu einem KI-System, das DICH entlastet und bei dem Daten, Wissen und Kontrolle in DEINEM Unternehmen bleiben.",
      demo: "Demo planen",
      security: "Sicherheitsmodelle ansehen",
      trust: ["Datenhoheit", "Schweizer Hosting", "Rollen & Rechte", "Modularer Start"],
    },
    intro: {
      eyebrow: "FALSCHE ARBEIT FRISST DEN TAG",
      titleHtml:
        "<span>Projektleiter führen Projekte</span><span>Nicht Protokolle.</span>",
      lines: [
        "Jeden Tag gehen Stunden verloren für Statusberichte, Besuchsrapporte, Protokolle und Administration.",
        "Zeit, die eigentlich für Entscheidungen, Herausforderungen und Menschen gedacht wäre.",
        "Du erklärst, was erledigt werden soll. zuraio übernimmt.",
        "Damit sich Deine Projektleiter wieder um Projektleitung kümmern können.",
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
      link: "Möglichkeiten",
    },
    problem: {
      eyebrow: "Die Realität im KMU",
      titleHtml:
        '<span>Tool-Hopping nervt.</span><span>Wissen verschwindet.</span><span class="nowrap">Wertvolle Zeit geht verloren.</span>',
      lead:
        "KI ist selten das eigentliche Problem. Die Herausforderungen entstehen im Alltag. Informationen sind verstreut, Mitarbeitende verbringen Stunden mit Administration und moderne KI-Lösungen passen oft nicht zu den Anforderungen von Schweizer Unternehmen.",
      cards: [
        {
          titleHtml: "Datenschutz bleibt unklar",
          body: [
            "Unternehmenswissen und Kundendaten landen immer häufiger in externen Systemen.",
            "Doch wer hat Zugriff darauf? Und erfüllen diese Lösungen wirklich DSG und EU AI Act?",
          ],
          strong: "Kontrolle abzugeben ist keine Strategie.",
        },
        {
          titleHtml: "Wissen liegt überall.<br>Aber nirgends zusammen.",
          body: [
            "Informationen verteilen sich auf Server, E-Mails, Chats, ERP, DMS, PIM, Intranet und lokale Dateien.",
            "Das Wissen ist da.",
            "Aber oft nicht auffindbar und nicht vernetzt.",
          ],
          strong: "Unternehmenswissen darf kein Suchspiel sein.",
        },
        {
          titleHtml: "Sales verkauft nicht.<br>Sales dokumentiert.",
          body: ["Besuchsberichte. CRM. Follow-ups. Administration.", "Zeit beim Kunden wird weniger."],
          strong: "Verkaufen sollte wichtiger sein als dokumentieren.",
        },
        {
          titleHtml: "Standard-KI versteht<br>dein Unternehmen nicht.",
          body: [
            "Generische KI kennt weder eure Prozesse noch euren Unternehmenskontext.",
            "Sie liefert Antworten.",
            "Aber nicht zwingend die richtigen.",
          ],
          strong: "Dein Unternehmen ist einzigartig. Deine KI sollte es auch sein.",
        },
      ],
      link: "KI-Ökosystem",
    },
    answer: {
      eyebrow: "Die Antwort",
      titleHtml: "Ein zentraler Orchestrator.<br>Volle Kontrolle über deine KI.",
      kicker: "Nicht einfach ein Chatbot.",
      body: [
        "zuraio ist ein intelligentes Harness, das jede Anfrage analysiert, prüft und orchestriert. Komplexe Anfragen durchlaufen dabei mehrere Loops, bevor eine Antwort erstellt wird.",
        "Damit Antworten zu eurem Wissen, euren Prozessen, euren Richtlinien und eurer Unternehmenskultur passen. Mit zuraio trägt deine KI eure DNA.",
      ],
      features: [
        "RAG für jedes Projekt und Unternehmenswissen",
        "Rollen und Rechte pro Tenant",
        "Ein Agent pro Aufgabe",
        "Lokale, hybride oder Cloud-LLMs",
        "Audio-Modus für unterwegs",
        "Audit Logging inklusive",
        "Antworten mit Quellenangaben",
        "Modular und skalierbar",
      ],
      link: "Harness",
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
      link: "Datensouveränität & Sicherheit",
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
      eyebrow: "Warum wir zuraio bauen",
      title: "Wir wollten<br>MEHR KI<br>Nicht weniger<br>KONTROLLE",
      quotes: [
        {
          title: "Datenhoheit",
          body: "Unternehmenswissen gehört dem Unternehmen.",
        },
        {
          title: "Skalierbar",
          body: "Ein Agent heute. Ein KI-Ökosystem morgen.",
        },
        {
          title: "Unabhängig",
          body: "Keine Abhängigkeit. Keine Blackbox. Keine Kompromisse.",
        },
      ],
      link: "über uns",
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "Heute ein Orchestrator<br>Morgen ein<br>KI-Ökosystem",
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
      link: "Roadmap",
    },
    subpages: {
      eyebrow: "Vertiefende Seiten",
      title: "Bereit für Ausbau, Beratung und Verkaufsgespräche.",
      links: [
        "Datensouveränität & Sicherheit",
        "Voice-Agent",
        "RAG & Wissenssicherung",
        "Projekt-Agent",
        "Orchestrator & Agents",
        "EU AI Act & DSGVO",
        "Infrastruktur & LLMs",
        "Roadmap",
        "Über uns",
        "Kontakt / Demo",
      ],
    },
    cta: {
      eyebrow: "Nächster Schritt",
      title: "Zeig uns, wo dein Unternehmen heute Zeit, Wissen oder Kontrolle verliert.",
      body: "Wir zeigen dir, wo ein erster zuraio-Agent den grössten Nutzen bringt und welche Sicherheitsarchitektur zu deinem Unternehmen passt.",
      demo: "Demo anfragen",
      contact: "Kontaktseite öffnen",
    },
    footer: {
      body: "KI für Unternehmen, die ihre Daten nicht aus der Hand geben.",
      links: ["Sicherheit", "Orchestrator", "Demo"],
    },
  },
  en: {
    meta: {
      title: "zuraio | own your data",
      description:
        "zuraio is the AI orchestrator for Swiss SMEs that want to use AI without losing control over data, knowledge, and processes.",
    },
    nav: {
      why: "Why",
      solution: "Solution",
      security: "Security",
      orchestrator: "Orchestrator",
      roadmap: "Roadmap",
      demo: "Request demo",
      language: "Language",
      menu: "Menu",
    },
    hero: {
      eyebrow: "AI ORCHESTRATOR FOR SWISS SMEs",
      titleHtml:
        'Because there was no suitable solution, we built <span class="brand-highlight">zuraio</span>',
      lead:
        "zuraio connects company knowledge with individual agents, voice features, and secure infrastructure into an AI system that lightens your load and keeps data, knowledge, and control inside YOUR company.",
      demo: "Plan demo",
      security: "View security models",
      trust: ["Data sovereignty", "Swiss hosting", "Roles & permissions", "Modular start"],
    },
    intro: {
      eyebrow: "WRONG WORK WASTES THE DAY",
      titleHtml: "<span>Project managers lead projects</span><span>Not reports.</span>",
      lines: [
        "Every day, hours are lost to status reports, visit notes, protocols, and administration.",
        "Time that should really go to decisions, challenges, and people.",
        "You explain what needs to be done. zuraio takes over.",
        "So your project managers can focus on project leadership again.",
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
      link: "Opportunities",
    },
    problem: {
      eyebrow: "The reality in SMEs",
      titleHtml:
        '<span>Tool-hopping is annoying.</span><span>Knowledge disappears.</span><span class="nowrap">Valuable time is lost.</span>',
      lead:
        "AI is rarely the real problem. The challenges happen in daily work. Information is scattered, employees spend hours on administration, and modern AI solutions often do not fit the needs of Swiss companies.",
      cards: [
        {
          titleHtml: "Privacy is unclear",
          body: [
            "Company knowledge and customer data increasingly end up in external systems.",
            "But who has access? And do these solutions really meet the GDPR and EU AI Act?",
          ],
          strong: "Giving up control is not a strategy.",
        },
        {
          titleHtml: "Knowledge is everywhere.<br>But nowhere together.",
          body: [
            "Information spreads across servers, e-mails, chats, ERP, DMS, PIM, intranet, and local files.",
            "The knowledge is there.",
            "But often not findable and not connected.",
          ],
          strong: "Company knowledge should not be a scavenger hunt.",
        },
        {
          titleHtml: "Sales does not sell.<br>Sales documents.",
          body: ["Visit reports. CRM. Follow-ups. Administration.", "Time with customers gets shorter."],
          strong: "Selling should matter more than documenting.",
        },
        {
          titleHtml: "Standard AI does not understand<br>your company.",
          body: [
            "Generic AI knows neither your processes nor your company context.",
            "It provides answers.",
            "But not necessarily the right ones.",
          ],
          strong: "Your company is unique. Your AI should be too.",
        },
      ],
      link: "AI ecosystem",
    },
    answer: {
      eyebrow: "The answer",
      titleHtml: "A central orchestrator.<br>Full control over your AI.",
      kicker: "Not just a chatbot.",
      body: [
        "zuraio is an intelligent harness that analyzes, checks, and orchestrates every request. Complex requests run through multiple loops before an answer is created.",
        "So answers fit your knowledge, your processes, your policies, and your company culture. With zuraio, your AI carries your DNA.",
      ],
      features: [
        "RAG for every project and company knowledge",
        "Roles and permissions per tenant",
        "One agent per task",
        "Local, hybrid, or cloud LLMs",
        "Audio mode for on the go",
        "Audit logging included",
        "Answers with sources",
        "Modular and scalable",
      ],
      link: "Harness",
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
      link: "Data sovereignty & security",
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
      eyebrow: "Why we built zuraio",
      title: "We wanted<br>MORE AI<br>Not less<br>CONTROL",
      quotes: [
        { title: "Data sovereignty", body: "Company knowledge belongs to the company." },
        { title: "Scalable", body: "One agent today. An AI ecosystem tomorrow." },
        { title: "Independent", body: "No dependency. No black box. No compromises." },
      ],
      link: "About us",
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "Today an orchestrator<br>Tomorrow an<br>AI ecosystem",
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
      link: "Roadmap",
    },
    subpages: {
      eyebrow: "Deep-dive pages",
      title: "Ready for expansion, consulting, and sales conversations.",
      links: [
        "Data sovereignty & security",
        "Voice Agent",
        "RAG & knowledge safeguarding",
        "Project Agent",
        "Orchestrator & agents",
        "EU AI Act & GDPR",
        "Infrastructure & LLMs",
        "Roadmap",
        "About us",
        "Contact / Demo",
      ],
    },
    cta: {
      eyebrow: "Next step",
      title: "Show us where your company loses time, knowledge, or control today.",
      body: "We will show you where a first zuraio agent delivers the biggest impact and which security architecture fits your company.",
      demo: "Request demo",
      contact: "Open contact page",
    },
    footer: {
      body: "AI for companies that do not hand over their data.",
      links: ["Security", "Orchestrator", "Demo"],
    },
  },
  "pt-BR": {
    meta: {
      title: "zuraio | own your data",
      description:
        "zuraio é o orquestrador de IA para PMEs suíças que querem usar IA sem perder o controle sobre dados, conhecimento e processos.",
    },
    nav: {
      why: "Por quê",
      solution: "Solução",
      security: "Segurança",
      orchestrator: "Orquestrador",
      roadmap: "Roadmap",
      demo: "Solicitar demo",
      language: "Idioma",
      menu: "Menu",
    },
    hero: {
      eyebrow: "ORQUESTRADOR DE IA PARA PMEs SUÍÇAS",
      titleHtml:
        'Como não existia uma solução adequada, construímos a <span class="brand-highlight">zuraio</span>',
      lead:
        "A zuraio conecta conhecimento da empresa com agentes individuais, funções de voz e infraestrutura segura em um sistema de IA que alivia você e mantém dados, conhecimento e controle dentro da SUA empresa.",
      demo: "Agendar demo",
      security: "Ver modelos de segurança",
      trust: ["Soberania dos dados", "Hospedagem suíça", "Funções e permissões", "Início modular"],
    },
    intro: {
      eyebrow: "TRABALHO ERRADO CONSOME O DIA",
      titleHtml: "<span>Projetos são conduzidos por líderes</span><span>Não por protocolos.</span>",
      lines: [
        "Todos os dias, horas são perdidas com relatórios de status, visitas, protocolos e administração.",
        "Tempo que deveria ser usado para decisões, desafios e pessoas.",
        "Você explica o que precisa ser feito. A zuraio assume.",
        "Para que seus líderes de projeto possam voltar a liderar projetos.",
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
      link: "Oportunidades",
    },
    problem: {
      eyebrow: "A realidade na PME",
      titleHtml:
        '<span>Troca de ferramenta irrita.</span><span>O conhecimento desaparece.</span><span class="nowrap">Tempo valioso se perde.</span>',
      lead:
        "A IA raramente é o problema real. Os desafios acontecem no dia a dia. As informações estão espalhadas, os colaboradores passam horas com administração e as soluções modernas de IA muitas vezes não se encaixam nas necessidades das empresas suíças.",
      cards: [
        {
          titleHtml: "A privacidade não está clara",
          body: [
            "Conhecimento da empresa e dados de clientes acabam cada vez mais em sistemas externos.",
            "Mas quem tem acesso? E essas soluções realmente cumprem a LGPD/RGPD e o EU AI Act?",
          ],
          strong: "Abrir mão do controle não é estratégia.",
        },
        {
          titleHtml: "O conhecimento está em todo lugar.<br>Mas não junto.",
          body: [
            "As informações se espalham por servidores, e-mails, chats, ERP, DMS, PIM, intranet e arquivos locais.",
            "O conhecimento existe.",
            "Mas muitas vezes não é encontrado e não está conectado.",
          ],
          strong: "Conhecimento corporativo não pode ser caça ao tesouro.",
        },
        {
          titleHtml: "Vendas não vendem.<br>Vendas documentam.",
          body: ["Relatórios de visita. CRM. Follow-ups. Administração.", "O tempo com o cliente diminui."],
          strong: "Vender deveria ser mais importante do que documentar.",
        },
        {
          titleHtml: "IA padrão não entende<br>sua empresa.",
          body: [
            "IA genérica não conhece seus processos nem seu contexto empresarial.",
            "Ela entrega respostas.",
            "Mas não necessariamente as corretas.",
          ],
          strong: "Sua empresa é única. Sua IA também deve ser.",
        },
      ],
      link: "Ecossistema de IA",
    },
    answer: {
      eyebrow: "A resposta",
      titleHtml: "Um orquestrador central.<br>Controle total sobre sua IA.",
      kicker: "Não é apenas um chatbot.",
      body: [
        "A zuraio é um harness inteligente que analisa, verifica e orquestra cada solicitação. Pedidos complexos passam por vários loops antes de uma resposta ser criada.",
        "Assim, as respostas se encaixam no seu conhecimento, nos seus processos, nas suas políticas e na cultura da sua empresa. Com a zuraio, sua IA carrega o seu DNA.",
      ],
      features: [
        "RAG para cada projeto e conhecimento da empresa",
        "Funções e permissões por tenant",
        "Um agente por tarefa",
        "LLMs locais, híbridos ou em nuvem",
        "Modo de áudio para unterwegs",
        "Registro de auditoria incluído",
        "Respostas com fontes",
        "Modular e escalável",
      ],
      link: "Harness",
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
      link: "Soberania dos dados & segurança",
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
      eyebrow: "Por que construímos a zuraio",
      title: "Queríamos<br>MAIS IA<br>Não menos<br>CONTROLE",
      quotes: [
        { title: "Soberania dos dados", body: "O conhecimento da empresa pertence à empresa." },
        { title: "Escalável", body: "Um agente hoje. Um ecossistema de IA amanhã." },
        { title: "Independente", body: "Sem dependência. Sem caixa-preta. Sem compromissos." },
      ],
      link: "Sobre nós",
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "Hoje um orquestrador<br>Amanhã um<br>ecossistema de IA",
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
      link: "Roadmap",
    },
    subpages: {
      eyebrow: "Páginas de aprofundamento",
      title: "Pronto para expansão, consultoria e conversas de vendas.",
      links: [
        "Soberania dos dados & segurança",
        "Agente de voz",
        "RAG & proteção do conhecimento",
        "Agente de projeto",
        "Orquestrador & agentes",
        "EU AI Act & RGPD",
        "Infraestrutura & LLMs",
        "Roadmap",
        "Sobre nós",
        "Contato / Demo",
      ],
    },
    cta: {
      eyebrow: "Próximo passo",
      title: "Mostre-nos onde sua empresa perde tempo, conhecimento ou controle hoje.",
      body: "Mostraremos onde um primeiro agente zuraio traz mais valor e qual arquitetura de segurança se encaixa na sua empresa.",
      demo: "Solicitar demo",
      contact: "Abrir página de contato",
    },
    footer: {
      body: "IA para empresas que não entregam seus dados.",
      links: ["Segurança", "Orquestrador", "Demo"],
    },
  },
};

const languageToggle = document.getElementById("language-toggle");
const languageCurrent = document.getElementById("language-current");
const languageMenu = document.getElementById("language-menu");
const languageOptions = document.querySelectorAll(".lang-option");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const htmlElement = document.documentElement;
const languageStorageKey = "zuraio-language";

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

function getLanguageLabel(languageCode) {
  if (languageCode === "pt-BR") {
    return "BR-PT";
  }

  return languageCode.toUpperCase();
}

function getPreferredLanguage() {
  const storedLanguage = normalizeLanguage(window.localStorage.getItem(languageStorageKey) || "");
  if (storedLanguage !== "de") {
    return storedLanguage;
  }

  const browserLanguage = normalizeLanguage(navigator.language || navigator.userLanguage || "");
  return browserLanguage;
}

function applyLanguage(languageCode) {
  const code = normalizeLanguage(languageCode);
  const content = translations[code] || translations.de;

  htmlElement.lang = code;
  document.title = content.meta.title;

  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) {
    descriptionTag.setAttribute("content", content.meta.description);
  }

  setText(".menu-toggle", content.nav.menu);
  setText(".lang-label", content.nav.language);

  const navLinks = Array.from(document.querySelectorAll(".site-nav > a[href^='#']"));
  if (navLinks[0]) navLinks[0].textContent = content.nav.why;
  if (navLinks[1]) navLinks[1].textContent = content.nav.solution;
  if (navLinks[2]) navLinks[2].textContent = content.nav.security;
  if (navLinks[3]) navLinks[3].textContent = content.nav.orchestrator;
  if (navLinks[4]) navLinks[4].textContent = content.nav.roadmap;
  setText(".nav-cta", content.nav.demo);

  setHTML(".hero-copy .eyebrow", content.hero.eyebrow);
  setHTML(".hero-copy h1", content.hero.titleHtml);
  setText(".hero-copy .lead", content.hero.lead);
  const heroButtons = document.querySelectorAll(".hero-actions a");
  if (heroButtons[0]) heroButtons[0].textContent = content.hero.demo;
  if (heroButtons[1]) heroButtons[1].textContent = content.hero.security;
  setList(".trust-list li", content.hero.trust);

  setText(".intro-band .eyebrow", content.intro.eyebrow);
  setHTML(".project-title", content.intro.titleHtml);
  const introParagraphs = document.querySelectorAll(".intro-copy p");
  introParagraphs.forEach((paragraph, index) => {
    if (content.intro.lines[index]) {
      paragraph.textContent = content.intro.lines[index];
    }
  });
  setText(".intro-link", content.intro.link);
  setMarquee(".hero-badges-track", content.intro.badges);

  setText("#problem .section-heading .eyebrow", content.problem.eyebrow);
  setHTML("#problem .problem-title", content.problem.titleHtml);
  setText("#problem .section-heading > p:last-of-type", content.problem.lead);
  setText("#problem .problem-link", content.problem.link);
  setCards("#problem .pain-grid article", content.problem.cards, (cardElement, cardData) => {
    setHTMLSelector(cardElement, "h3", cardData.titleHtml);
    const bodyParagraphs = cardElement.querySelectorAll(".pain-body p");
    bodyParagraphs.forEach((paragraph, index) => {
      if (cardData.body[index]) {
        paragraph.textContent = cardData.body[index];
      }
    });
    setTextSelector(cardElement, "strong", cardData.strong);
  });

  setText(".answer-copy .eyebrow", content.answer.eyebrow);
  setHTML(".answer-copy h2", content.answer.titleHtml);
  setText(".answer-kicker", content.answer.kicker);
  const answerParagraphs = document.querySelectorAll(".answer-copy p:not(.eyebrow):not(.answer-kicker)");
  if (answerParagraphs[0]) answerParagraphs[0].textContent = content.answer.body[0];
  if (answerParagraphs[1]) answerParagraphs[1].textContent = content.answer.body[1];
  setText(".answer-link", content.answer.link);
  setList(".answer-features strong", content.answer.features);

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
  setText("#sicherheit .security-link", content.security.link);
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
  setCards("#ueber-uns .quote-grid blockquote", content.team.quotes, (cardElement, cardData) => {
    setTextSelector(cardElement, "strong", cardData.title);
    setTextSelector(cardElement, "span", cardData.body);
  });

  setText("#roadmap > .eyebrow", content.roadmap.eyebrow);
  setHTML("#roadmap .roadmap-overlay h2", content.roadmap.title);
  setText("#roadmap .roadmap-link", content.roadmap.link);
  setCards("#roadmap .timeline article", content.roadmap.steps, (cardElement, cardData) => {
    setTextSelector(cardElement, "strong", cardData.title);
    setTextSelector(cardElement, "p", cardData.body);
  });

  setText("#unterseiten .section-heading .eyebrow", content.subpages.eyebrow);
  setText("#unterseiten .section-heading h2", content.subpages.title);
  setList("#unterseiten .subpage-grid a", content.subpages.links);

  setText("#kontakt .eyebrow", content.cta.eyebrow);
  setText("#kontakt h2", content.cta.title);
  setText("#kontakt > p:nth-of-type(2)", content.cta.body);
  const ctaButtons = document.querySelectorAll("#kontakt .hero-actions a");
  if (ctaButtons[0]) ctaButtons[0].textContent = content.cta.demo;
  if (ctaButtons[1]) ctaButtons[1].textContent = content.cta.contact;

  setText(".site-footer p", content.footer.body);
  const footerLinks = document.querySelectorAll(".site-footer nav a");
  if (footerLinks[0]) footerLinks[0].textContent = content.footer.links[0];
  if (footerLinks[1]) footerLinks[1].textContent = content.footer.links[1];
  if (footerLinks[2]) footerLinks[2].textContent = content.footer.links[2];

  if (languageCurrent) {
    languageCurrent.textContent = getLanguageLabel(code);
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
    if (event.target instanceof HTMLAnchorElement) {
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

applyLanguage(getPreferredLanguage());
