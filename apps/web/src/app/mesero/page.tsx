"use client";

import AppShell from "@/components/ui/AppShell/AppShell";

export default function MeseroPage() {
return (
<AppShell mode="mesero">
<div className="p-[var(--spacing-lg)]">
    <h1 className="text-2xl font-bold text-[var(--color-text)]">
        Panel de mesero
    </h1>
    <p className="mt-2 text-[var(--color-text-secondary)]">
        Bienvenido al panel de mesero de CowPay.
    </p>
</div>
</AppShell>
);
}