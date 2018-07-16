import TextField from "@material-ui/core/TextField";
import * as React from "react";

export class Questionnaire extends React.Component {
  public render() {
    return (
      <div>
        <h4>How often?</h4>
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
