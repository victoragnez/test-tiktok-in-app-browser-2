import "./App.css";
import React, { useEffect, useRef } from "react";

function V() {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.play();
    }
  }, [ref.current]);
  return (
    <video autoPlay muted loop className={"video-elt"} ref={ref}>
      <source
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        type="video/mp4"
      />
    </video>
  );
}

function App() {
  return (
    <div className="App">
      Testing Video: <br />
      <V />
    </div>
  );
}

export default App;
