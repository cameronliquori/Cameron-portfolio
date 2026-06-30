import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles = {
  primary:
    "bg-sage-400 text-ink hover:bg-sage-600 hover:text-stone-50",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/40",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-4 text-small font-medium transition-colors duration-200 ease-smooth";

export default function Button({
  variant = "primary",
  className = "",
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
