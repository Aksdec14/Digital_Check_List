import Navbar from '@/components/Navbar'
import HeroCarousel from '@/components/HeroCarousel'
import TrustBar from '@/components/TrustBar'
import ClickDontPrint from '@/components/ClickDontPrint'
import WhyDigitalChecklists from '@/components/WhyDigitalChecklists'
import EverythingIncluded from '@/components/EverythingIncluded'
import ConnectedNotIsolated from '@/components/ConnectedNotIsolated'
import CtaBanner from '@/components/CtaBanner'
import Blogs from '@/components/Blogs'
import Faq from '@/components/Faq'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <TrustBar />
      {/* <ClickDontPrint /> */}
      <WhyDigitalChecklists />
      <EverythingIncluded />
      <ConnectedNotIsolated />
      <CtaBanner />
      <Blogs />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}
