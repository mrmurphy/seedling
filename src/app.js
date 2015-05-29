require('./main.styl')
const React = require('react')
const Main = require('./main.jsx')

const store = require('./store.js')

function render() {
  React.render(<Main cursor={store.rootCursor()}/>, document.body)
}

store.onChangeAnything(render)

render()
