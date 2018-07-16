import * as React from "react";
import "./App.css";
import { Moods } from "./classes/Enums";
import { IRating } from "./classes/Interfaces";
import { BottomNavBar } from "./components/BottomNavBar";
import { RatingPage } from "./components/RatingPage";
import { TopMenu } from "./components/TopMenu";

const currentRating: IRating = {
  amount: 0,
  moodRating: Moods.Neutral
};

const Context = React.createContext(currentRating);

class App extends React.Component {
  public render() {
    return (
      <Context.Provider value={currentRating}>
        <div>
          <TopMenu />
          <RatingPage />
          <BottomNavBar />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
