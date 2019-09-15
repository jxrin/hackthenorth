import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FormPage from "./FormPage";
import "./landing.css";
import logo from "../imgs/jjj.png";
import { blockStatement } from "@babel/types";

class Landing extends Component {
  state = { render: false };
  add = () => {
    this.setState({ render: !this.state.render });
  };

  render() {
    return (
      <div
        className="landingPage"
        style={{ width: window.innerWidth, height: window.innerHeight }}
      >
        {!this.state.render ? (
          <>
            <Grid item md={6}>
              <p
                style={{
                  marginTop: "20%",
                  marginLeft: "20%",
                  display: "center",
                  color: "white",
                  display: "inline - block",
                  float: "left",
                  fontSize: "50px",
                  fontWeight: "bold"
                }}
              >
                paper piano.
              </p>
              <div>
                <Button
                  className="pulseButton"
                  style={{
                    width: "15%",
                    borderRadius: "10px",
                    marginTop: "35%",
                    backgroundColor: "white",
                    fontSize: "17px",
                    color: "#DE7383",
                    marginLeft: "-111%"
                  }}
                  // onClick={() => this.add()}
                >
                  start
                </Button>
              </div>
            </Grid>
            <Grid item md={6}>
              <img
                src={logo}
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
          </>
        ) : (
          <FormPage />
        )}
      </div>
    );
  }
}

export default Landing;
