// Change this to the client's real WhatsApp number (country code + number, no + or spaces)
const WHATSAPP = "923000000000";

// A bar fixed at the bottom of the screen on phones and tablets.
// It is hidden on desktop. Put it after the Footer in ProductDetailPage.
export default function MobileQuoteBar({ name }) {
  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t border-border bg-white px-4 pt-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] lg:hidden"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <a
          href="#quote"
          className="rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Get a Quote
        </a>
        <a
          href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hello, I am interested in the ${name}.`)}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border-2 border-ink px-4 py-2 text-center text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          WhatsApp
        </a>
      </div>

      {/* Empty space at the very bottom, so the bar never covers the end of the footer */}
      <div className="h-[4.5rem] lg:hidden" aria-hidden="true" />
    </>
  );
}