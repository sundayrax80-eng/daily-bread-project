import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
};

const styles = {
  primary: "bg-gold text-chocolate shadow-sm hover:bg-[#b88935]",
  secondary: "border border-forest/30 bg-white text-chocolate hover:bg-sand/40",
  light: "bg-ivory text-chocolate hover:bg-white",
  ghost: "text-chocolate underline-offset-4 hover:underline",
};

export function Button({ href, children, variant = "primary", className, type = "button", onClick }: Props) {
  const classNames = cx(
    "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2",
    styles[variant],
    className,
  );
  if (href) return <Link className={classNames} href={href}>{children}</Link>;
  return <button className={classNames} type={type} onClick={onClick}>{children}</button>;
}
