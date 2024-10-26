import React, { useState, useEffect } from 'react'
import { CCard } from '@coreui/react'
import 'react-circular-progressbar/dist/styles.css'
import { useMediaQuery } from 'react-responsive'
import { CSmartPagination } from '@coreui/react-pro'
import { useNavigate } from "react-router-dom"
import axios from 'axios' // Add axios import
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
import { LuPlus } from 'react-icons/lu'
import { Fonts } from '../../utils/Fonts'

const styles = {
  // Add your styles here as you did
}

const UserTable = () => {
  const navigate = useNavigate()

  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 8
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  function handleClick() {
    navigate("/subAdmin")
  }

  useEffect(() => {
    fetchUsers() // Fetch users on component mount
  }, [sortBy, currentPage])

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://your-api-url.com/users', {
        params: {
          page: currentPage, // Send pagination info if needed
          limit: usersPerPage,
          sort: sortBy
        }
      })

      // Set users from API response
      setUsers(response.data.users) // Adjust this based on your API structure

    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setCurrentPage(1) // Reset to the first page on search
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

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
          <CCol sm={3} md={5} lg={5} xl={7}>
            <h2 style={styles.mainHeading}>All Users</h2>
            <p style={styles.secHeading}>Active Members</p>
          </CCol>

          <CCol sm={2} md={6} lg={6} xl={5}>
            <div className="d-flex justify-content-flex-end">
              <div className="me-2 d-flex justify-content-center align-items-center" style={{ borderRadius: 10, backgroundColor: 'rgba(249, 251, 255, 1)', padding: 10 }}>
                <LuPlus size={20} style={{ cursor: 'pointer' }} onClick={handleClick} />
              </div>
              <CFormInput
                placeholder="Search"
                value={search}
                onChange={handleSearch}
                className="me-2"
                style={{ width: isMobile ? '100px' : '250px', backgroundColor: 'rgba(249, 251, 255, 1)' }}
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
              <CTableRow key={user.id}>
                <CTableDataCell style={styles.title}>{user.name}</CTableDataCell>
                <CTableDataCell style={styles.title}>{user.company}</CTableDataCell>
                <CTableDataCell style={styles.title}>{user.phone}</CTableDataCell>
                <CTableDataCell style={styles.title}>{user.email}</CTableDataCell>
                <CTableDataCell style={styles.title}>{user.city}</CTableDataCell>
                <CTableDataCell>
                  {user.isActive ? (
                    <CBadge style={styles.status}>Active</CBadge>
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
                      Inactive
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
          pages={2} // Set this dynamically based on total pages from API
          onActivePageChange={setCurrentPage}
          className="pagination cursor-pointer"
          align={'end'}
        />
      </CCard>
    </CContainer>
  )
}

export default UserTable
