import React from 'react';
import { CContainer, CRow, CCol } from '@coreui/react';
import { Fonts } from '../../utils/Fonts';
import Color from '../../utils/Color';

const styles = {
  container: {

  },
  heading:{
    ...Fonts.Inter,
    color: Color.primary,
    fontWeight:600,
    fontSize:20,
    marginBottom: '20px',
  },
  text:{
    ...Fonts.Inter,
    fontWeight:400,
    fontSize:14,
  },
}

const BPInterpretation = (props) => {
    const {data} = props
  return (
    <CContainer className="p-4" style={{ maxWidth: '400px',backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      {/* Heading */}
      <h5 style={styles.heading}>BP Interpretation</h5>
      
      {/* Loop through bpData to render each row */}
      {data.map((item, index) => (
        <CRow key={index} className="mb-3">
          <CCol xs={9}>
            <div style={styles.text}>{item.range}</div>
            <div style={{...styles.text,fontSize:6}}>{item.description}</div>
          </CCol>
          <CCol xs={3} className="text-end" style={styles.text}>
            {item.percentage}
          </CCol>
        </CRow>
      ))}
    </CContainer>
  );
};

export default BPInterpretation;
