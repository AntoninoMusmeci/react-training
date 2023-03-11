import { Outlet } from "react-router-dom"

const CareersLayout = () => {
  return (
    <div className="careers-layout">
        <h2>Carrers</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, reiciendis!</p>
        <Outlet/>
    </div>
  )
}

export default CareersLayout