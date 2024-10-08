// File: src/app/layout.tsx
import AppNavBar from './components/navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col  bg-pink-300">
          <AppNavBar />
          <main className="flex-grow container mx-auto px-4 py-8 mt-10">
            {children}
          </main>
          <footer className="bg-secondary text-white py-4">
            <div className="container mx-auto px-4 text-center">
              © 2023 VTra
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}