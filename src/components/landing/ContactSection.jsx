import { useState } from "react";
import Container from "../common/Container";
import { products } from "../../data/products";

// Change these to the client's real details
const PHONE = "+92 300 0000000";
const EMAIL = "info@yourcompany.com";
const ADDRESS = "Street name, City, Country";
const HOURS = "Mon to Sat, 9:00 am to 6:00 pm";
const WHATSAPP = "923000000000"; // country code + number, no + or spaces

// Where the form sends its messages.
// Option 1: paste a form service address here (for example from formspree.io).
// Option 2: leave it empty and the visitor's email app opens with the message filled in.
const FORM_ENDPOINT = "";

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

function InfoRow({ icon, label, value, href }) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tint text-accent sm:h-11 sm:w-11">
        <svg
          className="h-5 w-5"
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
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-muted sm:text-sm">{label}</span>
        <span className="block break-words text-sm font-semibold text-ink sm:text-base">{value}</span>
      </span>
    </>
  );

  return href ? (
    <a href={href} className="flex items-center gap-3 transition-colors hover:text-accent sm:gap-4">
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-3 sm:gap-4">{content}</div>
  );
}

const inputClass =
  "w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 sm:text-base";

function Field({ label, id, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactSection() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    machine: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, sending, sent, error

  const update = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();

    // No form service set: open the visitor's email app with the message filled in
    if (!FORM_ENDPOINT) {
      const body = [
        `Name: ${values.name}`,
        `Phone: ${values.phone}`,
        `Email: ${values.email}`,
        `Country: ${values.country}`,
        `Interested in: ${values.machine || "Not sure yet"}`,
        "",
        values.message,
      ].join("\n");
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        "Quote request from website"
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
      setValues({ name: "", phone: "", email: "", country: "", machine: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-white py-12 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Contact us</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Tell Us What You Need
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted sm:mt-4 sm:text-lg">
            Send us your requirements and our team will reply with advice and a quote.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 lg:mt-14 lg:grid-cols-5 lg:gap-8">
          {/* Form: first on phones, right side on desktop */}
          <form
            onSubmit={handleSubmit}
            className="order-1 rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-8 lg:order-2 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <Field label="Full name" id="name">
                <input id="name" name="name" required value={values.name} onChange={update} autoComplete="name" className={inputClass} placeholder="Your name" />
              </Field>
              <Field label="Phone or WhatsApp" id="phone">
                <input id="phone" name="phone" type="tel" required value={values.phone} onChange={update} autoComplete="tel" className={inputClass} placeholder="+92 300 0000000" />
              </Field>
              <Field label="Email (optional)" id="email">
                <input id="email" name="email" type="email" value={values.email} onChange={update} autoComplete="email" className={inputClass} placeholder="you@example.com" />
              </Field>
              <Field label="Country" id="country">
                <input id="country" name="country" required value={values.country} onChange={update} autoComplete="country-name" className={inputClass} placeholder="Your country" />
              </Field>
            </div>

            <div className="mt-4 sm:mt-5">
              <Field label="Machine you are interested in" id="machine">
                <select id="machine" name="machine" value={values.machine} onChange={update} className={inputClass}>
                  <option value="">Not sure yet</option>
                  {products.map((product) => (
                    <option key={product.slug} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-4 sm:mt-5">
              <Field label="Message" id="message">
                <textarea id="message" name="message" required rows={4} value={values.message} onChange={update} className={`${inputClass} resize-y`} placeholder="Tell us about your business and what you need" />
              </Field>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-5 w-full rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60 sm:mt-6 sm:w-auto"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            <div aria-live="polite">
              {status === "sent" && (
                <p className="mt-4 rounded-lg bg-tint px-4 py-3 text-sm text-ink">
                  {FORM_ENDPOINT
                    ? "Thank you. Your message was sent and we will contact you soon."
                    : "Your email app should open with your message. Please press send there to finish."}
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 rounded-lg border border-border bg-soft px-4 py-3 text-sm text-ink">
                  Sorry, the message could not be sent. Please try again or contact us by phone or WhatsApp.
                </p>
              )}
            </div>
          </form>

          {/* Details: below the form on phones, left side on desktop */}
          <div className="order-2 flex flex-col rounded-2xl border border-border bg-soft p-5 sm:p-8 lg:order-1 lg:col-span-2">
            <h3 className="font-heading text-xl font-semibold text-ink sm:text-2xl">
              Prefer to talk?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
              Call, message or visit us. We are happy to help you choose the right machine.
            </p>

            <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
              <InfoRow icon="phone" label="Phone" value={PHONE} href={`tel:${PHONE.replace(/\s/g, "")}`} />
              <InfoRow icon="mail" label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <InfoRow icon="pin" label="Address" value={ADDRESS} />
              <InfoRow icon="clock" label="Working hours" value={HOURS} />
            </div>

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg border-2 border-ink px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:mt-auto sm:text-base"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}