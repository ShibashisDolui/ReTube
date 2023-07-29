import Head from "./Head";
import Body from "./Body";
import { useLocation, useNavigate } from "react-router-dom";
import SignIn from "./SignIn";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

const HomePage = () => {
  const [showProgressBar, setShowProgressBar] = useState(false);
  const { category } = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("ReTubeUserId"))
  );

  useEffect(() => {
    localStorage.setItem("ReTubeUserId", JSON.stringify(user));
    navigate("/");
  }, [user]);

  return (
    <div>
      {!user ? (
        <SignIn setUser={setUser} />
      ) : (
        <>
          <UserContext.Provider
            value={{ setUser, user, showProgressBar, setShowProgressBar }}>
            <Head showProgressBar={showProgressBar} />
            <Body category={category} />
          </UserContext.Provider>
        </>
      )}
    </div>
  );
};

export default HomePage;
