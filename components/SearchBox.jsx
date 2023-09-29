import { BiSearchAlt2 } from 'react-icons/bi'
const SearchBox = () => {
  return (
    <div className='text-center flex items-center justify-center h-16 w-1/2 m-auto rounded-full shadow-md' >
        <BiSearchAlt2 className='text-gray-400 h-16 w-16 px-5 btn btn-ghost rounded-l-full' />
        <input className='w-full h-full rounded-r-full pl-2 outline-none border-l-2'  type="text" name="query" placeholder="Search..."/>
    </div>
  )
}

export default SearchBox