import type { ReactNode } from "react";

type EmptyStateProps = {
  children: ReactNode;
};

function EmptyState({ children }: EmptyStateProps) {
  const emptyStateStyle =
    "p-[var(--spacing-xl)] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[8px] text-[var(--color-text)] text-center flex justify-center items-center";
  const contentStyle =
    "flex flex-col items-center gap-[var(--spacing-md)]";

  return (
    <div className={emptyStateStyle}>
      <div className={contentStyle}>
        {children}
      </div>
    </div>
  );
}

export default EmptyState;