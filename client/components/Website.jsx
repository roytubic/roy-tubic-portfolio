import React from 'react'
import { connect } from 'react-redux'


export class Website extends React.Component {


    render () {
        return (
            <>
                <div>
                    <picture></picture>
                    <a href='url'>Name of Website</a>
                    <p>Brief summary</p>
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps)(Website)
