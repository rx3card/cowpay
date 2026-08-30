"use client";

import AppShell from "@/components/ui/AppShell/AppShell";

export default function AdminPage() {
return(
<AppShell mode="admin">
<div className="p-[var(--spacing-lg)]">
    <h1 className="text-2xl font-bold text-[var(--color-text)]">
        Panel de administración
    </h1>
    <p className="mt-2 text-[var(--color-text-secondary)]">
        Bienvenido al panel de administración de CowPay.
    </p>
</div>
</AppShell>
);
}