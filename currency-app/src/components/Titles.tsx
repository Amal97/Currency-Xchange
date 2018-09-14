import { Typography } from "@material-ui/core/";
import * as React from "react";

class Titles extends React.Component {
  public render() {
    return (
      <div>
        <Typography variant="title" color="textPrimary">
          <h1>Currency Converter</h1>
        </Typography>
      </div>
    );
  }
}
export default Titles;
