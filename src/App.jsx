// App.js
import  { useState } from "react";
import "./App.css";
import GreetingCard from "./components/GreetingCard.jsx";
import VideoPlayer from "./components/VideoPlayer";
function App() {
  const [isVideoVisible, setVideoVisible] = useState(false);

  const handleGreetingClick = () => {
    setVideoVisible(true);
  };

  const handleCloseVideo = () => {
    setVideoVisible(false);
  };

  return (
    <div className="App">
      <div>
        <GreetingCard onHandle={handleGreetingClick} />
      </div>
      {isVideoVisible && (
        <VideoPlayer src="reallygreatsite.mp4" onClose={handleCloseVideo} />
      )}
    </div>
  );
}

export default App;
