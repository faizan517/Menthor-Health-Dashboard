import { CCard, CCol, CContainer, CRow } from '@coreui/react'
import React from 'react'
import PieChart from '../../components/PieChart'
import EmployeeInfo from '../../components/EmployeeInfoCon'
import DynamicForm from '../../components/Quiz'


const dummyFormStructure = [
  {
    subheading: "Section 1",
    questions: [
      { id: 1, questionType: 'mcq', questionText: 'How frequently do you see your physician for routine checkups and health risk prevention?', marks: 5 },
      { id: 2, questionType: 'mcq', questionText: 'Dummy question 2', options: [{ answer: 'Option A', marks: 1 }, { answer: 'Option B', marks: 2 }] },
    ]
  }
];

const dummyResponses = {
  1: "Dummy response 1",
  2: 2  // Preselected dummy answer
};

export default function EmployeeForm() {
  return (
    <CContainer>
      {/* First Row: Employee Info and PieChart */}
      <CRow style={{diplay:'flex',justifyContent:'space-between',alignItems:'center',}}>
            <CCol sm={2} md={4} lg={8}>
        <EmployeeInfo />
            </CCol>
      <CCol sm={2} md={4} lg={4} > 
          <h4 className="card-title mb-2 color-black">Evaluation</h4>
          <CCard className="mb-4"  style={{
          boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
          borderWidth: 0,
          borderRadius: 10,
          marginTop:10
        }}>
            <PieChart/>
            </CCard>
            </CCol>
            
        </CRow>

      {/* Second Row: DynamicForm */}
      <CContainer fluid>
      <CRow className="my-4" >
        <CCol xs={12} lg={10}>
          <DynamicForm styling={{width:'70vw'}} formStructure={dummyFormStructure}
  dummyResponses={dummyResponses}  // Pass dummy values
  isActive={true}
  isReport={true}
  />
        </CCol>
      </CRow>
      </CContainer>
    </CContainer>
  )
}
