import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/fold-out-animation";

const Slider = () => {
  return (
    <AwesomeSlider cssModule={AwesomeSliderStyles}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </AwesomeSlider>
  );
};

export default Slider;
