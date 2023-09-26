import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { Icon } from '@iconify/react'

export default function Nav() {
  return (
    <nav className='navContainer'>
      <div className='homeButton'>

        <Link to="/" >
          <button className="homeBtn">
          <Icon icon="solar:home-2-broken" width="60" height="60" />
          </button>
        </Link>

      </div>

    </nav>
  )
}
