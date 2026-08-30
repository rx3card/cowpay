"use client";

import type { ReactNode } from "react";

type ButtonProps = {
  variant: string;
  mode: string;
  children: ReactNode;
  onClick?: ()=>void;
};

function Button({ variant, mode, children, onClick }: ButtonProps) {

  let buttonStyle = "";
  let baseStyle = "";
  let IsLoading = false;

  baseStyle =
    "font-[var(--font-family)] font-[var(--font-weight-button)] text-[var(--font-size-button)] py-[var(--spacing-sm)] px-[var(--spacing-md)] rounded-[8px] m-[var(--spacing-sm)]";
  if (variant === "primary") {
    if (mode === "comensal") {
      buttonStyle =
        "!text-[var(--color-text-white)] bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)] cursor-pointer transition hover:scale-[1.025] active:scale-[0.975]";
    }
    if (mode === "admin") {
      buttonStyle =
        "!text-[var(--color-text-white)] bg-[var(--admin-primary)] hover:bg-[var(--admin-hover)] active:bg-[var(--admin-active)] cursor-pointer transition hover:scale-[1.025] active:scale-[0.975]";
    }
    if (mode === "mesero") {
      buttonStyle =
        "!text-[var(--color-text-white)] bg-[var(--mesero-primary)] hover:bg-[var(--mesero-hover)] active:bg-[var(--mesero-active)] cursor-pointer transition hover:scale-[1.025] active:scale-[0.975]";
    }
    if (mode === "cocina") {
      buttonStyle =
        "!text-[var(--color-text-white)] bg-[var(--cocina-primary)] hover:bg-[var(--cocina-hover)] active:bg-[var(--cocina-active)] cursor-pointer transition hover:scale-[1.025] active:scale-[0.975]";
    }
  }
  if (variant === "secondary") {
    if (mode === "comensal") {
      buttonStyle =
        "!text-[var(--color-primary)] bg-white border border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] active:bg-[var(--color-primary-hover)] active:!text-[var(--color-text-white)] cursor-pointer transition hover:scale-[1.025] active:scale-[0.975]";
    }
    if (mode === "admin") {
      buttonStyle =
        "!text-[var(--admin-primary)] bg-white border border-[var(--admin-primary)] hover:bg-[var(--admin-light)] active:bg-[var(--admin-hover)] active:!text-[var(--color-text-white)] cursor-pointer transition hover:scale-[1.025] active:scale-[0.975]";
    }
    if (mode === "mesero") {
      buttonStyle =
        "!text-[var(--mesero-primary)] bg-white border border-[var(--mesero-primary)] hover:bg-[var(--mesero-light)] active:bg-[var(--mesero-hover)] active:!text-[var(--color-text-white)] cursor-pointer transition hover:scale-[1.025] active:scale-[0.975]";
    }
    if (mode === "cocina") {
      buttonStyle =
        "!text-[var(--cocina-primary)] bg-white border border-[var(--cocina-primary)] hover:bg-[var(--cocina-light)] active:bg-[var(--cocina-hover)] active:!text-[var(--color-text-white)] cursor-pointer transition hover:scale-[1.025] active:scale-[0.975]";
    }
  }
  if (variant === "danger") {
    buttonStyle =
      "!text-[var(--color-text-white)] bg-[var(--color-error)] hover:bg-[var(--color-error-active)] active:bg-[var(--color-error)] cursor-pointer transition hover:scale-[1.025] active:scale-[0.975]";
  }
  if (variant === "loading") {
    IsLoading = true;
    if (mode === "comensal") {
      buttonStyle = "bg-[var(--color-primary-light)]";
    }
    if (mode === "admin") {
      buttonStyle = "bg-[var(--admin-light)]";
    }
    if (mode === "mesero") {
      buttonStyle = "bg-[var(--mesero-light)]";
    }
    if (mode === "cocina") {
      buttonStyle = "bg-[var(--cocina-light)]";
    }
  }
  return (
    <button
      className={`${baseStyle} ${buttonStyle}`}
      disabled={IsLoading}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;