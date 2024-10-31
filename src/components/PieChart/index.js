import { CCardBody } from '@coreui/react';
import { CChartPie } from '@coreui/react-chartjs';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Fonts } from '../../utils/Fonts';
import Color from '../../utils/Color';

const styles = {
  heading: {
    ...Fonts.Inter,
    fontSize: '20px',
    fontWeight: 600,
    color: Color.primary,
    padding: 10
  }
};

const PieChart = () => {
  const [chartData, setChartData] = useState([20, 30, 25, 25]); // Default data
  const [labels, setLabels] = useState(['Less than 18', '18-30', '30-50', '50+']); // Default labels

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT');
        
        // Check if response data contains the necessary properties
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
        borderRadius: 10,
        paddingLeft: '10px',
        maxWidth: '500px',
      }}
    >
      <h2 style={styles.heading}>Employee different age ranges</h2>
      <CChartPie
        data={{
          labels: labels, // Use dynamic labels
          datasets: [
            {
              data: chartData, // Use dynamic data
              backgroundColor: ['#20c997', '#f9e547', '#4e79f7', '#df0404'],
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
                boxWidth: 20,
                padding: 20,
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
        style={{ height: '300px' }}
      />
    </CCardBody>
  );
};

export default PieChart;
