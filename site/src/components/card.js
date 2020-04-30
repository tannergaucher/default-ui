import React from "react"

import { Image } from "."

const Card = () => (
  <div className="card">
    <h4 className="card-heading">I'm a Card Heading</h4>
    <Image />
    <p className="card-text text--sm">
      Card text is a paragraph element with a class of card dash text.
    </p>
  </div>
)

export default Card
