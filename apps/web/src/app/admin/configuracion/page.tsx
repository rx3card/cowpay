"use client";

import AppShell from "@/components/ui/AppShell/AppShell";

export default function ConfigPage(){
return(
<AppShell mode="admin">
<div className="p-[var(--spacing-lg)]">
    <h1 className="text-2xl font-bold text-[var(--color-text)]">
        Configuración
    </h1>
    <p className="mt-2 text-[var(--color-text-secondary)]">
        Configuración del restaurante y del sistema.
    </p>
</div>
</AppShell>
);
}