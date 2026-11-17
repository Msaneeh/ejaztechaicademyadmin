import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import AuthForm from "@/components/auth/AuthForm";

export default function Auth() {
  const [email, setEmail] = useState("admin@ejaztech.ai");
  const [password, setPassword] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login({ email, password });
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="w-full max-w-md rounded-2xl border border-ink-line bg-surface p-8 shadow-sm">
        <div className="text-center mb-8">
          <img src="/logo.jpg" alt="EJAZTECH" className="mx-auto h-12 w-12 rounded-full mb-4" />
          <h1 className="text-2xl font-bold tracking-tight text-ink">Admin Portal</h1>
          <p className="text-sm text-ink-soft mt-1">Sign in to manage the platform.</p>
        </div>

        <AuthForm 
           handleLogin={handleLogin} 
           setEmail={setEmail}
           setPassword={setPassword}
           isLoading={isLoading}
           email={email}
           password={password}
        />
      </div>
    </div>
  );
}