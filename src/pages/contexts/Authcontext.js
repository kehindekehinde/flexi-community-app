import { useContext, useState, useEffect } from "react"
import { auth } from "../../firebase";
//check
import React from "react"

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}
export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)


  function register(email, password){
    return auth.createUserWithEmailAndPassword(email, password)
  }
  function login(email, password){
    return auth.signInWithEmailAndPassword(email, password)
  }
  function logout(email, password){
    return auth.signOut()
  }

// create user so it should run only once when the component mounts
useEffect(() => {
  const unsubscribe= auth.onAuthStateChanged(user => {
    setCurrentUser(user) 
    setLoading(false)})

return unsubscribe
}, [])

  // auth.onAuthStateChanged(user => {setCurrentUser(user)})
const value = {
  currentUser, register, login, logout,
}
  return (
    <AuthContext.Provider value={value}>
    {!loading && children}
    </AuthContext.Provider>
  )
}