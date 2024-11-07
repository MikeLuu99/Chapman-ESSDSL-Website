import { AboutPage } from "@/components/about-page"
import { Footer } from "@/components/footer"
import { GalleryPageComponent } from "@/components/gallery-page"
import { Navbar } from "@/components/navbar"

export default function About() {
  return (
    <div>
      <Navbar />
      <GalleryPageComponent />
      <Footer />
    </div>
  )
}
