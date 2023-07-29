import { signInWithGoogle } from "../utils/Firebase";
import wallPaper from "../assets/wall-paper.jpg";
import { FcGoogle } from "react-icons/fc";

const SignIn = ({ setUser }) => {
  const handleClick = () => {
    signInWithGoogle(setUser);
  };
  return (
    <div>
      <img
        src={wallPaper}
        alt='You tube wallpaper'
        className='w-screen h-screen opacity-60'
      />
      <div className='flex absolute z-10 top-[8%] w-full items-center justify-center'>
        <div className='text-7xl sm:text-8xl font-bold text-red-600'>
          Re<span className='text-black'>Tube</span>
        </div>
      </div>
      <div className='absolute z-10 top-[75%] w-full'>
        <button
          onClick={handleClick}
          className='text-black flex px-2 items-center m-auto bg-slate-100 text-xl font-bold h-[50px] w-[300px] sm:w-[400px] rounded-2xl shadow-xl hover:bg-slate-600 hover:text-white hover:scale-105 hover:shadow-2xl transitio duration-300'>
          <FcGoogle size={40} className='mr-[18%]' />
          <p className='mb-1'>sign in with google</p>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
