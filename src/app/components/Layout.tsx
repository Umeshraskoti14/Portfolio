import type { ReactNode } from 'react';
import { NavigationRouter } from './NavigationRouter';
import { Footer } from './Footer';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="size-full">
      <NavigationRouter />
      {children}
      <Footer />
    </div>
  );
}
