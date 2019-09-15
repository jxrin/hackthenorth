import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FormPage from "./FormPage";
import "./landing.css";
import logo from "../imgs/jjj.png";
import { blockStatement, whileStatement } from "@babel/types";

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
                  color: "white",
                  margin: "0",
                  marginLeft: "400px",
                  fontSize: "200px",
                  fontWeight: "bold",
                  paddingTop: "250px"
                }}
              >
                paper piano.
              </p>
              <div style={{
                display: "flex",
                marginTop: "90px"
              }}>
                <Button
                  className="pulseButton"
                  style={{
                    width: "15%",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#DE7383",
                    marginLeft: "400px"
                  }}
                  onClick={() => this.add()}
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
                  border: "none",
                  position: "absolute",
                  bottom: "150px",
                  right: "200px"
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
