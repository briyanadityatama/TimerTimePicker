# TIMER TIME PICKER

# Install

- yarn

# Run

- yarn start

# Configurable Props

_Note_: All props are optional.

## End: string, default "23:59"

Time Picker renders options with range between `start` and `end` time values with `step` (inclusive).

Should be provided in the following format: "HH?(:mm?(:ss?))".

#### Valid examples

"4", "04", "4:0", "04:00", "4:0:0", "04:00:00". All these are equal to "4 hours".

#### Invalid example

"11:00 PM". Should be provided in 24-hour format only

## Format: number, default "23:59"

Time Format of rendered options. Supported values: `12` or `24`.

## InitialValue: any, default: "00:00"

Initial selected option. Used if `value` prop is either `undefined` or `null`. Can be provided either in "HH?(:mm?(:ss?))" format or as int `(hours * 3600 + minutes * 60 + seconds)`. If `initialValue` is less than `start` property value, then `start` value is used instead.

#### Valid examples

"1:00", "01:00", "3600", 3600

#### Invalid examples

"11:00 PM"

## onChange: func, default: () => {}

Function, which is triggered after one of options is selected. Return selected time in int format: `(hours * 3600 + minutes * 60 + seconds)`.

#### Example

```
class Parent extends React.Component {
  constructor() {
    super();

    this.handleTimeChange = this.handleTimeChange.bind(this);

    this.state = { time: 0 };
  }

  handleTimeChange(time) {
    console.log(time);     // <- prints "3600" if "01:00" is picked
    this.setState({ time });
  }

  render() {
    return <TimePicker onChange={this.handleTimeChange} value={this.state.time} />;
  }
}
```

## Start: string, default: "00:00"

See `end` property description.

## Step: number, default: 30

Step between time options in minutes. See `end` property description.

## Value

Current value. See `initialValue` description.

# Validations

Library doesn't validate provided props much. If you are doing something strange like setting `start="10:00", end="05:00"`, then behavior is undefined, which means that it might render component differently in the future versions.
