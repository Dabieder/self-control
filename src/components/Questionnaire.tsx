import TextField from "@material-ui/core/TextField";
import * as React from "react";

export class Questionnaire extends React.Component {
  public render() {
    return (
      <div>
        <h2>How often?</h2>
        <TextField
          id="number"
          label="How often?"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
      </div>
    );
  }
}
