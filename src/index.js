import React, { Component } from "react";
import { render } from "react-dom";
import FormControl from "react-bootstrap/lib/FormControl";
import { timeToInt } from "time-number";
import TimePicker from "./component/timePicker";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Countdown from "./component/countdown/Countdown";

class App extends Component {
  constructor() {
    super();

    this.filterState = this.filterState.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);

    this.state = {
      format: 12,
      initialValue: "00:00:00",
      start: "00:00:00",
      end: "23:59:59",
      step: 30,
      onChange: this.handleTimeChange
    };
  }

  handleTimeChange(value) {
    this.setState({ value });
  }

  filterState() {
    const ret = { ...this.state };

    try {
      timeToInt(ret.start);
    } catch (ex) {
      ret.start = "00:00:00";
    }

    try {
      timeToInt(ret.end);
    } catch (ex) {
      ret.end = "23:59:59";
    }

    if (ret.step < 1) {
      ret.step = 30;
    }

    return ret;
  }

  render() {
    return (
      <div className="App">
        {/* Header */}
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to My React App</h1>
          </header>
          <span class="border border-light">
            <p class="text-center">
              My App is like Time Picker, renders options with range between
              start and end time values with step (inclusive). And also you can
              countdown the value.
            </p>
          </span>
        </div>
        {/* End Header */}
        <div class="container-fluid">
          <div class="d-flex justify-content-around">
            <span>
              <h3>
                <u>Timer</u>
              </h3>
              <Router>
                <Route path="/" component={Countdown} />
              </Router>
            </span>
            <div class="d-flex justify-content-center">
              <h3>
                <u>Time Picker</u>
                <br />
                <br />
                <TimePicker {...this.filterState(this.state.start)} />
              </h3>
            </div>
            <div>
              <h3>
                <u>Configurable Props</u>
                <br />
              </h3>
              <h6>Format</h6>
              <div>
                <button
                  type="button"
                  class="btn btn-primary mb-1"
                  children="12"
                  disabled={this.state.format === 12}
                  onClick={() => {
                    this.setState({ format: 12 });
                  }}
                  style={{ marginRight: "15px" }}
                />
                <button
                  type="button"
                  class="btn btn-secondary mb-1"
                  children="24"
                  disabled={this.state.format === 24}
                  onClick={() => {
                    this.setState({ format: 24 });
                  }}
                />
              </div>
              <h6>Initial Value</h6>
              <FormControl
                value={this.state.initialValue}
                onChange={e => this.setState({ initialValue: e.target.value })}
              />
              <h6>
                Value <p class="text-secondary">(time in seconds)</p>
              </h6>
              <FormControl
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
              />
              <h6>Start</h6>
              <FormControl
                value={this.state.start}
                onChange={e => this.setState({ start: e.target.value })}
              />
              <h6>End</h6>
              <FormControl
                value={this.state.end}
                onChange={e => this.setState({ end: e.target.value })}
              />
              <h6>
                Step <p class="text-secondary">(change minutes)</p>
              </h6>
              <FormControl
                value={this.state.step}
                onChange={e =>
                  this.setState({ step: parseInt(e.target.value, 10) })
                }
              />
              <h6>Reset</h6>
              <button
                type="button"
                class="btn btn-danger mb-1"
                onClick={() => {
                  this.setState({
                    format: 12,
                    initialValue: "00:00:00",
                    start: "00:00:00",
                    end: "23:59:59",
                    step: 30,
                    onChange: this.handleTimeChange
                  });
                }}
              >
                Reset to initial state
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
