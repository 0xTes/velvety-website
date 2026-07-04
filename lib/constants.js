// ─── SITE CONSTANTS ───────────────────────────────────────────────────────
// Edit here to update phone numbers, links, addresses across the whole site.

export const WHATSAPP_NUMBER = "19852887616";
export const WHATSAPP_MESSAGE = "Hello Velvety, I want my free strategy call";
export const WHATSAPP_URL = `https://wa.me/${19852887616}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const CONTACT_EMAIL = "hello@velvety.com";
export const CONTACT_PHONE = "(+1) 985-288-7616";

export const ADDRESS = {
  street: "16636 N 58th Street",
  city: "Scottsdale, AZ 85254",
  country: "USA",
  mapsUrl: "https://maps.google.com/maps?q=16636+N+58th+St+Scottsdale+AZ&t=&z=15&ie=UTF8&iwloc=&output=embed",
  directionsUrl: "https://www.google.com/maps/place/16636+N+58th+St,+Scottsdale,+AZ",
};

export const HOURS = [
  { days: "Mon–Fri", hours: "9am–4pm MST" },
  { days: "Saturday", hours: "9am–1pm MST" },
];

export const SOCIAL_LINKS = {
  facebook:  "https://facebook.com/YOURPAGE",
  instagram: "https://instagram.com/YOURHANDLE",
  tiktok:    "https://tiktok.com/@YOURHANDLE",
  twitter:   "https://twitter.com/YOURHANDLE",
};

export const NAV_LINKS = [
  { label: "About",         href: "/#about" },
  { label: "Services",      href: "/#services" },
  { label: "Resource Page", href: "/#resource" },
  { label: "How It Works",  href: "/#how" },
  { label: "FAQ",           href: "/#faq" },
];

export const GROWTH_BUTTONS = [
  { emoji: "🔥", label: "OnlyFans Marketing",  href: "/onlyfans-marketing" },
  { emoji: "🚀", label: "Fansly Marketing",     href: "/fansly-marketing" },
  { emoji: "⭐", label: "Other Platforms",      href: "/other-platforms-marketing" },
  { emoji: "💎", label: "Creator Branding",     href: "/creator-branding" },
];

export const PLATFORMS = [
  { label: "OnlyFans",       href: "https://onlyfans.com",      color: "#00AFF0", initials: "OF" },
  { label: "Fansly",         href: "https://fansly.com",        color: "#1D9BF0", initials: "Fy" },
  { label: "AllAccessFans",  href: "https://allaccessfans.co",  color: "#9B59B6", initials: "AA" },
  { label: "Throne",         href: "https://throne.com",        color: "#1E1E1E", initials: "Th" },
];

export const SERVICES = [
  {
    icon: "🌐",
    title: "Resource Page Build",
    description: "A single, beautiful landing page that links to all your platforms, collects emails, and makes a lasting first impression on anyone who finds you.",
    features: ["Custom design & copywriting", "OnlyFans, Fansly, Throne links", "Email opt-in integration", "Mobile-optimised layout"],
    featured: false,
  },
  {
    icon: "📬",
    title: "Email List Strategy",
    description: "Your email list is the only audience you truly own. We set up, grow, and automate a newsletter funnel that earns even when platforms go down.",
    features: ["Opt-in copy & lead magnet", "Welcome sequence automation", "Monthly newsletter management", "Subscriber segmentation"],
    featured: true,
  },
  {
    icon: "🔍",
    title: "SEO & Discoverability",
    description: "Be found when prospective fans search. We research the exact keywords your ideal audience uses and build your content strategy around them.",
    features: ["Keyword & niche research", "On-page SEO implementation", "Google Business Profile setup", "Monthly ranking reports"],
    featured: false,
  },
  {
    icon: "✍️",
    title: "Brand Identity",
    description: "Logos, colour palettes, voice guidelines and social templates that turn you into a recognisable, premium brand — not just another profile.",
    features: ["Logo & visual identity kit", "Brand voice & tone guide", "Social media templates", "Content style guide"],
    featured: false,
  },
  {
    icon: "📈",
    title: "Growth Management",
    description: "Full-service management of your digital presence so you can stay focused on creating content.",
    features: ["Platform strategy", "Analytics & reporting", "A/B testing", "Monthly strategy call"],
    featured: false,
  },
];

export const STEPS = [
  { number: "01", icon: "📞", title: "Book a Strategy Call", description: "Free 30-min call to map out your goals and choose the right package." },
  { number: "02", icon: "🎨", title: "We Design Your Brand", description: "Custom resource page, email funnel, and visual identity built for you." },
  { number: "03", icon: "🚀", title: "We Launch", description: "Go live within 7–14 days. Everything tested, optimised, and ready." },
  { number: "04", icon: "📊", title: "We Grow Together", description: "Monthly reporting, strategy updates, and ongoing management." },
];

export const TESTIMONIALS = [
  {
    quote: "I was worried and confused about using Facebook as a funnel to OnlyFans safely and my account was dormant but Velvety changed that for me. I've improved greatly and my income is now steady.",
    name: "Jade C.",
    handle: "OnlyFans Creator",
    initial: "J",
    color: "#C79A9A",
    stars: 4,
  },
  {
    quote: "I was not sure about SEO mattering for creators like me. In about five weeks my page was ranking and I had 95+ new subscribers from organic search alone.",
    name: "Moxie P.",
    handle: "Fansly Creator",
    initial: "M",
    color: "#A97878",
    stars: 4,
  },
  {
    quote: "I love my resource page so much. Velvety built a perfect resource page for me and honestly it's the most professional thing in my business. Prospective fans immediately take me more seriously.",
    name: "Cataleya T.",
    handle: "Multi-Platform Creator",
    initial: "C",
    color: "#A07060",
    stars: 5,
  },
];

export const FAQS = [
  {
    question: "Is this legal and discreet?",
    answer: "Yes. All our services are FOSTA/SESTA and EU DSA compliant. We never share client information and work with full discretion.",
  },
  {
    question: "How long does setup take?",
    answer: "Most resource pages are live within 7 days. Full brand packages including email automation take 10–14 days.",
  },
  {
    question: "Do I own my email list?",
    answer: "Absolutely. Your list is exported and owned by you at all times. We help you build it — you keep it forever.",
  },
  {
    question: "Which platforms do you support?",
    answer: "OnlyFans, Fansly, AllAccessFans, Throne, Patreon, and any other creator subscription platform.",
  },
  {
    question: "What if I already have a resource page?",
    answer: "We can audit and optimise your existing page, or rebuild from scratch — whatever serves you better.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No. Our management plans are month-to-month. You can cancel anytime with 30 days notice.",
  },
];
