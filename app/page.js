const PROFILE = {
  name: "Lê Anh Lương",
  role: ".NET Backend Developer · AI / LLM",
  location: "Hà Nội, Vietnam",
  email: "leanhluong0110@gmail.com",
  phone: "+84 976 564 969",
  github: "https://github.com/leanhluong",
  linkedin: "https://www.linkedin.com/in/anh-l%C6%B0%C6%A1ng-l%C3%AA-22a985370/",
  cvEn: "/LeAnhLuong_BackendDotNet_CV_EN.pdf",
  cvVi: "/LeAnhLuong_BackendDotNet_CV_VI.pdf",
};

const SUMMARY =
  "Backend developer with 2.5 years of .NET experience building microservices for a multi-tenant SaaS platform, in an 8-person backend team. I own the omni-channel chat and telephony backend end-to-end, lead development on marketing & notification and HRM, and integrate payments and e-invoicing — plus I design the shared-kernel patterns that the platform's services reuse for consistency (import, export/report, event-driven notifications, search). Since 11/2025 the team has been rebuilding the platform into .NET 10 microservices, porting business rules out of the live legacy PHP system into a Clean Architecture design. On the AI side I architected and operate a self-hosted Generative AI stack — Qwen2.5-7B on vLLM plus bge-m3 embeddings on HF TEI, both OpenAI-compatible — and migrated the chatbot off OpenAI cloud entirely, so customer data never leaves our infrastructure. I also built an MCP server that lets Claude, GPT and Gemini call the platform APIs under per-route scopes.";

const SKILLS = [
  { group: "Languages & Backend", items: ["C#", "SQL", ".NET 10 / ASP.NET Core", "EF Core", "gRPC", "SignalR"] },
  { group: "Architecture", items: ["Microservices", "Clean Architecture", "DDD", "CQRS (MediatR)", "Multi-tenant RLS", "API Gateway (YARP)"] },
  { group: "Messaging & async", items: ["RabbitMQ", "MassTransit", "Event-driven (outbox)", "Idempotency keys", "Hangfire jobs", "Async webhooks"] },
  { group: "AI / LLM", items: ["RAG (pgvector)", "vLLM + Qwen2.5-7B", "HF TEI + bge-m3", "OpenAI-compatible", "Function calling", "Intent classification", "Speech-to-text", "MCP (Model Context Protocol)"] },
  { group: "Data & infrastructure", items: ["PostgreSQL 16", "JSONB / pgvector", "Redis 7", "Meilisearch", "Docker", "MinIO", "Serilog + OpenTelemetry", "CI/CD"] },
  { group: "Integrations", items: ["VNPay / VNPayQR / VietQR", "BKAV, Viettel & MISA", "Brevo (email/SMS)", "Zalo ZNS", "Facebook, Instagram, Zalo OA", "Hikvision / ZKTeco (ISAPI)", "FreePBX / Asterisk"] },
  { group: "Security", items: ["JWT RS256 / JWKS", "OAuth2", "Argon2id", "AES-256-GCM", "2FA TOTP", "RBAC", "Rate limiting"] },
  { group: "Testing & other", items: ["xUnit", "TypeScript", "Next.js / React", "Node.js", "Electron"] },
];

