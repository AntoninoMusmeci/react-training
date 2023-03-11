import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
        illo quasi esse placeat aspernatur unde id quae tempora quas! Officia
        voluptatem reprehenderit nostrum dolorem. Repellendus eaque inventore ad
        officiis ipsum minus non incidunt dignissimos quibusdam ipsa hic,
        voluptatibus cumque animi dolores pariatur aliquid voluptatum
        reprehenderit cum magnam debitis possimus illum.
        <p>
          Go to the <Link to="/">HomePage</Link>.
        </p>
      </p>
    </div>
  );
};

export default NotFound;
