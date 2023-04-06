import "./login.css"

const Login = () => {
  return (
    <div className="login">
    <div className="loginContainer">
    <div className="loginLeftSide">
    <div className="loginLeftSidecontainer">
    <h3 className="loginLogo">FIP Commune</h3>
    <span className="LoginWelcome"> connect with your friends and community</span>
    </div>    
    </div>
    <div className="loginRightSide">
    <div className="loginBox">
    <input placeholder="Email" type="text" className="loginInput" />
    <input placeholder="Password" type="password" className="loginInput" />
    <button className="loginButton">Login</button>
    <span className="loginForgotPsd">Forgot password?</span>
    <button className="loginRegistration">Create a new Account</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Login