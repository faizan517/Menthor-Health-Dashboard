import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader } from '@coreui/react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
  CPagination,
  CContainer,
  CRow,
  CCol,
  CFormSelect,
  CPaginationItem,
} from '@coreui/react';
// import WidgetsDropdown from '../../widgets/WidgetsDropdown';

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
};

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  useEffect(() => {
    fetchUsers();
  }, [sortBy, currentPage]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users', {
        params: {
          search,
          sortBy,
          page: currentPage,
          perPage: usersPerPage,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    fetchUsers();
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const options = [
    { label: 'Option 1', value: 13, color: '#007bff' },
    { label: 'Option 2', value: 30, color: '#dc3545' },
    { label: 'Option 3', value: 25, color: '#28a745' },
  ];

  return (
    <CContainer>
      <CRow className="my-4">
        <CCol md={8}>
          <h2>All Users</h2>
          <p>Active Members</p>
        </CCol>
        <CCol md={4} className="d-flex justify-content-end">
          <CFormInput
            placeholder="Search"
            value={search}
            onChange={handleSearch}
            className="me-2"
          />
          <CFormSelect value={sortBy} onChange={handleSortChange}>
            <option value="newest">Sort by: Newest</option>
            <option value="oldest">Sort by: Oldest</option>
          </CFormSelect>
        </CCol>
      </CRow>

      <CTable hover responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>User Name</CTableHeaderCell>
            <CTableHeaderCell>Company</CTableHeaderCell>
            <CTableHeaderCell>Phone Number</CTableHeaderCell>
            <CTableHeaderCell>Email</CTableHeaderCell>
            <CTableHeaderCell>City</CTableHeaderCell>
            <CTableHeaderCell>Status</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {users.map((user) => (
            <CTableRow key={user.id}>
              <CTableDataCell>{user.name}</CTableDataCell>
              <CTableDataCell>{user.company}</CTableDataCell>
              <CTableDataCell>{user.phone}</CTableDataCell>
              <CTableDataCell>{user.email}</CTableDataCell>
              <CTableDataCell>{user.city}</CTableDataCell>
              <CTableDataCell>
                {user.isActive ? (
                  <CBadge color="success">Active</CBadge>
                ) : (
                  <CBadge color="danger">Inactive</CBadge>
                )}
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>

      <CPagination className="justify-content-center">
        <CPaginationItem
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </CPaginationItem>
        <CPaginationItem>{currentPage}</CPaginationItem>
        <CPaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </CPaginationItem>
      </CPagination>
      {/* <WidgetsDropdown /> */}
      <CCard className="mb-4">
      <CCardHeader>Sessions By Company</CCardHeader>
      <CCardBody style={styles.cardBody}>
        <div style={styles.circularContainer}>
          {/* Nested Circular Progress Bars */}
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
                  transform: `scale(${1 - index * 0.2})`,
                }}
              >
                <CircularProgressbar
                  value={option.value}
                  styles={buildStyles({
                    pathColor: option.color,
                    trailColor: '#edf0f5',
                  })}
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
      </CCardBody>
    </CCard>
    </CContainer>
  );
};

export default UserTable;

// import React from 'react';
// import { CCard, CCardBody, CCardHeader } from '@coreui/react';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// const CustomCircularProgress = () => {
 

  

//   return (
    
//   );
// };

// export default CustomCircularProgress;
