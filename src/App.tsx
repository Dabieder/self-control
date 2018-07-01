import * as React from "react";
import "./App.css";
import { BottomNavBar } from "./components/BottomNavBar";
import { Questionnaire } from "./components/Questionnaire";
import { Rating } from "./components/Rating";
import { TopMenu } from "./components/TopMenu";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <TopMenu />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Rating />
        <Questionnaire />
        <BottomNavBar />
      </div>
    );
  }
}

export default App;
