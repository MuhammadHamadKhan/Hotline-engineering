import { Link } from "react-router-dom";

// The small path at the top: Home / Category / Machine name
export default function Breadcrumb({ category, name }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted sm:text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link to="/" className="transition-colors hover:text-accent">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <a href="/#products" className="transition-colors hover:text-accent">
            {category}
          </a>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="font-medium text-ink">
          {name}
        </li>
      </ol>
    </nav>
  );
}