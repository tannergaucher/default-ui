import React from "react"

import { Navlink } from "."

const Navlinks = ({ location }) => (
  <nav className="nav">
    <Navlink text="Classes" to="/classes" location={location} title />
    <Navlink text="Variables" to="/variables" location={location} />
    <a
      className="nav-link"
      href="https://github.com/tannergaucher/semantic-styles"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 style={{ margin: `0` }}>Github</h3>
    </a>
  </nav>
)

export default Navlinks
