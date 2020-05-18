import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../Actions/action';
import { Player } from 'video-react';

class StreamShow extends React.Component {
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();

    }

    componentDidMount() {
        const id = String(this.props.match.params.id)
        this.props.fetchStream(id);
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer() {
        if (this.player || !this.props.stream) {
            return
        }

        const id = String(this.props.match.params.id)
        this.player = flv.createPlayer({
            type: 'flv',
            url: 'http://localhost:8000/live/' + id + '.flv'
        });

        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading..</div>
        }

        return (
            <div>
                <Player ref={this.videoRef} style={{ width: '100%' }} controls={true} />
                <h1>hhaha   </h1>
                <h5>hhh</h5>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);