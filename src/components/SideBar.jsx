import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import {
  MdAppShortcut,
  MdLiveTv,
  MdSportsEsports,
  MdOutlineSportsHandball,
  MdLocalMovies,
} from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { FaMusic } from "react-icons/fa";
import { UserContext } from "./HomePage";
import { handleSignOut } from "../utils/Firebase";

const SideBar = () => {
  const { setUser } = useContext(UserContext);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    isMenuOpen && (
      <div className='p-5 shadow-lg w-40'>
        <ul>
          <li>
            <Link className='flex items-center justify-start hover:scale-110 hover:shadow-xl transition duration-200'>
              <AiFillHome className='mr-1' />
              Home
            </Link>
          </li>
          <li>
            <Link
              className='flex items-center justify-start hover:scale-110 hover:shadow-xl transition duration-200'
              to='/shorts'>
              <MdAppShortcut className='mr-1' />
              Shorts
            </Link>
          </li>
          <li>
            <Link className='flex items-center justify-start hover:scale-110 hover:shadow-xl transition duration-200'>
              <BiSolidVideos className='mr-1' />
              Videos
            </Link>
          </li>
          <li>
            <Link className='flex items-center justify-start hover:scale-110 hover:shadow-xl transition duration-200'>
              <MdLiveTv className='mr-1' />
              Live
            </Link>
          </li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
          <li>
            <Link
              className='flex items-center justify-start hover:scale-110 hover:shadow-xl transition duration-200'
              to='/'
              state={{ category: "Music" }}>
              <FaMusic className='mr-1' />
              Music
            </Link>
          </li>
          <li>
            <Link
              className='flex items-center justify-start hover:scale-110 hover:shadow-xl transition duration-200'
              to='/'
              state={{ category: "Sports" }}>
              <MdOutlineSportsHandball className='mr-1' />
              Sports
            </Link>
          </li>
          <li>
            <Link
              className='flex items-center justify-start hover:scale-110 hover:shadow-xl transition duration-200'
              to='/'
              state={{ category: "Gaming" }}>
              <MdSportsEsports className='mr-1' />
              Gaming
            </Link>
          </li>
          <li>
            <Link
              className='flex items-center justify-start hover:scale-110 hover:shadow-xl transition duration-200'
              to='/'
              state={{ category: "Movies" }}>
              <MdLocalMovies className='mr-1' />
              Movies
            </Link>
          </li>
        </ul>
        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
          <li>
            <Link className='flex items-center justify-start hover:scale-110 hover:shadow-xl transition duration-200'>
              <FaMusic className='mr-1' />
              Music
            </Link>
          </li>
          <li>
            <Link className='flex items-center justify-start hover:scale-110 hover:shadow-xl transition duration-200'>
              <MdOutlineSportsHandball className='mr-1' />
              Sports
            </Link>
          </li>
          <li>
            <Link className='flex items-center justify-start hover:scale-110 hover:shadow-xl transition duration-200'>
              <MdSportsEsports className='mr-1' />
              Gaming
            </Link>
          </li>
          <li>
            <Link className='flex items-center justify-start hover:scale-110 hover:shadow-xl transition duration-200'>
              <MdLocalMovies className='mr-1' />
              Movies
            </Link>
          </li>
        </ul>
        <button
          className='flex items-center justify-center hover:scale-110 hover:shadow-xl transition duration-200 font-bold pt-3 px-2 rounded-lg'
          onClick={() => {
            localStorage.setItem("ReTubeUserId", JSON.stringify(null));
            handleSignOut(setUser);
          }}>
          <p className='mr-1 mb-1'>log out</p>
          <AiOutlineLogout />
        </button>
      </div>
    )
  );
};

export default SideBar;
