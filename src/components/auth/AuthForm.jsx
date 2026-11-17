import { Loader2 } from "lucide-react";

const AuthForm = ({ handleLogin, setEmail, setPassword, isLoading, email, password }) => {
  return (
    <>
            <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 w-full rounded-xl border border-ink-line bg-canvas px-4 text-sm outline-none focus:border-ink/30 focus:ring-2 focus:ring-ink/5"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11 w-full rounded-xl border border-ink-line bg-canvas px-4 text-sm outline-none focus:border-ink/30 focus:ring-2 focus:ring-ink/5"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="mt-6 flex h-11 w-full items-center justify-center rounded-xl bg-ink text-sm font-medium text-canvas hover:opacity-90 disabled:opacity-70"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign In"}
          </button>
        </form>
    </>
  )
}

export default AuthForm