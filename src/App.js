import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    food: "",
    gender: "",
    attendence: "",
    age: "",
  });
  const [people, setPeople] = useState([]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, gender, attendence, age, food } = formData;
    if (name && gender && attendence && age && food) {
      setPeople([...people, formData]);
    }
  };
  console.log(formData);
  return (
    <div>
      <form className="container1" onSubmit={handleSubmit}>
        <h1>YOU HAVE BEEN INVITED</h1>
        <label>
          <h2>Name</h2>
          <input autoComplete='off' name="name" onChange={handleChange} value={formData.name} />
        </label>
        <h2>Gender</h2>
        <label className="container" />
        Male
        <input
          type="radio"
          onChange={handleChange}
          name="gender"
          value="male"
        />
        <span className="checkmark" />
        <label className="container" />
        Female
        <input
          type="radio"
          name="gender"
          onChange={handleChange}
          value="female"
        />
        <span className="checkmark" />
        <label className="container" />
        Other
        <input
          type="radio"
          name="gender"
          onChange={handleChange}
          value="other"
        />
        <span className="checkmark" />
        <h2>Food</h2>
        <label className="container" />
        ALL
        <input
          value="ALL"
          type="checkbox"
          name="food"
          onChange={handleChange}
        />
        <label className="container" />
        Sushi
        <input
          type="checkbox"
          name="food"
          onChange={handleChange}
          value="sushi"
        />
        <span className="checkmark" />
        <label className="container" />
        Pasta
        <input
          type="checkbox"
          name="food"
          onChange={handleChange}
          value="pasta"
        />
        <span className="checkmark" />
        <label className="container" />
        Meaty Platter
        <input
          type="checkbox"
          name="food"
          onChange={handleChange}
          value="meaty platter"
        />
        <span className="checkmark" />
        <label>
          <h2>Age</h2>
        </label>
        <input
          type="number"
          onChange={handleChange}
          name="age"
          value={formData.age}
          maxLength="2"
        ></input>
        <label>
          <h2>Attendence</h2>
          <input
            type="date"
            onChange={handleChange}
            name="attendence"
            value={formData.attendence}
          ></input>
        </label>
        <button type="submit">Submit</button>
        <div className="wrapper">
          <div className="list">
            You are submitting the following:
            {
              <ul>
                {people.map((person, index) => (
                  <li key={index}>
                    <p>{person.name}</p>
                    <p>{person.gender}</p>
                    <p>{person.age}</p>
                    <p>{person.food}</p>
                    <p>{person.attendence}</p>
                  </li>
                ))}
              </ul>
            }
          </div>
        </div>
      </form>
    </div>
  );
}
export default App;
