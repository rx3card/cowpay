"use client";

import AppShell from "@/components/ui/AppShell/AppShell";

export default function MenuPage() {

return (
<AppShell mode="cocina">
<div className="p-[var(--spacing-lg)]">
    <h1 className="text-2xl font-bold text-[var(--color-text)]">
        Menú
    </h1>
    <p className="mt-2 text-[var(--color-text-secondary)]">
        Consulta los platos disponibles y su estado.
    </p>
</div>
</AppShell>
);
}