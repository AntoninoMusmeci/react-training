import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((s) => s !== "")
    .map((s) => {
      currentLink += `/${s}`;
      return (
        <div className="crumb" key={s}>
          <Link to={currentLink}>{s}</Link>
        </div>
      );
    });

  return(
    <div className="breadcrumbs">
        {crumbs}
    </div>
  )
};
export default Breadcrumbs;
