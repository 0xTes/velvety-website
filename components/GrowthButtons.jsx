import Link from "next/link";
import { GROWTH_BUTTONS } from "../lib/constants";

/**
 * The "Choose Your Growth Path" button row.
 * Rendered inside the Hero section, above the main headline.
 * Uses Next.js Link for client-side routing (no full-page reload).
 */
export default function GrowthButtons() {
  return (
    <div>
      <h3 className="growth-heading">Choose Your Growth Path</h3>
      <div className="growth-path-buttons">
        {GROWTH_BUTTONS.map((btn) => (
          <Link key={btn.label} href={btn.href} className="growth-btn">
            {btn.emoji} {btn.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
