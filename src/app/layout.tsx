export const metadata = {
  title: "Abbott Sport Performance",
  description: "Evidence-based coaching, rehab, and training plans.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* globals.css is already imported by Next in this file by default in most templates.
          If you see an import at the top like `import "./globals.css"`, keep it. */}
      <body>
        <div className="container">
          <nav>
            <div className="brand">Abbott Sport Performance</div>
            <div className="row" style={{gap:12}}>
              <a href="/">Home</a>
              <a href="#services">Services</a>
              <a href="/consult">Consultation</a>
              <a href="/shop">Shop</a>
            </div>
          </nav>

          {children}

          <footer>
            © {new Date().getFullYear()} Abbott Sport Performance • Sunnyvale, CA
          </footer>
        </div>
      </body>
    </html>
  );
}
