"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname} from "next/navigation"
import styles from "../styles/MeseroNav.module.css";

export function MeseroNav() {
  const pathname = usePathname();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const cerrarMenu = () => setMenuAbierto(false);
  const links = [
    ["inicio", "/mesero", "Inicio"],
    ["mesas", "/mesero/mesas", "Mesas"],
    ["detalleMesas", "/mesero/mesas/4", "Detalle de mesa"],
    ["registroPedido", "/mesero/mesas/4/pedido", "Registrar pedido a mesas"],
    ["estadoPedido", "/mesero/pedidos", "Estado de pedidos"],
    ["cuenta", "/mesero/mesas/4/cuenta", "Cuenta"],
    ["registroEfectivo", "/mesero/mesas/4/cobrar", "Registro de efectivo"],
    ["recuperarContraseña", "/mesero/recuperar", "Recuperar contraseña"],
    ["historialPedido", "/mesero/historial", "Historial de servicio"],
    ["perfil", "/mesero/perfil", "Perfil"],
  ] as const;

  return (
    <nav aria-label="Navegación del mesero" className={styles.nav}>
      <button
        type="button"
        className={styles.botonMenu}
        aria-expanded={menuAbierto}
        aria-controls="mesero-menu-enlaces"
        onClick={() => setMenuAbierto((abierto) => !abierto)}
      >
        <span aria-hidden="true" className={styles.iconoMenu}>☰</span>
      </button>

      <div
        id="mesero-menu-enlaces"
        className={`${styles.enlaces} ${menuAbierto ? styles.enlacesAbiertos : ""}`}
      >
        <div className={styles.logoMenu}>
          <Image
            src="/media/compartido/logo-cowpay-removebg.png"
            alt="CowPay"
            width={240}
            height={66}
            className={styles.logoMovil}
          />
          <button type="button" className={styles.botonCerrar} onClick={cerrarMenu} aria-label="Cerrar menú">
            <span aria-hidden="true">×</span>
          </button>
        </div>

        {links.map(([id, href, texto]) => (
          <Link
            key={id}
            href={href}
            onClick={cerrarMenu}
            className={pathname === href ? styles.activo : ""}
          >
            {texto}
          </Link>
        ))}
        <div className={styles.nombreRestaurante}>
          <h2>Arepique<br /><span>Mesero</span></h2>
          <Link className={styles.cerrarSesion} href="/mesero/entrar" onClick={cerrarMenu}>
            Cerrar Sesión
          </Link>
        </div>
      </div>
    </nav>
  );
}

