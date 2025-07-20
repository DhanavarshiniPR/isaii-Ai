// src/app/page.js
import Hero from './components/Hero'
import Features from './components/Features'
import './globals.css'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fafafa', padding: '0' }}>
        <Hero />
        <Features />
        {/* More sections like Services, Products will go here */}
      </main>
  )
}
