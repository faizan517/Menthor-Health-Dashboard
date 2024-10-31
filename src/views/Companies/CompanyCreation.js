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
    const token = localStorage.getItem('token');

    // Check if token exists
    if (!token) {
      console.error('No token found, user may not be logged in');
      // Optionally, redirect to login or show a message
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/companies', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Response:', response.data);
      // Redirect after successful submission
      navigate('/filledCompanyCreation'); 
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      // Handle error cases (e.g., show an error message to the user)
      // Optionally set an error state to display it in the UI
    }
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
                {...register('name', { required: 'Company name is required' })}
                style={styles.input}
                type="text"
              />
              {errors.name && <CFormFeedback invalid>{errors.name.message}</CFormFeedback>}
            </div>
          </CCol>
          <CCol md={5} className="mb-3 mt-2">
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Company Address</CFormLabel>
              <CFormInput
                {...register('address', { required: 'Company address is required' })}
                style={styles.input}
                type="text"
              />
              {errors.address && <CFormFeedback invalid>{errors.address.message}</CFormFeedback>}
            </div>
          </CCol>
        </CRow>
        <CRow className="mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
          <CCol md={5}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Company Email</CFormLabel>
              <CFormInput
                {...register('email', { required: 'Company email is required' })}
                style={styles.input}
                type="email"
              />
              {errors.email && <CFormFeedback invalid>{errors.email.message}</CFormFeedback>}
            </div>
          </CCol>
          <CCol md={5}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Company Type</CFormLabel>
              <CFormInput
                {...register('category', { required: 'Company type is required' })}
                style={styles.input}
                type="text"
              />
              {errors.category && <CFormFeedback invalid>{errors.category.message}</CFormFeedback>}
            </div>
          </CCol>
        </CRow>
        <CRow className="mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
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
          <CCol md={5}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Phone</CFormLabel>
              <CFormInput
                {...register('phone', { required: 'Phone is required' })}
                style={styles.input}
                type="text"
              />
              {errors.phone && <CFormFeedback invalid>{errors.phone.message}</CFormFeedback>}
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