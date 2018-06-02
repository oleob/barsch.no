import React, { Component } from 'react';

import '../css/Battery.css';

class BatteryStatus extends Component {

  state = {
    batteryLevelStyle:{
      height: 0,
      top: 210,
    },
    batteryLevel: 0,
    quotes: [
      "CMON YOUR BATTERY IS DYING",
      "Maybe you should charge soon",
      "Do you ever charge?",
      "Almost good to go",
      "Half full or half empty?",
      "Still good",
      "Lookin Gooood",
      "Woah almost full",
      "Enjoy it while it lasts",
      "Woah Good Job!",
      "100%, Lets get rolling"
    ],
  }

  componentDidMount() {
    navigator.getBattery().then((battery) => {
      this.setState({
        batteryLevelStyle: {
          height: parseInt(battery.level*200, 10),
          top: parseInt(210 - 200*battery.level, 10),
        },
        batteryLevel: battery.level*100,
      })
    })
  }

  render() {
    return(
      <div>
        <div className="batteryContainer">
          <div className="battery">
            <div className="batteryHead"/>
            <div className="batteryBodyContainer">
              <div className="batteryBody"/>
              <div className="batteryLevel" style={this.state.batteryLevelStyle}>
              </div>
              <h3 className="batteryText">
                {this.state.batteryLevel}%
              </h3>
            </div>
          </div>
        </div>
        <h2>{this.state.quotes[parseInt(this.state.batteryLevel/10,10)]}</h2>
      </div>
    )
  }
}

export default BatteryStatus;
