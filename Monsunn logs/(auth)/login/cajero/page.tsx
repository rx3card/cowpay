"use client";

import { Eye, EyeOff, Lock, UserRound } from "lucide-react";
import { useState } from "react";

export default function LoginCajaPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="login-page">
      <div className="login-card login-card--caja">
        <h1 className="login-title">Caja y cobros</h1>
        <p className="login-subtitle">Gestiona pagos, cierres de caja y ventas del día</p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="login-field">
            <UserRound className="login-icon" />
            <input type="text" placeholder="caja.arepique" className="login-input" aria-label="Usuario de caja" />
          </div>

          <div className="login-field">
            <Lock className="login-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••"
              className="login-input"
              aria-label="Contraseña de caja"
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

          <button type="submit" className="login-button">Entrar a caja</button>
        </form>

        <p className="login-footnote" style={{ color: "#166534" }}>
          Si olvidaste tu clave, pídele el cambio al administrador. Por seguridad, caja no puede restablecerla sola.
        </p>
      </div>
    </main>
  );
}