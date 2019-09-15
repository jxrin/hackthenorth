import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, Star, Circle, Rect, Text } from "react-konva";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Instrument from "./InstrumentPage";
import cass from "../imgs/Cassette.png";
import notes from "../imgs/notes2.png";

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instrument: false,
      open: false,
      setOpen: true,
      render: false,
      shapes: [

        {
          shape: "Circle",
          x: 1500,
          y: 1000,
          radius: 300,
          width: 0,
          height: 0,
          fill: "#662556",
          sound: "111",
          render: false
        },

        {
          shape: "Rect",
          x: 200,
          y: 500,
          width: 500,
          radius: 0,
          height: 400,
          fill: "#F5A623",
          sound: "111",
          render: false
        },

        {
          shape: "Circle",
          x: 500,
          y: 1500,
          width: 0,
          radius: 300,
          height: 0,
          fill: "#D95D81",
          sound: "111",
          render: false
        }
      ]
    };
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeSound = this.handleChangeSound.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChangeColor(event) {
    this.state.shapes.map(function(data, idx) {
      if (data.render === true) {
        data.fill = event.target.value;
      }
    });
  }
  add = () => {
    this.setState({ instrument: true });
  };
  handleChangeSound(event) {
    this.state.shapes.map(function(data, idx) {
      if (data.render === true) {
        data.sound = event.target.value;
      }
    });
  }

  handleClose() {
    this.setState({ setOpen: false });
  }

  handleOpen() {
    this.setState({ setOpen: true });
  }

  handleClick(i) {
    this.setState({ render: true });
    this.state.shapes[i].render = true;
    {
      console.log(this.state.shapes[i]);
    }
    this.forceUpdate();

    // this.state.shapes[i].render = false;
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
      <>
      
        {!this.state.instrument ? (
          <>
            <Grid
              item
              md={6}
              style={{
                display: "inline-block",
                float: "left"
              }}
            >
              <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                style={{
                  backgroundColor: "white"
                }}
              >
                <Layer>
                  {this.state.shapes.map(function(data, idx) {
                    if (data.shape === "Circle") {
                      return (
                        <Circle
                          key={idx}
                          x={data.x}
                          y={data.y}
                          radius={data.radius}
                          fill={data.fill}
                          shadowColor="black"
                          shadowBlur={10}
                          shadowOpacity={0.6}
                          onClick={() => {
                            this.handleClick(idx);
                          }}
                        />
                      );
                    }
                    if (data.shape === "Rect") {
                      return (
                        <Rect
                          key={idx}
                          x={data.x}
                          y={data.y}
                          width={data.width}
                          height={data.height}
                          fill={data.fill}
                          shadowColor="black"
                          shadowBlur={10}
                          shadowOpacity={0.6}
                          onClick={() => {
                            this.handleClick(idx);
                          }}
                        />
                      );
                    }
                  }, this)}
                </Layer>
              </Stage>
            </Grid>
            <div
              style={{
                color: "white",
                fontSize: "100px",
                fontWeight: "bold",
                width: "40%",
                display: "inline-flex",
                justifyContent: "left",
                marginLeft: "150px",
                marginTop: "6%"
              }}
            >
              customize your board.
            </div>
            <Grid
              item
              md={5}
              style={{
                width: "100%",
                height: "33%",
                display: "inline-block",
                float: "right",
                backgroundColor: "white",
                borderRadius: "50px",
                marginRight: "4.5%",
                marginTop: "3%"
              }}
            >
              <img
                src={cass}
                style={{
                  width: "32%",
                  border: "none",
                  position: "absolute",
                  bottom: "70px",
                  right: "375px"
                }}
              />
              <Grid
                item
                md={6}
                style={{
                  display: "inline-block",
                  float: "right",
                  marginTop: "-15%",
                  marginLeft: "10%"
                }}
              >
                <Stage width={1000} height={1000}>
                  <Layer>
                    {this.state.shapes.map(function(data, idx) {
                      if (data.shape === "Circle" && data.render === true) {
                        return (
                          <Circle
                            key={idx}
                            x={data.x}
                            y={data.y}
                            radius={data.radius}
                            fill={data.fill}
                            shadowColor="black"
                          />
                        );
                      }
                      if (data.shape === "Rect" && data.render === true) {
                        return (
                          <Rect
                            key={idx}
                            x={data.x}
                            y={data.y}
                            width={data.width}
                            height={data.height}
                            fill={data.fill}
                            shadowColor="black"
                          />
                        );
                      }
                    }, this)}
                  </Layer>
                </Stage>
              </Grid>
              <Grid
                item
                md={6}
                style={{
                  display: "flex",
                  marginTop: "0%",
                  marginRight: "-30%",
                  float: "right",
                  color: "gray",
                  fontSize: "50px"
                }}
              >
                <p>shape.</p>
              </Grid>
              <br />
              <div
                style={{
                  // display: "inline-block",
                  float: "left",
                  marginLeft: "5%"
                }}
              >
                <form autoComplete="off">
                  {" "}
                  <Button
                    style={{
                      textTransform: "lowercase",
                      color: "gray",
                      fontSize: "50px",
                      marginTop: "135px"
                    }}
                  >
                    Select your colour.
                  </Button>
                  <br /> <br />
                  <FormControl style={{ width: "200px" }}>
                    <InputLabel
                      htmlFor="demo-controlled-open-select"
                      style={{
                        display: "inline-block",
                        float: "right",
                        fontSize: "35px"
                      }}
                    >
                      Colour
                    </InputLabel>
                    <Select
                      open={this.open}
                      onClose={this.handleClose}
                      onOpen={this.handleOpen}
                      value={this.state.color}
                      onChange={this.handleChangeColor}
                      inputProps={{
                        name: "color",
                        id: "demo-controlled-open-select"
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="red">Red</MenuItem>
                      <MenuItem value="orange">Orange</MenuItem>
                      <MenuItem value="yellow">Yellow</MenuItem>
                      <MenuItem value="green">Green</MenuItem>
                      <MenuItem value="blue">Blue</MenuItem>
                      <MenuItem value="purple">Purple</MenuItem>
                      <MenuItem value="black">Black</MenuItem>
                    </Select>
                  </FormControl>
                </form>
                <br />
                <br />

                <form autoComplete="off">
                  {" "}
                  <Button
                    style={{
                      textTransform: "lowercase",
                      color: "gray",
                      fontSize: "50px",
                      marginTop: "30px"
                    }}
                  >
                    Select your sound.
                  </Button>
                  <br />
                  <FormControl style={{ width: "200px", fontSize: "35px" }}>
                    <InputLabel htmlFor="demo-controlled-open-select">
                      Sound
                    </InputLabel>
                    <Select
                      open={this.open}
                      onClose={this.handleClose}
                      onOpen={this.handleOpen}
                      value={this.sound}
                      onChange={this.handleChangeSound}
                      inputProps={{
                        name: "sound",
                        id: "demo-controlled-open-select"
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {/* <MenuItem value="red">Red</MenuItem>
                <MenuItem value="orange">Orange</MenuItem>
                <MenuItem value="green">Green</MenuItem>
                <MenuItem value="blue">Blue</MenuItem>
                <MenuItem value="purple">Purple</MenuItem>
                <MenuItem value="black">Black</MenuItem> */}
                    </Select>
                  </FormControl>
                </form>
                <br />
              </div>
            </Grid>
            <div
              style={{
                display: "inline-flex",
                marginTop: "0",
                marginLeft: "-100px"
              }}
            >
              <Button
                style={{
                  width: "200px",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  fontSize: "50px",
                  padding: "10px",
                  fontWeight: "bold",
                  color: "#DE7383",
                  textTransform: "lowercase"
                  // marginLeft: "43%"
                }}
                onClick={() => this.add()}
              >
                next
              </Button>
            </div>
          </>
        ) : (
          <Instrument />
        )}
      </>
      </div>
    );
  }
}

export default FormPage;
