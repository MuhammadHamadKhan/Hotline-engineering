function Check() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// The longer description and the list of features.
// Each part is hidden when the machine has no data for it.
export default function ProductDetails({ description, features }) {
  const hasFeatures = features && features.length > 0;

  return (
    <div>
      {description && (
        <>
          <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">About this machine</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{description}</p>
        </>
      )}

      {hasFeatures && (
        <>
          <h2
            className={`font-heading text-xl font-bold text-ink sm:text-2xl ${
              description ? "mt-8 sm:mt-10" : ""
            }`}
          >
            Features
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink sm:text-base"
              >
                <Check />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}