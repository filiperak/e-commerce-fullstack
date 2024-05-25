import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ImageContainer, Indicators, SingleIndicator } from "./styled";

const ImageSlider = ({ imageData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNext = () => {
    setCurrentSlide(currentSlide === imageData.length -1? 0: currentSlide +1)
  }
  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0? imageData.length-1 : currentSlide - 1)
  }
  return (
    <ImageContainer>
      <ArrowBackIosIcon 
      className="arrow arrow-left"
      onClick={handlePrevious}/>
      {imageData && imageData.length
        ? imageData.map((elem, index) => (
            <img
              key={index}
              src={elem}
              className={
                currentSlide === index
                  ? "current-img"
                  : "current-img hide-current-img"
              }
            />
          ))
        : null}
      <ArrowForwardIosIcon onClick={handleNext} 
       className="arrow arrow-rigth"/>
      <Indicators>
        {imageData && imageData.length
          ? imageData.map((elem, index) => (
              <SingleIndicator
                key={index}
                src={elem}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "hide-current-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              />
            ))
          : null}
      </Indicators>
    </ImageContainer>
  );
};

export default ImageSlider;
