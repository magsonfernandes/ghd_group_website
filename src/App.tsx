import { useEffect, useState } from 'react'
import { ContactModal } from './components/ContactModal'
import { Header } from './components/Header'
import { LandingPage } from './components/LandingPage'
import { AboutUs } from './components/AboutUs'
import { ContactUs } from './components/ContactUs'

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    if (!isContactOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsContactOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isContactOpen])

  return (
    <>
      <Header onOpenContact={() => setIsContactOpen(true)} />
      {window.location.pathname === '/about' || window.location.pathname === '/about/' ? <AboutUs onOpenContact={() => setIsContactOpen(true)} /> : window.location.pathname === '/contact' || window.location.pathname === '/contact/' ? <ContactUs /> : <LandingPage />}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
