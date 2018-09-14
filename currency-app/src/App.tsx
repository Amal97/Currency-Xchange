import * as React from "react";
import "./App.css";
import Currency from "./components/Currency";
import Form from "./components/Form";
import Titles from "./components/Titles";

interface IState {
  amount: any;
  destination: any;
  error: any;
  source: any;
  value: any;
}

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.getCurrency = this.getCurrency.bind(this);

    this.state = {
      amount: undefined,
      destination: undefined,
      error: undefined,
      source: undefined,
      value: undefined
    };
  }

  public getCurrency = async (e: any) => {
    e.preventDefault();
    const Src = e.target.source.value;
    const Dest = e.target.destination.value;
    const Amount = e.target.amount.value;
    // const error = "theres an error";
    const apiCall = await fetch(
      `https://orion.apiseeds.com/api/exchangerates/convert/${Src}/${Dest}?amount=${Amount}&apikey=LwFrzBPyvaHYTh0yR95kgU9i4TLiTgvkbQbulFWUb7RFyZz91qVYsR00RQc7xFd4`
    );

    if (Src && Dest) {
      const data = await apiCall.json();
      if (typeof data.result !== "undefined") {
        this.setState({
          amount: Amount,
          destination: data.to.code,
          source: data.from.code,
          value: data.result.value,
          error: " "
        });
      } else {
        this.setState({
          amount: " ",
          destination: " ",
          source: " ",
          value: " ",
          error: "Sorry try again there was an error"
        });
      }
    } else {
      this.setState({
        amount: " ",
        destination: " ",
        source: " ",
        value: " ",
        error: "Sorry try again there was an error"
      });
    }
  };

  public render() {
    return (
      <div>
        <div className="title">
          <Titles />
        </div>
        <div className="wrapper">
          <div className="main">
            <div className="row">
              <div className="container">
                <div className="form-container">
                  <Form
                    getCurrency={this.getCurrency}
                    source={this.getCurrency}
                    destination={this.getCurrency}
                    amount={this.getCurrency}
                  />
                  <Currency
                    amount={this.state.amount}
                    destination={this.state.destination}
                    source={this.state.source}
                    value={this.state.value}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
