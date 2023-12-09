import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const{user}=useContext(UserContext)
    console.log(user)
    if(!user) return <h1> not logged in </h1>
  return (
    
    <div>

        <h1>Profile: {user} </h1>

    </div>
  )
}

export default Profile