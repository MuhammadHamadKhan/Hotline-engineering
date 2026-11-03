import Container from "../common/Container";
import { Reveal, Stagger, StaggerItem } from "../common/Reveal.jsx";
import imageSweets from "../../assets/images/sweets-machinery.jpg";
import imageBakery from "../../assets/images/bakery-machinery.jpg";
import imageRestaurant from "../../assets/images/restaurant-machinery.jpg";
import imagePizzeria from "../../assets/images/pizzeria-machinery.jpg";

const categories = [
  {
    name: "Sweets Machinery",
    description: "Machines for rasgulla, gulab jamun, barfi, jalebi and other sweets.",
    image: "https://medatechindustries.com/wp-content/uploads/2024/02/sweets-final-1-scaled-1536x1536.jpg",
  },
  {
    name: "Bakery Machinery",
    description: "Dough dividers, sheeters, mixers and fillers for daily baking.",
    image: "https://medatechindustries.com/wp-content/uploads/2024/02/Bakery-final-scaled-1536x1536.jpg",
  },
  {
    name: "Restaurant Machinery",
    description: "Choppers, slicers and dough machines for busy restaurant kitchens.",
    image: "https://medatechindustries.com/wp-content/uploads/2024/02/reastraut-final-scaled-1536x1536.jpg",
  },
  {
    name: "Pizzeria Machinery",
    description: "Dough sheeters and prep machines for pizza makers.",
    image: "https://medatechindustries.com/wp-content/uploads/2024/02/pizzeria-final-scaled-1536x1536.jpg",
  },
];

function CategoryCard({ name, description, image }) {
  return (
    <article className="group flex h-full flex-col items-center rounded-2xl border border-border bg-white px-3 py-5 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:px-5 sm:py-7">
      <div className="mb-4 aspect-square w-24 overflow-hidden rounded-full bg-soft ring-4 ring-soft transition duration-300 group-hover:ring-tint sm:mb-6 sm:w-40">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="font-heading text-base font-semibold leading-snug text-ink sm:text-xl lg:text-2xl">
        {name}
      </h3>
      <p className="mt-2 line-clamp-3 max-w-xs text-xs leading-relaxed text-muted sm:min-h-12 sm:line-clamp-none sm:text-sm">
        {description}
      </p>
      <a
        href="/#featured"
        className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold text-primary transition-colors group-hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:gap-2 sm:pt-5 sm:text-sm"
      >
        View machines
        <svg
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 0 1 .75-.75h10.69L10.72 5.53a.75.75 0 1 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H3.75A.75.75 0 0 1 3 10Z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </article>
  );
}
export default function Categories() {
  return (
    <section id="products" className="scroll-mt-20 bg-soft py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
            Explore our range
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Equipment for every kind of kitchen
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Find the right machinery for your business, from sweet making and baking to restaurant and pizza preparation.
          </p>
        </Reveal>

        <Stagger
          direction="up"
          className="mt-10 grid grid-cols-2 items-stretch gap-3 sm:gap-5 lg:mt-14 lg:grid-cols-4 lg:gap-6"
        >
          {categories.map((category) => (
            <StaggerItem key={category.name} className="h-full">
              <CategoryCard {...category} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}