import "../globals.css";

export const metadata = {
  title: "Auth Pages",
  description: "Authentication pages"
}

export default function authLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-4xl font-black text-indigo-600 tracking-tight">
        <div className='flex h-217 items-center justify-center'>
          {children}
        </div>
        <footer className="bg-blue-500 p-4 text-white">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
