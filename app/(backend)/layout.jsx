import "../globals.css";

export const metadata = {
  title: "Main Application",
  description: "Main pages"
}

export default function mainLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-4xl font-black text-indigo-600 tracking-tight">
        <header className="bg-blue-500 p-4 text-white">
          <p>Header</p>
        </header>
        <div className='h-200'>
          {children}
        </div>
        <footer className="bg-blue-500 p-4 text-white">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
