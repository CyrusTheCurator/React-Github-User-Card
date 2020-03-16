import React from "react";
import UserCard from "./Components/UserCard";
import "./App.css";
class App extends React.Component {
  state = { infoObj: {}, followers: [] };

  componentDidMount() {
    fetch("https://api.github.com/users/CyrusTheCurator")
      .then(res => res.json())
      .then(userInfo => {
        console.log("User Info: ", userInfo);
        this.setState({ infoObj: userInfo });
      })
      .catch(err => console.error(err));

    fetch("https://api.github.com/users/CyrusTheCurator/followers")
      .then(res => res.json())
      .then(followers => {
        console.log("Followers ", followers);
        this.setState({ followers: followers });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <header>Your Github User-Card</header>
        <UserCard
          infoObj={this.state.infoObj}
          followers={this.state.followers}
        />
      </div>
    );
  }
}

export default App;
