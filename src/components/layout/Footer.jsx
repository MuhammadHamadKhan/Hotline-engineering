import { Link } from "react-router-dom";
import Container from "../common/Container";

// Change these to the client's real details
const COMPANY_NAME = "Your Company";
const ABOUT_TEXT =
  "We make and supply machines for sweet shops, bakeries and restaurants, and support every customer after the sale.";
const PHONE = "+92 300 0000000";
const EMAIL = "info@yourcompany.com";
const ADDRESS = "Street name, City, Country";
const HOURS = "Mon to Sat, 9:00 am to 6:00 pm";
const WHATSAPP = "923000000000"; // country code + number, no + or spaces

// Paste the full page address of each social account.
// Leave it empty ("") and that link is hidden.
const FACEBOOK = "";
const INSTAGRAM = "";
const LINKEDIN = "";
const YOUTUBE = "";

const socials = [
  { name: "Facebook", href: FACEBOOK },
  { name: "Instagram", href: INSTAGRAM },
  { name: "LinkedIn", href: LINKEDIN },
  { name: "YouTube", href: YOUTUBE },
].filter((item) => item.href);

const machineLinks = [
  { label: "Sweets Machinery", href: "/#products" },
  { label: "Bakery Machinery", href: "/#products" },
  { label: "Restaurant Machinery", href: "/#products" },
  { label: "Pizzeria Machinery", href: "/#products" },
];

const supportLinks = [
  { label: "Catalogs", href: "/#services" },
  { label: "Maintenance Service", href: "/#services" },
  { label: "Spare Parts", href: "/#services" },
  { label: "Special Offers", href: "/#services" },
  { label: "Contact Us", href: "/#contact" },
];

const icons = {
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
};

function Icon({ name }) {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-accent sm:h-5 sm:w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

function FooterHeading({ children }) {
  return <h3 className="font-heading text-base font-semibold text-ink sm:text-lg">{children}</h3>;
}

function LinkList({ links }) {
  return (
    <ul className="mt-3 space-y-2.5 sm:mt-4">
      {links.map((item) => (
        <li key={item.label}>
          <a href={item.href} className="text-sm text-muted transition-colors hover:text-accent sm:text-base">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function ContactRow({ icon, children }) {
  return (
    <li className="flex items-start gap-3 text-sm text-muted sm:text-base">
      <Icon name={icon} />
      <span className="min-w-0 break-words">{children}</span>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr] lg:gap-x-10 lg:py-16">
        {/* 1. Company */}
        <div>
          <Link to="/" className="font-heading text-xl font-semibold text-ink sm:text-2xl">
            {COMPANY_NAME}
          </Link>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">{ABOUT_TEXT}</p>

          {/* Quick buttons: phones and tablets only */}
          <div className="mt-5 grid grid-cols-2 gap-3 lg:hidden">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Call us
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border-2 border-ink px-4 py-2 text-center text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              WhatsApp
            </a>
          </div>

          {socials.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {socials.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-lg border border-border bg-white px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 2 and 3. Links: two columns side by side, also on phones */}
        <div className="grid grid-cols-2 gap-6 lg:contents">
          <div>
            <FooterHeading>Our Machines</FooterHeading>
            <LinkList links={machineLinks} />
          </div>
          <div>
            <FooterHeading>Support</FooterHeading>
            <LinkList links={supportLinks} />
          </div>
        </div>

        {/* 4. Contact */}
        <div className="border-t border-border pt-8 lg:border-0 lg:pt-0">
          <FooterHeading>Contact</FooterHeading>
          <ul className="mt-3 space-y-3 sm:mt-4">
            <ContactRow icon="phone">
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="transition-colors hover:text-accent">
                {PHONE}
              </a>
            </ContactRow>
            <ContactRow icon="mail">
              <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-accent">
                {EMAIL}
              </a>
            </ContactRow>
            <ContactRow icon="pin">{ADDRESS}</ContactRow>
            <ContactRow icon="clock">{HOURS}</ContactRow>
          </ul>
        </div>
      </Container>

      {/* Bottom line */}
      <div className="border-t border-border">
        <Container className="flex flex-col items-center gap-1 py-4 text-center text-xs text-muted sm:flex-row sm:justify-between sm:py-5 sm:text-left sm:text-sm">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <a href="#home" className="transition-colors hover:text-accent">
            Back to top
          </a>
        </Container>
      </div>
    </footer>
  );
}