// import React, { useRef, useState } from "react";
// import { useAuth } from "../contexts/Authcontext";
// import { Link, useNavigate } from "react-router-dom";

// const ForgotPassword = () => {

// const{resetPassword}= useAuth()
// const[error, setError]= useState('')
// const[loading, setLoading]=useState(false)
// const navigate = useNavigate()


// const handleResetSubmit =(e)=>{
//     e.preventDefault()

//     try{
//         setError("")
//         setLoading(true)
//         await resetPassword(email) 
//         navigate('/')
//     }
//     catch{
//         setError("failed to Reset password")
//     }
//     setLoading(false)
// }


//   return (
//     <div className="register">
//     <div className="registerContainer">
//       <div className="registerLeftSide">
//         <div className="registerLeftSidecontainer">
//           <h3 className="registerLogo">FIP Commune</h3>

//           <span className="registerWelcome">
//             {" "}
//             connect with your friends and community
//           </span>
//         </div>
//       </div>
//       <div className="registerRightSide">
//         <form action="" onSubmit={handleSubmit}>
//           <div className="registerBox">
//             <h3 className="registerRightSideDesc">Create Your Account</h3>

//             <input
//               placeholder="Email"
//               type="email"
//               className="registerInput"
//               ref={emailRef}
//               required
//             />
//             <button disabled={loading} className="registerButton">
//               Sign up
//             </button>
//           </div>
//         </form>
//         {error && <div className="registerAlertError">{error}</div>}
//         <button className="registerRegistration" type="submit">
//           <Link to="/Login">Log into Account</Link>
//         </button>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default ForgotPassword