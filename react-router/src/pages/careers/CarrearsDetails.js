import { useParams } from "react-router-dom";

const CarrearsDetails = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default CarrearsDetails;
