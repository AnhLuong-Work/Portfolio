const PROFILE = {
  name: "Lê Anh Lương",
  role: ".NET Backend Developer",
  location: "Hà Nội, Vietnam",
  email: "leanhluong0110@gmail.com",
  phone: "+84 976 564 969",
  github: "https://github.com/leanhluong",
  linkedin: "https://www.linkedin.com/in/anh-l%C6%B0%C6%A1ng-l%C3%AA-22a985370/",
  cvEn: "/Le_Anh_Luong-DotNet-Backend-Resume.pdf",
  cvVi: "/Le_Anh_Luong-Backend-CV-VI.pdf",
};

const SUMMARY =
  "Backend developer with ~2–3 years of experience building production .NET microservices for a multi-tenant SaaS platform (12+ services) — part of re-platforming a legacy PHP monolith to .NET. Strong in C# / ASP.NET Core with Clean Architecture, CQRS and DDD; comfortable across PostgreSQL, Redis, RabbitMQ/MassTransit, gRPC and SignalR. I have shipped features across commerce (Sales, CRM), fintech (online payment, e-invoice & e-contract), communications, marketing and platform security — including third-party integrations with VNPay, BKAV, Viettel and Brevo.";

const SKILLS = [
  { group: "Languages", items: ["C#", "TypeScript", "JavaScript", "SQL"] },
  {
    group: "Backend / .NET",
    items: ["ASP.NET Core", "EF Core", "Clean Architecture", "CQRS", "DDD", "gRPC", "SignalR"],
  },
  {
    group: "Data & Messaging",
    items: ["PostgreSQL 16", "pgvector / RLS", "Redis 7", "RabbitMQ", "MassTransit", "Hangfire"],
  },
  {
    group: "Security",
    items: ["JWT RS256 / JWKS", "OAuth2 / OIDC", "Argon2id", "AES-256-GCM", "2FA TOTP", "RBAC"],
  },
  {
    group: "Infra & Testing",
    items: ["Docker", "YARP Gateway", "Serilog", "OpenTelemetry", "xUnit", "Testcontainers", "CI/CD"],
  },
  {
    group: "Integrations",
    items: ["VNPay / VNPayQR / VietQR", "BKAV & Viettel (e-invoice)", "Brevo (email/SMS)", "Zalo ZNS & ZCA", "Facebook", "Hikvision ISAPI", "FreePBX / Asterisk", "OpenAI"],
  },
  {
    group: "Domains",
    items: ["Sales / e-commerce", "CRM", "Online payment", "E-invoice & e-contract", "Marketing & notification", "HRM / Gym", "Real-time chat", "Legacy PHP→.NET migration"],
  },
];

const EXPERIENCE = [
  {
    pos: ".NET Backend Developer",
    co: "NextX",
    date: "2024 – Present · Hà Nội",
    ctx: "Part of re-platforming a legacy PHP monolith into 12+ .NET microservices (Clean Architecture, shared-kernel NuGet, PostgreSQL, RabbitMQ, YARP gateway, gRPC).",
    bullets: [
      "Primary owner of the omni-channel chat service: unified Facebook Messenger, Zalo OA, Zalo Personal (a ZCA/zca-js Node bridge) and a web widget (100+ endpoints) with real-time delivery over SignalR; AI chatbot via pgvector + GPT (RAG); chat integrated with CRM & Sales over gRPC.",
      "Commerce: built parts of the Sales service (133 endpoints — orders, products, inventory, pricing & promotions, commission, reports) and contributed to CRM (Lead, Contact, Opportunity, Quotation, analytics).",
      "Fintech: built the Payment service (online payment via VNPay, VNPayQR and VietQR) plus the E-Invoice and E-Contract servers integrated with BKAV and Viettel.",
      "Marketing & Notification: built a bulk-campaign engine across Email/SMS (Brevo) and Zalo ZNS — Brevo API client (sender verification, DKIM/SPF), MassTransit workflows, Hangfire, MJML — plus the Notification service.",
      "Platform security: built the YARP API Gateway (12-step pipeline: auth, CSRF, Redis rate limiting, header-spoofing guard) and contributed to IAM (JWT RS256 + JWKS, Argon2id, 2FA TOTP, RBAC); multi-tenant isolation via PostgreSQL RLS.",
      "Delivered HRM, Gym and golf/club-management services; integrated Hikvision devices (card + Face ID) via ISAPI + Electron over SignalR; migrated Gym & CRM modules from the legacy PHP system, incl. telephony (FreePBX + Asterisk).",
    ],
  },
  {
    pos: ".NET Developer Intern",
    co: "FPT Software",
    date: "May 2023 – Sep 2023 · Hà Nội",
    ctx: "",
    bullets: [
      "Trained in .NET web development; built features and practiced Agile workflow, Git, debugging and coding standards.",
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
  {
    title: "FinTrack",
    role: "Personal · Fullstack",
    desc: "Stock portfolio tracker — real-time prices, asset management and profit/loss reporting with charts.",
    stack: ["ReactJS", "ASP.NET Core API", "EF Core", "JWT"],
    link: "https://github.com/leanhluong/FinTrackProject_Reactjs_.NetCore",
  },
  {
    title: "ShopBakery",
    role: "Personal · Fullstack",
    desc: "Bakery e-commerce platform with cart, orders and secure online payment via VNPay.",
    stack: ["ASP.NET Core", "Razor Pages", "EF Core", "VNPay"],
    link: "https://github.com/leanhluong/Online_Bakery_Shop_.NetCore",
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

      <section id="projects">
        <div className="wrap">
          <div className="eyebrow">Selected work</div>
          <h2 className="sec-title">Projects</h2>
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
                B.E. Software Engineering — .NET specialization · Graduated 2025
              </div>
            </div>
            <div className="card">
              <h4>Languages</h4>
              <div style={{ color: "var(--muted)", fontSize: 15 }}>
                Vietnamese — Native · English — Intermediate (technical) · Japanese — Basic
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
