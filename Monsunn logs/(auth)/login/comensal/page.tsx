"use client";

import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

export default function LoginComensalPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="login-page">
      <div className="login-card login-card--comensal">
        <h1 className="login-title" style={{ textAlign: "center" }}>¡Bienvenido de vuelta!</h1>
        <p className="login-subtitle" style={{ textAlign: "center" }}>Entra para ver tus restaurantes favoritos y tus reservas</p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="login-field">
            <Mail className="login-icon" />
            <input type="email" placeholder="tuemail@correo.com" className="login-input" aria-label="Correo electrónico del cliente" />
          </div>

          <div className="login-field">
            <Lock className="login-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••"
              className="login-input"
              aria-label="Contraseña del cliente"
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
            <a href="#" className="login-link">¿Olvidaste la contraseña?</a>
          </div>

          <button type="submit" className="login-button">Ingresar</button>
        </form>

        <p className="login-footnote" style={{ marginTop: 20 }}>
          ¿No tienes cuenta? <a href="#" className="login-link">Regístrate gratis</a>
        </p>

        <p className="login-footnote" style={{ color: "#2563eb" }}>
          Para pedir en un restaurante no necesitas cuenta. Solo escanea el QR de tu mesa.
        </p>
      </div>
    </main>
  );
}