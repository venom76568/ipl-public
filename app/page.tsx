import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Form from '../components/Form'
import Footer from '../components/Footer'
import Timeline from '../components/Timeline'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Timeline/>
    <Form/>
    <Footer/>
   </div>
  )
}
