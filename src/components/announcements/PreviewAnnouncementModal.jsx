import { X, Megaphone } from "lucide-react";

const PreviewAnnouncementModal = ({ previewAnnouncement, setPreviewAnnouncement}) => {
  return (
    <>
          {previewAnnouncement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-surface shadow-2xl border border-ink-line">
            
            <div className="flex items-center justify-between border-b border-ink-line p-4">
              <h3 className="font-semibold text-ink">Announcement Preview</h3>
              <button onClick={() => setPreviewAnnouncement(null)} className="text-ink-soft hover:text-ink">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink">
                   <Megaphone className="h-5 w-5" />
                 </div>
                 <div>
                   <p className="text-xs font-medium text-ink-faint uppercase">{previewAnnouncement.type}</p>
                   <p className="text-sm font-semibold text-ink">{previewAnnouncement.date}</p>
                 </div>
              </div>
              
              <h2 className="text-xl font-bold text-ink mb-3">{previewAnnouncement.title}</h2>
              <p className="text-sm text-ink-soft leading-relaxed">
                This is a preview of how the announcement will appear to the target audience. 
                In a real implementation, the actual message body would be displayed here.
              </p>
            </div>

            <div className="border-t border-ink-line bg-ink/5 p-4 text-center">
               <p className="text-xs text-ink-soft">Delivered to: <span className="font-medium text-ink">{previewAnnouncement.audience}</span></p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PreviewAnnouncementModal;