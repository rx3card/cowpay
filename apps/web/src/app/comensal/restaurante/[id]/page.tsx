"use client";

import Link from "next/link";
import { useState } from "react";
import AppShell from "@/components/ui/AppShell/AppShell";
import Button from "@/components/ui/Button/Button";
import Card from "@/components/ui/Card/Card";
import EmptyState from "@/components/ui/Empty-state/EmptyState";
import CardPlato from "@/components/ui/Card-plato/CardPlato";

const categories = [
    "Todo",
    "Entradas",
    "Hamburguesas",
    "Bebidas",
    "Postres",
];

// Por ahora no hay platos.
// Más adelante estos datos vendrán del restaurante.

type Dish = {
    id: string;
    img: string;
    name: string;
    descripcion: string;
    price: number;
};
const dishes: Dish[] = [];

function MenuPage() {
const [activeCategory, setActiveCategory] = useState("Todo");

    return (
        <AppShell mode="comensal">
            <div className="min-h-screen bg-[var(--color-background)] pb-[80px]">
                <div className="w-full max-w-[1200px] mx-auto px-[var(--spacing-lg)] py-[var(--spacing-lg)]">
                    {/* ENCABEZADO */}
                    <div className="flex items-center gap-[var(--spacing-md)] mb-[var(--spacing-lg)]">
                        <Link href="/comensal/restaurante">
                            <Button
                                variant="primary"
                                mode="comensal">
                                ←
                            </Button>
                        </Link>
                        <div>
                            <p className="text-[13px] !text-[var(--color-text-secondary)]">
                                Restaurante
                            </p>
                            <h1 className="text-[var(--font-size-title)] font-[700] !text-[var(--color-text)]">
                                Menú
                            </h1>
                        </div>
                    </div>
                    {/* CATEGORÍAS */}
                    <div className="flex items-center gap-[var(--spacing-sm)] overflow-x-auto pb-[var(--spacing-sm)] mb-[var(--spacing-lg)]">
                        {categories.map((category) => {
                            const isActive = activeCategory === category;
                            return (
                                <Button
                                    key={category}
                                    variant={isActive ? "primary" : "secondary"}
                                    mode="comensal"
                                    onClick={() => setActiveCategory(category)}>
                                    {category}
                                </Button>
                            );
                        })}
                    </div>
                    {/* CONTENIDO DEL MENÚ */}
                    <div className="flex flex-col gap-[var(--spacing-xl)]">
                        {/* TODO */}
                        {activeCategory === "Todo" && (
                            <>
                                <MenuSection title="Entradas" />
                                <MenuSection title="Hamburguesas" />
                                <MenuSection title="Bebidas" />
                                <MenuSection title="Postres" />
                            </>
                        )}
                        {/* ENTRADAS */}
                        {activeCategory === "Entradas" && (
                            <MenuSection title="Entradas" />
                        )}
                        {/* HAMBURGUESAS */}
                        {activeCategory === "Hamburguesas" && (
                            <MenuSection title="Hamburguesas" />
                        )}
                        {/* BEBIDAS */}
                        {activeCategory === "Bebidas" && (
                            <MenuSection title="Bebidas" />
                        )}
                        {/* POSTRES */}
                        {activeCategory === "Postres" && (
                            <MenuSection title="Postres" />
                        )}
                    </div>
                </div>
                {/* BARRA INFERIOR DEL PEDIDO */}
                <div className="fixed bottom-[64px] lg:bottom-0 left-0 right-0 z-30 bg-[var(--color-surface)] border-t border-[var(--color-border)] px-[var(--spacing-lg)] py-[var(--spacing-sm)]">
                    <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between gap-[var(--spacing-md)]">
                        <div>
                            <p className="text-[12px] !text-[var(--color-text-secondary)]">
                                Tu pedido
                            </p>
                            <p className="text-[14px] font-[700] !text-[var(--color-text)]">
                                Aún no has agregado productos
                            </p>
                        </div>
                        <Link href="/comensal/carrito">
                        <Button
                            variant="primary"
                            mode="comensal">
                            Ver mi pedido
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}
type MenuSectionProps = {
    title: string;
};
function MenuSection({ title }: MenuSectionProps) {
    const hasDishes = dishes.length > 0;
    return (
        <section>
            <h2 className="text-[18px] font-[700] !text-[var(--color-text)] mb-[var(--spacing-md)]">
                {title}
            </h2>
            {hasDishes ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-md)]">
                    {/* Aquí aparecerán los platos del restaurante */}
                    {dishes.map((dish) => (
                        <CardPlato
                            key={dish.id}
                            {...dish}/>
                    ))}
                </div>
            ) : (
                <Card>
                    <EmptyState>
                        <p className="text-[14px] !text-[var(--color-text-secondary)]">
                            Los productos de esta categoría aparecerán aquí.
                        </p>
                    </EmptyState>
                </Card>
            )}
        </section>
    );
}

export default MenuPage;