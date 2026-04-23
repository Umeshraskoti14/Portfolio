import { AppErrorBoundary } from './components/AppErrorBoundary';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
    <AppErrorBoundary>
      <Layout>
        <HomePage />
      </Layout>
    </AppErrorBoundary>
  );
}
