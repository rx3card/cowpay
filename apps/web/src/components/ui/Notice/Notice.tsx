import type { ReactNode } from "react";

type NoticeProps = {
  variant: string;
  children: ReactNode;
};

function Notice({ variant, children}: NoticeProps) {
  let noticeStyle = "";
  const styleTotal = "w-fit max-w-full p-[var(--spacing-md)] rounded-[8px]";

  if (variant === "success") {
    noticeStyle =
      "bg-[var(--color-success-light)] !text-[var(--color-success)] border border-[var(--color-success)]";
  }
  if (variant === "warning") {
    noticeStyle =
      "bg-[var(--color-warning-light)] !text-[var(--color-warning)] border border-[var(--color-warning)]";
  }
  if (variant === "error") {
    noticeStyle =
      "bg-[var(--color-error-light)] !text-[var(--color-error)] border border-[var(--color-error)]";
  }
  if (variant === "info") {
    noticeStyle =
      "bg-[var(--color-info-light)] !text-[var(--color-info)] border border-[var(--color-info)]";
  }

  return (
    <div className={`${noticeStyle} ${styleTotal}`}>
      {children}
    </div>
  );
}

export default Notice;