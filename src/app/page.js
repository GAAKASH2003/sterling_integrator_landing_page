import Image from "next/image";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { USP } from "@/components/usp";
import { Industries } from "@/components/industries";
import { ContactFormSection } from "@/components/contact-form";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <USP />
      <Industries />
      <ContactFormSection />
    </>
  );
}
