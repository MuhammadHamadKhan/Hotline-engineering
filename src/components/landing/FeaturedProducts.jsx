import { Link } from "react-router-dom";
import Container from "../common/Container";
import { Reveal, Stagger, StaggerItem } from "../common/Reveal.jsx";
import { products } from "../../data/products";

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

function ProductCard({ slug, name, category, shortDescription, image }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <Link
        to={`/product/${slug}`}
        aria-label={`View details for ${name}`}
        className="relative block aspect-[4/3] overflow-hidden bg-soft focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
      >
        {image ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-2 text-center text-xs text-muted sm:px-4 sm:text-sm">
            Product image coming soon
          </div>
        )}
        <span className="absolute left-2 top-2 max-w-[85%] truncate rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-semibold text-primary shadow-sm sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs">
          {category}
        </span>
        <span className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-ink shadow-md transition-colors group-hover:bg-accent group-hover:text-white sm:bottom-4 sm:right-4 sm:h-10 sm:w-10">
          <ArrowIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-3 sm:p-6">
        <h3 className="line-clamp-2 font-heading text-sm font-semibold leading-snug text-ink sm:line-clamp-none sm:text-xl lg:text-2xl">
          {name}
        </h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-xs leading-relaxed text-muted sm:mt-2 sm:line-clamp-none sm:text-sm">
          {shortDescription}
        </p>
        <Link
          to={`/product/${slug}`}
          className="mt-3 inline-flex w-fit items-center gap-1.5 border-b border-accent pb-0.5 text-xs font-semibold text-primary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:mt-5 sm:gap-2 sm:pb-1 sm:text-sm"
        >
          View details
          <span className="sr-only"> for {name}</span>
          <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
        </Link>
      </div>
    </article>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="featured" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
              Our equipment
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              Featured machines
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Explore equipment selected for busy kitchens, bakeries and food
              production businesses.
            </p>
          </Reveal>
          <a
            href="/#products"
            className="inline-flex w-fit items-center gap-2 font-semibold text-primary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Browse categories
            <ArrowIcon />
          </a>
        </div>

        <Stagger className="mt-10 grid grid-cols-2 items-stretch gap-3 sm:gap-5 lg:mt-12 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <StaggerItem key={product.slug} className="h-full">
              <ProductCard {...product} />
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-8 text-center text-xs text-muted">
          Category images are illustrative; product-specific photos and specifications can be added as they become available.
        </p>
      </Container>
    </section>
  );
}
