const components = '../package/classes/components'
const elements = '../package/classes/elements'
const layout = '../package/classes/layout'

const fs = require('fs')

const H1 = (text) => `# ${text}`
const H2 = (text) => `## ${text}`
const H3 = (text) => `### ${text}`
const H4 = (text) => `#### ${text}`
const Li = (text) => `- ${text}`
const Hr = `---`
const Br = `\r\n`
const A = (text, href) => `[${text}](${href})`

// Programmatically document the library source code and generate a README.md file

const README_FILENAME = 'readme.md'

// Header
fs.appendFile(
  README_FILENAME,
  String.prototype.concat(H1(`Semantic Styles`), Br, Br),
  function (err) {
    if (err) throw err
  }
)

fs.appendFile(
  README_FILENAME,
  String.prototype.concat(H2(`Responsive, themed, UI design system`), Br, Br),
  function (err) {
    if (err) throw err
  }
)

fs.appendFile(
  README_FILENAME,
  String.prototype.concat(H3(`Classes`), Br, Br),
  function (err) {
    if (err) throw err
  }
)

// Classes

fs.readdir(components, (err, files) => {
  const elementClasses = []

  fs.appendFile(
    README_FILENAME,
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
    fs.appendFile(README_FILENAME, `- .${elementClass}\r\n`, function (err) {
      if (err) throw err
    })
  })
})

fs.readdir(layout, (err, files) => {
  const elementClasses = []

  fs.appendFile(
    README_FILENAME,
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
    fs.appendFile(README_FILENAME, `- .${elementClass}\r\n`, function (err) {
      if (err) throw err
    })
  })
})

fs.readdir(elements, (err, files) => {
  const elementClasses = []

  fs.appendFile(
    README_FILENAME,
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
    fs.appendFile(README_FILENAME, `- .${elementClass}\r\n`, function (err) {
      if (err) throw err
    })
  })
})

fs.readdir(layout, (err, files) => {
  const elementClasses = []

  fs.appendFile(
    README_FILENAME,
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
    fs.appendFile(README_FILENAME, `- .${elementClass}\r\n`, function (err) {
      if (err) throw err
    })
  })
})
