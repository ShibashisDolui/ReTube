import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

const ButtonList = ({ list }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const backgroundColor = isDarkMode ? "rgb(100 116 139)" : "#d9d6d0";
  return (
    <div className='mx-4 flex flex-wrap justify-center ml-4 h-12 '>
      {list.map((item) => (
        <Link to='/' key={item} state={{ category: item }}>
          <button
            className='px-4 m-1 w-auto h-9 rounded-xl hover:scale-110 font-bold'
            style={{ backgroundColor: backgroundColor }}>
            {item}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ButtonList;
