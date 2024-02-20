import { Dispatch, FC, SetStateAction } from "react";

interface ChangeDegComponentProps {
  setCompassCircleTransformStyle: Dispatch<SetStateAction<string>>;
}
const ChangeDegComponent: FC<ChangeDegComponentProps> = ({setCompassCircleTransformStyle}) => {
  return <div>
    <input onChange={e => setCompassCircleTransformStyle(`translate(-50%, -50%) rotate(${e.target.value}deg)`)} type="number" max={360} min={-360} />
  </div>

}

export default ChangeDegComponent
