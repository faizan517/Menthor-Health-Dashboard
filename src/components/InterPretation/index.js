import React from 'react';
import { CContainer, CRow, CCol } from '@coreui/react';


const BPInterpretation = (props) => {
    const {data} = props
  return (
    <CContainer className="p-4" style={{ maxWidth: '400px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      {/* Heading */}
      <h5 style={{ color: '#007bff', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>BP Interpretation</h5>
      
      {/* Loop through bpData to render each row */}
      {data.map((item, index) => (
        <CRow key={index} className="mb-3">
          <CCol xs={9} style={{ fontSize: '14px' }}>
            <div>{item.range}</div>
            <div style={{ fontSize: '12px', color: 'gray' }}>{item.description}</div>
          </CCol>
          <CCol xs={3} className="text-end" style={{ fontSize: '14px', fontWeight: 'bold' }}>
            {item.percentage}
          </CCol>
        </CRow>
      ))}
    </CContainer>
  );
};

export default BPInterpretation;
