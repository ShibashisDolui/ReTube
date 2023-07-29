import { useContext, useEffect, useRef, useState } from "react";
import LiveComment from "./LiveComment";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import getRandomeMessage from "../utils/randomTextMessage";
import { UserContext } from "./HomePage";
import getRandomName from "../utils/randomNames";

const LiveChat = () => {
  const [liveComment, setLiveComment] = useState();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [isVisible, setIsVisible] = useState(true);
  const { user } = useContext(UserContext);
  const height = isVisible ? "400px" : "32px";

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addMessage({
        name: user.displayName,
        message: [liveComment],
      })
    );
    setLiveComment("");
  };

  useEffect(() => {
    let i = 0;
    const timeOut = setInterval(() => {
      dispatch(
        addMessage({
          name: getRandomName(),
          message: getRandomeMessage(),
        })
      );
      i++;
    }, 3000);

    return () => {
      return clearInterval(timeOut);
    };
  }, []);

  return (
    <div
      className='ml-4 w-full border border-black rounded-lg flex flex-col'
      style={{ height: height }}>
      <div className='flex items-center justify-center shadow-md p-1 relative'>
        <span className='font-bold'>ChatBox</span>
        <div className='absolute right-1 cursor-pointer'>
          {isVisible ? (
            <AiOutlineUp size={20} onClick={() => setIsVisible(false)} />
          ) : (
            <AiOutlineDown size={20} onClick={() => setIsVisible(true)} />
          )}
        </div>
      </div>
      {isVisible && (
        <>
          <div className='flex flex-col-reverse overflow-y-scroll px-1 h-full'>
            {chatMessages.map((chatMessage, index) => {
              const { name, message } = chatMessage;
              return <LiveComment name={name} message={message} key={index} />;
            })}
          </div>
          <form className='flex' onSubmit={handleSubmit}>
            <input
              type='text'
              className='border border-gray-500 w-full rounded-b-md px-2 py-1 bg-inherit'
              value={liveComment}
              onChange={(e) => setLiveComment(e.target.value)}
            />
            <button className='px-2 bg-green-400'>send</button>
          </form>
        </>
      )}
    </div>
  );
};

export default LiveChat;
