import { CCardBody, CCol, CRow } from '@coreui/react'
import React from 'react'
import Color from '../../utils/Color' // Assuming Color utility has color values
import { Fonts } from '../../utils/Fonts'
import Images from '../../utils/Images'

const styles = {
    cardBody: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    circularContainer: {
      width: '150px',
    },
    optionsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    optionItem: {
      marginBottom: '10px',
      fontWeight: 'bold',
      fontSize: '16px',
      color: '#4d4d4d',
    },
    optionValue: {
      fontSize: '20px',
      color: '#3a3a3a',
    },
    percentage: {
      fontSize: '14px',
      color: '#6c757d',
    },
    heading: {
        ...Fonts.Inter,
        fontSize: '20px',
        fontWeight: 600,
        color: Color.primary,
        padding: 10,
      },
    text:{
      ...Fonts.Inter,
      fontSize: '16px',
      fontWeight:500,
      color:Color.fontGray,
      paddingTop:20
      
    },
    title:{
      ...Fonts.Inter,
      fontSize: '16px',
      fontWeight:700,
      color:Color.black,
    }
  };
const BMIChart = () => {
  return (
    <CCardBody
      style={{
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderWidth: 0,
        borderRadius:10,
        padding:10,
      }}
    >
    <>
      <CRow className="mb-4" style={{ backgroundColor: '#f1f0ff',display:"flex",justifyContent:'flex-end',alignItems:'center',paddingTop:10}}>
      <CCol lg={6} sm={12} >
          <text style={styles.heading}>BMI RANGE</text>
        </CCol>
        {/* <CCol lg={5}> */}
          <img src={Images.formula} style={{ width: '100%', maxWidth: '400px',height: 'auto',}}/>
        {/* </CCol> */}
      </CRow>

      {/* BMI Range Table */}
      <CRow className="text-center" >
        {/* Range Item */}
        <CCol xs={12} sm={2} className="mb-3">
          <text style={styles.title}>15%</text>
          <p style={styles.text}>
          
          <span >&lt;18.5 <br/> Below Normal Weight</span>
          </p>
        </CCol>
        <CCol xs={12} sm={2} className="mb-3">
          <h6 style={styles.title}>5%</h6>
          <p style={styles.text}>
          
          <span>&gt;=18.5 &amp; &lt;25<br/> Normal Weight</span>
          </p>

        </CCol>
        <CCol xs={12} sm={2} className="mb-3">
          <h6 style={styles.title}>20%</h6>
          <p style={styles.text}>
          <span>&gt;=25 &amp; &lt;30 <br/>Over Weight</span>
          </p>
        </CCol>
        <CCol xs={12} sm={2} className="mb-3">
          <h6 style={styles.title}>10%</h6>
          <p style={styles.text}>
          <span> &gt;=30 &amp; &lt;35 <br/> Class I Obesity</span>
          </p>
        </CCol>
        <CCol xs={12} sm={2} className="mb-3">
          <h6 style={styles.title}>30%</h6>
          <p style={styles.text}>
          <span>&gt;=35 &amp; &lt;40 <br/> Class II Obesity</span>
          </p>
        </CCol>
        <CCol xs={12} sm={2} className="mb-3">
          <h6 style={styles.title}>20%</h6>
          <p style={styles.text}>
          <span>&gt;=40 <br/> Class III Obesity</span>
          </p>
        </CCol>
      </CRow>
    </>
    </CCardBody>
  )
}

export default BMIChart
