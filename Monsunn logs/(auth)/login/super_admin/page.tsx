"use client";

import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

export default function SuperAdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="login-page">
      <div className="login-card login-card--super-admin">
        <h1 className="login-title">Super administrador</h1>
        <p className="login-subtitle">Control total del sistema y configuración global de CowPay</p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="login-field">
            <Mail className="login-icon" />
            <input type="email" placeholder="superadmin@cowpay.com" className="login-input" aria-label="Correo electrónico del super administrador" />
          </div>

          <div className="login-field">
            <Lock className="login-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••"
              className="login-input"
              aria-label="Contraseña del super administrador"
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
            <a href="#" className="login-link">¿Olvidaste tu contraseña?</a>
          </div>

          <button type="submit" className="login-button">Acceder al panel</button>
        </form>

        <p className="login-footnote">Protegido por tecnología de CowPay de extremo a extremo</p>
      </div>
    </main>
  );
}