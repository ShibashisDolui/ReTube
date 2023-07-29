import { BiSolidUserCircle } from "react-icons/bi";

const Comment = ({ data }) => {
  const { textOriginal, authorDisplayName, authorProfileImageUrl } =
    data.snippet.topLevelComment.snippet;

  return (
    <div className='grid grid-cols-12 px-1 rounded-lg h-15 overflow-auto'>
      <div className='px-1 col-span-1'>
        {authorDisplayName ? (
          <img src={authorProfileImageUrl} alt='' className='rounded-3xl' />
        ) : (
          <BiSolidUserCircle size='2.5rem' />
        )}
      </div>
      <div className='px-2 col-span-11 text-shadow-lg'>
        <p className='font-bold'>{authorDisplayName}</p>
        <p>{textOriginal}</p>
      </div>
    </div>
  );
};

export default Comment;
