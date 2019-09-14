import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FormPage from "./FormPage";
import "./landing.css";
import logo from "../imgs/jjj.png";

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
        {/* <Grid item md={6}>
          <p
            style={{
              width: "80%",
              height: "100%",
              display: "center",
              color: "white"
            }}
          >
            paper piano
          </p>
        </Grid> */}
        <Grid item md={6}>
          <img
            src={logo}
            style={{
              width: "40%",
              height: "70%",
              border: "none",
              position: "absolute",
              bottom: 0,
              right: 20
            }}
          />
        </Grid>

        {/* {!this.state.render ? (
          <Grid container style={{ marginTop: "10%" }}>
            <Grid item md={1} />
            <Grid item md={7}>
            </Grid>
            <Grid item md={3}>
              <Button
                className="pulseButton"
                style={{
                  marginTop: "30%",
                  backgroundColor: "pink",
                  fontSize: "20px"
                }}
                onClick={() => this.add()}
              >
                Start
              </Button>
            </Grid>
          </Grid>
        ) : (
          <FormPage />
        )} */}
      </div>
    );
  }
}

export default Landing;
