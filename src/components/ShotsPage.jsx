import React, { useEffect, useState } from "react";
import ShortsShimmer from "./ShortsShimmer";
import { SHORTS_API } from "../utils/constants";
import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaShareSquare,
  FaRocketchat,
} from "react-icons/fa";

const ShortsPage = () => {
  const [shorts, setShorts] = useState([]);

  useEffect(() => {
    fetchShorts();
  }, []);

  const fetchShorts = async () => {
    const data = await fetch(SHORTS_API);
    const json = await data.json();
    setShorts(json.items);
  };

  return shorts.length === 0 ? (
    <ShortsShimmer />
  ) : (
    <div className='w-full flex justify-center my-5 '>
      <div className='flex justify-center flex-col  gap-5'>
        {shorts.map((s) => (
          <div className='flex' key={s?.id?.videoId}>
            <iframe
              className='rounded-3xl'
              width='290'
              height='490'
              autoFocus
              src={
                "https://www.youtube.com/embed/" +
                s?.id?.videoId +
                "?autoplay=0&mute=1&rel=0"
              }
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen></iframe>
            <div className='flex flex-col justify-center gap-10 p-2'>
              <button className='border border-slate-500 p-2 rounded-full'>
                <FaRegThumbsUp size='20' />
              </button>

              <button className='border border-slate-500 p-2 rounded-full'>
                <FaRegThumbsDown size='20' />
              </button>

              <button className='border border-slate-500 p-2 rounded-full'>
                <FaRocketchat size='20' />
              </button>

              <button className='border border-slate-500 p-2 rounded-full'>
                <FaShareSquare size='20' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortsPage;
