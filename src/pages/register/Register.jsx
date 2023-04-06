import "./register.css"

const Register = () => {
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
    <input placeholder="Username" type="text" className="loginInput" />
    <input placeholder="Email" type="text" className="loginInput" />
    <input placeholder="Password" type="password" className="loginInput" />
    <input placeholder="Password Again" type="password" className="loginInput" />
    <button className="loginButton">Sign up</button>
    <button className="loginRegistration">Log into Account</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Register