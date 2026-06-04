import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("/profile");
  };

  return (
    <div className="wrapper">
      <div className="mobile-container">
        <h1>Signin to your PopX account</h1>

        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <div className="input-group">
          <label>Email Address</label>
          <input
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
        </div>

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;