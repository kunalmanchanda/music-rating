import React, { useState } from 'react'

import styles from './login.module.css'

const Login = () => {
    const [login, setLogin] = useState(false)
    return (
        <>
        {
            login ? ( 
                <div className={styles.formContainer}>
                    <h1 className={styles.mb}>Login and Start Listening!</h1>
                    <form action="" className={styles.form}>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <button className={styles.btn}>Login</button>
                        <p>Don't have an account <button className={styles.btnn} onClick={(e) => {
                            e.preventDefault();
                            setLogin(false)}
                        }
                            >Sign Up</button> </p>
                    </form>
                </div>
            ) : (
                <div className={styles.formContainer}>
                    <h1 className={styles.mb}>Sign Up and Start Listening!</h1>
                    <form action="" className={styles.form}>
                        <input type="text" placeholder="Full Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <button className={styles.btn}>Sign Up</button>
                        <p>already have an account <button className={styles.btnn} onClick={(e) => {
                            e.preventDefault();
                            setLogin(true)}
                        }
                            >Login</button> </p>
                    </form>
                </div>

            )
        }
    </>
    )
}

export default Login
