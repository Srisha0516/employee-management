import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      
      {/* LEFT SIDE */}
      <div className="left">
        <h1>Manage your team with confidence</h1>
        <p>
          A premium employee management platform built for modern teams.
        </p>

        <div className="stats">
          <div>12k+ Users</div>
          <div>98% Satisfaction</div>
          <div>50+ Countries</div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="form-box">
          <h2>Welcome back</h2>

          <input placeholder="Email address" />
          <input type="password" placeholder="Password" />

          <button onClick={() => navigate("/dashboard")}>
            Sign in →
          </button>
        </div>
      </div>

    </div>
  );
}

export default Login;