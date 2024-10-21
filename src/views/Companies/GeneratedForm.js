import React from 'react';
import { CButton, CCardBody, CRow, CCol, CContainer } from '@coreui/react';
import formIcon from '../../assets/brand/Order.png'; // Replace with your actual image path
import Images from '../../utils/Images';
import { Fonts } from '../../utils/Fonts';

const styles ={
  title:{ fontSize: '24px', ...Fonts.Inter,fontWeight: 500, marginBottom: '30px' }
}

const FormGeneratedCard = () => {
  return (
    <CContainer fluid
      style={{
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Softer shadow for a sleek look
        borderRadius: '20px', // Rounded corners to match the image
        maxWidth: '700px', // Limit width for consistency with the example image
        textAlign: 'center', // Center the content
        marginTop: '40px',
        padding: '40px', // Padding to create space around the content
      }}
    >
      <CCardBody>
        {/* Form Icon */}
        <div>
          <img src={Images.formIcon} alt="Form Icon" style={{ marginBottom: '20px' }} />
        </div>

        {/* Title */}
        <span style={styles.title}>
          Your Form Has Been Generated
        </span>

        {/* Buttons Row */}
        <CRow className="justify-content-center align-items-center mt-5">
          {/* Copy Link Button */}
          <CCol xs="auto">
            <CButton
              color="light"
              style={{
                padding: '10px 20px',
                borderRadius: '12px',
                border: '1px solid #D1D5DB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px', // Add gap between icon and text
              }}
            >
              {/* Copy Link Icon (you can add icon here if needed) */}
              Copy Link
            </CButton>
          </CCol>

          {/* "OR" text */}
          <CCol xs="auto" className="text-muted" style={{ ...styles.title,padding: '0 10px', fontSize: '18px', color:'rgba(181, 183, 192, 1)',textAlign:'center' }}>
            OR
          </CCol>

          {/* Email Button */}
          <CCol xs="auto">
            <CButton
              color="primary"
              style={{ backgroundColor: '#0048ff', color: 'white',padding: '10px 20px', }}
            type="submit"
            className="mb-3 mt-3"
            >
              Email
            </CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CContainer>
  );
};

export default FormGeneratedCard;
