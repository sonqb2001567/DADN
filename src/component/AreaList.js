import { useState } from "react";
import * as Icon from 'react-bootstrap-icons';

function AreaList() {
    const [cur_area, setCur_Area] = useState(1);
    const [area_list, setArea_List] = useState([1, 2]);

    return (
        <div>
            {area_list.map((area, index) => (
                <button class = "btn btn-light" key={index} onClick={() => setCur_Area(area)}>{area}</button>
            ))}
            <button class = "btn btn-link">
                <Icon.PlusSquareDotted size={28}></Icon.PlusSquareDotted>
            </button>
        </div>
    );
}

export default AreaList;