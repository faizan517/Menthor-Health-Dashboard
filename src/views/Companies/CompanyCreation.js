import React from 'react'
import {
    CButton,
  CCol,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const styles = {
  heading: {
    padding: 10,
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 20,
  },
  answerFont: {
    padding: 10,
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 20,
  },
  answerText: {
    padding: 10,
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 20,
    maxWidth: '600px',
    width: '632px',
    borderRadius: 5,
  },
  answerCheck: {
    padding: 10,
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 20,
  },
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    borderTop: '2px solid #ddd',
    paddingTop: 30,
  },
  mainHead: {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: '35px',
    textAlign: 'justify',
    lineHeight: 1.3,
  },
  tabHead: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: '20px',
    textAlign: 'justify',
  },
  tabsWrapper: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginTop: '30px',
    borderTop: '2px solid #ddd',
    paddingTop: 30,
  },
  arrowButton: {
    cursor: 'pointer',
    padding: '10px',
    zIndex: 1,
  },
  tabsContainer: {
    display: 'flex',
    overflowX: 'hidden', // Hide overflowing tabs
    // whiteSpace: 'nowrap',
    scrollBehavior: 'smooth',
    // width: `${5 * 200}px`, // Visible width for 5 tabs
  },
  tab: {
    // flexShrink: 0,
    // width: `${tabWidth}px`,
    // padding: '5px 5px',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px',
    // margin: '0 5px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
}

const CompanyCreation = ({ onInputChange }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();

  function handleClick() {
    navigate("/generatedForm");
  }
  return (
    <CContainer
    style={{
      boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
      borderWidth: 0,
      borderRadius: 10,
      textAlign: 'left',
      marginTop: 40,
    }}
  >
      <CForm >
        <CRow className="mb-3 mt-5">
          <CCol md={6} className="mb-3 mt-5">
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Company Name</CFormLabel>
              <CFormInput
                style={styles.input}
                type="text"
                onChange={(e) => onInputChange('firstName', e.target.value)}
              />
              <CFormFeedback invalid>{errors.firstName?.message}</CFormFeedback>
            </div>
          </CCol>
          <CCol md={6} className="mb-3 mt-5">
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Company Address</CFormLabel>
              <CFormInput
                style={styles.input}
                type="text"
                onChange={(e) => onInputChange('lastName', e.target.value)}
              />
              <CFormFeedback invalid>{errors.lastName?.message}</CFormFeedback>
            </div>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CCol md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Company Email</CFormLabel>
              <CFormInput
                style={styles.input}
                type="email"
                onChange={(e) => onInputChange('companyName', e.target.value)}
              />
            </div>
          </CCol>

          <CCol md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Company Type</CFormLabel>
              <CFormInput
                style={styles.input}
                type="text"
                onChange={(e) => onInputChange('occupation', e.target.value)}
              />
            </div>
          </CCol>
        </CRow>

        <CRow className="mb-3">
          <CCol md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>City</CFormLabel>
              <CFormInput
                style={styles.input}
                type="text"
                onChange={(e) => onInputChange('occupation', e.target.value)}
              />
            </div>
          </CCol>
          <text style={{ ...styles.title, textAlign: 'left', fontSize: 16, fontWeight: 500,color:'white' }}>
            Table for BMI formula calculation and ranges given below
          </text>
        </CRow>
        <div className="d-flex justify-content-end">
            {/* {currentTab === formStructure.length - 1 ? ( */}
              <CButton
                style={{ backgroundColor: '#0048ff', color: 'white' }}
                // type="submit"
                className="mb-3 mt-3"
                onClick={handleClick}
              >
                Submit
              </CButton>
              </div>
      </CForm>
      
    </CContainer>
  )
}

export default CompanyCreation
