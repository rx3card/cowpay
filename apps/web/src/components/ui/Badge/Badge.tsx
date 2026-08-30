import type { ReactNode } from "react";

type BadgeProps = {
  variant: string;
  children: ReactNode;
};

function Badge({ variant, children }: BadgeProps) {
  let badgeStyle = "";
  const styleTotal =
    "font-[var(--font-family)] text-[var(--font-size-small)] font-[var(--font-weight-small)] rounded-[999px] px-[var(--spacing-sm)] py-[var(--spacing-xs)] mt-[var(--spacing-xs)]";

  if (variant === "success") {
    badgeStyle =
      "bg-[var(--color-success-light)] !text-[var(--color-success)] border border-[var(--color-success)]";
  }
  if (variant === "warning") {
    badgeStyle =
      "bg-[var(--color-warning-light)] !text-[var(--color-warning)] border border-[var(--color-warning)]";
  }
  if (variant === "error") {
    badgeStyle =
      "bg-[var(--color-error-light)] !text-[var(--color-error)] border border-[var(--color-error)]";
  }
  if (variant === "info") {
    badgeStyle =
      "bg-[var(--color-info-light)] !text-[var(--color-info)] border border-[var(--color-info)]";
  }

  return (
    <span className={`${badgeStyle} ${styleTotal}`}>
      {children}
    </span>
  );
}

export default Badge;