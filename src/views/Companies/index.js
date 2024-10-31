import React, { useState, useEffect } from 'react';
import { CCard } from '@coreui/react';
// import 'react-circular-progressbar/dist/styles.css';
import { useMediaQuery } from 'react-responsive';
import { CSmartPagination } from '@coreui/react-pro';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css'
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
} from '@coreui/react';
import UserStatsCard from '../../components/UserStatsCard';
import { LuPlus } from 'react-icons/lu';
import { Fonts } from '../../utils/Fonts';

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
const Companies = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Store the total pages from the API
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const usersPerPage = 8;
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [data,setData] = useState([])
  // Replace with your token
  const token = localStorage.getItem('token');

  const handleClick = () => {
    navigate("/companyCreation");

  };
  const Details = ()=>{
    navigate("/companiesDetails");
  }

  useEffect(() => {
    fetchUsers(); // Fetch users on component mount and when sorting or page changes
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:5000/api/companies', {
        params: {
          page: currentPage,
          limit: usersPerPage,
          sort: sortBy,
        },
        headers: {
          Authorization: `Bearer ${token}`, // Include the Bearer token here
        },
      });
      console.log('API Response:', response.data); // Log the entire response
      setData(response.data);
      // if (response.data && response.data.users) {
      //   setUsers(response.data.users);
      //   setTotalPages(response.data.totalPages || 1); // Assuming API provides total pages
      // } else {
      //   throw new Error('Invalid response structure');
      // }
    } catch (error) {
      console.error('Error fetching users:', error.response ? error.response.data : error.message);
      setError('Failed to fetch users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

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

        {loading ? (
          <p>Loading users...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <CTable responsive hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell style={styles.heading}>Company</CTableHeaderCell>
                <CTableHeaderCell style={styles.heading}>Category</CTableHeaderCell>
                <CTableHeaderCell style={styles.heading}>Phone Number</CTableHeaderCell>
                <CTableHeaderCell style={styles.heading}>Email</CTableHeaderCell>
                <CTableHeaderCell style={styles.heading}>City</CTableHeaderCell>
                {/* <CTableHeaderCell style={styles.heading}>Status</CTableHeaderCell> */}
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {data.map((user) => (
                <CTableRow key={user.id} onClick={Details}>
                  <CTableDataCell style={styles.title}>{user.name}</CTableDataCell>
                  <CTableDataCell style={styles.title}>{user.category}</CTableDataCell>
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
        )}

<CSmartPagination
      size="sm"
      activePage={currentPage}
      pages={totalPages} // Dynamically set total pages
      onActivePageChange={setCurrentPage}
      className="custom-pagination"
      align="center" // Adjust alignment as needed
    />
      </CCard>
    </CContainer>
  );
};

export default Companies
