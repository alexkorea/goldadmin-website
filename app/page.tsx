import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhyUsSection } from "@/components/home/why-us-section"
import { ProcessSection } from "@/components/home/process-section"
import { BlogPreviewSection } from "@/components/home/blog-preview-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <BlogPreviewSection />
      </main>
      <Footer />
    </>
  )
}
