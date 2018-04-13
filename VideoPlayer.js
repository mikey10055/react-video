import React, {Component} from 'react';

import './VideoPlayer.css';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);

        this.env = props.env;

        this.state = {}
    }

    componentDidMount() {
        this._ismounted = true;
    }

    componentDidUnMount() {
        this._ismounted = false;
    }

    render() {
        return (
            <video src={this.props.src}></video>
        );
    }
}

VideoPlayer.defaultProps = {
    env: 'local',
    src: ''
}

export default VideoPlayer;
