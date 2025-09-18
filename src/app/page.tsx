export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container" style={{padding:0}}>
          <h1>Stronger, faster, pain-smarter.</h1>
          <p>
            Evidence-based training plans, injury evaluation, and rehab coaching
            for athletes — designed by a sports medicine physician.
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

      {/* TRUST / BADGE STRIP (optional) */}
      <section className="section">
        <div className="container" style={{color:"#6b7280", fontSize:14}}>
          Board-certified • Evidence-based • Athlete-focused
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <h2>Services</h2>
          <div className="cards">
            <div className="card">
              <h3>Exercise Prescription</h3>
              <p>Personalized plans tailored to goals, time, and history.</p>
              <a className="btn ghost" href="#contact">Learn more</a>
            </div>
            <div className="card">
              <h3>Injury Evaluation</h3>
              <p>MD-led assessment and return-to-sport roadmap.</p>
              <a className="btn ghost" href="#contact">Learn more</a>
            </div>
            <div className="card">
              <h3>Performance Coaching</h3>
              <p>Structured progressions for running, cycling, and tri.</p>
              <a className="btn ghost" href="#contact">Learn more</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cards">
            <div className="card">
              <h3>60-min Consult</h3>
              <p>Video visit. History, exam guidance, plan & next steps.</p>
              <a
                className="btn primary"
                href="https://calendly.com/YOURNAME/consultation"
                target="_blank"
              >
                Book now
              </a>
            </div>
            <div className="card">
              <h3>Training Plan</h3>
              <p>4-week plan with check-ins. Built for your schedule.</p>
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

