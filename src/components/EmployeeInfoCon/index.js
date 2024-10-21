import React from 'react'
import { CCard, CCardBody, CCardHeader, CBadge, CRow, CCol } from '@coreui/react'
import { Fonts } from '../../utils/Fonts'

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    ...Fonts.Poppins,
    fontWeight: 500,
    fontSize: 16,
  },
  heading: {
    ...Fonts.Poppins,
    fontWeight: 500,
    fontSize: 24,
  },
  status: {
    height: 30,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(22, 192, 152, 0.38)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 176, 135, 1)',
    color: 'rgba(0, 176, 135, 1)',
    ...Fonts.Poppins,
    fontSize: 14,
  },
}

const EmployeeInfo = (props) => {
  const {
    name = 'Jane Cooper',
    company = 'Methologik',
    contact = '(225) 555-0118',
    email = 'jane@microsoft.com',
    city = 'NY',
    status = 'Completed',
    isCompany, 
    companyCity="Karachi",
    companyType="IT",
    companyEmail="methologik@gmail.com",
    companyAddress="13 Commercial, Street, DHA, Karachi",
    companyName="Methologik",
    companyStatus="Completed"
  } = props
  return isCompany ? (
    <CCard
      style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
    >
      <CCardBody>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={styles.heading}>{name}</span>
          <CBadge style={styles.status}>{status}</CBadge>
        </div>
        <CRow className="mt-3">
          <CCol style={styles.title}>
            <div style={{ ...styles.title, fontSize: 14, color: '#A0AEC0' }}>Company</div>
            <div>{company}</div>
          </CCol>
        </CRow>
        <CRow className="mt-3">
          <CCol style={styles.title}>
            <div style={{ ...styles.title, fontSize: 14, color: '#A0AEC0' }}>Phone Number</div>
            <div>{contact}</div>
          </CCol>
        </CRow>
        <CRow className="mt-3">
          <CCol style={styles.title}>
            <div style={{ ...styles.title, fontSize: 14, color: '#A0AEC0' }}>Email</div>
            <div>{email}</div>
          </CCol>
        </CRow>
        <CRow className="mt-3">
          <CCol style={styles.title}>
            <div style={{ ...styles.title, fontSize: 14, color: '#A0AEC0' }}>City</div>
            <div>{city}</div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  ) : (
    <CCard
      style={{ width: '20rem', boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
        borderWidth: 0,
        borderRadius: 10,
        marginTop:10 }}
    >
      <CCardBody>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* <CCol> */}
          <span style={styles.heading}>{companyName}</span>
          <CBadge style={styles.status}>{companyStatus}</CBadge>

          {/* </CCol> */}
        </div>
        <CRow className="mt-3">
          <CCol style={styles.title}>
            <div style={{ ...styles.title, fontSize: 14, color: '#A0AEC0' }}>Company Address</div>
            <div>{companyAddress}</div>
          </CCol>
        </CRow>
        <CRow className="mt-3">
          <CCol style={styles.title}>
            <div style={{ ...styles.title, fontSize: 14, color: '#A0AEC0' }}>Company Email</div>
            <div>{companyEmail}</div>
          </CCol>
        </CRow>
        <CRow className="mt-3">
          <CCol style={styles.title}>
            <div style={{ ...styles.title, fontSize: 14, color: '#A0AEC0' }}>Company Type</div>
            <div>{companyType}</div>
          </CCol>
        </CRow>
        <CRow className="mt-3">
          <CCol style={styles.title}>
            <div style={{ ...styles.title, fontSize: 14, color: '#A0AEC0' }}>City</div>
            <div>{companyCity}</div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default EmployeeInfo
