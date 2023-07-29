import React from "react";
import { Link } from "react-router-dom";

const SearchResultCard = ({ info }) => {
  const thumbnailUrl = info?.snippet?.thumbnails?.medium?.url;
  const { channelTitle, title } = info?.snippet;
  return (
    <div>
      <Link
        to={"/watch?v=" + info.id.videoId}
        className='flex m-4 p-2 w-full shadow-md'>
        <div className='mr-4 w-1/2'>
          <img
            src={thumbnailUrl}
            className='w-full rounded-md hover:rounded-none cursor-pointer'
          />
        </div>
        <div className='w-3/4 px-3'>
          <p className='text-lg font-semibold font-mono'>{channelTitle}</p>
          <p className='text-lg font-semibold font-mono'>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default SearchResultCard;
