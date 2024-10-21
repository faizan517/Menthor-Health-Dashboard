import React, {useState} from  'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CTab,
  CTabContent,
  CTabList,
  CTabPanel,
  CTabs,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass } from '@coreui/icons'


import { MdHeight } from 'react-icons/md'
import Quiz from '../../../components/Quiz'
import Info from '../../../components/PersonalInfo'
// import { MdKeyboardDoubleArrowRight,MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import Images from '../../../utils/Images'
import { Fonts } from '../../../utils/Fonts'

const styles = {
  formContainer: {
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    borderRadius: '10px',
    position: 'relative',
  },
  logo: {
    fontSize: '2rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  mentor: {
    color: '#006eff',
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: '5px',
  },
  health: {
    color: 'black',
  },
  headContainor: {
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center'
  },
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    borderTop: '2px solid #ddd',
    paddingTop:30,
  },
  tab: {
    padding: '5px',
    width:'50vw',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    color: '#333',
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    textAlign:'center'

  },
  activeTab: {
    backgroundColor: '#006eff',
    color: 'white',
    // fontFamily: 'Inter',
    fontWeight: 700,
  },
  mainHead: {
    ...Fonts.Inter,
    fontWeight: 700,
    fontSize: '35px',
    textAlign: 'justify',
    lineHeight:1.3
  },
  tabHead:{
    ...Fonts.Inter,
    fontWeight: 400,
    fontSize: '20px',
    textAlign: 'justify',
  }
}
const Page500 = () => {
  const [activeTab, setActiveTab] = useState(0); // Manage active tab state
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  const onTabClick = (e, index) => {
    console.log(e);
    setActiveTab(index);
  };
  
   const handleTabClick = (index) => {
    setActiveTab(index); // Set active tab on click
  };

  const TabScreen = ({ activeTab, idx, ...props }) => {
    return (
      <div
        className="animate__animated animate__fadeInLeft"
        role="tabpanel"
        {...props}
      >
        {activeTab === idx && <div className="mx-4">Tab screen {idx}</div>}
      </div>
    );
  };

  return (
    <CContainer  style={styles.formContainer}>
      {/* Header Section */}
      <CRow lg={12} md={6} sm={3} style={{...styles.header, display:'flex',flexDirection:'row-reverse'}}>
        <CCol sm={6} md={6} lg={6} style={styles.headContainor}>
        <img src={Images.head} style={{  width:  '100%', height: 'auto',}} />
          
        </CCol>
        <CCol sm={3} md={4} lg={3} style={{...styles.logo,display:'flex',justifyContent:'center',marginTop: isMobile ? 20: 0}}>
          <img src={Images.logoBig} style={{  width: isMobile ?'50%' :  '100%', height: 'auto',  maxWidth: '400px'}} onClick={handleClick}/>
        </CCol>
      </CRow>
      <CCol
      
        style={{
          textAlign: 'justify',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}
      >
        <text
          style={{
            textAlign: 'justify',
            // width: '80vw',
            ...Fonts.Inter,
            fontWeight: 400,
            fontSize: '16px',
          }}
        >
          Mentor Health is your dedicated health partner. Your well-being is our priority. Please
          take just 5 minutes out of your day to fill out this form. This personalized health
          journey is designed to evaluate your risks, understand your health needs, and maximize
          health benefits. Through this collaboration, we'll develop strategies to reduce your
          health costs and promote healthy living through preventive care. Together, we can ensure
          you lead a healthier, happier life.
        </text>
      </CCol>

      <Quiz/>
    </CContainer>
  )
}

export default Page500
