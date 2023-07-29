import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import SuggestedVideoCard from "./SuggestedVideoCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { ColorRing } from "react-loader-spinner";

const VideoSuggestions = ({ nextVideoKeyWord }) => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState(null);

  const getRecommendedVideos = async (fetchMoreData) => {
    const nextPageToken = pageToken ? `&pageToken=${pageToken}` : "";
    const data = await fetch(
      YOUTUBE_SEARCH_API + nextPageToken + "&q=" + nextVideoKeyWord
    );
    const json = await data.json();
    if (fetchMoreData) {
      setVideos([...videos, ...json.items]);
    } else {
      setVideos([...json.items]);
    }
    setPageToken(json.nextPageToken);
  };

  useEffect(() => {
    getRecommendedVideos(false);
  }, [nextVideoKeyWord]);

  const fetchMoreData = () => {
    setTimeout(() => {
      getRecommendedVideos(true);
    }, 1200);
  };

  return (
    <InfiniteScroll
      dataLength={videos.length}
      next={fetchMoreData}
      //To put endMessage and loader to the top.
      className='flex items-center justify-center ml-4 flex-col'
      hasMore={true}
      loader={
        <div className='flex justify-center'>
          <ColorRing
            visible={true}
            height='50'
            width='50'
            ariaLabel='blocks-loading'
            wrapperStyle={{}}
            wrapperClass='blocks-wrapper'
            colors={["gray", "gray", "gray", "gray", "white"]}
          />
        </div>
      }>
      {videos.length ? (
        videos.map((video, index) => {
          return <SuggestedVideoCard info={video} key={index} />;
        })
      ) : (
        <div></div>
      )}
    </InfiniteScroll>
  );
};

export default VideoSuggestions;
