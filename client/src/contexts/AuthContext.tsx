/**
 * AuthContext — thin bridge para o hook real de autenticação (server/_core/hooks/useAuth).
 *
 * ⚠️  O sistema de autenticação REAL usa OAuth via servidor (server/_core/oauth.ts)
 *     e sessão via cookie seguro (COOKIE_NAME).
 *     Não existe mais nenhuma credencial hardcoded no frontend.
 */
import React, { createContext, useContext } from 'react';
import { useAuth as useCoreAuth } from '@/_core/hooks/useAuth';
import type { User } from '../../../drizzle/schema';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useCoreAuth();

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: auth.isAuthenticated,
        user: auth.user ?? null,
        loading: auth.loading,
        logout: auth.logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
}
