import React from "react";
import Tour from "./Tour";

// {tours} is props and we receive the fetchTours() response here. So tours repserents here our complete API response.
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          // We pass down ...tour object to tour props
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
