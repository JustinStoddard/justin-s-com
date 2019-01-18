import "./styles.css";
import React, { Component, Fragment } from 'react';
import withClockDegrees from "./ClockDegrees";
import { Segment } from 'semantic-ui-react';

class Clock extends Component {
    updateClock() {
      let angleSeconds = this.props.degrees.seconds + 90
      console.log(angleSeconds)
      let angleMinutes = this.props.degrees.minutes + 90
      console.log(angleMinutes)
      let angleHours = this.props.degrees.hours + 90
      console.log(angleHours)
      document.getElementById('seconds').style.transform = "translate(-50%, -100%) rotate(" + angleSeconds + "deg)";
      document.getElementById('minutes').style.transform = "translate(-50%, -100%) rotate(" + angleMinutes + "deg)";
      document.getElementById('hours').style.transform = "translate(-50%, -100%) rotate(" + angleHours + "deg)";
    }

    componentDidMount() {
      this.myInterval = setInterval(() => {
        this.updateClock();
      }, 1000)
    }

    componentWillUnmount() {
      clearInterval(this.myInterval);
    }

    render() {
      return(
        <Fragment>
          <Segment textAlign="center">
            <div className="clock">
              <div id="hours" className="clock-tick tick-hours"></div>
              <div id="minutes" className="clock-tick tick-minutes"></div>
              <div id="seconds" className="clock-tick tick-seconds"></div>
            </div>
          </Segment>
        </Fragment> 
      )
    }
}

export default withClockDegrees(Clock);