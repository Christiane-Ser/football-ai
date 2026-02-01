import { useState } from "react";
import axios from "axios";
import "./Login.css";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password
      });
      alert(res.data.message);
    } catch {
      alert("Erreur de connexion");
    }
  };

  return (
    <div className="login-container">
      <h1>Sport App</h1>

      <div className="sports">
        <img src="/images/football.png" alt="Football" />
        <img src="/images/basketball.png" alt="Basket" />
        <img src="/images/athletics.png" alt="Athlétisme" />
      </div>

      <input
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Connexion</button>
    </div>
  );
}
