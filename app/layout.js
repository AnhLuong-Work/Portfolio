import "./globals.css";

export const metadata = {
  title: "Lê Anh Lương — .NET Backend Developer",
  description:
    "Backend developer with 2.5 years building production .NET microservices: Clean Architecture, PostgreSQL, RabbitMQ, SignalR, a self-hosted RAG stack and an MCP server for AI assistants.",
  openGraph: {
    title: "Lê Anh Lương — .NET Backend Developer",
    description:
      "Backend developer building production .NET microservices on a multi-tenant SaaS platform.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
