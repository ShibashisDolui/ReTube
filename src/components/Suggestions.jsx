import { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { ThemeContext } from "../App";
import { useNavigate } from "react-router-dom";

const Suggestions = ({ searchResults, setSearchTerm, setShowSuggestions }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const backgroundColor = isDarkMode ? "rgb(30 41 59)" : "white";
  const navigate = useNavigate();
  return (
    <div
      className='border absolute z-10 top-8 mt-2 w-full shadow-md rounded-md'
      style={{ backgroundColor: backgroundColor }}>
      <ul className='divide-y'>
        {searchResults.map((searchResult, index) => (
          <li
            key={index}
            className='flex items-center px-4 py-1 font-bold cursor-pointer'>
            <BsSearch className='mr-2' />
            <button
              onClick={() => {
                setSearchTerm(searchResult);
                navigate("/search/" + searchResult);
                setShowSuggestions(false);
              }}>
              {searchResult}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
