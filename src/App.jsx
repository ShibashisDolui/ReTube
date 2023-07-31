import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import HomePage from "./components/HomePage";
import SearchResult from "./components/SearchResult";
import { createContext, useEffect, useState } from "react";
import ShortsPage from "./components/ShotsPage";

export const ThemeContext = createContext(null);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/shorts",
        element: <ShortsPage />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/search/:searchQuery",
        element: <SearchResult />,
      },
    ],
  },
]);

function App() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);
  const theme = isDarkMode ? "bg-slate-800 text-white" : "";

  useEffect(() => {
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <div className={theme}>
          <RouterProvider router={appRouter} />
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
