import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
          <footer className="border-t border-white/10 py-8 bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs text-white/40">
            © {year} EJAZTECH.AI · Internal Administration System
          </p>
        </div>
      </footer>
  )
}

export default Footer