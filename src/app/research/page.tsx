import { AboutPage } from "@/components/about-page"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ResearchPageComponent } from "@/components/research-page"

export default function About() {
  return (
    <div>
      <Navbar />
      <ResearchPageComponent />
      <Footer />
    </div>
  )
}
