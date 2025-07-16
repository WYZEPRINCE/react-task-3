import React from 'react'
import { NavLink } from 'react-router-dom';

const OnboardingNav = () => {
  return (
    <div>
        <ul  className='flex gap-4'>
          <li>
            <NavLink to="/" end>Register</NavLink>
          </li>
          <li>
            <NavLink to="/login" >Login</NavLink>
          </li>
        </ul>
      </div>
  )
}

export default OnboardingNav