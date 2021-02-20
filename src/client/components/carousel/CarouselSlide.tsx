import React, { PureComponent } from "react";
import { ISlide } from "./Carousel";
import { isClient } from "../../helper/clientUtils";

interface IProps {
  index: number;
  activeIndex: number;
  slide: ISlide;
}
class CarouselSlide extends PureComponent<IProps> {
  render(): JSX.Element {
    const imagePath = isClient() ? window.Config.IMAGE_PATH : "./images";
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <img
          src={`${imagePath}/${this.props.slide.image}`}
          alt="image"
          className="img-responsive"
          width="900px"
          height="140px"
        />
        <p className="carousel-slide__content">{this.props.slide.content}</p>
      </li>
    );
  }
}

export default CarouselSlide;
