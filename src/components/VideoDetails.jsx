import { useEffect, useState } from "react";
import { VIDEO_DETAILS_API } from "../utils/constants";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { HiScissors } from "react-icons/hi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import nFormatter from "../utils/numberFormatter";

const VideoDetails = ({ videoId, setNextVideoKeyWord }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [description, setDescription] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState("Show More...");
  const [height, setHeight] = useState("2.5%");

  const getVideoDetails = async () => {
    const response = await fetch(VIDEO_DETAILS_API + "&id=" + videoId);
    const json = await response.json();
    const videoDetails = json.items[0];
    setLikeCount(nFormatter(videoDetails?.statistics?.likeCount));
    setDescription(videoDetails?.snippet?.description);
    const { tags } = videoDetails.snippet;
    if (tags) {
      setNextVideoKeyWord(tags[Math.ceil(Math.random() * tags.length)]);
    } else {
      setNextVideoKeyWord("Random videos");
    }
  };

  useEffect(() => {
    getVideoDetails();
    setHeight("2.5%");
    setShowDetails("Show More...");
  }, [videoId]);

  const handleShowMoreButton = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      setHeight("inherit");
      setShowDetails("Show Less");
    } else {
      setHeight("2.5%");
      setShowDetails("Show More...");
    }
  };

  return (
    <>
      {description && (
        <>
          <div className='flex justify-between items-center p-2 border border-gray-400 rounded-b-md shadow-md'>
            <div className='flex'>
              <button className='flex items-center border border-neutral-700 p-1 px-2 rounded-l-3xl hover:bg-slate-400 hover:text-white transition-all duration-300'>
                <BiLike size='1.2rem' />
                <span className='mb-1'>{likeCount}</span>
              </button>
              <button className='border border-neutral-700 rounded-r-3xl p-1 px-2 hover:bg-slate-400 hover:text-white transition-all duration-300'>
                <BiDislike size='1.2rem' />
              </button>
            </div>
            <button className='rounded-full border border-neutral-700 p-2 hover:bg-slate-400 hover:text-white transition-all duration-300'>
              <FaShare size='1.2rem' />
            </button>
            <button className='rounded-full border border-neutral-700 p-2 hover:bg-slate-400 hover:text-white transition-all duration-300'>
              <HiScissors size='1.2rem' />
            </button>
            <button className='rounded-full border border-neutral-700 p-2 hover:bg-slate-400 hover:text-white transition-all duration-300'>
              <MdOutlinePlaylistAdd size='1.2rem' />
            </button>
            <button className='rounded-full border border-neutral-700 p-2 hover:bg-slate-400 hover:text-white transition-all duration-300'>
              <BsThreeDots size='1.2rem' />
            </button>
          </div>
          <div className='overflow-hidden p-1' style={{ height: height }}>
            <p className='tracking-wide text-sm font-thin'>{description}</p>
          </div>
          <button className='p-1' onClick={handleShowMoreButton}>
            {showDetails}
          </button>
        </>
      )}
    </>
  );
};

export default VideoDetails;
