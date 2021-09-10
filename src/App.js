import { useState } from "react";
import Player from "./conponents/Player";
import Song from "./conponents/Song";
import "./styles/app.scss";
import data from "./util";

function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
