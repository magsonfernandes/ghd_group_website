import { useState } from 'react'
import type { FormEvent } from 'react'
import { contactBrands } from '../data/navigation'
import './ContactUs.css'

export function ContactUs() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const phone = String(data.get('phone') || '')
    const city = String(data.get('city') || '')
    const message = String(data.get('message') || '')
    const consent = data.get('consent') === 'on' ? 'Yes' : 'No'
    const subject = encodeURIComponent('Website enquiry - GHD Group')
    const body = encodeURIComponent(
      `Full name: ${name}\nPhone: ${phone}\nCity or location: ${city}\nMessage: ${message || 'Not provided'}\nConsent to project-related updates: ${consent}\n\nPlease follow up with this enquiry.`
    )
    window.location.href = `mailto:info@ghdinfra.com?cc=info@ghdhotels.in&subject=${subject}&body=${body}`
    setSubmitted(true)
    form.reset()
  }

  return (
    <main className="contact-page">
      <section className="contact-page__hero">
        <div className="contact-page__eyebrow">GHD GROUP · GOA</div>
        <h1>Let’s Talk About Your Place in Goa</h1>
        <p>Whether you are comparing villas, looking at apartments, considering a plot or planning a stay with GHD Hotels, our team is ready to help. Tell us what you are looking for, and we will take it from there.</p>
        <div className="contact-page__actions">
          <a className="contact-page__button contact-page__button--solid" href="tel:+918322913236">Call Us</a>
          <a className="contact-page__button" href="https://wa.me/918380008687" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          <a className="contact-page__button" href="#send-enquiry">Send an Enquiry</a>
        </div>
      </section>

      <section className="contact-page__content" id="send-enquiry">
        <div className="contact-page__intro">
          <div className="contact-page__eyebrow">WE’RE HERE TO HELP</div>
          <h2>Send Us an Enquiry</h2>
          <p>Share a few details and our team will get back to you.</p>
          <div className="contact-page__direct">
            {contactBrands.map((brand) => (
              <article key={brand.id}>
                <h3>{brand.name}</h3>
                <a href={`tel:${brand.enquiry.replace(/\\s+/g, '')}`}>{brand.enquiry}</a>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </article>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Full name <span>*</span><input name="name" type="text" autoComplete="name" placeholder="Your full name" required /></label>
          <label>Phone number with country code <span>*</span><input name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" required /></label>
          <label>City or location <span>*</span><input name="city" type="text" autoComplete="address-level2" placeholder="Your city or preferred location" required /></label>
          <label>Message<textarea name="message" rows={5} placeholder="Tell us a little about what you are looking for" /></label>
          <label className="contact-form__consent"><input name="consent" type="checkbox" required /><span>I agree to be contacted by the company for project-related updates.</span></label>
          <button type="submit">Submit</button>
          {submitted && <p className="contact-form__success" role="status">Thank you. Our team will contact you shortly. Your email app should open with your enquiry; please send the prepared email to complete submission.</p>}
          <p className="contact-form__note">Submitting opens your email app with the enquiry addressed to GHD Group. Please send the prepared email to complete submission.</p>
        </form>
      </section>
    </main>
  )
}
