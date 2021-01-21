import React from 'react'
import { connect } from 'react-redux'
import { getWebsites } from '../apis/websites'


class Website extends React.Component {
    state = {
      WebPage: {
        website: '',
        url: '',
        summary: '',
        imgurl: ''
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
                    <img src={props.webPage.imgurl} class='websitePic'></img>
                    <a href={props.webPage.url}>{props.webPage.website}</a>
                    <p>{props.webPage.summary}</p>
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps)(Website)
