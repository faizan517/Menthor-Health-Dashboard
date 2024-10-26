import { CCardBody } from '@coreui/react';
import { CChartPie } from '@coreui/react-chartjs';
import React from 'react';

const PieChart = () => {
  return (
    <CCardBody
      style={{
        boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
        borderWidth: 0,
        padding: '20px',
        maxWidth: '500px', // Adjust the width for a similar look
      }}
    >
      <CChartPie
        data={{
          labels: ['Less than 18', '18-30', '30-50', '50+'], // Update labels
          datasets: [
            {
              data: [20, 30, 25, 25], // Adjusted data to match proportions
              backgroundColor: ['#20c997', '#f9e547', '#4e79f7', '#df0404'], // Updated colors to match image
              borderWidth: 0, // Remove border if needed
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: true, // Show legend
              position: 'right', // Position it to the right
              labels: {
                boxWidth: 20, // Size of the color box in the legend
                padding: 20, // Spacing between legend items
              },
            },
            title: {
              display: true,
              text: 'Employee different age ranges', // Chart title
              padding: {
                top: 10,
                bottom: 20,
              },
              font: {
                size: 18,
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false, // Set this to false to allow custom sizing
        }}
        style={{ height: '300px' }} // Adjust the height to fit
      />
    </CCardBody>
  );
};

export default PieChart;
