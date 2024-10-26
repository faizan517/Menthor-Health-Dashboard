import { CCardBody } from '@coreui/react';
import { CChart } from '@coreui/react-chartjs';
import React from 'react';
import Color from '../../utils/Color'; // Assuming Color utility has color values
import { Fonts } from '../../utils/Fonts';

const styles = {
  heading:{
    ...Fonts.Inter,
    fontSize: '20px',
    fontWeight:600,
    color:Color.primary,
    padding:10
  }
}
const BarChart = () => {
  return (
    <CCardBody
      style={{
        boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
        borderWidth: 0,
        borderRadius:10
      }}
    >
      <text style={styles.heading}>Risk  section wise</text>
      <CChart
        type="bar"
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: '0-10',
              backgroundColor: Color.green,
              data: [40, 20, 12, 39, 10, 40, 39],
            },
            {
              label: '11-20',
              backgroundColor: Color.yellow,
              data: [30, 15, 22, 29, 18, 35, 42],
            },
            {
              label: '21-30',
              backgroundColor: Color.primary,
              data: [20, 25, 15, 33, 22, 25, 45],
            },
            {
              label: '31-40',
              backgroundColor: Color.purple,
              data: [40, 20, 12, 39, 10, 40, 39],
            },
            {
              label: '41-50',
              backgroundColor: Color.red,
              // borderTopRadius:10,
              data: [30, 15, 22, 29, 18, 35, 42],
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              labels: {
                color: Color.black,
                font:'Poppins',
              },
            },
          },
          scales: {
            x: {
              stacked: true, // Stacking the bars on the x-axis
              grid: {
                color: Color.gray,
              },
              ticks: {
                color: Color.black,
              },
            },
            y: {
              stacked: true, // Stacking the bars on the y-axis
              grid: {
                color: Color.gray,
              },
              ticks: {
                color: Color.black,
              },
            },
          },
        }}
      />
    </CCardBody>
  );
};

export default BarChart;