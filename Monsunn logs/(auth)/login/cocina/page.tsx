"use client";

import { Eye, EyeOff, Lock, UserRound } from "lucide-react";
import { useState } from "react";

export default function LoginCocinaPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="login-page">
      <div className="login-card login-card--cocina">
        <h1 className="login-title">Panel de cocina</h1>
        <p className="login-subtitle">Consulta órdenes activas y prepara cada pedido con prioridad</p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="login-field">
            <UserRound className="login-icon" />
            <input type="text" placeholder="cocina.arepique" className="login-input" aria-label="Usuario de cocina" />
          </div>

          <div className="login-field">
            <Lock className="login-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••"
              className="login-input"
              aria-label="Contraseña de cocina"
            />
            <button
              type="button"
              className="login-toggle"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="login-row">
            <label className="login-remember">
              <input type="checkbox" defaultChecked />
              <span>Mantener la sesión abierta</span>
            </label>
            <a href="#" className="login-link">¿Olvidaste tu contraseña?</a>
          </div>

          <button type="submit" className="login-button">Ingresar a cocina</button>
        </form>

        <p className="login-footnote" style={{ color: "#4f46e5" }}>
          Si olvidaste tu clave, pídele el cambio al administrador del restaurante. Por seguridad, cocina no puede restablecerla sola.
        </p>
      </div>
    </main>
  );
}