"use client";

import { useState } from "react";

import AppShell from "@/components/ui/AppShell/AppShell";
import Button from "@/components/ui/Button/Button";

type TipoPago = "mi" | "porcentaje" | "todo";
type FiltroPedido = "todos" | "mio" | "amigos";

type ItemPedido = {
    id: string;
    nombre: string;
    cantidad: number;
    precio: number;
    persona: string;
};

const ITEMS_PEDIDO: ItemPedido[] = [
    {id: "p1",
    nombre: "Pizza clásica",
    cantidad: 1,
    precio: 48300,
    persona: "Tú",},
    {id: "p2",
    nombre: "Gaseosa",
    cantidad: 2,
    precio: 5000,
    persona: "Tú",},
    {id: "p3",
    nombre: "Hamburguesa BBQ",
    cantidad: 1,
    precio: 22000,
    persona: "Carlos",},
];

function formatoCOP(valor: number) {
    return valor.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
    });
}

function CarritoPage() {
    const [tipoPago, setTipoPago] = useState<TipoPago>("mi");
    const [porcentaje, setPorcentaje] = useState<number>(50);
    const [filtroPedido, setFiltroPedido] = useState<FiltroPedido>("todos");

    // TOTAL DE TODA LA CUENTA
    const total = ITEMS_PEDIDO.reduce(
        (acumulado, item) =>
            acumulado + item.precio * item.cantidad,
        0
    );

    // TOTAL DE MIS PRODUCTOS
    const totalMiParte = ITEMS_PEDIDO
        .filter((item) => item.persona === "Tú")
        .reduce(
            (acumulado, item) =>
                acumulado + item.precio * item.cantidad,
            0
        );

    // TOTAL DE LOS PRODUCTOS DE MIS AMIGOS
    const totalAmigos = ITEMS_PEDIDO
        .filter((item) => item.persona !== "Tú")
        .reduce(
            (acumulado, item) =>
                acumulado + item.precio * item.cantidad,
            0
        );

    // VALOR DEL PORCENTAJE
    const valorPorcentaje = Math.round(
        total * (porcentaje / 100)
    );

    // CUÁNTO DEBO PAGAR
    const valorAPagar =
        tipoPago === "mi"
            ? totalMiParte
            : tipoPago === "porcentaje"
            ? valorPorcentaje
            : total;

    // FILTRAR PRODUCTOS SEGÚN LA BARRA
    const itemsFiltrados = ITEMS_PEDIDO.filter((item) => {
        if (filtroPedido === "todos") {
            return true;
        }
        if (filtroPedido === "mio") {
            return item.persona === "Tú";
        }
        return item.persona !== "Tú";
    });

    return (
        <AppShell mode="comensal">
            <div className="min-h-screen bg-[var(--color-background)] pb-[80px]">
                <div className="w-full max-w-[1200px] mx-auto px-[var(--spacing-lg)] py-[var(--spacing-xl)]">
                    {/* ENCABEZADO */}
                    <div className="mb-[var(--spacing-lg)]">
                        <p className="text-[13px] !text-[var(--color-text-secondary)] mb-[var(--spacing-xs)]">
                            Restaurante
                        </p>
                        <h1 className="text-[var(--font-size-title)] font-[700] !text-[var(--color-text)]">
                            Mi pedido
                        </h1>
                        <p className="text-[14px] !text-[var(--color-text-secondary)] mt-[var(--spacing-xs)]">
                            Revisa los productos de tu mesa y elige cómo pagar.
                        </p>
                    </div>
                    {/* BARRA DE PEDIDOS */}
                    <div className="flex items-center gap-[var(--spacing-sm)] overflow-x-auto pb-[var(--spacing-sm)] mb-[var(--spacing-lg)]">
                        <Button
                            variant={
                                filtroPedido === "todos"
                                    ? "primary"
                                    : "secondary"
                            }
                            mode="comensal"
                            onClick={() => setFiltroPedido("todos")}>
                            Todos
                        </Button>
                        <Button
                            variant={
                                filtroPedido === "mio"
                                    ? "primary"
                                    : "secondary"
                            }
                            mode="comensal"
                        onClick={() => setFiltroPedido("mio")}>
                            Mi pedido
                        </Button>
                        <Button
                            variant={
                                filtroPedido === "amigos"
                                    ? "primary"
                                    : "secondary"
                            }
                            mode="comensal"
                            onClick={() => setFiltroPedido("amigos")}>
                            Pedidos de mis amigos
                        </Button>
                    </div>
                    {/* CONTENIDO */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_335px] gap-[var(--spacing-lg)] items-start">
                        {/* COLUMNA IZQUIERDA */}
                        <div>
                            {/* PEDIDO */}
                            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[14px] overflow-hidden">
                                <div className="px-[var(--spacing-lg)] py-[var(--spacing-md)] border-b border-[var(--color-border)]">
                                    <h2 className="text-[18px] font-[700] !text-[var(--color-text)]">
                                        {filtroPedido === "todos"
                                            ? "Pedido de la mesa"
                                            : filtroPedido === "mio"
                                            ? "Mi pedido"
                                            : "Pedidos de mis amigos"}
                                    </h2>
                                    <p className="text-[13px] !text-[var(--color-text-secondary)] mt-[var(--spacing-xs)]">
                                        {filtroPedido === "todos"
                                            ? "Productos pedidos por todos."
                                            : filtroPedido === "mio"
                                            ? "Productos que has pedido tú."
                                            : "Productos pedidos por los demás."}
                                    </p>
                                </div>
                                {/* PRODUCTOS */}
                                {itemsFiltrados.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center gap-[var(--spacing-md)] px-[var(--spacing-lg)] py-[var(--spacing-md)] border-b border-[var(--color-border)]"
                                    >
                                        {/* IMAGEN */}
                                        <div className="w-[48px] h-[48px] rounded-[10px] bg-[var(--color-neutral-light)] flex items-center justify-center shrink-0">
                                            <span className="text-[18px] !text-[var(--color-text-secondary)]">
                                                🍽️
                                            </span>
                                        </div>
                                        {/* INFORMACIÓN */}
                                        <div className="min-w-0">
                                            <p className="text-[14px] font-[700] !text-[var(--color-text)]">
                                                {item.nombre}
                                            </p>
                                            <p className="text-[12px] !text-[var(--color-text-secondary)] mt-[2px]">
                                                Cantidad: {item.cantidad}
                                            </p>
                                            <p className="text-[12px] !text-[var(--color-text-secondary)] mt-[2px]">
                                                Pedido por: {item.persona}
                                            </p>
                                        </div>
                                        {/* PRECIO */}
                                        <div className="ml-auto text-[14px] font-[700] !text-[var(--color-text)]">
                                            {formatoCOP(
                                                item.precio * item.cantidad
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {/* TOTAL */}
                                <div className="flex items-center justify-between px-[var(--spacing-lg)] py-[var(--spacing-md)]">
                                    <span className="text-[15px] font-[700] !text-[var(--color-text)]">
                                        {filtroPedido === "todos"
                                            ? "Total"
                                            : filtroPedido === "mio"
                                            ? "Mi total"
                                            : "Total amigos"}
                                    </span>
                                    <span className="text-[18px] font-[700] !text-[var(--color-text)]">
                                        {formatoCOP(
                                            filtroPedido === "todos"
                                                ? total
                                                : filtroPedido === "mio"
                                                ? totalMiParte
                                                : totalAmigos
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* CUADRO DE PAGO */}
                        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[14px] p-[var(--spacing-md)]">
                            <p className="text-[11px] font-[700] tracking-[0.06em] !text-[var(--color-text-secondary)] mb-[var(--spacing-sm)]">
                                FORMA DE PAGO
                            </p>
                            <h2 className="text-[18px] font-[700] !text-[var(--color-text)] mb-[var(--spacing-xs)]">
                                ¿Cómo quieres pagar?
                            </h2>
                            <p className="text-[13px] !text-[var(--color-text-secondary)] mb-[var(--spacing-md)]">
                                Elige cuánto de la cuenta quieres pagar.
                            </p>
                            {/* OPCIONES */}
                            <div className="flex flex-col gap-[var(--spacing-sm)]">
                                {/* MI PARTE */}
                                <button
                                    type="button"
                                    onClick={() => setTipoPago("mi")}
                                    className={`w-full text-left px-[var(--spacing-md)] py-[var(--spacing-sm)] rounded-[10px] border transition cursor-pointer 
                                            ${tipoPago === "mi"
                                            ? "border-[var(--color-primary)] bg-[var(--color-primary-light)]"
                                            : "border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-neutral-light)]"
                                    }`}>
                                    <p className="text-[14px] font-[600] !text-[var(--color-text)]">
                                        Mi parte
                                    </p>
                                    <p className="text-[12px] !text-[var(--color-text-secondary)] mt-[2px]">
                                        Paga solamente los productos que pediste.
                                    </p>
                                </button>
                                {/* PORCENTAJE */}
                                <button
                                    type="button"
                                    onClick={() => setTipoPago("porcentaje")}
                                    className={`w-full text-left px-[var(--spacing-md)] py-[var(--spacing-sm)] rounded-[10px] border transition cursor-pointer ${
                                        tipoPago === "porcentaje"
                                            ? "border-[var(--color-primary)] bg-[var(--color-primary-light)]"
                                            : "border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-neutral-light)]"
                                    }`}>
                                    <p className="text-[14px] font-[600] !text-[var(--color-text)]">
                                        Por porcentaje
                                    </p>
                                    <p className="text-[12px] !text-[var(--color-text-secondary)] mt-[2px]">
                                        Elige qué porcentaje de la cuenta pagarás.
                                    </p>
                                </button>
                                {/* PAGAR TODO */}
                                <button
                                    type="button"
                                    onClick={() => setTipoPago("todo")}
                                    className={`w-full text-left px-[var(--spacing-md)] py-[var(--spacing-sm)] rounded-[10px] border transition cursor-pointer ${
                                        tipoPago === "todo"
                                            ? "border-[var(--color-primary)] bg-[var(--color-primary-light)]"
                                            : "border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-neutral-light)]"
                                    }`}>
                                    <p className="text-[14px] font-[600] !text-[var(--color-text)]">
                                        Pagar todo
                                    </p>
                                    <p className="text-[12px] !text-[var(--color-text-secondary)] mt-[2px]">
                                        Paga la cuenta completa de la mesa.
                                    </p>
                                </button>
                            </div>
                            {/* PORCENTAJE */}
                            {tipoPago === "porcentaje" && (
                                <div className="mt-[var(--spacing-md)]">
                                    <div className="flex items-center justify-between mb-[var(--spacing-sm)]">
                                        <span className="text-[13px] font-[600] !text-[var(--color-text)]">
                                            Porcentaje
                                        </span>
                                        <span className="text-[13px] font-[700] !text-[var(--color-primary)]">
                                            {porcentaje}%
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={porcentaje}
                                        onChange={(event) =>
                                            setPorcentaje(
                                                Number(event.target.value)
                                            )
                                        }
                                        className="w-full accent-[var(--color-primary)] cursor-pointer"/>
                                </div>
                            )}
                            {/* TOTAL A PAGAR */}
                            <div className="border-t border-[var(--color-border)] mt-[var(--spacing-md)] pt-[var(--spacing-md)]">
                                <div className="flex items-center justify-between">
                                    <span className="text-[13px] !text-[var(--color-text-secondary)]">
                                        Total a pagar
                                    </span>
                                    <span className="text-[18px] font-[700] !text-[var(--color-text)]">
                                        {formatoCOP(valorAPagar)}
                                    </span>
                                </div>
                            </div>
                            {/* BOTÓN */}
                            <div className="mt-[var(--spacing-md)]">
                                <Button
                                    variant="primary"
                                    mode="comensal">
                                    Pagar con CowPay
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}

export default CarritoPage;