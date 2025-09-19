import {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import type { ReactNode } from 'react';

type User = {
  id: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const localStorageKey = 'authUser';
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string>('')

  useEffect(() => {
    const savedUser = localStorage.getItem(localStorageKey);
    if (savedUser) {
      setToken(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem(localStorageKey, JSON.stringify(token));
    } else {
      localStorage.removeItem(localStorageKey);
    }
  }, [token]);

  const signIn = async (email: string, password: string) => {
    if (!email || !password) {
      throw new Error('Credenciais inválidas');
    }

    const response = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    console.log(response)
    if (!response.ok) {
      throw new Error('Erro na autenticação');
    }

    const data = await response.json();

    setUser({
      id: data.id,
      email: data.email,
    });
    setToken(data.access_token);
  };

  const signOut = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
