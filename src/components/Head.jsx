import React, { useContext, useEffect, useState } from "react";
import { BsFillSunFill, BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_AUTOCOMPLETE_API } from "../utils/constants";
import Suggestions from "./Suggestions";
import { cacheResults } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { UserContext } from "./HomePage";
import { BiLogoYoutube, BiUserCircle } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../App";

const Head = ({ showProgressBar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const searchCache = useSelector((store) => {
    return store.search;
  });

  const dispatch = useDispatch();
  const toogleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getAutocompleteResults = async () => {
    // make an api call after every key press
    // but if the difference between 2 API call is < 200ms
    // decline the API call
    const response = await fetch(YOUTUBE_AUTOCOMPLETE_API + searchTerm);
    const json = await response.json();
    setSearchResults(json[1]);
    dispatch(cacheResults({ [searchTerm]: json[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache && searchCache[searchTerm]) {
        setSearchResults(searchCache[searchTerm]);
      } else {
        getAutocompleteResults();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const handleSubmit = (event) => {
    if (event?.type === "submit") {
      event.preventDefault();
    }
    if (searchTerm !== "") {
      navigate("/search/" + searchTerm);
    }
    setShowSuggestions(false);
  };

  const handleImageError = (e) => {
    e.target.src = <BiUserCircle size={45} className='rounded-full' />;
  };

  const UserProfileImage = ({ user }) => (
    <>
      {user?.photoURL && typeof user.photoURL === "string" ? (
        <img
          src={user.photoURL}
          className='w-10 h-10 rounded-full'
          alt='User Profile'
          onError={handleImageError}
        />
      ) : (
        <BiUserCircle size={45} className='rounded-full' />
      )}
    </>
  );

  return (
    <header>
      {showProgressBar && <ProgressBar />}
      <div className='flex justify-between items-center sticky top-0 z-50 h-14 shadow-md'>
        <section className='flex items-center pl-2 w-130'>
          <GiHamburgerMenu
            size='1.6rem'
            color='grey'
            className='cursor-pointer'
            onClick={toogleMenuHandler}
          />
          <Link to='/' className='flex items-center justify-center'>
            <BiLogoYoutube
              className='pl-3 cursor-pointer max-sm:hidden'
              size={40}
            />
            <span className='font-extrabold cursor-pointer max-sm:hidden tracking-tighter'>
              <span className='text-red-700'>Re</span>
              <span>Tube</span>
            </span>
          </Link>
        </section>
        <section className='flex items-center justify-center w-full max-sm:justify-end'>
          <form
            className='flex w-1/2 relative max-sm:hidden'
            onSubmit={handleSubmit}>
            <input
              type='text'
              className='px-5 bg-inherit w-full border border-gray-400 p-1 rounded-l-full focus:outline-none'
              onChange={(event) => setSearchTerm(event.target.value)}
              value={searchTerm}
              onFocus={() => setShowSuggestions(true)}
            />
            <button className='border border-gray-400 py-2 px-3 rounded-r-full'>
              <BsSearch />
            </button>
            {showSuggestions && (
              <Suggestions
                searchResults={searchResults}
                setSearchTerm={setSearchTerm}
                setShowSuggestions={setShowSuggestions}
              />
            )}
          </form>

          <button className='sm:hidden mr-4'>
            <BsSearch />
          </button>
        </section>
        <section className='flex items-center justify-end pr-7'>
          {!isDarkMode ? (
            <MdDarkMode
              size={45}
              className='mr-3 cursor-pointer'
              onClick={() => setIsDarkMode(true)}
            />
          ) : (
            <BsFillSunFill
              size={45}
              className='mr-3 cursor-pointer'
              onClick={() => setIsDarkMode(false)}
            />
          )}
          {user && <UserProfileImage user={user} />}
        </section>
      </div>
    </header>
  );
};

export default Head;
