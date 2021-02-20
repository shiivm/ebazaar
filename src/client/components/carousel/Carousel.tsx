import React, { useState } from "react";
import CarouselArrow from "./CarouselArrow";
import CarouselSlide from "./CarouselSlide";
import CarouselIndicator from "./CarouselIndicator";
import { useInterval } from '../../helper/customHooks';

interface IProps {
  slides: ISlide[];
}

export interface ISlide {
  content: string;
  image: string;
}

const Carousel = ({ slides }: IProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  useInterval(() => {
    changeSlide();
  }, 5000);

  const goToPrevSlide = (e: { preventDefault: () => void }): void => {
    e.preventDefault();
    let index = activeIndex;
    const slidesArr = [...slides];
    const slidesLength = slidesArr.length;

    if (index < 1) {
      index = slidesLength;
    }
    --index;
    setActiveIndex(index);
  };

  const goToNextSlide = (e: { preventDefault: () => void }): void => {
    e.preventDefault();
    changeSlide();
  };

  const goToSlide = (index: number): void => {
    setActiveIndex(index);
  };

  const changeSlide = (): void => {
    let index = activeIndex;
    const slidesArr = [...slides];
    const slidesLength = slidesArr.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <CarouselArrow
        class_name="carousel__arrow--left"
        onClick={(e: React.MouseEvent) => goToPrevSlide(e)}
      />

      <ul className="carousel__slides">
        {slides.map((slide: ISlide, index: number) => (
          <CarouselSlide
            key={index}
            index={index}
            activeIndex={activeIndex}
            slide={slide}
          />
        ))}
      </ul>
      <CarouselArrow
        class_name="carousel__arrow--right"
        onClick={(e: React.MouseEvent) => goToNextSlide(e)}
      />
      <ul className="carousel__indicators">
        {slides.map((_slide: ISlide, index: number) => (
          <CarouselIndicator
            key={index}
            index={index}
            activeIndex={activeIndex}
            isActive={activeIndex == index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </ul>
    </div>
  );
};

if (typeof window !== "undefined") {
  window.Component || (window.Component = {});
  window.Component["Carousel"] = Carousel;
}

export default Carousel;
