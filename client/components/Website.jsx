import React from 'react'
import { connect } from 'react-redux'
import { getWebsites } from '../apis/websites'


class Website extends React.Component {
    state = {
      WebPage: {
        website: '',
        url: '',
        summary: '',
        // imgurl: 'https://miro.medium.com/max/6000/1*OK0l4IKbofvx2Eys41D75w.jpeg'
    }}

// for imgurl, perhaps there is a way to get a live preview of the site?

componentDidMount () {
    getWebsites(this.props.dispatch)
      .then(WebPage => {
        this.setState({ WebPage })
        return null
      })
      .catch(err => console.log(err))
  }

    render () {
        return (
            <>
                <div>
                    {/* <img src={this.state.webPage.imgurl} class='websitePic'></img> */}
                    <a href={this.state.webPage.url}>{this.state.webPage.website}</a>
                    <p>{this.state.webPage.summary}</p>
                </div>
            </>
        )
    }
}

export default connect()(Website)
