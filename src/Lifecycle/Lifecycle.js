import React, { Component } from "react";
import Confetti from "react-confetti";

export default class LifecycleClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      showClock: true,
      showConfetti: false,
    };
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    if (this.state.showClock) {
      this.setState({ time: new Date() });
    }
  }

  toggleClock = () => {
    this.setState({ showClock: !this.state.showClock});
  };

  handleConfetti = () => {
    this.setState({ showConfetti: !this.state.showConfetti,});
  };

  render() {
    return (
      <div>
        
        {this.state.showConfetti ? (
          <>
            <a
              href="#"
              class="btn btn-remove bg-purple-800"
              onClick={this.handleConfetti}
            >
                <h1>Lifecycle-Confetti</h1>
              <span>Hide</span>
              <div class="icon">
                <p className="text-2xl"></p>
              </div>
            </a>
          </>
        ) : (
          <>
            <a
              href="#"
              class="btn btn-remove bg-purple-500"
              onClick={this.handleConfetti}
            >
                <h1>Lifecycle-Confetti</h1>
              <span>Show</span>
              <div class="icon">
                <p className="text-2xl"></p>
              </div>
            </a>
          </>
        )}
        {this.state.showClock ? (
          <>
            <a
              href="#"
              class="btn btn-remove bg-blue-800"
              onClick={this.toggleClock}
            >
                <h1>Lifecycle-Clock</h1>
              <span>Hide</span>
              <div class="icon">
                <p className="text-2xl"></p>
              </div>
            </a>
          </>
        ) : (
          <>
            <a
              href="#"
              class="btn btn-remove bg-blue-500"
              onClick={this.toggleClock}
            >
                <h1>Lifecycle-Clock</h1>
              <span>Show</span>
              <div class="icon">
                <p className="text-2xl"></p>
              </div>
            </a>
          </>
        )}
        <h1 className="text-5xl ">
          {this.state.showClock && this.state.time.toLocaleTimeString()}
        </h1>
        {this.state.showConfetti && <Confetti />}
      </div>
    );
  }
}
