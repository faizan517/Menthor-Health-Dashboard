import { CCard, CCol, CContainer, CRow } from '@coreui/react'
import React from 'react'
import PieChart from '../../components/PieChart'
import EmployeeInfo from '../../components/EmployeeInfoCon'

export default function EmployeeForm() {
  return (
    <CContainer>
        <CRow style={{diplay:'flex',justifyContent:'center',alignItems:'center',}}>
            <CCol>
        <EmployeeInfo/>
            </CCol>
      <CCol sm={2} md={4} lg={4} > 
          <h4 className="card-title mb-2 color-black">Sessions By Company</h4>
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
    </CContainer>
  )
}