const EXPERIENCE = [
  {
    pos: "Backend Developer (.NET)",
    co: "NextX Future JSC",
    date: "04/2024 – Present · Hà Nội",
    ctx: "Multi-tenant SaaS business-management platform, built by an 8-person backend team. Started with feature development and maintenance on the live system, then rebuilt the platform into a .NET 10 microservice architecture on a shared kernel.",
    bullets: [
      "Since 11/2025 — platform rebuild: ported business rules out of the live legacy PHP system into a Clean Architecture design on the existing data schema; microservices on an internal NuGet shared kernel.",
      "AI Chatbot (RAG), designed and operated end-to-end: embed the knowledge base → top-K vector search on pgvector → LLM rephrases strictly from retrieved context. Multi-turn context, intent classification, function calling against live data, auto-escalation below a confidence threshold.",
      "Stood up the in-house GPU inference stack: Qwen2.5-7B on vLLM + bge-m3 on HF TEI, both OpenAI-compatible so local ↔ cloud is a config switch. Migrated the entire chatbot off OpenAI cloud, re-embedding the whole knowledge base (1536 → 1024 dimensions).",
      "MCP server (TypeScript/Node) exposing ~45 NextX tools to Claude, GPT and Gemini — OAuth2 client_credentials with token caching, every call constrained by per-route scopes at the API Gateway.",
      "Omni-channel chat (owner): unified inbox across Facebook Messenger, Instagram, Zalo OA and Zalo Personal (custom Node adapter), real-time over SignalR; conversation distribution via smooth weighted round-robin with a Redis distributed lock; webhooks answered 200 OK then processed async through Hangfire.",
      "Telephony backend (owner): FreePBX / Asterisk integration — call-log and recording sync, calls attached to CRM contacts, speech-to-text transcription and transcript analysis.",
      "Marketing & Notification (lead developer): bulk campaign engine for Email/SMS (Brevo) and Zalo ZNS with MassTransit workflows, Hangfire batch dispatch and MJML templates; multi-channel Notification service over gRPC.",
      "HRM & attendance: attendance, leave, payroll & social insurance, contracts and reporting; built hik-agent (Electron) bridging Hikvision / ZKTeco devices over ISAPI + SignalR.",
      "SharedKernel — cross-cutting frameworks reused across services: Import, Export/Report, event-driven notifications on RabbitMQ (NotificationRequested thin-trigger contract, idempotency keys, outbox) and Search (ISearchClient over Meilisearch with tenant scope enforced in the client).",
      "04/2024 – 10/2025 (earlier, ASP.NET Core) — GymMaster (primary): membership module (packages, court/lane booking, session deduction), promotions engine, member check-in with check-in history, and staff attendance/timekeeping.",
      "RMIT — room & court booking system for students: SSO login and schedule-based room/court reservation.",
      "Pickleball & golf court booking: slot/schedule-based booking with conflict handling, membership and play packages across venues.",
      "Telephony (Call) backend built on a ready-made third-party VOIP API (operated by another team): call-log handling and attaching calls to CRM records.",
      "CRM: built reports and maintained/bug-fixed the live CRM modules.",
      "Since 11/2025 working fullstack (.NET backend + Next.js/React frontend) with AI coding assistants (Claude Code, Codex), holding quality with code review, unit/integration tests and shared-kernel architectural constraints.",
    ],
  },
  {
    pos: ".NET Developer Intern",
    co: "FPT Software",
    date: "05/2023 – 09/2023 · Hà Nội",
    ctx: "",
    bullets: [
      "Built REST APIs with ASP.NET Core + EF Core on SQL Server, wrote unit tests and API documentation; worked in Scrum with Jira, pull requests and code review.",
    ],
  },
];

const PROJECTS = [
  {
    title: "AA Catering Management System",
    role: "Graduation Project · Fullstack",
    desc: "Enterprise catering management with real-time notifications, order printing, Excel export and auto menu generation.",
    stack: ["Next.js", "ASP.NET Core", "SignalR", "SQL Server", "Docker"],
    link: "https://github.com/leanhluong/AACateringManagementSystem",
  },
];

