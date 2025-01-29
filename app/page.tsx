import Hero from '../components/Hero'
import About from '../components/About'
import Form from '../components/Form'
import Footer from '../components/Footer'
import Timeline from '../components/Timeline'
import Wpl from '../components/Wpl'
export default function Home() {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <Hero />
      <About />
      <Wpl />
      <Timeline />
      <Form />
      <Footer />
    </div>
  )
}
