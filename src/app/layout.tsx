'use client';
import './globals.css';
import { Provider, useSelector } from 'react-redux';
import { store, RootState } from '@/store/store';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

function BodyWithTheme({ children }: { children: ReactNode }) {
  const mode = useSelector((state: RootState) => state.theme.mode);
  return (
    <body className={mode === 'dark' ? 'dark' : ''}>
      {children}
    </body>
  );
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="tr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      <Provider store={store}>
        <BodyWithTheme>
          {children}
        </BodyWithTheme>
      </Provider>
    </html>
  );
}
