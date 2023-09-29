"use client"
import React from 'react'

const SearchFriendModalBtn = () => {
  return (
    <button onClick={() => document.getElementById("searchfriend-modal-id").showModal()} className='btn bg-secondary border-none rounded-full btn-sm'><p className='text-xs' >Add Friend</p></button>
  )
}

export default SearchFriendModalBtn
