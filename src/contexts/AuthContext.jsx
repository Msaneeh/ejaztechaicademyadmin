import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const STORAGE_KEY = "ejaztech_admin_user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  async function login({ email, password }) {
    const fakeUser = {
      id: "adm_1",
      name: "Muhammad Admin",
      email,
      role: "ADMIN",
      avatar: "/logo.jpg",
      title: "Super Admin",
    };
    setUser(fakeUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fakeUser));
    return fakeUser;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used within AuthProvider");
  return ctx;
}

export default AuthContext;