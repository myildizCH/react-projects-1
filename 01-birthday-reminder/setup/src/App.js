import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3> {people.length} birthdays today</h3>
        <List people={people} />
        {/* the code below clears tha passed array of people by replacing the array of people with an empty array */}
        <button onClick={() => setPeople([])}>Clear All</button> 
      </section>
    </main>
  );
}

export default App;
