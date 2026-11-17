import { FileText, ShieldIcon, AlertCircle } from "lucide-react";

import ActionCard from "@/components/overview/ActionCard";


const NeedAttention = () => {
  return (
              <section>
            <h2 className="text-lg font-semibold text-ink mb-4">Needs your attention</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <ActionCard 
                title="Courses awaiting review" 
                desc="Tutor submissions requiring approval" 
                count="8" 
                icon={FileText}
                link="/reviews"
              />
              <ActionCard 
                title="Tutor verification" 
                desc="Profiles awaiting verification" 
                count="5" 
                icon={ShieldIcon}
                link="/verifications"
              />
              <ActionCard 
                title="Open support requests" 
                desc="Requests that need a response" 
                count="7" 
                icon={AlertCircle}
                link="/support"
              />
              <ActionCard 
                title="Reported content" 
                desc="Reports requiring moderation" 
                count="2" 
                icon={AlertCircle}
                link="/reports"
              />
            </div>
          </section>
  )
}

export default NeedAttention