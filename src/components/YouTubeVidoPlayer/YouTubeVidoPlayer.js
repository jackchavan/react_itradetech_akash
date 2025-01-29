import React, { useEffect, useRef } from 'react';
import YouTubePlayer from 'youtube-player';

const YouTubeVideoPlayer = ({ videoId }) => {
  const playerContainer = useRef(null);
  const player = useRef(null);

  useEffect(() => {
    // Initialize the YouTube player when the component is mounted
    player.current = YouTubePlayer(playerContainer.current, {
      videoId: videoId,
      playerVars: {
        autoplay: 0, // Autoplay video
        controls: 1, // Show controls
        rel: 0, // Disable related videos
        modestbranding: 1, // Disable YouTube logo on controls
      },
    });

    // Cleanup the player on component unmount
    return () => {
      player.current.destroy();
    };
  }, [videoId]);

  return (
    <div>
      <div ref={playerContainer} style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default YouTubeVideoPlayer;
