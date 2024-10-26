import React from 'react';
import { CContainer, CRow, CCol, CTable, CTableHead, CTableBody, CTableHeaderCell, CTableRow, CTableDataCell, CCardBody } from '@coreui/react';
import { Fonts } from '../../utils/Fonts';
import Color from '../../utils/Color';

const styles = {
    heading:{
        ...Fonts.Inter,
        fontSize:20,
        fontWeight:600,
        color: Color.primary, 
        marginBottom: '20px',
        marginTop:'10px' 
    },
    title:{
      ...Fonts.Inter,
      fontSize:16,
      color: Color.black,
      fontWeight:500
    }

}


const QuestionsChart = (props) => {
    const {data,name} = props
  return (
    <CCardBody
      style={{
        boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
        borderWidth: 0,
        borderRadius:10,
      }}
    >
    <CContainer>
      <h3 style={{...styles.heading,paddingTop:10}}>Prevalent Health Condition</h3>
      <CRow>
        <CCol md={6}>
          <CTable >
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col" style={styles.heading}>{name}</CTableHeaderCell>
                <CTableHeaderCell scope="col" style={styles.heading}>%</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {data.leftColumn.map((condition, index) => (
                <CTableRow key={index}>
                  <CTableDataCell style={styles.title}>{condition.name}</CTableDataCell>
                  <CTableDataCell style={styles.title}>{condition.percentage}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCol>
        {/* <div style={{width:1}}></div> */}
        <CCol md={6}>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col" style={styles.heading}>{name}</CTableHeaderCell>
                <CTableHeaderCell scope="col" style={styles.heading}>%</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {data.rightColumn.map((condition, index) => (
                <CTableRow key={index}>
                  <CTableDataCell style={styles.title}>{condition.name}</CTableDataCell>
                  <CTableDataCell style={styles.title}>{condition.percentage}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCol>
      </CRow>
    </CContainer>
    </CCardBody>
  );
};

export default QuestionsChart;
