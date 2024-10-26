import React from 'react';
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Fonts } from '../../utils/Fonts';

const styles = {
  heading: {
    padding: 10,
    ...Fonts.Inter,
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 20,
  },
  title: {
    ...Fonts.Inter,
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    padding: 10,
    ...Fonts.Inter,
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 20,
    borderRadius: 5,
  },
};

const CompanyCreation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // Handle form submission with Axios
  const onSubmit = async (data) => {
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/auth/createCompany', data);
      toast.success('Login successful!');
      flushState();
      console.log('Response:', response.data);
      // Redirect to another page or show success message
      navigate('/filledCompanyCreation'); // Redirect after successful submission
    } catch (error) {
      console.error('Error:', error);
      // Handle error cases (e.g., show an error message to the user)
    }
  };
  const flushState = () => {
    setEmail('');
    setPassword('');
    setLoader(false);
  };
  return (
    <CContainer
      fluid
      style={{
        boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
        borderWidth: 0,
        borderRadius: 10,
        textAlign: 'left',
        marginTop: 40,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CForm onSubmit={handleSubmit(onSubmit)}>
        <CRow className="mb-3 mt-5" style={{ display: 'flex', justifyContent: 'center' }}>
          <CCol md={5} className="mb-3 mt-2">
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Company Name</CFormLabel>
              <CFormInput
                {...register('companyName', { required: 'Company name is required' })}
                style={styles.input}
                type="text"
              />
              {errors.companyName && <CFormFeedback invalid>{errors.companyName.message}</CFormFeedback>}
            </div>
          </CCol>
          <CCol md={5} className="mb-3 mt-2">
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Company Address</CFormLabel>
              <CFormInput
                {...register('companyAddress', { required: 'Company address is required' })}
                style={styles.input}
                type="text"
              />
              {errors.companyAddress && <CFormFeedback invalid>{errors.companyAddress.message}</CFormFeedback>}
            </div>
          </CCol>
        </CRow>
        <CRow className="mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
          <CCol md={5}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Company Email</CFormLabel>
              <CFormInput
                {...register('companyEmail', { required: 'Company email is required' })}
                style={styles.input}
                type="email"
              />
              {errors.companyEmail && <CFormFeedback invalid>{errors.companyEmail.message}</CFormFeedback>}
            </div>
          </CCol>
          <CCol md={5}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Company Type</CFormLabel>
              <CFormInput
                {...register('companyType', { required: 'Company type is required' })}
                style={styles.input}
                type="text"
              />
              {errors.companyType && <CFormFeedback invalid>{errors.companyType.message}</CFormFeedback>}
            </div>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CCol md={5}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>City</CFormLabel>
              <CFormInput
                {...register('city', { required: 'City is required' })}
                style={styles.input}
                type="text"
              />
              {errors.city && <CFormFeedback invalid>{errors.city.message}</CFormFeedback>}
            </div>
          </CCol>
        </CRow>
        <div className="d-flex justify-content-end">
          <CButton
            style={{ backgroundColor: '#0048ff', color: 'white' }}
            className="mb-3 mt-3"
            type="submit"
          >
            Submit
          </CButton>
        </div>
      </CForm>
    </CContainer>
  );
};

export default CompanyCreation;
