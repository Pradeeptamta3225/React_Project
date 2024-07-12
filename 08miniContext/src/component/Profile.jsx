import { useContext } from 'react'

function Profile() {
     const {user} = useContext(useContext)

     if (!user) return <div>Please Log in first</div>

     return <div>Welcome {user.username}</div>
}

export default Profile
