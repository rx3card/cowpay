"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Field from "../Field/Field";

type AppShellProps = {
    mode: "comensal" | "admin" | "mesero" | "cocina";
    children: ReactNode;
};

function AppShell({ mode, children }: AppShellProps) {
    const pathname = usePathname();
    const [showNotification, setShowNotification] = useState(false);
    const [search, setSearch] = useState("");

    let headerStyle = "";
    let navStyle = "";
    let navLinkStyle = "";
    let activeLinkStyle = "";
    let navItems: string[] = [];
    let navLinks: string[] = [];

    /*CONFIGURACIÓN COMENSAL*/
    if (mode === "comensal") {
        headerStyle = "bg-[var(--color-surface)] border-b border-[var(--color-border)]";
        navStyle = "!text-[var(--color-text)]";
        navLinkStyle = "!text-[var(--color-text)] hover:!text-[var(--color-primary)]";
        activeLinkStyle = "!text-[var(--color-primary)] font-[700]";
        navItems = [
            "Inicio",
            "Explorar",
            "Favoritos",
            "Historial",
            "Amigos",
        ];
        navLinks = [
            "/comensal",
            "/comensal/restaurante",
            "/comensal/favoritos",
            "/comensal/historial",
            "/comensal/amigos",
        ];
    }
    /*CONFIGURACIÓN ADMINISTRADOR*/
    if (mode === "admin") {
        headerStyle = "bg-[var(--color-surface)] border-b border-[var(--work-border)]";
        navStyle = "!text-[var(--work-text)]";
        navLinkStyle = "!text-[var(--work-text)] hover:!text-[var(--admin-primary)]";
        activeLinkStyle = "!text-[var(--admin-primary)] font-[700]";
        navItems = [
            "Inicio",
            "Usuarios",
            "Inventario",
            "Configuración",
        ];
        navLinks = [
            "/admin",
            "/admin/usuarios",
            "/admin/inventario",
            "/admin/configuracion",
        ];
    }
    /*CONFIGURACIÓN MESERO*/
    if (mode === "mesero") {
        headerStyle = "bg-[var(--color-surface)] border-b border-[var(--work-border)]";
        navStyle = "!text-[var(--work-text)]";
        navLinkStyle = "!text-[var(--work-text)] hover:!text-[var(--mesero-primary)]";
        activeLinkStyle = "!text-[var(--mesero-primary)] font-[700]";
        navItems = [
            "Inicio",
            "Mesas",
            "Pedidos",
            "Clientes",
        ];
        navLinks = [
            "/mesero",
            "/mesero/mesas",
            "/mesero/pedidos",
            "/mesero/clientes",
        ];
    }
    /*CONFIGURACIÓN COCINA*/
    if (mode === "cocina") {
        headerStyle = "bg-[var(--color-surface)] border-b border-[var(--work-border)]";
        navStyle = "!text-[var(--work-text)]";
        navLinkStyle = "!text-[var(--work-text)] hover:!text-[var(--cocina-primary)]";
        activeLinkStyle = "!text-[var(--cocina-primary)] font-[700]";
        navItems = [
            "Pedidos",
            "Historial",
            "Menú",
            "Turnos",
        ];
        navLinks = [
            "/cocina/pedidos",
            "/cocina/historial",
            "/cocina/menu",
            "/cocina/turnos",
        ];
    }
    /*RUTAS PRINCIPALES*/
    const searchPlaceholder = "Buscar";
    const homeLink =
        mode === "comensal"
            ? "/comensal"
            : mode === "admin"
            ? "/admin"
            : mode === "mesero"
            ? "/mesero"
            : "/cocina/pedidos";
    const profileLink =
        mode === "comensal"
            ? "/comensal/perfil"
            : mode === "admin"
            ? "/admin/perfil"
            : mode === "mesero"
            ? "/mesero/perfil"
            : "/cocina/perfil";
    /*NAVEGACIÓN MÓVIL*/
    const mobileNavItems =
        mode === "comensal"
            ? [
                {label: "Inicio",
                icon: "⌂",
                href: "/comensal",},
                {label: "Explorar",
                icon: "⌕",
                href: "/comensal/restaurante",},
                {label: "Favoritos",
                icon: "♡",
                href: "/comensal/favoritos",},
                {label: "Historial",
                icon: "◷",
                href: "/comensal/historial",},
                {label: "Amigos",
                icon: "♙",
                href: "/comensal/amigos",},
            ]
            : mode === "admin"
            ? [
                {label: "Inicio",
                icon: "⌂",
                href: "/admin",},
                {label: "Usuarios",
                icon: "♙",
                href: "/admin/usuarios",},
                {label: "Inventario",
                icon: "▣",
                href: "/admin/inventario",},
                {label: "Config.",
                icon: "⚙",
                href: "/admin/configuracion",},
            ]
            : mode === "mesero"
            ? [
                {label: "Inicio",
                icon: "⌂",
                href: "/mesero",},
                {label: "Mesas",
                icon: "▦",
                href: "/mesero/mesas",},
                {label: "Pedidos",
                icon: "☷",
                href: "/mesero/pedidos",},
                {label: "Clientes",
                icon: "♙",
                href: "/mesero/clientes",},
            ]
            : [
                {label: "Pedidos",
                icon: "☷",
                href: "/cocina/pedidos",},
                {label: "Historial",
                icon: "◷",
                href: "/cocina/historial",},
                {label: "Menú",
                icon: "▤",
                href: "/cocina/menu",},
                {label: "Turnos",
                icon: "◴",
                href: "/cocina/turnos",},
            ];
    return (
        <div className="min-h-screen bg-[var(--color-background)]">
            {/* NAVBAR */}
            <header className={headerStyle}>
                <div className="w-full max-w-[1200px] mx-auto px-[var(--spacing-lg)]">
                    <div className="min-h-[64px] flex items-center justify-between gap-[var(--spacing-lg)]">
                        {/* LOGO */}
                        <Link
                            href={homeLink}
                            className="shrink-0">
                            <Image
                                src="/images/cowpay.png"
                                alt="CowPay"
                                width={120}
                                height={40}/>
                        </Link>
                        {/* NAVEGACIÓN PC */}
                        <nav
                            className={`${navStyle} hidden lg:flex items-center gap-[26px]`}>
                            {navItems.map((item, index) => {
                                const isActive =
                                    navLinks[index] === pathname;
                                return (
                                    <Link
                                        key={item}
                                        href={navLinks[index]}
                                        className={`text-[13.5px] font-[500] transition ${
                                            isActive
                                                ? activeLinkStyle
                                                : navLinkStyle
                                        }`}
                                    >
                                        {item}
                                    </Link>
                                );
                            })}
                        </nav>
                        {/* BUSCADOR PC */}
                        <div className="hidden lg:block w-[220px]">
                            <Field
                                placeholder={searchPlaceholder}
                                value={search}
                                mode={mode}
                                onChange={(event) =>
                                    setSearch(event.target.value)}/>
                        </div>
                        {/* ZONA DERECHA */}
                        <div className="relative flex items-center gap-[var(--spacing-md)]">
                            {/* NOTIFICACIONES */}
                            <button
                                type="button"
                                className="hidden sm:block text-[18px] cursor-pointer"
                                aria-label="Notificaciones"
                                onClick={() =>
                                    setShowNotification(
                                        !showNotification
                                    )}
                            >
                                🔔
                            </button>
                            {showNotification && (
                                <div className="absolute right-0 top-[42px] w-[280px] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[12px] shadow-lg p-[var(--spacing-md)] z-50">
                                    <h3 className="text-[16px] font-[600] mb-[var(--spacing-sm)]">
                                        Notificaciones
                                    </h3>
                                    <div className="flex flex-col gap-[var(--spacing-sm)]">
                                        <div className="p-[var(--spacing-sm)] rounded-[8px] bg-[var(--color-neutral-light)]">
                                            <p className="text-[14px]">
                                                No tienes notificaciones
                                                nuevas.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* USUARIO */}
                            <Link
                                href={profileLink}
                                className="flex items-center gap-[8px] bg-[var(--color-neutral-light)] rounded-[20px] py-[5px] pr-[12px] pl-[5px] !text-[var(--color-text)] text-[13px] font-[600] hover:bg-[var(--color-neutral-hover)] hover:!text-[var(--color-text)] active:bg-[var(--color-neutral-active)] transition">
                                <span className="w-[26px] h-[26px] rounded-full bg-[#ffd76a] flex items-center justify-center text-[11px] font-[700] text-[#7a4a00]">
                                    👤
                                </span>
                                <span className="hidden sm:block">
                                    User name
                                </span>
                                <span className="text-[10px]">
                                    ▼
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            {/* CONTENIDO */}
            <main className="min-h-[calc(100vh-64px)] bg-[var(--color-background)]">
                {children}
            </main>
            {/* NAVEGACIÓN MÓVIL */}
            <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)] h-[64px] flex items-center justify-around">
                {mobileNavItems.map((item) => {
                    const isActive = pathname === item.href;
                    const activeColor = mode === "comensal"
                            ? "text-[var(--color-primary)]"
                            : mode === "admin"
                            ? "text-[var(--admin-primary)]"
                            : mode === "mesero"
                            ? "text-[var(--mesero-primary)]"
                            : "text-[var(--cocina-primary)]";
                    const inactiveColor = "!text-[var(--color-text-secondary)]";
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center justify-center gap-[2px] text-[11px] transition 
                                ${isActive
                                ? activeColor
                                : inactiveColor}`}>
                            <span className="text-[18px]">
                                {item.icon}
                            </span>
                            <span>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}

export default AppShell;