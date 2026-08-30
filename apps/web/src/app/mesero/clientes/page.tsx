"use client";

import AppShell from "@/components/ui/AppShell/AppShell";

export default function ClientesPage() {
return (
<AppShell mode="mesero">
<div className="p-[var(--spacing-lg)]">
    <h1 className="text-2xl font-bold text-[var(--color-text)]">
        Clientes
    </h1>
    <p className="mt-2 text-[var(--color-text-secondary)]">
        Gestión y consulta de los clientes.
    </p>
</div>
</AppShell>
);
}