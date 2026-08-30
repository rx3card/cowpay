"use client";

import AppShell from "@/components/ui/AppShell/AppShell";

export default function PerfilPage() {

return (
<AppShell mode="comensal">
<div className="p-[var(--spacing-lg)]">
    <h1 className="text-2xl font-bold text-[var(--color-text)]">
        Perfil
    </h1>
    <p className="mt-2 text-[var(--color-text-secondary)]">
        Información y configuración de tu perfil.
    </p>
</div>
</AppShell>
);
}