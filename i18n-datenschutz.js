const datenschutzPageContent = {
  de: {
    policyIntro: {
      title: "Datenschutzerklärung",
      subtitle: "Ihre Daten gehören Ihnen. Nicht uns.",
      paragraphs: [
        "Der Schutz von Daten ist für uns keine Zusatzfunktion, sondern Teil der Grundarchitektur von zuraio.",
        "zuraio wurde mit dem Ziel entwickelt, Unternehmen den sicheren Einsatz von künstlicher Intelligenz zu ermöglichen, ohne die Kontrolle über Daten, Systeme und Wissen abzugeben. Transparenz, Datensouveränität und kontrollierbare AI-Prozesse stehen dabei im Zentrum.",
        "Nachfolgend informieren wir darüber, welche Daten wir im Zusammenhang mit unserer Website und Plattform verarbeiten, zu welchem Zweck dies geschieht und welche Rechte Sie haben.",
      ],
    },
    story: [
      {
        title: "1. Verantwortliche Stelle",
        content: [
          { type: "p", text: "Verantwortlich für die Datenverarbeitung im Zusammenhang mit dieser Website ist:" },
          { type: "p", text: "zuraio GmbH KI Road 77 1010 Zürich", html: "zuraio GmbH<br>KI Road 77<br>1010 Zürich" },
          { type: "p", text: "Tel: +41 01 010 10 01 Mail: hello@zuraio.ch", html: "Tel: <a href=\"tel:+4101010101001\">+41 01 010 10 01</a><br>Mail: <a href=\"mailto:hello@zuraio.ch\">hello@zuraio.ch</a>" },
        ],
      },
      {
        title: "2. Grundsatz der Datenhoheit",
        content: [
          { type: "p", text: "zuraio folgt dem Prinzip der Datensouveränität." },
          { type: "p", text: "Das bedeutet, dass Kundendaten, Unternehmenswissen, Dokumente und operative Inhalte grundsätzlich innerhalb der kundenspezifischen Infrastruktur oder eines logisch isolierten Tenant-Bereichs verbleiben." },
          { type: "p", text: "zuraio hat standardmässig keinen Zugriff auf diese Inhalte." },
          { type: "p", text: "Wir möchten und sollen diesen Zugriff bewusst nicht haben." },
          { type: "p", text: "Unsere Plattform dient primär der Orchestrierung, Verwaltung und sicheren Steuerung von AI-Komponenten innerhalb einer kundenspezifischen Umgebung." },
        ],
      },
      {
        title: "3. Welche Daten zuraio verarbeitet",
        content: [
          { type: "p", text: "Im regulären Betrieb verarbeitet zuraio primär technische und systembezogene Metadaten." },
          { type: "p", text: "Dazu können insbesondere gehören:" },
          {
            type: "ul",
            items: [
              "Tenant-Identifikatoren",
              "Benutzerrollen und Berechtigungen",
              "freigegebene Agenten",
              "Modell- und Provider-Konfigurationen",
              "Routing-Informationen",
              "API-Nutzungsmetriken",
              "Token-Verbrauch",
              "Audit-Events",
              "System-Logs",
              "Fehlerprotokolle",
            ],
          },
          { type: "p", text: "Diese Daten dienen ausschliesslich dem sicheren, stabilen und nachvollziehbaren Betrieb der Plattform." },
        ],
      },
      {
        title: "4. Kundendaten innerhalb der Plattform",
        content: [
          { type: "p", text: "Innerhalb einer zuraio-Umgebung können Kunden personenbezogene Daten, Unternehmensdaten oder andere sensible Informationen verarbeiten." },
          { type: "p", text: "Solche Daten können beispielsweise umfassen:" },
          {
            type: "ul",
            items: [
              "Dokumente",
              "Wissensdatenbanken",
              "E-Mails",
              "ERP-Daten",
              "CRM-Daten",
              "interne Richtlinien",
              "technische Pläne",
              "Audio- oder Transkriptionsdaten",
            ],
          },
          { type: "p", text: "Diese Inhalte:" },
          {
            type: "ul",
            items: [
              "gehören ausschliesslich dem jeweiligen Kunden",
              "bleiben innerhalb des zugewiesenen Tenant-Bereichs",
              "sind logisch von anderen Mandanten getrennt",
              "werden von zuraio nicht eingesehen",
              "werden nicht für Modelltraining verwendet",
            ],
          },
          { type: "p", text: "Die Verantwortung für Inhalte innerhalb eines Tenants liegt beim jeweiligen Kunden als verantwortliche Stelle im Sinne des anwendbaren Datenschutzrechts." },
        ],
      },
      {
        title: "5. Zugriff auf Kundendaten",
        content: [
          { type: "p", text: "Ein Zugriff von zuraio auf tenantbezogene Inhalte erfolgt grundsätzlich nicht." },
          { type: "p", text: "Ein temporärer Zugriff kann ausschliesslich in Ausnahmefällen notwendig sein, beispielsweise bei:" },
          {
            type: "ul",
            items: [
              "technischen Supportfällen",
              "Fehleranalysen",
              "Wartungsarbeiten",
              "Sicherheitsvorfällen",
            ],
          },
          { type: "p", text: "Ein solcher Zugriff erfolgt nur:" },
          {
            type: "ul",
            items: [
              "nach expliziter Freigabe durch den Kunden",
              "zweckgebunden",
              "zeitlich begrenzt",
              "protokolliert",
            ],
          },
          { type: "p", text: "Nach Abschluss des Supportfalls endet der Zugriff wieder." },
        ],
      },
      {
        title: "6. KI-Modelle und AI-Verarbeitung",
        content: [
          { type: "p", text: "zuraio stellt die Orchestrierung zwischen Nutzern, Agenten, Wissensquellen, Tools und KI-Modellen bereit." },
          { type: "p", text: "Je nach Kundenkonfiguration können AI-Modelle betrieben werden:" },
          {
            type: "ul",
            items: [
              "lokal (On-Premise)",
              "in Private Cloud",
              "in kundeneigener Infrastruktur",
              "über freigegebene externe AI-Provider",
            ],
          },
          { type: "p", text: "Welche Modelle verwendet werden, bestimmt die jeweilige Tenant-Konfiguration." },
          { type: "p", text: "zuraio legt nicht pauschal fest, welches Modell ein Kunde verwenden muss." },
        ],
      },
      {
        title: "7. Integrationen und Schnittstellen",
        content: [
          { type: "p", text: "zuraio kann über APIs, MCP oder andere technische Schnittstellen mit Drittsystemen verbunden werden." },
          { type: "p", text: "Dazu zählen beispielsweise:" },
          {
            type: "ul",
            items: [
              "ERP-Systeme",
              "CRM-Systeme",
              "Dokumentenmanagementsysteme",
              "Intranet- oder Wissensplattformen",
              "Kalender- und E-Mail-Systeme",
              "CAD-Systeme",
              "Business-Intelligence-Lösungen",
            ],
          },
          { type: "p", text: "Es werden jeweils nur jene Daten verarbeitet, die für die jeweilige Funktion notwendig sind." },
        ],
      },
      {
        title: "8. Speicherung und Hosting",
        content: [
          { type: "p", text: "Die Speicherung und Verarbeitung von Daten hängt vom gewählten Betriebsmodell ab." },
          { type: "p", text: "zuraio unterstützt unter anderem:" },
          {
            type: "ul",
            items: [
              "On-Premise-Betrieb",
              "Private Cloud",
              "dedizierte Server",
              "europäische Cloud-Infrastrukturen",
            ],
          },
          { type: "p", text: "Der Speicherort kann kundenspezifisch definiert werden." },
        ],
      },
      {
        title: "9. Sicherheit und Zugriffskontrolle",
        content: [
          { type: "p", text: "zuraio setzt technische und organisatorische Massnahmen ein, um Daten und Systeme zu schützen." },
          { type: "p", text: "Dazu gehören insbesondere:" },
          {
            type: "ul",
            items: [
              "rollenbasierte Zugriffskontrolle",
              "Verschlüsselung",
              "Zugriffsbeschränkungen",
              "Audit Logging",
              "Monitoring",
              "Sicherheitsupdates",
              "Netzwerksegmentierung",
            ],
          },
          { type: "p", text: "Zugriffe erfolgen nach dem Prinzip der minimal notwendigen Berechtigung." },
        ],
      },
      {
        title: "10. Logging und Auditierbarkeit",
        content: [
          { type: "p", text: "Zur Sicherstellung von Sicherheit, Nachvollziehbarkeit und Compliance protokolliert zuraio sicherheitsrelevante Ereignisse." },
          { type: "p", text: "Dazu gehören insbesondere:" },
          {
            type: "ul",
            items: [
              "Login-Vorgänge",
              "Agentenaufrufe",
              "Tool Calls",
              "API-Zugriffe",
              "Konfigurationsänderungen",
              "administrative Aktionen",
            ],
          },
          { type: "p", text: "Diese Protokolle dienen ausschliesslich:" },
          {
            type: "ul",
            items: [
              "Sicherheitszwecken",
              "Auditierbarkeit",
              "Fehleranalyse",
              "Missbrauchserkennung",
              "Compliance-Anforderungen",
            ],
          },
        ],
      },
      {
        title: "11. Website-Nutzung",
        content: [
          { type: "p", text: "Beim Besuch unserer Website können technisch notwendige Informationen verarbeitet werden." },
          { type: "p", text: "Dazu gehören insbesondere:" },
          {
            type: "ul",
            items: [
              "IP-Adresse",
              "Browsertyp",
              "Betriebssystem",
              "Datum und Uhrzeit des Zugriffs",
              "Referrer-Informationen",
              "Session-Daten",
            ],
          },
          { type: "p", text: "Diese Daten dienen der technischen Bereitstellung, Sicherheit und Stabilität der Website." },
        ],
      },
      {
        title: "12. Cookies und ähnliche Technologien",
        content: [
          { type: "p", text: "Unsere Website kann Cookies oder vergleichbare Technologien verwenden, soweit dies für Funktionalität, Sicherheit oder Benutzerfreundlichkeit erforderlich ist." },
          { type: "p", text: "Nicht zwingend notwendige Technologien werden nur mit entsprechender Einwilligung eingesetzt." },
        ],
      },
      {
        title: "13. Weitergabe an Dritte",
        content: [
          { type: "p", text: "Personenbezogene Daten werden von uns weder verkauft noch unkontrolliert an Dritte weitergegeben." },
          { type: "p", text: "Eine Weitergabe erfolgt ausschliesslich:" },
          {
            type: "ul",
            items: [
              "bei gesetzlicher Verpflichtung",
              "zur Vertragserfüllung",
              "an sorgfältig ausgewählte technische Dienstleister",
              "mit ausdrücklicher Zustimmung des Kunden",
            ],
          },
        ],
      },
      {
        title: "14. Internationale Datenübermittlung",
        content: [
          { type: "p", text: "Falls Daten ausserhalb der Schweiz oder des Europäischen Wirtschaftsraums verarbeitet werden, stellen wir geeignete Schutzmechanismen sicher." },
          { type: "p", text: "Dazu können gehören:" },
          {
            type: "ul",
            items: [
              "vertragliche Schutzklauseln",
              "technische Schutzmassnahmen",
              "organisatorische Sicherheitsvorgaben",
            ],
          },
        ],
      },
      {
        title: "15. Ihre Rechte",
        content: [
          { type: "p", text: "Im Rahmen des anwendbaren Datenschutzrechts haben Sie insbesondere das Recht auf:" },
          {
            type: "ul",
            items: [
              "Auskunft",
              "Berichtigung",
              "Löschung",
              "Einschränkung der Verarbeitung",
              "Datenübertragbarkeit",
              "Widerspruch gegen bestimmte Verarbeitungen",
            ],
          },
          { type: "p", text: "Anfragen können an folgende Adresse gerichtet werden:" },
          { type: "p", text: "privacy@zuraio.com", html: "<a href=\"mailto:privacy@zuraio.com\">privacy@zuraio.com</a>" },
        ],
      },
      {
        title: "16. Änderungen dieser Datenschutzerklärung",
        content: [
          { type: "p", text: "Diese Datenschutzerklärung kann angepasst werden, wenn rechtliche, technische oder organisatorische Änderungen dies erforderlich machen." },
          { type: "p", text: "Massgeblich ist jeweils die auf dieser Website veröffentlichte Version." },
        ],
      },
    ],
  },
  en: {
    policyIntro: {
      title: "Privacy Policy",
      subtitle: "Your data belongs to you. Not to us.",
      paragraphs: [
        "Protecting data is not an add-on feature for us—it is part of zuraio's foundational architecture.",
        "zuraio was developed to enable companies to use artificial intelligence securely without relinquishing control over data, systems, and knowledge. Transparency, data sovereignty, and controllable AI processes are central to this.",
        "Below we explain what data we process in connection with our website and platform, for what purpose, and what rights you have.",
      ],
    },
    story: [
      {
        title: "1. Responsible entity",
        content: [
          { type: "p", text: "The entity responsible for data processing in connection with this website is:" },
          { type: "p", text: "zuraio GmbH KI Road 77 1010 Zürich", html: "zuraio GmbH<br>KI Road 77<br>1010 Zürich" },
          { type: "p", text: "Tel: +41 01 010 10 01 Mail: hello@zuraio.ch", html: "Tel: <a href=\"tel:+4101010101001\">+41 01 010 10 01</a><br>Mail: <a href=\"mailto:hello@zuraio.ch\">hello@zuraio.ch</a>" },
        ],
      },
      {
        title: "2. Principle of data sovereignty",
        content: [
          { type: "p", text: "zuraio follows the principle of data sovereignty." },
          { type: "p", text: "This means that customer data, company knowledge, documents, and operational content generally remain within customer-specific infrastructure or a logically isolated tenant environment." },
          { type: "p", text: "zuraio has no standard access to this content." },
          { type: "p", text: "We deliberately do not want—and should not have—this access." },
          { type: "p", text: "Our platform primarily serves to orchestrate, manage, and securely control AI components within a customer-specific environment." },
        ],
      },
      {
        title: "3. Data processed by zuraio",
        content: [
          { type: "p", text: "In regular operation, zuraio primarily processes technical and system-related metadata." },
          { type: "p", text: "This may include in particular:" },
          {
            type: "ul",
            items: [
              "tenant identifiers",
              "user roles and permissions",
              "approved agents",
              "model and provider configurations",
              "routing information",
              "API usage metrics",
              "token consumption",
              "audit events",
              "system logs",
              "error logs",
            ],
          },
          { type: "p", text: "This data is used exclusively for the secure, stable, and traceable operation of the platform." },
        ],
      },
      {
        title: "4. Customer data within the platform",
        content: [
          { type: "p", text: "Within a zuraio environment, customers may process personal data, company data, or other sensitive information." },
          { type: "p", text: "Such data may include, for example:" },
          {
            type: "ul",
            items: [
              "documents",
              "knowledge bases",
              "emails",
              "ERP data",
              "CRM data",
              "internal policies",
              "technical plans",
              "audio or transcription data",
            ],
          },
          { type: "p", text: "This content:" },
          {
            type: "ul",
            items: [
              "belongs exclusively to the respective customer",
              "remains within the assigned tenant environment",
              "is logically separated from other tenants",
              "is not accessed by zuraio",
              "is not used for model training",
            ],
          },
          { type: "p", text: "Responsibility for content within a tenant lies with the respective customer as the responsible entity under applicable data protection law." },
        ],
      },
      {
        title: "5. Access to customer data",
        content: [
          { type: "p", text: "zuraio does not access tenant-related content as a rule." },
          { type: "p", text: "Temporary access may only be necessary in exceptional cases, for example during:" },
          {
            type: "ul",
            items: [
              "technical support cases",
              "error analysis",
              "maintenance work",
              "security incidents",
            ],
          },
          { type: "p", text: "Such access only occurs:" },
          {
            type: "ul",
            items: [
              "with explicit approval by the customer",
              "for a specific purpose",
              "for a limited time",
              "with logging",
            ],
          },
          { type: "p", text: "Once the support case is closed, access ends." },
        ],
      },
      {
        title: "6. AI models and AI processing",
        content: [
          { type: "p", text: "zuraio provides orchestration between users, agents, knowledge sources, tools, and AI models." },
          { type: "p", text: "Depending on customer configuration, AI models may be operated:" },
          {
            type: "ul",
            items: [
              "locally (on-premise)",
              "in a private cloud",
              "in customer-owned infrastructure",
              "via approved external AI providers",
            ],
          },
          { type: "p", text: "Which models are used is determined by the respective tenant configuration." },
          { type: "p", text: "zuraio does not mandate which model a customer must use." },
        ],
      },
      {
        title: "7. Integrations and interfaces",
        content: [
          { type: "p", text: "zuraio can be connected to third-party systems via APIs, MCP, or other technical interfaces." },
          { type: "p", text: "Examples include:" },
          {
            type: "ul",
            items: [
              "ERP systems",
              "CRM systems",
              "document management systems",
              "intranet or knowledge platforms",
              "calendar and email systems",
              "CAD systems",
              "business intelligence solutions",
            ],
          },
          { type: "p", text: "Only the data necessary for the respective function is processed." },
        ],
      },
      {
        title: "8. Storage and hosting",
        content: [
          { type: "p", text: "Data storage and processing depend on the chosen operating model." },
          { type: "p", text: "zuraio supports, among others:" },
          {
            type: "ul",
            items: [
              "on-premise operation",
              "private cloud",
              "dedicated servers",
              "European cloud infrastructures",
            ],
          },
          { type: "p", text: "The storage location can be defined on a customer-specific basis." },
        ],
      },
      {
        title: "9. Security and access control",
        content: [
          { type: "p", text: "zuraio employs technical and organizational measures to protect data and systems." },
          { type: "p", text: "These include in particular:" },
          {
            type: "ul",
            items: [
              "role-based access control",
              "encryption",
              "access restrictions",
              "audit logging",
              "monitoring",
              "security updates",
              "network segmentation",
            ],
          },
          { type: "p", text: "Access follows the principle of least privilege." },
        ],
      },
      {
        title: "10. Logging and auditability",
        content: [
          { type: "p", text: "To ensure security, traceability, and compliance, zuraio logs security-relevant events." },
          { type: "p", text: "These include in particular:" },
          {
            type: "ul",
            items: [
              "login events",
              "agent invocations",
              "tool calls",
              "API access",
              "configuration changes",
              "administrative actions",
            ],
          },
          { type: "p", text: "These logs are used exclusively for:" },
          {
            type: "ul",
            items: [
              "security purposes",
              "auditability",
              "error analysis",
              "abuse detection",
              "compliance requirements",
            ],
          },
        ],
      },
      {
        title: "11. Website usage",
        content: [
          { type: "p", text: "When visiting our website, technically necessary information may be processed." },
          { type: "p", text: "This includes in particular:" },
          {
            type: "ul",
            items: [
              "IP address",
              "browser type",
              "operating system",
              "date and time of access",
              "referrer information",
              "session data",
            ],
          },
          { type: "p", text: "This data serves the technical provision, security, and stability of the website." },
        ],
      },
      {
        title: "12. Cookies and similar technologies",
        content: [
          { type: "p", text: "Our website may use cookies or comparable technologies where required for functionality, security, or user experience." },
          { type: "p", text: "Non-essential technologies are only used with appropriate consent." },
        ],
      },
      {
        title: "13. Disclosure to third parties",
        content: [
          { type: "p", text: "We do not sell personal data or share it with third parties without control." },
          { type: "p", text: "Disclosure only occurs:" },
          {
            type: "ul",
            items: [
              "when legally required",
              "to fulfill contractual obligations",
              "to carefully selected technical service providers",
              "with explicit customer consent",
            ],
          },
        ],
      },
      {
        title: "14. International data transfers",
        content: [
          { type: "p", text: "If data is processed outside Switzerland or the European Economic Area, we ensure appropriate safeguards." },
          { type: "p", text: "These may include:" },
          {
            type: "ul",
            items: [
              "contractual protection clauses",
              "technical safeguards",
              "organizational security requirements",
            ],
          },
        ],
      },
      {
        title: "15. Your rights",
        content: [
          { type: "p", text: "Under applicable data protection law, you have in particular the right to:" },
          {
            type: "ul",
            items: [
              "access",
              "rectification",
              "erasure",
              "restriction of processing",
              "data portability",
              "object to certain processing",
            ],
          },
          { type: "p", text: "Requests can be sent to:" },
          { type: "p", text: "privacy@zuraio.com", html: "<a href=\"mailto:privacy@zuraio.com\">privacy@zuraio.com</a>" },
        ],
      },
      {
        title: "16. Changes to this privacy policy",
        content: [
          { type: "p", text: "This privacy policy may be updated when legal, technical, or organizational changes require it." },
          { type: "p", text: "The version published on this website is always authoritative." },
        ],
      },
    ],
  },
  "pt-BR": {
    policyIntro: {
      title: "Política de Privacidade",
      subtitle: "Seus dados pertencem a você. Não a nós.",
      paragraphs: [
        "A proteção de dados não é um recurso adicional para nós—é parte da arquitetura fundamental da zuraio.",
        "A zuraio foi desenvolvida para permitir que empresas utilizem inteligência artificial com segurança, sem abrir mão do controle sobre dados, sistemas e conhecimento. Transparência, soberania de dados e processos de IA controláveis estão no centro disso.",
        "A seguir, informamos quais dados processamos em relação ao nosso site e plataforma, para qual finalidade e quais são seus direitos.",
      ],
    },
    story: [
      {
        title: "1. Entidade responsável",
        content: [
          { type: "p", text: "A entidade responsável pelo processamento de dados em relação a este site é:" },
          { type: "p", text: "zuraio GmbH KI Road 77 1010 Zürich", html: "zuraio GmbH<br>KI Road 77<br>1010 Zürich" },
          { type: "p", text: "Tel: +41 01 010 10 01 Mail: hello@zuraio.ch", html: "Tel: <a href=\"tel:+4101010101001\">+41 01 010 10 01</a><br>Mail: <a href=\"mailto:hello@zuraio.ch\">hello@zuraio.ch</a>" },
        ],
      },
      {
        title: "2. Princípio da soberania de dados",
        content: [
          { type: "p", text: "A zuraio segue o princípio da soberania de dados." },
          { type: "p", text: "Isso significa que dados de clientes, conhecimento empresarial, documentos e conteúdos operacionais permanecem, em princípio, dentro da infraestrutura específica do cliente ou de um ambiente de tenant logicamente isolado." },
          { type: "p", text: "A zuraio não tem acesso padrão a esses conteúdos." },
          { type: "p", text: "Não queremos e não devemos ter esse acesso deliberadamente." },
          { type: "p", text: "Nossa plataforma serve principalmente para orquestrar, gerenciar e controlar com segurança componentes de IA dentro de um ambiente específico do cliente." },
        ],
      },
      {
        title: "3. Dados processados pela zuraio",
        content: [
          { type: "p", text: "Em operação regular, a zuraio processa principalmente metadados técnicos e relacionados ao sistema." },
          { type: "p", text: "Isso pode incluir, em particular:" },
          {
            type: "ul",
            items: [
              "identificadores de tenant",
              "perfis de usuário e permissões",
              "agentes aprovados",
              "configurações de modelos e provedores",
              "informações de roteamento",
              "métricas de uso de API",
              "consumo de tokens",
              "eventos de auditoria",
              "logs do sistema",
              "logs de erros",
            ],
          },
          { type: "p", text: "Esses dados servem exclusivamente para a operação segura, estável e rastreável da plataforma." },
        ],
      },
      {
        title: "4. Dados de clientes dentro da plataforma",
        content: [
          { type: "p", text: "Dentro de um ambiente zuraio, clientes podem processar dados pessoais, dados empresariais ou outras informações sensíveis." },
          { type: "p", text: "Esses dados podem incluir, por exemplo:" },
          {
            type: "ul",
            items: [
              "documentos",
              "bases de conhecimento",
              "e-mails",
              "dados de ERP",
              "dados de CRM",
              "políticas internas",
              "planos técnicos",
              "dados de áudio ou transcrição",
            ],
          },
          { type: "p", text: "Esse conteúdo:" },
          {
            type: "ul",
            items: [
              "pertence exclusivamente ao respectivo cliente",
              "permanece dentro do ambiente de tenant atribuído",
              "é logicamente separado de outros tenants",
              "não é acessado pela zuraio",
              "não é usado para treinamento de modelos",
            ],
          },
          { type: "p", text: "A responsabilidade pelo conteúdo dentro de um tenant cabe ao respectivo cliente como entidade responsável nos termos da legislação de proteção de dados aplicável." },
        ],
      },
      {
        title: "5. Acesso a dados de clientes",
        content: [
          { type: "p", text: "A zuraio, em princípio, não acessa conteúdos relacionados a tenants." },
          { type: "p", text: "Um acesso temporário pode ser necessário apenas em casos excepcionais, por exemplo em:" },
          {
            type: "ul",
            items: [
              "casos de suporte técnico",
              "análise de erros",
              "trabalhos de manutenção",
              "incidentes de segurança",
            ],
          },
          { type: "p", text: "Esse acesso ocorre apenas:" },
          {
            type: "ul",
            items: [
              "com aprovação explícita do cliente",
              "com finalidade específica",
              "por tempo limitado",
              "com registro em log",
            ],
          },
          { type: "p", text: "Após o encerramento do caso de suporte, o acesso é revogado." },
        ],
      },
      {
        title: "6. Modelos de IA e processamento de IA",
        content: [
          { type: "p", text: "A zuraio fornece a orquestração entre usuários, agentes, fontes de conhecimento, ferramentas e modelos de IA." },
          { type: "p", text: "Dependendo da configuração do cliente, modelos de IA podem ser operados:" },
          {
            type: "ul",
            items: [
              "localmente (on-premise)",
              "em nuvem privada",
              "em infraestrutura própria do cliente",
              "via provedores externos de IA aprovados",
            ],
          },
          { type: "p", text: "Quais modelos são usados é determinado pela configuração do respectivo tenant." },
          { type: "p", text: "A zuraio não define genericamente qual modelo um cliente deve usar." },
        ],
      },
      {
        title: "7. Integrações e interfaces",
        content: [
          { type: "p", text: "A zuraio pode ser conectada a sistemas de terceiros via APIs, MCP ou outras interfaces técnicas." },
          { type: "p", text: "Exemplos incluem:" },
          {
            type: "ul",
            items: [
              "sistemas ERP",
              "sistemas CRM",
              "sistemas de gestão de documentos",
              "intranets ou plataformas de conhecimento",
              "sistemas de calendário e e-mail",
              "sistemas CAD",
              "soluções de business intelligence",
            ],
          },
          { type: "p", text: "Somente os dados necessários para a respectiva função são processados." },
        ],
      },
      {
        title: "8. Armazenamento e hospedagem",
        content: [
          { type: "p", text: "O armazenamento e processamento de dados dependem do modelo operacional escolhido." },
          { type: "p", text: "A zuraio suporta, entre outros:" },
          {
            type: "ul",
            items: [
              "operação on-premise",
              "nuvem privada",
              "servidores dedicados",
              "infraestruturas de nuvem europeias",
            ],
          },
          { type: "p", text: "O local de armazenamento pode ser definido de forma específica para cada cliente." },
        ],
      },
      {
        title: "9. Segurança e controle de acesso",
        content: [
          { type: "p", text: "A zuraio emprega medidas técnicas e organizacionais para proteger dados e sistemas." },
          { type: "p", text: "Isso inclui, em particular:" },
          {
            type: "ul",
            items: [
              "controle de acesso baseado em perfis",
              "criptografia",
              "restrições de acesso",
              "registro de auditoria",
              "monitoramento",
              "atualizações de segurança",
              "segmentação de rede",
            ],
          },
          { type: "p", text: "Os acessos seguem o princípio do privilégio mínimo necessário." },
        ],
      },
      {
        title: "10. Registro e auditabilidade",
        content: [
          { type: "p", text: "Para garantir segurança, rastreabilidade e conformidade, a zuraio registra eventos relevantes para a segurança." },
          { type: "p", text: "Isso inclui, em particular:" },
          {
            type: "ul",
            items: [
              "eventos de login",
              "chamadas de agentes",
              "chamadas de ferramentas",
              "acessos à API",
              "alterações de configuração",
              "ações administrativas",
            ],
          },
          { type: "p", text: "Esses registros servem exclusivamente para:" },
          {
            type: "ul",
            items: [
              "fins de segurança",
              "auditabilidade",
              "análise de erros",
              "detecção de abuso",
              "requisitos de conformidade",
            ],
          },
        ],
      },
      {
        title: "11. Uso do site",
        content: [
          { type: "p", text: "Ao visitar nosso site, informações tecnicamente necessárias podem ser processadas." },
          { type: "p", text: "Isso inclui, em particular:" },
          {
            type: "ul",
            items: [
              "endereço IP",
              "tipo de navegador",
              "sistema operacional",
              "data e hora do acesso",
              "informações de referência",
              "dados de sessão",
            ],
          },
          { type: "p", text: "Esses dados servem para a disponibilização técnica, segurança e estabilidade do site." },
        ],
      },
      {
        title: "12. Cookies e tecnologias similares",
        content: [
          { type: "p", text: "Nosso site pode usar cookies ou tecnologias comparáveis quando necessário para funcionalidade, segurança ou experiência do usuário." },
          { type: "p", text: "Tecnologias não essenciais são usadas apenas com o consentimento adequado." },
        ],
      },
      {
        title: "13. Compartilhamento com terceiros",
        content: [
          { type: "p", text: "Não vendemos dados pessoais nem os compartilhamos com terceiros sem controle." },
          { type: "p", text: "O compartilhamento ocorre exclusivamente:" },
          {
            type: "ul",
            items: [
              "quando exigido por lei",
              "para cumprimento de contrato",
              "com prestadores de serviços técnicos cuidadosamente selecionados",
              "com consentimento expresso do cliente",
            ],
          },
        ],
      },
      {
        title: "14. Transferência internacional de dados",
        content: [
          { type: "p", text: "Se dados são processados fora da Suíça ou do Espaço Econômico Europeu, garantimos mecanismos de proteção adequados." },
          { type: "p", text: "Isso pode incluir:" },
          {
            type: "ul",
            items: [
              "cláusulas contratuais de proteção",
              "medidas técnicas de proteção",
              "requisitos organizacionais de segurança",
            ],
          },
        ],
      },
      {
        title: "15. Seus direitos",
        content: [
          { type: "p", text: "Nos termos da legislação de proteção de dados aplicável, você tem, em particular, o direito de:" },
          {
            type: "ul",
            items: [
              "acesso",
              "correção",
              "eliminação",
              "restrição do processamento",
              "portabilidade de dados",
              "oposição a determinados processamentos",
            ],
          },
          { type: "p", text: "Solicitações podem ser enviadas a:" },
          { type: "p", text: "privacy@zuraio.com", html: "<a href=\"mailto:privacy@zuraio.com\">privacy@zuraio.com</a>" },
        ],
      },
      {
        title: "16. Alterações nesta política de privacidade",
        content: [
          { type: "p", text: "Esta política de privacidade pode ser atualizada quando alterações legais, técnicas ou organizacionais exigirem." },
          { type: "p", text: "A versão publicada neste site é sempre a vigente." },
        ],
      },
    ],
  },
};

if (typeof detailPageTranslations !== "undefined") {
  Object.keys(datenschutzPageContent).forEach((lang) => {
    detailPageTranslations[lang].datenschutz = {
      ...(detailPageTranslations[lang].datenschutz || {}),
      ...datenschutzPageContent[lang],
    };
  });
}
