const components = './package/classes/components'
const elements = './package/classes/elements'
const layout = './package/classes/layout'

const fs = require('fs')

const H1 = (text) => `# ${text}`
const H2 = (text) => `## ${text}`
const H3 = (text) => `### ${text}`
const H4 = (text) => `#### ${text}`
const Li = (text) => `- ${text}`
const Hr = `---`
const Br = `\r\n`
const A = (text, href) => `[${text}](${href})`

// Programmatically generate a readme file that documents the source code

// Header
fs.appendFile(
  'generated.md',
  String.prototype.concat(H1(`Semantic Styles`), Br, Br),
  function (err) {
    if (err) throw err
  }
)

fs.appendFile(
  'generated.md',
  String.prototype.concat(H2(`Responsive, themed, UI design system`), Br, Br),
  function (err) {
    if (err) throw err
  }
)

fs.appendFile(
  'generated.md',
  String.prototype.concat(H3(`Classes`), Br, Br),
  function (err) {
    if (err) throw err
  }
)

// Classes

fs.readdir(layout, (err, files) => {
  const elementClasses = []

  fs.appendFile(
    'generated.md',
    String.prototype.concat(H4(`Layout`), Br, Br),
    function (err) {
      if (err) throw err
    }
  )

  files.forEach((file) => {
    const myClass = file.split('.')[0]

    // Don't push index file
    if (myClass !== 'index') {
      elementClasses.push(myClass)
    }
  })

  elementClasses.forEach((elementClass) => {
    fs.appendFile('generated.md', `- .${elementClass}\r\n`, function (err) {
      if (err) throw err
    })
  })
})

// Variables
