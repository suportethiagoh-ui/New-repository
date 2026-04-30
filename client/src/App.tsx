import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/NotFound';
import { Route, Switch } from 'wouter';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { AuditProvider } from './contexts/AuditContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Audit from './pages/Audit';

/**
 * Nota sobre autenticação:
 * O login é gerenciado via OAuth no servidor (server/_core/oauth.ts).
 * A página /login apenas exibe o botão de redirecionamento ao portal OAuth.
 * ProtectedRoute redireciona automaticamente para o portal se não autenticado.
 */
function Router() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route
        path="/"
        component={() => (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        )}
      />
      <Route
        path="/auditoria"
        component={() => (
          <ProtectedRoute>
            <Audit />
          </ProtectedRoute>
        )}
      />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AuditProvider>
          <ThemeProvider defaultTheme="light">
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </ThemeProvider>
        </AuditProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
