import { Users, BookOpen, BarChart3, ShieldCheck } from "lucide-react"

const Feature = () => {
  return (
            <section className="border-t border-white/10 bg-[#050505] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Users, title: "User Management", desc: "Oversee students, tutors, and admins. Manage verification and access." },
                { icon: BookOpen, title: "Academic Oversight", desc: "Review course submissions, manage categories, and approve publications." },
                { icon: BarChart3, title: "Platform Analytics", desc: "Monitor growth, engagement, revenue, and the learning funnel." },
                { icon: ShieldCheck, title: "System Security", desc: "Access audit logs, manage platform settings, and handle support." }
              ].map((feature, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <feature.icon className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-white/50 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Feature