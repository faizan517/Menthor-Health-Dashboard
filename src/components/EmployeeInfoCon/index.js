import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CBadge,
  CRow,
  CCol,
} from '@coreui/react';

const styles= {
    title:{display:'flex' ,justifyContent:'space-between',fontFamily:'poppins',fontWeight:500,fontSize:16},
    heading:{
        fontFamily:'poppins',fontWeight:500,fontSize:24
    }
}

const EmployeeInfo = (props) => {
    const {name,company,contact,email,city,status} = props
  return (
    <CCard style={{ width: '20rem', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <CCardBody>
        <div style={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>
          {/* <CCol> */}
            <span style={styles.heading}>Jane Cooper</span>
          {/* </CCol> */}
          {/* <CCol className=""> */}
            <CBadge color="success" style={{ borderRadius: '12px', padding: '0.25em 0.5em' }}>
              Completed
            </CBadge>
          {/* </CCol> */}
        </div>
        <CRow className="mt-3" >
          <CCol style={styles.title}>
            <div style={{...styles.title,  fontSize:14, color: '#A0AEC0' }}>Company</div>
            <div>Metholojik</div>
          </CCol>
        </CRow>
        <CRow className="mt-3" >
          <CCol style={styles.title}>
            <div style={{...styles.title,fontSize:14, color: '#A0AEC0' }}>Phone Number</div>
            <div>(225) 555-0118</div>
          </CCol>
        </CRow>
        <CRow className="mt-3" >
          <CCol style={styles.title}>
            <div style={{...styles.title,fontSize:14, color: '#A0AEC0' }}>Email</div>
            <div>jane@microsoft.com</div>
          </CCol>
        </CRow>
        <CRow className="mt-3" >
          <CCol style={styles.title}>
            <div style={{ ...styles.title,fontSize:14,color: '#A0AEC0' }}>City</div>
            <div>NY</div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default EmployeeInfo;
