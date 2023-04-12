import "./login.css";
import  { useRef, useState } from "react";
import { useAuth } from "../contexts/Authcontext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch (err) {
      let msg = "Failed to Log in";

      if (err.message.toLowerCase().includes("no user record" ||"EMAIL_NOT_FOUND"||"INVALID_PASSWORD"))
        msg = "Please check your credentials";
      setError(msg);
      setTimeout(() => {
        setError("");
      }, 3000);
      
    }

    setLoading(false);
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginLeftSide">
          <div className="loginLeftSidecontainer">
            <h3 className="loginLogo">FIP Commune</h3>
            <span className="LoginWelcome">
              {" "}
              connect with your friends and community
            </span>
          </div>
        </div>
        <div className="loginRightSide">
          <form action="" onSubmit={handleSubmit}>
            <div className="loginBox">
              <h3 className="loginRightSideDesc">Login to your Account</h3>
              <input
                placeholder="Email"
                type="email"
                ref={emailRef}
                className="loginInput"
                required
              />
              <input
                placeholder="Password"
                type="password"
                ref={passwordRef}
                className="loginInput"
                required
              />
              <button disabled={loading} className="loginButton">
                Log In
              </button>
            </div>
          </form>
          <span className="loginForgotPsd">Forgot password?</span>

          <button className="loginRegistration">
            <Link to="/register" className="loginRegistration">
              Create a new Account
            </Link>
          </button>
          {error && <div className="registerAlertError">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
