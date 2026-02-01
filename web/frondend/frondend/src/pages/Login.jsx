import { useState } from "react";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });
      alert(res.data.message);
    } catch (err) {
      setError("Identifiants incorrects ou serveur indisponible");
    }
  };
return (
  <div className="login-page"> {}
    <h1 className="main-title">Sport App</h1>

    <div className="login-card">
      <h3>Connexion</h3>
      
      <div className="input-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <p className="error-text">{error}</p>}

      <button className="btn-connexion" onClick={handleLogin}>
        Connexion
      </button>
    </div>
  </div>
);
}