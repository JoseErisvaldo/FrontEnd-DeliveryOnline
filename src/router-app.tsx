import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/page';
import { AuthProvider, useAuth } from './components/context/auth-context';
import { CardSignIn } from './components/auth/sign-in';
import { CardSignUp } from './components/auth/sign-up';
import { Suspense } from 'react';
import type { ReactNode } from 'react';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useAuth();

  return token ? children : <Navigate to="/auth/sign-in" />;
};

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useAuth();

  return !token ? children : <Navigate to="/" />;
};

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Rotas públicas */}
            <Route 
              path="/auth/sign-in" 
              element={
                <PublicRoute>
                  <CardSignIn />
                </PublicRoute>
              } 
            />
            <Route 
              path="/auth/sign-up" 
              element={
                <PublicRoute>
                  <CardSignUp />
                </PublicRoute>
              } 
            />

            <Route 
              path="*" 
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              } 
            />
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
};
