import { CButton, CCol, CContainer, CForm, CFormFeedback, CFormInput, CFormLabel, CFormSelect, CRow } from '@coreui/react'
import React, { useState,useRef } from 'react'
import '../Quiz/style.css'
// import Info from '../PersonalInfo'
import './style.css'
import { useForm } from 'react-hook-form'
// import { MdKeyboardDoubleArrowRight ,MdKeyboardDoubleArrowLeft} from "react-icons/md";
import { useMediaQuery } from 'react-responsive'
import { Tab, Tabs } from 'react-tabs-scrollable'
import "react-tabs-scrollable/dist/rts.css";
import Color from '../../utils/Color'


const styles = {
  heading: { 
    padding: 10, 
    fontFamily: 'Inter', 
    fontWeight: 400, 
    fontSize: 14, 
    marginBottom: 20
   },
  answerFont: { 
    padding: 10,
     fontFamily: 'Inter', 
     fontWeight: 400,
     fontSize: 14, 
     marginBottom: 20,
    },
  answerText: {
    padding: 10,
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 20,
    maxWidth: '600px',
    width: '632px',
    borderRadius: 5,
  },
  answerCheck: { 
    padding: 10,
     fontFamily: 'Inter', 
     fontWeight: 400,
     fontSize: 14, 
     marginBottom: 20 
    },
    tabs: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '30px',
      borderTop: '2px solid #ddd',
      paddingTop:30,
    },
    // tab: {
    //   // padding: '10px',
    //   // width:'200px',
    //   cursor: 'pointer',
    //   backgroundColor: '#f0f0f0',
    //   color: '#333',
    //   borderBottomRightRadius:10,
    //   borderBottomLeftRadius:10,
    //   textAlign:'center'
  
    // },
    // activeTab: {
    //   backgroundColor: '#006eff',
    //   color: 'white',
    //   // fontFamily: 'Inter',
    //   fontWeight: 700,
    // },
    mainHead: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: '35px',
      textAlign: 'justify',
      lineHeight:1.3
    },
    tabHead:{
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: '20px',
      textAlign: 'justify',
    },
    tabsWrapper: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      marginTop: '30px',
      borderTop: '2px solid #ddd',
      paddingTop:30,
    },
    arrowButton: {
      cursor: 'pointer',
      padding: '10px',
      zIndex: 1,
    },
    tabsContainer: {
      display: 'flex',
      overflowX: 'hidden', // Hide overflowing tabs
      // whiteSpace: 'nowrap',
      scrollBehavior: 'smooth',
      width: `${5 * 200}px`, // Visible width for 5 tabs
    },
    tab: {
      // flexShrink: 0,
      // width: `${tabWidth}px`,
      // padding: '5px 5px',
      cursor: 'pointer',
      backgroundColor: '#f0f0f0',
      borderBottomRightRadius: '10px',
      borderBottomLeftRadius: '10px',
      // margin: '0 5px',
      textAlign: 'center',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    activeTab: {
      backgroundColor: '#007bff',
      color: '#fff',
    },
}

