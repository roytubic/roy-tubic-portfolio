import React from 'react'
import { connect } from 'react-redux'

import Website from './Website'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <h1></h1>
        <ul>
         <Website/>
        </ul>
      </div>
    )
  }
}

export default connect()(App)
