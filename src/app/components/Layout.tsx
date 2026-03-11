import { Outlet } from 'react-router';
import { NavigationRouter } from './NavigationRouter';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="size-full">
      <NavigationRouter />
      <Outlet />
      <Footer />
    </div>
  );
}
