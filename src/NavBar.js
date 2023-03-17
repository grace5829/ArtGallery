import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navBar'>
<Link to="/" className='navButton' >Home</Link>
<Link to="/artwork" className='navButton'>Art</Link>
{/* <Link to={`/artwork/:id`} >Art</Link> */}
    </div>
  )
}

export default NavBar