const formStructure = [
  {
    subheading: 'Personal Information', // First tab heading
    questions: [
      {
        questionType: 'info',
      },
    ],
  },
  {
    subheading: 'Personal Health Habits',
    questions: [
      {
        id: 1,
        questionText:
          '1. How frequently do you see your physician for routine checkups and health risk prevention?',

        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Never', marks: 0 },
          { answer: 'Only when needed', marks: 1 },
          { answer: 'Once in 3 years', marks: 2 },
          { answer: 'Once a year', marks: 3 },
          { answer: 'Twice a year', marks: 4 },
        ],
      },
      {
        id: 2,
        questionText: '2. How often do you engage in physical exercise?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Daily', marks: 4 },
          { answer: '3-5 times a week', marks: 3 },
          { answer: '1-2 times a week', marks: 2 },
          { answer: 'Rarely', marks: 1 },
          { answer: 'Never', marks: 0 },
        ],
      },
      {
        id: 3,
        questionText: '3. How long is your average workout session?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Less than 15 min', marks: 1 },
          { answer: '15-30 Min', marks: 2 },
          { answer: '31-45 Min', marks: 3 },
          { answer: '45-60 Min', marks: 4 },
          { answer: 'More than 60 Min', marks: 5 },
        ],
      },
      {
        id: 4,
        questionText: '4. What is the intensity of your average workout session?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Light', marks: 1 },
          { answer: 'Moderate', marks: 2 },
          { answer: 'Vigorous', marks: 3 },
          { answer: 'Very Vigorous', marks: 4 },
          { answer: 'Extreme', marks: 5 },
        ],
      },
      {
        id: 5,
        questionText: '5. Do you smoke cigarettes, vape, or cigars?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Yes', marks: 0 },
          { answer: 'No', marks: 5 },
        ],
      },
      {
        id: 6,
        questionText: '6. How many times per day do you smoke cigarettes, vape, or cigars?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'More than 10 times', marks: 1 },
          { answer: '8-10 times', marks: 2 },
          { answer: '6-7 times', marks: 3 },
          { answer: '3-5 times', marks: 4 },
          { answer: '1-2 times', marks: 5 },
        ],
      },
      {
        id: 7,
        questionText: '7. Do you use tobacco, paan, chaliya (betel nut), or gutka?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Yes', marks: 0 },
          { answer: 'No', marks: 5 },
        ],
      },
      {
        id: 8,
        questionText:
          '8. How many times per day do you use tobacco, paan, chaliya (betel nut), or gutka?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'More than 10 times', marks: 1 },
          { answer: '8-10 times', marks: 2 },
          { answer: '6-7 times', marks: 3 },
          { answer: '3-5 times', marks: 4 },
          { answer: '1-2 times', marks: 5 },
        ],
      },
      {
        id: 9,
        questionText: '9. Do you consume alcohol?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Yes', marks: 0 },
          { answer: 'No', marks: 5 },
        ],
      },
      {
        id: 10,
        questionText: '10. How many pegs of alcohol do you consume per week?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'More than 7 pegs', marks: 1 },
          { answer: '6-7 pegs', marks: 2 },
          { answer: '4-5 pegs', marks: 3 },
          { answer: '2-3 pegs', marks: 4 },
          { answer: '1-2 pegs', marks: 5 },
        ],
      },
    ],
  },
  {
    subheading: 'Personal Medical History',
    questions: [
      {
        id: 11,
        questionText:
          '1. In general, how would you rate your health compared to other people of your age?',
        questionType: 'mcq',
        options: [
          { answer: 'Poor', marks: 5 },
          { answer: 'Fair', marks: 4 },
          { answer: 'Good', marks: 3 },
          { answer: 'Very Good', marks: 2 },
          { answer: 'Excellent', marks: 1 },
        ],
      },
      {
        id: 12,
        questionText: '2. Compared to one year ago, how would you rate your health today?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Much worse now than a year ago', marks: 5 },
          { answer: 'Somewhat worse now than a year ago', marks: 4 },
          { answer: 'About the same as a year ago', marks: 2 },
          { answer: 'Somewhat better now than a year ago', marks: 1 },
          { answer: 'Much better now than a year ago', marks: 0 },
        ],
      },
      {
        id: 13,
        questionText: '3. Do you have any of the following chronic diseases?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Diabetes', marks: 5 },
          { answer: 'Cardiovascular Disease', marks: 5 },
          { answer: 'Hypertension (High BP)', marks: 5 },
          { answer: 'High Cholesterol', marks: 5 },
          { answer: 'None', marks: 0 },
        ],
      },
      {
        id: 14,
        questionText:
          '4. If Yes, please specify the name of the disease, when it occurred, and the treatment received.',
        questionType: 'text',
        marks: 3,
      },
      {
        id: 15,
        questionText:
          '5. Do you have any of the following conditions or diseases? (Select all that apply)',
        questionType: 'multicheck', // mcq, text, multicheck
        options: [
          { answer: 'Rheumatoid Arthritis', marks: 3 },
          { answer: 'Osteoarthritis', marks: 3 },
          { answer: 'Gout', marks: 3 },
          { answer: 'Anemia', marks: 3 },
          { answer: 'Fibromyalgia', marks: 3 },
          { answer: 'Thyroid Disease', marks: 3 },
          { answer: 'None', marks: 0 },
        ],
      },
      {
        id: 16,
        questionText:
          '6. If Yes, please specify the Name of Disease, when diagnosed, and treatment',
        questionType: 'text',
        marks: 3,
      },
      {
        id: 17,
        questionText: '7.  Have you ever had any of the following events in the past?',
        questionType: 'multicheck', // mcq, text, multicheck
        options: [
          { answer: 'Heart failure', marks: 5 },
          { answer: 'Myocardial Infarction', marks: 5 },
          { answer: 'Hepatitis B or C', marks: 5 },
          { answer: 'Tuberculosis', marks: 5 },
          { answer: 'Stroke / Paralysis', marks: 5 },
          { answer: 'Liver Disease', marks: 5 },
          { answer: 'Kidney Disease', marks: 5 },
          { text: 'Cancer', marks: 5 },
          { text: 'None', marks: 5 },
        ],
      },
      {
        id: 18,
        questionText: '8. If yes, when it occurred, and the treatment received',
        questionType: 'text', // mcq, text, multicheck
        marks: 3,
      },
      {
        id: 19,
        questionText:
          '9. Have you been hospitalized in the past five years due to serious illness or major surgery?',
        questionType: 'mcq',
        options: [
          { answer: 'Yes', marks: 5 },
          { answer: 'No', marks: 1 },
        ],
      },
      {
        id: 20,
        questionText:
          '10. if yes, please specify the reason of hospitalization, duration of stay, and treatment received,',
        questionType: 'text', // mcq, text, multicheck
        marks: 3,
      },
      {
        id: 21,
        questionText: '11. Are you currently taking any prescription medication?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Yes', marks: 5 },
          { answer: 'No', marks: 1 },
        ],
      },
      {
        id: 22,
        questionText:
          '12. Please Mention themedicine you are taking on a regular basis and their dosage.',
        questionType: 'mcq',
        options: [
          { answer: 'More than 6', marks: 5 },
          { answer: '5-6', marks: 4 },
          { answer: '4-5', marks: 3 },
          { answer: '2-3', marks: 2 },
          { answer: '1-2', marks: 1 },
        ],
      },
      {
        id: 23,
        questionText: '13. How many prescription medications are you currently taking per day?',
        questionType: 'text', // mcq, text, multicheck
        marks: 3,
      },
      {
        id: 24,
        questionText: '14. What is your most recent blood pressure reading? (Systolic/Diastolic)',
        questionType: 'mcq',
        options: [
          { answer: 'Rheumatoid Arthritis', marks: 3 },
          { answer: 'Osteoarthritis', marks: 3 },
          { answer: 'Gout', marks: 3 },
          { answer: 'Anemia', marks: 3 },
          { answer: 'Fibromyalgia', marks: 3 },
          { answer: 'Thyroid Disease', marks: 3 },
          { answer: 'None', marks: 0 },
        ],
      },
      {
        id: 25,
        questionText: '15. What is your most recent fasting blood glucose level?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: '150 mg/dL or higher', marks: 5 },
          { answer: '126-149 mg/dL', marks: 4 },
          { answer: '100-125 mg / dl', marks: 3 },
          { answer: '70-99 mg / dl', marks: 2 },
          { answer: 'Less than 70 mg / dl ', marks: 1 },
          { answer: 'i dont know', marks: 3 },
        ],
      },
      {
        id: 26,
        questionText: '16. What is your most recent cholesterol profile? (LDL/HDL) ratio',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Greater than 3', marks: 5 },
          { answer: '2.5-3', marks: 4 },
          { answer: '2-2.5', marks: 3 },
          { answer: '1.5-2', marks: 2 },
          { answer: 'Less than 1.5', marks: 1 },
          { answer: 'i dont know', marks: 3 },
        ],
      },
      {
        id: 27,
        questionText:
          '17. Do any of your immediate family members have a history of any of the following conditions?',
        questionType: 'multicheck',
        options: [
          { answer: 'Heart Disease', marks: 2 },
          { answer: 'High blood pressure', marks: 2 },
          { answer: 'Diabetes', marks: 2 },
          { answer: 'High Cholesterol ', marks: 2 },
          { answer: 'Thyroid Disease', marks: 2 },
          { answer: 'Stroke', marks: 2 },
          { answer: 'Cancer', marks: 2 },
          { answer: 'Genetic Disorder', marks: 2 },
          { answer: 'None', marks: 0 },
        ],
      },
      {
        id: 28,
        questionText:
          '18. If Yes, please specify the Name of Disease, when diagnosed, and treatment and you relationship with them',
        questionType: 'text', // mcq, text, multicheck
        marks: 3,
      },
    ],
  },
  {
    subheading: 'Women Health',
    questions: [
      {
        id: 29,
        questionText: '1. How often do you visit a gynecologist for check-ups?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Never', marks: 5 },
          { answer: 'Only when needed', marks: 4 },
          { answer: 'Once in 3 years', marks: 3 },
          { answer: 'Once a years', marks: 2 },
          { answer: 'Twice a year', marks: 1 },
        ],
      },
      {
        id: 30,
        questionText: '2. Do you have a history of any of the following gynecological conditions?',
        questionType: 'multicheck', // mcq, text, multicheck
        options: [
          { answer: 'Polycystic Ovarian Syndrome (PCOS)', marks: 3 },
          { answer: 'Endometriosis', marks: 3 },
          { answer: 'Uterine Fibroids', marks: 3 },
          { answer: 'Ovarian cysts', marks: 3 },
          { answer: 'Menstrual Irregularities', marks: 3 },
          { answer: 'None', marks: 0 },
        ],
      },
      {
        id: 31,
        questionText:
          '3. Are you currently receiving treatment for any of the above conditions? please specify the treatment',
        questionType: 'text', // mcq, text, multicheck
        marks: 3,
      },
      {
        id: 32,
        questionText: '4. Are you currently pregnant or planning to become pregnant?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Yes', marks: 3 },
          { answer: 'No', marks: 1 },
        ],
      },
    ],
  },
  {
    subheading: 'Lifestyle and Diet',
    questions: [
      {
        id: 33,
        questionText: '1. How often do you consume processed or fast food?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Daily', marks: 5 },
          { answer: '3-4 times a week', marks: 4 },
          { answer: '1-2 times a week', marks: 3 },
          { answer: '1-2 times per month', marks: 2 },
          { answer: 'Never', marks: 1 },
        ],
      },
      {
        id: 34,
        questionText: '2. How often do you consume sugary beverages (e.g., soda, fruit juice)?',

        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Daily', marks: 5 },
          { answer: '3-4 times a week', marks: 4 },
          { answer: '1-2 times a week', marks: 3 },
          { answer: '1-2 times per month', marks: 2 },
          { answer: 'Never', marks: 1 },
          // { answer: 'None', marks: 0 },
        ],
      },
      {
        id: 35,
        questionText: '3. How often do you eat meals prepared at home?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Daily', marks: 5 },
          { answer: '3-4 times a week', marks: 4 },
          { answer: '1-2 times a week', marks: 3 },
          { answer: '5-6 times per month', marks: 2 },
          { answer: 'Never', marks: 1 },
        ],
      },
      {
        id: 36,
        questionText: '4. Do you follow any specific diet or eating plan?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Yes', marks: 3 },
          { answer: 'No', marks: 1 },
        ],
      },
      {
        id: 37,
        questionText: '5. How often do you consume fruits and vegetables?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Daily', marks: 1 },
          { answer: 'Several times a week', marks: 2 },
          { answer: 'Once a week', marks: 3 },
          { answer: 'Rarely', marks: 4 },
          { answer: 'Never', marks: 5 },
        ],
      },
      {
        id: 38,
        questionText: '6. How much water do you drink daily?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Less than 2 glasses', marks: 5 },
          { answer: '2-4 glasses', marks: 4 },
          { answer: '4-6 glasses', marks: 3 },
          { answer: '6-8 glasses', marks: 2 },
          { answer: 'More than 8 glasses', marks: 1 },
          // { answer: 'None', marks: 0 },
        ],
      },
      {
        id: 39,
        questionText: '7. Do you take any dietary supplements?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Yes', marks: 2 },
          { answer: 'No', marks: 3 },
        ],
      },
    ],
  },
  {
    subheading: 'Mental And Emotional Health Risk',
    questions: [
      {
        id: 40,
        questionText: '1. How often do you feel stressed or overwhelmed?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Always', marks: 5 },
          { answer: 'Often', marks: 4 },
          { answer: 'Sometimes', marks: 3 },
          { answer: 'Rarely', marks: 2 },
          { answer: 'Never', marks: 1 },
        ],
      },
      {
        id: 41,
        questionText: '2. How would you rate your overall mood in the past month?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Poor', marks: 5 },
          { answer: 'Fair', marks: 4 },
          { answer: 'Good', marks: 3 },
          { answer: 'Very Good', marks: 2 },
          { answer: 'Execellent', marks: 1 },
        ],
      },
      {
        id: 42,
        questionText: '3. How often do you experience difficulty concentrating or focusing?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Always', marks: 5 },
          { answer: 'Often', marks: 4 },
          { answer: 'Sometimes', marks: 3 },
          { answer: 'Rarely', marks: 2 },
          { answer: 'Never', marks: 1 },
          // { answer: 'None', marks: 0 },
        ],
      },
      {
        id: 43,
        questionText: '4. How often do you feel a loss of interest in daily activities?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Always', marks: 5 },
          { answer: 'Often', marks: 4 },
          { answer: 'Sometimes', marks: 3 },
          { answer: 'Rarely', marks: 2 },
          { answer: 'Never', marks: 1 },
        ],
      },
      {
        id: 44,
        questionText:
          '5. Do you have a support system (e.g., friends, family) that you can turn to for help or advice?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Yes', marks: 5 },
          { answer: 'No', marks: 1 },
        ],
      },
      {
        id: 45,
        questionText:
          '6. How often do you engage in activities that help you relax or de-stress (e.g., exercise, hobbies, meditation)?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Daily', marks: 1 },
          { answer: 'Several times a week', marks: 2 },
          { answer: 'Once a week', marks: 3 },
          { answer: 'Rarely', marks: 4 },
          { answer: 'Never', marks: 5 },
        ],
      },
      {
        id: 46,
        questionText:
          '7. Have you ever sought professional help for mental health issues (e.g., counseling, therapy)?',

        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Yes', marks: 2 },
          { answer: 'No', marks: 3 },
        ],
      },
      {
        id: 47,
        questionText: '8. On average, how many hours of sleep do you get per night?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Less than 4 hours', marks: 1 },
          { answer: '4-5 hours', marks: 2 },
          { answer: '6-7 hours', marks: 3 },
          { answer: '8-9 hours', marks: 4 },
          { answer: 'More than 9 hours', marks: 5 },
        ],
      },
    ],
  },
  {
    subheading: 'Occupational Health Risk',
    questions: [
      {
        id: 48,
        questionText:
          '1. How often do you experience physical discomfort or pain due to your work?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Always', marks: 5 },
          { answer: 'Often', marks: 4 },
          { answer: 'Sometimes', marks: 3 },
          { answer: 'Rarely', marks: 2 },
          { answer: 'Never', marks: 1 },
        ],
      },
      {
        id: 49,
        questionText: '2. Do you have any of the following work-related health issues?',
        questionType: 'multicheck', // mcq, text, multicheck
        options: [
          { answer: 'Chronic Back or Neck Pain', marks: 5 },
          { answer: 'Eye Strain or Dry Eye', marks: 4 },
          { answer: 'Repetitive Stress Injury', marks: 3 },
          { answer: 'Respiratory Disease', marks: 2 },
          { answer: 'Stress / Burn Ou', marks: 1 },
          { answer: 'None', marks: 0 },
        ],
      },
      {
        id: 50,
        questionText:
          '3. If yes, how long have you had this problem, and have you received any treatment for it?',
        questionType: 'Text', // mcq, text, multicheck
        marks: 3,
      },
      {
        id: 51,
        questionText:
          '4. Do you use ergonomic equipment (e.g., adjustable chair, keyboard, monitor) to support your physical health at work?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Yes', marks: 1 },
          { answer: 'No', marks: 5 },
        ],
      },
      {
        id: 52,
        questionText: '5. How often do you take breaks during your workday?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Every 2 hours', marks: 5 },
          { answer: 'Every 3-4 hours', marks: 4 },
          { answer: 'Every 5-6 hours', marks: 3 },
          { answer: 'Rarely', marks: 2 },
          { answer: 'Never', marks: 1 },
        ],
      },
      {
        id: 53,
        questionText:
          '6. Do you feel that your work environment is safe and conducive to your well-being?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Yes', marks: 1 },
          { answer: 'No', marks: 5 },
        ],
      },
      {
        id: 54,
        questionText: '7. Have you received any training on workplace safety and health?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Yes', marks: 1 },
          { answer: 'No', marks: 5 },
        ],
      },
      {
        id: 55,
        questionText:
          '8. Do you have access to health and wellness programs at work (e.g., fitness programs, mental health resources)?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Yes', marks: 1 },
          { answer: 'No', marks: 5 },
        ],
      },
      {
        id: 56,
        questionText:
          '9. How often do you feel that work-related factors impact your overall health?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Always', marks: 5 },
          { answer: 'Often', marks: 4 },
          { answer: 'Sometimes', marks: 3 },
          { answer: 'Rarely', marks: 2 },
          { answer: 'Never', marks: 1 },
        ],
      },
    ],
  },
  {
    subheading: 'Health Benefits & Expenditure',
    questions: [
      {
        id: 57,
        questionText:
          'Do you feel that the health benefits provided by the company adequately meet your needs?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Yes', marks: 1 },
          { answer: 'No', marks: 5 },
        ],
      },
      {
        id: 58,
        questionText:
          'What type of health services that are covered by your benefits do you frequently use?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Telemedicine', marks: 5 },
          { answer: 'OPD', marks: 4 },
          { answer: 'IPD', marks: 3 },
          { answer: 'Pharmacy', marks: 2 },
          { answer: 'Lab and Diagnostics', marks: 1 },
          { answer: 'Homecare services', marks: 1 },
        ],
      },
      {
        id: 59,
        questionText:
          'What specific services would you like to see covered in your health benefits?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Telemedicine', marks: 5 },
          { answer: 'OPD', marks: 4 },
          { answer: 'IPD', marks: 3 },
          { answer: 'Pharmacy', marks: 2 },
          { answer: 'Lab and Diagnostics', marks: 1 },
          { answer: 'Homecare ', marks: 1 },
          { answer: 'Maternity', marks: 5 },
          { answer: 'Dental procedure', marks: 4 },
          { answer: 'Pre-existing condition', marks: 3 },
          { answer: 'Wellness program and preventive care', marks: 2 },
        ],
      },
      {
        id: 60,
        questionText:
          'What is your average monthly expense for hospital or outpatient department (OPD) services?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'More than PKR 6000', marks: 5 },
          { answer: 'PKR 5000 - PKR 6000', marks: 4 },
          { answer: 'PKR 3000 - PKR 4000', marks: 3 },
          { answer: 'PKR 1000 - PKR 2000', marks: 2 },
          { answer: 'Less than PKR 1000', marks: 1 },
        ],
      },
      {
        id: 61,
        questionText:
          '5. What is your average monthly expense for laboratory tests and diagnostics?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'More than PKR 10000', marks: 5 },
          { answer: 'PKR 6000 - PKR 10000', marks: 4 },
          { answer: 'PKR 4000 - PKR 5000', marks: 3 },
          { answer: 'PKR 2000 - PKR 3000', marks: 2 },
          { answer: 'Less than PKR 2000', marks: 1 },
        ],
      },
      {
        id: 62,
        questionText: '6. What is your average monthly expense for pharmacy or medication costs?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'More than PKR 15000', marks: 5 },
          { answer: 'PKR 12000 - PKR 15000', marks: 4 },
          { answer: 'PKR 8000 - PKR 11000', marks: 3 },
          { answer: 'PKR 5000 - PKR 8000', marks: 2 },
          { answer: 'Less than PKR 5000', marks: 1 },
        ],
      },
      {
        id: 63,
        questionText:
          '7. Would you like us to deliver your monthly medication to you in a timely manner?',

        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Yes', marks: 2 },
          { answer: 'No', marks: 3 },
        ],
      },
      {
        id: 64,
        questionText:
          '8. Would you like health insurance coverage for your family members that is not included in your current health benefit plan?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Yes', marks: 2 },
          { answer: 'No', marks: 3 },
        ],
      },
      {
        id: 65,
        questionText:
          '9. What is your relationship to the family members you would like to include in health insurance coverage?',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          { answer: 'Spouse', marks: 2 },
          { answer: 'Spouse', marks: 3 },
          { answer: 'Children', marks: 2 },
          { answer: 'Siblings', marks: 3 },
          { answer: 'Others', marks: 2 },
        ],
      },
      {
        id: 66,
        questionText: '',
        questionType: 'mcq', // mcq, text, multicheck
        options: [
          {
            answer:
              'Thank you for submitting this form, please tick mark to accept that the summary of this data will be shared with your employer. This form is intended solely to measure your health risk. The results of this form will allow your employer to analyze your and your colleagues health needs to provide you with the best and most personalized health benefits.',
            marks: 0,
          },
        ],
      },
    ],
  },
]


