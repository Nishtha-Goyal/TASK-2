import React from 'react'
import './User.css'
function User({data}) {
    return (
        <div class="block">
         <img src={data.avatar}></img>
        
        <div>
         Name: {data.first_name} {data.last_name}
        </div>
        <div>
         Email Id: {data.email} 
        </div>
        </div>

    )
}

export default User
