import { Lock } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
          <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2">
                <img src="/logo.jpg" alt="EJAZTECH" className="h-8 w-8 rounded-full" />
                <span className="font-semibold tracking-tight">EJAZTECH</span>
                <span className="ml-2 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/70">
                  Admin Portal
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Link 
                  to="/auth" 
                  className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 transition"
                >
                  <Lock className="h-4 w-4" /> Secure Login
                </Link>
              </div>
            </div>
          </header>
  )
}

export default Navbar