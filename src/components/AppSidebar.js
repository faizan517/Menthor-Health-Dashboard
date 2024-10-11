import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CHeader,
  CHeaderNav,
  CNavItem,
  CNavLink,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logo } from 'src/assets/brand/logo'
import { sygnet } from 'src/assets/brand/sygnet'
import menthorHealth from '../assets/brand/mentorhealth.png'
// import mentorImage from '../../../assets/brand/mentorhealth2.png' // Import the image here

// sidebar nav config
import navigation from '../_nav'
import { AppHeaderDropdown } from './header'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      className="border-end"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarHeader
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        {/* <div style={{height:100}}></div> */}
        <CSidebarBrand to="/">
          <img src={menthorHealth} alt="Mentor Health" height={50} />
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader >
      <AppSidebarNav items={navigation} />
      <CHeaderNav style={{marginLeft:10}}>
          <AppHeaderDropdown />
      <CNavItem>
            <CNavLink href="#" style={{padding:6}}>Jhon Sam</CNavLink>
          </CNavItem>
        </CHeaderNav>
      {/* <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter> */}
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
