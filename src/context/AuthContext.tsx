import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { authApi } from "../services/api";
type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  country?: string;
  avatar?: string;
};
type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (patch: Partial<User>) => void;
};
const AuthContext = createContext<AuthContextType | null>(null);
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      return JSON.parse(localStorage.getItem("safari_user") || "null");
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (user) localStorage.setItem("safari_user", JSON.stringify(user));
    else localStorage.removeItem("safari_user");
  }, [user]);
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      try {
        const r = await authApi.login({ email, password });
        setUser(r.data.user);
        return;
      } catch {}
      setUser({ id: "demo-1", name: email.split("@")[0], email });
    } finally {
      setLoading(false);
    }
  };
  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      try {
        const r = await authApi.register({ name, email, password });
        setUser(r.data.user);
        return;
      } catch {}
      setUser({ id: "demo-1", name, email });
    } finally {
      setLoading(false);
    }
  };
  const logout = async () => {
    try {
      await authApi.logout();
    } catch {}
    setUser(null);
  };
  const updateProfile = (patch: Partial<User>) =>
    setUser((u) => (u ? { ...u, ...patch } : u));
  const value = useMemo(
    () => ({ user, loading, login, register, logout, updateProfile }),
    [user, loading],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const useAuth = () => {
  const c = useContext(AuthContext);
  if (!c) throw new Error("useAuth must be used inside AuthProvider");
  return c;
};
