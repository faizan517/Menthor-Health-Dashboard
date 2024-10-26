// import React, { useState } from 'react'
// import { CButton, CContainer, CRow, CCol } from '@coreui/react'
// import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
// import { useMediaQuery } from 'react-responsive'
// import { useForm, Controller } from 'react-hook-form'
// import QuestionRenderer from './QuestionRenderer'
// import Info from '../../components/Info'
// // import formStructure from './formStructure' // Import your form structure data
// import './style.css' // Style

// const formStructure = [
//     {
//       subheading: 'Personal Information',
//       questions: [
//         {
//           id: 'dob',
//           questionText: 'Enter your date of birth',
//           questionType: 'text',
//         },
//         {
//           id: 'firstName',
//           questionText: 'Enter your first name',
//           questionType: 'text',
//         },
//         {
//           id: 'lastName',
//           questionText: 'Enter your last name',
//           questionType: 'text',
//         },
//       ],
//     },
//     {
//       subheading: 'Personal Health Habits',
//       questions: [
//         {
//           id: 'exercise',
//           questionText: 'How frequently do you exercise?',
//           questionType: 'mcq',
//           options: [
//             { answer: 'Never', marks: 1 },
//             { answer: 'Sometimes', marks: 2 },
//             { answer: 'Frequently', marks: 3 },
//           ],
//         },
//       ],
//     },
//   ]
  

// const DynamicForm = () => {
//   const { control, handleSubmit } = useForm()
//   const [currentTab, setCurrentTab] = useState(0)
//   const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

//   const onSubmit = (data) => {
//     console.log('Form Submitted:', data)
//     // Process form data here
//   }

//   const handleTabClick = (index) => {
//     setCurrentTab(index)
//   }

//   return (
//     <CContainer className="form-container">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Info Tab (Personal Information) */}
//         {currentTab === 0 && <Info control={control} />}
        
//         {/* Other Sections */}
//         {formStructure.slice(currentTab, currentTab + 1).map((section, sectionIndex) => (
//           <div key={sectionIndex}>
//             {section.questions.map((question) => (
//               <QuestionRenderer key={question.id} question={question} control={control} />
//             ))}
//           </div>
//         ))}

//         {/* Navigation Buttons */}
//         <div className="d-flex justify-content-between">
//           {currentTab > 0 && (
//             <CButton type="button" onClick={() => handleTabClick(currentTab - 1)}>
//               Previous
//             </CButton>
//           )}

//           {currentTab < formStructure.length - 1 ? (
//             <CButton type="button" onClick={() => handleTabClick(currentTab + 1)}>
//               Next
//             </CButton>
//           ) : (
//             <CButton type="submit">Submit</CButton>
//           )}
//         </div>
//       </form>
//     </CContainer>
//   )
// }

// export default DynamicForm
