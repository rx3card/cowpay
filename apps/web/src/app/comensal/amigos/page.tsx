"use client";
import AppShell from "@/components/ui/AppShell/AppShell";

export default function AmigosPage(){
return(
<AppShell mode="comensal">
<div className="p-[var(--spacing-lg)]">
<h1 className="text-2xl font-bold text-[var(--color-text)]">
    Amigos
</h1>
<p className="mt-2  text-[var(--color-text-secondary)]">
    Consulta y gestiona tus amigos en CowPay.
</p>
</div>
</AppShell>
);
}