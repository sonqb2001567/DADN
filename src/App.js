import { useState } from 'react';
import './App.css';
import AreaList from './component/AreaList';
import LEDButton from './component/LEDButton';
import LineChart from './component/LineChart';
import LoginPage from './component/LoginPage';


function App() {
  const[cur_area, setCur_Area] = useState(1);
  
  return (
    <div className="App">
      <AreaList></AreaList>
      <h2>Temp</h2>
      <LineChart device_id={1} device_type={"cbn"} area_id={cur_area}/>
      <h2>Moisture</h2>
      <LineChart device_id={2} device_type={"cbda"} area_id={cur_area}/>
      <LEDButton></LEDButton>
    </div>
  );
}

export default App;
