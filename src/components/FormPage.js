import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, Star, Circle, Rect, Text } from "react-konva";
import Grid from "@material-ui/core/Grid";

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ render: !this.state.render });
  }
  render() {
    return (
      <Grid container>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Text text="Set up a shape to a sound and color" />
            {[...Array(10)].map((_, i) => (
              <Star
                key={i}
                x={Math.random() * window.innerWidth}
                y={Math.random() * window.innerHeight}
                numPoints={5}
                innerRadius={20}
                outerRadius={40}
                fill="#89b717"
                opacity={0.8}
                rotation={Math.random() * 180}
                shadowColor="black"
                shadowBlur={10}
                shadowOpacity={0.6}
                onClick={this.handleClick}
              />
            ))}
          </Layer>
        </Stage>
        {this.state.render ? <div></div> : null}
      </Grid>
    );
  }
}

export default FormPage;
