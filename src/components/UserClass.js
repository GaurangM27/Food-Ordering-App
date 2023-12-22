import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Child Constructor");

    this.state = {
      name: "Dummy",
      location: "Default",
      image: "Avatar",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/GaurangM27");
    const json = await data.json();
    console.log(json);

    this.setState({
      name: json.name,
      location: json.location,
      image: json.avatar_url,
    });

    //console.log("Child Component Did Mount");
  }

  componentDidUpdate() {
    console.log("Component Updation done");
  }

  componentWillUnmount() {
    console.log("Component Gone");
  }

  render() {
    //console.log("Child Render");
    const { name, location, image } = this.state;
    return (
      <div className="details">
        <img src={image} />
        <h1>Name : {name}</h1>
        <h2>Location : {location}</h2>
        <h3>Email : gaurangmishra2712@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
