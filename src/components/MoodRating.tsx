import * as React from "react";
import {Moods} from '../classes/Enums';
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import s5 from "../images/s5.png";
import "./MoodRating.css";

export class MoodRating extends React.Component {
  public render() {
    return (
      <div>
        <h4>How do you feel?</h4>
        <div className="ratingScale">
          <img
            src={s1}
            className="moodImage"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={e => this.onMoodImageClick(e, Moods.VeryGood)}
            alt="very bad"
          />
          <img
            src={s2}
            className="moodImage"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={e => this.onMoodImageClick(e, Moods.Good)}
            alt="very bad"
          />
          <img
            src={s3}
            className="moodImage"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={e => this.onMoodImageClick(e, Moods.Neutral)}
            alt="very bad"
          />
          <img
            src={s4}
            className="moodImage"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={e => this.onMoodImageClick(e, Moods.Bad)}
            alt="very bad"
          />
          <img
            src={s5}
            className="moodImage"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={e => this.onMoodImageClick(e, Moods.VeryBad)}
            alt="very bad"
          />
        </div>
      </div>
    );
  }
  private onMoodImageClick(event: any, mood: Moods) {
    // tslint:disable-next-line:no-console
    console.log("Selected Mood: ", mood);
  }
}
