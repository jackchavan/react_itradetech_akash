import { useEffect, useState } from "react";
import { getBlogDetail } from "../../services/blogsService";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/actions/CommonActions";
import { useParams } from "react-router-dom";
import AdsComponent from "../../components/GoogleAds/GoogleAds";
import "./BlogsDetails.css";
import YouTubeVideoPlayer from "../../components/YouTubeVidoPlayer/YouTubeVidoPlayer";
const BlogsDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [blog, setBlog] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getBlogDetails();
  }, []);

  const getBlogDetails = async () => {
    dispatch(setLoading(true));

    try {
      const response = await getBlogDetail(id);
      if (response) {
        setBlog(response);
        const video = response.media.filter((v) => v?.mediaType === "video");
        setVideos(video);
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));

      console.error(error);
      return false;
    }
  };
  
  const getYouTubeVideoId = (url) => {
    const regex = /(?:youtube\.com\/.*[?&]v=|youtu\.be\/)([^&#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <div className="container-fluid">
       <div className="title-container">
          <h2>{blog?.title}</h2>
        </div>
      <div className="row">
        <div className="col-md-8 blog-container">
          <span dangerouslySetInnerHTML={{ __html: blog?.content }} />
          {videos.map((v) => (
            <YouTubeVideoPlayer videoId={getYouTubeVideoId(v.mediaUrl)} />
          ))}
        </div>
        <div className="col-md-4 add-container">
          <AdsComponent dataAdSlot="6105440045" />
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
