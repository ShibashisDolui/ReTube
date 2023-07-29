import { Link } from "react-router-dom";
import numberFormatter from "../utils/numberFormatter";

const SuggestedVideoCard = ({ info }) => {
  const { snippet, id } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-1 shadow-lg col-span-1 hover:shadow-slate-500 rounded-md w-[100%]'>
      <Link to={"/watch?v=" + id?.videoId}>
        <img
          alt='thumbnail'
          className='rounded-lg w-full'
          src={thumbnails.medium.url}
        />
        <ul>
          <li className='font-bold'>{title}</li>
          <li>{channelTitle}</li>
        </ul>
      </Link>
    </div>
  );
};

export default SuggestedVideoCard;
