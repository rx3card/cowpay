"use client";

import { Eye, EyeOff, Lock, UserRound } from "lucide-react";
import { useState } from "react";

export default function LoginMeseroPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="login-page">
      <div className="login-card login-card--mesero">
        <h1 className="login-title">Ingreso de mesero</h1>
        <p className="login-subtitle">Inicia tu turno y gestiona los pedidos de la mesa</p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="login-field">
            <UserRound className="login-icon" />
            <input type="text" placeholder="carlos.mendoza" className="login-input" aria-label="Usuario o código de mesero" />
          </div>

          <div className="login-field">
            <Lock className="login-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••"
              className="login-input"
              aria-label="Contraseña del mesero"
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
              <input type="checkbox" />
              <span>Recordarme</span>
            </label>
            <a href="#" className="login-link">Solicitar cambio de clave</a>
          </div>

          <button type="submit" className="login-button">Iniciar sesión</button>
        </form>
      </div>
    </main>
  );
}