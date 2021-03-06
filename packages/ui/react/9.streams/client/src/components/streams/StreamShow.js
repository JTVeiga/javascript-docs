// Components
import React from 'react'
import { connect } from 'react-redux'
import flv from 'flv.js'

// Action creators
import { fetchStream } from '../../actions'

class StreamShow extends React.Component {

    constructor(props) {
        super(props)

        this.videoRef = React.createRef()   // Reference to this <video> tag
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)  
        this.buildPlayer() //Attempt to build player
    }
    
    componentDidUpdate() {
        this.buildPlayer()
    }

    componentWillUnmount() {
        this.player.destroy()
    }

    buildPlayer() {
        if (this.player || !this.props.stream){
            return
        }
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
        })
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load()
    }

    render () {
        if(!this.props.stream) {
            return <div>Loading</div>
        }
        return (
            <div>
                <video ref={this.videoRef} style={{width: '100%'}} controls={true}/>
                <h1>{this.props.stream.title}</h1>
                <h5>{this.props.stream.description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.stream[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)