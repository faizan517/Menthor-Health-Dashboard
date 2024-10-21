import { CCol, CContainer, CRow } from "@coreui/react";
import React, { useRef, useState } from "react";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import "react-tabs-scrollable/dist/rts.css";
import { Fonts } from "../../utils/Fonts";

const styles = {
  heading: {
    padding: 10,
    ...Fonts.Inter,
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 20,
  },
  answerFont: {
    padding: 10,
    ...Fonts.Inter,
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 20,
  },
  
  answerText: {
    padding: 10,
    ...Fonts.Inter,
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 20,
    maxWidth: '600px',
    width: '632px',
    borderRadius: 5,
  },
  answerCheck: {
    padding: 10,
    ...Fonts.Inter,
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 20,
  },
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    borderTop: '2px solid #ddd',
    paddingTop: 30,
  },
  // tab: {
  //   // padding: '10px',
  //   // width:'200px',
  //   cursor: 'pointer',
  //   backgroundColor: '#f0f0f0',
  //   color: '#333',
  //   borderBottomRightRadius:10,
  //   borderBottomLeftRadius:10,
  //   textAlign:'center'

  // },
  // activeTab: {
  //   backgroundColor: '#006eff',
  //   color: 'white',
  //   // ...Fonts.Inter,
  //   fontWeight: 700,
  // },
  mainHead: {
    ...Fonts.Inter,
    fontWeight: 700,
    fontSize: '35px',
    textAlign: 'justify',
    lineHeight: 1.3,
  },
  tabHead: {
    ...Fonts.Inter,
    fontWeight: 400,
    fontSize: '20px',
    textAlign: 'justify',
  },
  tabsWrapper: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginTop: '30px',
    borderTop: '2px solid #ddd',
    paddingTop: 30,
  },
  arrowButton: {
    cursor: 'pointer',
    padding: '10px',
    zIndex: 1,
  },
  tabsContainer: {
    display: 'flex',
    overflowX: 'hidden', // Hide overflowing tabs
    // whiteSpace: 'nowrap',
    scrollBehavior: 'smooth',
    width: `${5 * 200}px`, // Visible width for 5 tabs
  },
  tab: {
    // flexShrink: 0,
    // width: `${tabWidth}px`,
    // padding: '5px 5px',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px',
    // margin: '0 5px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
}

export default function TabsComponent({ formStructure }) {
  const [currentTab, setCurrentTab] = useState(0)
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const tabsContainerRef = useRef(null)

  const scrollLeft = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' })
    }
  }

  // Function to scroll the tabs to the right
  const scrollRight = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' })
    }
  }
// Handle input changes for various question types including Info component
const handleInputChange = (field, value) => {
  setResponses((prev) => ({ ...prev, [field]: value }))
}

const handleSubmit = (event) => {
  event.preventDefault()
  let marks = 0

  // Calculate marks for questions
  formStructure.forEach((section) => {
    section.questions.forEach((question) => {
      const response = responses[question.id]

      if (question.questionType === 'mcq' && response) {
        marks += response // MCQ marks
      } else if (question.questionType === 'multicheck' && response) {
        marks += response.reduce((sum, mark) => sum + mark, 0) // Sum multicheck marks
      } else if (question.questionType === 'text' && response) {
        marks += question.marks // Assign full marks for text response
      }
    })
  })

  setTotalMarks(marks)
  console.log('Total Marks:', marks)
  console.log('Responses:', responses)
}

const handleTabClick = (index) => {
  setCurrentTab(index)
}

  return (
   <CContainer>
    {/* Tab navigation */}
   <CRow lg={9} xl={12} md={10} style={{...styles.tabsWrapper}}>
      {/* Left Arrow */}
      <CCol style={{...styles.arrowButton,display: isMobile ? 'none':''}} onClick={scrollLeft}>
        <MdKeyboardDoubleArrowLeft size={20} />
      </CCol>

      {/* Tabs Container */}
      <CCol lg={7} xl={11} md={9} sm={9}  style={{...styles.tabsContainer,overflowX : isMobile? 'scroll':'hidden'}} ref={tabsContainerRef}>
        {formStructure.map((tab, index) => (
          <CCol
          md={4}
          lg={3}
          xl={3}
            key={index}
            style={{
              ...styles.tab,
              ...(currentTab === index ? styles.activeTab : {}),
              
            }}
            onClick={() => handleTabClick(index)}
          >
            <span style={{ fontSize: isMobile ? 14: 20 }}>{tab.subheading}</span>
          </CCol>
        ))}
      </CCol>

      {/* Right Arrow */}
      <CCol style={{...styles.arrowButton,display: isMobile ? 'none':''}} onClick={scrollRight}>
        <MdKeyboardDoubleArrowRight size={20} />
      </CCol>
    </CRow>
   </CContainer>
  );
}
