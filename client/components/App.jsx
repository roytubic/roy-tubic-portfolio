import React from 'react'
import { connect } from 'react-redux'

import { fetchWebsites } from '../actions'

import Website from './Website'

export class App extends React.Component {
  state = {
    website: ''
  }

  componentDidMount () {
    this.props.dispatch(fetchWebsites())
  }

// The component will show a list of websites that I have created via preview picture, a link and brief description.

  render () {
    return (
      <div className='app'>
        <h1></h1>
        <ul>
         <Website data={this.state}/>
        </ul>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    websites: globalState.websites
  }
}

export default connect(mapStateToProps)(App)
