import LegalPage from "../../components/LegalPage";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Terms, Privacy & Cookies",
  description:
    "Terms and conditions, privacy information, cookies, and contact details for Velvety Brand Studio.",
  path: "/legal",
});

export default function Legal() {
  return <LegalPage />;
}
