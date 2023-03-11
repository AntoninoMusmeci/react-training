import { useLoaderData, useParams } from "react-router-dom";

const CarrearsDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="careers-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          corporis ab deleniti nulla eligendi? Beatae dolorem, dolorum adipisci
          eveniet cum quisquam incidunt iure quidem non commodi ex dolor, rem
          voluptas vel ullam porro rerum iste alias magnam! Laboriosam ipsam
          aperiam repellendus, possimus, accusantium maxime et ut, ad assumenda
          cumque dolorum.
        </p>
      </div>
    </div>
  );
};

export default CarrearsDetails;

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/careers/${id}`);
  if(!res.ok){
    throw Error("Could not found the career's details")
  }
  return res.json();
};
