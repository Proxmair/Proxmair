import React from 'react'
import Link from "next/link";
import Dropdown from './Dropdown.jsx';
import Modal from './Modal.jsx';
import Drawer from './Drawer.jsx';
import { BsFillChatDotsFill } from 'react-icons/bs'
import NotificationIcon from './NotificationIcon.jsx';
import DayNightIcon from './DayNightIcon.jsx'
import { PiGameControllerFill } from 'react-icons/pi'
import SearchBox from './SearchBox.jsx'
import SearchModalBtn from './modalbutton/SearchModalBtn.jsx';
import Profile from './Profile.jsx'
import Toast from './Toast.jsx';
const Navbar = () => {
  return (
    <div className="navbar bg-primary h-24">
      <Toast />
      <div className="navbar-start">
        <Drawer />
      </div>
      <div className='navbar-center'>
        <Modal
          modalBtn={<SearchModalBtn />}
          modalId="searchbox-modal-id"
          isModalTop={true}>
          <SearchBox />
        </Modal>
      </div>
      <div className='navbar-end' >
        <Dropdown icon={<PiGameControllerFill className='text-gray-300 text-2xl' />} dropdownEnd={true} >
          <li><Link href={'/'}>Homepage</Link></li>
          <li><Link href={'/chats'}>Chats</Link></li>
          <li><Link href={'/about'}>About</Link></li>
        </Dropdown>
        <Dropdown icon={<BsFillChatDotsFill className='text-gray-300 text-2xl' />} dropdownEnd={true} >
          <li><Link href={'/friend'}>Friends</Link></li>
          <li><Link href={'/group'}>Groups</Link></li>
          <li><Link href={'/help'}>Helper Staff</Link></li>
        </Dropdown>
        <DayNightIcon />
        <Dropdown icon={<NotificationIcon totalNotice={0} />} dropdownEnd={true} >
        </Dropdown>
        <Profile />
      </div>
    </div>
  )
}

export default Navbar