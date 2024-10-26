import { CCardBody } from '@coreui/react'
import { CChart, CChartPie } from '@coreui/react-chartjs'
import React from 'react'
import Color from '../../utils/Color'

const DoughnutChart =() => {
  return (
    <CCardBody
    style={{ boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)', borderWidth: 0 }}
  >
    <CChart
    type='doughnut'
    
      data={{
        labels: ['satisfied', 'Unsatisfied'],
        datasets: [
          {
            data: [300, 200],
            backgroundColor: [Color.primary, 'rgba(53, 117, 255, 1)'],
            // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      }}
      style={{ borderWidth: '3px' }}
    />
  </CCardBody>
  )
}
export default DoughnutChart

