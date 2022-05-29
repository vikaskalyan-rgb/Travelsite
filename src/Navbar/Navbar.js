import React, {useState} from 'react'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className="container">
                <h1 className='head' style={{ marginLeft: '1rem', color: 'white', fontFamily:'cursive',fontSize:40}} >GTN</h1>
                <ul className={click ? 'nav active' : 'nav'}>
                    <li className="nav-item-candi">
                        <a href="/about" style={{fontSize:25}}>About Us</a>
                    </li>
                    <li className="nav-item-about">
                        <a href="/contact" style={{fontSize:25}}>Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className='loginnow' href="/appit" style={{fontSize:25}}>Login/Register</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar
