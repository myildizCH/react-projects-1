import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true); // Loading component will be visible by default
  const [tours, setTours] = useState([]); // initial tour list is empty

  // Not interested button will run the following function
  // removeTour function takes in an id to be not interested and it filters it out to not to show the user.
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    // newTours will not include the object with the passed id.
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url); // fetching the tours
      const tours = await response.json(); // convention that we all do when we use fetch()
      setLoading(false); // because we have fetched the data, the loading state is set to false.
      setTours(tours); // response is set to tours state. Now we have stored the complete json in tours state.
    } catch (error) {
      // if try block fails
      setLoading(false); // then set the loading to false again and
      console.log(error); // display the error in console.
    }
  };

  useEffect(() => {
    // We run the fetchTours() function on every page call, the empty dependency array allows us to do that.
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) 
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          {/* Because we do not need to invoke fethcTours with an argument, we do not need to write like ()=> fetchTours() */}
          <button className="btn" onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    );
    

  return (
    <main>
      {/* tours is props, {tours} is state and we set the state in fetchTours() function then we passed down to Tours component */}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
