import { useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStepForward, faStepBackward } from "@fortawesome/free-solid-svg-icons";
//import firestore from './firebase'; //Import firestore
const phrases = [
  "No",
  "Are you sure?",
  "Really sure?😢",
  "Pookie please!🥺",
  "Resisting a good time?",
  "Persistent, huh?",
  "Let's make it special? :)",
  "Come on, say yes!",
  "Getting closer, say yes!",
  "Almost there, say yes!",
  "Can't resist the charm?",
  "Ready for a yes?",
  "You're tough, say yes!",
  "Final offer, say yes!",
  "One small yes?",
  "Last push, say yes!",
  "Unlock the fun, say yes!",
  "Time for a yes!",
  "I' gonna cry...😭",
  "You're breaking my heart 😭💔",
  "Come on, just say yes! :)",
  "Last chance, say yes!",
];

const playlist = [
  {url: "https://soundcloud.com/j-tajor/like-i-do-remix-with-sunkis?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", name: "Like I Do"},
  {url: "https://soundcloud.com/demxntia/tonight?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", name: "Tonight"},
  {url: "https://soundcloud.com/milky_day/let-me-w-denise-julia?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", name: "Let Me"},
  {url: "https://soundcloud.com/elijahwoods/247-365a?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", name: "24/7, 365"},
  {url: "https://soundcloud.com/tomfrane/tom-frane-never-let-this-go?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", name: "Never Let This Go"},
];

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const yesButtonSize = noCount * 10 + 16;

  function handleYesClick() {
    setYesPressed(true);
  }

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  function toggleMusic() {
    setIsMusicPlaying(isMusicPlaying);
  }

  function handleNext() {
    setCurrentSongIndex((prevIndex) =>
      prevIndex < playlist.length - 1 ? prevIndex + 1 : 0);
  }

  function handlePrevious() {
    setCurrentSongIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : playlist.length - 1);
  }

  return (
    <div className="valentine-container">
      <div className="button-container">
      <button onClick={handlePrevious}><FontAwesomeIcon icon={faStepBackward} /></button>
        <button onClick={toggleMusic}>
            {isMusicPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</button>
          <button onClick={handleNext}><FontAwesomeIcon icon={faStepForward} /></button>
          <br/>
          <div className="current-song">
            {`Now Playing: ${playlist[currentSongIndex].name}`}
          </div>
      </div>
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="bear-Kissing"
          />
          <div className="text">Yayyy !!!</div>
        </>
      ) : (
        <>
          <img
            className="kiss"
            src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif"
            alt="bear with heart"
          />
          <div className="text">Will you be my valentine 🌹?</div>
          <div className="both-Button">
            <button
              className="yesButton"
              style={{
                fontSize: yesButtonSize,
                backgroundColor: "rgb(248, 229, 89)",
              }}
              onClick={handleYesClick}
            >
              Yes 🙈
            </button>
            <button className="NoButton" style={{}} onClick={handleNoClick}>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <ReactPlayer
        url={playlist[currentSongIndex].url}         // Replace with your music file URL
        playing={isMusicPlaying}
        onEnded={handleNext}  // Automatically play next song when current one ends
        //loop={currentSongIndex === playlist.length - 1}
        loop={true}
        volume={0.5} // Adjust the volume as needed
        width="0px"
        height="0px"
        autoPlay={true}  // Add the autoPlay attribute
      />

    </div>
    
  );
}

export default App;
