const React = require('react')

const STLYES = {
  wrapper: {
    padding: '1em'
  }
}

const Main = React.createClass({
  displayName: 'Main',

  render() {
    return (
      <div style={STLYES.wrapper}>
        <h1>Hi, there!</h1>
        <p>I'm just some boilerplate, y'know.</p>
      </div>
    )
  }
})

export default Main
