import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
      <div className='nav'>
          <ul>
              <li>
                  <NavLink   to={"/"}>Home</NavLink>
                  <NavLink to={"/posts"}>Posts</NavLink>
              </li>
          </ul>
      </div>
    )
  }
  