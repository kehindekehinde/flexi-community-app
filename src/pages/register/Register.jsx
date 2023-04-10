import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/Authcontext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  // const usernameRef =useRef()
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordconfirmRef = useRef();
  const { register } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //async
  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordconfirmRef.current.value) {
      return setError("passswords do not match");
    }
    try {
      setError("");
      setLoading(true);
      //await
      await register(emailRef.current.value, passwordRef.current.value);
      navigate("/Home");
    } catch (err){
      setError("Failed to create an account");
      console.log(err)
    }

    setLoading(false);
  }
  return (
    <div className="register">
      <div className="registerContainer">
        <div className="registerLeftSide">
          <div className="registerLeftSidecontainer">
            <h3 className="registerLogo">FIP Commune</h3>

            <span className="registerWelcome">
              {" "}
              connect with your friends and community
            </span>
          </div>
        </div>
        <div className="registerRightSide">
          <form action="" onSubmit={handleSubmit}>
            <div className="registerBox">
              <h3 className="registerRightSideDesc">Create Your Account</h3>

              <input
                placeholder="Email"
                type="email"
                className="registerInput"
                ref={emailRef}
                required
              />
              <input
                placeholder="Password"
                type="password"
                className="registerInput"
                ref={passwordRef}
                required
              />
              <input
                placeholder="Password confirm"
                type="password"
                className="registerInput"
                ref={passwordconfirmRef}
                required
              />
              <button disabled={loading} className="registerButton">
                Sign up
              </button>
            </div>
          </form>
          {error && <div className="registerAlertError">{error}</div>}
          <button className="registerRegistration" type="submit">
            <Link to="/Login">Log into Account</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
