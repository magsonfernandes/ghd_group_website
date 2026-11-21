import './Blog.css'

export function Blog() {
  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero__ornament" aria-hidden="true">GHD</div>
        <div className="blog-container blog-hero__content">
          <p className="blog-eyebrow">GHD GROUP INSIGHTS · GOA</p>
          <h1>Insights That Help You Make <em>Smarter Property Decisions</em></h1>
          <p className="blog-intro">Buying property in Goa is a big decision, and good information makes it easier. GHD Group Insights brings together practical guides, market observations and lifestyle stories from a team that has worked in Goa real estate and hospitality since 2006. Whether you are a first-time buyer, a holiday home hunter or a long-term investor, start here.</p>
          <div className="blog-hero__footer"><span /> KNOW THE PLACE. UNDERSTAND THE POSSIBILITIES.</div>
        </div>
      </section>
      <section className="blog-welcome">
        <div className="blog-container blog-welcome__inner">
          <div>
            <p className="blog-eyebrow">A MORE INFORMED WAY FORWARD</p>
            <h2>Good decisions begin with <em>good insight.</em></h2>
          </div>
          <p>Explore perspectives shaped by our experience across Goa’s property and hospitality landscape. We’ll be sharing useful information to help you ask the right questions, understand your options and make decisions with greater confidence.</p>
        </div>
      </section>
    </main>
  )
}
