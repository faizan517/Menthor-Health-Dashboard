import { CBadge, CCard, CCol, CContainer, CFormInput, CFormSelect, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
// import React from 'react'
import EmployeeInfo from '../../components/EmployeeInfoCon'
import React, { useState, useEffect } from 'react'
// import { CCard } from '@coreui/react'
import 'react-circular-progressbar/dist/styles.css'
import { useMediaQuery } from 'react-responsive'
import { CSmartPagination } from '@coreui/react-pro'
import { useNavigate } from 'react-router-dom'
import UserStatsCard from '../../components/UserStatsCard'
import { Fonts } from '../../utils/Fonts'
import CircularChart from '../../components/CircularChart'

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
      color: 'gray',
      ...Fonts.Poppins,
      fontWeight: 500,
      fontSize: 14,
    },
    title: {
      ...Fonts.Poppins,
      fontWeight: 500,
      fontSize: 14,
      cursor:'pointer'
    },
    status: {
      height: 30,
      width: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(22, 192, 152, 0.38)',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'rgba(0, 176, 135, 1)',
      color: 'rgba(0, 176, 135, 1)',
      ...Fonts.Poppins,
      fontSize: 14,
    },
    mainHeading: {
      ...Fonts.Poppins,
      fontWeight: 600,
      fontSize: 22,
    },
    secHeading: {
      ...Fonts.Poppins,
      fontWeight: 400,
      fontSize: 14,
      color: 'rgba(22, 192, 152, 1)',
    },
  }


