// import { playAudio } from "../util";

const LibrarySong = ({ song, setCurrentSong, songs, id, audioRef, isPlaying, setSongs }) => {

    const songSelectHandler = async () => {
        const selectedSong = songs.filter((state) => state.id === id);
        await setCurrentSong(selectedSong[ 0 ]);
        // Add active class/state
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);
        // Check if song is playing
        if (isPlaying) audioRef.current.play();
    };

    return (
        <div onClick={ songSelectHandler } className={ `library-song ${song.active ? 'selected' : ""}` }>
            <img alt={ song.name } src={ song.cover }></img>
            <div className="song-description">
                <h3>{ song.name }</h3>
                <h4>{ song.artist }</h4>
            </div>

        </div>
    );
};

export default LibrarySong;