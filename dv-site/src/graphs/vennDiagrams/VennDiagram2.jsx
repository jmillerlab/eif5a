import React, { Component } from "react";
import Highcharts from "highcharts";
import VennModule from "highcharts/modules/venn.js";
import HighchartsReact from "highcharts-react-official";
import "./VennDiagram2.css";

VennModule(Highcharts);

export default class TwoGroupVennDiagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data || [],
    };
  }

  componentDidMount() {
    // Check if the data prop has changed before updating state
    if (this.props.data !== this.state.data) {
      this.setState({ data: this.props.data || [] });
    }
  }

  render() {
    let vennOptions = {
      title: {
        text: "",
      },
      chart: {
        className: "",
        animation: false,
        height: 500,
        width: 600,
      },

      plotOptions: {
        venn: {
          dataLabels: {
            style: {
              fontSize: "13px", // Adjust the font size as needed
              textOutline: "none", // Remove the white outline
              color: "black",
            },
          },
          states: {
            hover: {
              borderColor: "black",
              brightness: 0,
              opacity: 0.8,
            },
            inactive: {
              borderColor: "none",
              opacity: 0.25,
            },
          },
        },
      },
      series: [
        {
          type: "venn",
          data: this.state.data.map((item, index) => ({
            ...item,
            value: item.value,
            displayValue: item.displayValue,
            colorIndex: `color${index}`,
          })),
          borderColor: "none",
          borderWidth: 1,
        },
      ],
      colors: this.state.data.map((item, index) => getColorForSets(index)),

      tooltip: {
        formatter: function () {
          let displayValue = this.point.displayValue || this.point.value;
          let name = this.point.displayName || this.point.sets.join(", ");
          // let name = " ";
          // return `<div style="text-align: center;"><b>${name} </b><span>Gene_IDs: ${displayValue}</span></div>`;
          return `<div style="text-align: center;"><b>${name} </b>`;
        },
      },
    };

    function getColorForSets(index) {
      const colorPalette = ["#1134A6", "#FF0000"];

      return colorPalette[index % colorPalette.length];
    }

    return (
      <div className="venn2-container">
        <div className="chart2-container">
          <HighchartsReact highcharts={Highcharts} options={vennOptions} />
        </div>
        <div className="legend2-container">
          {this.state.data.map((item, index) => (
            <div key={index} className="legend2-item">
              <span
                className="legend2-color"
                style={{ backgroundColor: vennOptions.colors[index] }}
              ></span>
              <span className="legend2-text">
                {item.displayName || item.sets.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
