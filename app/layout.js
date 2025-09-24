import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Frognerduen',
  description: 'Frognerduen – scenen for Norges skjulte designtalenter',
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body className="min-h-screen flex flex-col bg-mocca text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}