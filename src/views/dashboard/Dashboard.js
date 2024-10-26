import React from 'react'

import {
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsC,
} from '@coreui/react'
import {
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cibTwitter,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'


import MainChart from './MainChart'
import { CChartPie } from '@coreui/react-chartjs'
import { useMediaQuery } from 'react-responsive'
import Color from '../../utils/Color'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Images from '../../utils/Images'
import { Fonts } from '../../utils/Fonts'
import CircularChart from '../../components/CircularChart'

const Dashboard = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const columns = [
    {
      key: 'class',
      _props: { scope: 'col' },
    },
    {
      key: 'heading_1',
      label: 'Heading',
      _props: { scope: 'col' },
    },
    {
      key: 'heading_2',
      label: 'Heading',
      _props: { scope: 'col' },
    },
  ]
  const items = [
    {
      id: 1,
      class: 'Mark',
      heading_1: 'Otto',
      heading_2: '@mdo',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      class: 'Jacob',
      heading_1: 'Thornton',
      heading_2: '@fat',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 3,
      class: 'Larry the Bird',
      heading_2: '@twitter',
      _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } },
    },
  ]

  const tableExample = [
    {
      user: { name: 'Quintin Ed', registered: 'Jan 1, 2023' },
      country: Images.check,
      usage: {
        value: 74,
        color: Color.primary,
      },
      activity: '1 hour ago',
    },
    {
      user: { name: 'Enéas Kwadwo', new: false, registered: 'Jan 1, 2023' },
      country: Images.error,
      usage: {
        value: 98,
        color: Color.primary,
      },
      activity: 'Last month',
    },
    {
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: Images.check,
      usage: {
        value: 22,
        color: Color.primary,
      },
      activity: 'Last week',
    },
    {
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: Images.not,
      usage: {
        value: 43,
        color: Color.primary,
      },
      activity: 'Last week',
    },
  ]
  const options = [
    { label: 'Option 1', value: 13, color: '#007bff' },
    { label: 'Option 2', value: 30, color: '#dc3545' },
    { label: 'Option 3', value: 25, color: '#28a745' },
  ];

  const styles = {
    heading: {
      ...Fonts.Poppins,fontWeight:500,fontSize:24
    },
    icons: {
      height: 50,
      width: 50,
      backgroundColor: '#ebf1ff',
      borderRadius: 10,
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
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
    ulHeading:{
      ...Fonts.Sans,
      fontWeight:700,
      fontSize:14,
    }
  }

  return (
    <CContainer>
    <div style={{widht:'10vw'}}>
      <text id="traffic" className="card-title mb-0" style={styles.heading}>
        Hello Admin 👋🏼,
      </text>
    </div>
    <CRow className="g-4" sm={12} md={6} lg={12} style={{ display: 'flex', alignItems: 'flex-end',flex:'wrap' }}>
      {/* First Column */}
      <CCol xs={6} sm={6} md={2} lg={2}>
        <CWidgetStatsC
          className="mb-4"
          icon={
            <div style={styles.icons}>
              <img src={Images.group} style={{ textAlign: 'center' }} alt="Group Icon" />
            </div>
          }
          text="+25%"
          value="89.9K"
          title="Users"
          style={{
            boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
            borderWidth: 0,
            fontSize: isMobile ? '12px' : '16px',
          }}
        />
      </CCol>

      {/* Second Column */}
      <CCol xs={6} sm={6} md={2} lg={2}>
        <CWidgetStatsC
          className="mb-4"
          icon={
            <div style={{ ...styles.icons, backgroundColor: '#fce6e6' }}>
              <img src={Images.box} style={{ textAlign: 'center' }} alt="Box Icon" />
            </div>
          }
          text="Widget helper text"
          title="Company"
          value="89.9K"
          style={{
            boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
            borderWidth: 0,
            fontSize: isMobile ? '12px' : '16px',
          }}
        />
      </CCol>

      {/* Third Column */}
      <CCol xs={6} sm={6} md={2} lg={2} >
        <CWidgetStatsC
          className="mb-4"
          icon={
            <div style={styles.icons}>
              <img src={Images.puls} style={{ textAlign: 'center' }} alt="Puls Icon" />
            </div>
          }
          text="Widget helper text"
          title="Bonus"
          value="89.9K"
          style={{
            boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
            borderWidth: 0,
            fontSize: isMobile ? '12px' : '16px',
          }}
        />
      </CCol>

      {/* Fourth Column */}
      <CCol xs={6} sm={6} md={2} lg={2}>
        <CWidgetStatsC
          className="mb-4"
          icon={
            <div style={{ ...styles.icons, backgroundColor: '#e9fbf6' }}>
              <img src={Images.history} style={{ textAlign: 'center' }} alt="History Icon" />
            </div>
          }
          text="Widget text"
          title="Session"
          value="89.9K"
          style={{
            boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
            borderWidth: 0,
            fontSize: isMobile ? '12px' : '16px',
          }}
        />
      </CCol>
        {/* style={{display:'flex',flexDirection:'column',justifyContent:'center'}} */}
        <CCol sm={2} md={4} lg={4} > 
          <h4 className="card-title mb-2 color-black">Sessions By Company</h4>
          <CCard className="mb-4"  style={{
          boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
          borderWidth: 0,
          borderRadius: 10,
          marginTop:10
        }}>
            <CircularChart />


          </CCard>
        </CCol>
      </CRow>

      <CCard
        className="mb-4"
        style={{
          boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
          borderWidth: 0,
          borderRadius: 10,
          marginTop:10
        }}
      >
        <br />
        <CCol sm={3}>
          <h4 id="traffic" className="card-title mb-3 color-black" style={{...styles.ulHeading,paddingLeft:20,fontSize:24}}>
            User Logs
          </h4>
        </CCol>
        <CTable align="middle" className="mb-3 "  hover responsive>
          <CTableHead className="text-nowrap">
            <CTableRow >
              <CTableHeaderCell>{/* <CIcon icon={cilPeople} /> */}</CTableHeaderCell>
              <CTableHeaderCell style={{...styles.ulHeading,color:Color.fontGray,fontWeight:500}}>User</CTableHeaderCell>
              <CTableHeaderCell className="text-center" style={{...styles.ulHeading,color:Color.fontGray,fontWeight:500}}>Status</CTableHeaderCell>
              <CTableHeaderCell style={{...styles.ulHeading,color:Color.fontGray,fontWeight:500}}></CTableHeaderCell>
              <CTableHeaderCell style={{...styles.ulHeading,color:Color.fontGray,fontWeight:500}}>Activity</CTableHeaderCell>
              <CTableHeaderCell style={{...styles.ulHeading,color:Color.fontGray,fontWeight:500}}>Usage</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody className="p-5">
            {tableExample.map((item, index) => (
              <CTableRow v-for="item in tableItems" key={index} >
                <CTableDataCell className="text-center">
                </CTableDataCell>
                <CTableDataCell style={styles.ulHeading}>
                  <div>{item.user.name}</div>
                </CTableDataCell>
               <CTableDataCell className="text-center">
            <img
              src={item.country} />
                </CTableDataCell>  

                <CTableDataCell className="text-center">
                </CTableDataCell>
                <CTableDataCell>
      
                  <div className="fw-semibold text-nowrap" style={styles.ulHeading}>{item.activity}</div>
                </CTableDataCell>
                <CTableDataCell style={{width:'30vw'}}>
                 
                  <CProgress color={item.usage.color} value={item.usage.value} />
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
        <br />
      </CCard>
      
      <CCard
        className="mb-4"
        style={{
          boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
          borderWidth: 0,
          borderRadius: 10,
        }}
      >
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0" style={{...styles.ulHeading,fontSize:20,}}>
                Performence
              </h4>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
            </CCol>
          </CRow>
          <MainChart />
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default Dashboard
