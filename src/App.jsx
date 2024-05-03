import { useState } from "react";
import "./App.css";

export default function App() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, email, password } = user;
    const emailValid = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

    if (name === "") {
      alert("please enter name");
    } else if (age < 18) {
      alert("you must be 18 and above");
    } else if (!email.match(emailValid)) {
      alert("please enter valid email");
    } else if (password.length < 5 || password.length > 10) {
      alert("password must greater than 5 and lower than 10");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2> Form Validation </h2>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            value={user.name}
            name="name"
            onChange={handelChange}
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="age"></label>
          <input
            type="number"
            id="age"
            value={user.age}
            name="age"
            onChange={handelChange}
            placeholder="Age"
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="text"
            id="email"
            value={user.email}
            name="email"
            onChange={handelChange}
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="text"
            id="password"
            value={user.password}
            name="password"
            onChange={handelChange}
            placeholder="Password"
          />
        </div>

        <button type="submit">Check Validate</button>
      </form>
    </div>
  );
}
