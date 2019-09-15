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

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      setOpen: true,
      render: false,
      shapes: [
        {
          shape: "Circle",
          x: 20,
          y: 20,
          radius: 20,
          width: 0,
          height: 0,
          fill: "#89b717",
          sound: "111",
          render: false
        },
        {
          shape: "Rect",
          x: 60,
          y: 60,
          width: 10,
          radius: 20,
          height: 10,
          fill: "#89b717",
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
    this.forceUpdate();
    this.setState({ render: true });
    this.state.shapes[i].render = true;
    {
      console.log(this.state.shapes[i]);
    }
    // this.state.shapes[i].render = false;
  }

  render() {
    return (
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
                      opacity={0.8}
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
                      opacity={0.8}
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
                marginLeft: "150px"
                }}
            >
            customize your board.
            </div>
        <Grid
          item
          md={5}
          style={{
            width: "100%",
            display: "inline-block",
            float: "right",
            backgroundColor: "white",
            borderRadius: "20px",
            marginRight: "4%",
            marginTop: "3%"
          }}
        >
          <Grid
            item
            md={6}
            style={{
              display: "inline-block",
              float: "right",
              marginTop: "10%"
            }}
          >
            <Stage width={100} height={100}>
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
                        opacity={0.8}
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
                        opacity={0.8}
                        shadowColor="black"
                      />
                    );
                  }
                }, this)}
              </Layer>
            </Stage>
            <Button
              style={{
                backgroundColor: "lightGray",
                display: "inline-block",
                float: "right",
                marginTop: "65%",
                marginRight: "20%"
              }}
            >
              Save
            </Button>
          </Grid>
          <Grid
            item
            md={6}
            style={{
              display: "inline-block",
              marginTop: "5%",
              marginRight: "2%",
              float: "right",
              color: "gray"
            }}
          >
            <p>shape.</p>
          </Grid>
          <br />
          <div
            style={{
              display: "inline-block",
              float: "left",
              marginLeft: "5%"
            }}
          >
            <form autoComplete="off">
              {" "}
              <Button style={{ textTransform: "lowercase", color: "gray" }}>
                Select your colour.
              </Button>
              <br /> <br />
              <FormControl style={{ width: "200px" }}>
                <InputLabel
                  htmlFor="demo-controlled-open-select"
                  style={{ display: "inline-block", float: "right" }}
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
              <Button style={{ textTransform: "lowercase", color: "gray" }}>
                Select your sound.
              </Button>
              <br />
              <FormControl style={{ width: "200px" }}>
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
        <div style={{
                display: "inline-flex",
                marginTop: "30px"
              }}>
                <Button
                  className="pulseButton"
                  style={{
                    width: "15%",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    fontSize: "17px",
                    fontWeight: "bold",
                    color: "#DE7383",
                    // marginLeft: "43%"
                  }}
                  onClick={() => this.add()}
                >
                  next
                </Button>
              </div>
      </>
    );
  }
}

export default FormPage;
