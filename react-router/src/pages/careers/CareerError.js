import { useRouteError, Link } from "react-router-dom";

const CareerError = () => {
  const error = useRouteError();
  return (
    <div>
      <p> Error: {error.message} </p>
      <Link to="/">Back to the home page</Link>
    </div>
  );
};

export default CareerError;
