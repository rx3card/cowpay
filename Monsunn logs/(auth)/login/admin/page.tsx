"use client";

import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

export default function LoginAdminPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="login-page">
      <div className="login-card login-card--admin">
        <h1 className="login-title">Iniciar sesión</h1>
        <p className="login-subtitle">Accede al panel de administración de Arepique</p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="login-field">
            <Mail className="login-icon" />
            <input
              type="email"
              placeholder="admin@arepique.com"
              className="login-input"
              aria-label="Correo electrónico del administrador"
            />
          </div>

          <div className="login-field">
            <Lock className="login-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••"
              className="login-input"
              aria-label="Contraseña del administrador"
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
            <a href="#" className="login-link">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button type="submit" className="login-button">
            Iniciar sesión
          </button>
        </form>

        <p className="login-footnote">Protegido por tecnología de CowPay de extremo a extremo</p>
      </div>
    </main>
  );
}