const Info = ({ onInputChange }) => {
  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm()

  return (
    <CContainer
      className="my-5 "
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CForm >
        {/* <CRow className="mb-3"> */}
        <CRow className="mb-3">
          <CCol md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Date</CFormLabel>
              <CFormInput
                style={{ ...styles.input, width: '300px' }}
                type="date"
                onChange={(e) => onInputChange('date', e.target.value)}
              />
              <CFormFeedback invalid>{errors.date?.message}</CFormFeedback>
            </div>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CCol md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>First Name</CFormLabel>
              <CFormInput
                style={styles.input}
                type="text"
                onChange={(e) => onInputChange('firstName', e.target.value)}

              />
              <CFormFeedback invalid>{errors.firstName?.message}</CFormFeedback>
            </div>
          </CCol>
          <CCol md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Last Name</CFormLabel>
              <CFormInput
                style={styles.input}
                type="text"
                onChange={(e) => onInputChange('lastName', e.target.value)}
              />
              <CFormFeedback invalid>{errors.lastName?.message}</CFormFeedback>
            </div>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CCol md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Company Name</CFormLabel>
              <CFormInput style={styles.input} type="text" 
                              onChange={(e) => onInputChange('companyName', e.target.value)}
                              />
            </div>
          </CCol>

          <CCol md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Occupation</CFormLabel>
              <CFormInput style={styles.input} type="text"
                              onChange={(e) => onInputChange('occupation', e.target.value)}
                              />
            </div>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CCol md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Date of Birth</CFormLabel>
              <CFormInput
                style={styles.input}
                type="date"
                onChange={(e) => onInputChange('dob', e.target.value)}
              />
              <CFormFeedback invalid>{errors.dob?.message}</CFormFeedback>
            </div>
          </CCol>
          <CCol md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Gender</CFormLabel>
              <CFormSelect
                style={styles.input}
                aria-label="Default select example"
                options={[
                  'Open this select menu',
                  { label: 'Male', value: '1' },
                  { label: 'Female', value: '2' },
                ]}
                onChange={(e) => onInputChange('firstName', e.target.value)}
              />
              <CFormFeedback invalid>{errors.gender?.message}</CFormFeedback>
            </div>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CCol md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Weight (in Kg)</CFormLabel>
              <CFormInput
                style={styles.input}
                type="number"
                onChange={(e) => onInputChange('weight', e.target.value)}
              />
              <CFormFeedback invalid>{errors.weight?.message}</CFormFeedback>
            </div>
          </CCol>
          <CCol md={6}>
            <div className="mb-3" style={styles.inputCon}>
              <CFormLabel style={styles.title}>Height (in cm)</CFormLabel>
              <CFormInput
                style={styles.input}
                type="number"
                onChange={(e) => onInputChange('height', e.target.value)}
              />
              <CFormFeedback invalid>{errors.height?.message}</CFormFeedback>
            </div>
          </CCol>
          <text style={{ ...styles.title, textAlign: 'left', fontSize: 16, fontWeight: 500 }}>
            Table for BMI formula calculation and ranges given below
          </text>
        </CRow>
      </CForm>
    </CContainer>
  );
};

