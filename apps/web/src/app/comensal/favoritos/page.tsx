"use client";

import AppShell from "@/components/ui/AppShell/AppShell";

export default function FavoritosPage() {
return (
<AppShell mode="comensal">
<div className="p-[var(--spacing-lg)]">
    <h1 className="text-2xl font-bold text-[var(--color-text)]">
        Favoritos
    </h1>
    <p className="mt-2 text-[var(--color-text-secondary)]">
        Aquí encontrarás tus restaurantes y platos favoritos.
    </p>
</div>
</AppShell>
);
}