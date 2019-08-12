import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";

import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0,
    friendsChosen: []
  };

  incrementScore = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    console.log("score on entry to increment is: " + this.state.score);
    console.log("new array on entry to increment is: " + this.state.friendsChosen);

    // first get the already chosen friends, then check to see if this is a repeat friend.
    const newChosenArray = this.state.friendsChosen.map(friendId => { return friendId });
    const isRepeat = newChosenArray.indexOf(id);

    // if repeat set the score to 0 and clear the chosen friends array
    if (isRepeat >= 0) {
      this.setState({ score: 0 });
      this.setState({ friendsChosen: [] });
    } else {
      // not a repeat. save new friend to chosen, increment the score, and test for top score
      newChosenArray.push(id);
      this.setState({ score: this.state.score + 1 }, function () {
        if (this.state.score > this.state.topScore) {
          this.setState({ topScore: this.state.score });
          console.log("setting top score to score");
        }
      });
      this.setState({ friendsChosen: newChosenArray });
    }
    // need to shuffle the friend pics
    const newFriendsArray = this.state.friends.map(friend => { return friend });
    newFriendsArray.sort(() => Math.random() - 0.5);
    this.setState({ friends: newFriendsArray });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Jumbotron>
          <h1>Welcome to the Memory Game</h1>
          <h1>Score: {this.state.score}</h1>
          <h1>Top Score: {this.state.topScore}</h1>
        </Jumbotron>
        <Title>Click on an image to increase your score. Try not to click on any image twice or your score will return to 0.</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            incrementScore={this.incrementScore}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
