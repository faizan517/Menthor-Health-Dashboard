import React from 'react'
import { useForm } from 'react-hook-form'
import {
  CCol,
  CContainer,
  CForm,
  CFormLabel,
  CFormFeedback,
  CRow,
  CButton,
  CFormSelect,
  CFormInput,
} from '@coreui/react'

const styles = {
  input: {
    height: '40px',
    borderRadius: '5px',
    borderWidth: 1,
    borderColor: 'gray',
    boxShadow: 'none',
    padding: '10px',
    width: '100%', // Responsive width
  },
  inputCon: { display: 'flex', flexDirection: 'column', textAlign: 'left' },
  title: {
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: 400,
  },
}

const Info = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log('Form Data:', data)
  }

  return (
    <CContainer
      className="my-5"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CForm onSubmit={handleSubmit(onSubmit)}>
        <CRow className="mb-3">
          <CCol xs={12} md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Date</CFormLabel>
              <CFormInput
                style={styles.input}
                type="date"
                {...register('date', { required: 'Date is required' })}
                invalid={!!errors.date}
              />
              <CFormFeedback invalid>{errors.date?.message}</CFormFeedback>
            </div>
          </CCol>
        </CRow>

        <CRow className="mb-3">
          <CCol xs={12} md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>First Name</CFormLabel>
              <CFormInput
                style={styles.input}
                type="text"
                {...register('firstName', { required: 'First Name is required' })}
                invalid={!!errors.firstName}
              />
              <CFormFeedback invalid>{errors.firstName?.message}</CFormFeedback>
            </div>
          </CCol>
          <CCol xs={12} md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Last Name</CFormLabel>
              <CFormInput
                style={styles.input}
                type="text"
                {...register('lastName', { required: 'Last Name is required' })}
                invalid={!!errors.lastName}
              />
              <CFormFeedback invalid>{errors.lastName?.message}</CFormFeedback>
            </div>
          </CCol>
        </CRow>

        <CRow className="mb-3">
          <CCol xs={12} md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Company Name</CFormLabel>
              <CFormInput style={styles.input} type="text" {...register('companyName')} />
            </div>
          </CCol>
          <CCol xs={12} md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Occupation</CFormLabel>
              <CFormInput style={styles.input} type="text" {...register('occupation')} />
            </div>
          </CCol>
        </CRow>

        <CRow className="mb-3">
          <CCol xs={12} md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Date of Birth</CFormLabel>
              <CFormInput
                style={styles.input}
                type="date"
                {...register('dob', { required: 'Date of Birth is required' })}
                invalid={!!errors.dob}
              />
              <CFormFeedback invalid>{errors.dob?.message}</CFormFeedback>
            </div>
          </CCol>
          <CCol xs={12} md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Gender</CFormLabel>
              <CFormSelect
                style={styles.input}
                {...register('gender', { required: 'Gender is required' })}
                invalid={!!errors.gender}
              >
                <option value="">Open this select menu</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </CFormSelect>
              <CFormFeedback invalid>{errors.gender?.message}</CFormFeedback>
            </div>
          </CCol>
        </CRow>

        <CRow className="mb-3">
          <CCol xs={12} md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Weight (in Kg)</CFormLabel>
              <CFormInput
                style={styles.input}
                type="number"
                {...register('weight', { required: 'Weight is required' })}
                invalid={!!errors.weight}
              />
              <CFormFeedback invalid>{errors.weight?.message}</CFormFeedback>
            </div>
          </CCol>
          <CCol xs={12} md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Height (in cm)</CFormLabel>
              <CFormInput
                style={styles.input}
                type="number"
                {...register('height', { required: 'Height is required' })}
                invalid={!!errors.height}
              />
              <CFormFeedback invalid>{errors.height?.message}</CFormFeedback>
            </div>
          </CCol>
        </CRow>

        <CRow className="mb-3">
          <CCol xs={12}>
            <p style={{ ...styles.title, textAlign: 'left', fontSize: 16, fontWeight: 500 }}>
              Table for BMI formula calculation and ranges given below
            </p>
          </CCol>
        </CRow>

        <div className="d-flex justify-content-end">
          <CButton type="submit" style={{ backgroundColor: '#0048ff', color: 'white' }} className="px-5">
            Next
          </CButton>
        </div>

        <div className="d-flex justify-content-start mt-2">
          <CButton type="button" style={{ backgroundColor: '#0048ff', color: 'white' }} className="px-5">
            Skip
          </CButton>
        </div>
      </CForm>
    </CContainer>
  )
}

export default Info
