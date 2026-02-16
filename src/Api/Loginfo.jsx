import { createContext, useState } from "react";

export const LoginUserInfo = createContext(null)


const Loginfo = ({children})=>{
    const[loginuser , setloginuser] = useState({})
    return(
   <LoginUserInfo.Provider value={{loginuser , setloginuser}}>
{children}
   </LoginUserInfo.Provider>
   )
   
}

export default Loginfo