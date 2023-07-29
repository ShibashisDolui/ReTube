import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div className='my-2' key={comment.id}>
      <Comment data={comment} />
      <div className='pl-5 border border-l-black ml-5 my-1'>
        {comment.replies && <CommentsList comments={comment.replies} />}
      </div>
    </div>
  ));
};

export default CommentsList;
