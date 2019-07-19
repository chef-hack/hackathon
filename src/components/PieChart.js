import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {
  render() {
    const options = {
      theme: "light2",
      animationEnabled: true,
      exportFileName: "Skills",
      exportEnabled: true,
      title:{
        text: ""
      },
      data: [{
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
        dataPoints: [
          { y: 42, label: "Design" },
          { y: 19, label: "Helpful skills" },
          { y: 15, label: "Leadership" },
          { y: 24, label: "Communication" }
        ]
      }]
    }

    return (
      <div>
        <CanvasJSChart options = {options}
            /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default PieChart;