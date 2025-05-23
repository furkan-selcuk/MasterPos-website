import './globals.css';
import { ProductProvider } from '@/context/ProductContext';

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      <body>
        <ProductProvider>
          {children}
        </ProductProvider>
      </body>
    </html>
  );
}
