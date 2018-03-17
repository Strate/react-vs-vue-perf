import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observable} from "mobx"
import {observer} from "mobx-react"

class App extends Component {

  offset = observable.box(0)

  items = observable.array()

  componentWillMount() {
    for (let i = 0; i < 50; i ++) {
      const row = observable.array()
      for (let j = 0; j < 50; j ++) {
        row.push(observable({hover: false}))
      }
      this.items.push(row)
    }
    let sign = 1;
    let steps = 0;
    setInterval(() => {
      steps++;
      if (steps % 100 === 0) {
        sign *= -1;
      }
      this.offset.set(this.offset.get() + sign)
    })
  }

  render() {
    return (
      <div>
        {this.items.map((row, rIndex) =>
          <div key={rIndex}>
            {row.map((cell, cIndex) =>
              <div
                key={cIndex}
                style={{
                  position: "absolute",
                  width: "15px",
                  height: "15px",
                  left: 21 * cIndex + this.offset.get() + "px",
                  top: 21 * rIndex + "px",
                  backgroundColor: cell.hover ? "black" : "lightgray"
                }}
                onMouseEnter={() => cell.hover = true}
                onMouseLeave={() => cell.hover = false}
              >{this.offset.get()}</div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default observer(App);
