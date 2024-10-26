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
import BarChart from '../../../components/BarChart';
import Images from '../../../utils/Images';
import { Fonts } from '../../../utils/Fonts';
import Color from '../../../utils/Color';
import BPInterpretation from '../../../components/InterPretation';
import QuestionsChart from '../../../components/QuestionsChart';
import PieChart from '../../../components/PieChart';
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
  heading:{
    ...Fonts.Inter,
    fontSize: '20px',
    fontWeight:600,
    color:Color.primary
  },
  text:{
    ...Fonts.Inter,
    fontSize: '16px',
    fontWeight:500,
    color:Color.fontGray,
    paddingTop:20
    
  },
  title:{
    ...Fonts.Inter,
    fontSize: '16px',
    fontWeight:700,
    color:Color.black,
  }
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
// Data for BP interpretation (could be fetched from API)
const bpData = [
  {
    range: "140 mmHg or higher / 90 mmHg or higher",
    description: "Hypertension stage 2",
    percentage: "25%"
  },
  {
    range: "130-139 mmHg / 85-89 mmHg",
    description: "Hypertension stage 1",
    percentage: "25%"
  },
  {
    range: "120-129 mmHg / 80-84 mmHg",
    description: "Elevated blood pressure",
    percentage: "25%"
  },
  {
    range: "80-119 mmHg / 60-79 mmHg",
    description: "Normal blood pressure",
    percentage: "25%"
  },
  {
    range: "Less than 80 mmHg / less than 60 mmHg",
    description: "Low blood pressure",
    percentage: "25%"
  }
];

const healthConditionsData = {
  leftColumn: [
    { name: 'Rheumatoid Arthritis', percentage: '15%' },
    { name: 'Osteoarthritis', percentage: '15%' },
    { name: 'Gout', percentage: '20%' },
    { name: 'Anemia', percentage: '20%' },
    { name: 'Fibromyalgia', percentage: '20%' },
    { name: 'Metabolic Disorder', percentage: '20%' },
    { name: 'Thyroid Disease', percentage: '20%' },
    { name: 'Asthma', percentage: '20%' },
    { name: 'Osteoporosis', percentage: '20%' },
    { name: 'Urogenital Disease', percentage: '20%' },
  ],
  rightColumn: [
    { name: 'Diabetes', percentage: '15%' },
    { name: 'Hypertension (High BP)', percentage: '15%' },
    { name: 'High Cholesterol', percentage: '20%' },
    { name: 'Chronic Obstructive Pulmonary Disease (COPD) / Lung Disease', percentage: '20%' },
    { name: 'Cardiovascular Disease (Heart Disease)', percentage: '20%' },
    { name: 'Chronic Kidney Disease', percentage: '20%' },
  ],
};

