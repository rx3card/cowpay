"use client";

import AppShell from "@/components/ui/AppShell/AppShell";

export default function HistorialPage() {

return (
<AppShell mode="cocina">
<div className="p-[var(--spacing-lg)]">
    <h1 className="text-2xl font-bold text-[var(--color-text)]">
        Historial
    </h1>
    <p className="mt-2 text-[var(--color-text-secondary)]">
        Consulta los pedidos preparados anteriormente.
    </p>
</div>
</AppShell>
);
}