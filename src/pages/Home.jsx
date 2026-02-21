import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Hero from '@/sections/Hero/Hero'
import About from '@/sections/About/About'
import Teasers from '@/sections/Teasers/Teasers'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Teasers />
      <Footer />
    </div>
  )
}
