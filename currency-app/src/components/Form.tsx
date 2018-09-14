import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import * as React from "react";

interface IProps {
  getCurrency: any;
  source: any;
  destination: any;
  amount: any;
}

class Form extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <form onSubmit={this.props.getCurrency}>
        <Input
          type="text"
          name="source"
          placeholder="Source Country*"
          className="mdc-text-field__input"
        />
        <Input
          type="text"
          name="destination"
          placeholder="Destination Country*"
          className="mdc-text-field__input"
        />
        <Input
          type="text"
          name="amount"
          placeholder="Amount"
          className="mdc-text-field__input"
        />
        <br />
        <Button
          type="submit"
          style={{ marginTop: "20px" }}
          variant="contained"
          color="primary"
        >
          {" "}
          Convert Currency{" "}
        </Button>
      </form>
    );
  }
}
export default Form;