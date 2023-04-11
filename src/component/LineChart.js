import {Line} from 'react-chartjs-2';
import { 
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)
const tempURL="http://localhost:8080/api/temp/getAreaTemp/";
const moisURL="http://localhost:8080/api/mois/getAreaMois/";

function LineChart({device_id, device_type, area_id}) {
    const [cur_area, setCur_Area] = useState(area_id);
    const [temp, setTemp] = useState([]);
    const [chartType, setChartType] = useState(null);
    const [deviceID, setDeviceID] = useState(device_id);
    const [baseReqURL, setBaseURL] = useState("");

    useEffect(() => {
      if (device_type) { 
        setChartType(device_type);
      }

      if (chartType === "cbn"){
        setBaseURL(tempURL);
      }
    
      if (chartType === "cbda"){
        setBaseURL(moisURL);
      }
      
      const fetchData = () => {
        axios.get(baseReqURL+cur_area)
        .then((res) => {
          setTemp(res.data);
        });
      }
      
      fetchData();

      const intervalId = setInterval(fetchData, 5000);

    return () => {
      clearInterval(intervalId);
    }

  }, [chartType, baseReqURL, cur_area]);

    
        const data = {
            labels: ["24h", "20h", "16h", "12h", "8h", "4h", "0h"],
            datasets: [{
              data: [null],
              backgroundColor: 'transparent',
              borderColor: '#f26c6d',
              pointBordercolor: 'transparent',
              pointBorderWidth: 4
            }]
        }
        
        const options = {
            plugins: {
              legend: false
            },
            scales: {
              x: {
                grid: {
                  display: false
                }
              },
              y: {
                
              }
            }
          }
    
  if (chartType === "cbn"){
    data.datasets[0].data = temp.map(({temp}) => temp)
  }

  if (chartType === "cbda"){
    data.datasets[0].data = temp.map(({mois}) => mois)
  }
  
        return(
            <div className="LineChart">
                <Line data = {data} options={options}></Line>
            </div>
        )
}

export default LineChart;