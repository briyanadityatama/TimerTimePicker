import React from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";

const Clock = createReactClass({
  propTypes: {
    totalSeconds: PropTypes.number
  },
  // getDefaultProps() {
  //   totalSeconds = 10;
  // },
  formatSeconds(totalSeconds) {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);
    let hours = Math.floor(totalSeconds / 3600);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (hours < 10) {
      hours = "0" + hours;
    }

    return hours + ":" + minutes + ":" + seconds;
  },
  render() {
    const { totalSeconds } = this.props;

    return (
      <div className="clock">
        <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
      </div>
    );
  }
});

export default Clock;
