import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FormPage from "./FormPage";
import "./landing.css";
import logo from "../imgs/logo.png";

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
        <img src={logo} style={{ width: "60%", height: "95%" }} />
        {/* {!this.state.render ? (
          <Grid container style={{ marginTop: "10%" }}>
            <Grid item md={1} />
            <Grid item md={7}>
            </Grid>
            <Grid item md={3}>
              <Grid item md={12}>
                This is just some random information about our website
                <br />
                <br />
                -You can play music by drawing shapes
                <br />
                -Connect the shapes to a certain sound
                <br />
                -Play music by pressing the shapes you have drawn
              </Grid>

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
