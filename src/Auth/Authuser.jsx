import { Navigate } from 'react-router-dom'
import { UserContext } from './Userprovider'

const Authuser = ({children , role}) => {
const userrole = localStorage.getItem("userrole")
if(!userrole){
   return <Navigate to='/' replace />
}
const roles = JSON.parse(userrole)
   

    if (role && roles.role !== role) {
        return <Navigate to = "/" replace />
    }
  return children
}

export default Authuser