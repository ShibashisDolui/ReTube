import React from "react";

const ShimmerCard = () => {
  return (
    <div className='h-[280px] animate-pulse m-2 p-1 shadow-lg col-span-1 rounded-md bg-slate-300 cursor-pointer'>
      <div className='w-full h-[60%] bg-slate-500'></div>
      <div className='w-[85%] h-[10%] bg-slate-500 mt-2 rounded-r-md'></div>
      <div className='w-[70%] h-[8%] bg-slate-500 mt-2 rounded-r-md'></div>
      <div className='w-[60%] h-[8%] bg-slate-500 mt-2 rounded-r-md'></div>
    </div>
  );
};

const HomePageShimmer = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
      {Array.from({ length: 18 }).map((val, index) => {
        return <ShimmerCard key={index} />;
      })}
    </div>
  );
};

export default HomePageShimmer;
