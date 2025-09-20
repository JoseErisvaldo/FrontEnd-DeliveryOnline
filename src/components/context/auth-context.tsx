import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';

type User = {
  id: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const tokenKey = 'authToken';
  const userKey = 'authUser';

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem(tokenKey);
    const savedUser = localStorage.getItem(userKey);

    if (savedToken) setToken(savedToken);
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem(tokenKey, token);
    } else {
      localStorage.removeItem(tokenKey);
    }

    if (user) {
      localStorage.setItem(userKey, JSON.stringify(user));
    } else {
      localStorage.removeItem(userKey);
    }
  }, [token, user]);

  const signIn = async (email: string, password: string) => {
    if (!email || !password) {
      throw new Error('Credenciais inválidas');
    }

    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Erro na autenticação');
    }

    const data = await response.json();

    setUser({ id: data.id, email: data.email });
    setToken(data.access_token);
  };

  const signUp = async (email: string, password: string) => {
    if (!email || !password) {
      throw new Error('Credenciais inválidas');
    }

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/register`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      }
    );

    if (!response.ok) {
      throw new Error('Erro ao criar conta');
    }

    const data = await response.json();
    console.log('Usuário criado com sucesso');
    return data;
  };

  const signOut = async () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, signIn, signUp, signOut }}>
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
