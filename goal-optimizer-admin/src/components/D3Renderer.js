import React from 'react';
import * as d3 from 'd3';

const zoom = 2;
const vpW = 2400 / zoom;
const vpH = 1200 / zoom;

var margin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

const width = vpW - margin.left - margin.right,
      height = vpH - margin.top - margin.bottom;

class D3Renderer extends React.Component {

  componentDidMount() {

    var svg = d3.select("#" + this.props.tag + "_container")
      .append("div")
      .classed("svg-container", true) //container class to make it responsive
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", `0 0 ${vpW} ${vpH}`)
      .classed("svg-content-responsive", true);

    var root = svg.append("g")
      .attr("id", this.props.tag)
      .attr("transform", "translate(" + (margin.left) + "," + (margin.top + height) + ")");

    this.props.render(svg, root, width, height);

  }

  componentDidUpdate() {
    var svg = d3.select("#" + this.props.tag + "_container")
    var root = svg.select("#" + this.props.tag)
    this.props.render(svg, root, width, height);
  }

  shouldComponentUpdate() {
    // Prevents component re-rendering
    return true;
  }

  render() {
    return (
      <div id={this.props.tag + "_container"}></div>
    )
  }
}

export default D3Renderer;