import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
        <ul>
          <Link to="/" >
            Home
          </Link>
        </ul>
      </nav>
  )
}
