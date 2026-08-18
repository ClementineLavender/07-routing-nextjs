import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import 'modern-normalize/modern-normalize.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'A simple and efficient application for managing personal notes',
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <TanStackProvider>
          <Header />
          {children}
          <Footer />
          {modal}
        </TanStackProvider>
      </body>
    </html>
  );
}