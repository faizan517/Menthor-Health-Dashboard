import React, { useState } from 'react'
import mentorImage from '../../../assets/brand/mentorhealth2.png' // Import the image here
import { FcGoogle } from "react-icons/fc";
import { PiEyeSlashThin,PiEyeThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { CContainer } from '@coreui/react';
import { useMediaQuery } from 'react-responsive';
import Images from '../../../utils/Images';
import { Fonts } from '../../../utils/Fonts';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  function handleClick() {
    navigate("/dashboard");
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (event) => {
    
    event.preventDefault()
    let formErrors = {}

    // if (!email) {
    //   formErrors.email = 'Email is required'
    // } else if (!validateEmail(email)) {
    //   formErrors.email = 'Must be a valid email'
    // }

    // if (!password) {
    //   formErrors.password = 'Password is required'
    // }

    // if (Object.keys(formErrors).length === 0) {
    //   console.log('Form submitted:', { email, password })
    //   // Handle login logic here
    // } else {
    //   setErrors(formErrors)
    // }
  }

  // Inline styles
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#fff',
      textAlign: 'center',
    },
    title: {
      // marginBottom: '20px',
      textAlign:'left',
      ...Fonts.Poppins,
      fontSize:'36px',fontWeight:700,
    },
    title2: {
      // marginBottom: '20px',
      textAlign:'left',
      ...Fonts.Poppins,
      fontSize:'16px',fontWeight:400,
      color:'rgba(163, 174, 208, 1)'
    },
    googleButton: {
      // backgroundColor: '#4285F4',
      color: 'black',
      border: 'none',
      borderRadius: '16px',
      padding: '10px',
      width: '100%',
      cursor: 'pointer',
      marginBottom: '10px',
      // paddingLeft: '20px',
      ...Fonts.Poppins,

    },
    orText: {
      margin: '10px 0',
      color: '#777',
      ...Fonts.Poppins,
      fonWeight:500
    },
    inputGroup: {
      marginBottom: '30px',
      textAlign: 'left',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      ...Fonts.Poppins,
      fontWeight:500,
    },
    input: {
      width: '100%',
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '16px',
    },
    passwordGroup: {
      position: 'relative',
    },
    showPasswordButton: {
      position: 'absolute',
      right: '10px',
      top: '10px',
      background: 'none',
      border: 'none',
      // color: 'rgba(0, 72, 255, 1)',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      fontSize: '12px',
    },
    options: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '10px 0',
      ...Fonts.Poppins,
      fontWeight:500,
    },
    optionLink: {
      color: 'rgba(0, 72, 255, 1)',
      textDecoration: 'none',
    },
    signinButton: {
      backgroundColor: 'rgba(0, 72, 255, 1)',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '10px',
      width: '100%',
      cursor: 'pointer',
      ...Fonts.Poppins,
      fontWeight:700,
      fonrSize:14,
      marginBottom:10,
      
    },
    registerText: {
      marginTop: '10px',
      ...Fonts.Poppins,
      fontWeight:400,
      textAlign:'left'
    },
    registerLink: {
      color: 'rgba(0, 72, 255, 1)',
      textDecoration: 'none',
      ...Fonts.Poppins,
      fontWeight:700,
      textAlign:'left'
    },
  }

  return (
    <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
      <div style={styles.container}>
        
        <h4 style={styles.title}>Sign in</h4>
        <h4 style={styles.title2}>Enter your email and password to sign in!</h4>
        <br/>
        
      <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>
              Email*
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mail@simmple.com"
              style={styles.input}
            />
            {errors.email && <span style={styles.error}>{errors.email}</span>}
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Password*
            </label>
            <div style={styles.passwordGroup}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min. 8 characters"
                style={styles.input}
              />
              <button
                type="button"
                style={styles.showPasswordButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <PiEyeThin />
 : <PiEyeSlashThin />}
              </button>
            </div>
            {errors.password && <span style={styles.error}>{errors.password}</span>}
          </div>
          <div style={styles.options}>
            <label>
              <input type="checkbox" /> Keep me logged in
            </label>
            <a href="#" style={styles.optionLink}>
              Forgot password?
            </a>
          </div>
          <button type="submit" style={styles.signinButton} onClick={handleClick}>
            Sign In
          </button>
        </form>
        {/* <p style={styles.registerText}>
          Not registered yet?{' '}
          <a href="/register" style={styles.registerLink}>
            Create an Account
          </a>
        </p> */}
      </div>
      {!isMobile &&( <div
        style={{
          height: '100vh',
          width: '50vw',
          // backgroundColor: 'red',
          borderBottomLeftRadius: '20%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 72, 255, 1))',
        }}
      >
        <div>
          <img src={Images.logoWhite} alt="Mentor Health" style={{ textAlign: 'center', }} height={140} />{' '}
          {/* Use the imported image */}
        </div>
      </div>)}
    </div>
  )
}

export default Login
