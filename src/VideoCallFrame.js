import React from 'react';
import DailyIframe from '@daily-co/daily-js';

class VideoCallFrame extends React.Component {

  constructor(props) {
    super(props);
    this.iframeRef = React.createRef();
  }

  componentDidMount() {
    if (!this.props.url) {
      console.error('please set REACT_APP_DAILY_ROOM_URL env variable!');
      return;
    }
    this.daily = DailyIframe.wrap(this.iframeRef.current);
    this.daily.join({ url: this.props.url });
  }

  async componentWillUnmount() {
    let f = new Promise(async resolve => {
      try {
        await this.daily.destroy();
      } catch (e) {
        console.log ("Failed to destroy", e);
      }
      resolve ();
    });
    await f;
  }

  render() {
    return <iframe className="Video-Frame"
             title="video call iframe"
             ref={this.iframeRef}
             allow="camera; microphone; fullscreen"
           ></iframe>
  }
}

export default VideoCallFrame;
