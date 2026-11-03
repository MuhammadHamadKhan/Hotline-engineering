import Container from "../common/Container";

const CLIENT_LOGO_1 = "https://medatechindustries.com/wp-content/uploads/2025/05/3-scaled.png";
const CLIENT_LOGO_2 = "https://medatechindustries.com/wp-content/uploads/2025/05/PSD-scaled.png";
const CLIENT_LOGO_3 = "https://medatechindustries.com/wp-content/uploads/2026/07/Ahmad-sweets-scaled.png";
const CLIENT_LOGO_4 = "https://medatechindustries.com/wp-content/uploads/2025/05/12-scaled.png";
const CLIENT_LOGO_5 = "https://medatechindustries.com/wp-content/uploads/2025/05/11-scaled.png";
const CLIENT_LOGO_6 = "https://medatechindustries.com/wp-content/uploads/2026/09/cheezious-scaled.png";
const CLIENT_LOGO_7 = "https://medatechindustries.com/wp-content/uploads/2026/07/Royal-Kulfi-F-scaled.png";
const CLIENT_LOGO_8 = "https://medatechindustries.com/wp-content/uploads/2025/05/5-scaled.png";

const clients = [
  { name: "Client One", logo: CLIENT_LOGO_1 },
  { name: "Client Two", logo: CLIENT_LOGO_2 },
  { name: "Client Three", logo: CLIENT_LOGO_3 },
  { name: "Client Four", logo: CLIENT_LOGO_4 },
  { name: "Client Five", logo: CLIENT_LOGO_5 },
  { name: "Client Six", logo: CLIENT_LOGO_6 },
  { name: "Client Seven", logo: CLIENT_LOGO_7 },
  { name: "Client Eight", logo: CLIENT_LOGO_8 },
];

export default function Clients() {
  // Duplicate the array to create a seamless infinite loop effect
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className=" py-12 sm:py-16 lg:py-20 overflow-hidden">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            Trusted by Businesses Like Yours
          </h2>
          <p className="mt-3 text-base text-muted sm:text-lg">
            Bakeries, sweet shops and restaurant chains run their kitchens with our machines.
          </p>
        </div>
      </Container>

      {/* Auto-scrolling Marquee Track (Mobile) / Responsive Grid (Tablet & Desktop) */}
      <div className="relative mt-10 w-full lg:mt-12">
        {/* Subtle gradient fade edges on mobile for a polished look */}
        <div className="absolute left-0 inset-y-0 w-12 bg-gradient-to-r from-soft to-transparent z-10 pointer-events-none sm:hidden" />
        <div className="absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-soft to-transparent z-10 pointer-events-none sm:hidden" />

        {/* Mobile: Infinite Auto-scroll | Tablet & Up: Clean Grid */}
        <div className="flex sm:hidden overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 animate-marquee py-2 px-4">
            {duplicatedClients.map(({ name, logo }, index) => (
              <div
                key={`${name}-${index}`}
                className="flex h-28 w-40 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-white p-4 shadow-xs"
              >
                {logo ? (
                  <img
                    src={logo}
                    alt={name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="text-center text-xs font-medium text-muted">{name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tablet & Desktop Grid Layout */}
        <Container className="hidden sm:block">
          <div className="grid grid-cols-3 gap-5 lg:grid-cols-4 lg:gap-6">
            {clients.map(({ name, logo }) => (
              <div
                key={name}
                className="flex h-32 items-center justify-center rounded-xl border border-border bg-white p-5 shadow-xs transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                {logo ? (
                  <img
                    src={logo}
                    alt={name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="text-center text-sm font-medium text-muted">{name}</span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Inline Keyframes for smooth continuous marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}