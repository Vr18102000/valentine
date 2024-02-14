import { useState, useEffect } from "react";
import "./App.css";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStepForward, faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { firestore } from "./firebase"; 

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?😢",
  "Pookie please!🥺",
  "Resisting a good time?",
  "Come on, say yes!",
  "Can't resist the charm?",
  "Almost there, say yes!",
  "Getting closer, say yes!",
  "Persistent, huh?",
  "You're tough, say yes!",
  "Ready for a yes?",
  "I' gonna cry...😭",
  "One small yes?",
  "saranghaeyo!!",
  "Come on, just say yes! :)",
  "Let's make it special? :)",
  "Unlock the fun, say yes!",
  "labu!!",
  "Time for a yes!",
  "Final offer, say yes!",
  "Whatever, I am taking you",
];

const playlist = [
  {url: "https://soundcloud.com/j-tajor/like-i-do-remix-with-sunkis?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", name: "Like I Do"},
  {url: "https://soundcloud.com/demxntia/tonight?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", name: "Tonight"},
  {url: "https://soundcloud.com/milky_day/let-me-w-denise-julia?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", name: "Let Me"},
  {url: "https://soundcloud.com/elijahwoods/247-365a?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", name: "24/7, 365"},
  {url: "https://soundcloud.com/tomfrane/tom-frane-never-let-this-go?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", name: "Never Let This Go"},
];

//const RESPONSES_FILE_URL = "https://raw.githubusercontent.com/Vr18102000/valentine/main/responses.json";

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [changePicture, setChangePicture] = useState(0); // New state for changing the picture
  const yesButtonSize = noCount * 3 + 15;
  const [responses, setResponses] = useState([]);

  const imageSrcs = [
    "https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif",
    "https://media.tenor.com/Zy_SCCSexewAAAAi/jumping-for.gif",
    "https://media1.tenor.com/m/kac1ZogD8GcAAAAC/anime-love.gif",
    "https://media1.tenor.com/m/d5vxslFG8lcAAAAC/peachandgoma-iloveyou.gif",
    "https://media1.tenor.com/m/EQ1XagNtbr8AAAAC/love-you-forever.gif",
    "https://media.tenor.com/xlpKAOBdetYAAAAi/cute-love.gif",
    "https://media1.tenor.com/m/L2co3N9W-RgAAAAC/hug.gif"

   ] // Replace with your alternate image source


  //-------------------------------------------------------
  // Load responses from Firestore on component mount
  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const responseCollection = await firestore.collection('responses').get();
        const responseArray = responseCollection.docs.map(doc => doc.data());
        setResponses(responseArray);
      } catch (error) {
      console.error("Error fetching responses:", error);
      }
    };
    fetchResponses();
  }, []);

  async function updateResponses(response) {
    try {
      // Assume you have a "responses" collection in Firestore
      await firestore.collection('responses').add({
        user: "OdL3DMpgxkFJBtiKj2uF", // Replace with the actual username or identifier
        response,
        timestamp: new Date(),
      });
  
      console.log("Response updated successfully");
    } catch (error) {
      console.error("Error updating response:", error);
    }
  }

  //-------------------------------------------------
  function handleYesClick() {
    setYesPressed(true);
    updateResponses("Yes");
  }

  function handleNoClick() {
    setNoCount(noCount + 1);
    updateResponses("No");

    if (noCount >= 3 && noCount <= 7) {
      // Switch to the second picture
      setChangePicture(1);
    } else if (noCount >= 8 && noCount <= 10) {
      // Switch to the third picture after the 10th click
      setChangePicture(2); 
    }
    else if (noCount == 11) {
      // Switch to the third picture after the 10th click
      setChangePicture(3); 
    }
    else if (noCount >= 12 && noCount <= 14) {
      // Switch to the third picture after the 10th click
      setChangePicture(4); 
    }
    else if (noCount >= 15 && noCount <= 19) {
    // Switch to the third picture after the 10th click
    setChangePicture(5); 
   }
   else if (noCount >= 20) {
    // Switch to the third picture after the 10th click
    setChangePicture(6); 
   }
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  function toggleMusic() {
    setIsMusicPlaying(!isMusicPlaying);
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
          <div className="text">Can I have a Valentine Pic😘😘</div>
        </>
      ) : (
        <>
          <img
            className="kiss"
            src={imageSrcs[changePicture]}
            //src={changePicture ? alternateImageSrc : initialImageSrc}
            //src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif"
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
        loop={currentSongIndex === playlist.length - 1}
        //loop={true}
        volume={0.5} // Adjust the volume as needed
        width="0px"
        height="0px"
        autoPlay={true}  // Add the autoPlay attribute
      />

    </div>
    
  );
}

export default App;
