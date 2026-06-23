import Image from "next/image";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* ==============================
          DNA BACKGROUND
      ============================== */}

      {/* LEFT DNA */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <Image
          src="/dna-background.png"
          alt=""
          width={2800}
          height={2800}
          priority
          className="
            absolute
            -left-[1150px]
            top-1/2
            -translate-y-1/2
            max-w-none
            opacity-15
            blur-0
            animate-dna
            select-none
          "
        />
      </div>

      {/* RIGHT DNA */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <Image
          src="/dna-background.png"
          alt=""
          width={2800}
          height={2800}
          priority
          className="
            absolute
            -right-[1000px]
            top-1/2
            -translate-y-1/2
            max-w-none
            opacity-15
            blur-0
            animate-dna-reverse
            select-none
          "
        />
      </div>

      {/* ==============================
          GLOBAL DARK OVERLAY
      ============================== */}

      <div className="fixed inset-0 -z-10 pointer-events-none bg-black/75" />

      {/* ==============================
          PAGE CONTENT
      ============================== */}

      <Navbar />

      <Hero />

      <Programs />

      <About />

      <Founder />

      <Contact />

      <Footer />
    </main>
  );
}