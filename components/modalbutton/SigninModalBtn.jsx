"use client"

const SigninModalBtn = () => {
  return (
    <li><p className='hover:cursor-pointer'
      onClick={() => document.getElementById("signin-modal-id").showModal()} >Sign up
    </p></li>
  )
}

export default SigninModalBtn