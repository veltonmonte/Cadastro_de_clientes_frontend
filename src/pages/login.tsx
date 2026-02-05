import { useState } from "react";
import "../App.css"
import { loginPost } from "../services/auth.ts"
import "../interface/LoginData.ts"

export function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
  try {
    await loginPost(login, password);

  } catch (error) {
    console.error("Erro no login:", error);
  }
};


  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Usuário"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <div className="password-container">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img src="../public/olho.png" alt="" />
        </div>

        <button className="btn-primary" onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </div>
  );
}