const DynamicForm = () => {
  const [responses, setResponses] = useState({});
  const [totalMarks, setTotalMarks] = useState(null);
  const [currentTab, setCurrentTab] = useState(0);
  const tabsContainerRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });


  const scrollLeft = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  // Function to scroll the tabs to the right
  const scrollRight = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };


  // Handle input changes for various question types including Info component
  const handleInputChange = (field, value) => {
    setResponses((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let marks = 0;

    // Calculate marks for questions
    formStructure.forEach((section) => {
      section.questions.forEach((question) => {
        const response = responses[question.id];

        if (question.questionType === 'mcq' && response) {
          marks += response; // MCQ marks
        } else if (question.questionType === 'multicheck' && response) {
          marks += response.reduce((sum, mark) => sum + mark, 0); // Sum multicheck marks
        } else if (question.questionType === 'text' && response) {
          marks += question.marks; // Assign full marks for text response
        }
      });
    });

    setTotalMarks(marks);
    console.log('Total Marks:', marks);
    console.log('Responses:', responses);
  };

  const handleTabClick = (index) => {
    setCurrentTab(index);
  };

  const onTabClick = (e, index) => {
    console.log(e);
    setCurrentTab(index);
  };
  

  return (
    < >
      {/* Tab navigation */}
      <CRow style={{ ...styles.tabsWrapper }}>
  {/* Tabs Container */}
  <div
    ref={tabsContainerRef}
    style={{
      display: 'flex',
      overflowX: isMobile ? 'scroll' : 'hidden', // Enable scrolling on mobile view
      whiteSpace: 'nowrap',  // Keep tabs in a single row
      width: '100%',         // Make sure the container is 100% width
    }}
  >
    <Tabs activeTab={currentTab} onTabClick={onTabClick}     navBtnStyle={{backgroundColor:Color.primary,border:'none'}}	>
      {/* Generating an array to loop through it */}
      {formStructure.map((item, index) => (
        <Tab
          key={item.subheading}
          style={{
            backgroundColor: currentTab === index ? Color.primary : 'white', // Active tab background color
            color: currentTab === index ? 'white' : 'black',          // Active tab text color
            padding: '10px 20px', // Padding for the tabs
            cursor: 'pointer',
            margin: '0 5px',      // Add margin between tabs
            borderRadius: 0,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            transition: 'background-color 0.3s ease',
            flexShrink: 0,        // Prevent shrinking when resizing
          }}
        >
          {item.subheading}
        </Tab>
      ))}
    </Tabs>
  </div>
</CRow>
    
      <CContainer
        style={{
          boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
          borderWidth: 0,
          borderRadius: 10,
          textAlign: 'left',
          marginTop: 40,
        }}
      >
        <CRow>
          <CCol className="mb-5 mt-5">
            <text style={{ ...styles.answerFont, fontSize: 16, paddingLeft: 50, marginTop: 10 }}>
              Note: Please skip questions that do not apply to you.
            </text>
          </CCol>
        </CRow>

        {/* Form content */}
        <form onSubmit={handleSubmit}>
          {formStructure.slice(currentTab, currentTab + 1).map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {/* First Tab for Personal Info */}
              {currentTab === 0 && <Info onInputChange={handleInputChange} />}

              {/* Render questions */}
              {section.questions.map((question) => (
                <div key={question.id} style={{ paddingLeft: 50, marginTop: 10 }}>
                  <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 14 }}>
                    {question.questionText}
                  </p>

                  {question.questionType === 'mcq' && (
                    <CCol xs={12}>
                      {question.options.map((option, index) => (
                        <label key={index} style={styles.answerFont}>
                          <input
                          style={{marginRight:10}}
                            type="radio"
                            name={`question-${question.id}`}
                            value={option.answer}
                            onChange={() => handleInputChange(question.id, option.marks)}
                          />
                          {option.answer}
                        </label>
                      ))}
                    </CCol>
                  )}

                  {question.questionType === 'text' && (
                    <textarea
                      style={styles.answerText}
                      name={`question-${question.id}`}
                      onChange={(e) => handleInputChange(question.id, e.target.value)}
                    />
                  )}

                  {question.questionType === 'multicheck' && (
                    <CCol style={{ marginTop: 10 }}>
                      {question.options.map((option, index) => (
                        <label key={index} style={styles.answerFont}>
                          <input
                            style={{marginRight:10}}
                            type="checkbox"
                            name={`question-${question.id}`}
                            value={option.answer}
                            onChange={(e) => {
                              const currentMarks = responses[question.id] || [];
                              handleInputChange(
                                question.id,
                                e.target.checked
                                  ? [...currentMarks, option.marks]
                                  : currentMarks.filter((mark) => mark !== option.marks)
                              );
                            }}
                          />
                          {option.answer}
                        </label>
                      ))}
                    </CCol>
                  )}
                </div>
              ))}
            </div>
          ))}

          <div className="d-flex justify-content-end">
            {currentTab === formStructure.length - 1 ? (
              <CButton
                style={{ backgroundColor: '#0048ff', color: 'white' }}
                type="submit"
                className="mb-3 mt-3"
              >
                Submit
              </CButton>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100vw' }}>
                  <CButton
                    style={{ backgroundColor: '#0048ff', color: 'white' }}
                    type="button"
                    onClick={() => handleTabClick(currentTab + 1)}
                    className="mb-3 mt-3"
                  >
                    Skip
                  </CButton>

                  <CButton
                    style={{ backgroundColor: '#0048ff', color: 'white' }}
                    type="button"
                    onClick={() => handleTabClick(currentTab + 1)}
                    className="mb-3 mt-3"
                  >
                    Next
                  </CButton>
                </div>
              </>
            )}
          </div>
        </form>

        {/* Show total marks if form is submitted */}
        {totalMarks !== null && (
          <div>
            <h2>Your Total Marks: {totalMarks}</h2>
          </div>
        )}
      </CContainer>
    </>
  );
};

export default DynamicForm;