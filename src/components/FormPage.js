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
      setOpen: false,
      render: false,
      shapes: [
        {
          shape: "Circle",
          x: 20,
          y: 20,
          radius: 20,
          fill: "#89b717",
          sound: "111",
          render: false
        },
        {
          shape: "Rect",
          x: 60,
          y: 60,
          width: 10,
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
  handleChangeColor(event, i) {
    this.state.shapes[i] = { fill: event.target.value };
  }

  handleChangeSound(event, i) {
    this.state.shapes[i] = { sound: event.target.value };
  }

  handleClose() {
    this.setState({ setOpen: false });
  }

  handleOpen() {
    this.setState({ setOpen: true });
  }
  handleClick(i) {
    let obj = this.state.shapes[i].render;
    this.setState({ render: true, obj: true });
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
            color: "lightGray",
            fontSize: "25px",
            fontWeight: "bold"
          }}
        >
          customize your board.
        </div>
        {this.state.render && (
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
                  <Circle
                    x={40}
                    y={40}
                    radius={40}
                    fill={this.state.color}
                    opacity={0.8}
                  />
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
                onClick={() => {
                  this.setState({ render: false });
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
                <Button
                  onClick={this.handleOpen}
                  style={{ textTransform: "lowercase", color: "gray" }}
                >
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
                <Button
                  onClick={this.handleOpen}
                  style={{ textTransform: "lowercase", color: "gray" }}
                >
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
        )}
      </>
    );
  }
}

export default FormPage;
