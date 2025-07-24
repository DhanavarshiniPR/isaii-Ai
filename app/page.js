// src/app/page.js
import Hero from './components/Hero'
import Features from './components/Features'
import ScrollDirectionEffect from './components/ScrollDirectionEffect';
import './globals.css'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fafafa', padding: '0' }}>
      <ScrollDirectionEffect>
        <Hero />
      </ScrollDirectionEffect>
      <ScrollDirectionEffect>
        <Features />
      </ScrollDirectionEffect>
      {/* More sections like Services, Products will go here, wrap them in ScrollDirectionEffect as well */}
    </main>
  )
}
