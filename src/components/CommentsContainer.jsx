import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import { YOUTUBE_COMMENTS_API } from "../utils/constants";
import InfiniteScroll from "react-infinite-scroll-component";
import { ColorRing } from "react-loader-spinner";
import Comment from "./Comment";

const CommentsContainer = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [pageToken, setPageToken] = useState(null);

  const getComments = async (fetchMoreData) => {
    const nextPageToken = pageToken ? `&pageToken=${pageToken}` : "";
    const response = await fetch(
      YOUTUBE_COMMENTS_API + nextPageToken + "&videoId=" + videoId
    );
    const json = await response.json();
    if (fetchMoreData) {
      setComments([...comments, ...json.items]);
    } else {
      setComments([...json.items]);
    }
    setPageToken(json.nextPageToken);
  };

  useEffect(() => {
    getComments(false);
  }, [videoId]);

  const fetchMoreData = () => {
    setTimeout(() => {
      getComments(true);
    }, 1000);
  };

  return (
    <InfiniteScroll
      dataLength={comments.length}
      next={fetchMoreData}
      //To put endMessage and loader to the top.
      className='my-2 col-span-8'
      hasMore={true}
      loader={
        <div className='flex justify-center'>
          <ColorRing
            visible={true}
            height='50'
            width='50'
            ariaLabel='blocks-loading'
            wrapperStyle={{}}
            wrapperClass='blocks-wrapper'
            colors={["gray", "gray", "gray", "gray", "white"]}
          />
        </div>
      }>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      {comments &&
        comments.map((comment) => (
          <div className='my-2' key={comment.id}>
            <Comment data={comment} />
            <div className='pl-5 border border-l-black ml-5 my-1'>
              {comment.replies && <CommentsList comments={comment.replies} />}
            </div>
          </div>
        ))}
    </InfiniteScroll>
  );
};

export default CommentsContainer;
