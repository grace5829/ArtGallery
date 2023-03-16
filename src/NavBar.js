import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
<Link to="/" >Home</Link>
<Link to="/artwork" >Art</Link>
{/* <Link to={`/artwork/:id`} >Art</Link> */}
    </div>
  )
}

export default NavBar