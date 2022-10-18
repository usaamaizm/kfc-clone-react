import React, { useState } from "react";
import ChildA from "./components/ChildA";
import Header from "./components/Header";
function App() {
  const nameUsama = "Usama from props drilling";

  let [num, setNum] = useState(90);
  let [persons, setPersons] = useState([
    "Usama",
    "Zaid",
    "Zaid",
    "Hamza",
    "Bilal",
    "Faisal",
  ]);

  const [person, setPerson] = useState({
    name: "Muhammad Usama",
    age: 32,
    salary: "23000",
  });

  function handleIncre() {
    setNum((num = num + 1));
  }

  function handleDecre() {
    setNum((num = num - 1));
  }

  function addName() {
    setPersons([...persons, "Zomer"]);
  }

  function changeSalary() {
    setPerson({ ...person, salary: 20000, name: "Usama Rehmani" });
  }
  const [personn, setPersonn] = useState({
    name: "Usama",
    age: 22,
    salary: "15000",
  });
  return (
    <>
      <ChildA nameUsama={nameUsama} />;
      <Header personn={personn} />
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
      <button className="add-name" onClick={addName}>
        Add Name
      </button>
      <h1>{num}</h1>
      <button disabled={num >= 100 ? true : false} onClick={handleIncre}>
        +
      </button>
      <button onClick={handleDecre} disabled={num <= 85 ? true : false}>
        -
      </button>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <p>{person.salary}</p>
      <button className="Change" onClick={changeSalary}>
        change Data
      </button>
    </>
  );
}
export default App;
