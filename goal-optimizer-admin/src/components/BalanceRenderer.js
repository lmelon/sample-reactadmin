import React from 'react';
import * as d3 from 'd3';
import D3Renderer from './D3Renderer'

const TRANSITION_TIME = 500; //ms

class BalanceD3Renderer extends React.Component {

    render() {
        return (
            <D3Renderer tag={this.props.tag} render={this.renderD3.bind(this)} />
        )
    }

    renderD3(svg, root, width, height) {

        var plotData = this.props.data;

        var xScale = d3.scaleBand().domain(this.props.keys).range([0, width])
            .paddingInner(0.05)
            .paddingOuter(0);

        var maxY = d3.max(plotData, (d) => d.to) || 0;
        var yScale = d3.scaleLinear().domain([0, maxY]).range([height, 0]);

        function calc_height(d) {
            return (Math.abs(yScale(d.to) - yScale(d.from)) - 6);
        }

        function calc_y(d) {
            return yScale(d.from) - height - calc_height(d) - 10;
        }

        var join = root.selectAll("g").data(plotData, (d) => { return d ? "g_" + d.serie + "_" + d.type : null ; });
        join.transition().duration(TRANSITION_TIME)
            .attr("transform", (d) => "translate(" + 0 + "," + calc_y(d) + ")");

        join.select("rect")
            .transition().duration(TRANSITION_TIME)
            .attr("height", (d) => calc_height(d))
            .attr("fill", (d) => d.color);

        join.select("text")
            .attr("fill", (d) => d.color)
            .transition().duration(TRANSITION_TIME)
            .attr("y", (d) => calc_height(d) / 2)
            .attr("dx", "6") // margin
            .attr("dy", ".35em") // vertical-align
            .attr("text-anchor","middle")
            .text((d) => { return "Value: " + (d.to - d.from) });

        var g = join.enter().append("g").attr("id", (d) => "g_" + d.serie + "_" + d.type);
        g.append("svg:rect");
        g.append("svg:text");

        g.select("rect")
            .attr("id", (d) => "rect_" + d.serie + "_" + d.type)
            .attr("x", (d) => xScale(d.type) || 0 + 10)
            .attr("width", xScale.bandwidth() - 20)
            .attr("height", 0)
            .attr("stroke", (d) => d.color)
            .attr("stroke-width", "3")
            .attr("fill-opacity", "0.6")
            .on("mouseover", rect_mouseover)
            .on("mouseleave", rect_mouseleave)
            .on("click", rect_mouseclick)
            .transition().duration(TRANSITION_TIME)
            .attr("height", (d) => calc_height(d))
            .attr("fill", (d) => d.color);
        
        g.select("text")
            .attr("x", (d) => (xScale(d.type) || 0) + (xScale.bandwidth())/2)
            .style("opacity", 1)
            .attr("fill", (d) => d.color)
            .transition().duration(TRANSITION_TIME)
            .attr("y", (d) => calc_height(d) / 2)
            .attr("dx", "6") // margin
            .attr("dy", ".35em") // vertical-align
            .attr("text-anchor","middle")
            .text((d) => { return "Value: " + (d.to - d.from) });

        g.attr("transform", (d) => "translate(" + 0 + "," + calc_y(d) + ")");

        join.exit().remove();

        svg.on("mouseleave", mouseleave);

        // ---- Axis --------------------------------
        var xAxis = d3.axisBottom(xScale)
        root.append("g")
            .call(xAxis);

        var yAxis = d3.axisLeft(yScale)
            .tickSize(width);

        root.append("g")
            .attr("transform", "translate(" + (xScale.step() - (xScale.step() - xScale.bandwidth()) / 2 - 5) + "," + (-height) + ")")
            .call(customYAxis);

        function customYAxis(g) {
            g.call(yAxis);
            g.select(".domain").remove();
            g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "#777")
                .attr("stroke-dasharray", "2,2")
                .attr("transform", "translate(" + (xScale.step() - (xScale.step() - xScale.bandwidth()) / 2 + 5) + ", 0)");

            g.selectAll(".tick:first-of-type line")
                .attr("transform", "translate(" + (xScale.step() - (xScale.step() - xScale.bandwidth()) / 2 + 5) + ", 0)")

            g.selectAll(".tick text").attr("x", 5).attr("dy", -4);
        }

        // ---- Events --------------------------------
        function rect_mouseover(d) {
            root.selectAll("rect").style("opacity", 0.3);
            root.select("#rect_" + d.serie + "_" + d.type).style("opacity", 1);
        }

        function rect_mouseleave(d) {

        }

        function rect_mouseclick(d) {
            console.log("Clockied:", d, d3.event)
        }

        function mouseleave() {

            // Deactivate all segments during transition.
            root.selectAll("rect").on("mouseover", null);

            // Transition each segment to full opacity and then reactivate it.
            root.selectAll("rect")
                .transition()
                .duration(TRANSITION_TIME)
                .style("opacity", 1);

            root.selectAll("rect").on("mouseover", rect_mouseover);   

            // Transition each segment to full opacity and then reactivate it.
            root.selectAll("rect")
                .transition()
                .duration(500)
                .style("opacity", 1);
        }
    }

    

}

export default BalanceD3Renderer;
