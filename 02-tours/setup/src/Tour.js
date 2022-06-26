import React, { useState } from "react";

// individual tour component, we have destructured the received API response and passed as props here. What we passed is ...tours
const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      {/* We used the image and name as attribute values */}
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          {/* name of the tour is passed to a h4 */}
          <h4>{name}</h4>
          {/* price info is another h4 */}
          <h4 className="tour-price">${price}</h4>
        </div>
        {/* CONDITIONAL RENDERING BELOW: if the readMore state is true, then show the entire info, if not then show the first 200 character of the info */}
        <p>{readMore ? info : `${info.substring(0, 200)}...`}
        {/* toggle the state of component and render accordingly */}
        <button onClick={()=> setReadMore(!readMore)}>Read More</button></p> 
        <button className="delete-btn" onClick={()=> removeTour(id)}>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;

// anytime this component is called, the tour will be iterated over each API objects. Ultimately, in tours component, we will use this component to iterate over API response.

// removeTour() function was passed down to Tour component from App.js to Tours.js and then to Tour.js