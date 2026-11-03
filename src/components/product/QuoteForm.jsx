import { useState } from "react";

// Change this to the client's real email
const EMAIL = "info@yourcompany.com";

// Where the form sends its messages (same idea as the Contact section).
// Option 1: paste a form service address here (for example from formspree.io).
// Option 2: leave it empty and the visitor's email app opens with the message filled in.
const FORM_ENDPOINT = "";

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

export default function QuoteForm({ product }) {
  const emptyValues = {
    name: "",
    phone: "",
    email: "",
    country: "",
    message: `I am interested in the ${product.name}. Please send me a quote.`,
  };

  const [values, setValues] = useState(emptyValues);
  const [status, setStatus] = useState("idle"); // idle, sending, sent, error

  const update = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { ...values, machine: product.name };

    // No form service set: open the visitor's email app with the message filled in
    if (!FORM_ENDPOINT) {
      const body = [
        `Machine: ${data.machine}`,
        `Name: ${data.name}`,
        `Phone: ${data.phone}`,
        `Email: ${data.email}`,
        `Country: ${data.country}`,
        "",
        data.message,
      ].join("\n");
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        `Quote request: ${product.name}`
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
      setValues(emptyValues);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="quote" className="mt-10 scroll-mt-24 border-t border-border pt-8 lg:mt-14 lg:pt-12">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
            Request a Quote
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
            Fill in your details and we will send you the price and delivery information.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-6 rounded-2xl border border-border bg-white p-5 shadow-sm sm:mt-8 sm:p-8"
        >
          {/* The machine is already chosen, so the visitor cannot change it by mistake */}
          <div className="mb-5 rounded-lg bg-tint px-4 py-3 sm:mb-6">
            <p className="text-xs text-muted sm:text-sm">Machine</p>
            <p className="text-sm font-semibold text-ink sm:text-base">{product.name}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            <Field label="Full name" id="quote-name">
              <input id="quote-name" name="name" required value={values.name} onChange={update} autoComplete="name" className={inputClass} placeholder="Your name" />
            </Field>
            <Field label="Phone or WhatsApp" id="quote-phone">
              <input id="quote-phone" name="phone" type="tel" required value={values.phone} onChange={update} autoComplete="tel" className={inputClass} placeholder="+92 300 0000000" />
            </Field>
            <Field label="Email (optional)" id="quote-email">
              <input id="quote-email" name="email" type="email" value={values.email} onChange={update} autoComplete="email" className={inputClass} placeholder="you@example.com" />
            </Field>
            <Field label="Country" id="quote-country">
              <input id="quote-country" name="country" required value={values.country} onChange={update} autoComplete="country-name" className={inputClass} placeholder="Your country" />
            </Field>
          </div>

          <div className="mt-4 sm:mt-5">
            <Field label="Message" id="quote-message">
              <textarea id="quote-message" name="message" required rows={4} value={values.message} onChange={update} className={`${inputClass} resize-y`} />
            </Field>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-5 w-full rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60 sm:mt-6 sm:w-auto"
          >
            {status === "sending" ? "Sending..." : "Send Quote Request"}
          </button>

          <div aria-live="polite">
            {status === "sent" && (
              <p className="mt-4 rounded-lg bg-tint px-4 py-3 text-sm text-ink">
                {FORM_ENDPOINT
                  ? "Thank you. Your request was sent and we will contact you soon."
                  : "Your email app should open with your request. Please press send there to finish."}
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 rounded-lg border border-border bg-soft px-4 py-3 text-sm text-ink">
                Sorry, the request could not be sent. Please try again or contact us by phone or WhatsApp.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}