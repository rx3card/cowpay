"use client";

import AppShell from "@/components/ui/AppShell/AppShell";

export default function TurnoPage() {

return (
<AppShell mode="cocina">
<div className="p-[var(--spacing-lg)]">
    <h1 className="text-2xl font-bold text-[var(--color-text)]">
        Turnos
    </h1>
    <p className="mt-2 text-[var(--color-text-secondary)]">
        Consulta y gestiona los turnos asignados al personal de cocina.
    </p>
</div>
</AppShell>
);
}