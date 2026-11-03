import Container from "../common/Container";

function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.69L10.72 5.53a.75.75 0 1 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H3.75A.75.75 0 0 1 3 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// Simple line icons. Each one is the inside of an <svg> (24 x 24).
const icons = {
  catalog: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M8 13h8M8 17h8" />
    </>
  ),
  maintenance: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  parts: (
    <>
      <path d="M16.5 9.4 7.5 4.21M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
    </>
  ),
  offers: (
    <>
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <path d="M7 7h.01" />
    </>
  ),
};

// Change the text to the client's real services.
const services = [
  {
    icon: "catalog",
    title: "Catalogs",
    description: "Product sheets and user manuals with all the details of each machine.",
    linkLabel: "View catalogs",
    href: "/#contact",
  },
  {
    icon: "maintenance",
    title: "Maintenance Service",
    description: "Our team comes to your kitchen for repairs and checks. Available for customers in Pakistan.",
    linkLabel: "Book a visit",
    href: "/#contact",
  },
  {
    icon: "parts",
    title: "Spare Parts",
    description: "Order original spare parts directly from us. Available for customers and dealers worldwide.",
    linkLabel: "Ask for a part",
    href: "/#contact",
  },
  {
    icon: "offers",
    title: "Special Offers",
    description: "Refurbished machines in good working condition at a lower price.",
    linkLabel: "See offers",
    href: "/#contact",
  },
];

function ServiceCard({ icon, title, description, linkLabel = "Learn More", href }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl sm:p-7">
      {/* Top subtle accent bar that highlights on hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon Badge with dynamic hover color transition */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tint text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white sm:h-14 sm:w-14">
        <svg
          className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icons[icon]}
        </svg>
      </div>

      {/* Card Title */}
      <h3 className="mt-5 font-heading text-lg font-bold tracking-tight text-ink sm:text-xl">
        {title}
      </h3>

      {/* Card Description */}
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted line-clamp-3 sm:line-clamp-4">
        {description}
      </p>

      {/* Action Footer */}
      <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
        <a
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span>{linkLabel}</span>
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-12 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
            After-sales support
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            We Stay With You After the Sale
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted sm:mt-4 sm:text-lg">
            Manuals, repairs and spare parts, so your machines keep working year after year.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 items-stretch gap-3 sm:mt-10 sm:gap-5 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}