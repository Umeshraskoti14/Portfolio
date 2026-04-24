import { AppErrorBoundary } from './components/AppErrorBoundary';
import { Layout } from './components/Layout';
import { UiPreferencesProvider } from './context/UiPreferencesContext';
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
    <UiPreferencesProvider>
      <AppErrorBoundary>
        <Layout>
          <HomePage />
        </Layout>
      </AppErrorBoundary>
    </UiPreferencesProvider>
  );
}
