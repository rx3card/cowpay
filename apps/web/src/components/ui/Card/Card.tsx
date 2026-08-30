import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  const cardStyle =
    "p-[var(--spacing-lg)] bg-[var(--color-surface)] !text-[var(--color-text)] border border-[var(--color-border)] rounded-[16px]";

return <div className={cardStyle}>{children}</div>;
}

export default Card;