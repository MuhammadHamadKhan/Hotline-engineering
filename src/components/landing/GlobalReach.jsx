import Container from "../common/Container";

// Paste the world map address here (a blank world map, SVG or PNG).
// Local file example: "/images/world-map.svg"  (saved in public/images/)
// Leave it empty ("") and a grey box shows instead.
const WORLD_MAP = "https://img.magnific.com/free-vector/clean-black-world-map-silhouette-style-template-design_1017-46154.jpg?semt=ais_hybrid&w=740&q=80";

// Change these to the client's real numbers
const stats = [
  { value: "25+", label: "Countries served" },
  { value: "1,000+", label: "Machines delivered" },
  { value: "20+", label: "Years of experience" },
];

// Dots on the map. x and y are percentages: x = from the left, y = from the top.
// The positions below are approximate for a standard flat world map.
// If a dot is slightly off on your map, change its x and y a little.
const mapDots = [
  { name: "Canada", x: 22, y: 20 },
  { name: "United Kingdom", x: 50, y: 20 },
  { name: "Pakistan", x: 69, y: 33 },
  { name: "United Arab Emirates", x: 65, y: 37 },
  { name: "Kenya", x: 60, y: 50 },
];

// Country list by region (change to the real countries)
const regions = [
  { name: "Asia", countries: ["Pakistan", "Bangladesh", "Sri Lanka", "Afghanistan"] },
  { name: "Middle East", countries: ["United Arab Emirates", "Saudi Arabia", "Oman", "Qatar"] },
  { name: "Africa", countries: ["Kenya", "Nigeria", "Tanzania", "Ghana"] },
  { name: "Europe and America", countries: ["United Kingdom", "Canada", "Germany", "United States"] },
];

export default function GlobalReach() {
  return (
    <section id="global" className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            We Deliver Around the World
          </h2>
          <p className="mt-3 text-base text-muted sm:text-lg">
            Our machines work in kitchens in many countries, and our team supports
            every order from shipping to service.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {/* Numbers */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-md border-2 border-slate-300 bg-white px-6 py-5"
              >
                <p className="font-heading text-4xl font-bold text-accent">{value}</p>
                <p className="mt-1 text-sm text-muted sm:text-base">{label}</p>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-md border-2 border-slate-300">
              {WORLD_MAP ? (
                <img
                  src={WORLD_MAP}
                  alt="World map showing the countries we deliver to"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain p-2"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-muted">
                  Add your world map (set WORLD_MAP at the top of GlobalReach.jsx)
                </div>
              )}

              {mapDots.map(({ name, x, y }) => (
                <span
                  key={name}
                  title={name}
                  className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-accent shadow"
                  style={{ left: `${x}%`, top: `${y}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Countries by region */}
        <div className="max-lg:hidden mt-10 grid gap-6 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
{regions.map(({ name, countries }) => (
            <div key={name}>
              <h3 className="font-heading text-lg font-semibold text-ink">{name}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted sm:text-base">
                {countries.map((country) => (
                  <li key={country}>{country}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}