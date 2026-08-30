"use client";

import AppShell from "@/components/ui/AppShell/AppShell";

export default function MesasPage() {
return (
<AppShell mode="mesero">
<div className="p-[var(--spacing-lg)]">
    <h1 className="text-2xl font-bold text-[var(--color-text)]">
        Mesas
    </h1>
    <p className="mt-2 text-[var(--color-text-secondary)]">
        Gestión y visualización de las mesas.
    </p>
</div>
</AppShell>
);
}