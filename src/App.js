import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import VideoCallFrame from './VideoCallFrame';

function App() {
  const [showCall, setShowCall] = useState(false);

  return (
    <div className="App">
        {showCall ? (
          <div>
            <VideoCallFrame url={process.env.REACT_APP_DAILY_ROOM_URL} />
            <br></br>
            <button onClick={() => setShowCall(false)}>
              Leave
            </button>
          </div>
        ) : (
          <button onClick={() => setShowCall(true)}>
            Join
          </button>
        )}
    </div>
  );
}

export default App;
