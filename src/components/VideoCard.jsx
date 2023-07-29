import { Link } from "react-router-dom";
import numberFormatter from "../utils/numberFormatter";

const VideoCard = ({ info, videoId }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='m-2 p-1 shadow-lg col-span-1 hover:shadow-slate-500 rounded-md'>
      <Link to={"/watch?v=" + videoId}>
        <img
          alt='thumbnail'
          className='rounded-lg'
          src={thumbnails.medium.url}
          style={{ width: "100%" }}
        />
        <ul>
          <li className='font-bold'>{title}</li>
          <li>{channelTitle}</li>
          {statistics && (
            <li>{numberFormatter(statistics?.viewCount, 1)} view</li>
          )}
        </ul>
      </Link>
    </div>
  );
};

//higher order components
export const AdVideoCard = ({ info }) => {
  return (
    <div className='p-1 m-1 border border-red-900'>
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
