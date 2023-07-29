import React, { useContext, useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import SearchResultCard from "./SearchResultCard";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { ColorRing } from "react-loader-spinner";
import { UserContext } from "./HomePage";

const SearchResult = () => {
  const [videos, setVideos] = useState([]);
  const { setShowProgressBar } = useContext(UserContext);

  const { searchQuery } = useParams();

  const getVideos = async (fetchMoreData) => {
    const data = await fetch(YOUTUBE_SEARCH_API + "&q=" + searchQuery);
    const json = await data.json();
    if (fetchMoreData) {
      setVideos([...videos, ...json.items]);
    } else {
      setVideos([...json.items]);
    }
  };

  useEffect(() => {
    setShowProgressBar(true);
    getVideos(false);
  }, [searchQuery]);

  const fetchMoreData = () => {
    setTimeout(() => {
      getVideos(true);
    }, 1000);
  };

  return (
    <div className='w-full'>
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchMoreData}
        style={{ width: "100%" }}
        //To put endMessage and loader to the top
        hasMore={true}
        loader={
          <div className='flex justify-center w-full'>
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
        {videos.map((video) => {
          const { videoId } = video.id;
          return <SearchResultCard key={videoId} info={video} />;
        })}
      </InfiniteScroll>
    </div>
  );
};

export default SearchResult;
