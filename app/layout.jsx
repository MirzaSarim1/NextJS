import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-4xl font-black text-indigo-600 tracking-tight">
        {children}
      </body>
    </html>
  );
}
