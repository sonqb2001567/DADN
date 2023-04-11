import axios from "axios";
import { useEffect, useState } from "react";

function LEDButton() {
    const [value, setValue] = useState(0);
    const clickLED = () => {
        if (value === 0) {
            setValue(1);
        }
        else {
            setValue(0);
        }

        axios.post("http://localhost:8080/api/addtofeed/bbc-led/"+value)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });

        console.log("t");
    }

    return(<button onClick={clickLED}>LED</button>);
}

export default LEDButton;