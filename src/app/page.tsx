'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import AdditionalServices from '@/components/AdditionalServices'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      <Header />
      <Hero />
      <Services />
      <AdditionalServices />
      <Contact />
      <Footer />
    </main>
  )
}