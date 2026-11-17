
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Feature from "@/components/landing/Feature";
import Footer from "@/components/landing/Footer";

const Landing = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#0A0A0A] text-white">
      
      {/* Admin Navbar */}
      <Navbar />

      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero />

        {/* Feature Grid */}
        <Feature />

      </main>

      {/* Footer */}

      <Footer />

    </div>
  );
}

export default Landing