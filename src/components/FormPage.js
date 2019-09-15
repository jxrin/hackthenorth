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
      renderShape: false,
      sound: "",
      setSound: "",
      open: false,
      setOpen: false,
      color: "",
      setColor: ""
    };
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeSound = this.handleChangeSound.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChangeColor(event) {
    this.setState({ color: event.target.value });
  }

  handleChangeSound(event) {
    this.setState({ sound: event.target.value });
  }

  handleClose() {
    this.setState({ setOpen: false });
  }

  handleOpen() {
    this.setState({ setOpen: true });
  }
  handleClick() {
    this.setState({ renderShape: !this.state.renderShape });
  }

  render() {
    return (
      <>
        <Grid item md={6} style={{ display: "inline-block", float: "left" }}>
          <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            style={{
              backgroundColor: "gray"
            }}
          >
            <Layer>
              {[...Array(10)].map((_, i) => (
                <Circle
                  key={i}
                  x={20 * i}
                  y={20 * i}
                  radius={20}
                  fill="#89b717"
                  opacity={0.8}
                  shadowColor="black"
                  shadowBlur={10}
                  shadowOpacity={0.6}
                  onClick={this.handleClick}
                />
              ))}
            </Layer>
          </Stage>
        </Grid>
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
            marginTop: "3%",
            align: "center"
          }}
        >
          {this.state.renderShape ? (
            <Stage
              width={100}
              height={100}
              style={{
                backgroundColor: "light gray"
              }}
            >
              <Layer>
                {console.log("worked!")}
                <Circle
                  x={40}
                  y={40}
                  radius={20}
                  fill="#89b717"
                  opacity={0.8}
                  style={{
                    display: "inline-block",
                    float: "right",
                    marginTop: "40%"
                  }}
                />
              </Layer>
            </Stage>
          ) : (
            <br />
          )}

          <form autoComplete="off">
            {" "}
            <Button onClick={this.handleOpen}>Select your colour</Button>
            <br />
            <br />
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
          <br />

          <form autoComplete="off">
            {" "}
            <Button onClick={this.handleOpen}>Select your sound</Button>
            <br />
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
          <br />
        </Grid>
      </>
    );
  }
}

export default FormPage;
