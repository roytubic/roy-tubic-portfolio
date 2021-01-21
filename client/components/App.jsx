import React from 'react'
import { connect } from 'react-redux'

import Website from './Website'

class App extends React.Component {
  render () {
    return (
      <Router>
      <div className='app'>
        <h1></h1>
        <ul>
         <Route path='/' component={Website}/>
        </ul>
      </div>
      </Router>
    )
  }
}

export default connect(mapStateToProps)(App)
