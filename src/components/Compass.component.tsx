import {  FC } from "react";

interface WindCompassProps {
  compassCircleTransformStyle: string;
}


const WindCompass: FC<WindCompassProps> = ({  compassCircleTransformStyle }) => {
  return <div className="App">
  <div className="compass">
    <div className="arrow" />
    <div
      className="compass-circle"
      style={{ transform: compassCircleTransformStyle }}
    />
  </div>
</div>
};

export default WindCompass;