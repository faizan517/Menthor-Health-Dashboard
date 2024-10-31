import React, { useState } from 'react'
import axios from 'axios'
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
import { PiPencilSimple } from 'react-icons/pi'
import { Fonts } from '../../utils/Fonts'

const styles = {
  heading: {
    padding: 10,
    ...Fonts.Inter,
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 20,
  },
  answerFont: {
    padding: 10,
    ...Fonts.Inter,
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 20,
  },
  answerText: {
    padding: 10,
    ...Fonts.Inter,
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 20,
    maxWidth: '600px',
    width: '632px',
    borderRadius: 5,
  },
  answerCheck: {
    padding: 10,
    ...Fonts.Inter,
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
    ...Fonts.Inter,
    fontWeight: 700,
    fontSize: '35px',
    textAlign: 'justify',
    lineHeight: 1.3,
  },
  tabHead: {
    ...Fonts.Inter,
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
    overflowX: 'hidden',
    scrollBehavior: 'smooth',
  },
  tab: {
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px',
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

const SubAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // Handle form submission with Axios
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/createAdmin', data)
      console.log('Response:', response.data)
      // You can handle success messages or redirection here
    } catch (error) {
      console.error('Error:', error)
      // Handle error cases (e.g., show an error message to the user)
    }
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
      <CForm onSubmit={handleSubmit(onSubmit)}>
        {/* Role Field */}
        <CRow className="mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
          <CCol md={5} className="mb-3 mt-5">
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Role</CFormLabel>
              <CFormSelect
                {...register('role', { required: 'Role is required' })}
                style={styles.input}
                aria-label="Default select example"
              >
                <option value="">Select</option>
                <option value="sub-admin">Sub Admin</option>
                <option value="admin">Admin</option>
              </CFormSelect>
              {errors.role && <CFormFeedback invalid>{errors.role.message}</CFormFeedback>}
            </div>
          </CCol>
          <CCol
            lg={5}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <PiPencilSimple size={20} style={{ cursor: 'pointer' }} />
          </CCol>
        </CRow>

        {/* First Name and Last Name Fields */}
        <CRow className="mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
          <CCol md={5}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>First Name</CFormLabel>
              <CFormInput
                {...register('firstName', { required: 'First name is required' })}
                style={styles.input}
                type="text"
              />
              {errors.firstName && (
                <CFormFeedback invalid>{errors.firstName.message}</CFormFeedback>
              )}
            </div>
          </CCol>
          <CCol md={5}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Last Name</CFormLabel>
              <CFormInput
                {...register('lastName', { required: 'Last name is required' })}
                style={styles.input}
                type="text"
              />
              {errors.lastName && <CFormFeedback invalid>{errors.lastName.message}</CFormFeedback>}
            </div>
          </CCol>
        </CRow>

        {/* Date of Birth and Gender Fields */}
        <CRow className="mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
          <CCol md={5}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Date of Birth</CFormLabel>
              <CFormInput
                {...register('dateOfBirth', { required: 'Date of Birth is required' })}
                style={styles.input}
                type="date"
              />
              {errors.dateOfBirth && <CFormFeedback invalid>{errors.dateOfBirth.message}</CFormFeedback>}
            </div>
          </CCol>
          <CCol md={5}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Gender</CFormLabel>
              <CFormSelect
                {...register('gender', { required: 'Gender is required' })}
                style={styles.input}
                aria-label="Default select example"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </CFormSelect>
              {errors.gender && <CFormFeedback invalid>{errors.gender.message}</CFormFeedback>}
            </div>
          </CCol>
        </CRow>

        {/* Designation and Email Fields */}
        <CRow className="mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
          <CCol md={5}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Designation</CFormLabel>
              <CFormInput
                {...register('designation', { required: 'Designation is required' })}
                style={styles.input}
                type="text"
              />
            </div>
          </CCol>
          <CCol md={5}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Email</CFormLabel>
              <CFormInput
                {...register('email', { required: 'Email is required' })}
                style={styles.input}
                type="email"
              />
            </div>
          </CCol>
        </CRow>

        {/* Password Fields */}
        <CRow className="mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
          <CCol md={5}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Password</CFormLabel>
              <CFormInput
                {...register('password', { required: 'Password is required' })}
                style={styles.input}
                type="password"
              />
            </div>
          </CCol>
        </CRow>

        <div className="d-flex justify-content-end">
          <CButton
            style={{ backgroundColor: '#0048ff', color: 'white' }}
            type="submit"
            className="mb-3 mt-3"
          >
            Submit
          </CButton>
        </div>
      </CForm>
    </CContainer>
  )
}

export default SubAdmin;