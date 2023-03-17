import Hero from '../components/Hero'
import About from '../components/About'
import Form from '../components/Form'
import Footer from '../components/Footer'
import Timeline from '../components/Timeline'

export default function Home() {
  return (
    <div className='w-screen h-screen'>
      <Hero />
      <About />
      <Timeline />
      <Form />
      <Footer />
    </div>
  )
}
