import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="card">
        <h2>Create Account</h2>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={() => navigate("/")}>Register</button>
      </div>
    </div>
  );
}

export default Register;