import Image from "next/image";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import WhyDNA from "@/components/WhyDNA";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <SmoothScroll />

      {/* LEFT DNA */}
      <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
        <Image
          src="/dna-background.png"
          alt=""
          width={1024}
          height={2048}
          priority
          className="
            absolute
            left-[-360px]
            top-0
            h-screen
            w-auto
            object-contain
            opacity-[0.22]
            blur-[0.5px]
            drop-shadow-[0_0_100px_rgba(168,85,247,.7)]
            animate-dna
            select-none
          "
        />
      </div>

      {/* RIGHT DNA */}
      <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
        <Image
          src="/dna-background.png"
          alt=""
          width={1024}
          height={2048}
          priority
          className="
            absolute
            right-[-380px]
            top-0
            h-screen
            w-auto
            object-contain
            scale-x-[-1]
            opacity-[0.24]
            blur-[0.5px]
            drop-shadow-[0_0_110px_rgba(168,85,247,.75)]
            animate-dna-reverse
            select-none
          "
        />
      </div>

      {/* Background Atmosphere */}
      <BackgroundEffects />

      {/* Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/35 pointer-events-none" />

      <Navbar />

      <Hero />

      <Programs />

      <About />

      <Founder />

      <WhyDNA />

      <Contact />

      <Footer />
    </main>
  );
}