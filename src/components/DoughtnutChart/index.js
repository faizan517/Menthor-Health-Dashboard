import { CCardBody } from '@coreui/react';
import { CChart } from '@coreui/react-chartjs';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Fonts } from '../../utils/Fonts';
import Color from '../../utils/Color';

ChartJS.register(ArcElement, Tooltip, Legend);

const styles = {
  heading: {
    ...Fonts.Inter,
    fontSize: '20px',
    fontWeight: 600,
    color: Color.primary,
    padding: 10
  }
};

const DoughnutChart = () => {
  const [chartData, setChartData] = useState([70, 30]); // Default data
  const [labels, setLabels] = useState(['Satisfied', 'Unsatisfied']); // Default labels

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT');

        // Verify the response data structure
        if (response.data && Array.isArray(response.data.labels) && Array.isArray(response.data.data)) {
          setLabels(response.data.labels);
          setChartData(response.data.data);
        } else {
          console.warn("API response does not contain expected 'labels' or 'data' arrays.");
        }
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <CCardBody
      style={{
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderWidth: 0,
        maxWidth: '500px',
        padding: 10,
        borderRadius: 10
      }}
    >
      <h2 style={styles.heading}>Benefit Coverage</h2>
      <CChart
        type="doughnut"
        data={{
          labels: labels, // Dynamic labels
          datasets: [
            {
              data: chartData, // Dynamic data
              backgroundColor: ['#2979ff', '#75a9ff'],
              borderWidth: 0,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: true,
              position: 'right',
              labels: {
                boxWidth: 10,
                padding: 15,
              },
            },
            datalabels: {
              display: true,
              color: 'white',
              formatter: (value) => `${value}%`,
              font: {
                weight: 'bold',
                size: 14,
              },
            },
          },
          cutout: '70%',
          responsive: true,
          maintainAspectRatio: false,
        }}
        style={{ height: '250px' }}
      />
    </CCardBody>
  );
};

export default DoughnutChart;
