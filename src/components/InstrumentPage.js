import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Landing from "./Landing";
import "./landing.css";
import board from "../imgs/Board.png";
import { blockStatement } from "@babel/types";
import image from "../imgs/Board.png";

class Instrument extends Component {
  render() {
    return (
      <div
        className="landingPage"
        style={{
          width: window.innerWidth,
          height: window.innerHeight,
          align: "center"
        }}
      >
        <div
          style={{
            marginTop: "3%",
            marginLeft: "13.5%",
            display: "center",
            color: "white",
            display: "inline - block",
            float: "left",
            fontSize: "130px",
            fontWeight: "bold"
          }}
        >
          begin playing your board.
        </div>
        <div>
          {/* <Button
            className="pulseButton"
            style={{
              width: "15%",
              borderRadius: "10px",
              marginTop: "40%",
              backgroundColor: "white",
              fontSize: "17px",
              fontWeight: "bold",
              color: "#DE7383",
              marginLeft: "-126%"
            }}
            onClick={() => this.add()}
          >
            restart
          </Button> */}
        </div>
        <img
          src={image}
          style={{
            display: "center",
            marginTop: "2.5%",
            marginLeft: "13.25%",
            width: "3132.5px",
            height: "1950px",
            border: "none",
            // position: "absolute",
          }}
        />
      </div>
    );
  }
}

export default Instrument;
