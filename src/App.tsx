import './App.css'
import WindCompass from './components/Compass.component'
import ChangeDegComponent from './components/ChangeDeg.component'
import { useState } from 'react';

function App() {
  const [compassCircleTransformStyle, setCompassCircleTransformStyle] = useState<string>(
    `translate(-50%, -50%)`
  );
  return (
    <>
      <WindCompass compassCircleTransformStyle={compassCircleTransformStyle} />
      <ChangeDegComponent setCompassCircleTransformStyle={setCompassCircleTransformStyle} />
    </>
  )
}

export default App
