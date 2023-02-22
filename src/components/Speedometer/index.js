// Write your code here

import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  onIncrease = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(oldState => ({count: oldState.count + 10}))
    }
  }

  onDecrease = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(oldState => ({count: oldState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h2 className="test-head">Speed is {count}mph</h2>
        <p className="describe">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="speed-btn" type="button" onClick={this.onIncrease}>
            Accelerate
          </button>
          <button className="break-btn" type="button" onClick={this.onDecrease}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
