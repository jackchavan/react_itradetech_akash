import { useNavigate } from "react-router-dom";
import "./Blogs.css";
import Marquee from "react-fast-marquee";
import { PATH_BLOG_DETAILS } from "../../constants/PathConstants";
import { useEffect, useState } from "react";
import AdsComponent from "../../components/GoogleAds/GoogleAds";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../services/blogsService";
import { setBlogsData, setLoading } from "../../store/actions/CommonActions";
import { formatDate } from "../../utils/CommonMethods";
const LOCAL_STORAGE_FETCH_TIME = "blogFetchTime";
const Blogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogsData } = useSelector((s) => ({
    blogsData: s.common.blogs,
  }));
  const [blogs, setBlogs] = useState([]);
  const [runningBlogs, setRunningBlogs] = useState([]);
  const [hotNews, setHotNews] = useState([]);
  const [smallNews, setSmallNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [lastFetchTime, setLastFetchTime] = useState(
    parseInt(localStorage.getItem(LOCAL_STORAGE_FETCH_TIME)) || Date.now()
  );

  useEffect(() => {
    if (Date.now() - lastFetchTime >= 60000) {
      getAllBlogs();
    }

    if (blogsData?.length > 0) {
      setBlogsState(blogsData);
    }
    const intervalId = setInterval(() => {
      getAllBlogs();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = hotNews.indexOf(selectedNews);
      const nextIndex = (currentIndex + 1) % hotNews.length;
      setSelectedNews(hotNews[nextIndex]);
    }, 30000);

    return () => clearInterval(intervalId);
  }, [selectedNews, hotNews]);

  const updateBlogWithImage = (blogs) => {
    if (!Array.isArray(blogs)) return [];

    return blogs.map((blog) => {
      const imageMedia = blog?.media?.find(
        (media) => media?.mediaType === "image" && media?.mediaUrl
      );

      return {
        ...blog,
        blogImg: imageMedia ? imageMedia.mediaUrl : null,
      };
    });
  };

  const setBlogsState = (response) => {
    const categorizedBlogs = {
      selectedNews: null,
      blogs: [],
      hotNews: [],
      smallNews: [],
      runningBlogs: [],
    };

    // Update all blogs with images first to avoid redundant calls
    const updatedBlogs = updateBlogWithImage(response);

    updatedBlogs.forEach((b) => {
      switch (b.type) {
        case 1:
          categorizedBlogs.blogs.push(b);
          break;
        case 2:
          categorizedBlogs.hotNews.push(b);
          if (!categorizedBlogs.selectedNews) categorizedBlogs.selectedNews = b;
          break;
        case 3:
          categorizedBlogs.smallNews.push(b);
          break;
        case 4:
          categorizedBlogs.runningBlogs.push(b);
          break;
      }
    });

    setSelectedNews(categorizedBlogs.selectedNews);
    setBlogs(categorizedBlogs.blogs);
    setHotNews(categorizedBlogs.hotNews);
    setSmallNews(categorizedBlogs.smallNews);
    setRunningBlogs(categorizedBlogs.runningBlogs);
  };

  const updateLastFetchTime = () => {
    const now = Date.now();
    setLastFetchTime(now);
    localStorage.setItem(LOCAL_STORAGE_FETCH_TIME, now);
  };

  const getAllBlogs = async () => {
    dispatch(setLoading(true));

    try {
      const response = await getBlogs();
      if (!response || !Array.isArray(response)) return;
      updateLastFetchTime();
      dispatch(setBlogsData(response));
      setBlogsState(response);
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      dispatch(setLoading(false));
    }
  };

  const runningText = () => {
    return (
      <Marquee className="running-text" pauseOnHover={true}>
        <RenderRunningText />
      </Marquee>
    );
  };

  const onClickItem = (item) => {
    navigate(`${PATH_BLOG_DETAILS}/${item.id}`);
  };

  const RenderRunningText = () => {
    return (
      <div className="running-text-container ">
        {runningBlogs?.map((item, i) => (
          <span onClick={() => onClickItem(item)} key={i}>
            <span className="dot"> </span>
            <span>{item?.title}</span>
          </span>
        ))}
      </div>
    );
  };

  const blogCard = (news) => {
    let i = 0;
    return (
      <div className="blogBox" key={i + 1}>
        <div
          className="imgWrap"
          style={{ backgroundImage: `url(${news?.blogImg})` }}
        >
          <div className="blogHasImg">
            <h3>{news?.title}</h3>
            <span>{formatDate(news?.createdAt)}</span>
            <div>
              <p>{news?.media[0]?.imgShrtDesc}</p>

              <a className="readMore" onClick={() => onClickItem(news)}>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const blog = (news) => {
    let i = "A";
    return (
      <div className="blogDetailWrapper blogBox" key={i + 1}>
        <h3>{news?.title}</h3>
        <span>{formatDate(news?.createdAt)}</span>

        <div className="blogDetail">
          <p>{news.content.substring(0, 250) + "....."}</p>
          <a onClick={() => onClickItem(news)}>Read More</a>
        </div>
      </div>
    );
  };

  const sideNews = () => {
    return smallNews.map((news, i) => (
      <div key={i} className="side-item" onClick={() => onClickItem(news)}>
        <img src={news?.blogImg} alt="Side News 1" />
        <p className="text">{news?.title}</p>
      </div>
    ));
  };

  const latestBlogs = () => {
    return (
      <div
        className="latest-blog-container container"
        onClick={() => onClickItem(selectedNews)}
      >
        {/* Main News  */}
        <div className="main-news">
          <img
            src={selectedNews?.blogImg}
            alt="Main News Image"
            className="latest-img"
          />
          {/* <span className="category">demo</span> */}
          <p className="headline">
            {selectedNews?.media[0]?.imgShrtDesc &&
              selectedNews?.media[0]?.imgShrtDesc.substring(0, 200) + "..."}
          </p>
        </div>

        {/* Side News  */}
        <div className="side-news">{sideNews()}</div>
      </div>
    );
  };
  return (
    <div>
      {runningBlogs.length > 0 && (
        <div className="sticky-header text-wrapper">{runningText()}</div>
      )}
      <div className="container-fluid">
        <div className="title-container">
          <h2>Blogs</h2>
        </div>
        <div className="row">
          <div className="col-md-8 blog-container">
            {selectedNews && latestBlogs()}
            <h1>Latest Blogs</h1>
            {blogs.map((i) => (i?.blogImg ? blogCard(i) : blog(i)))}
          </div>
          <div className="col-md-4 add-container">
            <AdsComponent dataAdSlot="6105440045" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
