import {Link, useNavigate} from 'react-router-dom'
// import { Logout } from '@mui/icons-material';
import  { useState } from "react";
import { useAuth } from "../contexts/Authcontext";



const Logout = () => {
  const [error, setError] = useState("")
  const {currentUser, logout} = useAuth()
  const navigate = useNavigate() 

  const handleLogout =async ()=> {
    setError("")
    try{await logout()
    navigate("/Login") 
    }
    catch{
      setError('Failed to logout')
    }
  }
  return (
    <div>
    {error && <div className="registerAlertError">{error}</div>}

    <div className="logoutButton">
    <Link to={'/Logi'} onClick={handleLogout}>Log out here<Logout /></Link>
    <h2> <strong>Email:</strong>{currentUser.email}</h2>
    </div>
    </div>
  )
}

export default Logout