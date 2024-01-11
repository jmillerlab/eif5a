import React, { Component } from "react";
import Highcharts from "highcharts";
import VennModule from "highcharts/modules/venn.js";
import HighchartsReact from "highcharts-react-official";
import "./venndiagram3.css";

VennModule(Highcharts);

const apiResponse = [
  {
    sets: ["eIF5AvsTar4_EC"],
    displayName: "eIF5AvsTar4_EC",
    name: "372",
    value: 120,
    displayValue: 372,
  },
  {
    sets: ["DHS_DOHHvsTar4_EC"],
    displayName: "DHS_DOHHvsTar4_EC",
    value: 120,
    name: "985",

    displayValue: 1985,
  },
  {
    sets: ["eIF5A_DDvsTar4_EC"],
    displayName: "eIF5A_DDvsTar4_EC",
    value: 120,
    name: "2259",

    displayValue: 2259,
  },
  {
    sets: ["eIF5AvsTar4_EC", "DHS_DOHHvsTar4_EC"],
    value: 40,
    displayName: "eIF5AvsTar4_EC and DHS_DOHHvsTar4_EC",
    name: "72",
    displayValue: 72,
  },
  {
    sets: ["eIF5AvsTar4_EC", "eIF5A_DDvsTar4_EC"],
    value: 40,
    displayName: "eIF5AvsTar4_EC and eIF5A_DDvsTar4_EC",
    name: "51",
    displayValue: 51,
  },
  {
    sets: ["DHS_DOHHvsTar4_EC", "eIF5A_DDvsTar4_EC"],
    value: 40,
    displayName: "DHS_DOHHvsTar4_EC and eIF5A_DDvsTar4_EC",
    name: "2291",
    displayValue: 2291,
  },
  {
    sets: ["DHS_DOHHvsTar4_EC", "eIF5A_DDvsTar4_EC", "eIF5AvsTar4_EC"],
    value: 40,
    displayName: "DHS_DOHHvsTar4_EC and eIF5A_DDvsTar4_EC and eIF5AvsTar4_EC",
    name: "62",
    displayValue: 62,
  },
];

export default class ThreeGroupVennDiagram extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({ data: apiResponse });
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
      const colorPalette = [
        "#1134A6",
        "#0080FE",
        "#0F52BA",
        "#008ECC",
        // "#6693F5",
        // "#73C2FB",
        // "#000080",
      ];

      return colorPalette[index % colorPalette.length];
    }

    return (
      <div className="venn-container">
        <div className="chart-container">
          <HighchartsReact highcharts={Highcharts} options={vennOptions} />
        </div>
        <div className="legend-container">
          {this.state.data.map((item, index) => (
            <div key={index} className="legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: vennOptions.colors[index] }}
              ></span>
              <span className="legend-text">
                {item.displayName || item.sets.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
