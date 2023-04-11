import './App.css';
import LEDButton from './component/LEDButton';
import LineChart from './component/LineChart';
import LoginPage from './component/LoginPage';


function App() {
  
  return (
    <div className="App">
      <h2>Temp</h2>
      <LineChart device_id={1} device_type={"cbn"} area_id={1}/>
      <h2>Moisture</h2>
      <LineChart device_id={2} device_type={"cbda"} area_id={1}/>
      <LEDButton></LEDButton>
    </div>
  );
}

export default App;
