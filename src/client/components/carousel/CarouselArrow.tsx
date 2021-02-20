import React, { MouseEventHandler, PureComponent } from "react";

interface IProps {
  class_name: string;
  onClick: MouseEventHandler;
}

class CarouselArrow extends PureComponent<IProps> {
  render():JSX.Element {
    const class_name = this.props.class_name || "";
    return (
      <a
        href="#"
        className={`carousel__arrow ${class_name}`}
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-left"></span>
      </a>
    );
  }
}
if (typeof window !== "undefined") {
  window.Component || (window.Component = {});
  window.Component["CarouselArrow"] = CarouselArrow;
}

export default CarouselArrow;
