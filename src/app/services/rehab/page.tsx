import Link from "next/link";

export const metadata = {
  title: "Rehab Programs | Abbott Sport Performance",
  description:
    "Injury-specific rehab plans or custom rehab schedules with physician oversight.",
};

export default function RehabProgramsPage() {
  return (
    <main className="container">
      <h1>Rehab Programs</h1>
      <p>
        Injury-based plans with clear milestones, or a fully individualized rehab schedule.
        We align pain, ROM, strength, and tolerance targets with the demands of your sport.
      </p>

      <h2>Options</h2>
      <ul>
        <li>Injury-specific rehab plans — <strong>$195/month</strong></li>
        <li>Custom rehab schedule (1:1 consult + individualized plan) — <strong>$295/month</strong></li>
      </ul>

      <div className="btns">
        <Link className="btn primary" href="/consult">Start with a Consultation</Link>
        <Link className="btn ghost" href="/">Back to Home</Link>
      </div>
    </main>
  );
}