const SYSTEMS = [
  {
    feat: true,
    name: "Self-hosted AI Platform (RAG)",
    role: "Designed & operate",
    bullets: [
      "Full RAG pipeline: query → embedding (bge-m3 via HF TEI) → top-K semantic search on pgvector → LLM rephrase grounded in the knowledge base, with anti-hallucination rules.",
      "Runs local models on our own GPU node (LLM served by vLLM). OpenAI-compatible layer means the exact same code switches between local and cloud with a config change — customer data stays in-house.",
      "Chatbot features: multi-turn context (last 10 turns), tool/function calling into live Sales data, intent classification, Auto/Hybrid/Suggest/Off modes, per-workspace quota, auto-escalation to a human agent.",
      "Voice callbot (R&D / PoC on the GPU node): FreeSWITCH audio pipeline targeting Vietnamese STT (PhoWhisper) → LLM (vLLM) → TTS.",
    ],
    stack: ["vLLM", "HF TEI", "bge-m3", "pgvector", "OpenAI-compatible", ".NET 10"],
  },
  {
    name: "MCP Server — Open Platform for AI assistants",
    role: "Owner",
    bullets: [
      "Model Context Protocol server in TypeScript/Node exposing ~45 NextX tools across CRM, Sales, Comm, Office, Gym, Golf, HRM and DMS to Claude, GPT and Gemini.",
      "OAuth2 client_credentials (agent JWT) with token caching and refresh; every call routed through the API Gateway and constrained by per-route scopes, so an assistant cannot exceed its permissions.",
    ],
    stack: ["TypeScript", "MCP SDK", "Node.js", "OAuth2", "Docker"],
  },
  {
    name: "SharedKernel — cross-cutting frameworks",
    role: "Designer",
    bullets: [
      "Import framework: per-service column descriptors, smart column mapping, Skip/Update duplicate strategies, per-row error files, undo, inline vs queued execution by file size.",
      "Export/Report framework and event-driven notifications on RabbitMQ — the NotificationRequested thin-trigger contract with idempotency keys and the outbox pattern.",
      "Search framework: ISearchClient over Meilisearch with a NullSearchClient fallback; workspaceId is required and ANDed into every query so a caller cannot leak across tenants.",
    ],
    stack: [".NET 10", "NuGet", "RabbitMQ", "Meilisearch", "Hangfire"],
  },
  {
    name: "Communication — omni-channel chat",
    role: "Owner",
    bullets: [
      "Unified inbox for Facebook Messenger, Instagram, Zalo OA and Zalo Personal (custom Node adapter); real-time over SignalR.",
      "Smooth weighted round-robin agent routing (round-robin / weight / skill / priority / hybrid), presence & load aware, Redis distributed lock.",
      "gRPC sync to CRM & Sales; webhooks answered with fast 200-OK then processed async via Hangfire; channel credentials encrypted with AES-256-GCM.",
    ],
    stack: [".NET 10", "SignalR", "gRPC", "Redis", "Hangfire", "PostgreSQL"],
  },
  {
    name: "CRM",
    role: "Contributor (gRPC)",
    bullets: [
      "Lead, Contact, Opportunity, Quotation and analytics; gRPC server consumed by Communication.",
      "Lead auto-assignment: AllTeams / SingleTeam / rule-based routing + least-load or weighted round-robin selection, with distributed locking.",
      "Rule-based lead scoring engine ranking leads into Hot / Warm / Cold tiers.",
    ],
    stack: [".NET 10", "gRPC", "PostgreSQL", "Hangfire", "SignalR"],
  },
  {
    name: "Sales / Commerce",
    role: "Major contributor",
    bullets: [
      "Orders, products/goods, inventory, pricing & promotions, commission, cash book and reporting.",
      "Exposes gRPC for chat/CRM lookups (product catalog, order status, promotions).",
    ],
    stack: [".NET 10", "PostgreSQL", "gRPC", "EF Core"],
  },
  {
    name: "Payment",
    role: "Developer",
    bullets: [
      "Online payment via VNPay, VNPayQR and VietQR — QR generation, IPN callback handling and reconciliation.",
    ],
    stack: [".NET 10", "VNPay", "VietQR", "PostgreSQL"],
  },
  {
    name: "E-Invoice & E-Contract",
    role: "Developer",
    bullets: [
      "E-invoice issuance and e-contract signing integrated with Vietnamese providers BKAV, Viettel and MISA.",
    ],
    stack: [".NET 10", "BKAV", "Viettel", "MISA", "PostgreSQL"],
  },
  {
    name: "Marketing",
    role: "Major contributor",
    bullets: [
      "Bulk-campaign engine across Email/SMS (Brevo) and Zalo ZNS.",
      "Brevo API client with sender verification (DKIM/SPF), MassTransit workflows, Hangfire batch sending and MJML email rendering.",
    ],
    stack: [".NET 10", "Brevo", "Zalo ZNS", "MassTransit", "MJML"],
  },
  {
    name: "Notification",
    role: "Developer",
    bullets: [
      "Multi-channel notification service exposed over gRPC to the rest of the platform.",
    ],
    stack: [".NET 10", "gRPC", "RabbitMQ"],
  },
  {
    name: "IAM — identity & access",
    role: "Contributor",
    bullets: [
      "JWT RS256 + JWKS, OAuth2/OIDC, Argon2id password hashing, 2FA (TOTP), RBAC and API keys.",
    ],
    stack: [".NET 10", "JWT/JWKS", "Argon2id", "TOTP"],
  },
  {
    name: "API Gateway",
    role: "Builder (security)",
    bullets: [
      "YARP gateway with a 12-step pipeline: header-spoofing guard, JWT / API-key auth, CSRF double-submit, Redis sliding-window rate limiting.",
      "Enforces multi-tenant isolation via PostgreSQL Row-Level Security + EF Core global query filters.",
    ],
    stack: ["YARP", "Redis", "PostgreSQL RLS", ".NET 10"],
  },
  {
    name: "HRM",
    role: "Developer",
    bullets: [
      "Employees, org chart, attendance, leave, payroll & supplements, insurance, contracts, recruitment, performance and training, plus statutory reports (BHXH / labor).",
    ],
    stack: [".NET 10", "PostgreSQL", "Hangfire", "SignalR"],
  },
  {
    name: "Gym, Golf & Club management",
    role: "Developer",
    bullets: [
      "Membership/subscription, booking and session deduction, POS for golf practice lines.",
      "Hikvision access-control devices (card + Face ID) via ISAPI, driven by an Electron agent over SignalR.",
    ],
    stack: [".NET 10", "Hikvision ISAPI", "Electron", "SignalR"],
  },
  {
    name: "Channel Adapters & Chat Widget",
    role: "Developer",
    bullets: [
      "Custom Node adapter connecting additional Zalo account types into the omni-channel inbox.",
      "Embeddable web chat widget feeding the same real-time pipeline.",
    ],
    stack: ["Node.js", "SignalR", "WebSocket"],
  },
];

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
          LÊ ANH LƯƠNG<span>.</span>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#systems">Systems</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href={PROFILE.cvEn} target="_blank" rel="noreferrer">
          Download CV
        </a>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      <header className="hero">
        <div className="wrap">
          <span className="tag">● Available for backend / software engineer roles</span>
          <h1>
            Hi, I'm Lê Anh Lương —<br />
            <span className="grad">.NET Backend Developer</span>
          </h1>
          <p className="lead">{SUMMARY}</p>
          <div className="actions">
            <a className="btn btn-primary" href={PROFILE.cvEn} target="_blank" rel="noreferrer">
              ↓ Download CV (EN)
            </a>
            <a className="btn btn-ghost" href={PROFILE.cvVi} target="_blank" rel="noreferrer">
              ↓ Tải CV (VI)
            </a>
            <a className="btn btn-ghost" href={PROFILE.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <div className="meta">
            <span>📍 {PROFILE.location}</span>
            <a href={`mailto:${PROFILE.email}`}>✉ {PROFILE.email}</a>
            <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>📞 {PROFILE.phone}</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">in LinkedIn</a>
          </div>
        </div>
      </header>

      <section id="about" className="about">
        <div className="wrap">
          <div className="eyebrow">About</div>
          <h2 className="sec-title">What I do</h2>
          <p>
            I build and own backend services on a production SaaS platform — from domain modeling and
            APIs to messaging, real-time features and application security. I care about correctness,
            clean architecture, and shipping things that hold up under real multi-tenant load.
          </p>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <div className="eyebrow">Toolbox</div>
          <h2 className="sec-title">Skills &amp; Technologies</h2>
          <div className="cards">
            {SKILLS.map((s) => (
              <div className="card" key={s.group}>
                <h4>{s.group}</h4>
                <div className="chips">
                  {s.items.map((i) => (
                    <span className="chip" key={i}>{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <div className="eyebrow">Career</div>
          <h2 className="sec-title">Experience</h2>
          {EXPERIENCE.map((j) => (
            <div className="job" key={j.pos + j.co}>
              <div className="row">
                <div className="pos">
                  {j.pos} · <span className="co">{j.co}</span>
                </div>
                <div className="date">{j.date}</div>
              </div>
              {j.ctx ? <div className="ctx">{j.ctx}</div> : null}
              <ul>
                {j.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="systems">
        <div className="wrap">
          <div className="eyebrow">Production systems</div>
          <h2 className="sec-title">Systems I built at NextX</h2>
          <p style={{ color: "var(--muted)", fontSize: 15, maxWidth: 760, marginBottom: 22 }}>
            A multi-tenant SaaS platform re-built from a legacy PHP monolith into .NET
            microservices by an 8-person backend team. Below are the services I own or contributed to, with the concrete
            features and technology behind each.
          </p>
          <div className="systems">
            {SYSTEMS.map((s) => (
              <div className={s.feat ? "sys feat" : "sys"} key={s.name}>
                <div className="sh">
                  <span className="st">{s.name}</span>
                  <span className="sr">{s.role}</span>
                </div>
                <ul>
                  {s.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="stack">
                  {s.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <div className="eyebrow">Selected work</div>
          <h2 className="sec-title">Personal projects</h2>
          <div className="projects">
            {PROJECTS.map((p) => (
              <div className="proj" key={p.title}>
                <div className="pt">{p.title}</div>
                <div className="role">{p.role}</div>
                <div className="desc">{p.desc}</div>
                <div className="stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <a className="link" href={p.link} target="_blank" rel="noreferrer">
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="extra">
        <div className="wrap">
          <div className="duo">
            <div className="card">
              <h4>Education</h4>
              <div style={{ fontWeight: 700 }}>FPT University (Hòa Lạc)</div>
              <div style={{ color: "var(--muted)", fontSize: 14 }}>
                B.E. Software Engineering · Graduated Dec 2024
              </div>
            </div>
            <div className="card">
              <h4>Languages</h4>
              <div style={{ color: "var(--muted)", fontSize: 15 }}>
                Vietnamese — Native · English — TOEIC 500 (basic technical reading)
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="wrap">
          <div className="eyebrow" style={{ textAlign: "center" }}>Get in touch</div>
          <h2 className="sec-title" style={{ textAlign: "center" }}>Let's build something</h2>
          <div className="actions">
            <a className="btn btn-primary" href={`mailto:${PROFILE.email}`}>✉ Email me</a>
            <a className="btn btn-ghost" href={PROFILE.cvEn} target="_blank" rel="noreferrer">Download CV (PDF)</a>
            <a className="btn btn-ghost" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn btn-ghost" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <p>© {new Date().getFullYear()} Lê Anh Lương · Built with Next.js</p>
        </div>
      </footer>
    </>
  );
}
