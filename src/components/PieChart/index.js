import { CCardBody } from '@coreui/react'
import { CChartPie } from '@coreui/react-chartjs'
import React from 'react'
import Color from '../../utils/Color'

const PieChart =() => {
  return (
    <CCardBody
    style={{ boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)', borderWidth: 0 }}
  >
    <CChartPie
      data={{
        labels: ['Red', 'Green', 'Yellow'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [Color.primary, '#df0404', '#20c997'],
            // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      }}
      style={{ borderWidth: 0 }}
    />
  </CCardBody>
  )
}
export default PieChart