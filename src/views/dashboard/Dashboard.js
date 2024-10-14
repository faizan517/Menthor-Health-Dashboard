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

import group from '../../assets/brand/group.png'
import box from '../../assets/brand/box.png'
import puls from '../../assets/brand/puls.png'
import history from '../../assets/brand/history.png'
import check from '../../assets/brand/check_circle.png'
import error from '../../assets/brand/error.png'
import not from '../../assets/brand/red.png'


import MainChart from './MainChart'
import { CChartPie } from '@coreui/react-chartjs'
import { useMediaQuery } from 'react-responsive'
import Color from '../../utils/Color'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Dashboard = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

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
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
      country: check,
      usage: {
        value: 74,
        color: Color.primary,
      },
      activity: '1 hour ago',
    },
    {
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
      country: error,
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
      country: check,
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
      country: not,
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
      fontFamily:'poppins',fontWeight:500,fontSize:24
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
  }

  return (
    <CContainer>
    <div style={{widht:'10vw'}}>
      <text id="traffic" className="card-title mb-0" style={styles.heading}>
        Hello Admin 👋🏼,
      </text>
    </div>
      <CRow sm={12} md={6} lg={12} style={{ display: 'flex', alignItems: 'flex-end' }}>
        <CCol sm={6} md={2} lg={2}>
          <CWidgetStatsC
            className="mb-4"
            icon={
              <div style={styles.icons}>
                <img src={group} style={{ textAlign: 'center' }} />
              </div>
            }
            text="+25%"
            value="89.9K"
            title="Users"
            style={{ boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)', borderWidth: 0, fontSize: isMobile ? '12px': '    '  }}
          />
        </CCol>
        <CCol sm={2} md={2} lg={2}>
          <CWidgetStatsC
            // style={{height:'60%'}}
            className="mb-4"
            icon={<div style={{...styles.icons, backgroundColor:'#fce6e6'}}>
            <img src={box} style={{ textAlign: 'center' }} />
          </div>}
            text="Widget helper text"
            title="Company"
            value="89.9K"
            style={{ boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)', borderWidth: 0, fontSize: isMobile ? '12px': '    '  }}
          />
        </CCol>
        <CCol sm={2} md={2} lg={2}>
          <CWidgetStatsC
            className="mb-4"
            icon={<div style={styles.icons}>
            <img src={puls} style={{ textAlign: 'center' }} />
          </div>}
            text="Widget helper text"
            title="Bonus Rate"
            value="89.9K"
            style={{ boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)', borderWidth: 0, fontSize: isMobile ? '13px': '    ' }}
          />
        </CCol>
        <CCol sm={2} md={2} lg={2}>
          <CWidgetStatsC
            className="mb-4"
            icon={<div style={{...styles.icons,backgroundColor:'#e9fbf6'}}>
            <img src={history} style={{ textAlign: 'center' }} />
          </div>}
            text="Widget  text"
            title="Session Rate"
            value="89.9K"
            style={{ boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)', borderWidth: 0, fontSize: isMobile ? '12px': '    '  }}
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
            <CCardBody
              style={{ boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)', borderWidth: 0 }}
            >
              <CChartPie
                data={{
                  labels: ['Red', 'Green', 'Yellow'],
                  datasets: [
                    {
                      data: [300, 50, 100],
                      backgroundColor: [Color.primary, '#df0404', '#20c997'],
                      // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    },
                  ],
                }}
                style={{ borderWidth: 0 }}
              />
            </CCardBody>

            {/* <WidgetsDropdown /> */}
      {/* <CCard className="mb-4"> */}
      {/* <CCardHeader>Sessions By Company</CCardHeader> */}
      {/* <CCardBody style={styles.cardBody}>
        <div style={styles.circularContainer}>
          Nested Circular Progress Bars
          <div style={{ position: 'relative', height: '150px', width: '150px' }}>
            {options.map((option, index) => (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  transform: `scale(${1 - index * 0.4})`,
                }}
              >
                <CircularProgressbar
                  value={option.value}
                  styles={buildStyles({
                    pathColor: option.color,
                    trailColor: '#edf0f5',
                  })}
        strokeWidth={10}

                />
              </div>
            ))}
          </div>
        </div>
        <ul style={styles.optionsList}>
          {options.map((option, index) => (
            <li key={index} style={styles.optionItem}>
              {option.label}
              <div style={styles.optionValue}>
                8,085 <span style={styles.percentage}>{option.value}%</span>
              </div>
            </li>
          ))}
        </ul>
      </CCardBody> */}
    {/* </CCard> */}
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
          <h4 id="traffic" className="card-title mb-3 color-black" style={{paddingLeft:20}}>
            User Logs
          </h4>
        </CCol>
        <CTable align="middle" className="mb-3 "  hover responsive>
          <CTableHead className="text-nowrap">
            <CTableRow >
              <CTableHeaderCell>{/* <CIcon icon={cilPeople} /> */}</CTableHeaderCell>
              <CTableHeaderCell>User</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
              <CTableHeaderCell></CTableHeaderCell>
              <CTableHeaderCell>Activity</CTableHeaderCell>
              <CTableHeaderCell>Usage</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody className="p-5">
            {tableExample.map((item, index) => (
              <CTableRow v-for="item in tableItems" key={index} >
                <CTableDataCell className="text-center">
                </CTableDataCell>
                <CTableDataCell>
                  <div>{item.user.name}</div>
                </CTableDataCell>
               <CTableDataCell className="text-center">
            <img
              src={item.country} />
                </CTableDataCell>  

                <CTableDataCell className="text-center">
                </CTableDataCell>
                <CTableDataCell>
      
                  <div className="fw-semibold text-nowrap">{item.activity}</div>
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
              <h4 id="traffic" className="card-title mb-0" style={{fontFamily:'poppins'}}>
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
