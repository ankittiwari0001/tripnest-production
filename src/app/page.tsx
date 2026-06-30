import Hero from "@/components/home/Hero"
import Features from "@/components/home/Features"
import Showcase from "@/components/home/Showcase"
import Stats from "@/components/home/Stats"

import CTA from "@/components/home/CTA"
import Footer from "@/components/home/Footer"
import HowItWorks from "@/components/home/howitswork"

const page = () => {
  return (
    <div>
      
        <Hero />
        <Features/>
        <HowItWorks/>
        <Showcase/>
        <Stats/>
        
        <CTA/>
        <Footer/>
    </div>
  )
}

export default page
