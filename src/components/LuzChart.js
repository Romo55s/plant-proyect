import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, Title, Tooltip, Legend, BarController, LinearScale } from 'chart.js';

// Register controllers, scales, and elements in Chart.js
Chart.register(BarController, BarElement, CategoryScale, Title, Tooltip, Legend, LinearScale);

function TempAmbChart({ data }) {
  const createChartData = (label, dataKey, color) => ({
    labels: data.body.map(item => item.Date),
    datasets: [
      {
        label,
        data: data.body.map(item => item[dataKey]),
        backgroundColor: color,
        borderColor: color,
        borderWidth: 1,
      },
    ],
  });

  const createOptions = (title) => ({
    plugins: {
      title: {
        display: true,
        text: title,
      },
    },
  });

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="h-96">
            <Bar data={createChartData('Temp Amb', 'temp_amb', 'rgba(255,99,132,0.6)')} options={createOptions('Temp Amb')} />
          </div>
          <div className="h-96">
            <Bar data={createChartData('Hum Tierra', 'hum_tierra', 'rgba(75,192,192,0.6)')} options={createOptions('Hum Tierra')} />
          </div>
          <div className="h-96">
            <Bar data={createChartData('Luz', 'luz', 'rgba(153,102,255,0.6)')} options={createOptions('Luz')} />
          </div>
          <div className="h-96">
            <Bar data={createChartData('Hum Amb', 'hum_amb', 'rgba(255,159,64,0.6)')} options={createOptions('Hum Amb')} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TempAmbChart;