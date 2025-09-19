import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/page';
import { AuthProvider } from './components/context/auth-context';
import { CardSignIn } from './components/auth/sign-in';

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/sign-in" element={<CardSignIn />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
