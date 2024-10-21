import React from 'react'
import { CContainer, CRow, CCol, CCard, CCardBody, CCardHeader, CImage } from '@coreui/react'
import Images from '../../../utils/Images'
import { Chart } from 'chart.js'
import SessionsByCompany from '../../../components/PieChart'

const styles = {
  container:{
  boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
  borderWidth: 0,
  borderRadius: 10,
  textAlign: 'left',
  marginTop: 40,
  },
  display4: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#2E3A59',
  },
  borderRounded: {
    borderRadius: '50%',
  },
  bgPrimary: {
    backgroundColor: '#007bff',
  },
  textWhite: {
    color: '#ffffff',
  },
  cardHeader: {
    textAlign: 'center',
    padding: '1rem',
  },
  bioDataCard: {
    padding: '2rem',
  },
  textCenter: {
    textAlign: 'center',
    marginTop: 10,
  },
  p: {
    margin: '0.5rem 0',
  },
  mb4: {
    marginBottom: '1.5rem',
  },
  mt4: {
    marginTop: '1.5rem',
  },
  my4: {
    margin: '1.5rem 0',
  },
  confetti: {
    fontSize: '3rem',
    color: '#00f',
  },
  circleStyle:{
    width: '50px',       // Adjust the size as needed
    height: '50px',      // Adjust the size as needed
    borderRadius: '50%', // To make it a circle
    border: '5px solid #20C997', // Green border, adjust the width as needed
    backgroundColor: '#fff',     // White background
  },
  headerContainor:{

 padding:5,
 backgroundColor: 'rgba(217, 217, 217, 0.25)',    
  }
  /* Ellipse 996 */

  // box-sizing: border-box;

  // position: absolute;
  // width: 42px;
  // height: 42px;
  // left: 14.5px;
  // top: 0px;

  // background: #FFFFFF;
  // border: 4px solid #20C997;
}

const ThankYouPage = () => {
  return (
    <CContainer>
      {/* Mentor Health Logo */}
      <CRow className="justify-content-center">
        <CCol xs="12" md="6" style={styles.textCenter}>
          <img src={Images.logoBig} />
        </CCol>
      </CRow>

      {/* Thank You Text */}
      <CRow className="justify-content-center my-4">
        <CCol xs="12" md="8" style={styles.textCenter}>
          <h1 style={styles.display4}>
            <img
              src={Images.thankYou}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </h1>
          <div style={{textAlign:'left'}}>
          <p>Hi there,</p>
          <p>
            Thank you for submitting this form, please tick mark to accept that the summary of this
            data will be shared with your employer. This form is intended solely to measure your
            health risk. The results of this form will allow your employer to analyze your and your
            colleagues&#39; health needs to provide you with the best and most personalized health
            benefits.
          </p>
          </div>
        </CCol>
      </CRow>

      {/* Bio Data Section */}
      <CRow xs="12" md="8" className="justify-content-center my-4" >
        <CCol xs="12" md="8">
          <CCard style={styles.container}>
            <CCardHeader style={{ ...styles.bgPrimary, ...styles.textWhite, ...styles.cardHeader }}>
              <h5>Bio Data</h5>
            </CCardHeader>
            <CCardBody style={styles.bioDataCard}>
              {/* Bio Data Information */}
              <CRow>
                <CCol xs="6">
                  <p style={styles.p}>
                    <strong>Name:</strong> Faizan Ahmed
                  </p>
                  <p style={styles.p}>
                    <strong>Company:</strong> Methologik
                  </p>
                  <p style={styles.p}>
                    <strong>Gender:</strong> Male
                  </p>
                </CCol>
                <CCol xs="6">
                  <p style={styles.p}>
                    <strong>Age:</strong> 25
                  </p>
                  <p style={styles.p}>
                    <strong>Designation:</strong> Software Developer
                  </p>
                  <p style={styles.p}>
                    <strong>DOB:</strong> 17-10-2024
                  </p>
                </CCol>
              </CRow>

              {/* BMI Section */}
              <CRow className="my-4" style={styles.textCenter}>
                <CCol xs="12" >
                  <div style={styles.headerContainor}>
                  <h5>BMI</h5>
                  </div>
                  <CRow className="justify-content-center">
                    <CCol xs="4">
                      <p style={styles.p}>
                        <strong>Weight:</strong> 56
                      </p>
                    </CCol>
                    <CCol xs="4">
                      <p style={styles.p}>
                        <strong>Height:</strong> 5.9
                      </p>
                    </CCol>
                    <CCol xs="4">
                    <div style={styles.circleStyle}>
                        <h3>20</h3>
                    </div>
                        <p>Normal Weight</p>
                      {/* </div> */}
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>

              {/* Health Risk Assessment */}
              <CRow className="my-4" style={styles.textCenter}>
                <CCol xs="12" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <div style={styles.headerContainor}>
                  <h5>Health Risk Assessment</h5>
                  </div>
                  <CCol lg={6} >
                  <SessionsByCompany/>
                  </CCol>
                  </CCol>
              </CRow>

              {/* Footer Text */}
            </CCardBody>
          </CCard>
          <CRow className="my-4">
            <CCol xs="12" style={styles.textCenter}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. 
              </p>
            </CCol>
          </CRow>
        </CCol>
      </CRow>

      {/* Footer with Logo */}
      <CRow className="justify-content-center">
        <CCol xs="12" style={styles.textCenter}>
          <CImage src="footer-logo-url.png" alt="Mentor Health" fluid />
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default ThankYouPage
