import { ShieldCheck, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
            <section className="relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />
          
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 mb-6">
                <ShieldCheck className="h-3.5 w-3.5 text-green-400" />
                Restricted Access Area
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-balance">
                Platform Administration.
              </h1>
              <p className="mt-6 text-lg text-white/60 max-w-2xl text-pretty leading-relaxed">
                The central command center for the EJAZTECH E-Learning Platform. 
                Manage users, oversee academic content, review tutors, and monitor platform health.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/auth" 
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-black transition hover:bg-gray-200"
                >
                  Access Admin Dashboard <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Hero