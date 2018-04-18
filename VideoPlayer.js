import React, {Component} from 'react';

import './VideoPlayer.css';

import video from './_testData/video1.mp4';

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
            <div className="videoPlayer">
                <video ref="videoElement" src={video} controls={this.props.controls} autoPlay={this.props.autoplay}></video>
            </div>
        );
    }
}

VideoPlayer.defaultProps = {
    env: 'local',
    src: '_testData/video1.mp4',
    autoplay: 'true',
    controls: 'true'
}

export default VideoPlayer;
