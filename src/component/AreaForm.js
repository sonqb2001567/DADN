import React from 'react'

function AreaForm() {
    const [areaName, setAreaName] = useState("");

  return (
    <div>
        <form class="area-form">
            <label htmlFor="area-name">Area Name</label>
            <input value={areaName} onChange={(e) => setAreaName(e.target.value)}type="areaName" placeholder="Area Name" id="areaName" name="areaName" />
        </form>
    </div>
  )
}

export default AreaForm
