import AboutSection from "@/components/About/page";
import ContactSection from "@/components/Footer/page";
import HeroSection from "@/components/HeroSection/page";
import Navbar from "@/components/Navbar/page";
import ProductSection from "@/components/Product/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <ContactSection />
    </>
  );
}
