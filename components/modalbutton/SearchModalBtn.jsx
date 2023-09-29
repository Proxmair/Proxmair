"use client"
import React from 'react'
import { BsSearch } from 'react-icons/bs'
const SearchModalBtn = () => {
  return (
    <button className=" bg-secondary border-none w-80 btn rounded-full shadow" onClick={() => document.getElementById("searchbox-modal-id").showModal()}>
    <BsSearch className='text-gray-900 text-lg' />
    <p className='text-xs text-gray-900 lowercase'>Search any game or gamer  .. </p>
  </button>
  )
}

export default SearchModalBtn