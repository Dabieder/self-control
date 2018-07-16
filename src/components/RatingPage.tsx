import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
import * as React from "react";
import { MoodRating } from "./MoodRating";
import { Questionnaire } from "./Questionnaire";

export class RatingPage extends React.Component {
  public render() {
    return (
      <div>
        <MoodRating />
        <Questionnaire />
        <Button
          onClick={this.onSubmitClick}
          variant="fab"
          color="primary"
          size="medium"
          aria-label="add"
        >
          <DoneIcon />
        </Button>
      </div>
    );
  }

  private onSubmitClick = () => {
    // tslint:disable-next-line:no-console
    console.log("submit click");
  };
}
