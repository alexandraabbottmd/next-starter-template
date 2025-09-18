export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container" style={{padding:0}}>
          <h1>Physician-designed, custom exercise prescription</h1>
          <p>
            Evidence-based programs for athletes — whether you’re healing,
            preventing injury, or chasing peak performance.
          </p>
          <div className="btns">
            <a
              className="btn primary"
              href="https://calendly.com/YOURNAME/consultation"
              target="_blank"
            >
              Book a Consultation
            </a>
            <a
              className="btn ghost"
              href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
              target="_blank"
            >
              Buy a Training Plan
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <h2>Services</h2>
          <div className="cards">
            <div className="card">
              <h3>Rehab Plans</h3>
              <p>Injury-based or fully individualized recovery programs.</p>
            </div>
            <div className="card">
              <h3>Pre-hab Planning</h3>
              <p>Sport-specific or individualized injury prevention strategies.</p>
            </div>
            <div className="card">
              <h3>Exercise Prescription for Performance</h3>
              <p>Custom training plans to improve strength, endurance, or speed.</p>
            </div>
            <div className="card">
              <h3>Sports Nutrition</h3>
              <p>Guidance for fueling, recovery, and long-term performance health.</p>
            </div>
            <div className="card">
              <h3>Concierge Physician Services</h3>
              <p>Ongoing direct access and oversight from a sports medicine physician.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cards">
            <div className="card">
              <h3>Book a Consultation</h3>
              <p>One-on-one video visit to evaluate, plan, and set your next steps.</p>
              <a
                className="btn primary"
                href="https://calendly.com/YOURNAME/consultation"
                target="_blank"
              >
                Schedule now
              </a>
            </div>
            <div className="card">
              <h3>Purchase a Training Plan</h3>
              <p>4-week custom plan with check-ins, tailored to your sport and schedule.</p>
              <a
                className="btn primary"
                href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
                target="_blank"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

