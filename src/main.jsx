const component = require('omniscient')
const React = require('react')

const STLYES = {
  wrapper: {
    padding: '1em'
  }
}

const Main = component(() => {
  return (
    <div style={STLYES.wrapper}>
      <h1>Hi, there!</h1>
      <p>I'm just some boilerplate, y'know.</p>
    </div>
  )
})

export default Main.jsx
