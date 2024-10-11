import { CCol, CRow } from '@coreui/react';
import React from 'react';
import { FaSearch, FaBell, FaInfoCircle } from 'react-icons/fa';
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <CRow lg={12} md={6} sm={3} style={{...styles.searchContainer,backgroundColor:'white',boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',padding: '5px 10px', }}>
      <CCol  style={styles.searchContainer}>
      <FaSearch style={styles.icon} />
      <input type="text" placeholder="Search" style={styles.input} />
      </CCol>
      <CCol >
      <IoIosNotificationsOutline style={styles.icon} size={25} />
      <IoInformationCircleOutline style={styles.icon} size={25} />
      </CCol>
    </CRow>
  );
};

const styles = {
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f4f4f8', // Light background color
    borderRadius: '40px', // Rounded corners
    padding: '0px 5px',
    // boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Soft shadow
    maxWidth: '500px',
    margin: 'auto',
  },
  input: {
    border: 'none',
    outline: 'none',
    padding: '10px',
    flex: 1,
    backgroundColor: 'transparent',
    fontSize: '16px',
    marginLeft: '10px',
    marginRight: 'auto', // Adjust space between icons and input
  },
  icon: {
    color: '#b0b0b5',
    fontSize: '15px',
    marginLeft: '10px',
  },
};

export default SearchBar;
