import './AboutUs.css'

type AboutUsProps = {
  onOpenContact: () => void
}

const differentiators = [
  {
    number: '01',
    title: 'Experience & Industry Expertise',
    body: "With years of experience in Goa's real estate industry, we bring a strong understanding of local markets, evolving buyer expectations, and development requirements. This knowledge helps us create projects that align with modern lifestyles and long-term value.",
  },
  {
    number: '02',
    title: 'Integrated Development Approach',
    body: 'From initial planning and engineering to design and execution, every stage is guided by a coordinated approach. By bringing different aspects of development together, we maintain consistency, efficiency, and attention to detail throughout every project.',
  },
  {
    number: '03',
    title: 'Quality, Trust & Commitment',
    body: 'Quality is reflected in every decision we make. Through careful material selection, skilled execution, and responsible planning, we strive to maintain high standards. Our commitment goes beyond delivering projects; it is about building lasting trust and relationships.',
  },
  {
    number: '04',
    title: 'Diverse Portfolio & Customer Experience',
    body: 'From luxury villas and residential apartments to serviced residences and hospitality developments, our portfolio caters to diverse lifestyles and aspirations. We focus on creating meaningful experiences at every stage, from the first enquiry to project handover.',
  },
]

function PortraitPlaceholder({ initials, name }: { initials: string; name: string }) {
  return (
    <div className="about-leader__portrait" role="img" aria-label={`Portrait placeholder for ${name}`}>
      <span>{initials}</span>
      <small>Leadership portrait</small>
    </div>
  )
}

export function AboutUs({ onOpenContact }: AboutUsProps) {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-container about-hero__inner">
          <p className="about-eyebrow">ABOUT GHD GROUP</p>
          <h1>Every Home Begins <em>With a Story.</em></h1>
          <p className="about-hero__intro">
            Behind every home is a hope: a quiet picture of the life someone wants to build. GHD Group exists to turn that picture into a real place. For two decades, we have planned with care and built with precision across Goa, so that people have the space to live the story they imagine.
          </p>
          <div className="about-hero__signature"><span /> Rooted in Goa. Built on trust.</div>
        </div>
      </section>

      <section className="about-leadership about-section">
        <div className="about-container">
          <div className="about-section__heading">
            <p className="about-eyebrow">THE PEOPLE BEHIND THE VISION</p>
            <h2>Leadership with <em>purpose.</em></h2>
          </div>
          <div className="about-leadership__grid">
            <article className="about-leader">
              <PortraitPlaceholder initials="BT" name="Mr. Bharat Thakran" />
              <div className="about-leader__copy">
                <p className="about-eyebrow">CHAIRMAN, GHD GROUP</p>
                <h3>Mr. Bharat Thakran</h3>
                <p>Under the leadership of Mr. Bharat Thakran, GHD Group is driven by a vision rooted in trust, quality, and commitment. His approach focuses on thoughtful planning, strong values, and delivering developments that create lasting value.</p>
              </div>
            </article>
            <article className="about-leader">
              <PortraitPlaceholder initials="RT" name="Mrs. Renu Thakran" />
              <div className="about-leader__copy">
                <p className="about-eyebrow">MANAGING DIRECTOR, GHD HOTELS</p>
                <h3>Mrs. Renu Thakran</h3>
                <p>Mrs. Renu Thakran serves as the Managing Director of GHD Hotels, the hospitality arm of GHD Group. Working alongside the Chairman, she contributes to shaping the group's long-term vision, values, and hospitality philosophy, with a focus on delivering exceptional guest experiences through thoughtful service, comfort, and care.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-purpose about-section">
        <div className="about-container about-purpose__grid">
          <article className="about-purpose__panel">
            <p className="about-eyebrow">WHERE WE ARE GOING</p>
            <h2>Our <em>Vision</em></h2>
            <p>We see a future where good real estate and good hospitality are never separate ideas. Our vision is to build quality spaces that give people meaningful experiences, and to help shape how Goa’s property and hospitality sectors evolve: with care for place, craft in the work and respect for the people who live there.</p>
          </article>
          <article className="about-purpose__panel about-purpose__panel--dark">
            <p className="about-eyebrow">WHAT GUIDES OUR WORK</p>
            <h2>Our <em>Mission</em></h2>
            <p>Our mission is to develop spaces people can trust, and we hold ourselves to that in every step of the journey.</p>
            <div className="about-purpose__rule" />
            <span>Thoughtful planning · Quality craftsmanship · Lasting relationships</span>
          </article>
        </div>
      </section>

      <section className="about-difference about-section">
        <div className="about-container">
          <div className="about-section__heading about-section__heading--center">
            <p className="about-eyebrow">THE GHD DIFFERENCE</p>
            <h2>What Sets Us <em>Apart</em></h2>
          </div>
          <div className="about-difference__grid">
            {differentiators.map((item) => (
              <article className="about-difference__item" key={item.number}>
                <span className="about-difference__number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-commitment">
        <div className="about-container about-commitment__inner">
          <p className="about-eyebrow">A PROMISE IN EVERY PROJECT</p>
          <h2>Our <em>Commitment</em></h2>
          <p>At GHD Group, we believe every development represents a promise. We remain committed to delivering quality, maintaining transparency, and creating spaces that offer lasting value. Our focus is not simply on what we build, but on the standards and values we uphold throughout the journey.</p>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-container about-cta__inner">
          <div>
            <p className="about-eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
            <h2>Discover What We Have <em>Built</em></h2>
            <p>Explore GHD Group's completed, ongoing, and upcoming developments. Discover our approach to real estate and hospitality, or connect with our team to find the right opportunity.</p>
          </div>
          <div className="about-cta__actions">
            <a className="about-button about-button--primary" href="https://ghdinfra.com/">View Our Projects <span>↗</span></a>
            <button className="about-button about-button--secondary" type="button" onClick={onOpenContact}>Contact Our Team <span>→</span></button>
          </div>
        </div>
      </section>
    </main>
  )
}
