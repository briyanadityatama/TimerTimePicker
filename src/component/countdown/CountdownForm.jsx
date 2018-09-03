import React from "react";
import createReactClass from "create-react-class";

const CountdownForm = createReactClass({
  onSubmit(e) {
    e.preventDefault();
    const strSeconds = this.refs.seconds.value;

    // if (strSeconds.match(/^[0-9]*$/)) {
    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = "";
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input
            type="text"
            ref="seconds"
            placeholder="Enter Value (seconds)"
          />
          <br />
          <button class="btn btn-success mb-2">Start</button>
        </form>
      </div>
    );
  }
});

export default CountdownForm;
