// import { CCardBody } from '@coreui/react'
// import { CChartPie } from '@coreui/react-chartjs'
// import React from 'react'
// import Color from '../../utils/Color'

// const PieChart =() => {
//   return (
//     <CCardBody
//     style={{ boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)', borderWidth: 0 }}
//   >
//     <CChartPie
//       data={{
//         labels: ['Red', 'Green', 'Yellow'],
//         datasets: [
//           {
//             data: [300, 50, 100],
//             backgroundColor: [Color.primary, '#df0404', '#20c997'],
//             // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//           },
//         ],
//       }}
//       style={{ borderWidth: 0 }}
//     />
//   </CCardBody>
//   )
// }
// export default PieChart

import React from 'react';
import { CCard, CCardHeader, CCardBody } from '@coreui/react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Color from '../../utils/Color';

const SessionsByCompany = (props) => {
  const {styling}=props
  const options = [
    { label: 'Danger', value: 13, color: Color.primary }, // Red for Danger
    { label: 'Neutral', value: 30, color: '#FF3B30' }, // Blue for Neutral
    { label: 'Good', value: 25, color: '#20c997' },   // Green for Good
  ];

  return (
      <CCardBody style={{...styles.cardBody, ...styling}}>
        <div style={styles.circularContainer}>
          {/* Nested Circular Progress Bars */}
          <div style={{ position: 'relative', height: '150px', width: '150px' }}>
            {options.map((option, index) => (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  transform: `scale(${1 - index * 0.3})`,
                  padding: `${index * 8}px`, // Add padding for larger gaps

                }}
              >
                <CircularProgressbar
                  value={option.value}
                  strokeWidth={10} 
                  styles={buildStyles({
                    pathColor: option.color,
                    trailColor: '#edf0f5',
                  })}
                />
              </div>
            ))}
          </div>
        </div>
        <ul style={{...styles.optionsList}}>
          {options.map((option, index) => (
            <li key={index} style={styles.optionItem}>
              <span style={{ color: option.color }}>{option.label}</span>
              <div style={styles.optionValue}>
                8,085 <span style={styles.percentage}>{option.value}%</span>
              </div>
            </li>
          ))}
        </ul>
      </CCardBody>
  );
};

const styles = {
  cardBody: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circularContainer: {
    width: '150px',
    height: '150px',
  },
  optionsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    lineHeight: '2',
  },
  optionItem: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#4d4d4d',
  },
  optionValue: {
    fontSize: '20px',
    color: '#3a3a3a',
    fontWeight: 'bold',
  },
  percentage: {
    fontSize: '14px',
    color: '#6c757d',
    marginLeft: '8px',
  },
  '@media (max-width: 1440px)': {
    cardBody: {
      flexDirection: 'column', // Stack the content on smaller screens
      textAlign: 'center',
      backgroundColor:'red'
    },
    circularContainer: {
      marginTop: '100px', // Add some space between text and circle on mobile
    },
  },
};

export default SessionsByCompany;
