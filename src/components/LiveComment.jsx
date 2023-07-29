import { BiSolidUserCircle } from "react-icons/bi";

const LiveComment = ({ name, message }) => {
  return (
    <div className='flex'>
      <div className='mr-1 my-1'>
        <BiSolidUserCircle size='1.3rem' />
      </div>
      <div>
        <span className='text-sm font-bold pr-2'>{name}</span>
        <p className='text-sm inline'>{message}</p>
      </div>
    </div>
  );
};

export default LiveComment;
