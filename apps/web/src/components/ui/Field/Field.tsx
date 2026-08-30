"use client";

import type { ChangeEvent, FocusEvent } from "react";

type FieldProps = {
  label?: string;
  placeholder?: string;
  value: string;
  mode: "comensal" | "admin" | "mesero" | "cocina";
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  error?: string;
};

function Field({
  label,
  placeholder,
  value,
  mode,
  required,
  onChange,
  onBlur,
  error,
}: FieldProps) {
  let fieldStyle = "";
  let labelStyle = "";
  let errorStyle = "";

  if (mode === "comensal") {
    fieldStyle =
      "font-[var(--font-family)] w-full px-[var(--spacing-md)] py-[var(--spacing-sm)] border border-[var(--color-border)] rounded-[8px] text-[var(--font-size-body)] focus:border-[var(--color-primary)]";
  }
  if (mode === "admin") {
    fieldStyle =
      "font-[var(--font-family)] w-full px-[var(--spacing-md)] py-[var(--spacing-sm)] border border-[var(--work-border)] rounded-[8px] text-[var(--font-size-body)] focus:border-[var(--admin-primary)]";
  }
  if (mode === "mesero") {
    fieldStyle =
      "font-[var(--font-family)] w-full px-[var(--spacing-md)] py-[var(--spacing-sm)] border border-[var(--work-border)] rounded-[8px] text-[var(--font-size-body)] focus:border-[var(--mesero-primary)]";
  }
  if (mode === "cocina") {
    fieldStyle =
      "font-[var(--font-family)] w-full px-[var(--spacing-md)] py-[var(--spacing-sm)] border border-[var(--work-border)] rounded-[8px] text-[var(--font-size-body)] focus:border-[var(--cocina-primary)]";
  }
  if (error) {
    fieldStyle =
      "font-[var(--font-family)] font-[var(--font-weight-body)] text-[var(--font-size-body)] w-full px-[var(--spacing-md)] py-[var(--spacing-sm)] border border-[var(--color-error-active)] rounded-[8px]";
  }
  labelStyle =
    "font-[var(--font-family)] font-[var(--font-weight-label)] text-[var(--font-size-label)]";
  errorStyle =
    "font-[var(--font-family)] font-[var(--font-weight-error)] text-[var(--font-size-error)] !text-[var(--color-error)]";
  return (
    <div className="flex flex-col gap-[var(--spacing-xs)]">
      <label className={labelStyle}>{label}</label>
      <input
        className={fieldStyle}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
      />

      {error && <p className={errorStyle}>{error}</p>}
    </div>
  );
}
export default Field;