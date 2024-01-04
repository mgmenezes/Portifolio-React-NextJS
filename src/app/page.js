import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] mx-auto py-4 px-12">
      <Navbar />
      <div className=" mt-28 container mx-auto py-4 px-12">
        <HeroSection />
      </div>
    </main>
  );
}
