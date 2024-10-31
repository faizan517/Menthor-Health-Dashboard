import { CCardBody } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'
import React from 'react'
import Color from '../../utils/Color' // Assuming Color utility has color values
import { Fonts } from '../../utils/Fonts'

const styles = {
  heading: {
    ...Fonts.Inter,
    fontSize: '20px',
    fontWeight: 600,
    color: Color.primary,
    padding: 10,
  },
}

const BarChart = ({ chartData, chartLabels }) => {
  const defaultData = [40, 20, 12, 39]
  const defaultLabels = ['OPD', 'IPD', 'Lab', 'Pharmacy']

  return (
    <CCardBody
      style={{
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderWidth: 0,
        borderRadius: 10,
        padding: 10,
      }}
    >
      <div style={styles.heading}>Risk Section Wise</div>
      <CChart
        type="bar"
        data={{
          labels: chartLabels || defaultLabels,
          datasets: [
            {
              label: 'Risk Level',
              backgroundColor: Color.primary,
              borderColor: Color.barBorder,
              borderWidth: 2,
              borderRadius: 7,
              data: chartData || defaultData,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              labels: {
                color: Color.black,
              },
            },
          },
          scales: {
            x: {
              grid: {
                color: Color.white,
              },
              ticks: {
                color: Color.black,
              },
            },
            y: {
              grid: {
                color: Color.white,
              },
              ticks: {
                color: Color.black,
              },
            },
          },
        }}
        style={{ height: '275px' }}
      />
    </CCardBody>
  )
}

export default BarChart