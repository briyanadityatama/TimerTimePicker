import React from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";

const Controls = createReactClass({
  PropTypes: {
    countdownStatus: PropTypes.string.isRequired,
    onStatusChange: PropTypes.func.isRequired
  },
  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  },
  render() {
    const { countdownStatus } = this.props;
    const renderStartStopButton = () => {
      if (countdownStatus === "started") {
        return (
          <button
            className="button secondary"
            onClick={this.onStatusChange("paused")}
          >
            Pause
          </button>
        );
      } else if (countdownStatus === "paused") {
        return (
          <button
            className="button primary"
            onClick={this.onStatusChange("started")}
          >
            Start
          </button>
        );
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button
          className="button alert hollow"
          onClick={this.onStatusChange("stopped")}
        >
          Clear
        </button>
      </div>
    );
  }
});

export default Controls;
