import React from "react";
import { useInView } from "react-intersection-observer";
import "./slider.css";

function Slider({ imageSrc, title, subTitle, flipped }) {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const renderContent = () => {
    if (flipped) {
      return (
        <>
          <img src={imageSrc} alt="Travel Places" className="slider_Image" />
          <div className="slider_content">
            <h1 className="slider_title">{title}</h1>
            <p className="slider_subtitle">{subTitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider_content">
            <h1 className="slider_title">{title}</h1>
            <p className="slider_subtitle">{subTitle}</p>
          </div>
          <img src={imageSrc} alt="Travel Places" className="slider_Image" />
        </>
      );
    }
  };

  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
}

export default Slider;
