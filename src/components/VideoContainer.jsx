import React, { useContext, useEffect, useState } from "react";
import { YOUTUBE_API, YOUTUBE_SEARCH_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { ColorRing } from "react-loader-spinner";
import HomePageShimmer from "./Shimmer";
import { UserContext } from "./HomePage";

const VideoContainer = ({ category }) => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState(null);
  const { setShowProgressBar } = useContext(UserContext);

  useEffect(() => {
    setShowProgressBar(false);
    if (category === "") {
      getVideos(false);
    } else {
      getCategoryWiseVideos(false);
    }
  }, [category]);

  const getVideos = async (fetchMoreData) => {
    const nextPageToken = pageToken ? `&pageToken=${pageToken}` : "";
    const data = await fetch(YOUTUBE_API + nextPageToken);
    const json = await data.json();
    if (!fetchMoreData) {
      setVideos([...json.items]);
    } else {
      setVideos([...videos, ...json.items]);
    }
    setPageToken(json.nextPageToken);
  };

  const getCategoryWiseVideos = async (fetchMoreData) => {
    const nextPageToken = pageToken ? `&pageToken=${pageToken}` : "";
    const data = await fetch(
      YOUTUBE_SEARCH_API + nextPageToken + "&q=" + category
    );
    const json = await data.json();
    if (!fetchMoreData) {
      setVideos([...json.items]);
    } else {
      setVideos([...videos, ...json.items]);
    }
    setPageToken(json.nextPageToken);
  };

  const fetchMoreData = () => {
    setTimeout(() => {
      if (category === "") {
        getVideos(true);
      } else {
        getCategoryWiseVideos(true);
      }
    }, 1200);
  };

  return (
    <div>
      {!videos.length ? (
        <HomePageShimmer />
      ) : (
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchMoreData}
          //To put endMessage and loader to the top.
          className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'
          hasMore={true}
          loader={
            <div className='col-span-1 md:col-span-2 lg:col-span-3 m-auto'>
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
          {videos.map((video) => (
            <VideoCard
              info={video}
              key={video.id.videoId ? video.id.videoId : video.id}
              videoId={video.id.videoId ? video.id.videoId : video.id}
            />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default VideoContainer;
