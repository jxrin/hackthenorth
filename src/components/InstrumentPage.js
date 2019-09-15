import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Landing from "./Landing";
import "./landing.css";
import board from "../imgs/Board.png";
import { blockStatement } from "@babel/types";

class Instrument extends Component {
  render() {
    return (
      <div
        className="landingPage"
        style={{ width: window.innerWidth, height: window.innerHeight }}
      >
        <Grid item md={6}>
          <p
            style={{
              marginTop: "20%",
              marginLeft: "14%",
              display: "center",
              color: "white",
              display: "inline - block",
              float: "left",
              fontSize: "50px",
              fontWeight: "bold"
            }}
          >
            begin playing your board.
          </p>
          <div>
            <Button
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
            </Button>
          </div>
        </Grid>
        <Grid item md={6}>
          <img
            // src={logo}
            style={{
              width: "44%",
              height: "60%",
              border: "none",
              position: "absolute",
              bottom: 75,
              right: 60
            }}
          />
        </Grid>
      </div>
    );
  }
}

export default Instrument;
