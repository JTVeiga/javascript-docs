import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchStreams } from '../../actions'

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderAdminButtons(stream) {
        if(stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }
    }

    renderList = () => {
        const jsxStreamsList = this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdminButtons(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/stream/${stream.id}`} className="header" >{stream.title}</Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
        return jsxStreamsList
    }

    renderCreateButton = () => {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }

    render () {
         
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreateButton()}
            </div>
        )
    }

    
}
const mapStateToProps = (state) => {
    return { 
        streams: Object.values(state.stream),    // Take each prop and insert into an array
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }  
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)