const sevicesBenefitData = {
  leftColumn: [
    { name: 'Telemedicine', percentage: '15%' },
    { name: 'OPD', percentage: '15%' },
    { name: 'IPD', percentage: '20%' },
    { name: 'Pharmacy', percentage: '20%' },
    { name: 'Lab and Diagnostics', percentage: '20%' },
    { name: 'Homecare services', percentage: '20%' },
  ],
  rightColumn: [
    
    { name: 'Telemedicine', percentage: '15%' },
    { name: 'OPD', percentage: '15%' },
    { name: 'IPD', percentage: '20%' },
    { name: 'Pharmacy', percentage: '20%' },
    { name: 'Lab and Diagnostics', percentage: '20%' },
    { name: 'Homecare services', percentage: '20%' },
    { name: 'Diabetes', percentage: '15%' },
    { name: 'Hypertension (High BP)', percentage: '15%' },
    { name: 'High Cholesterol', percentage: '20%' },
    { name: 'Chronic Obstructive Pulmonary Disease (COPD) / Lung Disease', percentage: '20%' },
    { name: 'Pre-existing condition', percentage: '20%' },
    { name: 'Wellness program and preventive care', percentage: '20%' },

  ],
};

  return (
    <CContainer>
      <CRow className="my-4">
        <CCol md={8}>
          <h2>Reports</h2>
          {/* <p>Active Members</p> */}
        </CCol>
        {/* <CCol md={4} className="d-flex justify-content-end">
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
        </CCol> */}
      </CRow>

      {/* <CTable hover responsive>
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
      </CPagination> */}
      {/* <WidgetsDropdown /> */}
      {/* <CCard className="mb-4">
      <CCardHeader>Sessions By Company</CCardHeader>
      <CCardBody style={styles.cardBody}>
        <div style={styles.circularContainer}>
          Nested Circular Progress Bars
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
    </CCard> */}

    {/* <BarChart/> */}
    {/* <QuestionsChart data={healthConditionsData} name="Name"/> */}
    {/* <QuestionsChart data={sevicesBenefitData} name="sds"/> */}
    {/* <PieChart/> */}

    {/* <BPInterpretation data={bpData}/> */}
    <CCardBody
      style={{
        boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
        borderWidth: 0,
        borderRadius:10,
      }}
    >
    <>
      <CRow className="mb-4" style={{ backgroundColor: '#f1f0ff',display:"flex",justifyContent:'flex-end',alignItems:'center',paddingTop:10}}>
      <CCol lg={6} >
          <text style={styles.heading}>BMI RANGE</text>
        </CCol>
        <CCol lg={5}>
          <img src={Images.formula} style={{width:'30vw'}}/>
        </CCol>
      </CRow>

      {/* BMI Range Table */}
      <CRow className="text-center" >
        {/* Range Item */}
        <CCol xs={12} sm={2} className="mb-3">
          <text style={styles.title}>15%</text>
          <p style={styles.text}>
          
          <span >&lt;18.5 <br/> Below Normal Weight</span>
          </p>
        </CCol>
        <CCol xs={12} sm={2} className="mb-3">
          <h6 style={styles.title}>5%</h6>
          <p style={styles.text}>
          
          <span>&gt;=18.5 &amp; &lt;25<br/> Normal Weight</span>
          </p>

        </CCol>
        <CCol xs={12} sm={2} className="mb-3">
          <h6 style={styles.title}>20%</h6>
          <p style={styles.text}>
          <span>&gt;=25 &amp; &lt;30 <br/>Over Weight</span>
          </p>
        </CCol>
        <CCol xs={12} sm={2} className="mb-3">
          <h6 style={styles.title}>10%</h6>
          <p style={styles.text}>
          <span> &gt;=30 &amp; &lt;35 <br/> Class I Obesity</span>
          </p>
        </CCol>
        <CCol xs={12} sm={2} className="mb-3">
          <h6 style={styles.title}>30%</h6>
          <p style={styles.text}>
          <span>&gt;=35 &amp; &lt;40 <br/> Class II Obesity</span>
          </p>
        </CCol>
        <CCol xs={12} sm={2} className="mb-3">
          <h6 style={styles.title}>20%</h6>
          <p style={styles.text}>
          <span>&gt;=40 <br/> Class III Obesity</span>
          </p>
        </CCol>
      </CRow>
    </>
    </CCardBody>
    <CRow className="g-4" sm={12} md={6} lg={12} style={{ display: 'flex', alignItems: 'flex-end',flex:'wrap',justifyContent:'space-between',paddingTop:50 }}>
      <CCol xs={12} sm={6} md={6} lg={6}>
        <BarChart/>
      </CCol>
      <CCol xs={12} sm={6} md={6} lg={4}>
        <PieChart/>
      </CCol>
</CRow>
    </CContainer>
  );
};

export default UserTable;

// import React from 'react';
// import { CContainer, CRow, CCol } from '@coreui/react';

// // Data for BP interpretation (could be fetched from API)
// const bpData = [
//   {
//     range: "140 mmHg or higher / 90 mmHg or higher",
//     description: "Hypertension stage 2",
//     percentage: "25%"
//   },
//   {
//     range: "130-139 mmHg / 85-89 mmHg",
//     description: "Hypertension stage 1",
//     percentage: "25%"
//   },
//   {
//     range: "120-129 mmHg / 80-84 mmHg",
//     description: "Elevated blood pressure",
//     percentage: "25%"
//   },
//   {
//     range: "80-119 mmHg / 60-79 mmHg",
//     description: "Normal blood pressure",
//     percentage: "25%"
//   },
//   {
//     range: "Less than 80 mmHg / less than 60 mmHg",
//     description: "Low blood pressure",
//     percentage: "25%"
//   }
// ];

// const BPInterpretation = () => {
//   return (
//     <CContainer className="p-4" style={{ maxWidth: '400px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
//       {/* Heading */}
//       <h5 style={{ color: '#007bff', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>BP Interpretation</h5>
      
//       {/* Loop through bpData to render each row */}
//       {bpData.map((item, index) => (
//         <CRow key={index} className="mb-3">
//           <CCol xs={9} style={{ fontSize: '14px' }}>
//             <div>{item.range}</div>
//             <div style={{ fontSize: '12px', color: 'gray' }}>{item.description}</div>
//           </CCol>
//           <CCol xs={3} className="text-end" style={{ fontSize: '14px', fontWeight: 'bold' }}>
//             {item.percentage}
//           </CCol>
//         </CRow>
//       ))}
//     </CContainer>
//   );
// };

// export default BPInterpretation;
