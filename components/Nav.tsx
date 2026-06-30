import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Selected work" },
  { href: "/about", label: "About me" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-stone/90 backdrop-blur-sm border-b border-line">
      <div className="max-w-page mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-tight"
        >
          Cameron Liquori
        </Link>
        <nav className="flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-small text-ink-muted hover:text-ink transition-colors duration-200 ease-smooth"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
