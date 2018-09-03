import React from "react";
import Clock from "./Clock";
import CountdownForm from "./CountdownForm";
import Controls from "./Controls";
import createReactClass from "create-react-class";

const Countdown = createReactClass({
  getInitialState() {
    return {
      count: 0,
      countdownStatus: "stopped"
    };
  },
  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case "started":
          this.startTimer();
          break;
        case "stopped":
          this.setState({
            count: 0
          });
          break;
        case "paused":
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        // no default
      }
    }
  },
  startTimer() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },
  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: "started"
    });
  },
  handleStatusChange(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },
  render() {
    const { count, countdownStatus } = this.state;
    const renderControlArea = () => {
      if (countdownStatus !== "stopped") {
        return (
          <Controls
            countdownStatus={countdownStatus}
            onStatusChange={this.handleStatusChange}
          />
        );
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown} />;
      }
    };

    return (
      <div>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
});

export default Countdown;
