import React from 'react'
import { BrowserRouter as Router,Routes, Route,Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='navabar'>
            <h1>TaskManagement-App</h1>
            <div className="button">
            <Link to ="/add"><button>add</button></Link>
            <Link to ="/list"><button>list</button></Link>
            <Link to ="/login"><button>login</button></Link>
            </div>
    </div>
  )
}

export default Navbar
