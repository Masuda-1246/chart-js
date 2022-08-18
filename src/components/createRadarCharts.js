import { Chart, registerables } from "chart.js"
import React from 'react';
import { Radar } from 'react-chartjs-2';
Chart.register(...registerables)

function CreateRadarCharts() {
  const graphData= {
    labels: [
      "国語",
      "数学",
      "理科",
      "社会",
      "体育",
      "英語"
    ],
    datasets: [
      {
        data: [100,20,45,34,61,98],
        label: '成績',
      },
    ],
  };
  return (
    <div className="App">
      <Radar data={graphData} />
    </div>
  );
}

export default CreateRadarCharts;