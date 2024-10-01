import React, { useEffect, useRef, useState } from "react";
import "./VideoSession.css";
import Video from "./video.json";
const VideoSession = () => {
  const [videoUrl, setVideoUrl] = useState([]);
  const [url, setUrl] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  };
  useEffect(() => {
    setVideoUrl(Video);
    setUrl(Video[0]);
    setLoading(false);
  }, []);

  useEffect(() => {
    handlePlay();
  }, [url]);

  const onClick = (item) => {
    setUrl(item);
  };
  const VideoPlayer = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div>
        {videoUrl ? (
          <video
            ref={videoRef}
            controls
            poster={url?.thumbnailUrl}
            controlsList="nodownload"
          >
            <source src={url?.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>No video available.</p>
        )}
      </div>
    );
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="video-container">
      <div className="session-grid d-flex flex-column flex-md-row gap-1">
        <div className="col-md-8">
          <label className="video-title">TEST title</label>
          <VideoPlayer />
        </div>
        <div className="col-md-4">
          <label className="video-title">Session's</label>
          <ul>
            {videoUrl?.map((i, index) => (
              <li
                key={index}
                className="video-list d-flex flex-column flex-md-row  gap-2"
                onClick={() => onClick(i)}
              >
                <div className="col-md-6">
                  <video
                    controls
                    onClick={(e) => {
                      e.stopPropagation();
                      onClick(i);
                    }}
                    poster={i?.thumbnailUrl}
                    controlsList="nodownload"
                  >
                    <source src={i?.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="video-item d-flex flex-column">
                  <label className="display-7">{i.title}</label>
                  <small>{i.author}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoSession;
