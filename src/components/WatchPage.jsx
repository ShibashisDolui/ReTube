import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoDetails from "./VideoDetails";
import VideoSuggestions from "./VideoSuggestions";
import { UserContext } from "./HomePage";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [nextvideoKeyword, setNextVideoKeyWord] = useState(null);
  const videoId = searchParams.get("v");
  const { setShowProgressBar } = useContext(UserContext);

  const dispatch = useDispatch();

  useEffect(() => {
    setShowProgressBar(true);
    window.scrollTo(0, 0);
    dispatch(closeMenu());
  }, [videoId]);

  return (
    videoId && (
      <div className='p-5 w-full grid grid-cols-12'>
        <div className='col-span-8 w-full'>
          <div>
            <iframe
              className='w-full'
              height='400rem'
              src={`https://www.youtube.com/embed/${videoId}`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen></iframe>
          </div>
          <VideoDetails
            videoId={videoId}
            setNextVideoKeyWord={setNextVideoKeyWord}
          />
          <CommentsContainer videoId={videoId} />
        </div>
        <div className='col-span-4'>
          <LiveChat />
          {nextvideoKeyword && (
            <VideoSuggestions
              videoId={videoId}
              nextVideoKeyWord={nextvideoKeyword}
            />
          )}
        </div>
      </div>
    )
  );
};

export default WatchPage;
