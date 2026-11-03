// The text side next to the photo: name, quick facts and buttons
const WHATSAPP = "923000000000"; // country code + number, no + or spaces

export default function ProductInfo({ product }) {
  const { name, category, shortDescription, quickFacts, catalog } = product;

  return (
    <div>
      <p className="text-sm font-medium text-primary">{category}</p>
      <h1 className="mt-1 font-heading text-2xl font-bold leading-tight text-ink sm:text-3xl lg:text-4xl">
        {name}
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-lg">{shortDescription}</p>

      {quickFacts && quickFacts.length > 0 && (
        <dl className="mt-5 rounded-xl border border-border bg-soft px-4 sm:mt-6 sm:px-5">
          {quickFacts.map(({ label, value }) => (
            <div
              key={label}
              className="flex items-baseline justify-between gap-4 border-b border-border py-3 last:border-b-0"
            >
              <dt className="text-sm text-muted">{label}</dt>
              <dd className="text-right text-sm font-semibold text-ink sm:text-base">{value}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row">
        <a
          href="#quote"
          className="rounded-lg bg-accent px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Request a Quote
        </a>
        {catalog && (
          <a
            href={catalog}
            download
            className="rounded-lg border-2 border-ink px-6 py-2.5 text-center text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Download Catalog
          </a>
        )}
      </div>

      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hello, I am interested in the ${name}.`)}`}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-sm font-semibold text-primary transition-colors hover:text-accent"
      >
        Or ask a question on WhatsApp
      </a>
    </div>
  );
}