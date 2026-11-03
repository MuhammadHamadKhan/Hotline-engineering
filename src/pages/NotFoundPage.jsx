import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white py-16 sm:py-24">
        <Container className="text-center">
          <p className="font-heading text-5xl font-bold text-accent sm:text-6xl">404</p>
          <h1 className="mt-4 font-heading text-2xl font-bold text-ink sm:text-4xl">
            We could not find this page
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            The link may be wrong, or the machine may no longer be listed. You can go back
            and look at all our machines.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="rounded-lg bg-accent px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Back to Home
            </Link>
            <a
              href="/#featured"
              className="rounded-lg border-2 border-ink px-6 py-3 text-center text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              See All Machines
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}