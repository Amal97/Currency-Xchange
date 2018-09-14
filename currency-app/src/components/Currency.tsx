import * as React from "react";

interface IStates {
  amount: any;
  error: any;
  source: any;
  destination: any;
  value: any;
}

class Currency extends React.Component<IStates, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="currency__value">
        {this.props.source &&
          this.props.destination && (
            <p>
              {"$"}
              {!this.props.amount && "1"}
              {this.props.amount}
              {"  "}
              {this.props.source} {"  "}
              {"="}
              {"  "}
              {"$"}
              {this.props.value} {"  "} {this.props.destination}{" "}
            </p>
          )}
        <div className="currency__error">
          {this.props.error && <p> {this.props.error} </p>}
        </div>
      </div>
    );
  }
}
export default Currency;
