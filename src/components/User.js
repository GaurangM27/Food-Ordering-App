import { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(0);

  return (
    <div className="details">
      <h1>Count : {count}</h1>
      <h1>Count2 : {count2}</h1>
      <h1>Name : {name}</h1>
      <h2>Location : {location}</h2>
      <h3>Email : gaurangmishra2712@gmail.com</h3>
    </div>
  );
};

export default User;
