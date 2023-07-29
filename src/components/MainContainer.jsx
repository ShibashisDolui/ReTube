import React from "react";
import VideoContainer from "./VideoContainer";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { list1, list2 } from "../utils/Topics.js";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  const { state } = useLocation();
  const category = state ? state.category : "";

  return (
    <div className='flex flex-col w-full'>
      <Carousel
        axis='horizontal'
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        className='h-12'>
        <ButtonList list={list1} />
        <ButtonList list={list2} />
      </Carousel>
      <VideoContainer category={category} />
    </div>
  );
};

export default MainContainer;
