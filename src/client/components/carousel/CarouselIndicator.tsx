import React, { MouseEventHandler, PureComponent } from "react";

interface IProps {
    index:number,
    key:number,
    activeIndex:number,
    isActive:boolean,
    onClick:MouseEventHandler
}
class CarouselIndicator extends PureComponent<IProps> {
  render():JSX.Element {
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

export default CarouselIndicator;