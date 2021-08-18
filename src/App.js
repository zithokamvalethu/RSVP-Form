import React, { useReducer, useState} from "react";
import "./App.css";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};


function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
  
    const handleChange = (event) => {
      setFormData({
        name: event.target.name,
        value: event.target.value,
      });
    };
  
  
    <div
      className="wrapper"
    >
      <h1>YOU HAVE BEEN INVITED</h1>
      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>:{value.toString()}
              </li>
              
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input name="name" onChange={handleChange} />
        </label>
        <h2>Gender</h2>
        <label className="container" />
        Male
        <input type="radio" checked="checked" name="radio" />
        <span className="checkmark" />
        <label className="container" />
        Female
        <input type="radio" name="radio" />
        <span className="checkmark" />
        <label className="container" />
        Other
        <input type="radio" name="radio" />
        <span className="checkmark" />
        <h2>Food</h2>
        <label className="container" />
        Sushi
        <input
          type="checkbox"
          checked="checked"
          name="checkbox"
          onChange={handleChange}
        />
        <span className="checkmark" />
        <label className="container" />
        Pasta
        <input type="checkbox" name="checkbox" onChange={handleChange} />
        <span className="checkmark" />
        <label className="container" />
        Meaty Platter
        <input type="checkbox" name="checkbox" onChange={handleChange} />
        <span className="checkmark" />
        <label>
          <p>Age</p>
        </label>
        <input type="number" name="age"></input>
 
        <button type="submit">Submit</button>
      </form>
    </div>
  
  }






}
  export default App;
