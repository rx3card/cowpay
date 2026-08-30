"use client";
import AppShell from "@/components/ui/AppShell/AppShell";

export default function ComensalPague(){
return(
<AppShell mode="comensal">
<div className="p-[var(--spacing-lg)]">
<h1 className="text-2xl font-bold text-[var(--color-text)]">
    Inicio
</h1>
<p className="mt-2  text-[var(--color-text-secondary)]">
    Bienvenido a CowPay. Explora restaurantes y descubre nuevos platos.
</p>
</div>
</AppShell>
);
}