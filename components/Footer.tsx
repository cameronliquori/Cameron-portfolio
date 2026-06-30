import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-page mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-small text-ink-muted">
          Cameron Liquori — Content Designer
        </p>
        <div className="flex items-center gap-10">
          <a
            href="mailto:hello@cameronliquori.com"
            className="text-small text-ink-muted hover:text-ink transition-colors duration-200 ease-smooth"
          >
            Email
          </a>
          <a
            href="https://linkedin.com"
            className="text-small text-ink-muted hover:text-ink transition-colors duration-200 ease-smooth"
          >
            LinkedIn
          </a>
          <Link
            href="/about"
            className="text-small text-ink-muted hover:text-ink transition-colors duration-200 ease-smooth"
          >
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
