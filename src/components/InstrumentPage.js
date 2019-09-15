import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Landing from "./Landing";
import "./landing.css";
import board from "../imgs/Board.png";
import { blockStatement } from "@babel/types";
import image from "../imgs/Board.png";
import cass from "../imgs/Cassette.png";
import notes from "../imgs/Notes.png";

class Instrument extends Component {
  state = {
    frontPage: false
  }
  add = () => {
    this.setState({frontPage: true})
  }
  render() {
    return (
      <div
        className="landingPage"
        style={{
          width: window.innerWidth,
          height: window.innerHeight,
          align: "center",
          backgroundImage: `url(${notes})`,
          backgroundSize: "100% 98%",
          backgroundRepeat: "no-repeat"
        }}
      > 
        {!this.state.frontPage ? 
        <>
          <div
            style={{
              marginTop: "3%",
              width: "70%",
              marginLeft: "15%",
              display: "center",
              justifyContent: "space-between",
              color: "white",
              display: "flex",
              float: "left",
              fontSize: "80px",
              fontWeight: "bold"
            }}
          >
            <h1 style={{
              margin: "0"
            }}>begin playing your board.</h1>

            <Button
              className="pulseButton"
              style={{
                // display: "right",
                width: "10%",
                borderRadius: "10px",
                marginTop: "3%",
                backgroundColor: "white",
                fontSize: "50px",
                fontWeight: "bold",
                color: "#DE7383",
                marginLeft: "0%"
              }}
              onClick={() => this.add()}
            >
              restart
            </Button>
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
        </>
        : <Landing/>}
      </div>
    );
  }
}

export default Instrument;
