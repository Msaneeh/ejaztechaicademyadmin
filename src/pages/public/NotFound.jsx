import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, ShieldAlert } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0A] text-white px-4">
      
      <div className="relative mx-auto w-full max-w-lg text-center">
        
        {/* Decorative Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5">
          <ShieldAlert className="h-10 w-10 text-white/50" />
        </div>

        {/* Error Code */}
        <p className="text-7xl font-bold tracking-tighter text-white/20 sm:text-9xl">
          404
        </p>

        {/* Message */}
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mt-3 text-sm text-white/50 leading-relaxed max-w-sm mx-auto">
          The page you are looking for does not exist, has been moved, or you do not have permission to access it.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="
              inline-flex h-11 w-full items-center justify-center gap-2
              rounded-full bg-white px-6
              text-sm font-medium text-black
              transition hover:bg-gray-200
              sm:w-auto
            "
          >
            <Home className="h-4 w-4" />
            Return to Landing
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="
              inline-flex h-11 w-full items-center justify-center gap-2
              rounded-full border border-white/20 bg-transparent px-6
              text-sm font-medium text-white
              transition hover:bg-white/5
              sm:w-auto
            "
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>

        {/* Help text */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/30">
            If you believe this is an error, please contact the platform super administrator.
          </p>
        </div>

      </div>
    </div>
  );
}