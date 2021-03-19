import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
                <i className = "fas fa-music" style = {{fontSize:'2rem', color: 'darkmagenta', background_color: 'blue'}}></i>
            <Link to="#" className={styles.btn}>Sign Up/Login</Link>   
        </nav>
    )
}

export default Navbar
   