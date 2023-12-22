import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //Api Calls are made
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div className="about">
        <h1>ABOUT US</h1>
        <h2>Welcome to Cravings</h2>
        <UserClass name={"Gaurang Mishra"} location={"Kanpur"} />
      </div>
    );
  }
}

export default About;
