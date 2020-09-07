import React from 'react';
import ShakaPlayer from 'shaka-player-react';

function App() {
  return (
      <ShakaPlayer autoPlay src="test_mux.mpd" />
      // <ShakaPlayer autoPlay src="test_mux_encrypted.mpd" />
  );
}

export default App;
