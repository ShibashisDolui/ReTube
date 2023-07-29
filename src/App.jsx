import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import HomePage from "./components/HomePage";
import SearchResult from "./components/SearchResult";
import { createContext, useState } from "react";
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
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? "dark:bg-slate-800 text-white" : "";
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
