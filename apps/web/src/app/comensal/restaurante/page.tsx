"use client";

import AppShell from "@/components/ui/AppShell/AppShell";
import Card from "@/components/ui/Card/Card";
import Link from "next/link";

export default function RestaurantePage() {
    return (
        <AppShell mode="comensal">
            <div className="p-[var(--spacing-lg)]">
                <h1 className="text-2xl font-bold">
                    Restaurantes
                </h1>
                <p className="mt-2 text-[var(--color-text-secondary)]">
                    Selecciona un restaurante para ver su menú.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-lg)] mt-[var(--spacing-lg)]">
                    <Link href="/comensal/restaurante/1">
                        <Card>
                            <h2 className="text-xl font-semibold">
                                Restaurante de Prueba 1
                            </h2>
                            <p className="mt-2 text-[var(--color-text-secondary)]">
                                Restaurante especializado en comida deliciosa.
                            </p>
                            <p className="mt-4 text-[var(--color-primary)] font-medium">
                                Ver restaurante
                            </p>
                        </Card>
                    </Link>
                    <Link href="/comensal/restaurante/2">
                        <Card>
                            <h2 className="text-xl font-semibold">
                                Restaurante de Prueba 2
                            </h2>
                            <p className="mt-2 text-[var(--color-text-secondary)]">
                                Restaurante con diferentes opciones de comida.
                            </p>
                            <p className="mt-4 text-[var(--color-primary)] font-medium">
                                Ver restaurante
                            </p>
                        </Card>
                    </Link>
                </div>
            </div>
        </AppShell>
    );
}