const  CompanyReports = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    const [sortBy, setSortBy] = useState('newest')
    const [currentPage, setCurrentPage] = useState(1)
    const usersPerPage = 8
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    const navigate = useNavigate();
  
    function handleClick() {
      navigate("/employeeForm");
    }
  
    const dummyUsers = [
      {
        id: 1,
        name: 'Jane Cooper',
        company: 'Methologik(Pvt) Ltd',
        phone: '123-456-7890',
        email: 'john@example.com',
        city: 'New York',
        isActive: true,
      },
      {
        id: 2,
        name: 'Floyd Miles',
        company: 'Yahoo',
        phone: '987-654-3210',
        email: 'jane@example.com',
        city: 'Los Angeles',
        isActive: false,
      },
      {
        id: 3,
        name: 'Michael Johnson',
        company: 'Adobe',
        phone: '456-789-1230',
        email: 'michael@example.com',
        city: 'Chicago',
        isActive: true,
      },
      {
        id: 4,
        name: 'Emily Davis',
        company: 'Tesla',
        phone: '321-654-9870',
        email: 'emily@example.com',
        city: 'Houston',
        isActive: true,
      },
      {
        id: 5,
        name: 'William Brown',
        company: 'Google',
        phone: '654-321-0987',
        email: 'william@example.com',
        city: 'Phoenix',
        isActive: false,
      },
      {
        id: 6,
        name: 'Olivia Jones',
        company: 'Microsoft',
        phone: '789-123-4567',
        email: 'olivia@example.com',
        city: 'Philadelphia',
        isActive: true,
      },
      {
        id: 7,
        name: 'James Garcia',
        company: 'Facebook',
        phone: '234-567-8901',
        email: 'james@example.com',
        city: 'San Antonio',
        isActive: false,
      },
      {
        id: 8,
        name: 'Sophia Martinez',
        company: 'Microsoft',
        phone: '890-123-4567',
        email: 'sophia@example.com',
        city: 'San Diego',
        isActive: true,
      },
      {
        id: 9,
        name: 'David Rodriguez',
        company: 'Company I',
        phone: '567-890-1234',
        email: 'david@example.com',
        city: 'Dallas',
        isActive: true,
      },
      {
        id: 10,
        name: 'Ava Hernandez',
        company: 'Company J',
        phone: '901-234-5678',
        email: 'ava@example.com',
        city: 'San Jose',
        isActive: false,
      },
      // Add more dummy users if needed
    ]
  
    useEffect(() => {
      fetchUsers()
    }, [sortBy, currentPage])
  
    const fetchUsers = () => {
      // Filter and sort users based on search and sortBy
      let filteredUsers = dummyUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.company.toLowerCase().includes(search.toLowerCase()),
      )
  
      // Sort by newest or oldest
      filteredUsers =
        sortBy === 'newest'
          ? filteredUsers.sort((a, b) => b.id - a.id)
          : filteredUsers.sort((a, b) => a.id - b.id)
  
      // Paginate
      const startIndex = (currentPage - 1) * usersPerPage
      const paginatedUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage)
  
      setUsers(paginatedUsers)
    }
  
    const handleSearch = (e) => {
      setSearch(e.target.value)
      setCurrentPage(1) // Reset to the first page on search
    }
  
    const handleSortChange = (e) => {
      setSortBy(e.target.value)
    }
  
    const options = [
      { label: 'Option 1', value: 13, color: '#007bff' },
      { label: 'Option 2', value: 30, color: '#dc3545' },
      { label: 'Option 3', value: 25, color: '#28a745' },
    ]
  
  return (
    <CContainer fluid>
        <CRow style={{diplay:'flex',justifyContent:'center',alignItems:'center',}}>
            <CCol>
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
            <CircularChart/>
            </CCard>
            </CCol>
            
        </CRow>
        <CContainer fluid>
      <CCard
        className="mb-4"
        style={{
          borderRadius: '12px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
          borderWidth: 0,
        }}
      >
        <CRow className="my-4 p-3">
        <CCol sm={4} md={5} lg={5} xl={8}>
            <h2 style={styles.mainHeading}>Companies</h2>
            <p style={styles.secHeading}>Active companies</p>
          </CCol>
          <CCol md={3} className="d-flex justify-content-flex-end" style={{ height: '40px' }}>
            <CFormInput
              placeholder="Search"
              value={search}
              onChange={handleSearch}
              className="me-2"
              style={{ width: '250px', backgroundColor: 'rgba(249, 251, 255, 1)' }}
            />

            <CFormSelect
              value={sortBy}
              onChange={handleSortChange}
              style={{ width: '100px', backgroundColor: 'rgba(249, 251, 255, 1)' }}
            >
              <option value="newest">Sort by: Newest</option>
              <option value="oldest">Sort by: Oldest</option>
            </CFormSelect>
          </CCol>
        </CRow>

        <CTable responsive hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell style={styles.heading}>User Name</CTableHeaderCell>
              <CTableHeaderCell style={styles.heading}>Company</CTableHeaderCell>
              <CTableHeaderCell style={styles.heading}>Phone Number</CTableHeaderCell>
              <CTableHeaderCell style={styles.heading}>Email</CTableHeaderCell>
              <CTableHeaderCell style={styles.heading}>City</CTableHeaderCell>
              <CTableHeaderCell style={styles.heading}>Status</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {users.map((user) => (
              <CTableRow key={user.id} onClick={handleClick}>
                <CTableDataCell style={styles.title}>{user.name}</CTableDataCell>
                <CTableDataCell style={styles.title}>{user.company}</CTableDataCell>
                <CTableDataCell style={styles.title}>{user.phone}</CTableDataCell>
                <CTableDataCell style={styles.title}>{user.email}</CTableDataCell>
                <CTableDataCell style={styles.title}>{user.city}</CTableDataCell>
                <CTableDataCell>
                  {user.isActive ? (
                    <CBadge style={styles.status}>completed</CBadge>
                  ) : (
                    <CBadge
                      style={{
                        ...styles.status,
                        backgroundColor: 'rgba(255, 197, 197, 1)',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'rgba(223, 4, 4, 1)',
                        color: 'rgba(223, 4, 4, 1)',
                        ...Fonts.Poppins,
                        fontSize: 14,
                      }}
                    >
                      Incomplete
                    </CBadge>
                  )}
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
        
        <CSmartPagination
          size="sm"
          activePage={currentPage}
          pages={2}
          onActivePageChange={setCurrentPage}
          className="pagination cursor-pointer"
          align={'end'}

          />
      </CCard>

      
    </CContainer>
    </CContainer>
  )
}
 export default CompanyReports