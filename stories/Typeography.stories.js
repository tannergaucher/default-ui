import '../index.css'

export default {
  title: 'Typeography',
}

export const H1 = () => '<h1>Heading 1</h1>'
export const H2 = () => '<h2>Heading 2</h2>'
export const H3 = () => '<h3>Heading 3</h3>'
export const H4 = () => '<h4>Heading 4</h4>'
export const H5 = () => '<h5>Heading 5</h5>'
export const H6 = () => '<h6>Heading 6</h6>'
export const Paragraph = () => '<p>Paragraph</p>'
export const Small = () => '<small>Small</small>'

export const UL = () => `
<ul>
     <li>Unordered List Item 1</li>
     <li>Unordered List Item 2</li>
     <li>Unordered List Item 3</li>
</ul>
`

export const OL = () => `
<ol>

     <li>Ordered List Item 1</li>
     <li>Ordered List Item 2</li>
     <li>Ordered List Item 3</li>
</ol>
`
