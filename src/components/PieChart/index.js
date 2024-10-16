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
import { CCardBody } from '@coreui/react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Color from '../../utils/Color';

const SessionsByCompany = (props) => {
  const { styling } = props;

  const options = [
    { label: 'Danger', value: 13, color: Color.primary }, // Red for Danger
    { label: 'Neutral', value: 30, color: '#FF3B30' }, // Blue for Neutral
    { label: 'Good', value: 25, color: '#20c997' },   // Green for Good
  ];

  return (
    <CCardBody style={{ ...styles.cardBody, }}>
      <div style={styles.circularContainer}>
        {/* Nested Circular Progress Bars */}
        <div style={styles.progressWrapper}>
          {options.map((option, index) => (
            <div
              key={index}
              style={{
                ...styles.circularBar,
                transform: `scale(${1 - index * 0.3})`, // Adjust scale
                padding: `${index * 8}px`, // Adjust padding for gaps
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
      <ul style={{...styles.optionsList, ...styling}}>
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
    flexWrap: 'wrap', // Ensures the content wraps on smaller screens
    gap: '20px', // Add spacing between elements
  },
  circularContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
  },
  progressWrapper: {
    position: 'relative',
    height: '150px',
    width: '150px',
    '@media (max-width: 768px)': {
      height: '100px',
      width: '100px',
    },
  },
  circularBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  optionsList: {
    flex: '1',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    lineHeight: '2',
    '@media (max-width: 768px)': {
      textAlign: 'center',
    },
  },
  optionItem: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#4d4d4d',
    '@media (max-width: 768px)': {
      fontSize: '14px',
    },
  },
  optionValue: {
    fontSize: '20px',
    color: '#3a3a3a',
    fontWeight: 'bold',
    '@media (max-width: 768px)': {
      fontSize: '16px',
    },
  },
  percentage: {
    fontSize: '14px',
    color: '#6c757d',
    marginLeft: '8px',
    '@media (max-width: 768px)': {
      fontSize: '12px',
    },
  },
};

export default SessionsByCompany;
