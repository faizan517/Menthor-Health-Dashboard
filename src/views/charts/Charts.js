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
import UserStatsCard from '../../components/Search';
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

  const dummyUsers = [
    { id: 1, name: 'John Doe', company: 'Company A', phone: '123-456-7890', email: 'john@example.com', city: 'New York', isActive: true },
    { id: 2, name: 'Jane Smith', company: 'Company B', phone: '987-654-3210', email: 'jane@example.com', city: 'Los Angeles', isActive: false },
    { id: 3, name: 'Michael Johnson', company: 'Company C', phone: '456-789-1230', email: 'michael@example.com', city: 'Chicago', isActive: true },
    { id: 4, name: 'Emily Davis', company: 'Company D', phone: '321-654-9870', email: 'emily@example.com', city: 'Houston', isActive: true },
    { id: 5, name: 'William Brown', company: 'Company E', phone: '654-321-0987', email: 'william@example.com', city: 'Phoenix', isActive: false },
    { id: 6, name: 'Olivia Jones', company: 'Company F', phone: '789-123-4567', email: 'olivia@example.com', city: 'Philadelphia', isActive: true },
    { id: 7, name: 'James Garcia', company: 'Company G', phone: '234-567-8901', email: 'james@example.com', city: 'San Antonio', isActive: false },
    { id: 8, name: 'Sophia Martinez', company: 'Company H', phone: '890-123-4567', email: 'sophia@example.com', city: 'San Diego', isActive: true },
    { id: 9, name: 'David Rodriguez', company: 'Company I', phone: '567-890-1234', email: 'david@example.com', city: 'Dallas', isActive: true },
    { id: 10, name: 'Ava Hernandez', company: 'Company J', phone: '901-234-5678', email: 'ava@example.com', city: 'San Jose', isActive: false },
    // Add more dummy users if needed
  ];

  useEffect(() => {
    fetchUsers();
  }, [sortBy, currentPage]);

  const fetchUsers = () => {
    // Filter and sort users based on search and sortBy
    let filteredUsers = dummyUsers.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.company.toLowerCase().includes(search.toLowerCase())
    );

    // Sort by newest or oldest
    filteredUsers = sortBy === 'newest'
      ? filteredUsers.sort((a, b) => b.id - a.id)
      : filteredUsers.sort((a, b) => a.id - b.id);

    // Paginate
    const startIndex = (currentPage - 1) * usersPerPage;
    const paginatedUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage);

    setUsers(paginatedUsers);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to the first page on search
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
    <CContainer fluid>
      <UserStatsCard/>

      <CRow className="my-4">
        <CCol md={8}>
          <h2>All Users</h2>
          <p>Active Members</p>
        </CCol>
        <CCol md={4} className="d-flex justify-content-flex-end" style={{height:'40px',borderRadius:10}}>
          <CFormInput
            placeholder="Search"
            value={search}
            onChange={handleSearch}
            className="me-2"
          />
          <CFormSelect value={sortBy} onChange={handleSortChange} >
            <option value="newest">Sort by: Newest</option>
            <option value="oldest">Sort by: Oldest</option>
          </CFormSelect>
        </CCol>
      </CRow>

      <CTable style={{borderRadius:10}} responsive bordered hover>
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
              <CTableDataCell style={{textAlign:'center',padding:'10 0 10px'}}>
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
    </CContainer>
  );
};

export default UserTable;

    //   <CCard className="mb-4">
    //   <CCardHeader>Sessions By Company</CCardHeader>
    //   <CCardBody style={styles.cardBody}>
    //     <div style={styles.circularContainer}>
    //       {/* Nested Circular Progress Bars */}
    //       <div style={{ position: 'relative', height: '150px', width: '150px' }}>
    //         {options.map((option, index) => (
    //           <div
    //             key={index}
    //             style={{
    //               position: 'absolute',
    //               top: 0,
    //               left: 0,
    //               width: '100%',
    //               height: '100%',
    //               transform: `scale(${1 - index * 0.2})`,
    //             }}
    //           >
    //             <CircularProgressbar
    //               value={option.value}
    //               styles={buildStyles({
    //                 pathColor: option.color,
    //                 trailColor: '#edf0f5',
    //               })}
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     <ul style={styles.optionsList}>
    //       {options.map((option, index) => (
    //         <li key={index} style={styles.optionItem}>
    //           {option.label}
    //           <div style={styles.optionValue}>
    //             8,085 <span style={styles.percentage}>{option.value}%</span>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </CCardBody>
    // </CCard>