import React, { useState, useEffect } from 'react'
import { CCard } from '@coreui/react'
import 'react-circular-progressbar/dist/styles.css'
import { useMediaQuery } from 'react-responsive'
import { CSmartPagination } from '@coreui/react-pro'

// import axios from 'axios';
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CBadge,
  CFormInput,
  CContainer,
  CRow,
  CCol,
  CFormSelect,
} from '@coreui/react'
import UserStatsCard from '../../components/UserStatsCard'
import SearchBar from '../../components/search'
import { useNavigate } from 'react-router-dom'
import EmployeeInfo from '../../components/EmployeeInfoCon'
import PieChart from '../../components/PieChart'
import { LuPlus } from 'react-icons/lu'

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
    fontFamily: 'poppins',
    fontWeight: 500,
    fontSize: 14,
  },
  title: {
    fontFamily: 'poppins',
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
    fontFamily: 'poppins',
    fontSize: 14,
  },
  mainHeading: {
    fontFamily: 'poppins',
    fontWeight: 600,
    fontSize: 22,
  },
  secHeading: {
    fontFamily: 'poppins',
    fontWeight: 400,
    fontSize: 14,
    color: 'rgba(22, 192, 152, 1)',
  },
}

const Companies = () => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 8
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const navigate = useNavigate();

  function handleClick() {
    navigate("/companiesDetails");
  }
  function companyCreation() {
    navigate("/companyCreation");
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
      <UserStatsCard />
      <CCard
        className="mb-4"
        style={{
          borderRadius: '12px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
          borderWidth: 0,
        }}
      >
        <CRow className="my-4 p-3">
          <CCol sm={3} md={5} lg={5 } xl={7}>
            <h2 style={styles.mainHeading}>Companies</h2>
            <p style={styles.secHeading}>Active companies</p>
          </CCol>
          <CCol sm={2} md={6} lg={6} xl={5}>
            <div className="d-flex justify-content-flex-end " > 
          <div  className="me-2 d-flex justify-content-center align-items-center" style={{borderRadius:10,backgroundColor:'rgba(249, 251, 255, 1)',padding:10 }}>
          <LuPlus size={20} style={{cursor:'pointer'}} onClick={companyCreation} />
          </div>
            <CFormInput
              placeholder="Search"
              value={search}
              onChange={handleSearch}
              className="me-2"
              style={{ width:isMobile ? '100px' : '250px', backgroundColor: 'rgba(249, 251, 255, 1)' }}
            />

            <CFormSelect
              value={sortBy}
              onChange={handleSortChange}
              style={{ width: isMobile ? '50px' : '100px', backgroundColor: 'rgba(249, 251, 255, 1)' }}
            >
              <option value="newest">Sort by: Newest</option>
              <option value="oldest">Sort by: Oldest</option>
            </CFormSelect>
            </div>
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
                        fontFamily: 'poppins',
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
  )
}

export default Companies