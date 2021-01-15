import React from 'react'
import { connect } from 'react-redux'


export class Website extends React.Component {
    state = {
        website: '',
        url: '',
        summary: '',
        imgurl: ''
    }

// for imgurl, perhaps there is a way to get a live preview of the site?

    render () {
        return (
            <>
                <div>
                    <img src={imgurl} class='websitePic'></img>
                    <a href={url}>{website}</a>
                    <p>{summary}</p>
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps)(Website)
