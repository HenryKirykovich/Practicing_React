// Last.fm API
// Last.fm provides an API that allows developers to access music data, including artist information, 
// album details, and user listening history. 
// This API is particularly useful for applications that want to provide music recommendations based on user preferences. Here’s an example of fetching top artists:
// 
// $api_key = 'YOUR_API_KEY';
// $response = file_get_contents('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=' . $api_key . '&format=json');
// $topArtists = json_decode($response, true);
// print_r($topArtists);


// API account created
// Here are the details of your new API account.
// 
// Application name	MyTestAplication The Wheater
// API key	93bf0c407affc5fbf78df8acc946db05
// Shared secret	2ef40b5eae4a9f8019d512b36c46c8bf
// Registered to	groo21021984

import { useState } from "react";

const API_KEY = "93bf0c407affc5fbf78df8acc946db05";
const BASE_URL = "http://ws.audioscrobbler.com/2.0/";
const YOUTUBE_API_KEY = "AIzaSyAOlA_quUGKcceq-RVVg3Fe1SRZeKhNcDY";

const LastFmMusicPlayer = () => {
  const [artist, setArtist] = useState(""); // User input for artist name
  const [tracks, setTracks] = useState([]); // List of top songs
  const [playingSong, setPlayingSong] = useState(""); // YouTube video ID

  // Fetch top tracks from Last.fm
  const fetchTracks = async () => {
    if (!artist.trim()) return;  //remove whitespace and not nec signs

    try {
      const response = await fetch(
        `${BASE_URL}?method=artist.gettoptracks&artist=${encodeURIComponent(
          artist
        )}&api_key=${API_KEY}&format=json`
      );

      const data = await response.json();
      if (data.toptracks && data.toptracks.track) {
        setTracks(data.toptracks.track.slice(0, 5)); // Get top 5 songs
        console.log("This data from FM radio: ",  data.toptracks.track)
      } else {
        setTracks([]);
      }
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  };

  // Fetch YouTube video ID using search query
  const fetchYouTubeVideo = async (songName) => {
    const query = `${songName} ${artist} official video`;
    const youtubeSearchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&key=${YOUTUBE_API_KEY}`;

    try {
      const response = await fetch(youtubeSearchUrl);
      const data = await response.json();
      if (data.items.length > 0) {
        setPlayingSong(data.items[0].id.videoId); // Set first video result
      }
    } catch (error) {
      console.error("Error fetching YouTube video:", error);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>🎵 Last.fm Music Player</h2>
      <input
        type="text"
        placeholder="Enter artist name..."
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <button onClick={fetchTracks}>Search</button>

      {tracks.length > 0 && (
        <ul>
          {tracks.map((track, index) => (
            <li key={index}>
             {track.artist.name} {" - "} {track.name} {" "} 
              <button onClick={() => fetchYouTubeVideo(track.name)}>▶ Play</button>
            </li>
          ))}
        </ul>
      )}

      {playingSong && (
        <div style={{ marginTop: "20px" }}>
          <h3>Now Playing:</h3>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${playingSong}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="YouTube Player"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default LastFmMusicPlayer;















































