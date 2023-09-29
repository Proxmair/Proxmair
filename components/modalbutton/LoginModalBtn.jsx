"use client"
const LoginModalBtn = () => {
  return (
    <li><p className='hover:cursor-pointer'
      onClick={() => document.getElementById("login-modal-id").showModal()} >Log in
    </p></li>
  )
}

export default LoginModalBtn