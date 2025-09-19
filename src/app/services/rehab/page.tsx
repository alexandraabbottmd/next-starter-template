export const metadata = {
  title: "Rehab Plans | Abbott Sport Performance",
  description:
    "Injury-based or individualized recovery programs designed by a sports medicine physician.",
};

export default function RehabPage() {
  return (
    <main className="container">
      <h1>Rehab Plans</h1>
      <p>
        Physician-directed rehabilitation for acute and chronic injuries. We align
        objective milestones (pain, ROM, strength, tolerance) with your sport’s
        demands to progress safely and predictably.
      </p>

      <h2>What’s included</h2>
      <ul>
        <li>Video consult and targeted assessment</li>
        <li>Diagnosis-informed exercise plan with weekly progressions</li>
        <li>Pain modulation strategies and load management</li>
        <li>Return-to-sport criteria and testing</li>
      </ul>

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
          Purchase a Plan
        </a>
      </div>
    </main>
  );
}
