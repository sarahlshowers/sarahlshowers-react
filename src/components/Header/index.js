import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">Gatsby</Link>

        <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/page-2">Travel</Link></li>
         <li><Link to="/page-3">Learning</Link></li>
       </ul>
      </h1>
    </div>
  </div>
)

export default Header
